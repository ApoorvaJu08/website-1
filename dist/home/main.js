(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about { padding-top: 40px; }\n\nh2 { color: #212739; font-family: Oswald, sans-serif; letter-spacing: 1.2px; margin-bottom: 30px; }\n\n.about-content { font-family: Oswald, sans-serif; letter-spacing: 0.8px; font-size: 20px; }\n"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about text-center\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h2 class=\"text-uppercase font-weight-bold\">about us</h2>\n        <p class=\"about-content\">TechTalks covers all the technologies around involving designing, development, deployment, testing, maintenance.</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-team></app-team>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _sponsers_sponsers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sponsers/sponsers.component */ "./src/app/sponsers/sponsers.component.ts");
/* harmony import */ var _community_partner_community_partner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./community-partner/community-partner.component */ "./src/app/community-partner/community-partner.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _upcom_meetings_upcom_meetings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./upcom-meetings/upcom-meetings.component */ "./src/app/upcom-meetings/upcom-meetings.component.ts");
/* harmony import */ var _home_page_layout_home_page_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-page-layout/home-page-layout.component */ "./src/app/home-page-layout/home-page-layout.component.ts");
/* harmony import */ var _speakers_speakers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./speakers/speakers.component */ "./src/app/speakers/speakers.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _hack_hack_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hack/hack.component */ "./src/app/hack/hack.component.ts");
/* harmony import */ var _contri_contri_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contri/contri.component */ "./src/app/contri/contri.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"] },
    { path: 'sponsers', component: _sponsers_sponsers_component__WEBPACK_IMPORTED_MODULE_4__["SponsersComponent"] },
    { path: 'commu', component: _community_partner_community_partner_component__WEBPACK_IMPORTED_MODULE_5__["CommunityPartnerComponent"] },
    { path: 'team', component: _team_team_component__WEBPACK_IMPORTED_MODULE_6__["TeamComponent"] },
    { path: 'upcom', component: _upcom_meetings_upcom_meetings_component__WEBPACK_IMPORTED_MODULE_7__["UpcomMeetingsComponent"] },
    { path: 'home', component: _home_page_layout_home_page_layout_component__WEBPACK_IMPORTED_MODULE_8__["HomePageLayoutComponent"] },
    { path: 'past', component: _speakers_speakers_component__WEBPACK_IMPORTED_MODULE_9__["SpeakersComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"] },
    { path: 'hack', component: _hack_hack_component__WEBPACK_IMPORTED_MODULE_11__["HackComponent"] },
    { path: 'contri', component: _contri_contri_component__WEBPACK_IMPORTED_MODULE_12__["ContriComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

// export const routingComponents = [ContactComponent]


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-top-slider></app-top-slider>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'home';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_layout_home_page_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-page-layout/home-page-layout.component */ "./src/app/home-page-layout/home-page-layout.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _community_partner_community_partner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./community-partner/community-partner.component */ "./src/app/community-partner/community-partner.component.ts");
/* harmony import */ var _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subscribe/subscribe.component */ "./src/app/subscribe/subscribe.component.ts");
/* harmony import */ var _speakers_speakers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./speakers/speakers.component */ "./src/app/speakers/speakers.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _sponsers_sponsers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sponsers/sponsers.component */ "./src/app/sponsers/sponsers.component.ts");
/* harmony import */ var _upcom_meetings_upcom_meetings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./upcom-meetings/upcom-meetings.component */ "./src/app/upcom-meetings/upcom-meetings.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _top_slider_top_slider_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./top-slider/top-slider.component */ "./src/app/top-slider/top-slider.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shashank_shashank_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shashank/shashank.component */ "./src/app/shashank/shashank.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _hack_hack_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./hack/hack.component */ "./src/app/hack/hack.component.ts");
/* harmony import */ var _contri_contri_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./contri/contri.component */ "./src/app/contri/contri.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_page_layout_home_page_layout_component__WEBPACK_IMPORTED_MODULE_5__["HomePageLayoutComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _community_partner_community_partner_component__WEBPACK_IMPORTED_MODULE_7__["CommunityPartnerComponent"],
                _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_8__["SubscribeComponent"],
                _speakers_speakers_component__WEBPACK_IMPORTED_MODULE_9__["SpeakersComponent"],
                _team_team_component__WEBPACK_IMPORTED_MODULE_10__["TeamComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _sponsers_sponsers_component__WEBPACK_IMPORTED_MODULE_12__["SponsersComponent"],
                _upcom_meetings_upcom_meetings_component__WEBPACK_IMPORTED_MODULE_13__["UpcomMeetingsComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"],
                _top_slider_top_slider_component__WEBPACK_IMPORTED_MODULE_15__["TopSliderComponent"],
                _shashank_shashank_component__WEBPACK_IMPORTED_MODULE_17__["ShashankComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_18__["AboutComponent"],
                _hack_hack_component__WEBPACK_IMPORTED_MODULE_19__["HackComponent"],
                _contri_contri_component__WEBPACK_IMPORTED_MODULE_20__["ContriComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__["AngularFontAwesomeModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/community-partner/community-partner.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/community-partner/community-partner.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".community-partner-div { padding: 50px 0; }\n\nh2 { color: #212739; font-family: Oswald, sans-serif; letter-spacing: 1.2px; }\n\n.row { margin-top: 20px; }\n\n.img-div { height: 150px; line-height: 155px; }\n\nimg { width: 100%; }\n\n@media only screen and (max-width: 767px) {\n  img { width: 70%; }\n}\n"

/***/ }),

/***/ "./src/app/community-partner/community-partner.component.html":
/*!********************************************************************!*\
  !*** ./src/app/community-partner/community-partner.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"community\">\n  <div class=\"container community-partner-div text-center\">\n    <h2 class=\"text-uppercase font-weight-bold\">community partner</h2>\n    <div class=\"row\">\n      <div class=\"col-sm-12 col-md-3\">\n        <div class=\"img-div\">\n          <img src=\"assets/img/1.jpg\">\n        </div>\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <div class=\"img-div\">\n          <img src=\"assets/img/2.jpg\">\n        </div>\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <div class=\"img-div\">\n          <img src=\"assets/img/3.png\">\n        </div>\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <div class=\"img-div\">\n          <img src=\"assets/img/4.png\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/community-partner/community-partner.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/community-partner/community-partner.component.ts ***!
  \******************************************************************/
/*! exports provided: CommunityPartnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityPartnerComponent", function() { return CommunityPartnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommunityPartnerComponent = /** @class */ (function () {
    function CommunityPartnerComponent() {
    }
    CommunityPartnerComponent.prototype.ngOnInit = function () {
    };
    CommunityPartnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-community-partner',
            template: __webpack_require__(/*! ./community-partner.component.html */ "./src/app/community-partner/community-partner.component.html"),
            styles: [__webpack_require__(/*! ./community-partner.component.css */ "./src/app/community-partner/community-partner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommunityPartnerComponent);
    return CommunityPartnerComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-div { padding: 40px 0; }\n\n.form-control { font-size: 14px; color: #555; }\n\n.form-control:focus { border: 1px solid #ced4da; box-shadow: none; }\n\n.form-col { margin: 0 auto; }\n\n.sub-btn { padding: 6px 40px; background-color: #2b3142; color: #708090; font-size: 18px; }\n\n@media only screen and (max-width: 767px) {\n  .form-control {\n    width: 90%;\n    margin: 0 auto;\n  }\n}\n"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center contact-div\">\n  <div class=\"row\">\n    <div class=\"col-sm-10 col-md-10 col-lg-10 col-lg-offset-2 col-md-offset-2 col-sm-offset-2 form-col\">\n      <form>\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"nameHelp\" placeholder=\"Name\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" id=\"exampleInput1\" placeholder=\"Email Subject\">\n        </div>\n        <div class=\"form-group\">\n          <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"6\" placeholder=\"Message\"></textarea>\n        </div>\n        <button type=\"submit\" class=\"btn sub-btn text-uppercase font-weight-bold\">Submit</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/contri/contri.component.css":
/*!*********************************************!*\
  !*** ./src/app/contri/contri.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contri { padding: 40px 0; }\n\nh2 { color: #212739; font-family: Oswald, sans-serif; letter-spacing: 1.2px; margin-bottom: 40px; }\n"

/***/ }),

/***/ "./src/app/contri/contri.component.html":
/*!**********************************************!*\
  !*** ./src/app/contri/contri.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contri\">\n  <h2 class=\"text-uppercase font-weight-bold text-center\">contributors</h2>\n</div>"

/***/ }),

/***/ "./src/app/contri/contri.component.ts":
/*!********************************************!*\
  !*** ./src/app/contri/contri.component.ts ***!
  \********************************************/
/*! exports provided: ContriComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContriComponent", function() { return ContriComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContriComponent = /** @class */ (function () {
    function ContriComponent() {
    }
    ContriComponent.prototype.ngOnInit = function () {
    };
    ContriComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contri',
            template: __webpack_require__(/*! ./contri.component.html */ "./src/app/contri/contri.component.html"),
            styles: [__webpack_require__(/*! ./contri.component.css */ "./src/app/contri/contri.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContriComponent);
    return ContriComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer { background-color: #2b3142; padding-top: 60px; padding-bottom: 24px; }\n\n.link-title {\n  color: #708090; font-size: 23px;\n  font-family: Oswald, sans-serif; letter-spacing: 1.5px;\n}\n\nul { list-style-type: none; padding-left: 0; }\n\na { color: #fff; opacity: 0.5; }\n\na:hover { text-decoration: none; }\n\n.li-item { color: #fff; opacity: 0.5; }\n\n.list-inline-item {\n  height: 45px;\n  width: 45px;\n  border-radius: 50%;\n  background-color: #fff;\n  opacity: .5;\n  text-align: center;\n}\n\n.list-inline-item:not(:last-child) { margin-right: 6px; }\n\ni { color: #212739; font-size: 24px; line-height: 45px; }\n\n@media only screen and (max-width: 991px) and (min-width: 768px) {\n  .list-inline-item { margin-bottom: 10px; }\n}\n\n@media only screen and (max-width: 767px) {\n  .list-inline-item { height: 40px; width: 40px; margin-bottom: 10px; }\n  i { font-size: 20px; line-height: 40px; }\n  .child-div { margin-bottom: 10px; }\n}\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"container\">\n    <div class=\"row\">\n      \n      <div class=\"col-md-3 child-div\">\n        <div class=\"links-div\">\n          <h3 class=\"link-title text-uppercase font-weight-bold\">links</h3>\n          <ul class=\"link-ul\">\n            <li><a routerLink=\"/home\">Home</a></li>\n            <li><a routerLink=\"/team\">About Us</a></li>\n            <li><a routerLink=\"/hack\">Upcoming Meetings</a></li>\n            <li><a routerLink=\"/upcom\">Past Meetups</a></li>\n            <li><a routerLink=\"/sponsers\">Sponsors</a></li>\n            <li><a routerLink=\"/commu\">Community Partners</a></li>\n            <li><a routerLink=\"/contact\">Contact Us</a></li>\n          </ul>\n        </div>\n      </div>\n\n      <div class=\"col-md-4 child-div\">\n        <div class=\"contact-div\">\n          <h3 class=\"link-title text-uppercase font-weight-bold\">contact info</h3>\n          <ul>\n            <li class=\"li-item\">contact@techtalks.co.in</li>\n            <li class=\"li-item\">contact@hostingjunction.in</li>\n          </ul>\n        </div>\n      </div>\n\n      <div class=\"col-md-5 child-div\">\n        <div class=\"follow-div\">\n          <h3 class=\"link-title text-uppercase font-weight-bold\">follow us on</h3>\n          <ul class=\"list-inline\">\n            <li class=\"list-inline-item\">\n              <a href=\"https://www.facebook.com/GlobalTechTalks/\" class=\"social-icon-link\">\n                <i class=\"fa fa-facebook\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a href=\"https://twitter.com/globaltechtalks\" class=\"social-icon-link\">\n                <i class=\"fa fa-twitter\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a href=\"https://t.me/globaltechtalks\" class=\"social-icon-link\">\n                <i class=\"fa fa-telegram\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a href=\"https://medium.com/@globaltechtalks\" class=\"social-icon-link\">\n                <i class=\"fa fa-medium\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a href=\"https://globaltechtalks.slack.com/\" class=\"social-icon-link\">\n                <i class=\"fa fa-slack\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a href=\"https://github.com/GlobalTechTalks\" class=\"social-icon-link\">\n                <i class=\"fa fa-github\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a href=\"https://www.youtube.com/channel/UCcxKkGgO0eNe-pDTQE3jYvQ\" class=\"social-icon-link\">\n                <i class=\"fa fa-youtube\"></i>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/hack/hack.component.css":
/*!*****************************************!*\
  !*** ./src/app/hack/hack.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hacktober { padding: 40px 0; }\n\nh2 { color: #212739; font-family: Oswald, sans-serif; letter-spacing: 1.2px; margin-bottom: 50px; }\n\nimg { width: 100%; }\n\n/* img { width: 130%; } */\n\n.hack-content { padding: 30px 0; }\n\n.content { font-family: Oswald, sans-serif; font-size: 20px; margin: auto; letter-spacing: 0.5px; }\n\n.date { margin-top: 10px; font-family: Oswald, sans-serif; letter-spacing: 0.5px; }\n"

/***/ }),

/***/ "./src/app/hack/hack.component.html":
/*!******************************************!*\
  !*** ./src/app/hack/hack.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hacktober text-center\">\n  <div class=\"container\">\n    <h2 class=\"text-uppercase font-weight-bold\">upcoming meetup</h2>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"meetup\">\n          <img src=\"assets/img/hack.jpg\">\n        </div>\n      </div>\n      <!-- <div class=\"col-md-7\">\n        <div class=\"hack-banner\">\n          <img src=\"assets/img/hack.jpeg\">\n        </div>\n      </div>\n      <div class=\"col-md-5\">\n        <div class=\"hack-content\">\n          <p class=\"content\">TechTalks is going to organise a meetup based on hacktoberfest with digital ocean.</p>\n          <p class=\"date\">October 13, 2018</p>\n        </div>\n      </div> -->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/hack/hack.component.ts":
/*!****************************************!*\
  !*** ./src/app/hack/hack.component.ts ***!
  \****************************************/
/*! exports provided: HackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HackComponent", function() { return HackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HackComponent = /** @class */ (function () {
    function HackComponent() {
    }
    HackComponent.prototype.ngOnInit = function () {
    };
    HackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hack',
            template: __webpack_require__(/*! ./hack.component.html */ "./src/app/hack/hack.component.html"),
            styles: [__webpack_require__(/*! ./hack.component.css */ "./src/app/hack/hack.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HackComponent);
    return HackComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar { background: rgba(33,39,57,.95); }\n\n.navbar-brand { color: #fff; font-family: 'Megrim', cursive; font-weight: bold; font-size: 30px;\n  letter-spacing: 1.5px;\n}\n\n.navbar-light .navbar-nav  .active > .nav-link {\n  color: #708090;\n  text-transform: uppercase;\n  font-weight: bold;\n  letter-spacing: 1px;\n}\n\n.navbar-light .navbar-brand:hover { color: #fff; }\n\n.navbar-light .navbar-nav .nav-link { color: #708090; text-transform: uppercase;\n  font-family: 'Oswald', sans-serif; font-weight: bold; letter-spacing: 1px;\n}\n\n.btn { border: none; background-color: transparent; }\n\n.btn:focus { box-shadow: none !important; }\n\n.dropdown-toggle::after { margin-left: 0.5rem; }\n\n.ngdropdown { background-color: #ECEFF1; }\n\n.dropdown-item.active, .dropdown-item:active { background: rgba(33,39,57,.95); }\n\n@media only screen and (max-width: 767px) {\n  .navbar-toggler { border-color: #fff; }\n  .navbar-toggler i { color: #fff; }\n}\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\">TECHTALKS</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span>\n        <i class=\"fa fa-bars\"></i>\n      </span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarNavDropdown\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink=\"/home\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/about\">about us</a>\n        </li>\n        <li class=\"nav-item\">\n          <div ngbDropdown class=\"d-inline-block\">\n            <button class=\"btn nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle>meetup</button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"ngdropdown\">\n              <button class=\"dropdown-item\" routerLink=\"/hack\">Upcoming Meetups</button>\n              <button class=\"dropdown-item\" routerLink=\"/upcom\">Past Meetups</button>\n            </div>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <div ngbDropdown class=\"d-inline-block\">\n            <button class=\"btn nav-link\" id=\"dropdownBasic2\" ngbDropdownToggle>Partners</button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\" class=\"ngdropdown\">\n              <button class=\"dropdown-item\" routerLink=\"/sponsers\">Sponsers</button>\n              <button class=\"dropdown-item\" routerLink=\"/commu\">Community Partners</button>\n            </div>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/past\">past speakers</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/contri\">contributor</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/contact\">contact us</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home-page-layout/home-page-layout.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/home-page-layout/home-page-layout.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home-page-layout/home-page-layout.component.html":
/*!******************************************************************!*\
  !*** ./src/app/home-page-layout/home-page-layout.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-subscribe></app-subscribe>\n"

/***/ }),

/***/ "./src/app/home-page-layout/home-page-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/home-page-layout/home-page-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: HomePageLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageLayoutComponent", function() { return HomePageLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageLayoutComponent = /** @class */ (function () {
    function HomePageLayoutComponent() {
    }
    HomePageLayoutComponent.prototype.ngOnInit = function () {
    };
    HomePageLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page-layout',
            template: __webpack_require__(/*! ./home-page-layout.component.html */ "./src/app/home-page-layout/home-page-layout.component.html"),
            styles: [__webpack_require__(/*! ./home-page-layout.component.css */ "./src/app/home-page-layout/home-page-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageLayoutComponent);
    return HomePageLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shashank/shashank.component.css":
/*!*************************************************!*\
  !*** ./src/app/shashank/shashank.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shashank/shashank.component.html":
/*!**************************************************!*\
  !*** ./src/app/shashank/shashank.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shashank/shashank.component.ts":
/*!************************************************!*\
  !*** ./src/app/shashank/shashank.component.ts ***!
  \************************************************/
/*! exports provided: ShashankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShashankComponent", function() { return ShashankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShashankComponent = /** @class */ (function () {
    function ShashankComponent() {
    }
    ShashankComponent.prototype.ngOnInit = function () {
    };
    ShashankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shashank',
            template: __webpack_require__(/*! ./shashank.component.html */ "./src/app/shashank/shashank.component.html"),
            styles: [__webpack_require__(/*! ./shashank.component.css */ "./src/app/shashank/shashank.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShashankComponent);
    return ShashankComponent;
}());



/***/ }),

/***/ "./src/app/speakers/speakers.component.css":
/*!*************************************************!*\
  !*** ./src/app/speakers/speakers.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".speakers { background-color: #f8f8f8; padding: 50px 0; }\n\nh2 { color: #212739; font-family: Oswald, sans-serif; letter-spacing: 1.2px; margin-bottom: 40px; }\n\n.speak-div {\n  width: 32.33%;\n  background-color: #fff;\n  display: inline-block;\n  vertical-align: top;\n  padding: 20px 15px;\n  border-radius: 10px;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);\n}\n\n.speak1 { margin-right: 13px; }\n\n.speak2 { margin-right: 13px; }\n\nimg { width: 80px; height: 80px; border-radius: 50%; }\n\n.name { font-size: 19px; color: #313f47; letter-spacing: 1.8px; margin-bottom: 10px; font-family: Oswald, sans-serif;}\n\n.social-a { color: #c8cccf; font-size: 20px; margin-right: 13px; }\n\n.more { color: #313f47; font-family: 'Raleway', sans-serif; letter-spacing: 1px; }\n\n@media only screen and (max-width: 991px) and (min-width: 768px) {\n  .speak-div {\n    width: 46.33%;\n    height: 140px;\n    margin-bottom: 15px;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .speak-div {\n    width: 100%;\n    height: 140px;\n    margin-bottom: 15px;\n  }\n}\n"

/***/ }),

/***/ "./src/app/speakers/speakers.component.html":
/*!**************************************************!*\
  !*** ./src/app/speakers/speakers.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"speakers text-center\">\n  <div class=\"container\">\n    <h2 class=\"text-uppercase font-weight-bold\">past speakers</h2>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n\n        <div class=\"speak1 speak-div\">\n          <div class=\"media\">\n            <img src=\"assets/img/nupur.jpg\">\n            <div class=\"media-body\">\n              <h4 class=\"mt-0 text-uppercase name\">nupur agrahari</h4>\n              <a href=\"https://github.com/nupuragrahari\" class=\"social-a\"><i class=\"fa fa-github\"></i></a>\n              <a href=\"https://twitter.com/nupur493\" class=\"social-a\"><i class=\"fa fa-twitter\"></i></a>\n              <a href=\"https://www.linkedin.com/in/nupur-agrahari-088b91a4/\" class=\"social-a\"><i class=\"fa fa-linkedin\"></i></a>\n              <a href=\"#\" class=\"social-a\"><i class=\"fa fa-facebook\"></i></a>\n              <a href=\"#\" class=\"social-a\"><i class=\"fa fa-medium\"></i></a>\n              <div><a href=\"#\" class=\"more\"><small>More About me</small></a></div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"speak2 speak-div\">\n          <div class=\"media\">\n            <img src=\"assets/img/ankit.jpg\">\n            <div class=\"media-body\">\n              <h4 class=\"mt-0 text-uppercase name\">ankit giri</h4>\n              <a href=\"#\" class=\"social-a\"><i class=\"fa fa-github\"></i></a>\n              <a href=\"#\" class=\"social-a\"><i class=\"fa fa-twitter\"></i></a>\n              <a href=\"#\" class=\"social-a\"><i class=\"fa fa-linkedin\"></i></a>\n              <a href=\"#\" class=\"social-a\"><i class=\"fa fa-facebook\"></i></a>\n              <a href=\"#\" class=\"social-a\"><i class=\"fa fa-medium\"></i></a>\n              <div><a href=\"#\" class=\"more\"><small>More About me</small></a></div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"speak3 speak-div\">\n          <div class=\"media\">\n            <img src=\"assets/img/shashank.jpg\">\n            <div class=\"media-body\">\n              <h4 class=\"mt-0 text-uppercase name\">shashank kumar</h4>\n              <a href=\"https://github.com/realslimshanky\" class=\"social-a\"><i class=\"fa fa-github\"></i></a>\n              <a href=\"https://twitter.com/realslimshanky\" class=\"social-a\"><i class=\"fa fa-twitter\"></i></a>\n              <a href=\"https://www.linkedin.com/in/shashankkumarkushwaha/\" class=\"social-a\"><i class=\"fa fa-linkedin\"></i></a>\n              <a href=\"#\" class=\"social-a\"><i class=\"fa fa-facebook\"></i></a>\n              <a href=\"#\" class=\"social-a\"><i class=\"fa fa-medium\"></i></a>\n              <div><a href=\"#\" class=\"more\"><small>More About me</small></a></div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/speakers/speakers.component.ts":
/*!************************************************!*\
  !*** ./src/app/speakers/speakers.component.ts ***!
  \************************************************/
/*! exports provided: SpeakersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakersComponent", function() { return SpeakersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpeakersComponent = /** @class */ (function () {
    function SpeakersComponent() {
    }
    SpeakersComponent.prototype.ngOnInit = function () {
    };
    SpeakersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-speakers',
            template: __webpack_require__(/*! ./speakers.component.html */ "./src/app/speakers/speakers.component.html"),
            styles: [__webpack_require__(/*! ./speakers.component.css */ "./src/app/speakers/speakers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpeakersComponent);
    return SpeakersComponent;
}());



/***/ }),

/***/ "./src/app/sponsers/sponsers.component.css":
/*!*************************************************!*\
  !*** ./src/app/sponsers/sponsers.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sponsers { padding: 70px 0; background: rgba(241, 241, 241, .85); }\n\nh2 { color: #212739; font-family: Oswald, sans-serif; letter-spacing: 1.2px; margin-bottom: 58px; }\n"

/***/ }),

/***/ "./src/app/sponsers/sponsers.component.html":
/*!**************************************************!*\
  !*** ./src/app/sponsers/sponsers.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sponsers text-center\">\n  <h2 class=\"text-uppercase font-weight-bold\">sponsers</h2>\n  <div class=\"sponsers-img\">\n    <a href=\"#\">\n      <img src=\"assets/img/hackerspace.png\">\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sponsers/sponsers.component.ts":
/*!************************************************!*\
  !*** ./src/app/sponsers/sponsers.component.ts ***!
  \************************************************/
/*! exports provided: SponsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsersComponent", function() { return SponsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SponsersComponent = /** @class */ (function () {
    function SponsersComponent() {
    }
    SponsersComponent.prototype.ngOnInit = function () {
    };
    SponsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sponsers',
            template: __webpack_require__(/*! ./sponsers.component.html */ "./src/app/sponsers/sponsers.component.html"),
            styles: [__webpack_require__(/*! ./sponsers.component.css */ "./src/app/sponsers/sponsers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SponsersComponent);
    return SponsersComponent;
}());



/***/ }),

/***/ "./src/app/subscribe/subscribe.component.css":
/*!***************************************************!*\
  !*** ./src/app/subscribe/subscribe.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".subscribe { padding: 30px 0; }\n\nh2 { color: #708090; font-family: Oswald, sans-serif; margin-bottom: 45px; }\n\n.form-group { display: inline-block; vertical-align: top; }\n\ninput { border-radius: 4px 0 0 4px; }\n\n.form-control { font-size: 14px; }\n\n.form-control:focus { border: 1px solid #ced4da; box-shadow: none; }\n\nbutton { vertical-align: top; border-radius: 0 4px 4px 0; background-color: #2b3142; color: #708090; }\n\n/*form { margin-bottom: 30px; }*/\n\n@media only screen and (max-width: 767px) {\n  h2 { font-size: 25px; }\n}\n"

/***/ }),

/***/ "./src/app/subscribe/subscribe.component.html":
/*!****************************************************!*\
  !*** ./src/app/subscribe/subscribe.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"subscribe\">\n  <div class=\"container text-center\">\n    <h2 class=\"text-uppercase font-weight-bold\">subscribe & stay updated</h2>\n    <form>\n      <div class=\"form-group\">\n        <input type=\"email\" class=\"form-control\" placeholder=\"Enter your e-mail address\">\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btn\">Subscribe</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/subscribe/subscribe.component.ts":
/*!**************************************************!*\
  !*** ./src/app/subscribe/subscribe.component.ts ***!
  \**************************************************/
/*! exports provided: SubscribeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeComponent", function() { return SubscribeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubscribeComponent = /** @class */ (function () {
    function SubscribeComponent() {
    }
    SubscribeComponent.prototype.ngOnInit = function () {
    };
    SubscribeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subscribe',
            template: __webpack_require__(/*! ./subscribe.component.html */ "./src/app/subscribe/subscribe.component.html"),
            styles: [__webpack_require__(/*! ./subscribe.component.css */ "./src/app/subscribe/subscribe.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SubscribeComponent);
    return SubscribeComponent;
}());



/***/ }),

/***/ "./src/app/team/team.component.css":
/*!*****************************************!*\
  !*** ./src/app/team/team.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".team { padding-top: 40px; padding-bottom: 40px; }\n\nh2 { color: #212739; font-family: Oswald, sans-serif; letter-spacing: 1.2px; margin-bottom: 40px; }\n\nul {\n  width: 100%;\n  height: 60%;\n  margin-bottom: 30%;\n  padding: 0;\n}\n\nul li {\n  list-style: none;\n  position: relative;\n  width: 16.66%;\n  height: 315px;\n  float: left;\n  box-sizing: border-box;\n  transition: 0.5s;\n  text-align: center;\n  overflow: hidden;\n}\n\nul li:nth-child(1) {\n  background: url('shrreya.jpg');\n  background-size: cover;\n  background-position: left;\n}\n\nul li:nth-child(2) {\n  background: url('manas.jpg');\n  background-size: cover;\n  background-position: left;\n}\n\nul li:nth-child(3) {\n  background: url('amit.jpeg');\n  background-size: cover;\n  background-position: left;\n}\n\nul li:nth-child(4) {\n  background: url('apoorva.jpg');\n  background-size: cover;\n  background-position: left;\n}\n\nul li:nth-child(5) {\n  background: url('arpit.jpeg');\n  background-size: cover;\n  background-position: left;\n}\n\nul li:nth-child(6) {\n  background: url('shubham.jpeg');\n  background-size: cover;\n  background-position: left;\n}\n\nul:hover li {\n  width: 16%;\n}\n\nul li:hover {\n  width: 20%;\n}\n\nul li .content {\n  position: absolute;\n  bottom: -100%;\n  font-size: 13px; \n  left: 0;\n  padding-top: 5px; \n  padding-bottom: 5px;\n  font-family: Oswald, sans-serif; \n  letter-spacing: 0.8px;\n  width: 100%;\n  background: #2b3142;\n  box-sizing: border-box;\n  color: #708090;\n  opacity: 0;\n}\n\n.name { margin-bottom: 0; }\n\nul li:hover .content {\n  bottom: 0;\n  transition: 0.5s;\n  transition-delay: 0.3s;\n  opacity: 1;\n}\n\n.content1 {\n  position: absolute;\n  bottom: -100%;\n  font-size: 10px; \n  left: 0;\n  padding-top: 5px; \n  padding-bottom: 5px;\n  font-family: Oswald, sans-serif; \n  letter-spacing: 0.8px;\n  width: 100%;\n  background: #2b3142;\n  box-sizing: border-box;\n  color: #708090;\n  opacity: 0;\n}\n\n.carousel-item:hover .content1 {\n  bottom: 0;\n  transition: 0.5s;\n  transition-delay: 0.3s;\n  opacity: 1;\n}\n\n.i1 {\n  background: url('shrreya.jpg');\n  background-size: cover;\n  height: 250px;\n}\n\n.i2 {\n  background: url('manas.jpg');\n  background-size: cover;\n  height: 250px;\n}\n\n.i3 {\n  background: url('amit.jpeg');\n  background-size: cover;\n  height: 250px;\n}\n\n.i4 {\n  background: url('apoorva.jpg');\n  background-size: cover;\n  height: 250px;\n}\n\n.i5 {\n  background: url('arpit.jpeg');\n  background-size: cover;\n  height: 250px;\n}\n\n.i6 {\n  background: url('shubham.jpeg');\n  background-size: cover;\n  height: 250px;\n}\n\n.carousel-item.active,\n.carousel-item.active + .carousel-item,\n.carousel-item.active + .carousel-item  + .carousel-item {\n    width: 33.3%;\n    display: block;\n    float:left;\n}\n\n@media only screen and (max-width: 1200px) and (min-width: 992px) {\n  ul { margin-bottom: 40%; }\n}\n"

/***/ }),

/***/ "./src/app/team/team.component.html":
/*!******************************************!*\
  !*** ./src/app/team/team.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"team\">\n  <h2 class=\"text-uppercase font-weight-bold text-center\">the team</h2>\n\n  <ul class=\"d-sm-none d-md-none d-lg-block\">\n\n    <li>\n      <div class=\"content\">\n        <h4 class=\"name text-uppercase font-weight-bold\">shrreya behll</h4>\n      </div>\n    </li>\n\n    <li>\n      <div class=\"content\">\n        <h4 class=\"name text-uppercase font-weight-bold\">manas kashyap</h4>\n      </div>\n    </li>\n\n    <li>\n      <div class=\"content\">\n        <h4 class=\"name text-uppercase font-weight-bold\">amit</h4>\n      </div>\n    </li>\n\n    <li>\n      <div class=\"content\">\n        <h4 class=\"name text-uppercase font-weight-bold\">apoorva</h4>\n      </div>\n    </li>\n\n    <li>\n      <div class=\"content\">\n        <h4 class=\"name text-uppercase font-weight-bold\">arpit</h4>\n      </div>\n    </li>\n\n    <li>\n      <div class=\"content\">\n        <h4 class=\"name text-uppercase font-weight-bold\">shubham</h4>\n      </div>\n    </li>\n\n  </ul>\n\n  \n  <div class=\"slider carousel-wrapper d-lg-none d-xl-none\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n              <ol class=\"carousel-indicators\">\n                <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n                <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n                <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n              </ol>\n              <div class=\"carousel-inner\" role=\"listbox\">\n                <div class=\"carousel-item active i1\">\n                  <div class=\"content1 text-center\">\n                    <h5 class=\"name text-uppercase font-weight-bold\">shrreya behll</h5>\n                  </div>\n                </div>\n                <div class=\"carousel-item i2\">\n                  <div class=\"content1 text-center\">\n                    <h5 class=\"name text-uppercase font-weight-bold\">manas</h5>\n                  </div>\n                </div>    \n                <div class=\"carousel-item i3\">\n                  <div class=\"content1 text-center\">\n                    <h5 class=\"name text-uppercase font-weight-bold\">amit</h5>\n                  </div>\n                </div>    \n                <div class=\"carousel-item i4\">\n                  <div class=\"content1 text-center\">\n                    <h5 class=\"name text-uppercase font-weight-bold\">apoorva</h5>\n                  </div>\n                </div>    \n                <div class=\"carousel-item i5\">\n                  <div class=\"content1 text-center\">\n                    <h5 class=\"name text-uppercase font-weight-bold\">arpit</h5>\n                  </div>\n                </div>    \n                <div class=\"carousel-item i6\">\n                  <div class=\"content1 text-center\">\n                    <h5 class=\"name text-uppercase font-weight-bold\">shubham</h5>\n                  </div>\n                </div>    \n              </div>\n              <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n                <span class=\"icon-prev\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Previous</span>\n              </a>\n              <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\n                <span class=\"icon-next\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Next</span>\n              </a>\n            </div>            \n          </div>\n        </div>\n      </div>\n    </div>\n    \n</div>"

/***/ }),

/***/ "./src/app/team/team.component.ts":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
        jquery__WEBPACK_IMPORTED_MODULE_1__('#carousel-example-generic').on('slid.bs.carousel', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__(".carousel-item.active:nth-child(" + (jquery__WEBPACK_IMPORTED_MODULE_1__(".carousel-inner .carousel-item").length - 1) + ") + .carousel-item").insertBefore(jquery__WEBPACK_IMPORTED_MODULE_1__(".carousel-item:first-child"));
            jquery__WEBPACK_IMPORTED_MODULE_1__(".carousel-item.active:last-child").insertBefore(jquery__WEBPACK_IMPORTED_MODULE_1__(".carousel-item:first-child"));
        });
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.css */ "./src/app/team/team.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/top-slider/top-slider.component.css":
/*!*****************************************************!*\
  !*** ./src/app/top-slider/top-slider.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-bg .carousel-inner  .carousel-item {\n    background-size: cover;\n    background-position: center;\n    min-height: 450px;\n    background-repeat: no-repeat;\n}\n\n.carousel, .carousel-item, .active {\n    height: 100%;\n}\n\n.carousel-inner {\n    height: 100%;\n}\n\n.carousel-caption {\n    bottom: 25%;\n    left: 35%;\n    right: 15%;\n}\n\nh2 , h1 , h5 { font-family: Oswald, sans-serif; letter-spacing: 6px; }\n\nh2 { font-size: 40px; }\n\nh1 { font-size: 60px; }\n\nh5 { font-size: 26px; }\n\n.first-slide {\n    background-image: url('slider1.jpg');\n}\n\n.second-slide {\n    background-image: url('slider2.jpg');\n}\n\n.third-slide {\n    background-image: url('slider3.jpg');\n}\n\n.carousel-control-prev {\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n.carousel-control-next, .carousel-control-prev {\n    width: 50px;\n    top: 38%;\n    bottom: inherit;\n    background-color: rgba(0,0,0,0.7);\n    padding: 8px 7px;\n}\n\n@media only screen and (max-width: 767px) {\n  h2 { font-size: 20px; }\n  h1 { font-size: 40px; }\n  h5 { font-size: 12px; }\n  .carousel-caption { bottom: 30%; left: 28%; }\n}\n"

/***/ }),

/***/ "./src/app/top-slider/top-slider.component.html":
/*!******************************************************!*\
  !*** ./src/app/top-slider/top-slider.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel slide carousel-bg\" id=\"carouselExampleControls\" data-ride=\"carousel\">\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\">\n      <div class=\"carousel-item first-slide active\">\n      </div>\n      <div class=\"carousel-item second-slide\">\n      </div>\n      <div class=\"carousel-item third-slide\">\n      </div>\n  </div>\n  <div class=\"carousel-caption text-left\">\n      <h2 class=\"text-uppercase\">next meetup:</h2>\n      <h1 class=\"text-uppercase font-weight-bold\">hacker space</h1>\n      <h5 class=\"white-text third-heading\">On October 12' 2018</h5>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n    <img src=\"assets/img/prev.png\" class=\"prev-top\">\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n    <img src=\"assets/img/next.png\" class=\"next-top\">\n  </a>\n\n</div>"

/***/ }),

/***/ "./src/app/top-slider/top-slider.component.ts":
/*!****************************************************!*\
  !*** ./src/app/top-slider/top-slider.component.ts ***!
  \****************************************************/
/*! exports provided: TopSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopSliderComponent", function() { return TopSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopSliderComponent = /** @class */ (function () {
    function TopSliderComponent() {
    }
    TopSliderComponent.prototype.ngOnInit = function () {
    };
    TopSliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-slider',
            template: __webpack_require__(/*! ./top-slider.component.html */ "./src/app/top-slider/top-slider.component.html"),
            styles: [__webpack_require__(/*! ./top-slider.component.css */ "./src/app/top-slider/top-slider.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopSliderComponent);
    return TopSliderComponent;
}());



/***/ }),

/***/ "./src/app/upcom-meetings/upcom-meetings.component.css":
/*!*************************************************************!*\
  !*** ./src/app/upcom-meetings/upcom-meetings.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".past-meet { padding: 40px 0; background-color: #ECEFF1; }\n\n.past-meet-heading { color: #212739; font-family: Oswald, sans-serif; letter-spacing: 1.2px; margin-bottom: 50px; }\n\n.meet { display: inline-block; width: 50%; overflow-x: hidden; vertical-align: top; }\n\nstrong { font-size: 25px; font-family: Oswald, sans-serif; letter-spacing: 1px; }\n\nsmall { display: block; margin-top: 10px; font-family: Oswald, sans-serif; letter-spacing: 0.5px; }\n\n.img { margin-top: 20px; margin-bottom: 20px; position: relative; }\n\nimg { width: 70%; height: 250px; border: 5px solid #2b3142; border-radius: 15px; }\n\np { font-family: Oswald, sans-serif; width: 70%; margin: auto; letter-spacing: 0.5px; }\n\n/*.img:before {\n  content: \"\";\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  background-color: rgba(25,31,62,0.7);\n  background-size: 400%;\n  width: calc(100% + 4px);\n  height: calc(100% + 4px);\n  z-index: -1;\n}*/\n\na { cursor: pointer; }\n\n@media only screen and (max-width: 991px) and (min-width: 768px) {\n  img { width: 80%; }\n  p { width: 80%; }\n}\n\n@media only screen and (max-width: 767px) {\n  p { width: 100%; }\n  .meet { width: 100%; margin-bottom: 20px; }\n}\n"

/***/ }),

/***/ "./src/app/upcom-meetings/upcom-meetings.component.html":
/*!**************************************************************!*\
  !*** ./src/app/upcom-meetings/upcom-meetings.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"past-meet\">\n  <div class=\"container\">\n    <h2 class=\"past-meet-heading text-uppercase text-center font-weight-bold\">past meetings</h2>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"meets\">\n\n          <div class=\"meet1 text-center meet\">\n            <div class=\"meet1-inner\">\n              <strong><a>TechTalks</a></strong>\n              <small>Sunday, August 12, 2018</small>\n              <div class=\"img\"><img src=\"assets/img/pm1.jpg\"></div>\n              <div class=\"meet-content\">\n                <p class=\"meet-content\">Topics: Cloud Security‍ and; Best Practices in Digital Ocean Cloud, Javascript and the event loop and GSOC Student</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"meet2 text-center meet\">\n            <strong><a>Bear-To-Bull Market Meetup</a></strong>\n            <small>Saturday, September 1, 2018</small>\n            <div class=\"img\"><img src=\"assets/img/bear_to_bull.jpeg\"></div>\n            <div class=\"meet-content\">\n              <p class=\"meet-content\">Topic: Blockchain</p>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/upcom-meetings/upcom-meetings.component.ts":
/*!************************************************************!*\
  !*** ./src/app/upcom-meetings/upcom-meetings.component.ts ***!
  \************************************************************/
/*! exports provided: UpcomMeetingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomMeetingsComponent", function() { return UpcomMeetingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpcomMeetingsComponent = /** @class */ (function () {
    function UpcomMeetingsComponent() {
    }
    UpcomMeetingsComponent.prototype.ngOnInit = function () {
    };
    UpcomMeetingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upcom-meetings',
            template: __webpack_require__(/*! ./upcom-meetings.component.html */ "./src/app/upcom-meetings/upcom-meetings.component.html"),
            styles: [__webpack_require__(/*! ./upcom-meetings.component.css */ "./src/app/upcom-meetings/upcom-meetings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UpcomMeetingsComponent);
    return UpcomMeetingsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/apoorva/Website/new/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map