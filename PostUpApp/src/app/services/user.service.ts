import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { Observable } from 'rxjs/Observable';
import { catchError, map, mergeMap } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { User } from './../models/user.model';
import { error } from 'util';
import { from } from 'rxjs/observable/from';

@Injectable()
export class UserService {
  constructor(private http: HttpClient, private apollo: Apollo) {}

  fetchUser(): Observable<any> {
    return this.apollo
      .query({
        query: gql`
          {
            me {
              id
              firstName
              lastName
              profileImage
            }
          }
        `
      })
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  logout() {
    return this.http
      .get('/auth/logout')
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
