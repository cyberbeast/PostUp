import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store, select } from '@ngrx/store';
import * as fromStore from '../store';
import { SelectedPost } from '../models/post.model';
import { Comment } from '../models/comment.model';

import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  postId: string;
  selectedPost$: Observable<SelectedPost>;
  allComments$: Observable<Comment[]>;
  history: any[] = [];
  commentNavHistory: string[];
  selectedComment: Comment;
  currentParent: string;
  commentValue = '';
  currentUser$: Observable<User>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromStore.AppState>
  ) {
    this.selectedPost$ = store.select(fromStore.getSelectedPost);
    this.allComments$ = store.select(fromStore.getAllComments);
    store
      .select(fromStore.getSelectedComment)
      .subscribe(selectedComment => (this.selectedComment = selectedComment));
    store.select(fromStore.getCurrentNavHistorySetting).subscribe(history => {
      this.commentNavHistory = history;
    });
    store
      .select(fromStore.getCurrentParentElementSetting)
      .subscribe(p => (this.currentParent = p));
    store.dispatch(new fromStore.SetShowCreatePostButton(false));

    this.currentUser$ = store.select(fromStore.getCurrentUser);
  }

  createComment(comment: string) {
    this.commentValue = '';
    this.store.dispatch(
      new fromStore.CreateNewComment({
        parent: this.currentParent,
        comment: comment,
        timestamp: new Date().toISOString()
      })
    );
  }

  deleteComment(id: string) {
    console.log('Deleting... ', id);
    this.store.dispatch(new fromStore.DeleteComment(id));
    this.store.dispatch(new fromStore.SelectComment(id));
    this.store.dispatch(new fromStore.FetchComments());
  }

  previous() {
    this.store.dispatch(new fromStore.PopParent());
    var prev = this.commentNavHistory[this.commentNavHistory.length - 1];
    this.store.dispatch(new fromStore.PopParent());
    this.setParent(prev);
  }

  setParent(parent: string) {
    console.log(this.commentNavHistory);
    this.store.dispatch(new fromStore.PushParent(parent));
    this.store.dispatch(new fromStore.SelectComment(parent));
    this.store.dispatch(new fromStore.FetchComments());
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.postId = params.get('id');
      this.store.dispatch(new fromStore.SelectPost(params.get('id')));
      this.setParent(params.get('id'));
    });
  }
}
