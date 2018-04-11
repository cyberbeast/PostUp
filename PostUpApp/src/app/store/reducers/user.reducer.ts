import { User } from '../../models/user.model';
import { InitialState } from '@ngrx/store/src/models';

import * as actionsFromUser from '../actions/user.actions';

export interface UserState {
  currentUser: User;
}

export const initialState: UserState = {
  currentUser: {
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    profileImage: ''
  }
};

export function reducer(
  state = initialState,
  action: actionsFromUser.UserAction
): UserState {
  switch (action.type) {
    case actionsFromUser.FETCH_USER: {
      return {
        ...state
      };
    }

    case actionsFromUser.FETCH_USER_SUCCESS: {
      return {
        ...state,
        currentUser: action.payload
      };
    }

    case actionsFromUser.FETCH_USER_FAIL: {
      return {
        ...state
      };
    }

    case actionsFromUser.USER_LOGOUT: {
      return {
        ...state
      };
    }

    case actionsFromUser.USER_LOGOUT_SUCCESS: {
      return initialState;
    }

    case actionsFromUser.USER_LOGOUT_FAIL: {
      return {
        ...state
      };
    }
  }
  return state;
}

export const getCurrentUser = (state: UserState) => state.currentUser;
