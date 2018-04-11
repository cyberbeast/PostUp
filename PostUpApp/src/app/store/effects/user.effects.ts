import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { defer } from 'rxjs/observable/defer';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { from } from 'rxjs/observable/from';

import { map, switchMap, catchError, mergeMap } from 'rxjs/operators';

import * as allActions from '../actions';
import * as fromServices from '../../services';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: fromServices.UserService
  ) {}

  @Effect()
  fetchUser$ = this.actions$.ofType(allActions.FETCH_USER).pipe(
    switchMap((action: allActions.UserAction) => {
      console.log('IN HERE');
      return this.userService.fetchUser().pipe(
        mergeMap(currentUser => {
          return from([
            new allActions.FetchUserSuccess(currentUser.data['me'])
          ]);
        }),
        catchError(error => {
          console.log(JSON.stringify(error));
          return of(new allActions.FetchUserFail(error));
        })
      );
    })
  );

  @Effect()
  userLogout$ = this.actions$.ofType(allActions.USER_LOGOUT).pipe(
    switchMap((action: allActions.UserAction) => {
      return this.userService
        .logout()
        .pipe(
          map(() => new allActions.UserLogoutSuccess()),
          catchError(error => of(new allActions.UserLogoutFail(error)))
        );
    })
  );
}
