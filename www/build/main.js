webpackJsonp([0],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventDetailsPage = /** @class */ (function () {
    function EventDetailsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EventDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-details',template:/*ion-inline-start:"/Users/phoenix/Documents/GitHub/PartyFowl/src/pages/event-details/event-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Event Details\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page8">\n  <ion-list id="eventDetails-list9">\n    <ion-item color="none" id="eventDetails-list-item42">\n      Address\n    </ion-item>\n    <ion-item color="none" id="eventDetails-list-item43">\n      Capacity\n    </ion-item>\n    <ion-item color="none" id="eventDetails-list-item44">\n      Description\n    </ion-item>\n    <ion-item id="eventDetails-radio8">\n      <ion-label>\n        What to Bring\n      </ion-label>\n      <ion-radio></ion-radio>\n    </ion-item>\n    <ion-item color="none" id="eventDetails-list-item47">\n      Attendees\n    </ion-item>\n    <ion-item id="eventDetails-toggle8">\n      <ion-label>\n        Attending?\n      </ion-label>\n      <ion-toggle color="positive" checked="false"></ion-toggle>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/phoenix/Documents/GitHub/PartyFowl/src/pages/event-details/event-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], EventDetailsPage);
    return EventDetailsPage;
}());

//# sourceMappingURL=event-details.js.map

/***/ }),

/***/ 145:
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
webpackEmptyAsyncContext.id = 145;

/***/ }),

/***/ 187:
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
webpackEmptyAsyncContext.id = 187;

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/phoenix/Documents/GitHub/PartyFowl/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page1">\n  <div class="spacer" style="width:300px;height:182px;" id="home-spacer3"></div>\n  <div id="home-markdown1" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#887D7D;">\n      Welcome to Party Fowl! Looks like this is your first time signing in, head over to your Profile page to add some interests, or get started organizing your first event!\n    </p>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/phoenix/Documents/GitHub/PartyFowl/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_details_event_details__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateEventPage = /** @class */ (function () {
    function CreateEventPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CreateEventPage.prototype.goToEventDetails = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__event_details_event_details__["a" /* EventDetailsPage */]);
    };
    CreateEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-event',template:/*ion-inline-start:"/Users/phoenix/Documents/GitHub/PartyFowl/src/pages/create-event/create-event.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Create Event\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2">\n  <ion-card id="createEvent-card23">\n    <ion-list>\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n        <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n      </div>\n      <form id="createEvent-form5">\n        <ion-item id="createEvent-input9">\n          <ion-label stacked>\n            Name\n          </ion-label>\n          <ion-input type="text" placeholder="" name="name"></ion-input>\n        </ion-item>\n        <ion-item id="createEvent-input14">\n          <ion-label stacked>\n            Location\n          </ion-label>\n          <ion-input type="text" placeholder="" name="location"></ion-input>\n        </ion-item>\n        <ion-item id="createEvent-textarea2">\n          <ion-label>\n            Description\n          </ion-label>\n          <ion-textarea placeholder=""></ion-textarea>\n        </ion-item>\n        <ion-item-divider color="light" id="createEvent-list-item-divider2">\n          Max Capacity\n        </ion-item-divider>\n        <ion-item id="createEvent-range1">\n          <ion-range min="0" max="100" step="1" color="positive" value="50" name="capacity"></ion-range>\n        </ion-item>\n        <ion-item id="createEvent-textarea3">\n          <ion-label>\n            Interests\n          </ion-label>\n          <ion-textarea placeholder="Add Interests seperated by commas"></ion-textarea>\n        </ion-item>\n        <ion-item id="createEvent-list-item-container6">\n          <div id="createEvent-markdown10" class="show-list-numbers-and-dots">\n            <p style="margin-top:0px;color:#000000;">\n              // Figure out how to do list thing\n            </p>\n          </div>\n        </ion-item>\n      </form>\n    </ion-list>\n  </ion-card>\n  <button id="createEvent-button4" ion-button color="positive" block style="border-radius:10px 10px 10px 10px;" on-click="goToEventDetails()">\n    Create\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/phoenix/Documents/GitHub/PartyFowl/src/pages/create-event/create-event.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], CreateEventPage);
    return CreateEventPage;
}());

//# sourceMappingURL=create-event.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyEventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyEventsPage = /** @class */ (function () {
    function MyEventsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MyEventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-events',template:/*ion-inline-start:"/Users/phoenix/Documents/GitHub/PartyFowl/src/pages/my-events/my-events.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      My Events\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n  <ion-list id="myEvents-list8">\n    <ion-item color="none" id="myEvents-list-item36">\n      Item 1\n    </ion-item>\n    <ion-item color="none" id="myEvents-list-item37">\n      Item 2\n    </ion-item>\n    <ion-item color="none" id="myEvents-list-item38">\n      Item 3\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/phoenix/Documents/GitHub/PartyFowl/src/pages/my-events/my-events.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MyEventsPage);
    return MyEventsPage;
}());

//# sourceMappingURL=my-events.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/phoenix/Documents/GitHub/PartyFowl/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Settings\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page6"></ion-content>'/*ion-inline-end:"/Users/phoenix/Documents/GitHub/PartyFowl/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/phoenix/Documents/GitHub/PartyFowl/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Profile\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        Edit\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page7">\n  <ion-card id="profile-card24">\n    <ion-list>\n      <ion-item color="none" id="profile-list-item50">\n        <ion-avatar item-left>\n          <img />\n        </ion-avatar>\n        <h2>\n          @SuckMyAss\n        </h2>\n      </ion-item>\n      <ion-item color="none" id="profile-list-item52">\n        Email\n      </ion-item>\n      <ion-item color="none" id="profile-list-item53">\n        Date of Birth\n      </ion-item>\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n        <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n      </div>\n      <ion-item color="none" id="profile-list-item54">\n        Phone Number\n      </ion-item>\n      <ion-item color="none" id="profile-list-item55">\n        Saved Tags\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/phoenix/Documents/GitHub/PartyFowl/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/phoenix/Documents/GitHub/PartyFowl/src/pages/search/search.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Search\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page10">\n  <form id="search-form6">\n    <ion-searchbar placeholder="Search for Interests" name="search" id="search-search1"></ion-searchbar>\n  </form>\n  <ion-list id="search-list10">\n    <ion-item color="none" id="search-list-item60">\n      Item 1\n    </ion-item>\n    <ion-item color="none" id="search-list-item61">\n      Item 2\n    </ion-item>\n    <ion-item color="none" id="search-list-item62">\n      Item 3\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/phoenix/Documents/GitHub/PartyFowl/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(238);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl /*, private firebase: AngularFireAuth*/) {
        this.navCtrl = navCtrl; /*, private firebase: AngularFireAuth*/
        this.user = {};
    }
    LoginPage.prototype.goToSignup = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/phoenix/Documents/GitHub/PartyFowl/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n  <form id="login-form1">\n    <ion-list id="login-list4">\n      <ion-item id="login-input1">\n        <ion-label>\n          Email\n        </ion-label>\n        <ion-input type="email" placeholder="" [(ngModel)]="user.email" name="email"></ion-input>\n      </ion-item>\n      <ion-item id="login-input2">\n        <ion-label>\n          Password\n        </ion-label>\n        <ion-input type="password" placeholder="" [(ngModel)]="user.password" name="password"></ion-input>\n      </ion-item>\n    </ion-list>\n    <div class="spacer" style="height:40px;" id="login-spacer2"></div>\n    <button id="login-button1" ion-button color="calm" block on-click="login()">\n      Log in\n    </button>\n    <button id="login-button2" ion-button clear color="positive" block on-click="goToSignup()">\n      Or create an account\n    </button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/phoenix/Documents/GitHub/PartyFowl/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] /*, private firebase: AngularFireAuth*/])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, firebase) {
        this.navCtrl = navCtrl;
        this.firebase = firebase;
        this.user = {};
    }
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/phoenix/Documents/GitHub/PartyFowl/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Signup\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5">\n  <form id="signup-form2">\n    <ion-list id="signup-list5">\n      <ion-item id="signup-input3">\n        <ion-label>\n          Full Name\n        </ion-label>\n        <ion-input type="text" placeholder="" [(ngModel)]="user.fullName" name="fullName"></ion-input>\n      </ion-item>\n      <ion-item id="signup-input6">\n        <ion-label>\n          Username\n        </ion-label>\n        <ion-input type="text" placeholder="" [(ngModel)]="user.username" name="username"></ion-input>\n      </ion-item>\n      <ion-item id="signup-input4">\n        <ion-label>\n          Email\n        </ion-label>\n        <ion-input type="email" placeholder="" [(ngModel)]="user.email" name="email"></ion-input>\n      </ion-item>\n      <ion-item id="signup-input5">\n        <ion-label>\n          Password\n        </ion-label>\n        <ion-input type="password" placeholder="" [(ngModel)]="user.password" name="password"></ion-input>\n      </ion-item>\n      <ion-item id="signup-input7">\n        <ion-label>\n          Date of Birth\n        </ion-label>\n        <ion-input type="date" placeholder="" [(ngModel)]="user.dob" name="dob"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button id="signup-button3" ion-button color="balanced" on-click="signup()" block>\n      Sign up\n    </button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/phoenix/Documents/GitHub/PartyFowl/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(308);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_search_search__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_create_event_create_event__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_my_events_my_events__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_event_details_event_details__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_edit_profile_edit_profile__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_firebase_firebase__ = __webpack_require__(447);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var firebaseConfig = {
    apiKey: "AIzaSyCx_bj_D_z-uFoWo8snt1QtuuInrewTKWI",
    authDomain: "partyfowl-d4c42.firebaseapp.com",
    databaseURL: "https://partyfowl-d4c42.firebaseio.com",
    projectId: "partyfowl-d4c42",
    storageBucket: "partyfowl-d4c42.appspot.com",
    messagingSenderId: "688549902575"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_create_event_create_event__["a" /* CreateEventPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_my_events_my_events__["a" /* MyEventsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_event_details_event_details__["a" /* EventDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_profile_edit_profile__["a" /* EditProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_16__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_18_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_create_event_create_event__["a" /* CreateEventPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_my_events_my_events__["a" /* MyEventsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_event_details_event_details__["a" /* EventDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_profile_edit_profile__["a" /* EditProfilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_firebase_firebase__["a" /* FirebaseProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_create_event_create_event__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_event_details_event_details__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_my_events_my_events__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_search_search__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(237);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.goToCreateEvent = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_create_event_create_event__["a" /* CreateEventPage */]);
    };
    MyApp.prototype.goToEventDetails = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_event_details_event_details__["a" /* EventDetailsPage */]);
    };
    MyApp.prototype.goToMyEvents = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_my_events_my_events__["a" /* MyEventsPage */]);
    };
    MyApp.prototype.goToSettings = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */]);
    };
    MyApp.prototype.goToProfile = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */]);
    };
    MyApp.prototype.goToSearch = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_search_search__["a" /* SearchPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/phoenix/Documents/GitHub/PartyFowl/src/app/app.html"*/'<ion-menu [content]="mainContent">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Menu\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content id="side-menu21">\n    <ion-list id="menu-list1">\n      <ion-item color="none" menuClose="" on-click="goToHome()" id="menu-list-item1">\n        Home\n        <ion-icon name="home" item-right></ion-icon>\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToCreateEvent()" id="menu-list-item2">\n        Create Event\n        <ion-icon name="add" item-right></ion-icon>\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToMyEvents()" id="menu-list-item3">\n        My Events\n        <ion-icon name="list" item-right></ion-icon>\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToProfile()" id="menu-list-item10">\n        Profile\n        <ion-icon name="person" item-right></ion-icon>\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToSearch()" id="menu-list-item56">\n        Search\n        <ion-icon name="search" item-right></ion-icon>\n      </ion-item>\n    </ion-list>\n    <div class="spacer" style="width:268px;height:131px;" id="menu-spacer1"></div>\n    <ion-list id="menu-list3">\n      <ion-item color="none" menuClose="" on-click="goToSettings()" id="menu-list-item7">\n        Settings\n        <ion-icon name="settings" item-right></ion-icon>\n      </ion-item>\n      <ion-item color="none" href="mailto:partyfowlapp@gmail.com" id="menu-list-item8">\n        Contact Us\n        <ion-icon name="mail" item-right></ion-icon>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/phoenix/Documents/GitHub/PartyFowl/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"/Users/phoenix/Documents/GitHub/PartyFowl/src/pages/edit-profile/edit-profile.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Edit Profile\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page9"></ion-content>'/*ion-inline-end:"/Users/phoenix/Documents/GitHub/PartyFowl/src/pages/edit-profile/edit-profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FirebaseProvider = /** @class */ (function () {
    function FirebaseProvider(http) {
        this.http = http;
        console.log('Hello FirebaseProvider Provider');
    }
    FirebaseProvider.prototype.getShoppingItems = function () {
        // return this.afd.list('/shoppingItems/');
    };
    FirebaseProvider.prototype.addItem = function (name) {
        // this.afd.list('/shoppingItems/').push(name);
    };
    FirebaseProvider.prototype.removeItem = function (id) {
        // this.afd.list('/shoppingItems/').remove(id);
    };
    FirebaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], FirebaseProvider);
    return FirebaseProvider;
}());

//# sourceMappingURL=firebase.js.map

/***/ })

},[289]);
//# sourceMappingURL=main.js.map