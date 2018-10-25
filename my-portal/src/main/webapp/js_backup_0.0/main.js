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

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
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

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container\n    class=\"example-container\" (backdropClick)=\"close('backdrop')\">\n  <mat-sidenav #sidenav (keydown.escape)=\"sidenav.close()\" disableClose>\n    <!-- <p><button mat-button (click)=\"close('toggle button')\">Toggle</button></p> -->\n    <p *ngFor = \"let menu of navMenus\">\n      <button mat-button routerLink={{menu.path}} (click) = \"sidenav.close()\">{{menu.name}}</button>   \n    </p>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <p>\n      <button mat-icon-button (click)=\"sidenav.open()\">\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">home</mat-icon>\n      </button>\n    </p>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n<!-- <nav>\n  <a routerLink=\"/dashboard\">Dashboard</a>\n  <a routerLink=\"/admin\">Admin</a>\n</nav> -->\n\n"

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
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'eps-dashboard';
        this.reason = '';
        this.navMenus = [
            { "name": "Dashboard", "path": "dashboard" },
            { "name": "Admin", "path": "admin" }
        ];
    }
    AppComponent.prototype.close = function (reason) {
        this.reason = reason;
        this.sidenav.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"])
    ], AppComponent.prototype, "sidenav", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dash_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! .//dash-routing.module */ "./src/app/dash-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _snackhelper_snackhelper_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./snackhelper/snackhelper.component */ "./src/app/snackhelper/snackhelper.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_11__["AdminComponent"],
                _snackhelper_snackhelper_component__WEBPACK_IMPORTED_MODULE_12__["SnackhelperComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__["CdkTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTreeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _dash_routing_module__WEBPACK_IMPORTED_MODULE_9__["DashRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            entryComponents: [_snackhelper_snackhelper_component__WEBPACK_IMPORTED_MODULE_12__["SnackhelperComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dash-routing.module.ts":
/*!****************************************!*\
  !*** ./src/app/dash-routing.module.ts ***!
  \****************************************/
/*! exports provided: DashRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashRoutingModule", function() { return DashRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"] },
];
var DashRoutingModule = /** @class */ (function () {
    function DashRoutingModule() {
    }
    DashRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            declarations: [],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], DashRoutingModule);
    return DashRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-card {\r\n    max-width: 800px;\r\n    min-width: 50px;\r\n    margin-left: 50px;\r\n    margin-top: 30px;\r\n    width : 100%;\r\n  }\r\n  \r\n  .expansion-margin {\r\n    max-width: 1000px;\r\n    margin-left: 150px;\r\n    margin-top: 30px;\r\n  }\r\n  \r\n  .example-section {\r\n    display: flex;\r\n    align-content: center;\r\n    align-items: center;\r\n    height: 60px;\r\n  }\r\n  \r\n  .example-margin {\r\n    /* margin: 0 10px; */\r\n    margin-top: 20px;\r\n    margin : 5px 10px;\r\n  }\r\n  \r\n  .mat-radio-button ~ .mat-radio-button {\r\n    padding: 36px;\r\n  }"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dash\">\n  <mat-tab-group>\n    <mat-tab label=\"Patient\">\n\n      <div class=\"expansion-margin\">\n\n        <!-- Accordian expansion panel -->\n        <mat-accordion>\n          <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Basic data\n              </mat-panel-title>\n              <mat-panel-description>\n                Section for name, date of birth, weight, blood group\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n\n            <mat-card class=\"example-card\">\n              <mat-card-content>\n                <table>\n                  <tr>\n                    <td>\n                      <!-- First Name -->\n                      <div class=\"example-container example-margin\">\n                        <mat-form-field hintLabel=\"Max {{config.first_name_len}} characters\">\n                          <input matInput maxlength=20 placeholder=\"First name\" \n                            [(ngModel)]=\"patient.firstName\" (keyup)='onKeyUp($event)'\n                            required>\n                          <mat-hint align=\"end\">{{patient.firstName?.length || 0}}/{{config.first_name_len}}</mat-hint>\n                        </mat-form-field>\n                      </div>\n                    </td>\n                    <td>\n                      <!-- Last Name -->\n                      <div class=\"example-container example-margin\">\n                        <mat-form-field hintLabel=\"Max {{config.last_name_len}} characters\">\n                          <input matInput maxlength=15 placeholder=\"Last name\" \n                            [(ngModel)]=\"patient.lastName\" required>\n                          <mat-hint align=\"end\">{{patient.lastName?.length || 0}}/{{config.last_name_len}}</mat-hint>\n                        </mat-form-field>\n                      </div>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <span>\n                        Date of birth :\n                      </span>\n                    </td>\n                    <td>\n                      <!-- DOB -->\n                      <div class=\"example-margin\">\n                        <mat-form-field>\n                          <input matInput [matDatepicker]=\"picker\" placeholder=\"Select from calender\" (dateInput)=\"addEvent('input', $event)\"\n                            (dateChange)=\"addEvent('change', $event)\" disabled>\n                          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                          <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n                        </mat-form-field>\n                      </div>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <span>Blood Group : </span>\n                    </td>\n                    <td>\n                      <div class=\"example-margin\">\n                        <!-- Blood group -->\n                        <mat-select placeholder=\"Blood group\" [(ngModel)]=\"patient.bloodGroup\" name=\"bloodGroup\">\n                          <mat-option *ngFor=\"let bg of bloodGroups\" [value]=\"bg.value\">\n                            {{bg.viewValue}}\n                          </mat-option>\n                        </mat-select>\n                      </div>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Weight :\n                    </td>\n                    <td>\n                      <!-- Weight -->\n                      <div class=\"example-margin\">\n                        <mat-form-field hintLabel=\"Enter in digits\">\n                          <input matInput maxlength=3 placeholder=\"Weight\" \n                            [(ngModel)]=\"patient.weight\" required>\n                          <mat-hint align=\"end\">{{patient.weight?.length || 0}}/3</mat-hint>\n                        </mat-form-field>\n                      </div>\n                    </td>\n                  </tr>\n                </table>\n              </mat-card-content>\n            </mat-card>\n            <mat-action-row>\n              <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n            </mat-action-row>\n          </mat-expansion-panel>\n\n          <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Contact data\n              </mat-panel-title>\n              <mat-panel-description>\n                Section for phone number, email and address\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n            <mat-card class=\"example-card\">\n              <mat-card-content>\n                <table>\n                  <tr>\n                    <td>\n                      <!-- Contact Number -->\n                      <div class=\"example-container example-margin\">\n                        <mat-form-field hintLabel=\"Enter in digits\" class=\"example-full-width\">\n                          <span matPrefix>+91 &nbsp;</span>\n                          <input type=\"tel\" matInput placeholder=\"Contact number\"\n                            [(ngModel)]=\"patient.contactNo1\">\n                          <mat-icon matSuffix>contact_phone</mat-icon>\n                        </mat-form-field>\n                      </div>\n                    </td>\n                    <td>\n                      <!-- Email address -->\n                      <div class=\"example-container example-margin\">\n                        <mat-form-field hintLabel=\"Optional email\">\n                          <input matInput maxlength=30 placeholder=\"Enter email\" \n                            type=\"email\" [(ngModel)]=\"patient.email\">\n                          <mat-icon matSuffix>contact_mail</mat-icon>\n                          <mat-hint align=\"end\">{{patient.email?.length || 0}}/30</mat-hint>\n                        </mat-form-field>\n                      </div>\n                    </td>\n                  </tr>\n                </table>\n\n                <!-- Address 1 -->\n                <div class=\"example-container example-margin\">\n                  <mat-form-field class=\"example-full-width\">\n                    <textarea matInput placeholder=\"Address1\" \n                      [(ngModel)]=\"patient.address1\" required></textarea>\n                    <button mat-button *ngIf=\"patient.address1\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"patient.address1=''\">\n                      <mat-icon>close</mat-icon>\n                    </button>\n                  </mat-form-field>\n                </div>\n\n                <!-- Address 2 -->\n                <div class=\"example-container example-margin\">\n                  <mat-form-field class=\"example-full-width\">\n                    <textarea matInput placeholder=\"Address2\" \n                      [(ngModel)]=\"patient.address2\" ></textarea>\n                    <button mat-button *ngIf=\"patient.address2\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"patient.address2=''\">\n                      <mat-icon>close</mat-icon>\n                    </button>\n                  </mat-form-field>\n                </div>\n              </mat-card-content>\n            </mat-card>\n            <mat-action-row>\n              <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n              <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n            </mat-action-row>\n          </mat-expansion-panel>\n\n          <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Configuration data\n              </mat-panel-title>\n              <mat-panel-description>\n                Optional data\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n            <span>Discount</span>\n            <table>\n              <tr>\n                <td>\n                  <mat-radio-group class=\"example-margin\" [(ngModel)]=\"patient.discountType\">\n                    <mat-radio-button value=\"percentage\">Percent</mat-radio-button>\n                    <mat-radio-button value=\"flat\">Flat</mat-radio-button>\n                  </mat-radio-group>\n                </td>\n                <td>\n                  <div class=\"example-margin\">\n                    <mat-form-field hintLabel=\"Enter in digits\">\n                      <input matInput maxlength=\"5\" placeholder=\"Discount\" \n                        [(ngModel)]=\"patient.discount\">\n                      <mat-hint align=\"end\">{{patient.discount?.length || 0}}/5</mat-hint>\n                    </mat-form-field>\n                  </div>\n                </td>\n              </tr>\n            </table>\n            <mat-action-row>\n              <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n              <button mat-button color=\"primary\" (click)=\"submitPatient()\">Add Patient</button>\n            </mat-action-row>\n          </mat-expansion-panel>\n\n\n        </mat-accordion>\n\n      </div>\n    </mat-tab>\n    <mat-tab label=\"Prescription\">\n      <div class=\"example-margin\">\n        <form class=\"example-form\">\n          <mat-form-field class=\"example-full-width\">\n            <input type=\"text\" matInput placeholder=\"Pick one\" aria-label=\"Number\" [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n            <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n              <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n                {{option}}\n              </mat-option>\n            </mat-autocomplete>\n          </mat-form-field>\n        </form>\n        <form class=\"example-form\">\n          <mat-form-field class=\"example-full-width\">\n            <input type=\"text\" matInput placeholder=\"Pick one2\" aria-label=\"Number\" [formControl]=\"myControl2\" [matAutocomplete]=\"auto2\">\n            <mat-autocomplete autoActiveFirstOption #auto2=\"matAutocomplete\">\n              <mat-option *ngFor=\"let option2 of filteredOptions2 | async\" [value]=\"option2\">\n                {{option2}}\n              </mat-option>\n            </mat-autocomplete>\n          </mat-form-field>\n        </form>\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var _models_patient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/patient */ "./src/app/models/patient.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _snackhelper_snackhelper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../snackhelper/snackhelper.component */ "./src/app/snackhelper/snackhelper.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(patientService, snackBar) {
        this.patientService = patientService;
        this.snackBar = snackBar;
        this.config = {
            "first_name_len": 20,
            "last_name_len": 15
        };
        this.bloodGroups = [
            { value: 'A_POSITIVE', viewValue: 'A+' },
            { value: 'A_NEGETIVE', viewValue: 'A-' },
            { value: 'B_POSITIVE', viewValue: 'B+' },
            { value: 'B_NEGETIVE', viewValue: 'B-' },
            { value: 'AB_POSITIVE', viewValue: 'AB+' },
            { value: 'AB_NEGETIVE', viewValue: 'AB-' },
            { value: 'O_POSITIVE', viewValue: 'O+' },
            { value: 'O_NEGETIVE', viewValue: 'O-' },
        ];
        this.patientEmailControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
        ]);
        //Accordian expansion bar control
        this.step = 0;
        //Prescription section coding starts from here
        //Autocomplete test for multiple views
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.myControl2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.options = ['One', 'Two', 'Three'];
        this.options2 = ['One2', 'Two2', 'Three2'];
        this.patient = new _models_patient__WEBPACK_IMPORTED_MODULE_2__["Patient"]();
        // this.snackBar.openFromComponent(SnackbarComponent,{
        //   duration : 2000,
        // })
    }
    DashboardComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    DashboardComponent.prototype.nextStep = function () {
        this.step++;
    };
    DashboardComponent.prototype.prevStep = function () {
        this.step--;
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.getRealPatient();
        this.startFilter1();
        this.startFilter2();
    };
    DashboardComponent.prototype.getRealPatient = function () {
        var _this = this;
        this.patient.firstName = 'Sourabh';
        this.patientService.getRealPatient(this.patient).subscribe(function (s) {
            if (s.length > 0) {
                _this.patient = s[0];
                _this.firstName = _this.patient.firstName;
                _this.lastName = _this.patient.lastName;
            }
            else {
            }
        });
    };
    DashboardComponent.prototype.submitPatient = function () {
        this.nextStep();
        console.log('Sending from dash');
        console.log(this.patient);
        this.patientService.addPatient(this.patient).subscribe(function (s) {
            console.log('Receieved response');
            console.log('s');
        });
    };
    DashboardComponent.prototype.onKeyUp = function (event) {
        console.log(event);
        console.log(event.key);
        // this.snackBar.open('demo','',{
        this.snackBar.openFromComponent(_snackhelper_snackhelper_component__WEBPACK_IMPORTED_MODULE_4__["SnackhelperComponent"], {
            duration: 2000,
        });
    };
    DashboardComponent.prototype.addEvent = function (type, event) {
        console.log(type + ": " + event.value);
        console.log(event.value.getTime());
    };
    DashboardComponent.prototype.startFilter1 = function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (value) { return _this._filter(value, _this.options); }));
    };
    DashboardComponent.prototype.startFilter2 = function () {
        var _this = this;
        this.filteredOptions2 = this.myControl2.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (value2) { return _this._filter(value2, _this.options2); }));
    };
    DashboardComponent.prototype._filter = function (value, customOptions) {
        console.log("val : " + value + " || array : " + customOptions);
        var filterValue = value.toLowerCase();
        return customOptions.filter(function (option) { return option.toLowerCase().indexOf(filterValue) === 0; });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_patient_service__WEBPACK_IMPORTED_MODULE_1__["PatientService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/models/patient.ts":
/*!***********************************!*\
  !*** ./src/app/models/patient.ts ***!
  \***********************************/
/*! exports provided: Patient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Patient", function() { return Patient; });
var Patient = /** @class */ (function () {
    function Patient() {
    }
    return Patient;
}());



/***/ }),

/***/ "./src/app/models/response.ts":
/*!************************************!*\
  !*** ./src/app/models/response.ts ***!
  \************************************/
/*! exports provided: Response */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
var Response = /** @class */ (function () {
    function Response() {
    }
    return Response;
}());



/***/ }),

/***/ "./src/app/services/dummyresponse.ts":
/*!*******************************************!*\
  !*** ./src/app/services/dummyresponse.ts ***!
  \*******************************************/
/*! exports provided: DummyResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DummyResponse", function() { return DummyResponse; });
var DummyResponse = /** @class */ (function () {
    function DummyResponse() {
        this.getPatient = {
            "status": "SUCCESS",
            "desc": null,
            "resp": [
                {
                    "bloodGroup": "B_POSITIVE",
                    "contactNo1": 9046787913,
                    "contactNo2": 7980231838,
                    "discountType": "flat",
                    "discount": 20,
                    "dobDd": 27,
                    "dobMm": 3,
                    "dobYy": 1992,
                    "firstName": "sourabh",
                    "lastName": "sadhu",
                    "tsCreated": 1534695098485,
                    "weight": 80,
                    "image": null,
                    "email": "sadhuait@gmail.com",
                    "address1": "Habra Jaigachi Rathtala North 24 Parganas",
                    "address2": "Trying to write a pretty looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong looooooooooooooooooooong text",
                    "pid": 1
                }
            ]
        };
        this.getTreatmentPlan = {
            "status": "SUCCESS",
            "desc": null,
            "resp": [
                {
                    "trtId": 1,
                    "trtDesc": "Root canal treatment",
                    "trtName": "RCT",
                    "clinicalFinding": 1
                },
                {
                    "trtId": 2,
                    "trtDesc": "Root canal treatment",
                    "trtName": "RCT",
                    "clinicalFinding": 4
                },
                {
                    "trtId": 9,
                    "trtDesc": "Root canal treatment",
                    "trtName": "RCT",
                    "clinicalFinding": 10
                }
            ]
        };
        this.getMedicine = {
            "status": "SUCCESS",
            "desc": null,
            "resp": [
                {
                    "medicineName": "med1",
                    "ageGroup": "10to30",
                    "treatmentId": 1,
                    "dosage": "sokale bikale 1 ta khabar por",
                    "clinicalAvailability": 7,
                    "diseaseCode": "dCode1",
                    "diseaseName": "dName1",
                    "ageGroupBean": null,
                    "treatmentPlan": null
                }
            ]
        };
        this.getMedicalMaster = {
            "status": "SUCCESS",
            "desc": null,
            "resp": [
                {
                    "medicalHistoryName": "Hyperglycaemia",
                    "medicalHistories": null
                },
                {
                    "medicalHistoryName": "Hypertension",
                    "medicalHistories": null
                }
            ]
        };
        this.getFeeConfig = {
            "status": "SUCCESS",
            "desc": null,
            "resp": [
                {
                    "feeConfigId": 18,
                    "ageGroupId": "10to30",
                    "ageGroupPercent": 10,
                    "baseFee": 60,
                    "toothGroupId": 2,
                    "toothGroupPercent": 10,
                    "treatmentPlanId": 1,
                    "totalFee": 72
                }
            ]
        };
        this.getAgeGroup = {
            "status": "SUCCESS",
            "desc": null,
            "resp": {
                "groupId": "3to13",
                "fromAge": 3,
                "toAge": 13
            }
        };
    }
    return DummyResponse;
}());



/***/ }),

/***/ "./src/app/services/httpcomm.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/httpcomm.service.ts ***!
  \**********************************************/
/*! exports provided: HttpcommService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpcommService", function() { return HttpcommService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/response */ "./src/app/models/response.ts");
/* harmony import */ var _dummyresponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dummyresponse */ "./src/app/services/dummyresponse.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HttpcommService = /** @class */ (function () {
    function HttpcommService(dummy, http) {
        this.dummy = dummy;
        this.http = http;
        this.ageGrpUrl = 'http://localhost:12000/my-portal/age-group/get-age-group?age=';
        this.getPatientUrl = 'http://localhost:12000/my-portal/patient/get-patient';
        this.addPatientUrl = 'http://localhost:12000/my-portal/patient/add-patient';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Accept': 'application/json',
//                'Content-Type': 'text/plain',
            })
        };
        this.dummyResp = new _dummyresponse__WEBPACK_IMPORTED_MODULE_4__["DummyResponse"]();
    }
    HttpcommService.prototype.parseData = function (s) {
        return JSON.parse(JSON.stringify(s));
    };
    HttpcommService.prototype.getAgeGroup = function (age) {
        if (this.dummy) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.parseData(this.dummyResp.getPatient));
        }
        else {
            return this.http.get(this.ageGrpUrl + age, this.httpOptions);
        }
    };
    HttpcommService.prototype.getPatient = function (patient) {
        console.log('http service called');
        if (this.dummy) {
            console.log(this.parseData(this.dummyResp.getPatient));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.parseData(this.dummyResp.getPatient));
        }
        else {
            console.log(1.2);
            return this.http.post(this.getPatientUrl, patient, this.httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('test', new _models_response__WEBPACK_IMPORTED_MODULE_3__["Response"]())));
        }
    };
    HttpcommService.prototype.addPatient = function (p, isDummy) {
        console.log('Posting patient');
        console.log(p);
        if (this.dummy && isDummy) {
            console.log('Dummy post');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.parseData(this.dummyResp.getPatient));
        }
        else {
            console.log('Real post');
            return this.http.post(this.addPatientUrl, p, this.httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('post patient', new _models_response__WEBPACK_IMPORTED_MODULE_3__["Response"]())));
        }
    };
    HttpcommService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    HttpcommService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Boolean, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], HttpcommService);
    return HttpcommService;
}());



/***/ }),

/***/ "./src/app/services/patient.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/patient.service.ts ***!
  \*********************************************/
/*! exports provided: PatientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientService", function() { return PatientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _httpcomm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./httpcomm.service */ "./src/app/services/httpcomm.service.ts");
/* harmony import */ var _snackhelper_snackhelper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../snackhelper/snackhelper.component */ "./src/app/snackhelper/snackhelper.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PatientService = /** @class */ (function () {
    function PatientService(httpClient, snackbar) {
        this.snackbar = snackbar;
        console.log('Patient service constructor');
        this.com = new _httpcomm_service__WEBPACK_IMPORTED_MODULE_3__["HttpcommService"](true, httpClient);
        this.showError();
    }
    PatientService.prototype.setPatient = function (patient) {
        this.patient = patient;
    };
    PatientService.prototype.getRealPatient = function (patient) {
        console.log('Patient Service called');
        var c;
        var response = this.com.getPatient(patient).subscribe(function (resp) {
            if (resp.status === 'SUCCESS') {
                c = resp.resp;
            }
            else {
            }
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(c);
    };
    PatientService.prototype.addPatient = function (p) {
        console.log('Patient Service called');
        console.log('Sending from patient service');
        console.log(p);
        var c;
        var response = this.com.addPatient(p, false).subscribe(function (resp) {
            if (resp.status === 'SUCCESS') {
                c = resp.resp;
            }
            else {
            }
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(c);
    };
    PatientService.prototype.extractData = function (s) {
        console.log("Actual string " + s);
        console.log(JSON.parse(JSON.stringify(s)));
        return s;
    };
    PatientService.prototype.showError = function () {
        this.snackbar.openFromComponent(_snackhelper_snackhelper_component__WEBPACK_IMPORTED_MODULE_4__["SnackhelperComponent"], {
            duration: 2000,
        });
    };
    PatientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], PatientService);
    return PatientService;
}());



/***/ }),

/***/ "./src/app/snackhelper/snackhelper.component.css":
/*!*******************************************************!*\
  !*** ./src/app/snackhelper/snackhelper.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-snack {\r\n    color: darkturquoise;\r\n}"

/***/ }),

/***/ "./src/app/snackhelper/snackhelper.component.html":
/*!********************************************************!*\
  !*** ./src/app/snackhelper/snackhelper.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"error-snack\">Oops! Something went wrong</span>\n"

/***/ }),

/***/ "./src/app/snackhelper/snackhelper.component.ts":
/*!******************************************************!*\
  !*** ./src/app/snackhelper/snackhelper.component.ts ***!
  \******************************************************/
/*! exports provided: SnackhelperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackhelperComponent", function() { return SnackhelperComponent; });
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

var SnackhelperComponent = /** @class */ (function () {
    function SnackhelperComponent() {
    }
    SnackhelperComponent.prototype.ngOnInit = function () {
    };
    SnackhelperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-snackhelper',
            template: __webpack_require__(/*! ./snackhelper.component.html */ "./src/app/snackhelper/snackhelper.component.html"),
            styles: [__webpack_require__(/*! ./snackhelper.component.css */ "./src/app/snackhelper/snackhelper.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SnackhelperComponent);
    return SnackhelperComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





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

module.exports = __webpack_require__(/*! F:\Git\Smilestone\portal\portal-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map