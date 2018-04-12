import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Apollo, QueryRef } from 'apollo-angular';

import { Observable } from 'rxjs/Observable';
import { catchError, map, mergeMap } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { User } from './../models/user.model';
import { error } from 'util';
import { from } from 'rxjs/observable/from';

import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import { Post, SelectedPost } from '../models/post.model';

import * as queries from './queries';

@Injectable()
export class PostService {
  allPostsQuery: QueryRef<any>;
  allCommentsQuery: QueryRef<any>;
  currentParent: string;
  currentCommentNavHistory: string[];
  selectedPost: SelectedPost;

  constructor(
    private http: HttpClient,
    private apollo: Apollo,
    private store: Store<fromStore.AppState>
  ) {
    store.select(fromStore.getCurrentParentElementSetting).subscribe(parent => {
      this.currentParent = parent;
    });

    store.select(fromStore.getCurrentNavHistorySetting).subscribe(history => {
      this.currentCommentNavHistory = history;
    });

    store.select(fromStore.getSelectedPost).subscribe(v => {
      this.selectedPost = v;
    });
  }

  selectPost(id: string): Observable<any> {
    return this.apollo
      .watchQuery({
        query: queries.SELECT_POST,
        variables: {
          id: id
        }
      })
      .valueChanges.pipe(
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  fetchPostsAndSubscribeToUpdates(): Observable<any> {
    this.allPostsQuery = this.apollo.watchQuery({
      query: queries.fetchPosts
    });

    this.allPostsQuery.subscribeToMore({
      document: queries.NEW_POSTS_CREATED_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return prev;
        }

        const newPost = subscriptionData.data.newPostCreated;

        this.store.dispatch(new fromStore.AppendNewPost(newPost));
      }
    });
    return this.allPostsQuery.valueChanges.pipe(
      catchError((error: any) => Observable.throw(error.json()))
    );
  }

  deleteComment(id: string): Observable<any> {
    return this.apollo
      .mutate({
        mutation: queries.DELETE_COMMENT_MUTATION,
        variables: {
          id: id
        }
      })
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  createPost(newPost): Observable<any> {
    return this.apollo
      .mutate({
        mutation: queries.CREATE_POST_MUTATION,
        variables: {
          newPost: newPost
        }
      })
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  createComment(newComment): Observable<any> {
    return this.apollo.mutate({
      mutation: queries.CREATE_COMMENT_MUTATION,
      variables: {
        newComment: newComment,
        post: this.selectedPost.id
      }
    });
  }

  getSelectedPostId(): any {
    var return_id: string;
  }

  fetchCommentsAndSubscribeToUpdates(): Observable<any> {
    this.allCommentsQuery = this.apollo.watchQuery({
      query: queries.GET_COMMENTS,
      variables: {
        id: this.currentParent
      }
    });

    this.store.select(fromStore.getSelectedPost).subscribe(v => {
      if (v !== null) {
        this.allCommentsQuery.subscribeToMore({
          document: queries.NEW_COMMENT_ADDED_SUBSCRIPTION,
          variables: {
            post: v.id
          },
          updateQuery: (prev, { subscriptionData }) => {
            console.log('REC: New Comment');
            if (!subscriptionData.data) {
              return prev;
            }
            const newComment = subscriptionData.data.newCommentCreated;
            this.store.dispatch(new fromStore.AppendNewComment(newComment));
          }
        });
      }
    });
    return this.allCommentsQuery.valueChanges.pipe(
      catchError((error: any) => Observable.throw(error.json()))
    );
  }
}
