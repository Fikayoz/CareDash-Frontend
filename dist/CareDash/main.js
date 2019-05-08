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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-div\">\n<!--Top-->\n<div class=\"row\">\n  <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-5\">\n  <a href=\"caredash.com\">\n    <img src=\"https://assets.caredash.com/assets/caredash-logo-official-a122691e52b2f17c2083929963e1f288de8bf447e9de424017dc35f32b11d5fb.svg\"\n    class=\"logo\">\n  </a>\n  </div>\n  <div class=\"col-lg-5 col-md-7 col-sm-8 col-xs-7\">\n    <nav class=\"top-navs\">\n        <ul class=\"nav\">\n\n          <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n            <div class=\"btn-group\" dropdown>\n              <button id=\"button-autoclose1\" dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\"\n                      aria-controls=\"dropdown-autoclose1\">\n                Menu Item 1\n              </button>\n              <ul id=\"dropdown-autoclose1\" *dropdownMenu class=\"dropdown-menu\"\n                  role=\"menu\" aria-labelledby=\"button-autoclose1\">\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action One</a></li>\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action One</a></li>\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Third Action One</a></li>\n              </ul>\n            </div>\n          </div>\n\n\n          <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n              <div class=\"btn-group\" dropdown>\n                <button id=\"button-autoclose2\" dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\"\n                        aria-controls=\"dropdown-autoclose2\">\n                Menu Item 2\n                </button>\n                <ul id=\"dropdown-autoclose2\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-autoclose2\">\n                  <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action Two</a></li>\n                  <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action Two</a></li>\n                  <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Third Action Two</a></li>\n                </ul>\n              </div>\n            </div>\n\n            <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n              <div class=\"btn-group\" dropdown [autoClose]=\"false\">\n                <button id=\"button-autoclose2\" dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\"\n                        aria-controls=\"dropdown-autoclose2\">\n                Menu Item 3\n                </button>\n                <ul id=\"dropdown-autoclose2\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-autoclose2\">\n                  <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action Three</a></li>\n                  <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action Three</a></li>\n                  <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Third Action Three</a></li>\n                </ul>\n              </div>\n            </div>\n\n        </ul>\n    </nav>\n  </div>\n</div>\n\n<!--====================================================================================================-->\n<!-- Mid -->\n\n<div class=\"midsection\">\n  <div class=\"row\">\n    <div class=\"col-lg-7 col-md-12 col-sm-12 col-xs-12\">\n      <img src=\"https://st3.depositphotos.com/9999814/18280/i/1600/depositphotos_182800376-stock-photo-doctor-on-medical-icons-background.jpg\"\n      class=\"midsection-image\">\n    </div>\n\n    <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12 signup-forms\">\n      <h4 class=\"section-header\">Sign Up with CareDash to Edit your Provider Profile</h4>\n\n      <form>\n          <div class=\"form-group\">\n            <label for=\"InputFirstName\">First Name</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"InputFirstName\"\n            placeholder=\"Enter First Name\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"InputLastName\">Last Name</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"InputLastName\"\n            placeholder=\"Enter Last Name\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"InputEmail\">Email address</label>\n            <input\n            type=\"email\"\n            class=\"form-control\"\n            id=\"InputEmail\"\n            placeholder=\"Enter email\">\n            <small id=\"emailHelp\" class=\"form-text text-muted\">You're email's safe with us!</small>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"Password\">Password</label>\n            <input\n            type=\"password\"\n            class=\"form-control\"\n            id=\"Password\"\n            placeholder=\"Enter Password\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"PasswordConfirm\">Confirm Password</label>\n            <input\n            type=\"password\"\n            class=\"form-control\"\n            id=\"PasswordConfirm\"\n            placeholder=\"Confirm Password\">\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary signup-buttons text-center\">Sign Up</button>\n          <button type=\"submit\" class=\"btn btn-primary signup-buttons text-center\">Log In</button>\n        </form>\n\n    </div>\n\n  </div>\n</div>\n\n<div class=\"row center-text\">\n  <h2 class=\"section-header\">Reasons to Sign Up as a provider on CareDash </h2>\n</div>\n\n<!--====================================================================================================-->\n<!-- Headlines -->\n<div class=\"row\">\n\n  <div class=\"col-lg-4 col-md-6 col-sm-12 col-xs-12\">\n    <img src=\"https://media.istockphoto.com/photos/technology-innovation-and-medicine-concept-doctor-and-medical-network-picture-id914789708?k=6&m=914789708&s=612x612&w=0&h=PNhm1VPwC4XvCAXW6N0AAqOaVgdO55aC4DCJK7EckG8=\"\n    class=\"headline-image\">\n    <h2 class=\"section-header\">Headline</h2>\n    <span>{{lorem}}</span>\n    <br>\n    <a class=\"btn btn-secondary\" href=\"#\"> Learn More </a>\n  </div>\n\n  <div class=\"col-lg-4 col-md-6 col-sm-12 col-xs-12\">\n      <img src=\"https://media.istockphoto.com/photos/technology-innovation-and-medicine-concept-doctor-and-medical-network-picture-id914789708?k=6&m=914789708&s=612x612&w=0&h=PNhm1VPwC4XvCAXW6N0AAqOaVgdO55aC4DCJK7EckG8=\"\n      class=\"headline-image\">\n      <h2 class=\"section-header\">Headline</h2>\n      <span>{{lorem}}</span>\n      <br>\n      <a class=\"btn btn-secondary\" href=\"#\"> Learn More </a>\n  </div>\n\n  <div class=\"col-lg-4 offset-lg-0 col-md-6 offset-md-3 col-sm-12 col-xs-12\">\n      <img src=\"https://media.istockphoto.com/photos/technology-innovation-and-medicine-concept-doctor-and-medical-network-picture-id914789708?k=6&m=914789708&s=612x612&w=0&h=PNhm1VPwC4XvCAXW6N0AAqOaVgdO55aC4DCJK7EckG8=\"\n      class=\"headline-image\">\n      <h2 class=\"section-header\">Headline</h2>\n      <span>{{lorem}}</span>\n      <br>\n      <a class=\"btn btn-secondary\" href=\"#\"> Learn More </a>\n  </div>\n\n</div>\n\n<!--====================================================================================================-->\n<!-- footer -->\n\n<div class=\"row footer-border\"></div>\n\n  <div class=\"col-lg-9 offset-lg-1 col-md-12 col-sm-12 col-xs-12 \">\n\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n        <h4>CareDash</h4>\n        <ul class=\"no-bullets\">\n          <li><a href=\"#\">Home</a></li>\n          <li><a href=\"#\">About</a></li>\n          <li><a href=\"#\">Contact</a></li>\n          <li><a href=\"#\">Write a Review</a></li>\n        </ul>\n      </div>\n\n      <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n        <h4>Specialists</h4>\n        <ul class=\"no-bullets\">\n          <li><a href=\"#\">Primary Care Physicians</a></li>\n          <li><a href=\"#\">Pediatricians</a></li>\n          <li><a href=\"#\">Optometrists</a></li>\n          <li><a href=\"#\">Dentists</a></li>\n        </ul>\n      </div>\n\n      <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n        <h4>Follow Us</h4>\n        <ul class=\"user-button-list no-bullets\">\n          <li><a class=\"fa fa-user\" href=\"#\">F</a></li>\n          <li><a class=\"fa fa-user\" href=\"#\">T</a></li>\n          <li><a class=\"fa fa-user\" href=\"#\"> I</a></li>\n          <li><a class=\"fa fa-user\" href=\"#\">P</a></li>\n        </ul>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body-div {\n  padding: 18px; }\n\n.logo {\n  width: 100%;\n  height: 100%;\n  margin-top: -25%;\n  margin-bottom: -20%; }\n\n.top-navs {\n  position: relative;\n  bottom: 10%; }\n\nul.nav li {\n  padding-left: 10px;\n  padding-right: 10px; }\n\n.headline-image {\n  width: 100%;\n  height: 300px;\n  padding-top: 10px; }\n\n.midsection-image {\n  width: 100%;\n  height: 100%;\n  padding: 10px 0px; }\n\n.signup-forms {\n  width: 100%;\n  height: 100%;\n  border: 2px solid Black;\n  padding: 10px 10px;\n  outline-offset: -20px;\n  box-sizing: border-box; }\n\n.signup-buttons {\n  text-align: center;\n  margin-right: 40px;\n  margin-left: 70px; }\n\n.midsection {\n  height: auto; }\n\n.section-header {\n  padding: 20px 10px;\n  padding-top: 10px;\n  text-align: center;\n  margin: 0 auto; }\n\n.center-text {\n  text-align: center; }\n\n.footer-border {\n  border-bottom: 1px solid gray;\n  padding: 20px 0px;\n  box-sizing: border-box; }\n\n.no-bullets {\n  list-style: none;\n  padding-left: 0px; }\n\n.user-button-list li {\n  width: 30px;\n  height: 30px;\n  padding: 6px 0px;\n  text-align: center;\n  display: inline-block;\n  font-size: 12px;\n  border-radius: 15px;\n  border: 1px solid Black;\n  color: black; }\n\n.col-xs-5 {\n  width: 41.66%; }\n\n.col-xs-7 {\n  width: 58.33%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxGaWtheW9cXERlc2t0b3BcXENhcmVEYXNoXFxDYXJlRGFzaC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYSxFQUNkOztBQUVEO0VBQ0UsWUFBVztFQUNYLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsb0JBQW1CLEVBR3BCOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLFlBQVcsRUFDWjs7QUFFRDtFQUVJLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFDcEI7O0FBR0g7RUFDRSxZQUFXO0VBQ1gsY0FBYTtFQUNiLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLFlBQVc7RUFDWCxhQUFZO0VBQ1osa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0UsWUFBVztFQUNYLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsbUJBQWtCO0VBQ2xCLHNCQUFxQjtFQUNyQix1QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLGtCQUFpQixFQUNsQjs7QUFFRDtFQUVFLGFBQVksRUFDYjs7QUFFRDtFQUNFLG1CQUFpQjtFQUNqQixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLGVBQWMsRUFDZjs7QUFFRDtFQUNFLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLDhCQUE2QjtFQUM3QixrQkFBaUI7RUFDakIsdUJBQXNCLEVBQ3ZCOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLGtCQUFpQixFQUNsQjs7QUFFRDtFQUVJLFlBQVc7RUFDWCxhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixzQkFBcUI7RUFDckIsZ0JBQWU7RUFDZixvQkFBbUI7RUFDbkIsd0JBQXVCO0VBQ3ZCLGFBQVksRUFDYjs7QUFJSDtFQUNFLGNBQWEsRUFDZDs7QUFDRDtFQUNFLGNBQWEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5LWRpdntcclxuICBwYWRkaW5nOiAxOHB4O1xyXG59XHJcblxyXG4ubG9nb3tcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogLTI1JTtcclxuICBtYXJnaW4tYm90dG9tOiAtMjAlO1xyXG4gIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvLyByaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbi50b3AtbmF2c3tcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm90dG9tOiAxMCU7XHJcbn1cclxuXHJcbnVsLm5hdntcclxuICBsaXtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaGVhZGxpbmUtaW1hZ2V7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLm1pZHNlY3Rpb24taW1hZ2V7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHggMHB4O1xyXG59XHJcblxyXG4uc2lnbnVwLWZvcm1ze1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBCbGFjaztcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgb3V0bGluZS1vZmZzZXQ6IC0yMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5zaWdudXAtYnV0dG9uc3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xyXG59XHJcblxyXG4ubWlkc2VjdGlvbntcclxuICAvLyBoZWlnaHQ6IDcwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLnNlY3Rpb24taGVhZGVye1xyXG4gIHBhZGRpbmc6MjBweCAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmNlbnRlci10ZXh0e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZvb3Rlci1ib3JkZXJ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XHJcbiAgcGFkZGluZzogMjBweCAwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLm5vLWJ1bGxldHN7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLnVzZXItYnV0dG9uLWxpc3Qge1xyXG4gIGxpe1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIEJsYWNrO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxufVxyXG5cclxuLy8gSnVyeSByaWdnaW5nIHNvbWUgY3NzIGludG8gcGxhY2VcclxuLmNvbC14cy01e1xyXG4gIHdpZHRoOiA0MS42NiU7XHJcbn1cclxuLmNvbC14cy03e1xyXG4gIHdpZHRoOiA1OC4zMyU7XHJcbn1cclxuIl19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CareDash';
        this.lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Fikayo\Desktop\CareDash\CareDash\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map