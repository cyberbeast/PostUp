webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: Roboto, sans-serif;\n}\n\nmd-toolbar-row {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.new-post {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  color: white;\n}\n\nmat-sidenav {\n  width: 400px;\n}\n\nmat-card {\n  width: 100%;\n  margin-bottom: 5%;\n}\n\nmat-grid-tile {\n  margin: 2%;\n}\n\nmat-grid-list {\n  margin: 2% 15% 2% 2%;\n}\n\n/* @media only screen and (max-width: 400px) {\n  mat-sidenav {\n    width: 100%;\n  }\n} */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"height:100%\">\n  <mat-sidenav-container (backdropClick)=\"toggleSidenav()\">\n\n    <mat-sidenav style=\"height:100vh; overflow-y: auto\" [opened]=\"sidenavToggle$ | async\" [mode]=\"side\" (keydown.escape)=\"toggleSidenav()\">\n\n\n      <mat-grid-list cols=\"1\" rowHeight=\"2:1\">\n        <mat-grid-tile *ngIf=\"(user$ | async) == null || (user$ | async)?.firstName===''; then loginTemplate else userOptionsTemplate\">\n        </mat-grid-tile>\n      </mat-grid-list>\n    </mat-sidenav>\n    <mat-sidenav-content style=\"height:100vh; overflow-y:auto\">\n\n      <app-navbar style=\"position:fixed; z-index:2\"></app-navbar>\n\n      <router-outlet>\n      </router-outlet>\n\n      <!-- <div *ngIf=\"!((user$ | async)?.firstName === '')\"> -->\n      <div *ngIf=\"(showCreateNewPostButton$ | async) === true && !((user$ | async)?.firstName === '')\">\n        <span class=\"new-post\" matTooltip=\"New Post!\">\n          <button mat-fab color=\"accent\" (click)=\"openNewPostDialog()\">\n            <mat-icon>create</mat-icon>\n          </button>\n        </span>\n      </div>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n\n</div>\n\n<ng-template #loginTemplate>\n  <mat-card>\n    <mat-card-title>Login Providers</mat-card-title>\n    <mat-card-subtitle>Choose from the following to login to PostUp</mat-card-subtitle>\n    <mat-card-actions>\n      <button mat-button (click)=\"login()\">Facebook</button>\n    </mat-card-actions>\n  </mat-card>\n</ng-template>\n\n<ng-template #userOptionsTemplate>\n  <mat-card>\n    <mat-card-content>\n      <div fxLayout=\"column\" fxLayoutAlign=\"space-around center\">\n        <img mat-card-avatar src=\"{{(user$ | async)?. profileImage}}\">\n        <br />\n        <mat-card-title>{{(user$ | async)?.firstName }} {{(user$ | async)?.lastName }}</mat-card-title>\n\n        <button mat-raised-button color=\"warn\" (click)=\"logout()\">LOGOUT</button>\n      </div>\n    </mat-card-content>\n  </mat-card>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NewPostDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__("../../../../../src/app/store/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AppComponent = /** @class */ (function () {
    function AppComponent(store, dialog) {
        this.store = store;
        this.dialog = dialog;
        this.title = 'app';
        this.sidenavToggle$ = store.select(__WEBPACK_IMPORTED_MODULE_3__store__["u" /* getCurrentSidenavToggleSetting */]);
        this.user$ = store.select(__WEBPACK_IMPORTED_MODULE_3__store__["v" /* getCurrentUser */]);
        this.showCreateNewPostButton$ = store.select(__WEBPACK_IMPORTED_MODULE_3__store__["t" /* getCurrentShowCreateNewPostButtonSetting */]);
    }
    AppComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["l" /* SetShowCreatePostButton */](true));
    };
    AppComponent.prototype.toggleSidenav = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["m" /* ToggleSidenav */]());
    };
    AppComponent.prototype.openNewPostDialog = function () {
        var dialogRef = this.dialog.open(NewPostDialogComponent, {
            height: '768px',
            width: '1024px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    AppComponent.prototype.login = function () {
        window.open('/auth/facebook/', '_self');
    };
    AppComponent.prototype.logout = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["n" /* UserLogout */]());
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatDialog */]])
    ], AppComponent);
    return AppComponent;
}());

var NewPostDialogComponent = /** @class */ (function () {
    function NewPostDialogComponent(store, dialogRef, data) {
        this.store = store;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    NewPostDialogComponent.prototype.createPost = function (title, content) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["d" /* CreateNewPost */]({
            title: title,
            content: content,
            timestamp: new Date().toISOString()
        }));
        this.onNoClick();
    };
    NewPostDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    NewPostDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'new-post-dialog',
            template: __webpack_require__("../../../../../src/app/new-post-dialog.html"),
            styles: [__webpack_require__("../../../../../src/app/new-post-dialog.css")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialogRef */], Object])
    ], NewPostDialogComponent);
    return NewPostDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__graphql_module__ = __webpack_require__("../../../../../src/app/graphql.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store__ = __webpack_require__("../../../../../src/app/store/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_grid_list__ = __webpack_require__("../../../material/esm5/grid-list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_tooltip__ = __webpack_require__("../../../material/esm5/tooltip.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_material_divider__ = __webpack_require__("../../../material/esm5/divider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_material_progress_spinner__ = __webpack_require__("../../../material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__posts_posts_component__ = __webpack_require__("../../../../../src/app/posts/posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__post_detail_post_detail_component__ = __webpack_require__("../../../../../src/app/post-detail/post-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Apollo

// ngrx main imports




// Angular Material imports















// service imports



var appRoutes = [
    { path: '', redirectTo: '/posts', pathMatch: 'full' },
    { path: '#_%3D_', redirectTo: '/posts', pathMatch: 'full' },
    { path: '#_=_', redirectTo: '/posts', pathMatch: 'full' },
    { path: 'posts', component: __WEBPACK_IMPORTED_MODULE_28__posts_posts_component__["a" /* PostsComponent */] },
    {
        path: 'posts/:id',
        component: __WEBPACK_IMPORTED_MODULE_29__post_detail_post_detail_component__["a" /* PostDetailComponent */]
    }
    // { path: '**', component: PageNotFoundComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            entryComponents: [__WEBPACK_IMPORTED_MODULE_25__app_component__["b" /* NewPostDialogComponent */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_25__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_26__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_25__app_component__["b" /* NewPostDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_28__posts_posts_component__["a" /* PostsComponent */],
                __WEBPACK_IMPORTED_MODULE_29__post_detail_post_detail_component__["a" /* PostDetailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material_grid_list__["a" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material_tooltip__["a" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_material_divider__["a" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_7__graphql_module__["a" /* GraphQLModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                ),
                __WEBPACK_IMPORTED_MODULE_8__ngrx_store__["j" /* StoreModule */].forRoot({}),
                __WEBPACK_IMPORTED_MODULE_8__ngrx_store__["j" /* StoreModule */].forFeature('app', __WEBPACK_IMPORTED_MODULE_10__store__["y" /* reducers */]),
                __WEBPACK_IMPORTED_MODULE_9__ngrx_effects__["c" /* EffectsModule */].forRoot([]),
                __WEBPACK_IMPORTED_MODULE_9__ngrx_effects__["c" /* EffectsModule */].forFeature(__WEBPACK_IMPORTED_MODULE_10__store__["o" /* effects */]),
                __WEBPACK_IMPORTED_MODULE_11__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument({
                    maxAge: 25,
                    logOnly: __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production // Restrict extension to log-only mode
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_27__services__["c" /* services */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_25__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/graphql.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphQLModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_angular__ = __webpack_require__("../../../../apollo-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_apollo_angular_link_http__ = __webpack_require__("../../../../apollo-angular-link-http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_apollo_cache_inmemory__ = __webpack_require__("../../../../apollo-cache-inmemory/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_apollo_link__ = __webpack_require__("../../../../apollo-link/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_apollo_utilities__ = __webpack_require__("../../../../apollo-utilities/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_apollo_link_ws__ = __webpack_require__("../../../../apollo-link-ws/lib/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Apollo






var GraphQLModule = /** @class */ (function () {
    function GraphQLModule(apollo, httpLink) {
        // Create an http link:
        var http = httpLink.create({
            uri: 'http://3287c204.ngrok.io/graphql'
        });
        // Create a WebSocket link
        var ws = new __WEBPACK_IMPORTED_MODULE_7_apollo_link_ws__["a" /* WebSocketLink */]({
            uri: "ws://3287c204.ngrok.io/subscriptions",
            options: {
                reconnect: true
            }
        });
        // using the ability to split links, you can send data to each link
        // depending on what kind of operation is being sent
        var link = Object(__WEBPACK_IMPORTED_MODULE_5_apollo_link__["d" /* split */])(
        // split based on operation type
        function (_a) {
            var query = _a.query;
            var _b = Object(__WEBPACK_IMPORTED_MODULE_6_apollo_utilities__["i" /* getMainDefinition */])(query), kind = _b.kind, operation = _b.operation;
            return kind === 'OperationDefinition' && operation === 'subscription';
        }, ws, http);
        // create Apollo
        apollo.create({
            link: link,
            cache: new __WEBPACK_IMPORTED_MODULE_4_apollo_cache_inmemory__["a" /* InMemoryCache */]()
        });
    }
    GraphQLModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_2_apollo_angular__["b" /* ApolloModule */], __WEBPACK_IMPORTED_MODULE_3_apollo_angular_link_http__["b" /* HttpLinkModule */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_apollo_angular__["a" /* Apollo */], __WEBPACK_IMPORTED_MODULE_3_apollo_angular_link_http__["a" /* HttpLink */]])
    ], GraphQLModule);
    return GraphQLModule;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fill-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" style=\"    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\n\">\n  <span style=\"padding-right: 1em;\">\n    <button mat-icon-button (click)=\"toggleSidenav()\">\n      <mat-icon>menu</mat-icon>\n    </button>\n  </span>\n  <!-- <div class=\"d-flex flex-row justify-content-between\"> -->\n\n  <span style=\"font-weight: bolder\">POST </span>\n  <span style=\"font-weight: lighter; padding-right: 0.3em;\"> UP</span>\n  <!-- <div class=\"version\">UP</div> -->\n  <!-- </div> -->\n  <!-- This fills the remaining space of the current row -->\n  <span class=\"fill-space\"></span>\n\n  <!-- <div></div> -->\n  <img *ngIf=\"!((user$ | async)?.firstName === '')\" mat-card-avatar src=\"{{(user$ | async)?.profileImage}} \">\n  <span *ngIf=\"(user$ | async)==null || (user$ | async)?.firstName==='' \">\n    <button mat-raised-button color=\"accent\" (click)=\"login() \">Login</button>\n  </span>\n</mat-toolbar>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__("../../../../../src/app/store/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(store) {
        this.store = store;
        this.user$ = store.select(__WEBPACK_IMPORTED_MODULE_2__store__["v" /* getCurrentUser */]);
    }
    NavbarComponent.prototype.toggleSidenav = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__store__["m" /* ToggleSidenav */]());
    };
    NavbarComponent.prototype.login = function () {
        window.open('/auth/facebook/', '_self');
    };
    NavbarComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__store__["g" /* FetchUser */]());
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/new-post-dialog.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-form {\n  padding-top: 2%;\n  min-width: 150px;\n  max-width: 100%;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-post-dialog.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title-group>\n    <mat-card-title>Create new Post!</mat-card-title>\n    <mat-card-subtitle>Use the space below to compose your post.</mat-card-subtitle>\n  </mat-card-title-group>\n  <mat-divider></mat-divider>\n  <mat-card-content>\n    <form class=\"example-form\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput #title placeholder=\"Title\">\n      </mat-form-field>\n\n      <mat-form-field class=\"example-full-width\">\n        <textarea matInput #content placeholder=\"Content\" rows=\"30\"></textarea>\n      </mat-form-field>\n    </form>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button color=\"accent\" (click)=\"createPost(title.value, content.value)\">POST</button>\n    <button mat-button (click)=\"onNoClick()\">CANCEL</button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/post-detail/post-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bounds\" style=\"overflow:hidden\">\n\n  <div class=\"content\" fxLayout=\"row\" fxLayout.xs=\"column\" fxFlexFill>\n\n    <div fxFlex=\"70\" class=\"postSection\" fxFlex.xs=\"55\">\n      <mat-card style=\"height:90vh; margin:1.5% 1% 2% 1%\">\n        <mat-card-header>\n          <img mat-card-avatar src=\"{{(selectedPost$ | async)?.author.profileImage}}\">\n          <mat-card-title>{{(selectedPost$ | async)?.author.firstName}} {{(selectedPost$ | async)?.author.lastName}}</mat-card-title>\n\n          <mat-card-subtitle>{{(selectedPost$ | async)?.views}} views</mat-card-subtitle>\n        </mat-card-header>\n        <mat-divider></mat-divider>\n        <br />\n\n        <mat-card-title>{{(selectedPost$ | async)?.title}}</mat-card-title>\n        <mat-card-content>\n          {{(selectedPost$ | async)?.content}}\n        </mat-card-content>\n      </mat-card>\n    </div>\n    <div fxFlex class=\"commentSection\">\n\n      <mat-card style=\"height:98%; margin:3% 2% 2% 1%; padding:0%\">\n        <mat-toolbar style=\"background: white; padding:0\">\n          <span style=\"padding-right: 1em;\">\n            <button *ngIf=\"this.commentNavHistory.length > 1\" mat-icon-button (click)=\"previous()\">\n              <mat-icon>keyboard_arrow_left</mat-icon>\n            </button>\n          </span>\n          <span>Comments</span>\n        </mat-toolbar>\n        <mat-card-title>\n        </mat-card-title>\n        <mat-divider></mat-divider>\n\n        <div style=\"height: 95%\">\n\n          <div class=\"content\" fxLayout=\"column\" fxFlexFill>\n            <div fxFlex style=\"overflow:auto\">\n              <div *ngIf=\"(selectedComment$ | async) !== null\">\n                <mat-card style=\"margin: 2%\">\n                  <mat-card-header>\n                    <img mat-list-icon mat-card-avatar style=\"height:10%; width: 10%;\" src=\"{{(selectedComment$|async)?.author.profileImage}}\">\n                    <mat-card-title style=\"margin-bottom: 0;\">{{(selectedComment$|async)?.comment}}</mat-card-title>\n                    <mat-card-subtitle>\n                      <p mat-line style=\"font-size:x-small; color:rgba(0, 0, 0, 0.54)\">\n                        {{(selectedComment$|async)?.author.firstName}} {{(selectedComment$|async)?.author.lastName}}\n                      </p>\n                    </mat-card-subtitle>\n                  </mat-card-header>\n\n                  <mat-card-actions *ngIf=\"(selectedComment$|async)?.author.id === (currentUser$ | async).id\">\n                    <button mat-icon-button color=\"warn\">\n                      <mat-icon aria-label=\"Example icon-button with a heart icon\">delete</mat-icon>\n                    </button>\n                  </mat-card-actions>\n                </mat-card>\n\n              </div>\n              <mat-list>\n                <mat-list-item *ngFor=\"let comment of (allComments$ | async); let i = index\" (mouseenter)=\"commentIndex= i\" (mouseleave)=\"commentIndex = -1\">\n                  <img mat-list-icon mat-card-avatar src=\"{{comment.author.profileImage}}\">\n                  <p mat-line>{{comment.comment}}</p>\n                  <p mat-line style=\"font-size:x-small; color:rgba(0, 0, 0, 0.54)\"> {{comment.replyCount}} replies </p>\n                  <mat-icon (click)=\"setParent(comment.id, comment)\" *ngIf=\"commentIndex == i\" style=\"color: rgba(0, 0, 0, 0.54); cursor: pointer;\">reply</mat-icon>\n                </mat-list-item>\n              </mat-list>\n\n            </div>\n            <div fxFlex=\"16\" fxFlexOrder=\"2\" fxFlex.xs=\"55\">\n              <mat-divider></mat-divider>\n              <mat-form-field style=\"width: 80%; padding-left:2%\">\n                <input #comment [(ngModel)]=\"commentValue\" matInput placeholder=\"Comment\">\n              </mat-form-field>\n              <button mat-icon-button color=\"primary\" (click)=\"createComment(comment.value)\">\n                <mat-icon aria-label=\"send-icon\">send</mat-icon>\n              </button>\n            </div>\n\n          </div>\n\n        </div>\n      </mat-card>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/post-detail/post-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bounds {\n  height: 100vh; }\n\n.postSection {\n  overflow: auto; }\n\n.commentsContent {\n  overflow: auto; }\n\n.postSection,\n.commentSection {\n  padding-top: 20px; }\n\n.content {\n  min-width: 300px;\n  padding-top: 3%;\n  overflow: hidden;\n  /*height: 400px;*/ }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/post-detail/post-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__("../../../../../src/app/store/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostDetailComponent = /** @class */ (function () {
    function PostDetailComponent(route, store) {
        var _this = this;
        this.route = route;
        this.store = store;
        this.history = [];
        this.commentValue = '';
        this.selectedPost$ = store.select(__WEBPACK_IMPORTED_MODULE_3__store__["x" /* getSelectedPost */]);
        this.allComments$ = store.select(__WEBPACK_IMPORTED_MODULE_3__store__["p" /* getAllComments */]);
        this.selectedComment$ = store.select(__WEBPACK_IMPORTED_MODULE_3__store__["w" /* getSelectedComment */]);
        store.select(__WEBPACK_IMPORTED_MODULE_3__store__["r" /* getCurrentNavHistorySetting */]).subscribe(function (history) {
            _this.commentNavHistory = history;
        });
        store
            .select(__WEBPACK_IMPORTED_MODULE_3__store__["s" /* getCurrentParentElementSetting */])
            .subscribe(function (p) { return (_this.currentParent = p); });
        store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["l" /* SetShowCreatePostButton */](false));
        this.currentUser$ = store.select(__WEBPACK_IMPORTED_MODULE_3__store__["v" /* getCurrentUser */]);
    }
    PostDetailComponent.prototype.createComment = function (comment) {
        this.commentValue = '';
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["c" /* CreateNewComment */]({
            parent: this.currentParent,
            comment: comment,
            timestamp: new Date().toISOString()
        }));
    };
    PostDetailComponent.prototype.previous = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["h" /* PopParent */]());
        var prev = this.commentNavHistory[this.commentNavHistory.length - 1];
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["h" /* PopParent */]());
        this.setParent(prev);
    };
    PostDetailComponent.prototype.setParent = function (parent) {
        console.log(this.commentNavHistory);
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["i" /* PushParent */](parent));
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["j" /* SelectComment */](parent));
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["f" /* FetchComments */]());
    };
    PostDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            console.log(params.get('id'));
            _this.postId = params.get('id');
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["k" /* SelectPost */](params.get('id')));
            _this.setParent(params.get('id'));
        });
    };
    PostDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-post-detail',
            template: __webpack_require__("../../../../../src/app/post-detail/post-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/post-detail/post-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]])
    ], PostDetailComponent);
    return PostDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/posts/posts.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <pre>\n    {{allPosts$ | async | json}}\n  </pre> -->\n<mat-grid-list cols=\"2\" rowHeight=\"5:1\" style=\"margin-top:10%\">\n  <mat-grid-tile *ngFor=\"let post of (allPosts$ | async)\">\n    <mat-card style=\"width:80%\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\">\n        <img mat-card-avatar src=\"{{post.author.profileImage}}\" matTooltip=\"{{post.author.firstName}} {{post.author.lastName}}\" matTooltipPosition=\"above\">\n        <h3 fxFlex=\"70\">{{post.title}}</h3>\n        <button fxFlex=\"20\" mat-button color=\"primary\" (click)=\"view(post.id)\">VIEW</button>\n      </div>\n    </mat-card>\n  </mat-grid-tile>\n</mat-grid-list>\n"

/***/ }),

/***/ "../../../../../src/app/posts/posts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/posts/posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__("../../../../../src/app/store/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostsComponent = /** @class */ (function () {
    function PostsComponent(store, router) {
        this.store = store;
        this.router = router;
        this.allPosts$ = store.select(__WEBPACK_IMPORTED_MODULE_3__store__["q" /* getAllPosts */]);
    }
    PostsComponent.prototype.view = function (id) {
        this.router.navigate(['/posts', id]);
    };
    PostsComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["e" /* FetchAllPosts */]());
    };
    PostsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-posts',
            template: __webpack_require__("../../../../../src/app/posts/posts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/posts/posts.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return services; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__user_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__post_service__["a"]; });


var services = [__WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__post_service__["a" /* PostService */]];




/***/ }),

/***/ "../../../../../src/app/services/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_angular__ = __webpack_require__("../../../../apollo-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store__ = __webpack_require__("../../../../../src/app/store/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__queries__ = __webpack_require__("../../../../../src/app/services/queries.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PostService = /** @class */ (function () {
    function PostService(http, apollo, store) {
        var _this = this;
        this.http = http;
        this.apollo = apollo;
        this.store = store;
        store.select(__WEBPACK_IMPORTED_MODULE_7__store__["s" /* getCurrentParentElementSetting */]).subscribe(function (parent) {
            _this.currentParent = parent;
        });
        store.select(__WEBPACK_IMPORTED_MODULE_7__store__["r" /* getCurrentNavHistorySetting */]).subscribe(function (history) {
            _this.currentCommentNavHistory = history;
        });
        store.select(__WEBPACK_IMPORTED_MODULE_7__store__["x" /* getSelectedPost */]).subscribe(function (v) {
            _this.selectedPost = v;
        });
    }
    PostService.prototype.selectPost = function (id) {
        return this.apollo
            .watchQuery({
            query: __WEBPACK_IMPORTED_MODULE_8__queries__["f" /* SELECT_POST */],
            variables: {
                id: id
            }
        })
            .valueChanges.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json()); }));
    };
    PostService.prototype.fetchPostsAndSubscribeToUpdates = function () {
        var _this = this;
        this.allPostsQuery = this.apollo.watchQuery({
            query: __WEBPACK_IMPORTED_MODULE_8__queries__["g" /* fetchPosts */]
        });
        this.allPostsQuery.subscribeToMore({
            document: __WEBPACK_IMPORTED_MODULE_8__queries__["e" /* NEW_POSTS_CREATED_SUBSCRIPTION */],
            updateQuery: function (prev, _a) {
                var subscriptionData = _a.subscriptionData;
                if (!subscriptionData.data) {
                    return prev;
                }
                var newPost = subscriptionData.data.newPostCreated;
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__store__["b" /* AppendNewPost */](newPost));
            }
        });
        return this.allPostsQuery.valueChanges.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json()); }));
    };
    PostService.prototype.createPost = function (newPost) {
        return this.apollo
            .mutate({
            mutation: __WEBPACK_IMPORTED_MODULE_8__queries__["b" /* CREATE_POST_MUTATION */],
            variables: {
                newPost: newPost
            }
        })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json()); }));
    };
    PostService.prototype.createComment = function (newComment) {
        return this.apollo.mutate({
            mutation: __WEBPACK_IMPORTED_MODULE_8__queries__["a" /* CREATE_COMMENT_MUTATION */],
            variables: {
                newComment: newComment,
                post: this.selectedPost.id
            }
        });
    };
    PostService.prototype.getSelectedPostId = function () {
        var return_id;
    };
    PostService.prototype.fetchCommentsAndSubscribeToUpdates = function () {
        var _this = this;
        this.allCommentsQuery = this.apollo.watchQuery({
            query: __WEBPACK_IMPORTED_MODULE_8__queries__["c" /* GET_COMMENTS */],
            variables: {
                id: this.currentParent
            }
        });
        this.store.select(__WEBPACK_IMPORTED_MODULE_7__store__["x" /* getSelectedPost */]).subscribe(function (v) {
            if (v !== null) {
                _this.allCommentsQuery.subscribeToMore({
                    document: __WEBPACK_IMPORTED_MODULE_8__queries__["d" /* NEW_COMMENT_ADDED_SUBSCRIPTION */],
                    variables: {
                        post: v.id
                    },
                    updateQuery: function (prev, _a) {
                        var subscriptionData = _a.subscriptionData;
                        console.log('REC: New Comment');
                        if (!subscriptionData.data) {
                            return prev;
                        }
                        var newComment = subscriptionData.data.newCommentCreated;
                        _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__store__["a" /* AppendNewComment */](newComment));
                    }
                });
            }
        });
        return this.allCommentsQuery.valueChanges.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json()); }));
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_apollo_angular__["a" /* Apollo */],
            __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["h" /* Store */]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "../../../../../src/app/services/queries.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return fetchPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NEW_COMMENT_ADDED_SUBSCRIPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return NEW_POSTS_CREATED_SUBSCRIPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CREATE_POST_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CREATE_COMMENT_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SELECT_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_COMMENTS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag__ = __webpack_require__("../../../../graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tag__);

var fetchPosts = (_a = ["\n  query {\n    allPosts {\n      id\n      title\n      content\n      author {\n        id\n        firstName\n        lastName\n        profileImage\n      }\n    }\n  }\n"], _a.raw = ["\n  query {\n    allPosts {\n      id\n      title\n      content\n      author {\n        id\n        firstName\n        lastName\n        profileImage\n      }\n    }\n  }\n"], __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default()(_a));
var NEW_COMMENT_ADDED_SUBSCRIPTION = (_b = ["\n  subscription newPostCreated($post: String!) {\n    newCommentCreated(post: $post) {\n      id\n      author {\n        id\n        firstName\n        lastName\n        profileImage\n      }\n      parent\n      comment\n      timestamp\n      replyCount\n    }\n  }\n"], _b.raw = ["\n  subscription newPostCreated($post: String!) {\n    newCommentCreated(post: $post) {\n      id\n      author {\n        id\n        firstName\n        lastName\n        profileImage\n      }\n      parent\n      comment\n      timestamp\n      replyCount\n    }\n  }\n"], __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default()(_b));
var NEW_POSTS_CREATED_SUBSCRIPTION = (_c = ["\n  subscription {\n    newPostCreated {\n      id\n      title\n      content\n      author {\n        id\n        firstName\n        lastName\n        profileImage\n      }\n    }\n  }\n"], _c.raw = ["\n  subscription {\n    newPostCreated {\n      id\n      title\n      content\n      author {\n        id\n        firstName\n        lastName\n        profileImage\n      }\n    }\n  }\n"], __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default()(_c));
var CREATE_POST_MUTATION = (_d = ["\n  mutation createPost($newPost: PostInput!) {\n    createPost(post: $newPost) {\n      id\n    }\n  }\n"], _d.raw = ["\n  mutation createPost($newPost: PostInput!) {\n    createPost(post: $newPost) {\n      id\n    }\n  }\n"], __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default()(_d));
var CREATE_COMMENT_MUTATION = (_e = ["\n  mutation createComment($newComment: CommentInput!, $post: String!) {\n    createComment(comment: $newComment, post: $post) {\n      id\n    }\n  }\n"], _e.raw = ["\n  mutation createComment($newComment: CommentInput!, $post: String!) {\n    createComment(comment: $newComment, post: $post) {\n      id\n    }\n  }\n"], __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default()(_e));
var SELECT_POST = (_f = ["\n  query postById($id: String!) {\n    postById(id: $id) {\n      id\n      title\n      content\n      author {\n        id\n        firstName\n        lastName\n        profileImage\n      }\n      views\n    }\n  }\n"], _f.raw = ["\n  query postById($id: String!) {\n    postById(id: $id) {\n      id\n      title\n      content\n      author {\n        id\n        firstName\n        lastName\n        profileImage\n      }\n      views\n    }\n  }\n"], __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default()(_f));
var GET_COMMENTS = (_g = ["\n  query commentsByParentId($id: String!) {\n    commentsByParentId(id: $id) {\n      id\n      author {\n        id\n        firstName\n        lastName\n        profileImage\n      }\n      parent\n      comment\n      timestamp\n      replyCount\n    }\n  }\n"], _g.raw = ["\n  query commentsByParentId($id: String!) {\n    commentsByParentId(id: $id) {\n      id\n      author {\n        id\n        firstName\n        lastName\n        profileImage\n      }\n      parent\n      comment\n      timestamp\n      replyCount\n    }\n  }\n"], __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default()(_g));
var _a, _b, _c, _d, _e, _f, _g;


/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_angular__ = __webpack_require__("../../../../apollo-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag__ = __webpack_require__("../../../../graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = /** @class */ (function () {
    function UserService(http, apollo) {
        this.http = http;
        this.apollo = apollo;
    }
    UserService.prototype.fetchUser = function () {
        return this.apollo
            .query({
            query: (_a = ["\n          {\n            me {\n              id\n              firstName\n              lastName\n              profileImage\n            }\n          }\n        "], _a.raw = ["\n          {\n            me {\n              id\n              firstName\n              lastName\n              profileImage\n            }\n          }\n        "], __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default()(_a))
        })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["a" /* catchError */])(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(error.json()); }));
        var _a;
    };
    UserService.prototype.logout = function () {
        return this.http
            .get('/auth/logout')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["a" /* catchError */])(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(error.json()); }));
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_apollo_angular__["a" /* Apollo */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/store/actions/comment.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FETCH_COMMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return FETCH_COMMENTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return FETCH_COMMENTS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APPEND_NEW_COMMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SELECT_COMMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CREATE_NEW_COMMENT; });
/* unused harmony export CREATE_NEW_COMMENT_SUCCESS */
/* unused harmony export CREATE_NEW_COMMENT_FAIL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return FetchComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return FetchCommentsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return FetchCommentsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppendNewComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SelectComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CreateNewComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CreateNewCommentSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CreateNewCommentFail; });
var FETCH_COMMENTS = '[Comment] Fetch Comments';
var FETCH_COMMENTS_SUCCESS = '[Comment] Fetch Comments Success';
var FETCH_COMMENTS_FAIL = '[Comment] Fetch Comments Fail';
var APPEND_NEW_COMMENT = '[Comment] Append New';
var SELECT_COMMENT = '[Comment] Select Comment';
var CREATE_NEW_COMMENT = '[Comment] Create New';
var CREATE_NEW_COMMENT_SUCCESS = '[Comment] Create New - Success';
var CREATE_NEW_COMMENT_FAIL = '[Comment] Create New - Fail';
var FetchComments = /** @class */ (function () {
    function FetchComments() {
        this.type = FETCH_COMMENTS;
    }
    return FetchComments;
}());

var FetchCommentsSuccess = /** @class */ (function () {
    function FetchCommentsSuccess(payload) {
        this.payload = payload;
        this.type = FETCH_COMMENTS_SUCCESS;
    }
    return FetchCommentsSuccess;
}());

var FetchCommentsFail = /** @class */ (function () {
    function FetchCommentsFail(payload) {
        this.payload = payload;
        this.type = FETCH_COMMENTS_FAIL;
    }
    return FetchCommentsFail;
}());

var AppendNewComment = /** @class */ (function () {
    function AppendNewComment(payload) {
        this.payload = payload;
        this.type = APPEND_NEW_COMMENT;
    }
    return AppendNewComment;
}());

var SelectComment = /** @class */ (function () {
    function SelectComment(payload) {
        this.payload = payload;
        this.type = SELECT_COMMENT;
    }
    return SelectComment;
}());

var CreateNewComment = /** @class */ (function () {
    function CreateNewComment(payload) {
        this.payload = payload;
        this.type = CREATE_NEW_COMMENT;
    }
    return CreateNewComment;
}());

var CreateNewCommentSuccess = /** @class */ (function () {
    function CreateNewCommentSuccess() {
        this.type = CREATE_NEW_COMMENT_SUCCESS;
    }
    return CreateNewCommentSuccess;
}());

var CreateNewCommentFail = /** @class */ (function () {
    function CreateNewCommentFail(payload) {
        this.payload = payload;
        this.type = CREATE_NEW_COMMENT_FAIL;
    }
    return CreateNewCommentFail;
}());



/***/ }),

/***/ "../../../../../src/app/store/actions/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings_actions__ = __webpack_require__("../../../../../src/app/store/actions/settings.actions.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_0__settings_actions__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_0__settings_actions__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_0__settings_actions__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_0__settings_actions__["h"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_actions__ = __webpack_require__("../../../../../src/app/store/actions/user.actions.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__user_actions__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__user_actions__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__user_actions__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_1__user_actions__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_1__user_actions__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_1__user_actions__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_1__user_actions__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_1__user_actions__["l"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_actions__ = __webpack_require__("../../../../../src/app/store/actions/post.actions.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__post_actions__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__post_actions__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__post_actions__["l"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_2__post_actions__["r"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comment_actions__ = __webpack_require__("../../../../../src/app/store/actions/comment.actions.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__comment_actions__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__comment_actions__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__comment_actions__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_3__comment_actions__["n"]; });






/***/ }),

/***/ "../../../../../src/app/store/actions/post.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return FETCH_ALL_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return FETCH_ALL_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return FETCH_ALL_POSTS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APPEND_NEW_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CREATE_NEW_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CREATE_NEW_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CREATE_NEW_POST_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return SELECT_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return SELECT_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return SELECT_POST_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return FetchAllPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return FetchAllPostsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return FetchAllPostsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppendNewPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CreateNewPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CreateNewPostSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CreateNewPostFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return SelectPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return SelectPostSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return SelectPostFail; });
var FETCH_ALL_POSTS = '[Posts] Fetch All';
var FETCH_ALL_POSTS_SUCCESS = '[Posts] Fetch All Success';
var FETCH_ALL_POSTS_FAIL = '[Posts] Fetch All Fail';
var APPEND_NEW_POST = '[Posts] Append New';
var CREATE_NEW_POST = '[Posts] Create New';
var CREATE_NEW_POST_SUCCESS = '[Posts] Create New Success';
var CREATE_NEW_POST_FAIL = '[Posts] Create New Fail';
var SELECT_POST = '[Posts] Select Post';
var SELECT_POST_SUCCESS = '[Posts] Select Post Success';
var SELECT_POST_FAIL = '[Posts] Select Post Fail';
var FetchAllPosts = /** @class */ (function () {
    function FetchAllPosts() {
        this.type = FETCH_ALL_POSTS;
    }
    return FetchAllPosts;
}());

var FetchAllPostsSuccess = /** @class */ (function () {
    function FetchAllPostsSuccess(payload) {
        this.payload = payload;
        this.type = FETCH_ALL_POSTS_SUCCESS;
    }
    return FetchAllPostsSuccess;
}());

var FetchAllPostsFail = /** @class */ (function () {
    function FetchAllPostsFail(payload) {
        this.payload = payload;
        this.type = FETCH_ALL_POSTS_FAIL;
    }
    return FetchAllPostsFail;
}());

var AppendNewPost = /** @class */ (function () {
    function AppendNewPost(payload) {
        this.payload = payload;
        this.type = APPEND_NEW_POST;
    }
    return AppendNewPost;
}());

var CreateNewPost = /** @class */ (function () {
    function CreateNewPost(payload) {
        this.payload = payload;
        this.type = CREATE_NEW_POST;
    }
    return CreateNewPost;
}());

var CreateNewPostSuccess = /** @class */ (function () {
    function CreateNewPostSuccess() {
        this.type = CREATE_NEW_POST_SUCCESS;
    }
    return CreateNewPostSuccess;
}());

var CreateNewPostFail = /** @class */ (function () {
    function CreateNewPostFail(payload) {
        this.payload = payload;
        this.type = CREATE_NEW_POST_FAIL;
    }
    return CreateNewPostFail;
}());

var SelectPost = /** @class */ (function () {
    function SelectPost(payload) {
        this.payload = payload;
        this.type = SELECT_POST;
    }
    return SelectPost;
}());

var SelectPostSuccess = /** @class */ (function () {
    function SelectPostSuccess(payload) {
        this.payload = payload;
        this.type = SELECT_POST_SUCCESS;
    }
    return SelectPostSuccess;
}());

var SelectPostFail = /** @class */ (function () {
    function SelectPostFail(payload) {
        this.payload = payload;
        this.type = SELECT_POST_FAIL;
    }
    return SelectPostFail;
}());



/***/ }),

/***/ "../../../../../src/app/store/actions/settings.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TOGGLE_SIDENAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PUSH_PARENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return POP_PARENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SET_SHOW_CREATE_POST_BUTTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ToggleSidenav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PushParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PopParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SetShowCreatePostButton; });
var TOGGLE_SIDENAV = '[Settings] Toggle Sidenav';
var PUSH_PARENT = '[Settings] Push Parent Element onto Comment Nav History Stack';
var POP_PARENT = '[Settings] Pop Parent Element from Comment Nav History Stack';
var SET_SHOW_CREATE_POST_BUTTON = '[Settings] Set Show Create Post Button';
var ToggleSidenav = /** @class */ (function () {
    function ToggleSidenav() {
        this.type = TOGGLE_SIDENAV;
    }
    return ToggleSidenav;
}());

var PushParent = /** @class */ (function () {
    function PushParent(payload) {
        this.payload = payload;
        this.type = PUSH_PARENT;
    }
    return PushParent;
}());

var PopParent = /** @class */ (function () {
    function PopParent() {
        this.type = POP_PARENT;
    }
    return PopParent;
}());

var SetShowCreatePostButton = /** @class */ (function () {
    function SetShowCreatePostButton(payload) {
        this.payload = payload;
        this.type = SET_SHOW_CREATE_POST_BUTTON;
    }
    return SetShowCreatePostButton;
}());



/***/ }),

/***/ "../../../../../src/app/store/actions/user.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FETCH_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FETCH_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FETCH_USER_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FetchUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FetchUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FetchUserFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return USER_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return USER_LOGOUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return USER_LOGOUT_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return UserLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return UserLogoutSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return UserLogoutFail; });
var FETCH_USER = '[User] Fetch';
var FETCH_USER_SUCCESS = '[User] Fetch Success';
var FETCH_USER_FAIL = '[User] Fetch Fail';
var FetchUser = /** @class */ (function () {
    function FetchUser() {
        this.type = FETCH_USER;
    }
    return FetchUser;
}());

var FetchUserSuccess = /** @class */ (function () {
    function FetchUserSuccess(payload) {
        this.payload = payload;
        this.type = FETCH_USER_SUCCESS;
    }
    return FetchUserSuccess;
}());

var FetchUserFail = /** @class */ (function () {
    function FetchUserFail(payload) {
        this.payload = payload;
        this.type = FETCH_USER_FAIL;
    }
    return FetchUserFail;
}());

var USER_LOGOUT = '[User] Logout';
var USER_LOGOUT_SUCCESS = '[User] Logout Success';
var USER_LOGOUT_FAIL = '[User] Logout Fail';
var UserLogout = /** @class */ (function () {
    function UserLogout() {
        this.type = USER_LOGOUT;
    }
    return UserLogout;
}());

var UserLogoutSuccess = /** @class */ (function () {
    function UserLogoutSuccess() {
        this.type = USER_LOGOUT_SUCCESS;
    }
    return UserLogoutSuccess;
}());

var UserLogoutFail = /** @class */ (function () {
    function UserLogoutFail(payload) {
        this.payload = payload;
        this.type = USER_LOGOUT_FAIL;
    }
    return UserLogoutFail;
}());



/***/ }),

/***/ "../../../../../src/app/store/effects/comment.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_comment_actions__ = __webpack_require__("../../../../../src/app/store/actions/comment.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Action } from '@ngrx/store';





var CommentEffects = /** @class */ (function () {
    function CommentEffects(actions$, postService) {
        var _this = this;
        this.actions$ = actions$;
        this.postService = postService;
        this.getAllComments$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_4__actions_comment_actions__["g" /* FETCH_COMMENTS */]).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["e" /* switchMap */])(function (action) {
            return _this.postService.fetchCommentsAndSubscribeToUpdates().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* map */])(function (comments) {
                return new __WEBPACK_IMPORTED_MODULE_4__actions_comment_actions__["l" /* FetchCommentsSuccess */](comments.data.commentsByParentId);
            }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (error) {
                console.log(JSON.stringify(error));
                return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_4__actions_comment_actions__["k" /* FetchCommentsFail */](error));
            }));
        }));
        this.createNewPost$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions_comment_actions__["c" /* CREATE_NEW_COMMENT */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["e" /* switchMap */])(function (action) {
            return _this.postService.createComment(action.payload).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* map */])(function (response) { return new __WEBPACK_IMPORTED_MODULE_4__actions_comment_actions__["f" /* CreateNewCommentSuccess */](); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (error) {
                console.log(JSON.stringify(error));
                return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_4__actions_comment_actions__["e" /* CreateNewCommentFail */](error));
            }));
        }));
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], CommentEffects.prototype, "getAllComments$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], CommentEffects.prototype, "createNewPost$", void 0);
    CommentEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */], __WEBPACK_IMPORTED_MODULE_5__services__["a" /* PostService */]])
    ], CommentEffects);
    return CommentEffects;
}());



/***/ }),

/***/ "../../../../../src/app/store/effects/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return effects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_effects__ = __webpack_require__("../../../../../src/app/store/effects/user.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post_effects__ = __webpack_require__("../../../../../src/app/store/effects/post.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comment_effects__ = __webpack_require__("../../../../../src/app/store/effects/comment.effects.ts");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */



var effects = [__WEBPACK_IMPORTED_MODULE_0__user_effects__["a" /* UserEffects */], __WEBPACK_IMPORTED_MODULE_1__post_effects__["a" /* PostEffects */], __WEBPACK_IMPORTED_MODULE_2__comment_effects__["a" /* CommentEffects */]];





/***/ }),

/***/ "../../../../../src/app/store/effects/post.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from__ = __webpack_require__("../../../../rxjs/_esm5/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_post_actions__ = __webpack_require__("../../../../../src/app/store/actions/post.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Action } from '@ngrx/store';






var PostEffects = /** @class */ (function () {
    function PostEffects(actions$, postService) {
        var _this = this;
        this.actions$ = actions$;
        this.postService = postService;
        this.getSelectedPost$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_5__actions_post_actions__["o" /* SELECT_POST */]).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["e" /* switchMap */])(function (action) {
            return _this.postService.selectPost(action.payload).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* map */])(function (post) {
                console.log(post);
                return new __WEBPACK_IMPORTED_MODULE_5__actions_post_actions__["t" /* SelectPostSuccess */](post.data.postById);
            }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(function (error) {
                console.log(JSON.stringify(error));
                return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_5__actions_post_actions__["s" /* SelectPostFail */](error));
            }));
        }));
        this.createNewPost$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_5__actions_post_actions__["c" /* CREATE_NEW_POST */]).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["e" /* switchMap */])(function (action) {
            return _this.postService.createPost(action.payload).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* map */])(function (response) { return new __WEBPACK_IMPORTED_MODULE_5__actions_post_actions__["h" /* CreateNewPostSuccess */](); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(function (error) {
                console.log(JSON.stringify(error));
                return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_5__actions_post_actions__["g" /* CreateNewPostFail */](error));
            }));
        }));
        this.fetchAllPosts$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_5__actions_post_actions__["i" /* FETCH_ALL_POSTS */]).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["e" /* switchMap */])(function (action) {
            return _this.postService.fetchPostsAndSubscribeToUpdates().pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["d" /* mergeMap */])(function (posts) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from__["a" /* from */])([
                    new __WEBPACK_IMPORTED_MODULE_5__actions_post_actions__["n" /* FetchAllPostsSuccess */](posts.data['allPosts'])
                ]);
            }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(function (error) {
                console.log(JSON.stringify(error));
                return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_5__actions_post_actions__["m" /* FetchAllPostsFail */](error));
            }));
        }));
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], PostEffects.prototype, "getSelectedPost$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], PostEffects.prototype, "createNewPost$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], PostEffects.prototype, "fetchAllPosts$", void 0);
    PostEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */], __WEBPACK_IMPORTED_MODULE_6__services__["a" /* PostService */]])
    ], PostEffects);
    return PostEffects;
}());



/***/ }),

/***/ "../../../../../src/app/store/effects/user.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from__ = __webpack_require__("../../../../rxjs/_esm5/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions__ = __webpack_require__("../../../../../src/app/store/actions/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserEffects = /** @class */ (function () {
    function UserEffects(actions$, userService) {
        var _this = this;
        this.actions$ = actions$;
        this.userService = userService;
        this.fetchUser$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_5__actions__["e" /* FETCH_USER */]).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["e" /* switchMap */])(function (action) {
            console.log('IN HERE');
            return _this.userService.fetchUser().pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["d" /* mergeMap */])(function (currentUser) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from__["a" /* from */])([
                    new __WEBPACK_IMPORTED_MODULE_5__actions__["j" /* FetchUserSuccess */](currentUser.data['me'])
                ]);
            }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(function (error) {
                console.log(JSON.stringify(error));
                return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_5__actions__["i" /* FetchUserFail */](error));
            }));
        }));
        this.userLogout$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_5__actions__["q" /* USER_LOGOUT */]).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["e" /* switchMap */])(function (action) {
            return _this.userService
                .logout()
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* map */])(function () { return new __WEBPACK_IMPORTED_MODULE_5__actions__["t" /* UserLogoutSuccess */](); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_5__actions__["s" /* UserLogoutFail */](error)); }));
        }));
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], UserEffects.prototype, "fetchUser$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], UserEffects.prototype, "userLogout$", void 0);
    UserEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */], __WEBPACK_IMPORTED_MODULE_6__services__["b" /* UserService */]])
    ], UserEffects);
    return UserEffects;
}());



/***/ }),

/***/ "../../../../../src/app/store/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducers__ = __webpack_require__("../../../../../src/app/store/reducers/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_0__reducers__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_0__reducers__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_0__reducers__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_0__reducers__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_0__reducers__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_0__reducers__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_0__reducers__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_0__reducers__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_0__reducers__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_0__reducers__["j"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("../../../../../src/app/store/actions/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__actions__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__actions__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__actions__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__actions__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__actions__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__actions__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__actions__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__actions__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__actions__["l"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_1__actions__["m"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_1__actions__["n"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_1__actions__["o"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_1__actions__["p"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_1__actions__["r"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__effects__ = __webpack_require__("../../../../../src/app/store/effects/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_2__effects__["a"]; });





/***/ }),

/***/ "../../../../../src/app/store/reducers/comment.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["c"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAllCommentEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSelectedComment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_comment_actions__ = __webpack_require__("../../../../../src/app/store/actions/comment.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    entities: {},
    // allComments: null,
    selectedComment: null
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_comment_actions__["g" /* FETCH_COMMENTS */]: {
            return __assign({}, state);
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_comment_actions__["i" /* FETCH_COMMENTS_SUCCESS */]: {
            var comments = action.payload;
            var entities = comments.reduce(function (entities, comment) {
                return __assign({}, entities, (_a = {}, _a[comment.id] = comment, _a));
                var _a;
            }, __assign({}, state.entities));
            return __assign({}, state, { entities: entities });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_comment_actions__["h" /* FETCH_COMMENTS_FAIL */]: {
            return __assign({}, state);
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_comment_actions__["a" /* APPEND_NEW_COMMENT */]: {
            var comment = action.payload;
            var parent = comment.parent;
            var newObject = {};
            while (state.entities[parent] !== undefined) {
                console.log('PARENT IS: ', state.entities[parent]);
                newObject = Object.assign(newObject, (_a = {},
                    _a[parent] = __assign({}, state.entities[parent], { replyCount: state.entities[parent].replyCount + 1 }),
                    _a));
                parent = state.entities[parent].parent;
            }
            // console.log(newObject);
            // const entities = Object.assign({}, state.entities, newObject, {
            //   [comment.id]: comment
            // });
            var entities = __assign({}, state.entities, newObject, (_b = {}, _b[comment.id] = comment, _b));
            // console.log(entities);
            console.log(__assign({}, state, { entities: entities }));
            return __assign({}, state, { entities: entities });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_comment_actions__["m" /* SELECT_COMMENT */]: {
            var temp = null;
            if (state.entities[action.payload] !== undefined) {
                temp = state.entities[action.payload];
            }
            return __assign({}, state, { selectedComment: temp });
        }
    }
    return state;
    var _a, _b;
}
var getAllCommentEntities = function (state) { return state.entities; };
var getSelectedComment = function (state) {
    return state.selectedComment;
};


/***/ }),

/***/ "../../../../../src/app/store/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return reducers; });
/* unused harmony export getAppState */
/* unused harmony export getCurrentUserState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getCurrentUser; });
/* unused harmony export getCurrentSettingsState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getCurrentSidenavToggleSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getCurrentParentElementSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCurrentNavHistorySetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getCurrentShowCreateNewPostButtonSetting; });
/* unused harmony export getCurrentPostState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAllPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getSelectedPost; });
/* unused harmony export getCurrentCommentState */
/* unused harmony export getAllCommentEntities */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAllComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getSelectedComment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_reducer__ = __webpack_require__("../../../../../src/app/store/reducers/settings.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_reducer__ = __webpack_require__("../../../../../src/app/store/reducers/user.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_reducer__ = __webpack_require__("../../../../../src/app/store/reducers/post.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__comment_reducer__ = __webpack_require__("../../../../../src/app/store/reducers/comment.reducer.ts");





var reducers = {
    currentSettings: __WEBPACK_IMPORTED_MODULE_1__settings_reducer__["e" /* reducer */],
    currentUser: __WEBPACK_IMPORTED_MODULE_2__user_reducer__["b" /* reducer */],
    allPosts: __WEBPACK_IMPORTED_MODULE_3__post_reducer__["c" /* reducer */],
    allComments: __WEBPACK_IMPORTED_MODULE_4__comment_reducer__["c" /* reducer */]
};
var getAppState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["n" /* createFeatureSelector */])('app');
// Current User State
var getCurrentUserState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getAppState, function (state) { return state.currentUser; });
// get current user
var getCurrentUser = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getCurrentUserState, __WEBPACK_IMPORTED_MODULE_2__user_reducer__["a" /* getCurrentUser */]);
// Current Settings State
var getCurrentSettingsState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getAppState, function (state) { return state.currentSettings; });
// get sidenavToggle Setting
var getCurrentSidenavToggleSetting = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getCurrentSettingsState, __WEBPACK_IMPORTED_MODULE_1__settings_reducer__["d" /* getSettingSidenavToggle */]);
// get current Parent Element setting
var getCurrentParentElementSetting = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getCurrentSettingsState, __WEBPACK_IMPORTED_MODULE_1__settings_reducer__["b" /* getSettingCurrentParentElement */]);
// get current Comment Nav History setting
var getCurrentNavHistorySetting = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getCurrentSettingsState, __WEBPACK_IMPORTED_MODULE_1__settings_reducer__["a" /* getSettingCurrentCommentNavHistory */]);
// get current Show Create New Post Button setting
var getCurrentShowCreateNewPostButtonSetting = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getCurrentSettingsState, __WEBPACK_IMPORTED_MODULE_1__settings_reducer__["c" /* getSettingCurrentShowCreatePostButton */]);
// Current Post State
var getCurrentPostState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getAppState, function (state) { return state.allPosts; });
// get all posts
var getAllPosts = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getCurrentPostState, __WEBPACK_IMPORTED_MODULE_3__post_reducer__["a" /* getAllPosts */]);
// get selected post
var getSelectedPost = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getCurrentPostState, __WEBPACK_IMPORTED_MODULE_3__post_reducer__["b" /* getSelectedPost */]);
// Current Comment State
var getCurrentCommentState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getAppState, function (state) { return state.allComments; });
// get all comment entities
var getAllCommentEntities = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getCurrentCommentState, __WEBPACK_IMPORTED_MODULE_4__comment_reducer__["a" /* getAllCommentEntities */]);
// get all comments for currently selected parent element
var getAllComments = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getAllCommentEntities, getCurrentParentElementSetting, function (entities, parent) {
    return Object.keys(entities)
        .map(function (id) { return entities[id]; })
        .sort(function (a, b) {
        return (new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
    })
        .filter(function (e) { return e.parent === parent; });
});
// get selected comment
var getSelectedComment = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getCurrentCommentState, __WEBPACK_IMPORTED_MODULE_4__comment_reducer__["b" /* getSelectedComment */]);


/***/ }),

/***/ "../../../../../src/app/store/reducers/post.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["c"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAllPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSelectedPost; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_post_actions__ = __webpack_require__("../../../../../src/app/store/actions/post.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    allPosts: [],
    selectedPost: null
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_post_actions__["i" /* FETCH_ALL_POSTS */]: {
            return __assign({}, state);
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_post_actions__["k" /* FETCH_ALL_POSTS_SUCCESS */]: {
            return __assign({}, state, { allPosts: action.payload });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_post_actions__["j" /* FETCH_ALL_POSTS_FAIL */]: {
            return __assign({}, state);
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_post_actions__["a" /* APPEND_NEW_POST */]: {
            return __assign({}, state, { allPosts: [action.payload].concat(state.allPosts) });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_post_actions__["c" /* CREATE_NEW_POST */]: {
            return __assign({}, state);
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_post_actions__["e" /* CREATE_NEW_POST_SUCCESS */]: {
            return __assign({}, state);
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_post_actions__["d" /* CREATE_NEW_POST_FAIL */]: {
            return __assign({}, state);
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_post_actions__["o" /* SELECT_POST */]: {
            return __assign({}, state);
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_post_actions__["q" /* SELECT_POST_SUCCESS */]: {
            return __assign({}, state, { selectedPost: action.payload });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_post_actions__["p" /* SELECT_POST_FAIL */]: {
            return __assign({}, state);
        }
    }
    return state;
}
var getAllPosts = function (state) { return state.allPosts; };
var getSelectedPost = function (state) { return state.selectedPost; };


/***/ }),

/***/ "../../../../../src/app/store/reducers/settings.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["e"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getSettingSidenavToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSettingCurrentParentElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getSettingCurrentShowCreatePostButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSettingCurrentCommentNavHistory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_settings_actions__ = __webpack_require__("../../../../../src/app/store/actions/settings.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    SETTING_sidenavToggle: false,
    SETTING_currentParentElement: null,
    SETTING_showCreateNewPostButton: false,
    SETTING_commentNavHistory: []
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_settings_actions__["g" /* TOGGLE_SIDENAV */]: {
            return __assign({}, state, { SETTING_sidenavToggle: state.SETTING_sidenavToggle == false ? true : false });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_settings_actions__["b" /* PUSH_PARENT */]: {
            return __assign({}, state, { SETTING_currentParentElement: action.payload, SETTING_commentNavHistory: state.SETTING_commentNavHistory.concat([
                    action.payload
                ]) });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_settings_actions__["a" /* POP_PARENT */]: {
            return __assign({}, state, { SETTING_currentParentElement: state.SETTING_commentNavHistory.filter(function (v, idx) { return idx == state.SETTING_commentNavHistory.length - 1; })[0], SETTING_commentNavHistory: state.SETTING_commentNavHistory.filter(function (v, idx) { return idx !== state.SETTING_commentNavHistory.length - 1; }) });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_settings_actions__["e" /* SET_SHOW_CREATE_POST_BUTTON */]: {
            return __assign({}, state, { SETTING_showCreateNewPostButton: action.payload });
        }
    }
    return state;
}
var getSettingSidenavToggle = function (state) {
    return state.SETTING_sidenavToggle;
};
var getSettingCurrentParentElement = function (state) {
    return state.SETTING_currentParentElement;
};
var getSettingCurrentShowCreatePostButton = function (state) {
    return state.SETTING_showCreateNewPostButton;
};
var getSettingCurrentCommentNavHistory = function (state) {
    return state.SETTING_commentNavHistory;
};


/***/ }),

/***/ "../../../../../src/app/store/reducers/user.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["b"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCurrentUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_user_actions__ = __webpack_require__("../../../../../src/app/store/actions/user.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    currentUser: {
        _id: '',
        firstName: '',
        lastName: '',
        email: '',
        profileImage: ''
    }
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_user_actions__["a" /* FETCH_USER */]: {
            return __assign({}, state);
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_user_actions__["c" /* FETCH_USER_SUCCESS */]: {
            return __assign({}, state, { currentUser: action.payload });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_user_actions__["b" /* FETCH_USER_FAIL */]: {
            return __assign({}, state);
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_user_actions__["g" /* USER_LOGOUT */]: {
            return __assign({}, state);
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_user_actions__["i" /* USER_LOGOUT_SUCCESS */]: {
            return initialState;
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_user_actions__["h" /* USER_LOGOUT_FAIL */]: {
            return __assign({}, state);
        }
    }
    return state;
}
var getCurrentUser = function (state) { return state.currentUser; };


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map