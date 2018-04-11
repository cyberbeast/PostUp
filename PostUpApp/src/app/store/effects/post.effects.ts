import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { defer } from 'rxjs/observable/defer';
// import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { from } from 'rxjs/observable/from';

import { map, switchMap, catchError, mergeMap } from 'rxjs/operators';

import * as allPostActions from '../actions/post.actions';
import * as fromServices from '../../services';

@Injectable()
export class PostEffects {
  constructor(
    private actions$: Actions,
    private postService: fromServices.PostService
  ) {}

  @Effect()
  getSelectedPost$ = this.actions$.ofType(allPostActions.SELECT_POST).pipe(
    switchMap((action: allPostActions.SelectPost) => {
      return this.postService.selectPost(action.payload).pipe(
        map(post => {
          console.log(post);
          return new allPostActions.SelectPostSuccess(post.data.postById);
        }),
        catchError(error => {
          console.log(JSON.stringify(error));
          return of(new allPostActions.SelectPostFail(error));
        })
      );
    })
  );

  @Effect()
  createNewPost$ = this.actions$.ofType(allPostActions.CREATE_NEW_POST).pipe(
    switchMap((action: allPostActions.CreateNewPost) => {
      return this.postService.createPost(action.payload).pipe(
        map(response => new allPostActions.CreateNewPostSuccess()),
        catchError(error => {
          console.log(JSON.stringify(error));
          return of(new allPostActions.CreateNewPostFail(error));
        })
      );
    })
  );

  @Effect()
  fetchAllPosts$ = this.actions$.ofType(allPostActions.FETCH_ALL_POSTS).pipe(
    switchMap((action: allPostActions.PostAction) => {
      return this.postService.fetchPostsAndSubscribeToUpdates().pipe(
        mergeMap(posts => {
          return from([
            new allPostActions.FetchAllPostsSuccess(posts.data['allPosts'])
          ]);
        }),
        catchError(error => {
          console.log(JSON.stringify(error));
          return of(new allPostActions.FetchAllPostsFail(error));
        })
      );
    })
  );
}
