import { Action } from '@ngrx/store';

import { Comment, NewComment } from '../../models/comment.model';

export const FETCH_COMMENTS = '[Comment] Fetch Comments';
export const FETCH_COMMENTS_SUCCESS = '[Comment] Fetch Comments Success';
export const FETCH_COMMENTS_FAIL = '[Comment] Fetch Comments Fail';
export const APPEND_NEW_COMMENT = '[Comment] Append New';
export const SELECT_COMMENT = '[Comment] Select Comment';
export const CREATE_NEW_COMMENT = '[Comment] Create New';
export const CREATE_NEW_COMMENT_SUCCESS = '[Comment] Create New - Success';
export const CREATE_NEW_COMMENT_FAIL = '[Comment] Create New - Fail';
export const DELETE_COMMENT = '[Comment] Delete Comment';
export const DELETE_COMMENT_SUCCESS = '[Comment] Delete Comment - Success';
export const DELETE_COMMENT_FAIL = '[Comment] Delete Comment - Fail';

export class FetchComments implements Action {
  readonly type = FETCH_COMMENTS;
  constructor() {}
}

export class FetchCommentsSuccess implements Action {
  readonly type = FETCH_COMMENTS_SUCCESS;
  constructor(public payload: Comment[]) {}
}

export class FetchCommentsFail implements Action {
  readonly type = FETCH_COMMENTS_FAIL;
  constructor(public payload: any) {}
}

export class AppendNewComment implements Action {
  readonly type = APPEND_NEW_COMMENT;
  constructor(public payload: Comment) {}
}

export class SelectComment implements Action {
  readonly type = SELECT_COMMENT;
  constructor(public payload: string) {}
}

export class CreateNewComment implements Action {
  readonly type = CREATE_NEW_COMMENT;
  constructor(public payload: NewComment) {}
}

export class CreateNewCommentSuccess implements Action {
  readonly type = CREATE_NEW_COMMENT_SUCCESS;
  constructor() {}
}

export class CreateNewCommentFail implements Action {
  readonly type = CREATE_NEW_COMMENT_FAIL;
  constructor(public payload: any) {}
}

export class DeleteComment implements Action {
  readonly type = DELETE_COMMENT;
  constructor(public payload: string) {}
}

export class DeleteCommentSuccess implements Action {
  readonly type = DELETE_COMMENT_SUCCESS;
  constructor(public payload: Comment) {}
}

export class DeleteCommmentFail implements Action {
  readonly type = DELETE_COMMENT_FAIL;
  constructor(public payload: any) {}
}

// Comment action types
export type CommentAction =
  | FetchComments
  | FetchCommentsSuccess
  | FetchCommentsFail
  | AppendNewComment
  | SelectComment
  | CreateNewComment
  | CreateNewCommentSuccess
  | CreateNewCommentFail
  | DeleteComment
  | DeleteCommentSuccess
  | DeleteCommmentFail;
