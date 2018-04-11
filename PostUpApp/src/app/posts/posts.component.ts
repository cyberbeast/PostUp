import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import { Post } from '../models/post.model';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  allPosts$: Observable<Post[]>;

  constructor(
    private store: Store<fromStore.AppState>,
    private router: Router
  ) {
    this.allPosts$ = store.select(fromStore.getAllPosts);
  }

  view(id: string): void {
    this.router.navigate(['/posts', id]);
  }

  ngOnInit() {
    this.store.dispatch(new fromStore.FetchAllPosts());
  }
}
