import { Action } from '@ngrx/store';

import { User } from '../../models/user.model';

export const FETCH_USER = '[User] Fetch';
export const FETCH_USER_SUCCESS = '[User] Fetch Success';
export const FETCH_USER_FAIL = '[User] Fetch Fail';

export class FetchUser implements Action {
  readonly type = FETCH_USER;
  constructor() {}
}

export class FetchUserSuccess implements Action {
  readonly type = FETCH_USER_SUCCESS;
  constructor(public payload: User) {}
}

export class FetchUserFail implements Action {
  readonly type = FETCH_USER_FAIL;
  constructor(public payload: any) {}
}

export const USER_LOGOUT = '[User] Logout';
export const USER_LOGOUT_SUCCESS = '[User] Logout Success';
export const USER_LOGOUT_FAIL = '[User] Logout Fail';

export class UserLogout implements Action {
  readonly type = USER_LOGOUT;
  constructor() {}
}

export class UserLogoutSuccess implements Action {
  readonly type = USER_LOGOUT_SUCCESS;
  constructor() {}
}

export class UserLogoutFail implements Action {
  readonly type = USER_LOGOUT_FAIL;
  constructor(public payload: any) {}
}

// User action types
export type UserAction =
  | FetchUser
  | FetchUserSuccess
  | FetchUserFail
  | UserLogout
  | UserLogoutSuccess
  | UserLogoutFail;
