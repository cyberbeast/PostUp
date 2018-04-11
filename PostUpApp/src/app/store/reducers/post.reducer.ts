import { Post, SelectedPost } from '../../models/post.model';
import { InitialState } from '@ngrx/store/src/models';

import * as actionsFromPost from '../actions/post.actions';

export interface PostState {
  allPosts: Post[];
  selectedPost: SelectedPost;
}

export const initialState: PostState = {
  allPosts: [],
  selectedPost: null
};

export function reducer(
  state = initialState,
  action: actionsFromPost.PostAction
): PostState {
  switch (action.type) {
    case actionsFromPost.FETCH_ALL_POSTS: {
      return {
        ...state
      };
    }

    case actionsFromPost.FETCH_ALL_POSTS_SUCCESS: {
      return {
        ...state,
        allPosts: action.payload
      };
    }

    case actionsFromPost.FETCH_ALL_POSTS_FAIL: {
      return {
        ...state
      };
    }

    case actionsFromPost.APPEND_NEW_POST: {
      return {
        ...state,
        allPosts: [action.payload, ...state.allPosts]
      };
    }

    case actionsFromPost.CREATE_NEW_POST: {
      return {
        ...state
      };
    }

    case actionsFromPost.CREATE_NEW_POST_SUCCESS: {
      return {
        ...state
      };
    }

    case actionsFromPost.CREATE_NEW_POST_FAIL: {
      return {
        ...state
      };
    }

    case actionsFromPost.SELECT_POST: {
      return {
        ...state
      };
    }

    case actionsFromPost.SELECT_POST_SUCCESS: {
      return {
        ...state,
        selectedPost: action.payload
      };
    }

    case actionsFromPost.SELECT_POST_FAIL: {
      return {
        ...state
      };
    }
  }
  return state;
}

export const getAllPosts = (state: PostState) => state.allPosts;
export const getSelectedPost = (state: PostState) => state.selectedPost;
