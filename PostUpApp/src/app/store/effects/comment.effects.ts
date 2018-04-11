import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { defer } from 'rxjs/observable/defer';
// import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { from } from 'rxjs/observable/from';

import { map, switchMap, catchError, mergeMap } from 'rxjs/operators';

import * as allCommentActions from '../actions/comment.actions';
import * as fromServices from '../../services';

@Injectable()
export class CommentEffects {
  constructor(
    private actions$: Actions,
    private postService: fromServices.PostService
  ) {}

  @Effect()
  getAllComments$ = this.actions$.ofType(allCommentActions.FETCH_COMMENTS).pipe(
    switchMap((action: allCommentActions.FetchComments) => {
      return this.postService.fetchCommentsAndSubscribeToUpdates().pipe(
        map(comments => {
          return new allCommentActions.FetchCommentsSuccess(
            comments.data.commentsByParentId
          );
        }),
        catchError(error => {
          console.log(JSON.stringify(error));
          return of(new allCommentActions.FetchCommentsFail(error));
        })
      );
    })
  );

  @Effect()
  createNewPost$ = this.actions$
    .ofType(allCommentActions.CREATE_NEW_COMMENT)
    .pipe(
      switchMap((action: allCommentActions.CreateNewComment) => {
        return this.postService.createComment(action.payload).pipe(
          map(response => new allCommentActions.CreateNewCommentSuccess()),
          catchError(error => {
            console.log(JSON.stringify(error));
            return of(new allCommentActions.CreateNewCommentFail(error));
          })
        );
      })
    );
}
