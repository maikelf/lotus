webpackJsonp([0],{

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LandingPage = (function () {
    function LandingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LandingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LandingPage');
    };
    LandingPage.prototype.goToPage = function (route) {
        if (route === 'sign') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
        }
    };
    LandingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-landing',template:/*ion-inline-start:"/home/maikel/Workspace/lotus/src/pages/landing/landing.html"*/`<ion-content>\n  <div>\n    <img src="assets/imgs/head-logo.png" class="imghead"/>\n  </div>\n  <div class="top40">\n    <button class="hl-button top15" (click)="goToPage(\'sign\')">Sign in</button>\n    <button class="hl-button top30" (click)="goToPage(\'register\')">Register</button>\n  </div>\n  <div class="footer">\n    <div class="social-networks">\n      <ion-icon name="logo-facebook"></ion-icon>\n      <ion-icon name="logo-linkedin"></ion-icon>\n      <ion-icon name="logo-instagram"></ion-icon>\n    </div>\n  </div>\n</ion-content>\n`/*ion-inline-end:"/home/maikel/Workspace/lotus/src/pages/landing/landing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LandingPage);
    return LandingPage;
}());

//# sourceMappingURL=landing.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoplayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appoiments_appoiments__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the VideoplayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VideoplayerPage = (function () {
    function VideoplayerPage(navCtrl, navParams, ds) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ds = ds;
        this.video = this.navParams.get('v');
        this.title = this.navParams.get('t');
    }
    VideoplayerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VideoplayerPage');
    };
    VideoplayerPage.prototype.sanitizeURL = function (video) {
        return this.ds.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/' + video);
    };
    VideoplayerPage.prototype.gotoBooking = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__appoiments_appoiments__["a" /* AppoimentsPage */]);
    };
    VideoplayerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-videoplayer',template:/*ion-inline-start:"/home/maikel/Workspace/lotus/src/pages/videoplayer/videoplayer.html"*/`<!--\n  Generated template for the VideoplayerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <iframe [src]=\'sanitizeURL(video)\' width="100%" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n  <ion-fab center bottom (click)="gotoBooking()">\n    <button ion-fab color="secondary"><ion-icon name="calendar"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n`/*ion-inline-end:"/home/maikel/Workspace/lotus/src/pages/videoplayer/videoplayer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"]])
    ], VideoplayerPage);
    return VideoplayerPage;
}());

//# sourceMappingURL=videoplayer.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
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
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = (function () {
    function AuthProvider(afAuth, http, platform) {
        this.afAuth = afAuth;
        this.http = http;
        if (platform.is('mobile')) {
            this.urlBase = 'http://thehealinglotus.lesterdesign.ca/';
        }
        else {
            this.urlBase = '/lotus';
        }
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.headers.append('Accept', 'application/json');
    }
    AuthProvider.prototype.registerUser = function (email, password) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (res) { return Promise.resolve(res); })
            .catch(function (err) { return Promise.reject(err); });
    };
    AuthProvider.prototype.loginUser = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) { return Promise.resolve(user); })
            .catch(function (err) { return Promise.reject(err); });
    };
    AuthProvider.prototype.loginUserDrupal = function (userName, userPassword) {
        var userDrupal = {
            username: userName,
            password: userPassword
        };
        return this.http.post(this.urlBase + '/lotus/user/login.json', userDrupal, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    AuthProvider.prototype.registerUserDrupal = function (user) {
        var userDrupal = {
            name: user.name,
            mail: user.email,
            pass: user.password,
            pass2: user.password
        };
        return this.http.post(this.urlBase + '/lotus/user.json', userDrupal, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    AuthProvider.prototype.setProfileUserDrupal = function (user, id) {
        var profile = {
            type: "profile",
            title: user.name + '(' + user.email + ')',
            field_user_id: {
                und: [
                    {
                        value: id
                    }
                ]
            },
            field_mail: {
                und: [
                    {
                        value: user.email
                    }
                ]
            },
            field_istherapist: {
                und: [
                    {
                        value: (user.relationship) ? 1 : 0
                    }
                ]
            },
            field_certificate: {
                und: [
                    {
                        value: ''
                    }
                ]
            },
            field_phone: {
                und: [
                    {
                        value: user.phone
                    }
                ]
            }
        };
        return this.http.post(this.urlBase + '/lotus/node.json', profile, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    AuthProvider.prototype.getNodes = function () {
        return this.http.get(this.urlBase + '/lotus/node.json', { headers: this.headers }).map(function (res) { return res.json(); });
    };
    AuthProvider.prototype.getNode = function (nid) {
        return this.http.get(this.urlBase + '/lotus/node/' + nid + '.json', { headers: this.headers }).map(function (res) { return res.json(); });
    };
    Object.defineProperty(AuthProvider.prototype, "Session", {
        get: function () {
            return this.afAuth.authState;
        },
        enumerable: true,
        configurable: true
    });
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Platform */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 154:
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
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppoimentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AppoimentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AppoimentsPage = (function () {
    function AppoimentsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AppoimentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AppoimentsPage');
    };
    AppoimentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-appoiments',template:/*ion-inline-start:"/home/maikel/Workspace/lotus/src/pages/appoiments/appoiments.html"*/`<!--\n  Generated template for the AppoimentsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="secondary" hideBackButton="true">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Appointments</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="backgroundtemp">\n    <img src="assets/imgs/favicon.png" /><br />\n    Loading...\n  </div>\n  <!-- <div class="ht"></div>  -->\n  <iframe class="webpage" name="samplePage" src="http://thehealinglotus.ca/book-now"  width="100%" height="120%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n</ion-content>\n`/*ion-inline-end:"/home/maikel/Workspace/lotus/src/pages/appoiments/appoiments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AppoimentsPage);
    return AppoimentsPage;
}());

//# sourceMappingURL=appoiments.js.map

/***/ }),

/***/ 197:
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
webpackEmptyAsyncContext.id = 197;

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_landing__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bodylanding_bodylanding__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_localstorage_localstorage__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, navParams, localStorage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.localStorage = localStorage;
        console.log(this.localStorage.ready());
        this.localStorage.getData('session')
            .then(function (r) {
            if (r == null || r == undefined) {
                setTimeout(function () { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__landing_landing__["a" /* LandingPage */]); }, 1000);
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__bodylanding_bodylanding__["a" /* BodylandingPage */]);
            }
        });
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/maikel/Workspace/lotus/src/pages/home/home.html"*/`<!-- <ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content padding class="border-green">\n  <div class="content-init">\n      <img src="assets/imgs/logo.png" class="img-loading"/><br />\n      SelfCare at your fingertips\n  </div>\n</ion-content>\n`/*ion-inline-end:"/home/maikel/Workspace/lotus/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_localstorage_localstorage__["a" /* LocalstorageProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recover_recover__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bodylanding_bodylanding__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_localstorage_localstorage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_lotus_lotus__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SigninPage = (function () {
    function SigninPage(navCtrl, navParams, storage, menu, toastCtrl, localstorage, lotus, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.localstorage = localstorage;
        this.lotus = lotus;
        this.auth = auth;
        this.signing = false;
        this.sign = {
            user: '',
            password: ''
        };
    }
    SigninPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SigninPage');
    };
    SigninPage.prototype.signIn = function () {
        var _this = this;
        console.log(this.sign.user, this.sign.password);
        this.signing = true;
        this.auth.loginUserDrupal(this.sign.user, this.sign.password)
            .subscribe(function (r) {
            console.log('aqui', _this.signing, r);
            var session = {
                login: true,
                user: _this.sign.user,
                createAt: new Date().getTime(),
                uid: r.user.uid,
                mail: r.user.mail,
                data: r.user
            };
            _this.localstorage.setData('session', JSON.stringify(session));
            _this.menu.swipeEnable(true);
            _this.storage.updateSessionAfterLogin(session);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__bodylanding_bodylanding__["a" /* BodylandingPage */]);
            _this.signing = false;
        }, function (err) {
            _this.signing = false;
            console.log(err);
            _this.toastErr('Authentication Fail. Please review email and password and try again');
        });
    };
    SigninPage.prototype.toastErr = function (err) {
        var toast = this.toastCtrl.create({
            message: err,
            duration: 3000,
            position: 'top',
            cssClass: 'alert-err'
        });
        toast.present();
    };
    SigninPage.prototype.recoverPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__recover_recover__["a" /* RecoverPage */]);
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signin',template:/*ion-inline-start:"/home/maikel/Workspace/lotus/src/pages/signin/signin.html"*/`\n<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Sign In</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="content-logo">\n    <img src="assets/imgs/logo.png" class="logo" />\n  </div>\n  <div>\n    <form class="top50" (ngSubmit)="signIn()">  \n      <div class="form-group">\n        <label class="label-green">Name</label>\n        <input type="email" class="form-control" [(ngModel)]="sign.user" name="user" />\n      </div>\n      <div class="form-group">\n        <label class="label-green">Password</label>\n        <input type="password" class="form-control" [(ngModel)]="sign.password" name="password" />\n      </div>\n      <div class="form-group">\n        <button type="submit" class="hl-button">Sign In</button>\n      </div>\n    </form>\n    <div class="forgot">\n      <span (click)="recoverPassword()">Forgot your password ?</span>\n    </div>\n  </div>\n  <div class="loading" [hidden]="!signing">\n    <div class="loadingcontainer">\n      <img src="assets/imgs/loading.png" class="imgloading" /><br />\n      Sending...\n    </div>\n  </div>\n</ion-content>\n`/*ion-inline-end:"/home/maikel/Workspace/lotus/src/pages/signin/signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_localstorage_localstorage__["a" /* LocalstorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_localstorage_localstorage__["a" /* LocalstorageProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_lotus_lotus__["a" /* LotusProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RecoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecoverPage = (function () {
    function RecoverPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.account = { email: '' };
    }
    RecoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecoverPage');
    };
    RecoverPage.prototype.recoverPassword = function () {
        console.log(this.account);
    };
    RecoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-recover',template:/*ion-inline-start:"/home/maikel/Workspace/lotus/src/pages/recover/recover.html"*/`<!--\n  Generated template for the RecoverPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Recover</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div>\n      <form class="top50" (ngSubmit)="recoverPassword()">  \n        <div class="form-group">\n          <label class="label-green">Email</label>\n          <input type="email" class="form-control" [(ngModel)]="account.email" name="email" />\n        </div>\n        <div class="form-group">\n          <button type="submit" class="hl-button">Recover Password</button>\n        </div>\n      </form>\n    </div>\n</ion-content>\n`/*ion-inline-end:"/home/maikel/Workspace/lotus/src/pages/recover/recover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RecoverPage);
    return RecoverPage;
}());

//# sourceMappingURL=recover.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LotusProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(259);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { HttpClient, HttpHeaders } from '@angular/common/http';



/*
  Generated class for the LotusProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LotusProvider = (function () {
    function LotusProvider(afDatabase, afAuth) {
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        console.log('Hello LotusProvider Provider');
    }
    LotusProvider.prototype.setProfile = function (uid, profile) {
        var _this = this;
        console.log('maikel');
        return this.afAuth.authState.subscribe(function (auth) {
            _this.afDatabase.list("profile/" + auth.uid).push(profile)
                .then(function (r) { return console.log(r); });
        });
        // return this.afDatabase.object(`profile/${uid}`).set(profile)
        //   .then(res => Promise.reject(res))
        //   .catch(err => Promise.reject(err));
    };
    LotusProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], LotusProvider);
    return LotusProvider;
}());

//# sourceMappingURL=lotus.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_localstorage_localstorage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__general_general__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, menu, toastCtrl, auth, storage, localstorage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.auth = auth;
        this.storage = storage;
        this.localstorage = localstorage;
        this.registring = false;
        this.user = { name: '', email: '', phone: '', password: '', repeat_password: '', relationship: false, credential: '' };
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.askTherapist = function () {
        this.toast('We require your certification number to ensure you are a registered therapist in good standing with your governing body', 'middle', 0, '', true);
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        if (this.user.email != '' && this.user.password != '') {
            if (this.user.password === this.user.repeat_password) {
                this.auth.registerUserDrupal(this.user)
                    .subscribe(function (r) {
                    _this.registring = true;
                    _this.auth.setProfileUserDrupal(_this.user, r.uid)
                        .subscribe(function (p) {
                        _this.auth.loginUserDrupal(_this.user.name, _this.user.password)
                            .subscribe(function (l) {
                            var session = {
                                login: true,
                                user: _this.user.name,
                                createAt: new Date().getTime(),
                                uid: l.user.uid,
                                mail: l.user.mail,
                                data: l.user
                            };
                            _this.registring = false;
                            _this.localstorage.setData('session', JSON.stringify(session));
                            _this.menu.swipeEnable(true);
                            _this.storage.updateSessionAfterLogin(session);
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__general_general__["a" /* GeneralPage */]);
                        }, function (err) {
                            _this.registring = false;
                            _this.toast('Authentication Fail. Please review email and password and try again', 'top', 300, '', '');
                        });
                    });
                }, function (err) { return _this.toast('Error !!!', 'top', 3000, '', ''); });
            }
            else {
                this.toast('Passwords not match', 'top', 3000, '', '');
            }
        }
        else {
            this.toast('user and passwowrd fields are required', 'top', 3000, '', '');
        }
    };
    // register() {
    //   if (this.user.email != '' && this.user.password != '') {
    //     this.auth.registerUser(this.user.email, this.user.password)
    //     .then(r => {
    //       console.log(r);
    //       this.auth.loginUser(this.user.email, this.user.password)
    //       .then(res => {
    //         console.log('auth', res);
    //         this.lotus.setProfile(r.uid, this.user)
    //         // .then(p => console.log('profile', p))
    //         // .catch(err => this.toast('Error creating profile', 'top', 3000, '', ''));
    //       })
    //       .catch(err => this.toast('Error !!!', 'top', 3000, '', ''));
    //     })
    //     .catch(err => this.toast('Error !!!', 'top', 3000, '', ''));
    //   }
    //   else {
    //     this.toast('user and passwowrd fields are required', 'top', 3000, '', '');
    //   }
    // }
    RegisterPage.prototype.toast = function (msg, pos, t, style, close) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: t,
            position: pos,
            cssClass: style,
            showCloseButton: close
        });
        toast.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"/home/maikel/Workspace/lotus/src/pages/register/register.html"*/`<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="content-logo">\n    <img src="assets/imgs/logo.png" class="logo" />\n  </div>\n  <div class="top30">\n    <form (ngSubmit)="register()">\n      <div class="form-group">\n        <label class="label-green">Name</label>\n        <input type="text" class="form-control" [(ngModel)]="user.name" name="name" />\n      </div>\n      <div class="form-group">\n        <label class="label-green">Email</label>\n        <input type="email" class="form-control" [(ngModel)]="user.email" name="email" />\n      </div>\n      <div class="form-group">\n        <label class="label-green">Phone number</label>\n        <input type="tel" class="form-control" [(ngModel)]="user.phone" name="phone" />\n      </div>\n      <div class="form-group">\n        <label class="label-green">Password</label>\n        <input type="password" class="form-control" [(ngModel)]="user.password" name="password" />\n      </div>\n      <div class="form-group">\n        <label class="label-green">Repeat Password</label>\n        <input type="password" class="form-control" [(ngModel)]="user.repeat_password" name="password" />\n      </div>\n      <div class="form-group">\n        <ion-list>\n          <ion-item>\n            <ion-label>Are you a therapist ?</ion-label>\n            <ion-toggle [(ngModel)]="user.relationship" name="relationship" color="secondary"></ion-toggle>\n          </ion-item>\n        </ion-list>\n      </div>\n      <div class="form-group" [hidden]="!user.relationship">\n        <label class="label-green">Certificate credential number</label>\n        <input type="text" class="form-control" [(ngModel)]="user.credential" name="credential" />\n      </div>\n      <div class="forgot" [hidden]="!user.relationship">\n        <span (click)="askTherapist()">Why we ask this ?</span>\n      </div>\n      <div class="form-group">\n        <button type="submit" class="hl-button" >Register</button>\n      </div>\n    </form>\n  </div>\n  <div class="loading" [hidden]="!registring">\n    <div class="loadingcontainer">\n      <img src="assets/imgs/loading.png" class="imgloading" /><br />\n      Sending...\n    </div>\n  </div>\n</ion-content>\n`/*ion-inline-end:"/home/maikel/Workspace/lotus/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_localstorage_localstorage__["a" /* LocalstorageProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_localstorage_localstorage__["a" /* LocalstorageProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_localstorage_localstorage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appoiments_appoiments__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, localStorage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.localStorage = localStorage;
        this.getProfile();
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.getProfile = function () {
        var _this = this;
        this.loading = false;
        this.localStorage.getData('session')
            .then(function (r) {
            _this.profile = JSON.parse(r);
            _this.user = _this.profile.user;
            _this.mail = _this.profile.mail;
        });
        // this.localStorage.getData('session')
        // .then((r) => {
        //   if (r == null || r == undefined) {
        //     setTimeout(() => this.navCtrl.push(LandingPage), 1000);
        //   } else {
        //     this.profile = JSON.parse(r);
        //     console.log(r, this.profile);
        //     this.loading = true;
        //   }
        // });
    };
    ProfilePage.prototype.gotoBooking = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__appoiments_appoiments__["a" /* AppoimentsPage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/maikel/Workspace/lotus/src/pages/profile/profile.html"*/`<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="secondary" hideBackButton="true">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n          {{user}}\n        </ion-card-header>\n        <ion-card-content>\n          <a href="mailto:{{mail}}">{{mail}}</a>\n        </ion-card-content>\n    </ion-card>\n    <ion-fab center bottom (click)="gotoBooking()">\n      <button ion-fab color="secondary"><ion-icon name="calendar"></ion-icon></button>\n    </ion-fab>\n</ion-content>\n`/*ion-inline-end:"/home/maikel/Workspace/lotus/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_localstorage_localstorage__["a" /* LocalstorageProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = (function () {
    function ContactPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contact = { subject: '', msg: '' };
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/maikel/Workspace/lotus/src/pages/contact/contact.html"*/`<!--\n  Generated template for the ContactPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="secondary" hideBackButton="true">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Contact Us</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div>\n    <form class="top50" (ngSubmit)="signIn()">  \n      <div class="form-group">\n        <label class="label-green">Subject</label>\n        <input type="email" class="form-control" [(ngModel)]="contact.subject" name="subjet" />\n      </div>\n      <div class="form-group">\n        <label class="label-green">Message</label>\n        <textarea [(ngModel)]="contact.msg" name="msg"></textarea>\n      </div>\n      <div class="form-group">\n        <button type="submit" class="hl-button">Send</button>\n      </div>\n    </form>\n  </div>\n</ion-content>\n`/*ion-inline-end:"/home/maikel/Workspace/lotus/src/pages/contact/contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appoiments_appoiments__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage.prototype.gotoBooking = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__appoiments_appoiments__["a" /* AppoimentsPage */]);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"/home/maikel/Workspace/lotus/src/pages/about/about.html"*/`<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="secondary" hideBackButton="true">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About Us</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="mftitle">\n    Your Bespoke <br />\n    Experience\n  </div>\n  <div class="aboutstyle">\n    <ul>\n      <li>\n          The Healing Lotus App is a clinical tool for both\n          healthcare professionals and their clients.\n          • It is a compilation of manual self care techniques,\n          rehabilitative exercises and stretches for increased\n          flexibility &amp; mobility.\n      </li>\n      <li>\n          The aim is to visually educate &amp; support our\n          clients for a positive &amp; effective rehabilitative\n          outcome.\n      </li>\n      <li>\n          Using the app is very simple &amp; interactive. You\n          will be able to search grossly by body region or by\n          viewing common broad conditions.\n      </li>\n      <li>\n          Due to The Healing Lotus&#39; holistic philosophy,\n          you will also find helpful links to some of our\n          favourite health tools, e.g. Insight Timer\n          (mindfulness app).\n      </li>\n      <li>\n          Professionals can create personal routines for\n          their clients and select multiple videos from\n          different categories. Sections for additional notes /\n          instructions is also available alongside each\n          exercise allowing for greater communication &amp;\n          understanding between therapists &amp; clients.\n      </li>\n      <li>\n          PDF Charts / Blank pages can be created to track\n          client progress over the course of a rehabilitation\n          program. These files can also be downloaded &amp;\n          exported from the app to be uploaded / printed for\n          storage in the clients file.\n      </li>\n    </ul>\n  </div>\n\n  <ion-fab center bottom>\n    <button ion-fab color="secondary"><ion-icon name="calendar" large></ion-icon></button>\n  </ion-fab>\n\n  <ion-fab center bottom (click)="gotoBooking()">\n    <button ion-fab color="secondary"><ion-icon name="calendar"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n`/*ion-inline-end:"/home/maikel/Workspace/lotus/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appoiments_appoiments__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServicesPage = (function () {
    function ServicesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ServicesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicesPage');
    };
    ServicesPage.prototype.gotoBooking = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__appoiments_appoiments__["a" /* AppoimentsPage */]);
    };
    ServicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-services',template:/*ion-inline-start:"/home/maikel/Workspace/lotus/src/pages/services/services.html"*/`<!--\n  Generated template for the ServicesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="secondary" hideBackButton="true">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Service Area</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="backgroundtemp">\n      <img src="assets/imgs/favicon.png" /><br />\n      Loading...\n    </div>\n  <iframe class=\'webpage\' name= "samplePage" src="http://thehealinglotus.ca/contact/#service-area"  width="100%" height="120%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n\n  <ion-fab center bottom (click)="gotoBooking()">\n    <button ion-fab color="secondary"><ion-icon name="calendar"></ion-icon></button>\n  </ion-fab>  \n</ion-content>\n`/*ion-inline-end:"/home/maikel/Workspace/lotus/src/pages/services/services.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ServicesPage);
    return ServicesPage;
}());

//# sourceMappingURL=services.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StretchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__videolist_videolist__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appoiments_appoiments__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categories__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StretchPage = (function () {
    function StretchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.form = {
            body: '',
            anatomy: ''
        };
        this.op = 'body';
        this.bodyPart = __WEBPACK_IMPORTED_MODULE_4__categories__["a" /* default */].stretch.body;
        this.anatomySelect = __WEBPACK_IMPORTED_MODULE_4__categories__["a" /* default */].stretch.anatomy;
        this.form.body = '';
        this.form.body = '';
    }
    StretchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StretchPage');
    };
    StretchPage.prototype.changeBodySelect = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__videolist_videolist__["a" /* VideolistPage */], {
            origin: 'stretch',
            type: 'body',
            param: this.form.body
        });
    };
    StretchPage.prototype.changeAnatomySelect = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__videolist_videolist__["a" /* VideolistPage */], {
            origin: 'stretch',
            type: 'anatomy',
            param: this.form.anatomy
        });
    };
    StretchPage.prototype.gotoBooking = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__appoiments_appoiments__["a" /* AppoimentsPage */]);
    };
    StretchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-stretch',template:/*ion-inline-start:"/home/maikel/Workspace/lotus/src/pages/stretch/stretch.html"*/`<!--\n  Generated template for the StretchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="secondary" hideBackButton="true">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Strech</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="top40">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <div [ngClass]="{\'op-active\': op === \'body\', \'op-no-active\': op === \'anatomy\'}" (click)="op=\'body\'; form.body = \'\'">\n              BODY REGION\n            </div>\n          </ion-col>\n          <ion-col col-6>\n            <div [ngClass]="{\'op-no-active\': op === \'body\', \'op-active\': op === \'anatomy\'}" (click)="op=\'anatomy\'; form.anatomy = \'\'">\n              ANATOMY\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  </div>\n  <form class="top40">\n    <div class="form-group" [hidden]="op === \'anatomy\'">\n      <label class="label-green">Select</label>\n      <select class="form-control top15" [(ngModel)]="form.body" name="body" (change)="changeBodySelect()">\n        <option value="">-- Select --</option>\n        <option *ngFor = "let b of bodyPart" value="{{b.key}}">{{b.value}}</option>\n      </select>\n    </div>\n    <div class="form-group" [hidden]="op === \'body\'">\n      <label class="label-green">Select</label>\n      <select class="form-control top15" [(ngModel)]="form.anatomy" name="anatomy" (change)="changeAnatomySelect()">\n        <option value="">-- Select --</option>\n        <option *ngFor = "let a of anatomySelect" value="{{a.key}}">{{a.value}}</option>\n      </select>\n    </div>\n  </form>  \n\n  <ion-fab center bottom (click)="gotoBooking()">\n    <button ion-fab color="secondary"><ion-icon name="calendar"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n`/*ion-inline-end:"/home/maikel/Workspace/lotus/src/pages/stretch/stretch.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], StretchPage);
    return StretchPage;
}());

//# sourceMappingURL=stretch.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StrengthenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__videolist_videolist__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appoiments_appoiments__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categories__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the StrengthenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StrengthenPage = (function () {
    function StrengthenPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.form = {
            body: '',
            anatomy: ''
        };
        this.op = 'body';
        this.bodyPart = __WEBPACK_IMPORTED_MODULE_4__categories__["a" /* default */].strength.body;
        this.anatomySelect = __WEBPACK_IMPORTED_MODULE_4__categories__["a" /* default */].stretch.anatomy;
        this.form.body = '';
        this.form.body = '';
    }
    StrengthenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StrenthengPage');
    };
    StrengthenPage.prototype.changeBodySelect = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__videolist_videolist__["a" /* VideolistPage */], {
            origin: 'strength',
            type: 'body',
            param: this.form.body
        });
    };
    StrengthenPage.prototype.changeAnatomySelect = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__videolist_videolist__["a" /* VideolistPage */], {
            origin: 'strength',
            type: 'anatomy',
            param: this.form.anatomy
        });
    };
    StrengthenPage.prototype.gotoBooking = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__appoiments_appoiments__["a" /* AppoimentsPage */]);
    };
    StrengthenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-strengthen',template:/*ion-inline-start:"/home/maikel/Workspace/lotus/src/pages/strengthen/strengthen.html"*/`<!--\n  Generated template for the StrengthenPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="secondary" hideBackButton="true">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Strengthen</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="top40">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <div [ngClass]="{\'op-active\': op === \'body\', \'op-no-active\': op === \'anatomy\'}" (click)="op=\'body\'; form.body = \'\'">\n              BODY REGION\n            </div>\n          </ion-col>\n          <ion-col col-6>\n            <div [ngClass]="{\'op-no-active\': op === \'body\', \'op-active\': op === \'anatomy\'}" (click)="op=\'anatomy\'; form.anatomy = \'\'">\n              ANATOMY\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  </div>\n  <form class="top40">\n    <div class="form-group" [hidden]="op === \'anatomy\'">\n      <label class="label-green">Select</label>\n      <select class="form-control top15" [(ngModel)]="form.body" name="body" (change)="changeBodySelect()">\n        <option value="">-- Select --</option>\n        <option *ngFor = "let b of bodyPart" value="{{b.key}}">{{b.value}}</option>\n      </select>\n    </div>\n    <div class="form-group" [hidden]="op === \'body\'">\n      <label class="label-green">Select</label>\n      <select class="form-control top15" [(ngModel)]="form.anatomy" name="anatomy" (change)="changeAnatomySelect()">\n        <option value="">-- Select --</option>\n        <option *ngFor = "let a of anatomySelect" value="{{a.key}}">{{a.value}}</option>\n      </select>\n    </div>\n  </form>  \n\n  <ion-fab center bottom (click)="gotoBooking()">\n    <button ion-fab color="secondary"><ion-icon name="calendar"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n`/*ion-inline-end:"/home/maikel/Workspace/lotus/src/pages/strengthen/strengthen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], StrengthenPage);
    return StrengthenPage;
}());

//# sourceMappingURL=strengthen.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManualPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__videolist_videolist__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appoiments_appoiments__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categories__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ManualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ManualPage = (function () {
    function ManualPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.form = {
            body: '',
            anatomy: ''
        };
        this.op = 'body';
        this.bodyPart = __WEBPACK_IMPORTED_MODULE_4__categories__["a" /* default */].manual.body;
        this.anatomySelect = __WEBPACK_IMPORTED_MODULE_4__categories__["a" /* default */].stretch.anatomy;
        this.form.body = '';
        this.form.body = '';
    }
    ManualPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ManualPage');
    };
    ManualPage.prototype.changeBodySelect = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__videolist_videolist__["a" /* VideolistPage */], {
            origin: 'manual',
            type: 'body',
            param: this.form.body
        });
    };
    ManualPage.prototype.changeAnatomySelect = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__videolist_videolist__["a" /* VideolistPage */], {
            origin: 'manual',
            type: 'anatomy',
            param: this.form.anatomy
        });
    };
    ManualPage.prototype.gotoBooking = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__appoiments_appoiments__["a" /* AppoimentsPage */]);
    };
    ManualPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-manual',template:/*ion-inline-start:"/home/maikel/Workspace/lotus/src/pages/manual/manual.html"*/`<!--\n  Generated template for the ManualPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="secondary" hideBackButton="true">\n      <button ion-button menuToggle right>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Manual Techniques</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n  <ion-content padding>\n    <div class="top40">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-6>\n              <div [ngClass]="{\'op-active\': op === \'body\', \'op-no-active\': op === \'anatomy\'}" (click)="op=\'body\'; form.body = \'\'">\n                BODY REGION\n              </div>\n            </ion-col>\n            <ion-col col-6>\n              <div [ngClass]="{\'op-no-active\': op === \'body\', \'op-active\': op === \'anatomy\'}" (click)="op=\'anatomy\'; form.anatomy = \'\'">\n                ANATOMY\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n    </div>\n    <form class="top40">\n      <div class="form-group" [hidden]="op === \'anatomy\'">\n        <label class="label-green">Select</label>\n        <select class="form-control top15" [(ngModel)]="form.body" name="body" (change)="changeBodySelect()">\n          <option value="">-- Select --</option>\n          <option *ngFor = "let b of bodyPart" value="{{b.key}}">{{b.value}}</option>\n        </select>\n      </div>\n      <div class="form-group" [hidden]="op === \'body\'">\n        <label class="label-green">Select</label>\n        <select class="form-control top15" [(ngModel)]="form.anatomy" name="anatomy" (change)="changeAnatomySelect()">\n          <option value="">-- Select --</option>\n          <option *ngFor = "let a of anatomySelect" value="{{a.key}}">{{a.value}}</option>\n        </select>\n      </div>\n    </form>  \n\n    <ion-fab center bottom (click)="gotoBooking()">\n      <button ion-fab color="secondary"><ion-icon name="calendar"></ion-icon></button>\n    </ion-fab>\n  </ion-content>\n  \n`/*ion-inline-end:"/home/maikel/Workspace/lotus/src/pages/manual/manual.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ManualPage);
    return ManualPage;
}());

//# sourceMappingURL=manual.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainfulnessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appoiments_appoiments__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MainfulnessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainfulnessPage = (function () {
    function MainfulnessPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MainfulnessPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainfulnessPage');
    };
    MainfulnessPage.prototype.gotoBooking = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__appoiments_appoiments__["a" /* AppoimentsPage */]);
    };
    MainfulnessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mainfulness',template:/*ion-inline-start:"/home/maikel/Workspace/lotus/src/pages/mainfulness/mainfulness.html"*/`<!--\n  Generated template for the MainfulnessPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="secondary" hideBackButton="true">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mindfulness</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="mftitle">\n      What we think,<br />\n      we becomes\n  </div>\n  <div class="mfstyle">\n    <p>Mindfulness is our fundamental human ability to be fully present, conscious of where we are and what we’re doing. It is the ability to not be overly reactive or overwhelmed by what’s going on around us.</p>\n    <p>Although we are inherently mindful, we become ever more present when we practice mindfulness on a daily basis.</p>\n    <p>Mindfulness transcends any form of religion, it is simply a tool to exercise your brain&#39;s capacity to respond accordingly to the external world, as opposed to reacting to it.</p>\n    <p>There is growing research indicating that when you train your brain to be mindful, you are physically re-modelling the structure of your brain.</p> \n    <p>At THL we strive to help bring direct awareness to what you are experiencing via your senses from a balanced state of mind by calibrating your thoughts and emotions.</p>  \n    <p>Please take the time to use the Insight Timer App (make sure the title is clickable so they go to it from there as well) it will greatly compliment your lifestyle goals.</p>  \n    <p>\n      What we think, we BECOME!\n    </p>\n  </div>\n\n  <ion-fab center bottom (click)="gotoBooking()">\n    <button ion-fab color="secondary"><ion-icon name="calendar"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n`/*ion-inline-end:"/home/maikel/Workspace/lotus/src/pages/mainfulness/mainfulness.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MainfulnessPage);
    return MainfulnessPage;
}());

//# sourceMappingURL=mainfulness.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appoiments_appoiments__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the NotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotesPage = (function () {
    function NotesPage(navCtrl, navParams, ds) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ds = ds;
    }
    NotesPage.prototype.ionViewDidLoad = function () {
    };
    NotesPage.prototype.sanitizeText = function (text) {
        return this.ds.bypassSecurityTrustHtml(text);
    };
    NotesPage.prototype.gotoBooking = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__appoiments_appoiments__["a" /* AppoimentsPage */]);
    };
    NotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notes',template:/*ion-inline-start:"/home/maikel/Workspace/lotus/src/pages/notes/notes.html"*/`<!--\n  Generated template for the NotesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="secondary" hideBackButton="true">\n      <button ion-button menuToggle right>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Lotus Notes</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div class="backgroundtemp">\n      <img src="assets/imgs/favicon.png" /><br />\n      Loading...\n    </div>\n  <iframe class=\'webpage\' name="samplePage" src="http://thehealinglotus.ca/lotus-notes/"  width="100%" height="120%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n\n  <ion-fab center bottom (click)="gotoBooking()">\n    <button ion-fab color="secondary"><ion-icon name="calendar"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n`/*ion-inline-end:"/home/maikel/Workspace/lotus/src/pages/notes/notes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"]])
    ], NotesPage);
    return NotesPage;
}());

//# sourceMappingURL=notes.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(326);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_embed_video__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_embed_video___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_embed_video__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_landing_landing__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signin_signin__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_recover_recover__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_appoiments_appoiments__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_bodylanding_bodylanding__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_contact_contact__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_localstorage_localstorage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_lotus_lotus__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_auth_auth__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_general_general__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_stretch_stretch__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_strengthen_strengthen__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_manual_manual__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_mainfulness_mainfulness__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_notes_notes__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_about_about__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_services_services__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angularfire2__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angularfire2_database__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_angularfire2_auth__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_videolist_videolist__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_videoplayer_videoplayer__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















// menu 2






// menu3







var firebaseConfig = {
    apiKey: "AIzaSyDyPESBrS0MkGe_INknClCQhN8omtBoNtc",
    authDomain: "the-healing-lotus.firebaseapp.com",
    databaseURL: "https://your-domain-name.firebaseio.com",
    storageBucket: "the-healing-lotus.appspot.com",
    messagingSenderId: '105071062205'
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_landing_landing__["a" /* LandingPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_appoiments_appoiments__["a" /* AppoimentsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_bodylanding_bodylanding__["a" /* BodylandingPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_recover_recover__["a" /* RecoverPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_services_services__["a" /* ServicesPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_general_general__["a" /* GeneralPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_stretch_stretch__["a" /* StretchPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_strengthen_strengthen__["a" /* StrengthenPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_mainfulness_mainfulness__["a" /* MainfulnessPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_manual_manual__["a" /* ManualPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_notes_notes__["a" /* NotesPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_videolist_videolist__["a" /* VideolistPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_videoplayer_videoplayer__["a" /* VideoplayerPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_29_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_30_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_31_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_embed_video__["EmbedVideo"].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_landing_landing__["a" /* LandingPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_appoiments_appoiments__["a" /* AppoimentsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_bodylanding_bodylanding__["a" /* BodylandingPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_recover_recover__["a" /* RecoverPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_services_services__["a" /* ServicesPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_general_general__["a" /* GeneralPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_stretch_stretch__["a" /* StretchPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_strengthen_strengthen__["a" /* StrengthenPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_mainfulness_mainfulness__["a" /* MainfulnessPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_manual_manual__["a" /* ManualPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_notes_notes__["a" /* NotesPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_videolist_videolist__["a" /* VideolistPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_videoplayer_videoplayer__["a" /* VideoplayerPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_localstorage_localstorage__["a" /* LocalstorageProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_lotus_lotus__["a" /* LotusProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_auth_auth__["a" /* AuthProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_landing_landing__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_appoiments_appoiments__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_services_services__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_general_general__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_stretch_stretch__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_strengthen_strengthen__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_manual_manual__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_mainfulness_mainfulness__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_notes_notes__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_videolist_videolist__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_bodylanding_bodylanding__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_localstorage_localstorage__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var MyApp = (function () {
    function MyApp(platform, menu, statusBar, splashScreen, localStorage) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.localStorage = localStorage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], sideMenu: false, subMenu: 1 },
            { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */], sideMenu: true, subMenu: 1 },
            { title: 'Appointments', component: __WEBPACK_IMPORTED_MODULE_7__pages_appoiments_appoiments__["a" /* AppoimentsPage */], sideMenu: true, subMenu: 1 },
            { title: 'Body', component: __WEBPACK_IMPORTED_MODULE_18__pages_bodylanding_bodylanding__["a" /* BodylandingPage */], sideMenu: true, subMenu: 0 },
            { title: 'Contact Us', component: __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */], sideMenu: true, subMenu: 0 },
            { title: 'General Imbalances', component: __WEBPACK_IMPORTED_MODULE_11__pages_general_general__["a" /* GeneralPage */], sideMenu: true, subMenu: 2 },
            { title: 'Stretch', component: __WEBPACK_IMPORTED_MODULE_12__pages_stretch_stretch__["a" /* StretchPage */], sideMenu: true, subMenu: 2 },
            { title: 'Strengthen', component: __WEBPACK_IMPORTED_MODULE_13__pages_strengthen_strengthen__["a" /* StrengthenPage */], sideMenu: true, subMenu: 2 },
            { title: 'Manual Techniques', component: __WEBPACK_IMPORTED_MODULE_14__pages_manual_manual__["a" /* ManualPage */], sideMenu: true, subMenu: 2 },
            { title: 'Mindfulness', component: __WEBPACK_IMPORTED_MODULE_15__pages_mainfulness_mainfulness__["a" /* MainfulnessPage */], sideMenu: true, subMenu: 2 },
            { title: 'Lotus Notes', component: __WEBPACK_IMPORTED_MODULE_16__pages_notes_notes__["a" /* NotesPage */], sideMenu: true, subMenu: 2 },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */], sideMenu: true, subMenu: 3 },
            { title: 'Service Area', component: __WEBPACK_IMPORTED_MODULE_10__pages_services_services__["a" /* ServicesPage */], sideMenu: true, subMenu: 3 },
            { title: '', component: __WEBPACK_IMPORTED_MODULE_17__pages_videolist_videolist__["a" /* VideolistPage */], sideMenu: false, subMenu: 1 }
        ];
        this.session = {};
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.localStorage.currentSession$.subscribe(function (s) {
                _this.session = s;
                _this.initial = s.user.substr(0, 1);
            });
            _this.localStorage.getData('session')
                .then(function (r) {
                if (r != null && r == undefined) {
                    _this.menu.swipeEnable(true);
                    _this.session = r;
                    _this.initial = r.user.substr(0, 1);
                }
            })
                .catch();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.localStorage.removeData('session')
            .then(function (r) {
            _this.menu.swipeEnable(false);
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_landing_landing__["a" /* LandingPage */]);
        })
            .catch();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/maikel/Workspace/lotus/src/app/app.html"*/`<ion-menu [content]="content" persistent="true" [swipeEnabled]="false">\n  <ion-content class="sidemenu">\n    <div class="head-side-menu"> \n        <div class="head-photo">{{initial}}</div>\n        <div class="head-name">{{session.user}}</div>\n    </div>\n    <ion-list>\n      <button menuClose ion-item class="button-side-menu" *ngFor="let p of pages" [hidden]="!p.sideMenu || p.subMenu != 1" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n    <hr class="menu-separator" />\n      <ion-list>\n        <button menuClose ion-item class="button-side-menu" *ngFor="let p of pages" [hidden]="!p.sideMenu || p.subMenu != 2" (click)="openPage(p)">\n          {{p.title}}\n        </button>\n      </ion-list>\n    <hr class="menu-separator" />\n    <ion-list>\n      <button menuClose ion-item class="button-side-menu-3" *ngFor="let p of pages" [hidden]="!p.sideMenu || p.subMenu != 3" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n    <div class="feed-side-menu">\n      <span class="logout" menuClose (click)="logout()">\n        Logout\n      </span>\n    </div>\n  </ion-content>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>`/*ion-inline-end:"/home/maikel/Workspace/lotus/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_19__providers_localstorage_localstorage__["a" /* LocalstorageProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalstorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
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
  Generated class for the LocalstorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LocalstorageProvider = (function () {
    function LocalstorageProvider(localStorage) {
        this.localStorage = localStorage;
        this.session = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.currentSession$ = this.session.asObservable();
    }
    LocalstorageProvider.prototype.ready = function () {
        return this.localStorage.ready();
    };
    LocalstorageProvider.prototype.setData = function (key, value) {
        this.localStorage.set(key, value);
    };
    LocalstorageProvider.prototype.getData = function (key) {
        return this.localStorage.get(key);
    };
    LocalstorageProvider.prototype.removeData = function (key) {
        return this.localStorage.remove(key);
    };
    LocalstorageProvider.prototype.updateSessionAfterLogin = function (s) {
        this.session.next(s);
    };
    LocalstorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], LocalstorageProvider);
    return LocalstorageProvider;
}());

//# sourceMappingURL=localstorage.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var cats = {
    general_imbalances: {
        body: [
            { key: 'head', value: 'Head' },
            { key: 'neck', value: 'Neck' },
            { key: 'shoulders', value: 'Shoulders' },
            { key: 'arms', value: 'Arms' },
            { key: 'forearm', value: 'Forearm' },
            { key: 'hands', value: 'Hands' },
            { key: 'hips', value: 'Hips' },
            { key: 'legs', value: 'Legs' },
            { key: 'feet', value: 'Feet' },
            { key: 'torse', value: 'Torso' }
        ],
        subcategory: [
            { body: 'head', subcategory: 'Foward Head Posture' },
            { body: 'head', subcategory: 'Headaches/Migraines' },
            { body: 'head', subcategory: 'TMJ' },
            { body: 'neck', subcategory: 'Thoracic Outlet Syndrome' },
            { body: 'neck', subcategory: 'Spasm (UFT, Lev Scap, SCM)' },
            { body: 'shoulders', subcategory: 'Spasm (Anterior Deltoid, Middle Deltoid, Posterior Deltoid)' },
            { body: 'shoulders', subcategory: 'Brachial Plexus Injury' },
            { body: 'arms', subcategory: 'Spasm (Biceps, Triceps, Flexors, Extensors)' },
            { body: 'arms', subcategory: 'Ulnar Nerve Compression' },
            { body: 'arms', subcategory: 'Brachial Plexus Injury' },
            { body: 'arms', subcategory: 'Carpal Tunnel Syndrome' },
            { body: 'hands', subcategory: 'Spasm (Biceps, Triceps, Flexors, Extensors)' },
            { body: 'hands', subcategory: 'Ulnar Nerve Compression' },
            { body: 'hands', subcategory: 'Brachial Plexus Injury' },
            { body: 'hands', subcategory: 'Carpal Tunnel Syndrome' },
            { body: 'hips', subcategory: 'Anterior Pelvic Tilt' },
            { body: 'hips', subcategory: 'Sciatica' },
            { body: 'hips', subcategory: 'Spasm (Glute Max, Glute Med, Piriformis)' },
            { body: 'hips', subcategory: 'I.T. Band Contracture' },
            { body: 'hips', subcategory: 'Femoral Nerve Dysfunction' },
            { body: 'hips', subcategory: 'Meralgia Paresthetica' },
            { body: 'hips', subcategory: 'Herniated Disc' },
            { body: 'hips', subcategory: 'Groin Strain' },
            { body: 'hips', subcategory: 'Hamstring Spasm' },
            { body: 'legs', subcategory: 'Spasm (Tibialis Anterior, Calves Gastrocnemius, Soleus)' },
            { body: 'legs', subcategory: 'I.T. Band Contracture' },
            { body: 'legs', subcategory: 'Patellofemoral Syndrome' },
            { body: 'legs', subcategory: 'Shin Splints' },
            { body: 'legs', subcategory: 'ACL Sprain' },
            { body: 'legs', subcategory: 'PCL Sprain' },
            { body: 'legs', subcategory: 'MCL Sprain' },
            { body: 'feet', subcategory: 'spasm_flexor_digitorum_longus' },
            { body: 'feet', subcategory: 'Flat Feet' },
            { body: 'feet', subcategory: 'ATFL Sprain (Anterior Talo-Fibular Ligament)' },
            { body: 'feet', subcategory: 'PTFL Sprain (Posterior Talo-Fibular Ligament)' },
            { body: 'feet', subcategory: 'Calcaneo-Fibular Ligament' },
            { body: 'torso', subcategory: 'Thoracic Outlet Syndrome' },
            { body: 'torso', subcategory: 'Scoliosis' },
            { body: 'torso', subcategory: 'Back Pain' }
        ],
        exercises: [
            { subcategory: '', body: 'forearm', title: 'Forearm Extensor', description: '', url: '276031690', icon: '708458072' },
            { subcategory: '', body: 'forearm', title: 'Forearm Extensor Stretch Kneeling', description: '', url: '276031701', icon: '708458043' },
            { subcategory: '', body: 'forearm', title: 'Forearm Flexor', description: '', url: '276031699', icon: '708458007' },
            { subcategory: '', body: 'feet', title: 'Plantar Fascia Foot Intrinsics', description: '', url: '276031738', icon: '708458084' },
            { subcategory: '', body: 'legs', title: 'Hamstring Stretch Active Fold', description: '', url: '276037502', icon: '708465202' },
            { subcategory: '', body: 'legs', title: 'Hamstring Stretch Passive Fold', description: '', url: '276037528', icon: '708466131' },
            { subcategory: '', body: 'neck', title: 'Levator Scapula Spleni', description: '', url: '276037533', icon: '708465200' },
            { subcategory: '', body: 'neck', title: 'Scalene', description: '', url: '276037568', icon: '708465250' },
            { subcategory: '', body: 'neck', title: 'Upper Traps Scalenes', description: '', url: '276037630', icon: '708465352' },
            { subcategory: '', body: 'arms', title: 'Tricep Lats', description: '', url: '276037603', icon: '708465352' },
            { subcategory: '', body: 'torse', title: 'Tricep Lats', description: '', url: '276037603', icon: '708465246' },
            { subcategory: '', body: 'legs', title: 'Tibialis Anterior - Strengthening', description: 'Resistance band used to activate both the Tibialis Anterior muscle but to also engage the peroneals so as to actively oppose and balance the leg', url: '265750711', icon: '695839420' },
            { subcategory: '', body: 'legs', title: 'Tibialis Anterior 2 - Weighted Strength', description: 'Ankle weight used to increase resistance and activate both the Tibialis Anterior muscle whilst engaging the peroneals to actively oppose and balance the leg.', url: '265754699', icon: '695844346' },
            { subcategory: '', body: 'legs', title: 'Tibialis Anterior 1 - Strengthening', description: '', url: '265754677', icon: '695844324' },
            { subcategory: '', body: 'legs', title: 'Sinlge Leg Bridge', description: '', url: '265754651', icon: '695844316' },
            { subcategory: '', body: 'legs', title: 'Quadricipes Strengthening', description: '', url: '265750699', icon: '695839426' },
            { subcategory: '', body: 'legs', title: 'Pereonal Strengthening', description: '', url: '265754627', icon: '695844274' },
            { subcategory: '', body: 'legs', title: 'Pereonal Strengthening 1', description: '', url: '265750683', icon: '695839438' },
            { subcategory: '', body: 'hips', title: 'Hip Flexor Strengthening 1', description: '', url: '265750670', icon: '695839399' },
            { subcategory: '', body: 'hips', title: 'Hip Flexor Strengthening (ankle weight)', description: '', url: '265750653', icon: '695839415' },
            { subcategory: '', body: 'hips', title: 'Hip Flexor (Psoas Rectus Femoris) Strengthening', description: '', url: '265754592', icon: '695844210' },
            { subcategory: '', body: 'hips', title: 'Hip Abductor Strengthening (TFL, Glute Med, Min)', description: '', url: '265754570', icon: '695844202' },
            { subcategory: '', body: 'legs', title: 'Hamstring Strengthening 1', description: '', url: '265753369', icon: '695842774' },
            { subcategory: '', body: 'legs', title: 'Hamstring Strengthening (Band)', description: '', url: '265753358', icon: '695842717' },
            { subcategory: '', body: 'legs', title: 'Hamstring Strengthening (ankle weight)', description: '', url: '265750643', icon: '695839333' },
            { subcategory: '', body: 'legs', title: 'Glute Strengthening', description: '', url: '265750628', icon: '695839310' },
            { subcategory: '', body: 'legs', title: 'Glute Medius Strengthening 3 (Dynamic)', description: '', url: '265753337', icon: '695842712' },
            { subcategory: '', body: 'legs', title: 'Glute Medius Strengthening 2', description: '', url: '265753326', icon: '695842690' },
            { subcategory: '', body: 'legs', title: 'Glute Medius Strengthening 1', description: '', url: '265753314', icon: '695842710' },
            { subcategory: '', body: 'legs', title: 'Glute Max Strengthening', description: '', url: '265754551', icon: '695839350' },
            { subcategory: '', body: 'legs', title: 'Glute Max Strengthening', description: '', url: '265750614', icon: '695842667' },
            { subcategory: '', body: 'legs', title: 'Glute Hamstring Strrengthening 5', description: '', url: '265753304', icon: '695842661' },
            { subcategory: '', body: 'legs', title: 'Glute Hamstring Strrengthening 5', description: '', url: '265753304', icon: '695842635' },
            { subcategory: '', body: 'legs', title: 'Glute Hamstring Strrengthening 6', description: '', url: '265753289', icon: '695842653' },
            { subcategory: '', body: 'legs', title: 'Glute Hamstring Strrengthening 4', description: '', url: '265753278', icon: '695842637' },
            { subcategory: '', body: 'legs', title: 'Glute Hamstring Strrengthening 3', description: '', url: '265753269', icon: '695842605' },
            { subcategory: '', body: 'legs', title: 'Glute Hamstring Strrengthening 2', description: '', url: '265753254', icon: '695844122' },
            { subcategory: '', body: 'legs', title: 'Glute Hamstring Strrengthening 1', description: '', url: '265753241', icon: '695839362' },
            { subcategory: '', body: 'legs', title: 'Eccentric Hip Flexor Strengthening', description: '', url: '265754511', icon: '695839359' },
            { subcategory: '', body: 'legs', title: 'Calf Strengthening', description: '', url: '265750603', icon: '695839293' },
            { subcategory: '', body: 'legs', title: 'Adductor Strengthening 2', description: '', url: '265750594', icon: '695839287' },
            { subcategory: '', body: 'legs', title: 'Adductor Strengthening 1', description: '', url: '265750583', icon: '695842594' },
            { subcategory: '', body: 'legs', title: 'Adductor Strengthening 3', description: '', url: '265750554', icon: '695839287' },
            { subcategory: '', body: 'legs', title: 'Adductor Strengthening', description: '', url: '265753228', icon: '695842594' },
            { subcategory: '', body: 'neck', title: 'Neck Extensor Release', description: '', url: '271398507', icon: '702689155' },
            { subcategory: '', body: 'head', title: 'Neck Extensor Release', description: '', url: '271398507', icon: '702689155' },
            { subcategory: '', body: 'neck', title: 'Sub-Occipital Release', description: '', url: '271398929', icon: '702689553' },
            { subcategory: '', body: 'head', title: 'Sub-Occipital Release', description: '', url: '271398929', icon: '702689553' },
            { subcategory: '', body: 'arms', title: 'Bicep Curls', description: '', url: '276040315', icon: '708468885' },
            { subcategory: '', body: 'arms', title: 'Brachialis Curls', description: '', url: '276040335', icon: '708468957' },
            { subcategory: '', body: 'arms', title: 'Brachialis Dumbell Curl', description: '', url: '276040376', icon: '708468953' },
            { subcategory: '', body: 'arms', title: '', description: 'Kneeling Tricep Extensions', url: '276040409', icon: '708469001' },
            { subcategory: '', body: 'shoulders', title: 'Scapula Protraction/Retraction ', description: '', url: '276040383', icon: '708469063' },
            { subcategory: '', body: 'torse', title: 'Modified Pushup Plus', description: '', url: '276040405', icon: '708468999' },
            { subcategory: '', body: 'torse', title: 'Pushup', description: '', url: '276040459', icon: '708469077' },
            { subcategory: '', body: 'arms', title: 'CoPushupre', description: '', url: '276040459', icon: '708469077' },
            { subcategory: '', body: 'arms', title: 'Banded Tricep Extensions', description: '', url: '276040437', icon: '708469013' },
            { subcategory: '', body: 'arms', title: 'Dumbell Tricep Extension', description: '', url: '276040438', icon: '708469105' },
            { subcategory: '', body: 'arms', title: 'Foam Rolling', description: '', url: '276031759', icon: '708458109' },
            { subcategory: '', body: 'hands', title: 'Foam Rolling', description: '', url: '276031720', icon: '708458056' },
            { subcategory: '', body: 'hands', title: 'Lacrosse/Tennis Ball', description: '', url: '276031734', icon: '708458040' },
            { subcategory: '', body: 'forearm', title: 'Yoga Block/Foam Roller', description: '', url: '276037415', icon: '708465031' },
            { subcategory: '', body: 'forearm', title: 'Lacrosse/Tennis Ball', description: '', url: '276037504', icon: '708465125' },
            { subcategory: '', body: 'forearm', title: 'Lacrosse/Tennis Ball', description: '', url: '276037497', icon: '708466059' },
            { subcategory: '', body: 'neck', title: 'Neck Fascia Release', description: '', url: '276037563', icon: '708465205' },
            { subcategory: '', body: 'neck', title: 'Sternocleidomastoid Release', description: '', url: '276037591', icon: '708465249' }
        ]
    },
    stretch: {
        body: [
            { key: 'head', value: 'Head' },
            { key: 'neck', value: 'Neck' },
            { key: 'shoulders', value: 'Shoulders' },
            { key: 'arms', value: 'Arms' },
            { key: 'forearm', value: 'Forearm' },
            { key: 'hands', value: 'Hands' },
            { key: 'hips', value: 'Hips' },
            { key: 'legs', value: 'Legs' },
            { key: 'feet', value: 'Feet' },
            { key: 'torse', value: 'Torso' }
        ],
        anatomy: [
            { key: 'temporalis', value: 'Temporalis' },
            { key: 'scm', value: 'SCM' },
            { key: 'biceps', value: 'Biceps' },
            { key: 'triceps', value: 'Triceps' },
            { key: 'deltoid', value: 'Deltoid' },
            { key: 'forearm_flexors', value: 'Forearm Flexors' },
            { key: 'forearm_extensors', value: 'Forearm Extensors' },
            { key: 'core_diaphragm', value: 'Core/Diaphragm' },
            { key: 'glutes', value: 'Glutes' },
            { key: 'hamstrings', value: 'Hamstrings' }
        ],
        exercises: [
            { session: 'body', body: 'forearm', title: 'Forearm Extensor', description: '', url: '276031690', icon: '708458072' },
            { session: 'body', body: 'forearm', title: 'Forearm Extensor Stretch Kneeling', description: '', url: '276031701', icon: '708458043' },
            { session: 'body', body: 'forearm', title: 'Forearm Flexor', description: '', url: '276031699', icon: '708458007' },
            { session: 'body', body: 'feet', title: 'Plantar Fascia Foot Intrinsics', description: '', url: '276031738', icon: '708458084' },
            { session: 'body', body: 'legs', title: 'Hamstring Stretch Active Fold', description: '', url: '276037502', icon: '708465202' },
            { session: 'body', body: 'legs', title: 'Hamstring Stretch Passive Fold', description: '', url: '276037528', icon: '708466131' },
            { session: 'body', body: 'neck', title: 'Levator Scapula Spleni', description: '', url: '276037533', icon: '708465200' },
            { session: 'body', body: 'neck', title: 'Scalene', description: '', url: '276037568', icon: '708465250' },
            { session: 'body', body: 'neck', title: 'Upper Traps Scalenes', description: '', url: '276037630', icon: '708465352' },
            { session: 'body', body: 'arms', title: 'Tricep Lats', description: '', url: '276037603', icon: '708465352' },
            { session: 'body', body: 'torse', title: 'Tricep Lats', description: '', url: '276037603', icon: '708465246' }
        ]
    },
    strength: {
        body: [
            { key: 'head', value: 'Head' },
            { key: 'neck', value: 'Neck' },
            { key: 'shoulders', value: 'Shoulders' },
            { key: 'arms', value: 'Arms' },
            { key: 'hands', value: 'Hands' },
            { key: 'chest', value: 'Chest' },
            { key: 'hips', value: 'Hips' },
            { key: 'legs', value: 'Legs' },
            { key: 'feet', value: 'Feet' },
            { key: 'torse', value: 'Torso' }
        ],
        anatomy: [
            { key: 'temporalis', value: 'Temporalis' },
            { key: 'scm', value: 'SCM' },
            { key: 'biceps', value: 'Biceps' },
            { key: 'triceps', value: 'Triceps' },
            { key: 'deltoid', value: 'Deltoid' },
            { key: 'forearm_flexors', value: 'Forearm Flexors' },
            { key: 'forearm_extensors', value: 'Forearm Extensors' },
            { key: 'core_diaphragm', value: 'Core/Diaphragm' },
            { key: 'glutes', value: 'Glutes' },
            { key: 'hamstrings', value: 'Hamstrings' }
        ],
        exercises: [
            { session: 'body', body: 'legs', title: 'Tibialis Anterior - Strengthening', description: 'Resistance band used to activate both the Tibialis Anterior muscle but to also engage the peroneals so as to actively oppose and balance the leg', url: '265750711', icon: '695839420' },
            { session: 'body', body: 'legs', title: 'Tibialis Anterior 2 - Weighted Strength', description: 'Ankle weight used to increase resistance and activate both the Tibialis Anterior muscle whilst engaging the peroneals to actively oppose and balance the leg.', url: '265754699', icon: '695844346' },
            { session: 'body', body: 'legs', title: 'Tibialis Anterior 1 - Strengthening', description: '', url: '265754677', icon: '695844324' },
            { session: 'body', body: 'legs', title: 'Sinlge Leg Bridge', description: '', url: '265754651', icon: '695844316' },
            { session: 'body', body: 'legs', title: 'Quadricipes Strengthening', description: '', url: '265750699', icon: '695839426' },
            { session: 'body', body: 'legs', title: 'Pereonal Strengthening', description: '', url: '265754627', icon: '695844274' },
            { session: 'body', body: 'legs', title: 'Pereonal Strengthening 1', description: '', url: '265750683', icon: '695839438' },
            { session: 'body', body: 'hips', title: 'Hip Flexor Strengthening 1', description: '', url: '265750670', icon: '695839399' },
            { session: 'body', body: 'hips', title: 'Hip Flexor Strengthening (ankle weight)', description: '', url: '265750653', icon: '695839415' },
            { session: 'body', body: 'hips', title: 'Hip Flexor (Psoas Rectus Femoris) Strengthening', description: '', url: '265754592', icon: '695844210' },
            { session: 'body', body: 'hips', title: 'Hip Abductor Strengthening (TFL, Glute Med, Min)', description: '', url: '265754570', icon: '695844202' },
            { session: 'body', body: 'legs', title: 'Hamstring Strengthening 1', description: '', url: '265753369', icon: '695842774' },
            { session: 'body', body: 'legs', title: 'Hamstring Strengthening (Band)', description: '', url: '265753358', icon: '695842717' },
            { session: 'body', body: 'legs', title: 'Hamstring Strengthening (ankle weight)', description: '', url: '265750643', icon: '695839333' },
            { session: 'body', body: 'legs', title: 'Glute Strengthening', description: '', url: '265750628', icon: '695839310' },
            { session: 'body', body: 'legs', title: 'Glute Medius Strengthening 3 (Dynamic)', description: '', url: '265753337', icon: '695842712' },
            { session: 'body', body: 'legs', title: 'Glute Medius Strengthening 2', description: '', url: '265753326', icon: '695842690' },
            { session: 'body', body: 'legs', title: 'Glute Medius Strengthening 1', description: '', url: '265753314', icon: '695842710' },
            { session: 'body', body: 'legs', title: 'Glute Max Strengthening', description: '', url: '265754551', icon: '695839350' },
            { session: 'body', body: 'legs', title: 'Glute Max Strengthening', description: '', url: '265750614', icon: '695842667' },
            { session: 'body', body: 'legs', title: 'Glute Hamstring Strrengthening 5', description: '', url: '265753304', icon: '695842661' },
            { session: 'body', body: 'legs', title: 'Glute Hamstring Strrengthening 5', description: '', url: '265753304', icon: '695842635' },
            { session: 'body', body: 'legs', title: 'Glute Hamstring Strrengthening 6', description: '', url: '265753289', icon: '695842653' },
            { session: 'body', body: 'legs', title: 'Glute Hamstring Strrengthening 4', description: '', url: '265753278', icon: '695842637' },
            { session: 'body', body: 'legs', title: 'Glute Hamstring Strrengthening 3', description: '', url: '265753269', icon: '695842605' },
            { session: 'body', body: 'legs', title: 'Glute Hamstring Strrengthening 2', description: '', url: '265753254', icon: '695844122' },
            { session: 'body', body: 'legs', title: 'Glute Hamstring Strrengthening 1', description: '', url: '265753241', icon: '695839362' },
            { session: 'body', body: 'legs', title: 'Eccentric Hip Flexor Strengthening', description: '', url: '265754511', icon: '695839359' },
            { session: 'body', body: 'legs', title: 'Calf Strengthening', description: '', url: '265750603', icon: '695839293' },
            { session: 'body', body: 'legs', title: 'Adductor Strengthening 2', description: '', url: '265750594', icon: '695839287' },
            { session: 'body', body: 'legs', title: 'Adductor Strengthening 1', description: '', url: '265750583', icon: '695842594' },
            { session: 'body', body: 'legs', title: 'Adductor Strengthening 3', description: '', url: '265750554', icon: '695839287' },
            { session: 'body', body: 'legs', title: 'Adductor Strengthening', description: '', url: '265753228', icon: '695842594' },
            { session: 'body', body: 'neck', title: 'Neck Extensor Release', description: '', url: '271398507', icon: '702689155' },
            { session: 'body', body: 'head', title: 'Neck Extensor Release', description: '', url: '271398507', icon: '702689155' },
            { session: 'body', body: 'neck', title: 'Sub-Occipital Release', description: '', url: '271398929', icon: '702689553' },
            { session: 'body', body: 'head', title: 'Sub-Occipital Release', description: '', url: '271398929', icon: '702689553' },
            { session: 'body', body: 'arms', title: 'Bicep Curls', description: '', url: '276040315', icon: '708468885' },
            { session: 'body', body: 'arms', title: 'Brachialis Curls', description: '', url: '276040335', icon: '708468957' },
            { session: 'body', body: 'arms', title: 'Brachialis Dumbell Curl', description: '', url: '276040376', icon: '708468953' },
            { session: 'body', body: 'arms', title: '', description: 'Kneeling Tricep Extensions', url: '276040409', icon: '708469001' },
            { session: 'body', body: 'shoulders', title: 'Scapula Protraction/Retraction ', description: '', url: '276040383', icon: '708469063' },
            { session: 'body', body: 'torse', title: 'Modified Pushup Plus', description: '', url: '276040405', icon: '708468999' },
            { session: 'body', body: 'torse', title: 'Pushup', description: '', url: '276040459', icon: '708469077' },
            { session: 'body', body: 'arms', title: 'CoPushupre', description: '', url: '276040459', icon: '708469077' },
            { session: 'body', body: 'arms', title: 'Banded Tricep Extensions', description: '', url: '276040437', icon: '708469013' },
            { session: 'body', body: 'arms', title: 'Dumbell Tricep Extension', description: '', url: '276040438', icon: '708469105' }
        ]
    },
    manual: {
        body: [
            { key: 'head', value: 'Head' },
            { key: 'neck', value: 'Neck' },
            { key: 'shoulders', value: 'Shoulders' },
            { key: 'arms', value: 'Arms' },
            { key: 'forearm', value: 'Forearm' },
            { key: 'hands', value: 'Hands' },
            { key: 'hips', value: 'Hips' },
            { key: 'legs', value: 'Legs' },
            { key: 'feet', value: 'Feet' },
            { key: 'torse', value: 'Torso' },
        ],
        anatomy: [
            { key: 'temporalis', value: 'Temporalis' },
            { key: 'scm', value: 'SCM' },
            { key: 'biceps', value: 'Biceps' },
            { key: 'triceps', value: 'Triceps' },
            { key: 'deltoid', value: 'Deltoid' },
            { key: 'forearm_flexors', value: 'Forearm Flexors' },
            { key: 'forearm_extensors', value: 'Forearm Extensors' },
            { key: 'core_diaphragm', value: 'Core/Diaphragm' },
            { key: 'glutes', value: 'Glutes' },
            { key: 'hamstrings', value: 'Hamstrings' }
        ],
        exercises: [
            { session: 'body', body: 'arms', title: 'Foam Rolling', description: '', url: '276031759', icon: '708458109' },
            { session: 'body', body: 'hands', title: 'Foam Rolling', description: '', url: '276031720', icon: '708458056' },
            { session: 'body', body: 'hands', title: 'Lacrosse/Tennis Ball', description: '', url: '276031734', icon: '708458040' },
            { session: 'body', body: 'forearm', title: 'Yoga Block/Foam Roller', description: '', url: '276037415', icon: '708465031' },
            { session: 'body', body: 'forearm', title: 'Lacrosse/Tennis Ball', description: '', url: '276037504', icon: '708465125' },
            { session: 'body', body: 'forearm', title: 'Lacrosse/Tennis Ball', description: '', url: '276037497', icon: '708466059' },
            { session: 'body', body: 'neck', title: 'Neck Fascia Release', description: '', url: '276037563', icon: '708465205' },
            { session: 'body', body: 'neck', title: 'Sternocleidomastoid Release', description: '', url: '276037591', icon: '708465249' }
        ]
    }
};
/* harmony default export */ __webpack_exports__["a"] = (cats);
//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideolistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__videoplayer_videoplayer__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categories__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appoiments_appoiments__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the VideolistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VideolistPage = (function () {
    function VideolistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.form = {
            body: '',
            anatomy: ''
        };
        this.data = {};
        this.videos = [];
        this.data.origin = this.navParams.get('origin');
        this.data.type = this.navParams.get('type');
        this.data.param = this.navParams.get('param');
        this.bodyPart = __WEBPACK_IMPORTED_MODULE_3__categories__["a" /* default */][this.data.origin].body;
        this.anatomySelect = __WEBPACK_IMPORTED_MODULE_3__categories__["a" /* default */][this.data.origin].anatomy;
        this.form[this.data.type] = this.data.param;
    }
    VideolistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VideolistPage');
        this.loadContent();
    };
    VideolistPage.prototype.loadContent = function () {
        var _this = this;
        this.videos = __WEBPACK_IMPORTED_MODULE_3__categories__["a" /* default */][this.data.origin].exercises.filter(function (e) { return (e.session === _this.data.type && e[_this.data.type] === _this.data.param); });
    };
    VideolistPage.prototype.changeSelect = function (op) {
        var _this = this;
        this.videos = __WEBPACK_IMPORTED_MODULE_3__categories__["a" /* default */][this.data.origin].exercises.filter(function (e) { return (e.session === _this.data.type && e[_this.data.type] === _this.form[op]); });
    };
    VideolistPage.prototype.viewVideo = function (video, title) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__videoplayer_videoplayer__["a" /* VideoplayerPage */], {
            v: video,
            t: title
        });
    };
    VideolistPage.prototype.gotoBooking = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__appoiments_appoiments__["a" /* AppoimentsPage */]);
    };
    VideolistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-videolist',template:/*ion-inline-start:"/home/maikel/Workspace/lotus/src/pages/videolist/videolist.html"*/`<!--\n  Generated template for the VideolistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>\n      <span class="capitalize">{{data.origin}} : </span>\n      <span class="capitalize">{{data.type}} : </span>\n      <span class="capitalize">{{data.param}}</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="top20">\n    <form class="top40">\n      <div class="form-group" [hidden]="data.type === \'anatomy\'">\n        <label class="label-green">Select</label>\n        <select class="form-control top15" [(ngModel)]="form.body" name="body" (change)="changeSelect(\'body\')">\n          <option value="">-- Select --</option>\n          <option *ngFor = "let b of bodyPart" value="{{b.key}}">{{b.value}}</option>\n        </select>\n      </div>\n      <div class="form-group" [hidden]="data.type === \'body\'">\n        <label class="label-green">Select</label>\n        <select class="form-control top15" [(ngModel)]="form.anatomy" name="anatomy" (change)="changeSelect(\'anatomy\')">\n          <option value="">-- Select --</option>\n          <option *ngFor = "let a of anatomySelect" value="{{a.key}}">{{a.value}}</option>\n        </select>\n      </div>\n    </form>\n  </div>\n  <div class="top20" *ngIf="videos.length > 0">\n    <div class="top20" *ngFor = "let v of videos">\n      <div class="content-container" (click)="viewVideo(v.url, v.title)">\n        <div class="play">\n          <ion-icon name="md-arrow-dropright-circle"></ion-icon>\n        </div>\n        <img src="{{\'https://i.vimeocdn.com/video/\'+v.icon}}" />\n        <div class="videotitle">{{v.title}}</div>\n          <!-- <iframe [src]=\'sanitizeURL(v.url)\' width="100%" height="200" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> -->\n      </div>\n    </div>\n    <div class="top20"></div>\n  </div>\n  <div class="top20 center" *ngIf = "videos.length === 0">\n    No Video for this catergory\n  </div>\n  <ion-fab center bottom (click)="gotoBooking()">\n    <button ion-fab color="secondary"><ion-icon name="calendar"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n`/*ion-inline-end:"/home/maikel/Workspace/lotus/src/pages/videolist/videolist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], VideolistPage);
    return VideolistPage;
}());

//# sourceMappingURL=videolist.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodylandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__general_general__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the BodylandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BodylandingPage = (function () {
    function BodylandingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imgActive = 'male';
    }
    BodylandingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BodylandingPage');
    };
    BodylandingPage.prototype.goTo = function (param) {
        console.log(param);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__general_general__["a" /* GeneralPage */], {
            cat: param
        });
    };
    BodylandingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-bodylanding',template:/*ion-inline-start:"/home/maikel/Workspace/lotus/src/pages/bodylanding/bodylanding.html"*/`<!--\n  Generated template for the BodylandingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="secondary" hideBackButton="true">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Body</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding> \n  <div class="top20 c">\n    <span (click)="imgActive = \'male\'" [ngClass]="{\'no-active\': imgActive === \'female\', \'active\': imgActive === \'male\'}">Male</span> / <span (click)="imgActive = \'female\'" [ngClass]="{\'no-active\': imgActive === \'male\', \'active\': imgActive === \'female\'}">Female</span>\n   </div>\n   <div *ngIf="imgActive === \'male\'" class="c top20">\n      <img src="assets/imgs/male.png" usemap="#image-m-map">\n\n      <map name="image-m-map">\n          <area target="" alt="Head" title="Head" (click)="goTo(\'head\')" coords="112,13,96,17,89,28,89,48,95,64,107,76,117,76,126,68,129,59,131,44,132,29,122,18,116,17" shape="poly">\n          <area target="" alt="Neck" title="Neck" (click)="goTo(\'neck\')" coords="98,68,96,84,77,93,87,100,109,100,111,107,117,100,142,98,151,93,129,86,129,64,124,73,116,78,108,78" shape="poly">\n          <area target="" alt="Arm" title="Arm" (click)="goTo(\'arms\')" coords="75,93,60,99,52,106,48,118,48,132,43,160,38,180,36,197,35,214,34,228,32,239,46,244,53,225,63,202,61,185,69,152,68,123,77,107,84,100" shape="poly">\n          <area target="" alt="Arm" title="Arm" (click)="goTo(\'arms\')" coords="143,98,153,109,158,119,155,138,156,153,160,168,161,182,162,196,173,219,180,231,182,242,198,237,195,228,191,202,187,183,181,164,181,149,175,134,178,116,169,98,155,93" shape="poly">\n          <area target="" alt="Hand" title="Hand" (click)="goTo(\'hands\')" coords="31,240,12,262,30,287,47,282,47,260,47,245" shape="poly">\n          <area target="" alt="Hand" title="Hand" (click)="goTo(\'hands\')" coords="183,244,183,264,187,283,202,290,208,284,215,256,211,247,200,239" shape="poly">\n          <area target="" alt="Torse" title="Torse" (click)="goTo(\'torse\')" coords="85,102,71,122,71,153,76,176,77,190,75,204,79,211,103,221,120,221,140,216,150,208,148,196,147,181,156,159,153,142,156,128,154,111,143,100,124,101,114,107,109,102" shape="poly">\n          <area target="" alt="Hip" title="Hip" (click)="goTo(\'hips\')" coords="78,212,73,221,112,263,154,225,149,211,130,222,100,221" shape="poly">\n          <area target="" alt="Leg" title="Leg" (click)="goTo(\'legs\')" coords="74,225,68,271,68,289,68,304,74,326,79,340,80,359,80,378,79,393,89,452,107,452,105,441,109,410,110,392,106,369,107,361,108,338,111,304,111,279,111,264" shape="poly">\n          <area target="" alt="Leg" title="Leg" (click)="goTo(\'legs\')" coords="115,262,152,226,156,280,152,319,146,342,144,361,146,395,133,454,120,452,115,403,115,390,116,310,114,288,115,271,115,267" shape="poly">\n          <area target="" alt="Feet" title="Feet" (click)="goTo(\'feet\')" coords="90,455,106,455,108,468,105,483,83,483,81,477,90,469" shape="poly">\n          <area target="" alt="Feet" title="Feet" (click)="goTo(\'feet\')" coords="120,455,137,455,136,468,147,481,120,483,118,468" shape="poly">\n      </map>\n   </div>\n\n   <div *ngIf="imgActive === \'female\'" class="top20 c">\n      <img src="assets/imgs/female.png" usemap="#image-f-map">\n\n      <map name="image-f-map">\n          <area target="" alt="Head" title="Head" (click)="goTo(\'head\')" coords="115,26,96,37,87,54,87,80,92,94,101,89,103,78,108,82,119,86,127,82,133,79,134,89,141,94,147,87,145,73,142,42,127,31" shape="poly">\n          <area target="" alt="Neck" title="Neck" (click)="goTo(\'neck\')" coords="105,82,105,92,86,97,101,105,112,107,118,112,124,108,136,106,141,102,150,98,134,93,133,81,124,87,115,87" shape="poly">\n          <area target="" alt="Arm" title="Arm" (click)="goTo(\'arms\')" coords="84,100,72,105,64,122,65,133,57,164,47,186,45,197,36,237,45,243,51,234,62,212,67,193,80,156,83,122,92,105" shape="poly">\n          <area target="" alt="Arm" title="Arm" (click)="goTo(\'arms\')" coords="142,107,153,112,155,121,153,133,158,144,165,169,171,199,192,241,203,238,193,196,175,140,169,113,157,101" shape="poly">\n          <area target="" alt="Torse" title="Torse" (click)="goTo(\'torse\')" coords="99,107,90,110,84,123,84,135,82,155,85,162,87,198,82,213,103,224,120,224,140,220,155,211,149,195,151,180,154,160,157,152,152,134,153,122,149,113,139,106,126,109,119,115,110,108" shape="poly">\n          <area target="" alt="Hip" title="Hip" (click)="goTo(\'hips\')" coords="81,216,79,226,115,261,122,263,158,226,155,214,145,220,130,225,110,227" shape="poly">\n          <area target="" alt="Leg" title="Leg" (click)="goTo(\'legs\')" coords="78,229,71,263,87,353,88,365,84,379,97,454,109,454,116,399,113,371,115,362,116,332,112,297,117,277,114,263" shape="poly">\n          <area target="" alt="Leg" title="Leg" (click)="goTo(\'legs\')" coords="124,264,160,228,167,260,151,354,153,371,153,394,142,454,127,453,123,393,126,366,124,335" shape="poly">\n          <area target="" alt="Feet" title="Feet" (click)="goTo(\'feet\')" coords="96,456,96,469,91,482,110,486,113,478,111,471,112,465,112,457" shape="poly">\n          <area target="" alt="Feet" title="Feet" (click)="goTo(\'feet\')" coords="126,455,143,456,147,483,124,483" shape="poly">\n          <area target="" alt="Hand" title="Hand" (click)="goTo(\'hands\')" coords="33,239,47,245,41,276,25,283,14,255,23,246" shape="poly">\n          <area target="" alt="Hand" title="Hand" (click)="goTo(\'hands\')" coords="191,244,204,239,225,253,212,284,195,275" shape="poly">\n      </map>\n   </div>\n</ion-content>\n`/*ion-inline-end:"/home/maikel/Workspace/lotus/src/pages/bodylanding/bodylanding.html"*/,
            styleUrls: ['assets/body/illustration-style.css']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], BodylandingPage);
    return BodylandingPage;
}());

//# sourceMappingURL=bodylanding.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__videoplayer_videoplayer__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appoiments_appoiments__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categories__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the GeneralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GeneralPage = (function () {
    function GeneralPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.form = {
            general: '',
            subcategory: '',
            exercises: '',
        };
        this.cat = '';
        this.gi_data = __WEBPACK_IMPORTED_MODULE_4__categories__["a" /* default */].general_imbalances;
        this.nodes = this.gi_data.exercises;
        this.cat = this.navParams.get('cat');
        this.form.general = this.cat;
        this.filterStatus = {
            subcategory: false,
            exercises: false,
        };
        this.gi_data = __WEBPACK_IMPORTED_MODULE_4__categories__["a" /* default */].general_imbalances;
        this.filteredNodes = [];
        this.exercisesNodes = [];
        this.video = '';
        this.filterStatus.subcategory = true;
        this.filterStatus.exercises = false;
        this.subcategory = [];
        this.subcategory = this.gi_data.subcategory.filter(function (e) { return e.body === _this.form.general; });
        this.filterStatus.subcategory = true;
        this.filteredNodes = this.nodes.filter(function (e) { return e.body === _this.form.general; });
        this.exercisesNodes = this.filteredNodes;
    }
    GeneralPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GeneralPage');
    };
    GeneralPage.prototype.changeGeneral = function () {
        var _this = this;
        this.video = '';
        this.exercisesNodes = [];
        this.filteredNodes = [];
        this.filterStatus.subcategory = true;
        this.filterStatus.exercises = false;
        this.subcategory = [];
        this.subcategory = this.gi_data.subcategory.filter(function (e) { return e.body === _this.form.general; });
        this.filterStatus.subcategory = true;
        this.filteredNodes = this.nodes.filter(function (e) { return e.body === _this.form.general; });
        this.exercisesNodes = this.filteredNodes;
    };
    GeneralPage.prototype.changeSubcategory = function () {
        var _this = this;
        this.video = '';
        this.filterStatus.exercises = true;
        if (this.filteredNodes.length > 0) {
            this.exercisesNodes = this.filteredNodes.filter(function (e) { return e.subcategory === _this.form.subcategory; });
            console.log(this.exercisesNodes);
        }
    };
    GeneralPage.prototype.selectExercises = function () {
        var video = this.form.exercises.split('___');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__videoplayer_videoplayer__["a" /* VideoplayerPage */], {
            v: video[0],
            t: video[1]
        });
    };
    GeneralPage.prototype.gotoBooking = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__appoiments_appoiments__["a" /* AppoimentsPage */]);
    };
    GeneralPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-general',template:/*ion-inline-start:"/home/maikel/Workspace/lotus/src/pages/general/general.html"*/`<!--\n  Generated template for the GeneralPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="secondary" hideBackButton="true">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Gerenal Imbalances</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <form class="top50">  \n        <div class="form-group">\n          <label class="label-green">General Imbalances</label>\n          <select class="form-control top15" [(ngModel)]="form.general" name="general" (change)="changeGeneral()">\n            <option value="">-- Select --</option>\n            <option *ngFor = "let b of gi_data.body" value="{{b.key}}">{{b.value}}</option>\n          </select>\n        </div>\n        <div class="form-group top30" [hidden]="form.general == \'\'">\n            <label class="label-green">Subcategory</label>\n            <select class="form-control top15" [(ngModel)]="form.subcategory" name="subcategory" (change)="changeSubcategory()">\n              <option value="">-- Select --</option>\n              <option *ngFor = "let s of subcategory" value="{{s.subcategory}}">{{s.subcategory}}</option>\n            </select>\n        </div>\n        <div *ngIf="exercisesNodes.length == 0 && filterStatus.exercises" class="ac">\n          No exercises for this category\n        </div>\n        <div class="form-group top30" [hidden]="exercisesNodes.length === 0">\n            <label class="label-green">Exercises</label>\n            <select class="form-control top15" [(ngModel)]="form.exercises" name="exercises" (change)="selectExercises()">\n              <option value="">-- Select --</option>\n              <option *ngFor = "let ex of exercisesNodes" value="{{ex.url + \'___\' + ex.title}}">{{ex.title}}</option>\n            </select>\n        </div>\n    </form>\n\n    <ion-fab center bottom (click)="gotoBooking()">\n      <button ion-fab color="secondary"><ion-icon name="calendar"></ion-icon></button>\n    </ion-fab>\n    \n</ion-content>\n`/*ion-inline-end:"/home/maikel/Workspace/lotus/src/pages/general/general.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], GeneralPage);
    return GeneralPage;
}());

//# sourceMappingURL=general.js.map

/***/ })

},[305]);
//# sourceMappingURL=main.js.map