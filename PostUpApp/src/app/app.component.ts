import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Store } from '@ngrx/store';
import * as fromStore from './store';

import { User } from './models/user.model';
import { Settings } from './models/settings.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  sidenavToggle$: Observable<boolean>;
  showCreateNewPostButton$: Observable<boolean>;
  user$: Observable<User>;

  constructor(
    private store: Store<fromStore.AppState>,
    public dialog: MatDialog
  ) {
    this.sidenavToggle$ = store.select(
      fromStore.getCurrentSidenavToggleSetting
    );

    this.user$ = store.select(fromStore.getCurrentUser);

    this.showCreateNewPostButton$ = store.select(
      fromStore.getCurrentShowCreateNewPostButtonSetting
    );
  }

  ngOnInit() {
    this.store.dispatch(new fromStore.SetShowCreatePostButton(true));
  }

  toggleSidenav(): void {
    this.store.dispatch(new fromStore.ToggleSidenav());
  }

  openNewPostDialog(): void {
    let dialogRef = this.dialog.open(NewPostDialogComponent, {
      height: '768px',
      width: '1024px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  login(): void {
    window.open('/auth/facebook/', '_self');
  }

  logout(): void {
    this.store.dispatch(new fromStore.UserLogout());
  }
}

@Component({
  selector: 'new-post-dialog',
  templateUrl: './new-post-dialog.html',
  styleUrls: ['./new-post-dialog.css']
})
export class NewPostDialogComponent {
  constructor(
    private store: Store<fromStore.AppState>,
    public dialogRef: MatDialogRef<NewPostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  createPost(title: string, content: string): void {
    this.store.dispatch(
      new fromStore.CreateNewPost({
        title: title,
        content: content,
        timestamp: new Date().toISOString()
      })
    );
    this.onNoClick();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
