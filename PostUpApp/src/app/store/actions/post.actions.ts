import { Action } from '@ngrx/store';

import { Post, NewPost, SelectedPost } from '../../models/post.model';

export const FETCH_ALL_POSTS = '[Posts] Fetch All';
export const FETCH_ALL_POSTS_SUCCESS = '[Posts] Fetch All Success';
export const FETCH_ALL_POSTS_FAIL = '[Posts] Fetch All Fail';
export const APPEND_NEW_POST = '[Posts] Append New';
export const CREATE_NEW_POST = '[Posts] Create New';
export const CREATE_NEW_POST_SUCCESS = '[Posts] Create New Success';
export const CREATE_NEW_POST_FAIL = '[Posts] Create New Fail';
export const SELECT_POST = '[Posts] Select Post';
export const SELECT_POST_SUCCESS = '[Posts] Select Post Success';
export const SELECT_POST_FAIL = '[Posts] Select Post Fail';

export class FetchAllPosts implements Action {
  readonly type = FETCH_ALL_POSTS;
  constructor() {}
}

export class FetchAllPostsSuccess implements Action {
  readonly type = FETCH_ALL_POSTS_SUCCESS;
  constructor(public payload: Post[]) {}
}

export class FetchAllPostsFail implements Action {
  readonly type = FETCH_ALL_POSTS_FAIL;
  constructor(public payload: any) {}
}

export class AppendNewPost implements Action {
  readonly type = APPEND_NEW_POST;
  constructor(public payload: Post) {}
}

export class CreateNewPost implements Action {
  readonly type = CREATE_NEW_POST;
  constructor(public payload: NewPost) {}
}

export class CreateNewPostSuccess implements Action {
  readonly type = CREATE_NEW_POST_SUCCESS;
  constructor() {}
}

export class CreateNewPostFail implements Action {
  readonly type = CREATE_NEW_POST_FAIL;
  constructor(public payload: any) {}
}

export class SelectPost implements Action {
  readonly type = SELECT_POST;
  constructor(public payload: string) {}
}

export class SelectPostSuccess implements Action {
  readonly type = SELECT_POST_SUCCESS;
  constructor(public payload: SelectedPost) {}
}

export class SelectPostFail implements Action {
  readonly type = SELECT_POST_FAIL;
  constructor(public payload: any) {}
}
// Post action types
export type PostAction =
  | FetchAllPosts
  | FetchAllPostsSuccess
  | FetchAllPostsFail
  | AppendNewPost
  | CreateNewPost
  | CreateNewPostSuccess
  | CreateNewPostFail
  | SelectPost
  | SelectPostSuccess
  | SelectPostFail;
