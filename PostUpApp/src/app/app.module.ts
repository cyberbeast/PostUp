import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Apollo
import { GraphQLModule } from './graphql.module';

// ngrx main imports
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Angular Material imports
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';

import { AppComponent, NewPostDialogComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

// service imports
import * as fromServices from './services';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: '#_%3D_', redirectTo: '/posts', pathMatch: 'full' },
  { path: '#_=_', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent },
  {
    path: 'posts/:id',
    component: PostDetailComponent
  }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  entryComponents: [NewPostDialogComponent],
  declarations: [
    AppComponent,
    NavbarComponent,
    NewPostDialogComponent,
    PostsComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatGridListModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatListModule,
    GraphQLModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    StoreModule.forRoot({}),
    StoreModule.forFeature('app', reducers),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    })
  ],
  providers: [fromServices.services],
  bootstrap: [AppComponent]
})
export class AppModule {}
