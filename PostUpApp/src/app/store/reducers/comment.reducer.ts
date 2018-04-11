import { Comment } from '../../models/comment.model';
import { InitialState } from '@ngrx/store/src/models';

import * as actionsFromComment from '../actions/comment.actions';

export interface CommentState {
  // allComments: Comment[];
  selectedComment: Comment;
  entities: { [id: string]: Comment };
}

export const initialState: CommentState = {
  entities: {},
  // allComments: null,
  selectedComment: null
};

export function reducer(
  state = initialState,
  action: actionsFromComment.CommentAction
): CommentState {
  switch (action.type) {
    case actionsFromComment.FETCH_COMMENTS: {
      return {
        ...state
      };
    }

    case actionsFromComment.FETCH_COMMENTS_SUCCESS: {
      const comments = action.payload;
      const entities = comments.reduce(
        (entities: { [id: string]: Comment }, comment: Comment) => {
          return {
            ...entities,
            [comment.id]: comment
          };
        },
        {
          ...state.entities
        }
      );

      return {
        ...state,
        entities
      };
    }

    case actionsFromComment.FETCH_COMMENTS_FAIL: {
      return {
        ...state
      };
    }

    case actionsFromComment.APPEND_NEW_COMMENT: {
      const comment = action.payload;
      var parent = comment.parent;
      var newObject = {};

      while (state.entities[parent] !== undefined) {
        console.log('PARENT IS: ', state.entities[parent]);
        newObject = Object.assign(newObject, {
          [parent]: {
            ...state.entities[parent],
            replyCount: state.entities[parent].replyCount + 1
          }
        });
        parent = state.entities[parent].parent;
      }

      // console.log(newObject);

      // const entities = Object.assign({}, state.entities, newObject, {
      //   [comment.id]: comment
      // });

      const entities = {
        ...state.entities,
        ...newObject,
        [comment.id]: comment
      };
      // console.log(entities);

      console.log({
        ...state,
        entities
      });

      return {
        ...state,
        entities
      };
    }

    case actionsFromComment.SELECT_COMMENT: {
      var temp = null;
      if (state.entities[action.payload] !== undefined) {
        temp = state.entities[action.payload];
      }
      return {
        ...state,
        selectedComment: temp
      };
    }
  }
  return state;
}

export const getAllCommentEntities = (state: CommentState) => state.entities;
export const getSelectedComment = (state: CommentState) =>
  state.selectedComment;
