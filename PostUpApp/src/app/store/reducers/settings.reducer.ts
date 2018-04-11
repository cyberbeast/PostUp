import { Settings } from '../../models/settings.model';
import { InitialState } from '@ngrx/store/src/models';
import { merge } from 'lodash';

import * as actionsFromSettings from '../actions/settings.actions';

export interface SettingsState {
  SETTING_sidenavToggle: boolean;
  SETTING_currentParentElement: string;
  SETTING_showCreateNewPostButton: boolean;
  SETTING_commentNavHistory: string[];
}

export const initialState: SettingsState = {
  SETTING_sidenavToggle: false,
  SETTING_currentParentElement: null,
  SETTING_showCreateNewPostButton: false,
  SETTING_commentNavHistory: []
};

export function reducer(
  state = initialState,
  action: actionsFromSettings.SettingsAction
): SettingsState {
  switch (action.type) {
    case actionsFromSettings.TOGGLE_SIDENAV: {
      return {
        ...state,
        SETTING_sidenavToggle:
          state.SETTING_sidenavToggle == false ? true : false
      };
    }

    case actionsFromSettings.PUSH_PARENT: {
      return {
        ...state,
        SETTING_currentParentElement: action.payload,
        SETTING_commentNavHistory: [
          ...state.SETTING_commentNavHistory,
          action.payload
        ]
      };
    }

    case actionsFromSettings.POP_PARENT: {
      return {
        ...state,
        SETTING_currentParentElement: state.SETTING_commentNavHistory.filter(
          (v, idx) => idx == state.SETTING_commentNavHistory.length - 1
        )[0],
        SETTING_commentNavHistory: state.SETTING_commentNavHistory.filter(
          (v, idx) => idx !== state.SETTING_commentNavHistory.length - 1
        )
      };
    }

    case actionsFromSettings.SET_SHOW_CREATE_POST_BUTTON: {
      return {
        ...state,
        SETTING_showCreateNewPostButton: action.payload
      };
    }
  }
  return state;
}

export const getSettingSidenavToggle = (state: SettingsState) => {
  return state.SETTING_sidenavToggle;
};

export const getSettingCurrentParentElement = (state: SettingsState) => {
  return state.SETTING_currentParentElement;
};

export const getSettingCurrentShowCreatePostButton = (state: SettingsState) => {
  return state.SETTING_showCreateNewPostButton;
};

export const getSettingCurrentCommentNavHistory = (state: SettingsState) => {
  return state.SETTING_commentNavHistory;
};
