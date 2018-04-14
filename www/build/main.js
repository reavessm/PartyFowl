webpackJsonp([0],{

<<<<<<< HEAD
/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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

/***/ 160:
=======
/***/ 123:
>>>>>>> master
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
            selector: 'page-event-details',template:/*ion-inline-start:"C:\Users\Nick\Documents\GitHub\PartyFowl\src\pages\event-details\event-details.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Event Details\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page8">\n\n  <ion-list id="eventDetails-list9">\n\n    <ion-item color="none" id="eventDetails-list-item42">\n\n      Address\n\n    </ion-item>\n\n    <ion-item color="none" id="eventDetails-list-item43">\n\n      Capacity\n\n    </ion-item>\n\n    <ion-item color="none" id="eventDetails-list-item44">\n\n      Description\n\n    </ion-item>\n\n    <ion-item id="eventDetails-radio8">\n\n      <ion-label>\n\n        What to Bring\n\n      </ion-label>\n\n      <ion-radio></ion-radio>\n\n    </ion-item>\n\n    <ion-item color="none" id="eventDetails-list-item47">\n\n      Attendees\n\n    </ion-item>\n\n    <ion-item id="eventDetails-toggle8">\n\n      <ion-label>\n\n        Attending?\n\n      </ion-label>\n\n      <ion-toggle color="positive" checked="false"></ion-toggle>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Nick\Documents\GitHub\PartyFowl\src\pages\event-details\event-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], EventDetailsPage);
    return EventDetailsPage;
}());

//# sourceMappingURL=event-details.js.map

/***/ }),

/***/ 196:
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
webpackEmptyAsyncContext.id = 196;

/***/ }),

<<<<<<< HEAD
/***/ 239:
=======
/***/ 186:
>>>>>>> master
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
<<<<<<< HEAD
webpackEmptyAsyncContext.id = 239;

/***/ }),

/***/ 283:
=======
webpackEmptyAsyncContext.id = 186;

/***/ }),

/***/ 230:
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Nick\Documents\GitHub\PartyFowl\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Home\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        Cola Hacks\n\n        </ion-card-title>\n\n      <p>\n\n        If you\'ve ever had an idea, but thought you didn\'t have the time, skills, or energy to do it a hackathon is a great place to get started. You can take 12 hours and flesh out your idea, and begin bringing it to life. While you\'re hacking away, you may make new friends who would like to join your team in creating your app idea. If you need, a little extra help there will be mentors and volunteers to provide advice if you need some extra help along the way.\n\n      </p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n   <ion-card>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        Cola Hacks\n\n        </ion-card-title>\n\n      <p>\n\n        If you\'ve ever had an idea, but thought you didn\'t have the time, skills, or energy to do it a hackathon is a great place to get started. You can take 12 hours and flesh out your idea, and begin bringing it to life. While you\'re hacking away, you may make new friends who would like to join your team in creating your app idea. If you need, a little extra help there will be mentors and volunteers to provide advice if you need some extra help along the way.\n\n      </p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n   <ion-card>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        Cola Hacks\n\n        </ion-card-title>\n\n      <p>\n\n        If you\'ve ever had an idea, but thought you didn\'t have the time, skills, or energy to do it a hackathon is a great place to get started. You can take 12 hours and flesh out your idea, and begin bringing it to life. While you\'re hacking away, you may make new friends who would like to join your team in creating your app idea. If you need, a little extra help there will be mentors and volunteers to provide advice if you need some extra help along the way.\n\n      </p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Nick\Documents\GitHub\PartyFowl\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 231:
>>>>>>> master
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_details_event_details__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(161);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_details_event_details__ = __webpack_require__(123);
>>>>>>> master
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
    function CreateEventPage(navCtrl, fs) {
        this.navCtrl = navCtrl;
        this.fs = fs;
        this.event = {};
    }
    CreateEventPage.prototype.goToEventDetails = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__event_details_event_details__["a" /* EventDetailsPage */]);
    };
    CreateEventPage.prototype.createEvent = function () {
        this.fs.collection("Events").add({
            name: this.event.name,
            location: this.event.location,
            description: this.event.description,
            startTime: this.event.startTime,
            capacity: this.event.capacity,
            description: this.event.description,
            needone: this.event.needone,
            needtwo: this.event.needtwo,
            needthree: this.event.needthree,
        }).then(function () {
            console.log("Success registering");
        }).catch(function (error) {
            console.log("Failure registering");
        });
        this.goToEventDetails();
    };
    CreateEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-create-event',template:/*ion-inline-start:"/Users/phoenix/Documents/GitHub/PartyFowl/src/pages/create-event/create-event.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Create Event\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2">\n  <ion-card id="createEvent-card23">\n    <ion-list>\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n        <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n      </div>\n      <form id="createEvent-form5">\n        <ion-item id="createEvent-input9">\n          <ion-label stacked>\n            Name\n          </ion-label>\n          <ion-input type="text" placeholder="" name="name" [(ngModel)]="event.name"></ion-input>\n        </ion-item>\n        <ion-item id="createEvent-input14">\n          <ion-label stacked>\n            Location\n          </ion-label>\n          <ion-input type="text" placeholder="" name="location" [(ngModel)]="event.location"></ion-input>\n        </ion-item>\n        <ion-item id="createEvent-textarea2">\n          <ion-label>\n            Description\n          </ion-label>\n          <ion-textarea placeholder="" [(ngModel)]="event.description"></ion-textarea>\n        </ion-item>\n        <ion-item id="createEvent-starttime">\n          <ion-label stacked>\n            Start Time\n          </ion-label>\n          <ion-input type="text" placeholder="" name="startTime" [(ngModel)]="event.startTime"></ion-input>\n        </ion-item>\n        <ion-item-divider color="light" id="createEvent-list-item-divider2">\n          Max Capacity\n        </ion-item-divider>\n        <ion-item id="createEvent-range1">\n          <ion-range min="0" max="100" step="1" color="positive" value="50" name="capacity" [(ngModel)]="event.capacity">\n            <ion-label range-left>0</ion-label>\n            <ion-label range-right>100</ion-label>\n          </ion-range>\n        </ion-item>\n        <ion-item id="createEvent-textarea3">\n          <ion-label>\n            Interests\n          </ion-label>\n          <ion-textarea placeholder="Add Interests seperated by commas"></ion-textarea>\n        </ion-item>\n        <ion-item id="createEvent-need1">\n          <ion-label stacked>\n            Need 1\n          </ion-label>\n          <ion-input type="text" placeholder="" name="need1" [(ngModel)]="event.needone"></ion-input>\n        </ion-item>\n        <ion-item id="createEvent-need2">\n          <ion-label stacked>\n            Need 2\n          </ion-label>\n          <ion-input type="text" placeholder="" name="need2" [(ngModel)]="event.needtwo"></ion-input>\n        </ion-item>\n        <ion-item id="createEvent-need3">\n          <ion-label stacked>\n            Need 3\n          </ion-label>\n          <ion-input type="text" placeholder="" name="need3" [(ngModel)]="event.needthree"></ion-input>\n        </ion-item>\n        <ion-item id="createEvent-list-item-container6">\n          <div id="createEvent-markdown10" class="show-list-numbers-and-dots">\n            <p style="margin-top:0px;color:#000000;">\n              // Figure out how to do list thing\n            </p>\n          </div>\n        </ion-item>\n      </form>\n    </ion-list>\n  </ion-card>\n  <button id="createEvent-button4" ion-button color="positive" block style="border-radius:10px 10px 10px 10px;" on-click="createEvent()">\n    Create\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/phoenix/Documents/GitHub/PartyFowl/src/pages/create-event/create-event.html"*/
=======
            selector: 'page-create-event',template:/*ion-inline-start:"C:\Users\Nick\Documents\GitHub\PartyFowl\src\pages\create-event\create-event.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Create Event\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page2">\n\n  <ion-card id="createEvent-card23">\n\n    <ion-list>\n\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n\n        <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n\n      </div>\n\n      <form id="createEvent-form5">\n\n        <ion-item id="createEvent-input9">\n\n          <ion-label stacked>\n\n            Name\n\n          </ion-label>\n\n          <ion-input type="text" placeholder="" name="name"></ion-input>\n\n        </ion-item>\n\n        <ion-item id="createEvent-input14">\n\n          <ion-label stacked>\n\n            Location\n\n          </ion-label>\n\n          <ion-input type="text" placeholder="" name="location"></ion-input>\n\n        </ion-item>\n\n        <ion-item id="createEvent-textarea2">\n\n          <ion-label>\n\n            Description\n\n          </ion-label>\n\n          <ion-textarea placeholder=""></ion-textarea>\n\n        </ion-item>\n\n        <ion-item-divider color="light" id="createEvent-list-item-divider2">\n\n          Max Capacity\n\n        </ion-item-divider>\n\n        <ion-item id="createEvent-range1">\n\n          <ion-range min="0" max="100" step="1" color="positive" value="50" name="capacity"></ion-range>\n\n        </ion-item>\n\n        <ion-item id="createEvent-textarea3">\n\n          <ion-label>\n\n            Interests\n\n          </ion-label>\n\n          <ion-textarea placeholder="Add Interests seperated by commas"></ion-textarea>\n\n        </ion-item>\n\n        <ion-item id="createEvent-list-item-container6">\n\n          <div id="createEvent-markdown10" class="show-list-numbers-and-dots">\n\n            <p style="margin-top:0px;color:#000000;">\n\n              // Figure out how to do list thing\n\n            </p>\n\n          </div>\n\n        </ion-item>\n\n      </form>\n\n    </ion-list>\n\n  </ion-card>\n\n  <button id="createEvent-button4" ion-button color="positive" block style="border-radius:10px 10px 10px 10px;" on-click="goToEventDetails()">\n\n    Create\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Nick\Documents\GitHub\PartyFowl\src\pages\create-event\create-event.html"*/
>>>>>>> master
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _b || Object])
    ], CreateEventPage);
    return CreateEventPage;
    var _a, _b;
}());

//# sourceMappingURL=create-event.js.map

/***/ }),

<<<<<<< HEAD
/***/ 307:
=======
/***/ 232:
>>>>>>> master
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyEventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
            selector: 'page-my-events',template:/*ion-inline-start:"C:\Users\Nick\Documents\GitHub\PartyFowl\src\pages\my-events\my-events.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Cola Hacks\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page3">\n\n  <ion-list id="myEvents-list8" no-lines>\n\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n\n        <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n\n      </div>    \n\n    <ion-item color="red" id="myEvents-list-item37">\n\n      <h2>  \n\n        Description\n\n      </h2>\n\n      <p>\n\n        Major League Hacking (MLH) defines a hackathon as: "A hackathon is best described as an “invention marathon”. Anyone who has an interest in technology attends a hackathon to learn, build & share their creations over the course of a weekend in a relaxed and welcoming atmosphere. You don’t have to be a programmer and you certainly don’t have to be majoring in Computer Science." \n\n      </p> \n\n    </ion-item>\n\n    <ion-item color="none" id="myEvents-list-item38">\n\n      <h2>  \n\n        Location\n\n      </h2>\n\n      <p>\n\n        THE ZONE @ WILLIAMS-BRICE STADIUM\n\n      </p>\n\n    </ion-item>\n\n    <ion-item color="none" id="myEvents-list-item38">\n\n      <h2>  \n\n        Time\n\n      </h2>\n\n      <p>\n\n        9:00AM\n\n      </p>\n\n    </ion-item>\n\n    <ion-item color="none" id="myEvents-list39">\n\n      <h2>  \n\n        Capacity\n\n      </h2>\n\n      <p>\n\n        160\n\n      </p>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Nick\Documents\GitHub\PartyFowl\src\pages\my-events\my-events.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MyEventsPage);
    return MyEventsPage;
}());

//# sourceMappingURL=my-events.js.map

/***/ }),

<<<<<<< HEAD
/***/ 308:
=======
/***/ 233:
>>>>>>> master
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\Nick\Documents\GitHub\PartyFowl\src\pages\settings\settings.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Settings\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page6"></ion-content>'/*ion-inline-end:"C:\Users\Nick\Documents\GitHub\PartyFowl\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

<<<<<<< HEAD
/***/ 309:
=======
/***/ 234:
>>>>>>> master
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
<<<<<<< HEAD
            selector: 'page-profile',template:/*ion-inline-start:"/Users/phoenix/Documents/GitHub/PartyFowl/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Profile\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        Edit\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page7">\n  <ion-card id="profile-card24">\n    <ion-list>\n      <ion-item color="none" id="profile-list-item50">\n        <ion-avatar item-left>\n          <img />\n        </ion-avatar>\n        <h2>\n          @ColaHacks\n        </h2>\n      </ion-item>\n      <ion-item color="none" id="profile-list-item52">\n        Email\n      </ion-item>\n      <ion-item color="none" id="profile-list-item53">\n        Date of Birth\n      </ion-item>\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n        <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n      </div>\n      <ion-item color="none" id="profile-list-item54">\n        Phone Number\n      </ion-item>\n      <ion-item color="none" id="profile-list-item55">\n        Saved Tags\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/phoenix/Documents/GitHub/PartyFowl/src/pages/profile/profile.html"*/
=======
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Nick\Documents\GitHub\PartyFowl\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Profile\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button>\n\n        Edit\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page7">\n\n  <ion-card id="profile-card24">\n\n    <ion-list>\n\n      <ion-item color="none" id="profile-list-item50">\n\n        <ion-avatar item-left>\n\n          <img />\n\n        </ion-avatar>\n\n        <h2>\n\n          @SuckMyAss\n\n        </h2>\n\n      </ion-item>\n\n      <ion-item color="none" id="profile-list-item52">\n\n        Email\n\n      </ion-item>\n\n      <ion-item color="none" id="profile-list-item53">\n\n        Date of Birth\n\n      </ion-item>\n\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n\n        <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n\n      </div>\n\n      <ion-item color="none" id="profile-list-item54">\n\n        Phone Number\n\n      </ion-item>\n\n      <ion-item color="none" id="profile-list-item55">\n\n        Saved Tags\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Nick\Documents\GitHub\PartyFowl\src\pages\profile\profile.html"*/
>>>>>>> master
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

<<<<<<< HEAD
/***/ 310:
=======
/***/ 235:
>>>>>>> master
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
            selector: 'page-search',template:/*ion-inline-start:"C:\Users\Nick\Documents\GitHub\PartyFowl\src\pages\search\search.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Search\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page10">\n\n  <form id="search-form6">\n\n    <ion-searchbar placeholder="Search for Interests" name="search" id="search-search1"></ion-searchbar>\n\n  </form>\n\n  <ion-list id="search-list10">\n\n    <ion-item color="none" id="search-list-item60">\n\n      Item 1\n\n    </ion-item>\n\n    <ion-item color="none" id="search-list-item61">\n\n      Item 2\n\n    </ion-item>\n\n    <ion-item color="none" id="search-list-item62">\n\n      Item 3\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Nick\Documents\GitHub\PartyFowl\src\pages\search\search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

<<<<<<< HEAD
/***/ 311:
=======
/***/ 236:
>>>>>>> master
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(159);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(237);
>>>>>>> master
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
    function LoginPage(navCtrl, firebase) {
        this.navCtrl = navCtrl;
        this.firebase = firebase;
        this.user = {};
    }
    LoginPage.prototype.goToSignup = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    // login() {
    //   if (this.user.email == "eharmon@email.sc.edu" && this.user.password == "1234") {
    //     this.navCtrl.setRoot(HomePage);
    //     // this.navCtrl.push(HomePage);
    //   }
    // }
    LoginPage.prototype.login = function () {
        var that = this;
        this.firebase.auth.signInWithEmailAndPassword(this.user.email, this.user.password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        }).then(function () {
            that.changeRootPage();
        });
    };
    LoginPage.prototype.changeRootPage = function () {
        this.firebase.auth.onAuthStateChanged(function (user) {
            if (user) {
                this.setRoot.navCtrl(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            }
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-login',template:/*ion-inline-start:"/Users/phoenix/Documents/GitHub/PartyFowl/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n  <form id="login-form1">\n    <ion-list id="login-list4">\n      <ion-item id="login-input1">\n        <ion-label>\n          Email\n        </ion-label>\n        <ion-input type="email" placeholder="" [(ngModel)]="user.email" name="email"></ion-input>\n      </ion-item>\n      <ion-item id="login-input2">\n        <ion-label>\n          Password\n        </ion-label>\n        <ion-input type="password" placeholder="" [(ngModel)]="user.password" name="password"></ion-input>\n      </ion-item>\n    </ion-list>\n    <div class="spacer" style="height:40px;" id="login-spacer2"></div>\n    <button id="login-button1" ion-button color="calm" block on-click="login()">\n      Log in\n    </button>\n    <button id="login-button2" ion-button clear color="positive" block on-click="goToSignup()">\n      Or create an account\n    </button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/phoenix/Documents/GitHub/PartyFowl/src/pages/login/login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]]
=======
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Nick\Documents\GitHub\PartyFowl\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Login\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page4">\n\n  <form id="login-form1">\n\n    <ion-list id="login-list4">\n\n      <ion-item id="login-input1">\n\n        <ion-label>\n\n          Email\n\n        </ion-label>\n\n        <ion-input type="email" placeholder="" [(ngModel)]="user.email" name="email"></ion-input>\n\n      </ion-item>\n\n      <ion-item id="login-input2">\n\n        <ion-label>\n\n          Password\n\n        </ion-label>\n\n        <ion-input type="password" placeholder="" [(ngModel)]="user.password" name="password"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <div class="spacer" style="height:40px;" id="login-spacer2"></div>\n\n    <button id="login-button1" ion-button color="calm" block on-click="login()">\n\n      Log in\n\n    </button>\n\n    <button id="login-button2" ion-button clear color="positive" block on-click="goToSignup()">\n\n      Or create an account\n\n    </button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nick\Documents\GitHub\PartyFowl\src\pages\login\login.html"*/
>>>>>>> master
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

<<<<<<< HEAD
/***/ 318:
=======
/***/ 237:
>>>>>>> master
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(161);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
>>>>>>> master
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


<<<<<<< HEAD


var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, af, fs) {
        this.navCtrl = navCtrl;
        this.af = af;
        this.fs = fs;
=======
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl) {
        this.navCtrl = navCtrl;
>>>>>>> master
        this.user = {};
    }
    SignupPage.prototype.signup = function () {
        var that = this;
        this.af.auth.createUserWithEmailAndPassword(this.user.email, this.user.password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        }).then(function () { that.addAdditionalInformation(); });
    };
    SignupPage.prototype.addAdditionalInformation = function () {
        this.fs.collection("users").add({
            fullName: this.user.fullName,
            username: this.user.username,
            dob: this.user.dob
        }).then(function () {
            console.log("Success registering");
        }).catch(function (error) {
            console.log("Failure registering");
        });
        this.navCtrl.push(LoginPage);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-signup',template:/*ion-inline-start:"/Users/phoenix/Documents/GitHub/PartyFowl/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Signup\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5">\n  <form id="signup-form2">\n    <ion-list id="signup-list5">\n      <ion-item id="signup-input3">\n        <ion-label>\n          Full Name\n        </ion-label>\n        <ion-input type="text" placeholder="" [(ngModel)]="user.fullName" name="fullName"></ion-input>\n      </ion-item>\n      <ion-item id="signup-input6">\n        <ion-label>\n          Username\n        </ion-label>\n        <ion-input type="text" placeholder="" [(ngModel)]="user.username" name="username"></ion-input>\n      </ion-item>\n      <ion-item id="signup-input4">\n        <ion-label>\n          Email\n        </ion-label>\n        <ion-input type="email" placeholder="" [(ngModel)]="user.email" name="email"></ion-input>\n      </ion-item>\n      <ion-item id="signup-input5">\n        <ion-label>\n          Password\n        </ion-label>\n        <ion-input type="password" placeholder="" [(ngModel)]="user.password" name="password"></ion-input>\n      </ion-item>\n      <ion-item id="signup-input7">\n        <ion-label>\n          Date of Birth\n        </ion-label>\n        <ion-input type="date" placeholder="" [(ngModel)]="user.dob" name="dob"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button id="signup-button3" ion-button color="balanced" on-click="signup()" block>\n      Sign up\n    </button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/phoenix/Documents/GitHub/PartyFowl/src/pages/signup/signup.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */]])
=======
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Nick\Documents\GitHub\PartyFowl\src\pages\signup\signup.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Signup\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page5">\n\n  <form id="signup-form2">\n\n    <ion-list id="signup-list5">\n\n      <ion-item id="signup-input3">\n\n        <ion-label>\n\n          Full Name\n\n        </ion-label>\n\n        <ion-input type="text" placeholder="" [(ngModel)]="user.fullName" name="fullName"></ion-input>\n\n      </ion-item>\n\n      <ion-item id="signup-input6">\n\n        <ion-label>\n\n          Username\n\n        </ion-label>\n\n        <ion-input type="text" placeholder="" [(ngModel)]="user.username" name="username"></ion-input>\n\n      </ion-item>\n\n      <ion-item id="signup-input4">\n\n        <ion-label>\n\n          Email\n\n        </ion-label>\n\n        <ion-input type="email" placeholder="" [(ngModel)]="user.email" name="email"></ion-input>\n\n      </ion-item>\n\n      <ion-item id="signup-input5">\n\n        <ion-label>\n\n          Password\n\n        </ion-label>\n\n        <ion-input type="password" placeholder="" [(ngModel)]="user.password" name="password"></ion-input>\n\n      </ion-item>\n\n      <ion-item id="signup-input7">\n\n        <ion-label>\n\n          Date of Birth\n\n        </ion-label>\n\n        <ion-input type="date" placeholder="" [(ngModel)]="user.dob" name="dob"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button id="signup-button3" ion-button color="balanced" on-click="signup()" block>\n\n      Sign up\n\n    </button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nick\Documents\GitHub\PartyFowl\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
>>>>>>> master
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

<<<<<<< HEAD
/***/ 355:
=======
/***/ 284:
>>>>>>> master
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(370);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(303);
>>>>>>> master


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

<<<<<<< HEAD
/***/ 370:
=======
/***/ 303:
>>>>>>> master
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_search_search__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_create_event_create_event__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_my_events_my_events__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_event_details_event_details__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_edit_profile_edit_profile__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_firestore__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_firebase_firebase__ = __webpack_require__(553);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_search_search__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_create_event_create_event__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_my_events_my_events__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_event_details_event_details__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_edit_profile_edit_profile__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_firebase_firebase__ = __webpack_require__(441);
>>>>>>> master
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
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_19_angularfire2_firestore__["b" /* AngularFirestoreModule */],
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
                __WEBPACK_IMPORTED_MODULE_20__providers_firebase_firebase__["a" /* FirebaseProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 410:
=======
/***/ 345:
>>>>>>> master
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_create_event_create_event__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_event_details_event_details__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_my_events_my_events__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_search_search__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(311);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_create_event_create_event__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_event_details_event_details__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_my_events_my_events__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_search_search__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(236);
>>>>>>> master
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Nick\Documents\GitHub\PartyFowl\src\app\app.html"*/'<ion-menu [content]="mainContent">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>\n\n        Menu\n\n      </ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content id="side-menu21">\n\n    <ion-list id="menu-list1">\n\n      <ion-item color="none" menuClose="" on-click="goToHome()" id="menu-list-item1">\n\n        Home\n\n        <ion-icon name="home" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item color="none" menuClose="" on-click="goToCreateEvent()" id="menu-list-item2">\n\n        Create Event\n\n        <ion-icon name="add" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item color="none" menuClose="" on-click="goToMyEvents()" id="menu-list-item3">\n\n        My Events\n\n        <ion-icon name="list" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item color="none" menuClose="" on-click="goToProfile()" id="menu-list-item10">\n\n        Profile\n\n        <ion-icon name="person" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item color="none" menuClose="" on-click="goToSearch()" id="menu-list-item56">\n\n        Search\n\n        <ion-icon name="search" item-right></ion-icon>\n\n      </ion-item>\n\n    </ion-list>\n\n    <div class="spacer" style="width:268px;height:131px;" id="menu-spacer1"></div>\n\n    <ion-list id="menu-list3">\n\n      <ion-item color="none" menuClose="" on-click="goToSettings()" id="menu-list-item7">\n\n        Settings\n\n        <ion-icon name="settings" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item color="none" href="mailto:partyfowlapp@gmail.com" id="menu-list-item8">\n\n        Contact Us\n\n        <ion-icon name="mail" item-right></ion-icon>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\Nick\Documents\GitHub\PartyFowl\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

<<<<<<< HEAD
/***/ 499:
=======
/***/ 354:
>>>>>>> master
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
            selector: 'page-edit-profile',template:/*ion-inline-start:"C:\Users\Nick\Documents\GitHub\PartyFowl\src\pages\edit-profile\edit-profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Edit Profile\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page9"></ion-content>'/*ion-inline-end:"C:\Users\Nick\Documents\GitHub\PartyFowl\src\pages\edit-profile\edit-profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ }),

<<<<<<< HEAD
/***/ 553:
=======
/***/ 441:
>>>>>>> master
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(554);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(442);
>>>>>>> master
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(319);
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
    function FirebaseProvider(http, afd) {
        this.http = http;
        this.afd = afd;
        console.log('Hello FirebaseProvider Provider');
    }
    FirebaseProvider.prototype.getEvents = function () {
        return this.afd.list('/Events/');
    };
    FirebaseProvider.prototype.addItem = function (name) {
        // this.afd.list('/shoppingItems/').push(name);
    };
    FirebaseProvider.prototype.removeItem = function (id) {
        // this.afd.list('/shoppingItems/').remove(id);
    };
    FirebaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FirebaseProvider);
    return FirebaseProvider;
}());

//# sourceMappingURL=firebase.js.map

/***/ })

<<<<<<< HEAD
},[355]);
=======
},[284]);
>>>>>>> master
//# sourceMappingURL=main.js.map