import { Action } from '@ngrx/store';

import { Settings } from '../../models/settings.model';

export const TOGGLE_SIDENAV = '[Settings] Toggle Sidenav';
export const PUSH_PARENT =
  '[Settings] Push Parent Element onto Comment Nav History Stack';
export const POP_PARENT =
  '[Settings] Pop Parent Element from Comment Nav History Stack';
export const SET_SHOW_CREATE_POST_BUTTON =
  '[Settings] Set Show Create Post Button';

export class ToggleSidenav implements Action {
  readonly type = TOGGLE_SIDENAV;
  constructor() {}
}

export class PushParent implements Action {
  readonly type = PUSH_PARENT;
  constructor(public payload: string) {}
}

export class PopParent implements Action {
  readonly type = POP_PARENT;
  constructor() {}
}

export class SetShowCreatePostButton implements Action {
  readonly type = SET_SHOW_CREATE_POST_BUTTON;
  constructor(public payload: boolean) {}
}

// Settings Action Types
export type SettingsAction =
  | ToggleSidenav
  | PushParent
  | PopParent
  | SetShowCreatePostButton;
