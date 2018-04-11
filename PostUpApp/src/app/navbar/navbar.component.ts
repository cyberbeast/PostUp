import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import * as fromStore from './../store';
import { User } from './../models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user$: Observable<User>;

  constructor(private store: Store<fromStore.AppState>) {
    this.user$ = store.select(fromStore.getCurrentUser);
  }

  toggleSidenav(): void {
    this.store.dispatch(new fromStore.ToggleSidenav());
  }

  login(): void {
    window.open('/auth/facebook/', '_self');
  }

  ngOnInit() {
    this.store.dispatch(new fromStore.FetchUser());
  }
}
