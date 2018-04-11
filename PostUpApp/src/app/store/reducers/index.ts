import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';

import * as fromSettings from './settings.reducer';
import * as fromUser from './user.reducer';
import * as fromPost from './post.reducer';
import * as fromComment from './comment.reducer';

export interface AppState {
  currentSettings: fromSettings.SettingsState;
  currentUser: fromUser.UserState;
  allPosts: fromPost.PostState;
  allComments: fromComment.CommentState;
}

export const reducers: ActionReducerMap<AppState> = {
  currentSettings: fromSettings.reducer,
  currentUser: fromUser.reducer,
  allPosts: fromPost.reducer,
  allComments: fromComment.reducer
};

export const getAppState = createFeatureSelector<AppState>('app');

// Current User State
export const getCurrentUserState = createSelector(
  getAppState,
  (state: AppState) => state.currentUser
);

// get current user
export const getCurrentUser = createSelector(
  getCurrentUserState,
  fromUser.getCurrentUser
);

// Current Settings State
export const getCurrentSettingsState = createSelector(
  getAppState,
  (state: AppState) => state.currentSettings
);

// get sidenavToggle Setting
export const getCurrentSidenavToggleSetting = createSelector(
  getCurrentSettingsState,
  fromSettings.getSettingSidenavToggle
);

// get current Parent Element setting
export const getCurrentParentElementSetting = createSelector(
  getCurrentSettingsState,
  fromSettings.getSettingCurrentParentElement
);

// get current Comment Nav History setting
export const getCurrentNavHistorySetting = createSelector(
  getCurrentSettingsState,
  fromSettings.getSettingCurrentCommentNavHistory
);

// get current Show Create New Post Button setting
export const getCurrentShowCreateNewPostButtonSetting = createSelector(
  getCurrentSettingsState,
  fromSettings.getSettingCurrentShowCreatePostButton
);

// Current Post State
export const getCurrentPostState = createSelector(
  getAppState,
  (state: AppState) => state.allPosts
);

// get all posts
export const getAllPosts = createSelector(
  getCurrentPostState,
  fromPost.getAllPosts
);

// get selected post
export const getSelectedPost = createSelector(
  getCurrentPostState,
  fromPost.getSelectedPost
);

// Current Comment State
export const getCurrentCommentState = createSelector(
  getAppState,
  (state: AppState) => state.allComments
);

// get all comment entities
export const getAllCommentEntities = createSelector(
  getCurrentCommentState,
  fromComment.getAllCommentEntities
);

// get all comments for currently selected parent element
export const getAllComments = createSelector(
  getAllCommentEntities,
  getCurrentParentElementSetting,
  (entities, parent) => {
    return Object.keys(entities)
      .map(id => entities[id])
      .sort((a, b) => {
        return (
          new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
        );
      })
      .filter(e => e.parent === parent);
  }
);

// get selected comment
export const getSelectedComment = createSelector(
  getCurrentCommentState,
  fromComment.getSelectedComment
);
