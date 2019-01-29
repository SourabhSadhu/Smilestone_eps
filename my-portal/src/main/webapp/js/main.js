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

module.exports = "<p>\n  WORK IN PROGRESS!\n</p>\n"

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

module.exports = "<mat-sidenav-container\n    class=\"example-container\" (backdropClick)=\"close('backdrop')\">\n  <mat-sidenav #sidenav (keydown.escape)=\"sidenav.close()\" disableClose>\n    <!-- <p><button mat-button (click)=\"close('toggle button')\">Toggle</button></p> -->\n    <p *ngFor = \"let menu of navMenus\">\n      <button mat-button routerLink={{menu.path}} (click) = \"sidenav.close()\">{{menu.name}}</button>  \n    </p>\n    <p>      \n      <button mat-button [routerLink]=\"['print']\" [queryParams]=\"{ patientId:1 , prescriptionId:12}\" (click) = \"sidenav.close()\">Print</button>\n    </p>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <p>\n      <button mat-icon-button (click)=\"sidenav.open()\">\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">home</mat-icon>\n      </button>\n    </p>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n<!-- <nav>\n  <a routerLink=\"/dashboard\">Dashboard</a>\n  <a routerLink=\"/admin\">Admin</a>\n</nav> -->\n\n"

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
            { "name": "Admin", "path": "admin" },
            { "name": "Test", "path": "test" },
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
/* harmony import */ var _create_prescription_create_prescription_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./create-prescription/create-prescription.component */ "./src/app/create-prescription/create-prescription.component.ts");
/* harmony import */ var _material_test_material_test_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./material-test/material-test.component */ "./src/app/material-test/material-test.component.ts");
/* harmony import */ var _print_prescription_print_prescription_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./print-prescription/print-prescription.component */ "./src/app/print-prescription/print-prescription.component.ts");
/* harmony import */ var _treatment_plan_treatment_plan_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./treatment-plan/treatment-plan.component */ "./src/app/treatment-plan/treatment-plan.component.ts");
/* harmony import */ var _print_print_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./print/print.component */ "./src/app/print/print.component.ts");
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
                _create_prescription_create_prescription_component__WEBPACK_IMPORTED_MODULE_13__["CreatePrescriptionComponent"],
                _material_test_material_test_component__WEBPACK_IMPORTED_MODULE_14__["MaterialTestComponent"],
                _create_prescription_create_prescription_component__WEBPACK_IMPORTED_MODULE_13__["DialogToothClinicalfindings"],
                _create_prescription_create_prescription_component__WEBPACK_IMPORTED_MODULE_13__["CustomFeeInsertionDialog"],
                _print_prescription_print_prescription_component__WEBPACK_IMPORTED_MODULE_15__["PrintPrescriptionComponent"],
                _treatment_plan_treatment_plan_component__WEBPACK_IMPORTED_MODULE_16__["TreatmentPlanComponent"],
                _print_print_component__WEBPACK_IMPORTED_MODULE_17__["PrintComponent"]
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
            entryComponents: [_snackhelper_snackhelper_component__WEBPACK_IMPORTED_MODULE_12__["SnackhelperComponent"], _create_prescription_create_prescription_component__WEBPACK_IMPORTED_MODULE_13__["DialogToothClinicalfindings"], _create_prescription_create_prescription_component__WEBPACK_IMPORTED_MODULE_13__["CustomFeeInsertionDialog"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/create-prescription/create-prescription.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/create-prescription/create-prescription.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-stretched-tabs {\r\n  max-width: 1000px;\r\n}\r\n.example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n.example-card-parent {\r\n  /* max-width: 800px; */\r\n  min-width: 50px;\r\n  margin-left: 50px;\r\n  margin-top: 30px;\r\n  width : 100%;\r\n}\r\n.example-card {\r\n  /* max-width: 800px; */\r\n  min-width: 50px;\r\n  margin: 30px;\r\n  /* width : 100%; */\r\n}\r\n.expansion-margin {\r\n  max-width: 500px;\r\n  margin-left: 150px;\r\n  margin-top: 30px;\r\n}\r\n.example-section {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n  height: 60px;\r\n}\r\n.example-margin {\r\n  /* margin: 0 10px; */\r\n  margin-top: 20px;\r\n  margin-left : 10px;\r\n  margin-right: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n.mat-radio-button ~ .mat-radio-button {\r\n  padding: 36px;\r\n}\r\ntable {\r\n  width: 100%;\r\n}\r\ntr.example-detail-row {\r\n  height: 0;\r\n}\r\ntr.example-element-row:not(.example-expanded-row):hover {\r\n  background: #f5f5f5;\r\n}\r\ntr.example-element-row:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n.example-element-row td {\r\n  border-bottom-width: 0;\r\n}\r\n.example-element-detail {\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n.example-element-diagram {\r\n  min-width: 80px;\r\n  border: 2px solid black;\r\n  padding: 8px;\r\n  font-weight: lighter;\r\n  margin: 8px 0;\r\n  height: 104px;\r\n}\r\n.example-element-symbol {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  line-height: normal;\r\n}\r\n.example-element-description {\r\n  padding: 16px;\r\n}\r\n/* .example-element-description-attribution {\r\n  opacity: 0.5;\r\n} */\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n.example-half-width{\r\n  width : 50%;\r\n}\r\n.example-grid-margin{\r\n  margin-top: 20px;\r\n  margin-bottom: 10px;\r\n  margin-right: 50px;\r\n}\r\n.rcorners2 {\r\n  border-radius: 25px;\r\n  border: 2px solid #73AD21;\r\n  padding-left: 4px; \r\n  /* width: 200px;\r\n  height: 150px;     */\r\n  margin-left: 4px;\r\n  margin-right: 4px;\r\n}\r\n/* label > input{ HIDE RADIO \r\n  visibility: hidden; Makes input not-clickable\r\n  position: absolute; Remove input from document flow\r\n}\r\nlabel > input { IMAGE STYLES\r\n  cursor:pointer;\r\n  border:2px solid transparent;\r\n}\r\nlabel > input:checked { (RADIO CHECKED) IMAGE STYLES\r\n  border:20px solid #f00;\r\n} */\r\n/* Fees table properties */\r\ntable {\r\n  width: 100%;\r\n}\r\ntr.mat-footer-row {\r\n  font-weight: bold;\r\n}\r\n.mat-table-sticky {\r\n  border-top: 1px solid #e0e0e0;\r\n}\r\n/* .icon-search {\r\n  background: url(\"../images/search.svg\");\r\n  height: 27px;\r\n  width: 22px;\r\n  display: block;\r\n}\r\n.icon-refresh {\r\n  background: url(\"../images/refresh.svg\");\r\n  height: 27px;\r\n  width: 22px;\r\n  display: block;\r\n}\r\n.icon-print {\r\n  background: url(\"../images/print.svg\");\r\n  height: 27px;\r\n  width: 22px;\r\n  display: block;\r\n}\r\n.icon-add-fee {\r\n  background: url(\"../images/icons8-plus.svg\");\r\n  height: 27px;\r\n  width: 27px;\r\n  display: block;\r\n}\r\n.svg-icon{\r\n  margin: 5px auto auto;\r\n  padding: 0;\r\n  display: inline-block;\r\n  background-repeat: no-repeat no-repeat;\r\n  pointer-events: none;\r\n} */\r\n.md-button.logo {\r\n  height: 7rem;\r\n  width: 7rem;\r\n}\r\n.logo-image {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n/* Putting table headers in center */\r\n/* mat-cell{\r\n  display:flex !important;\r\n  justify-content:center!important;\r\n  \r\n}\r\n\r\nmat-header-cell {\r\n  display:flex;\r\n  justify-content:center;\r\n  text-align: center;\r\n} */\r\n.fab {\r\n  position: fixed;\r\n  bottom: 30px;\r\n  right: 30px;\r\n}"

/***/ }),

/***/ "./src/app/create-prescription/create-prescription.component.html":
/*!************************************************************************!*\
  !*** ./src/app/create-prescription/create-prescription.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Section to create presciption -->\r\n<mat-card class=\"example-card-parent\">\r\n\r\n  <mat-tab-group [selectedIndex]=\"prescriptionFromControl.value\" (selectedIndexChange)=\"prescriptionFromControl.setValue($event)\"\r\n    (selectedTabChange)=\"loadTabSpecificData($event.index)\" mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4\">\r\n    <mat-tab label=\"Basic Info\">\r\n      <mat-card class=\"example-card\">\r\n        <mat-card-content>\r\n          <table>\r\n            <tr>\r\n              <td>\r\n                <i>Search by Patient details</i>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <!-- First Name -->\r\n                <div class=\"example-container example-margin\">\r\n                  <mat-form-field hintLabel=\"Min {{minCharToSearch}} char to search\">\r\n                    <input matInput cdkFocusInitial maxlength=20 placeholder=\"First name\" [(ngModel)]=\"selectedPatient.firstName\"\r\n                      (keyup)='fetchPatient($event)'>\r\n                    <mat-hint align=\"end\">{{selectedPatient.firstName?.length || 0}}/20</mat-hint>\r\n                  </mat-form-field>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <!-- Last Name -->\r\n                <div class=\"example-container example-margin\">\r\n                  <mat-form-field hintLabel=\"Min {{minCharToSearch}} char to search\">\r\n                    <input matInput maxlength=20 placeholder=\"Last name\" [(ngModel)]=\"selectedPatient.lastName\" (keyup)='fetchPatient($event)'>\r\n                    <mat-hint align=\"end\">{{selectedPatient.lastName?.length || 0}}/20</mat-hint>\r\n                  </mat-form-field>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <!-- Date of birth -->\r\n                <div class=\"example-container example-margin\">\r\n                  <mat-form-field>\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Select from calender\" (dateChange)=\"dateValidate($event)\"\r\n                      disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <!-- Search patients -->\r\n                <div class=\"example-margin\">\r\n                  <button mat-mini-fab color=\"primary\" (click)=\"fetchPatient($event)\" matTooltip=\"Search\">\r\n                    <mat-icon aria-label=\"Search\">search</mat-icon>\r\n                  </button>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <!-- Reset all details -->\r\n                <div class=\"example-margin\">\r\n                  <button mat-mini-fab color=\"primary\" (click)=\"refreshSearch()\" matTooltip=\"Refresh\">\r\n                    <mat-icon aria-label=\"Refresh\">refresh</mat-icon>\r\n                  </button>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <mat-divider></mat-divider>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <i>Search by Prescription number</i>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <!-- Prescription id -->\r\n                <div class=\"example-container example-margin\">\r\n                  <mat-form-field>\r\n                    <input matInput maxlength=20 placeholder=\"Enter Prescription ID\" [(ngModel)]=\"prescriptionId\">\r\n                    <mat-hint align=\"end\">Enter in number</mat-hint>\r\n                  </mat-form-field>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <div class=\"example-margin\">\r\n                  <button mat-mini-fab color=\"primary\" (click)=\"searchPrescription()\" matTooltip=\"Search\">\r\n                    <mat-icon aria-label=\"Search\">pageview</mat-icon>\r\n                  </button>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n          <!-- Loading progressbar -->\r\n          <mat-progress-bar *ngIf=\"isPatientLoading\" color=\"color\" mode=\"indeterminate\"></mat-progress-bar>\r\n          <!-- Patient list -->\r\n          <div *ngIf=\"isPatientLoaded\">\r\n            <table mat-table [dataSource]=\"patientDataSource\" multiTemplateDataRows class=\"mat-elevation-z8\">\r\n              <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of columnsToDisplay\">\r\n                <th mat-header-cell *matHeaderCellDef> {{column}} </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\r\n              </ng-container>\r\n\r\n              <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\r\n              <ng-container matColumnDef=\"expandedDetail\">\r\n                <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\r\n                  <div class=\"example-element-detail\" [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\r\n                    <div class=\"example-element-diagram\">\r\n                      <div class=\"example-element-position\"> {{element.firstName}} </div>\r\n                      <div class=\"example-element-symbol\"> {{element.lastName}} </div>\r\n                      <div class=\"example-element-name\"> {{element.age}} </div>\r\n                      <div class=\"example-element-weight\"> {{element.contactNo1}} </div>\r\n                      <!-- <span>Image placeholder</span> -->\r\n                    </div>\r\n                    <div class=\"example-element-description\">\r\n                      <p>\r\n                        {{element.address1}}\r\n                      </p>\r\n                      <p>\r\n                        {{element.address2}}\r\n                      </p>\r\n                      <p>\r\n                        <!-- <span class=\"example-element-description-attribution\"> -- Wikipedia </span> -->\r\n                        <button mat-raised-button color=\"primary\" (click)=\"selectedElement(expandedElement)\">\r\n                          Select <mat-icon aria-label=\"Select\">check_circle_outline</mat-icon>\r\n                        </button>\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </ng-container>\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\r\n              <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\" class=\"example-element-row\"\r\n                [class.example-expanded-row]=\"expandedElement === element\" (mouseenter)=\"mouseOverFn(element)\">\r\n                <!-- (mouseout)=\"mouseOutFn(expandedElement)\" -->\r\n              </tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\r\n            </table>\r\n          </div>\r\n        </mat-card-content>\r\n        <!-- <mat-card-actions>\r\n          <button mat-button>LIKE</button>\r\n          <button mat-button>SHARE</button>\r\n        </mat-card-actions> -->\r\n      </mat-card>\r\n\r\n    </mat-tab>\r\n\r\n    <!-- \r\n      *******************************************************************************************\r\n      *******************************************************************************************\r\n      ********************************* History Section *****************************************\r\n      *******************************************************************************************\r\n      *******************************************************************************************\r\n     -->\r\n\r\n    <mat-tab label=\"History\" [disabled]=\"disableTabs\">\r\n\r\n      <!-- Dashboard view -->\r\n      <div *ngIf=\"dashboardDataSource.data && dashboardDataSource.data.length > 0\">\r\n        <table mat-table [dataSource]=\"dashboardDataSource\" class=\"mat-elevation-z8\">\r\n\r\n          <!-- ['Date','C/F', 'Treatment Plan', 'Treatment Done', 'Due', 'Next Appo'] -->\r\n          <ng-container matColumnDef=\"Date\">\r\n            <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Date </th>\r\n            <td mat-cell *matCellDef=\"let dv\"> {{ dv.pHistory.tsCreated | date:'dd/MM/yy hh:mm a' }}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"C/F\">\r\n            <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> C/F </th>\r\n            <td mat-cell *matCellDef=\"let dv\">\r\n              <!--  {{ dv.pHistory.clinicalFindings }} getOrderedClinicalFindings -->\r\n              <ul>\r\n                <li style=\"list-style: none;\" *ngFor=\"let cf of getOrderedClinicalFindings(dv.pHistory.clinicalFindings)\">{{\r\n                  cf }}</li>\r\n              </ul>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"Treatment Plan\">\r\n            <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Treatment Plan </th>\r\n            <td mat-cell *matCellDef=\"let dv; let i = index;\">\r\n              <ul>\r\n                <li style=\"list-style: none;\" *ngFor=\"let tpv of dv.tphv\">{{ tpv.tname }} - {{ tpv.toothIndex }}</li>\r\n              </ul>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"Treatment Done\">\r\n            <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Treatment Done </th>\r\n            <td mat-cell *matCellDef=\"let dv; let i = index;\">\r\n              <ul>\r\n                <li style=\"list-style: none;\" *ngFor=\"let tph of getTreatmentDoneHistoryView(dv.tphv)\">{{ tph.tname }}</li>\r\n              </ul>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"Due\">\r\n            <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Due </th>\r\n            <td mat-cell *matCellDef=\"let dv; let i = index;\">\r\n              {{ getDueFee(dv.fbl) }}\r\n              <!-- <ul >\r\n                <li style=\"list-style: none;\" *ngFor=\"let fb of dv.fbl\">{{ fb.amount }}</li>\r\n              </ul>    -->\r\n            </td>\r\n          </ng-container>\r\n\r\n          <!-- Next Appo -->\r\n          <ng-container matColumnDef=\"Next Appo\">\r\n            <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Next Appo </th>\r\n            <td mat-cell *matCellDef=\"let dv; let i = index;\">\r\n              {{ dv.pHistory.nextAppointment | date:'dd/MM/yy hh:mm a' }}\r\n            </td>\r\n          </ng-container>\r\n\r\n          <tr mat-header-row *matHeaderRowDef=\"dashboardHistoryListColumns\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: dashboardHistoryListColumns;\" (click)=\"selectPrescription(row)\"></tr>\r\n        </table>\r\n      </div>\r\n    </mat-tab>\r\n\r\n    <!-- \r\n      *******************************************************************************************\r\n      *******************************************************************************************\r\n      ********************************* Prescription Section ************************************\r\n      *******************************************************************************************\r\n      *******************************************************************************************\r\n     -->\r\n    <mat-tab label=\"Prescription\" [disabled]=\"disableTabs\">\r\n      <mat-card id=\"printableContent1\" class=\"example-card\">\r\n        <mat-card-content>\r\n          <div class=\"fab\">\r\n            <button mat-mini-fab color=\"primary\" (click)=\"resetPrescriptionData()\" matTooltip=\"Reset\">\r\n              <mat-icon aria-label=\"Reset\">restore</mat-icon>\r\n            </button>\r\n          </div>\r\n          <mat-form-field class=\"example-full-width\">\r\n            <textarea matInput [disabled]=\"checkIfDisabledToModify()\" placeholder=\"Chief complaint\" [(ngModel)]=\"prescriptionHistoryView.chiefComplaint\"\r\n              cdkTextareaAutosize cdkAutosizeMinRows=\"1\" cdkAutosizeMaxRows=\"5\"></textarea>\r\n            <button mat-button *ngIf=\"prescriptionHistoryView.chiefComplaint\" matSuffix mat-icon-button aria-label=\"Clear\"\r\n              (click)=\"prescriptionHistoryView.chiefComplaint=''\" matToolTip=\"Clear\" [disabled]=\"checkIfDisabledToModify()\">\r\n              <mat-icon>close</mat-icon>\r\n            </button>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n            <!-- <button mat-button matPrefix mat-icon-button aria-label=\"Add\" (click)=\"openDialog()\" matToolTip=\"Add\" \r\n              [disabled]=\"checkIfDisabledToModify()\">\r\n              <mat-icon>add_circle_outline</mat-icon>\r\n            </button> -->\r\n            <!-- <textarea matInput placeholder=\"Chief findings\" disabled [(ngModel)]=\"clinicalFindingsView\" cdkTextareaAutosize\r\n              cdkAutosizeMinRows=\"1\" cdkAutosizeMaxRows=\"5\"></textarea> -->\r\n            <mat-chip-list #chipList1>\r\n              <mat-chip *ngFor=\"let s of clinicalFindingsViewForUi\" selectable=\"false\" removable=\"false\">\r\n                {{s}}\r\n              </mat-chip>\r\n              <input (click)=\"openDialog()\" (keydown)=\"openDialog()\" placeholder=\"Add C/F\" [matChipInputFor]=\"chipList1\"\r\n                matChipInputAddOnBlur=\"true\" [disabled]=\"checkIfDisabledToModify()\">\r\n            </mat-chip-list>\r\n          </mat-form-field>\r\n\r\n          <table>\r\n            <tr>\r\n              <td>\r\n                <!-- Medical History -->\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <mat-select placeholder=\"Medical History\" [formControl]=\"medicalHistoryForm\" [(ngModel)]=\"medicalHistoryViewModel\"\r\n                    multiple class=\"example-full-width\" [disabled]=\"checkIfDisabledToModify()\">\r\n                    <mat-option *ngFor=\"let mh of mhList\" [value]=\"mh\">{{mh}}</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <!-- Loading progressbar -->\r\n                <mat-progress-bar *ngIf=\"mhList == null || mhList?.length <= 0\" color=\"color\" mode=\"indeterminate\"></mat-progress-bar>\r\n              </td>\r\n              <td>\r\n                <!-- Investigation -->\r\n                <mat-form-field hintLabel=\"Max 30 characters\" class=\"example-full-width\">\r\n                  <input matInput [maxlength]=\"30\" placeholder=\"Investigation\" [(ngModel)]=\"prescriptionHistoryView.investigation\"\r\n                    [disabled]=\"checkIfDisabledToModify()\">\r\n                  <mat-hint align=\"end\">{{prescriptionHistoryView.investigation?.length || 0}}/30</mat-hint>\r\n                </mat-form-field>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n\r\n          <!-- provisionalDiagnosis -->\r\n          <mat-form-field class=\"example-full-width\">\r\n            <textarea matInput placeholder=\"Provisional diagnosis\" [(ngModel)]=\"prescriptionHistoryView.provisionalDiagnosis\"\r\n              cdkTextareaAutosize cdkAutosizeMinRows=\"1\" cdkAutosizeMaxRows=\"5\" [disabled]=\"checkIfDisabledToModify()\"></textarea>\r\n            <button mat-button *ngIf=\"prescriptionHistoryView.provisionalDiagnosis\" matSuffix mat-icon-button\r\n              aria-label=\"Clear\" (click)=\"prescriptionHistoryView.provisionalDiagnosis=''\" matToolTip=\"Clear\"\r\n              [disabled]=\"checkIfDisabledToModify()\">\r\n              <mat-icon>close</mat-icon>\r\n            </button>\r\n          </mat-form-field>\r\n\r\n          <!-- Treatment Plan -->\r\n          <!-- <mat-form-field class=\"example-full-width\">\r\n            <mat-chip-list #chipListtrtmnt>\r\n              <mat-chip *ngFor=\"let s of treatmentPlanListView\" selectable=\"true\" removable=\"true\" (removed)=\"removeChip(s,1)\">\r\n                {{s}}\r\n                <mat-icon matChipRemove>cancel</mat-icon>\r\n              </mat-chip>\r\n              <input placeholder=\"Treatment Plan\" [matChipInputFor]=\"chipListtrtmnt\" matChipInputAddOnBlur=\"true\"\r\n                (matChipInputTokenEnd)=\"addTreatmentPlan($event)\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\">\r\n            </mat-chip-list>\r\n          </mat-form-field> -->\r\n\r\n          <!-- Treatment plan -->\r\n          <span class=\"example-margin\">Advised Treatment plan</span>\r\n          <div *ngIf=\"cftMapArray && cftMapArray.length > 0\">\r\n            <table mat-table [dataSource]=\"trtmntPlanListDataSource\" class=\"mat-elevation-z8\">\r\n\r\n              <ng-container matColumnDef=\"cf\">\r\n                <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> C/F </th>\r\n                <td mat-cell *matCellDef=\"let cftMap\"> {{cftMap.clinicalFinding.fname}} </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"teeth\">\r\n                <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Tooth </th>\r\n                <td mat-cell *matCellDef=\"let cftMap\"> {{cftMap.teeth.toothIndex}}\r\n                </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"plan\">\r\n                <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Plan </th>\r\n                <td mat-cell *matCellDef=\"let cftMap; let i = index;\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <div *ngIf=\"!checkIfDisabledToModify()\">\r\n                      <mat-select placeholder=\"Select Treatment Plan\" [formControl]=\"treatmentPlanFormControl\" class=\"example-full-width\"\r\n                        (selectionChange)=\"updateTrtmntPlanSelect($event.value, i)\" [disabled]=\"checkIfDisabledToModify()\">\r\n                        <!-- [(value)] = cftMap.treatmentPlanName -->\r\n                        <mat-option *ngFor=\"let tpl of treatmentPlanList\" [value]=\"tpl.trtName\">{{tpl.trtName}}</mat-option>\r\n                      </mat-select>\r\n                    </div>\r\n                    <div *ngIf=\"checkIfDisabledToModify()\">\r\n                      <textarea matInput placeholder=\"Treatment Plans\" cdkTextareaAutosize cdkAutosizeMinRows=\"1\"\r\n                        cdkAutosizeMaxRows=\"5\" disabled>{{cftMap.treatmentPlanViewModel}}</textarea>\r\n                    </div>\r\n                  </mat-form-field>\r\n                </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"newPlan\">\r\n                <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> New Plan </th>\r\n                <td mat-cell *matCellDef=\"let cftMap; let i = index;\">\r\n                  <input class=\"example-full-width\" style=\"text-align:center\" *ngIf=\"cftMap.customTrtmntPlan\" matInput\r\n                    placeholder=\"Custom plan\" (input)=\"updateTrtmntPlanI($event.target.value, i)\" required [disabled]=\"checkIfDisabledToModify()\">\r\n                </td>\r\n              </ng-container>\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"trtmntPlanListViewColumns\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: trtmntPlanListViewColumns;\"></tr>\r\n            </table>\r\n          </div>\r\n\r\n          <!-- advice -->\r\n          <mat-form-field class=\"example-full-width example-grid-margin\">\r\n            <textarea matInput placeholder=\"Advice\" [(ngModel)]=\"prescriptionHistoryView.advice\" cdkTextareaAutosize\r\n              cdkAutosizeMinRows=\"1\" cdkAutosizeMaxRows=\"5\" [disabled]=\"checkIfDisabledToModify()\"></textarea>\r\n            <button mat-button *ngIf=\"prescriptionHistoryView.advice\" matSuffix mat-icon-button aria-label=\"Clear\"\r\n              (click)=\"prescriptionHistoryView.advice=''\" matToolTip=\"Clear\" [disabled]=\"checkIfDisabledToModify()\">\r\n              <mat-icon>close</mat-icon>\r\n            </button>\r\n          </mat-form-field>\r\n\r\n          <!-- Previous Medicines -->\r\n          <div *ngIf=\"checkIfDisabledToModify()\">\r\n            <mat-form-field class=\"example-full-width example-grid-margin\">\r\n              <textarea matInput placeholder=\"Previous Medicines\" [(ngModel)]=\"medicineHistoryViewModel\"\r\n                cdkTextareaAutosize cdkAutosizeMinRows=\"1\" cdkAutosizeMaxRows=\"5\" [disabled]=\"checkIfDisabledToModify()\">\r\n              </textarea>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <!-- Medicine -->\r\n          <mat-form-field class=\"example-full-width\">\r\n            <mat-select placeholder=\"Add Medicine\" [formControl]=\"medicineForm\" multiple class=\"example-full-width\">\r\n              <mat-option *ngFor=\"let mh of medicineMasterViewList\" [value]=\"mh\">{{mh.medicineName}} {{mh.dosage}}</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n          <!-- Next appointment -->\r\n          <table>\r\n            <tr>\r\n              <td>\r\n                <span>Next appo</span>\r\n              </td>\r\n              <td class=\"example-full-width\">\r\n                <mat-form-field>\r\n                  <input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"nextAppoPicker\" placeholder=\"Date\"\r\n                    (dateChange)=\"createNextAppo($event)\">\r\n                  <!-- <mat-datepicker-toggle matSuffix [for]=\"nextAppoPicker\"></mat-datepicker-toggle> -->\r\n                  <mat-datepicker #nextAppoPicker></mat-datepicker>\r\n                </mat-form-field>\r\n                <button mat-raised-button (click)=\"nextAppoPicker.open()\">Choose Date</button>\r\n              </td>\r\n              <td class=\"example-full-width\">\r\n                <mat-form-field hintLabel=\"Enter in digits\">\r\n                  <input matInput maxlength=\"2\" type=\"number\" min=0 max=24 placeholder=\"Hour\" [(ngModel)]=\"nextAppoHour\"\r\n                    (change)=\"createNextAppoTime()\">\r\n                </mat-form-field>\r\n              </td>\r\n              <td class=\"example-full-width\">\r\n                <mat-form-field hintLabel=\"Enter in digits\">\r\n                  <input matInput maxlength=\"2\" type=\"number\" min=0 max=59 placeholder=\"Minute\" [(ngModel)]=\"nextAppoMinute\"\r\n                    (change)=\"createNextAppoTime()\">\r\n                </mat-form-field>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n\r\n          <div>\r\n            <div class=\"example-margin\" align=\"right\">\r\n              <span>Add Fee</span>\r\n              <button mat-icon-button color=\"primary\" (click)=\"addCustomFee()\">\r\n                <mat-icon aria-label=\"\">add_circle</mat-icon>\r\n              </button>\r\n            </div>\r\n            <div *ngIf=\"feesConfigListView && feesConfigListView.length > 0\">\r\n              <table mat-table [dataSource]=\"feesConfigListDataSource\" class=\"mat-elevation-z8\">\r\n                <!-- column list -->\r\n                <!-- Id Column -->\r\n                <ng-container matColumnDef=\"treatmentPlanId\">\r\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> # </th>\r\n                  <td mat-cell *matCellDef=\"let fee\"> {{fee.treatmentPlanId}} </td>\r\n                  <td mat-footer-cell *matFooterCellDef> </td>\r\n                </ng-container>\r\n\r\n                <!-- baseFee Column -->\r\n                <ng-container matColumnDef=\"baseFee\">\r\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Base </th>\r\n                  <td mat-cell *matCellDef=\"let fee\"> {{fee.baseFee}} </td>\r\n                  <td mat-footer-cell *matFooterCellDef> </td>\r\n                </ng-container>\r\n\r\n                <!-- ageGroupId Column -->\r\n                <ng-container matColumnDef=\"ageGroupId\">\r\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> AgeGrp </th>\r\n                  <td mat-cell *matCellDef=\"let fee\"> {{fee.ageGroupId}} </td>\r\n                  <td mat-footer-cell *matFooterCellDef> </td>\r\n                </ng-container>\r\n\r\n                <!-- ageGroupPercent Column -->\r\n                <ng-container matColumnDef=\"ageGroupPercent\">\r\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> % </th>\r\n                  <td mat-cell *matCellDef=\"let fee\"> {{fee.ageGroupPercent}} </td>\r\n                  <td mat-footer-cell *matFooterCellDef> </td>\r\n                </ng-container>\r\n\r\n                <!-- toothGroupId Column -->\r\n                <ng-container matColumnDef=\"toothGroupId\">\r\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> ToothGrp </th>\r\n                  <td mat-cell *matCellDef=\"let fee\" style=\"text-align:center\"> {{fee.toothGroupId}} </td>\r\n                  <td mat-footer-cell *matFooterCellDef> </td>\r\n                </ng-container>\r\n\r\n                <!-- toothGroupPercent Column -->\r\n                <ng-container matColumnDef=\"toothGroupPercent\">\r\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> % </th>\r\n                  <td mat-cell *matCellDef=\"let fee\"> {{fee.toothGroupPercent}} </td>\r\n                  <td mat-footer-cell *matFooterCellDef> </td>\r\n                </ng-container>\r\n\r\n                <!-- totalFee Column -->\r\n                <ng-container matColumnDef=\"totalFee\">\r\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Fee </th>\r\n                  <td mat-cell *matCellDef=\"let fee\">\r\n                    <mat-form-field>\r\n                      <input matInput type=\"number\" min=1 [(ngModel)]=\"fee.totalFee\" (change)=\"getTotalFee()\" style=\"text-align:center\"\r\n                        [disabled]=\"checkIfDisabledToModify()\">\r\n                    </mat-form-field>\r\n                  </td>\r\n                  <td mat-footer-cell *matFooterCellDef> Total {{totalFees | currency:'&#8377;' }}</td>\r\n                </ng-container>\r\n\r\n                <!-- amountPaid Column -->\r\n                <ng-container matColumnDef=\"amountPaid\">\r\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Paid </th>\r\n                  <td mat-cell *matCellDef=\"let fee\">\r\n                    <mat-form-field>\r\n                      <input matInput type=\"number\" min=1 [(ngModel)]=\"fee.amountPaid\" (change)=\"getTotalFee()\" style=\"text-align:center\">\r\n                    </mat-form-field>\r\n                  </td>\r\n                  <td mat-footer-cell *matFooterCellDef> Paid {{totalPaidFees | currency:'&#8377;' }}</td>\r\n                </ng-container>\r\n\r\n                <!-- notes Column -->\r\n                <ng-container matColumnDef=\"notes\">\r\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Note </th>\r\n                  <td mat-cell *matCellDef=\"let fee\">\r\n                    <mat-form-field>\r\n                      <input matInput [(ngModel)]=\"fee.notes\" style=\"text-align:center\">\r\n                    </mat-form-field>\r\n                    <button mat-button matSuffix mat-icon-button aria-label=\"Remove\" (click)=\"removeFees($index)\"\r\n                      matToolTip=\"Remove\" [disabled]=\"checkIfDisabledToModify()\">\r\n                      <mat-icon>close</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                  <td mat-footer-cell *matFooterCellDef style=\"color: red;\"> Due {{totalDueFees | currency:'&#8377;' }}\r\n                  </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"feesConfigListViewColumns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: feesConfigListViewColumns;\"></tr>\r\n                <tr mat-footer-row *matFooterRowDef=\"feesConfigListViewColumns; sticky: true\"></tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Note -->\r\n          <div class=\"example-margin\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <textarea matInput placeholder=\"Notes\" [(ngModel)]=\"prescriptionHistoryView.note\" cdkTextareaAutosize\r\n                cdkAutosizeMinRows=\"1\" cdkAutosizeMaxRows=\"5\" [disabled]=\"checkIfDisabledToModify()\"></textarea>\r\n              <button mat-button *ngIf=\"prescriptionHistoryView.note\" matSuffix mat-icon-button aria-label=\"Clear\"\r\n                (click)=\"prescriptionHistoryView.note=''\" matToolTip=\"Clear\" [disabled]=\"checkIfDisabledToModify()\">\r\n                <mat-icon>close</mat-icon>\r\n              </button>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <!-- Printable notes -->\r\n          <div class=\"example-margin\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <textarea matInput placeholder=\"Notes to be printed\" [(ngModel)]=\"prescriptionHistoryView.printableNotes\"\r\n                cdkTextareaAutosize cdkAutosizeMinRows=\"1\" cdkAutosizeMaxRows=\"5\" [disabled]=\"checkIfDisabledToModify()\"></textarea>\r\n              <button mat-button *ngIf=\"prescriptionHistoryView.printableNotes\" matSuffix mat-icon-button aria-label=\"Clear\"\r\n                (click)=\"prescriptionHistoryView.printableNotes=''\" matToolTip=\"Clear\" [disabled]=\"checkIfDisabledToModify()\">\r\n                <mat-icon>close</mat-icon>\r\n              </button>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div>\r\n            <a>Save Prescription </a>\r\n            <button class=\"example-margin\" mat-mini-fab color=\"primary\" (click)=\"createAndSubmitPrescription()\" matTooltip=\"Upload\">\r\n              <mat-icon aria-label=\"Upload\">cloud_upload</mat-icon>\r\n            </button>\r\n          \r\n            <a>      Print Prescription </a>\r\n            <button class=\"example-margin\" mat-mini-fab color=\"primary\" (click)=\"printPrescription()\" matTooltip=\"Print\" [disabled]=\"!checkIfDisabledToModify()\">\r\n              <mat-icon aria-label=\"Print\">local_printshop</mat-icon>\r\n            </button>\r\n          </div>\r\n\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-tab>\r\n\r\n    <!-- \r\n  /************************************************************************************************************\r\n   ************************************************************************************************************\r\n   *************************************** Treatment Plan Section *********************************************\r\n   ************************************************************************************************************\r\n   ************************************************************************************************************\r\n   */\r\n     -->\r\n\r\n    <mat-tab label=\"Treatment Done\" [disabled]=\"disableTreatmentDoneTab\">\r\n      <mat-card class=\"example-card\">\r\n        <mat-card-content>\r\n          <!-- Treatment Done -->\r\n          <!-- this.treatmentTabPatientId = dashboardResponse.patientId\r\n            this.treatmentTabPrescriptionId = dashboardResponse.prescriptionId\r\n            this.treatmentTabTreatmentPlanHistoryViews -->\r\n          <!-- <app-treatment-plan \r\n              [treatmentTabPatientId] = \"treatmentTabPatientId\"\r\n              [treatmentTabPrescriptionId] = \"treatmentTabPrescriptionId\"\r\n              [treatmentTabTreatmentPlanHistoryViews] = \"treatmentTabTreatmentPlanHistoryViews\"\r\n            >Loading..</app-treatment-plan> -->\r\n          <app-treatment-plan>Loading..</app-treatment-plan>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-tab>\r\n\r\n  </mat-tab-group>\r\n\r\n</mat-card>"

/***/ }),

/***/ "./src/app/create-prescription/create-prescription.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/create-prescription/create-prescription.component.ts ***!
  \**********************************************************************/
/*! exports provided: CreatePrescriptionComponent, DialogToothClinicalfindings, CustomFeeInsertionDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePrescriptionComponent", function() { return CreatePrescriptionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogToothClinicalfindings", function() { return DialogToothClinicalfindings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFeeInsertionDialog", function() { return CustomFeeInsertionDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/models */ "./src/app/models/models.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _snackhelper_snackbar_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../snackhelper/snackbar-model */ "./src/app/snackhelper/snackbar-model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _services_httpcomm_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/httpcomm.service */ "./src/app/services/httpcomm.service.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_commonservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/commonservice.service */ "./src/app/services/commonservice.service.ts");
/* harmony import */ var _services_treatment_plan_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/treatment-plan.service */ "./src/app/services/treatment-plan.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _services_event_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/event-service.service */ "./src/app/services/event-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};















var CreatePrescriptionComponent = /** @class */ (function () {
    // treatmentTabPatientId: number
    // treatmentTabPrescriptionId: number
    // treatmentTabTreatmentPlanHistoryViews: TreatmentPlanHistoryView[]
    function CreatePrescriptionComponent(snackBar, dialog, httpCom, treatmentPlanService, commonService, eventService, router) {
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.httpCom = httpCom;
        this.treatmentPlanService = treatmentPlanService;
        this.commonService = commonService;
        this.eventService = eventService;
        this.router = router;
        this.columnsToDisplay = ['firstName', 'lastName', 'age', 'weight'];
        this.medicalHistoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.medicineForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.mhList = [];
        this.dialogData = new _models_models__WEBPACK_IMPORTED_MODULE_1__["CompositDialogBoxData"]();
        this.treatmentPlanList = [];
        this.treatmentPlanFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["COMMA"]];
        this.feesConfigListViewColumns = ['treatmentPlanId', 'baseFee', 'ageGroupId', 'ageGroupPercent', 'toothGroupId', 'toothGroupPercent', 'totalFee', 'amountPaid', 'notes'];
        this.disableTabs = true;
        //Enable treatment done tab on prescription repeat or after submitting prescription
        this.disableTreatmentDoneTab = true;
        this.snackModel = new _snackhelper_snackbar_model__WEBPACK_IMPORTED_MODULE_3__["SnackbarModel"]();
        this.ageGroup = "";
        this.prescriptionFromControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](0);
        this.minCharToSearch = 3;
        /************************************************************************************************************
         ************************************************************************************************************
         ***************************************** History Section **************************************************
         ************************************************************************************************************
         ************************************************************************************************************
         */
        this.dashboardHistoryListColumns = ['Date', 'C/F', 'Treatment Plan', 'Treatment Done', 'Due', 'Next Appo'];
        this.totalFees = 0;
        this.totalPaidFees = 0;
        this.totalDueFees = 0;
        this.nextAppoHour = 0;
        this.nextAppoMinute = 0;
        this.nextAppoDate = 0;
        this.minDate = new Date();
        this.todayMillis = this.minDate.getTime();
        this.maxMillis = this.todayMillis + (5 * 86400 * 1000);
        this.maxDate = new Date(this.maxMillis);
        this.trtmntPlanListDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableDataSource"]();
        this.trtmntPlanListViewColumns = ['cf', 'teeth', 'plan', 'newPlan'];
    }
    CreatePrescriptionComponent.prototype.ngOnInit = function () {
        this.initializeValiables();
        // this.commonService = new CommonService();
    };
    CreatePrescriptionComponent.prototype.loadTabSpecificData = function (tabIndex) {
        var _this = this;
        switch (tabIndex) {
            //Patient search page
            case 0:
                break;
            //Patient history page
            case 1:
                break;
            //Prescription page
            case 2:
                this.httpCom.getMedicalMaster().subscribe(function (resp) {
                    if (resp.status == 'SUCCESS') {
                        for (var i = 0; i < resp.resp.length; i++) {
                            _this.mhList.push(resp.resp[i].medicalHistoryName);
                        }
                    }
                });
                this.httpCom.getTreatmentPlan().subscribe(function (resp) {
                    if (resp.status == 'SUCCESS') {
                        _this.treatmentPlanList = resp.resp;
                    }
                });
                this.httpCom.getAllMedicine().subscribe(function (resp) {
                    if (resp.status == 'SUCCESS') {
                        _this.medicineMasterViewList = resp.resp;
                    }
                });
                break;
            //Treatment done page
            case 3:
                //Event emit
                this.eventService.sendEvent(true);
                break;
            default:
                break;
        }
    };
    CreatePrescriptionComponent.prototype.refreshSearch = function () {
        this.isPatientLoading = false;
        this.isPatientLoaded = false;
        this.isPatientSelected = false;
        this.tabSelection(0);
        this.disableTabs = true;
        this.initializeValiables();
        this.patientDataSource = [];
        this.prescriptionId = undefined;
    };
    CreatePrescriptionComponent.prototype.initializeValiables = function () {
        this.selectedPatient = new _models_models__WEBPACK_IMPORTED_MODULE_1__["Patient"]();
        this.prescriptionHistoryView = new _models_models__WEBPACK_IMPORTED_MODULE_1__["PrescriptionHistoryView"]();
        this.isPatientLoading = false;
        this.isPatientLoaded = false;
        this.isPatientSelected = false;
        this.isDisabledToModify = false;
        this.dashboardDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableDataSource"]();
        this.medicalHistoryViewModel = [];
        this.clinicalFindingsViewForUi = [];
        this.cftMapArray = [];
        this.treatmentPlanListView = [];
        this.feesConfigListView = [];
        this.feesConfigListDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableDataSource"]();
    };
    CreatePrescriptionComponent.prototype.fetchPatient = function (event) {
        // console.log(event.key);
        if ((this.selectedPatient.firstName !== undefined &&
            this.selectedPatient.firstName.length >= this.minCharToSearch) ||
            (this.selectedPatient.lastName !== undefined &&
                this.selectedPatient.lastName.length >= this.minCharToSearch)) {
            this.searchPatient();
        }
        else {
            if (this.selectedPatient && this.selectedPatient.firstName && this.selectedPatient.firstName.length > 0
                && this.selectedPatient.lastName && this.selectedPatient.lastName.length > 0) {
                this.isPatientLoading = true;
            }
            else {
                this.isPatientLoading = false;
            }
            this.isPatientLoaded = false;
        }
    };
    CreatePrescriptionComponent.prototype.dateValidate = function (event) {
        console.log('Prescptn ' + event.value);
        var parsedDate = this.commonService.getParsedDate(event.value);
        if (parsedDate && parsedDate.length == 3) {
            this.selectedPatient.dobDd = parsedDate[0];
            this.selectedPatient.dobMm = parsedDate[1];
            this.selectedPatient.dobYy = parsedDate[2];
            this.searchPatient();
        }
    };
    CreatePrescriptionComponent.prototype.searchPatient = function () {
        var _this = this;
        //search patient
        this.isPatientLoading = true;
        this.isPatientLoaded = false;
        this.httpCom.getPatient(this.selectedPatient).subscribe(function (resp) {
            if (resp) {
                if (resp.status && resp.status === 'SUCCESS') {
                    if (resp.status.length > 0) {
                        _this.patientDataSource = resp.resp;
                    }
                    else {
                        _this.commonService.showSuccessSnackBar(_this.snackBar, "No record found");
                    }
                }
                else {
                    _this.commonService.showErrorSnackBar(_this.snackBar, resp.desc);
                }
            }
            else {
                _this.commonService.showErrorSnackBar(_this.snackBar);
            }
            _this.isPatientLoaded = true;
            _this.isPatientLoading = false;
        });
    };
    CreatePrescriptionComponent.prototype.mouseOverFn = function (element) {
        this.expandedElement = element;
    };
    CreatePrescriptionComponent.prototype.mouseOutFn = function (element) {
        // this.expandedElement = new Patient();
    };
    CreatePrescriptionComponent.prototype.selectedElement = function (element) {
        this.selectedPatient = element;
        this.disableTabs = false;
        this.tabSelection(1);
        this.fetchDashboard(element.pid);
    };
    CreatePrescriptionComponent.prototype.searchPrescription = function () {
        var _this = this;
        console.log('Prescription ID: ' + this.prescriptionId);
        if (this.prescriptionId && this.prescriptionId > 0) {
            this.httpCom.getSinglePrescriptionDetail(this.prescriptionId).subscribe(function (dashboardResp) {
                if (dashboardResp) {
                    if (dashboardResp.status == 'SUCCESS') {
                        _this.tabSelection(2);
                        if (dashboardResp.resp && dashboardResp.resp.length > 0) {
                            //Fetch patient details
                            var dashboard_1 = dashboardResp.resp[0];
                            var patient = new _models_models__WEBPACK_IMPORTED_MODULE_1__["Patient"]();
                            patient.pid = dashboard_1.pHistory.patientId;
                            _this.httpCom.getPatient(patient).subscribe(function (patientResp) {
                                if (patientResp && patientResp.status == 'SUCCESS') {
                                    _this.selectedPatient = patientResp.resp[0];
                                    _this.disableTabs = false;
                                    _this.selectPrescription(dashboard_1);
                                }
                            });
                        }
                        else {
                            _this.commonService.showSuccessSnackBar(_this.snackBar, dashboardResp.desc);
                        }
                    }
                    else {
                        _this.commonService.showErrorSnackBar(_this.snackBar, dashboardResp.desc);
                    }
                }
                else {
                    _this.commonService.showErrorSnackBar(_this.snackBar);
                }
            });
        }
    };
    CreatePrescriptionComponent.prototype.tabSelection = function (tabIndex) {
        this.prescriptionFromControl.setValue(tabIndex);
    };
    CreatePrescriptionComponent.prototype.fetchDashboard = function (patientId) {
        var _this = this;
        this.httpCom.getDashboardView(patientId).subscribe(function (resp) {
            if (resp.status === 'SUCCESS' && resp.resp) {
                if (resp.resp && resp.resp.length > 0) {
                    _this.dashboardDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableDataSource"]();
                    _this.dashboardDataSource.data = resp.resp;
                }
                else {
                    _this.tabSelection(2);
                }
            }
            else {
                _this.commonService.showErrorSnackBar(_this.snackBar, resp.desc, function () { _this.tabSelection(2); });
                _this.tabSelection(2);
            }
        });
    };
    CreatePrescriptionComponent.prototype.getDueFee = function (feesList) {
        var due = 0;
        feesList.map(function (fee) {
            due += fee.amount - fee.amountPaid;
            // error
        });
        return due;
    };
    CreatePrescriptionComponent.prototype.getTreatmentDoneHistoryView = function (treatmentPlanHistoryViews) {
        return (treatmentPlanHistoryViews && treatmentPlanHistoryViews.length > 0) ? treatmentPlanHistoryViews.filter(function (tph) { return tph.status == _models_models__WEBPACK_IMPORTED_MODULE_1__["TreatmentPlanStatus"].COMPLETED; }) : [];
    };
    //populate prescription details
    CreatePrescriptionComponent.prototype.selectPrescription = function (dashboard) {
        var _this = this;
        this.tabSelection(2);
        this.isDisabledToModify = true;
        this.prescriptionId = dashboard.pHistory.prescriptionId;
        if (dashboard.pHistory) {
            this.prescriptionHistoryView = dashboard.pHistory;
            if (dashboard.pHistory.clinicalFindings.length > 0) {
                this.clinicalFindingsViewForUi = dashboard.pHistory.clinicalFindings.split(',');
            }
            this.medicalHistoryViewModel = [];
            dashboard.mhv.forEach(function (e) {
                _this.medicalHistoryViewModel.push(e.medicalHistoryName);
            });
            this.medicineHistoryViewModel = '';
            dashboard.medhv.forEach(function (e) {
                _this.medicineHistoryViewModel += (e.medicineName + ' ' + e.dosage + '\n');
            });
            //Create cftMapArray
            this.cftMapArray = [];
            if (dashboard.pHistory &&
                dashboard.pHistory.clinicalFindings &&
                dashboard.pHistory.clinicalFindings.length > 0) {
                var clinicalFinidingToothComposite = dashboard.pHistory.clinicalFindings.split(',');
                clinicalFinidingToothComposite.forEach(function (e) {
                    var clinicalFindingComposite = e.split(' - ');
                    if (clinicalFindingComposite.length == 2) {
                        var clinicalFindingDerived_1 = clinicalFindingComposite[0];
                        var toothComposite = clinicalFindingComposite[1].split(' ');
                        toothComposite.forEach(function (tooth) {
                            var cft = new _models_models__WEBPACK_IMPORTED_MODULE_1__["ClinicalFindingToothMapping"]();
                            cft.teeth = new _models_models__WEBPACK_IMPORTED_MODULE_1__["ToothQuadrentView"]();
                            cft.clinicalFinding = new _models_models__WEBPACK_IMPORTED_MODULE_1__["ClinicalFindingView"]();
                            if (!isNaN(parseInt(tooth, 10))) {
                                cft.teeth.toothIndex = parseInt(tooth, 10);
                                cft.clinicalFinding.fname = clinicalFindingDerived_1;
                                var treatmentPlanList = dashboard.tphv.filter(function (tph) { return tph.clinicalFinding == clinicalFindingDerived_1 && tph.toothIndex == cft.teeth.toothIndex; });
                                if (treatmentPlanList && treatmentPlanList.length > 0) {
                                    cft.treatmentPlanViewModel = treatmentPlanList[0].tname;
                                }
                            }
                            _this.cftMapArray.push(cft);
                        });
                    }
                });
                this.trtmntPlanListDataSource.data = this.cftMapArray;
                //Creating Treatment Plan History Data
                this.disableTreatmentDoneTab = false;
                this.treatmentPlanService.setTreatmentData(dashboard.pHistory.patientId, dashboard.pHistory.prescriptionId, dashboard.tphv);
                /**
                 * As event emitter is working, so need to send reference as we need to operate on data
                 * Hence communicating via server
                 */
                // Injecting variable references
                // this.treatmentTabPatientId = dashboard.pHistory.patientId
                // this.treatmentTabPrescriptionId = dashboard.pHistory.prescriptionId
                // this.treatmentTabTreatmentPlanHistoryViews = dashboard.tphv
                this.httpCom.getAgeGroup(this.selectedPatient.age.toString()).subscribe(function (resp) {
                    if (resp && resp.status === 'SUCCESS') {
                        _this.ageGroup = resp.resp.groupId;
                    }
                });
                this.feesConfigListView = [];
                dashboard.fbl.forEach(function (fee) {
                    var feeConf = new _models_models__WEBPACK_IMPORTED_MODULE_1__["FeeConfigView"]();
                    feeConf.treatmentPlanId = fee.trtmntPlanRef;
                    feeConf.totalFee = fee.amount;
                    feeConf.amountPaid = fee.amountPaid;
                    feeConf.notes = fee.notes;
                    feeConf.ageGroupId = _this.ageGroup;
                    feeConf.feeConfigId = fee.fId;
                    _this.feesConfigListView.push(feeConf);
                });
                this.getTotalFee();
                this.feesConfigListDataSource.data = this.feesConfigListView;
            }
        }
    };
    CreatePrescriptionComponent.prototype.checkIfDisabledToModify = function () {
        return this.isDisabledToModify;
    };
    /************************************************************************************************************
     ************************************************************************************************************
     ***************************************** Prescription Section *********************************************
     ************************************************************************************************************
     ************************************************************************************************************
     */
    CreatePrescriptionComponent.prototype.resetPrescriptionData = function () {
        var _this = this;
        this.commonService.showSuccessSnackBar(this.snackBar, "Are you sure to reset all data? ", function () {
            _this.isDisabledToModify = false;
            _this.dashboardView = new _models_models__WEBPACK_IMPORTED_MODULE_1__["DashboardView"]();
            _this.prescriptionHistoryView = new _models_models__WEBPACK_IMPORTED_MODULE_1__["PrescriptionHistoryView"]();
            _this.medicalHistoryViewModel = [];
            _this.medicalHistoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
            _this.clinicalFindingsViewForUi = [];
            _this.cftMapArray = [];
            _this.treatmentPlanListView = [];
            _this.feesConfigListView = [];
            _this.feesConfigListDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableDataSource"]();
            _this.checkIfDisabledToModify();
        });
    };
    CreatePrescriptionComponent.prototype.getOrderedClinicalFindings = function (cf) {
        if (cf && cf.length > 0)
            return cf.split(',');
    };
    //Prescription Section
    CreatePrescriptionComponent.prototype.openDialog = function () {
        var _this = this;
        this.httpCom.getClinicalFindings().subscribe(function (response) {
            if (response.status == 'SUCCESS') {
                _this.clinicalFindings = response.resp;
                _this.httpCom.getToothQuadrents().subscribe(function (response) {
                    if (response.status == 'SUCCESS') {
                        _this.toothQuadrents = response.resp;
                        _this.dialogData.clinicalFindingsComposite = _this.clinicalFindings;
                        _this.dialogData.toothQuadrentsComposite = _this.toothQuadrents;
                        var dialogRef = _this.dialog.open(DialogToothClinicalfindings, {
                            width: '700px',
                            data: _this.dialogData
                        });
                        dialogRef.afterClosed().subscribe(function (result) {
                            if (result && result.length > 0) {
                                if (_this.cftMapArray.length == 0) {
                                    _this.cftMapArray = result;
                                }
                                else {
                                    result.map(function (r) { return _this.cftMapArray.push(r); });
                                }
                                for (var i = 0; i < _this.cftMapArray.length; i++) {
                                    _this.clinicalFindingsViewForUi.push(_this.commonService.combineValForStringArray(_this.clinicalFindingsViewForUi, _this.cftMapArray[i].clinicalFinding.fname, _this.cftMapArray[i].teeth.toothIndex.toString()));
                                }
                                _this.createTreatmentPlanTable();
                            }
                        });
                    }
                });
            }
        });
    };
    CreatePrescriptionComponent.prototype.getTotalFee = function () {
        this.totalFees = this.feesConfigListView && this.feesConfigListView.length > 0 ?
            this.feesConfigListView.map(function (fee) { return fee.totalFee; }).reduce(function (prevTotal, curr) { return prevTotal + curr; }, 0) :
            0;
        this.getTotalPaidFee();
        // return this.totalFees;
    };
    CreatePrescriptionComponent.prototype.getTotalPaidFee = function () {
        this.totalPaidFees = this.feesConfigListView && this.feesConfigListView.length > 0 ?
            this.feesConfigListView.map(function (fee) { return fee.amountPaid; }).reduce(function (prevTotal, curr) { return prevTotal + curr; }, 0) :
            0;
        this.getTotalDueFee();
        // return this.totalPaidFees
    };
    CreatePrescriptionComponent.prototype.getTotalDueFee = function () {
        this.totalDueFees = this.totalFees - this.totalPaidFees;
        return this.totalDueFees;
    };
    CreatePrescriptionComponent.prototype.addCustomFee = function () {
        var _this = this;
        var dialogFeeRef = this.dialog.open(CustomFeeInsertionDialog, {
            width: '700px',
            data: this.treatmentPlanList
        });
        dialogFeeRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result) {
                var customFeeConfigView = result;
                customFeeConfigView.ageGroupId = _this.ageGroup;
                if (_this.feesConfigListView == undefined || _this.feesConfigListView.length == 0) {
                    _this.feesConfigListView = [];
                }
                _this.feesConfigListView.push(customFeeConfigView);
                _this.feesConfigListDataSource.data = _this.feesConfigListView;
                _this.getTotalFee();
            }
        });
    };
    CreatePrescriptionComponent.prototype.addTreatmentPlan = function (event) {
        var input = event.input;
        var value = event.value;
        if ((value || '').trim()) {
            this.treatmentPlanListView.push(value.trim());
        }
        if (input) {
            input.value = '';
        }
    };
    CreatePrescriptionComponent.prototype.removeChip = function (s, n) {
        //Remove Treatment plan
        if (n == 1 && typeof s === 'string') {
            var idx = this.treatmentPlanListView.indexOf(s);
            if (idx >= 0) {
                this.treatmentPlanListView.splice(idx, 1);
                //TODO: Also remove medicines and fee configurations
            }
        }
        else if (n == 2 && s instanceof _models_models__WEBPACK_IMPORTED_MODULE_1__["MedicineView"]) {
            var idx = this.medicineMasterViewList.indexOf(s);
            if (idx >= 0) {
                this.medicineMasterViewList.splice(idx, 1);
            }
        }
    };
    ;
    CreatePrescriptionComponent.prototype.removeFees = function (index) {
        this.feesConfigListView.splice(index, 1);
        this.feesConfigListDataSource.data = this.feesConfigListView;
        this.getTotalFee();
    };
    //Function for adding custom medicines
    CreatePrescriptionComponent.prototype.addMedicine = function (event) {
        var customMedicineMaster = new _models_models__WEBPACK_IMPORTED_MODULE_1__["MedicineView"]();
        var input = event.input;
        var data = event.value;
        if ((data || '').trim()) {
            var dataParts = data.split(' -- ');
            if (dataParts.length == 2) {
                customMedicineMaster.medicineName = dataParts[0];
                customMedicineMaster.dosage = dataParts[1];
                this.medicineMasterViewList.push(customMedicineMaster);
            }
            else {
                console.log('Error medicine format');
            }
        }
        if (input) {
            input.value = '';
        }
    };
    CreatePrescriptionComponent.prototype.createNextAppo = function (event) {
        try {
            // console.log('next appo ' + event.value.getTime());
            this.nextAppoDate = event.value.getTime();
        }
        catch (error) {
            console.log(error);
            this.snackModel.msg = "Invalid Date";
            this.snackModel.action = "OK";
            this.snackModel.callback = function () {
                console.log("Retry allowed");
            };
            this.commonService.showSnackBar(this.snackBar, this.snackModel);
        }
    };
    CreatePrescriptionComponent.prototype.createNextAppoTime = function () {
        // console.log(`NextAppo Hour ${this.nextAppoHour} Minute ${this.nextAppoMinute}`)
    };
    //Get all dialog box data from this.cftMapArray
    CreatePrescriptionComponent.prototype.createTreatmentPlanTable = function () {
        this.trtmntPlanListDataSource.data = this.cftMapArray;
    };
    CreatePrescriptionComponent.prototype.updateTrtmntPlanSelect = function (value, index) {
        var _this = this;
        this.treatmentPlanList.filter(function (data) {
            if (data.trtName == value) {
                if (_this.cftMapArray.length > index) {
                    _this.cftMapArray[index].treatmentPlanName = value;
                    if (value === 'Other') {
                        _this.cftMapArray[index].customTrtmntPlan = true;
                    }
                    var toothGrpIndex = _this.cftMapArray[index].teeth.toothGroup;
                    var treatmentId = data.trtId;
                    _this.httpCom.getFeeConfig(_this.selectedPatient.age, toothGrpIndex, treatmentId).subscribe(function (resp) {
                        if (resp && resp.status === 'SUCCESS') {
                            var feeConfigData = resp.resp;
                            if (feeConfigData && feeConfigData.totalFee > 0) {
                                _this.feesConfigListView.push(feeConfigData);
                                _this.feesConfigListDataSource.data = _this.feesConfigListView;
                                _this.getTotalFee();
                            }
                        }
                        else {
                            //Show error and open custom feeaddition section
                            _this.snackModel.msg = "Please add custom fee";
                            _this.snackModel.action = "OK";
                            _this.snackModel.callback = function () {
                                _this.addCustomFee();
                            };
                            _this.commonService.showSnackBar(_this.snackBar, _this.snackModel);
                        }
                    });
                }
            }
            // console.log('Updated cft', this.cftMapArray)
            //Getting filtered medicines
            //TOBE DONE LATER
            // this.httpCom.getMedicineView(this.httpCom.getMedicineUrl
            //   + this.httpCom.getMedicineUrlPart1
            //   + data.trtId
            //   + this.httpCom.getMedicineUrlPart2
            //   + this.selectedPatient.age
            // ).subscribe(
            //   resp => {
            //     if (resp.status === 'SUCCESS') {
            //       resp.resp.map(medicineMasterView => {
            //         this.medicineMasterViewList.push(medicineMasterView);
            //       });
            //     } else {
            //       console.log('resp error: ' + resp);
            //     }
            //   }
            // );
        });
    };
    CreatePrescriptionComponent.prototype.updateTrtmntPlanI = function (value, index) {
        this.cftMapArray[index].treatmentPlanName = value;
    };
    CreatePrescriptionComponent.prototype.createAndSubmitPrescription = function () {
        var _this = this;
        this.dashboardView = new _models_models__WEBPACK_IMPORTED_MODULE_1__["DashboardView"]();
        //Check if uploading new precription or updating an existing one
        //Existing
        if (this.prescriptionHistoryView && this.prescriptionHistoryView.prescriptionId > 0) {
            this.dashboardView.fbl = [];
            if (this.feesConfigListView && this.feesConfigListView.length > 0) {
                this.feesConfigListView.map(function (f) {
                    var fb = new _models_models__WEBPACK_IMPORTED_MODULE_1__["FeesBreakupView"]();
                    fb.amount = f.totalFee;
                    fb.notes = f.notes;
                    fb.trtmntPlanRef = f.treatmentPlanId;
                    fb.patientId = _this.selectedPatient.pid;
                    fb.amountPaid = f.amountPaid;
                    fb.fId = f.feeConfigId;
                    fb.prescriptionId = _this.prescriptionHistoryView.prescriptionId;
                    _this.dashboardView.fbl.push(fb);
                });
            }
            this.dashboardView.medhv = [];
            if (this.medicineForm.value && this.medicineForm.value.length > 0) {
                this.medicineForm.value.map(function (m) {
                    var medh = new _models_models__WEBPACK_IMPORTED_MODULE_1__["MedicineHistoryView"]();
                    medh.medicineName = m.medicineName;
                    medh.diseaseCode = m.diseaseCode;
                    medh.diseaseName = m.diseaseName;
                    medh.dosage = m.dosage;
                    medh.patientId = _this.selectedPatient.pid;
                    _this.dashboardView.medhv.push(medh);
                });
            }
            this.dashboardView.pHistory = new _models_models__WEBPACK_IMPORTED_MODULE_1__["PrescriptionHistoryView"]();
            this.dashboardView.pHistory.patientId = this.selectedPatient.pid;
            this.dashboardView.pHistory.prescriptionId = this.prescriptionId;
            if (0 < this.nextAppoDate) {
                this.dashboardView.pHistory.nextAppointment = this.nextAppoDate;
                if (0 <= this.nextAppoHour && this.nextAppoHour <= 24 && 0 <= this.nextAppoMinute && this.nextAppoMinute <= 59) {
                    var modifiedTime = ((this.nextAppoHour * 60) + this.nextAppoMinute) * 60 * 1000 + this.nextAppoDate;
                    this.dashboardView.pHistory.nextAppointment = modifiedTime;
                }
            }
            console.log(JSON.stringify(this.dashboardView));
            this.httpCom.updateDashBoard(this.dashboardView).subscribe(function (resp) {
                if (resp.status === 'SUCCESS') {
                    console.log(JSON.stringify(resp.resp));
                    _this.dashboardResponse = resp.resp;
                    if (_this.dashboardResponse && _this.dashboardResponse.status) {
                        _this.treatmentPlanService.setTreatmentData(_this.dashboardResponse.patientId, _this.dashboardResponse.prescriptionId, _this.dashboardView.tphv);
                        _this.commonService.showSuccessSnackBar(_this.snackBar, "Prescription updated", function () {
                            _this.tabSelection(3);
                        });
                    }
                    else {
                        _this.commonService.showErrorSnackBar(_this.snackBar, _this.dashboardResponse.respMsg);
                    }
                }
                else {
                    _this.commonService.showErrorSnackBar(_this.snackBar, resp.status);
                }
            });
        }
        else {
            this.dashboardView = new _models_models__WEBPACK_IMPORTED_MODULE_1__["DashboardView"]();
            this.dashboardView.fbl = [];
            if (this.feesConfigListView && this.feesConfigListView.length > 0) {
                this.feesConfigListView.map(function (f) {
                    var fb = new _models_models__WEBPACK_IMPORTED_MODULE_1__["FeesBreakupView"]();
                    fb.amount = f.totalFee;
                    fb.notes = f.notes;
                    fb.trtmntPlanRef = f.treatmentPlanId;
                    fb.patientId = _this.selectedPatient.pid;
                    fb.amountPaid = f.amountPaid;
                    _this.dashboardView.fbl.push(fb);
                });
            }
            this.dashboardView.medhv = [];
            if (this.medicineForm.value && this.medicineForm.value.length > 0) {
                this.medicineForm.value.map(function (m) {
                    var medh = new _models_models__WEBPACK_IMPORTED_MODULE_1__["MedicineHistoryView"]();
                    medh.medicineName = m.medicineName;
                    medh.diseaseCode = m.diseaseCode;
                    medh.diseaseName = m.diseaseName;
                    medh.dosage = m.dosage;
                    medh.patientId = _this.selectedPatient.pid;
                    _this.dashboardView.medhv.push(medh);
                });
            }
            this.dashboardView.mhv = [];
            // if (this.medicalHistoryForm.value && this.medicalHistoryForm.value.length > 0) {
            if (this.medicalHistoryViewModel && this.medicalHistoryViewModel.length > 0) {
                // medicalHistoryViewModel
                this.medicalHistoryForm.value.map(function (v) {
                    var view = new _models_models__WEBPACK_IMPORTED_MODULE_1__["MedicalHistoryView"]();
                    view.medicalHistoryName = v;
                    view.patientId = _this.selectedPatient.pid;
                    _this.dashboardView.mhv.push(view);
                });
            }
            this.dashboardView.pHistory = this.prescriptionHistoryView;
            this.dashboardView.pHistory.patientId = this.selectedPatient.pid;
            this.dashboardView.pHistory.clinicalFindings = this.commonService.getFormattedClinicalFindingsForPost(this.clinicalFindingsViewForUi);
            if (0 < this.nextAppoDate) {
                this.dashboardView.pHistory.nextAppointment = this.nextAppoDate;
                if (0 <= this.nextAppoHour && this.nextAppoHour <= 24 && 0 <= this.nextAppoMinute && this.nextAppoMinute <= 59) {
                    var modifiedTime = ((this.nextAppoHour * 60) + this.nextAppoMinute) * 60 * 1000 + this.nextAppoDate;
                    this.dashboardView.pHistory.nextAppointment = modifiedTime;
                }
            }
            this.dashboardView.tphv = [];
            this.cftMapArray.map(function (cft) {
                var tph = new _models_models__WEBPACK_IMPORTED_MODULE_1__["TreatmentPlanHistoryView"]();
                tph.patientId = _this.selectedPatient.pid;
                tph.tname = cft.treatmentPlanName;
                tph.toothIndex = cft.teeth.toothIndex;
                tph.clinicalFinding = cft.clinicalFinding.fname;
                _this.dashboardView.tphv.push(tph);
            });
            console.log(JSON.stringify(this.dashboardView));
            this.httpCom.addDashBoard(this.dashboardView).subscribe(function (resp) {
                if (resp.status === 'SUCCESS') {
                    //Do something and print prescription
                    console.log(JSON.stringify(resp.resp));
                    // this.printPrescription();
                    _this.dashboardResponse = resp.resp;
                    if (_this.dashboardResponse && _this.dashboardResponse.status) {
                        _this.isDisabledToModify = true;
                        _this.treatmentPlanService.setTreatmentData(_this.dashboardResponse.patientId, _this.dashboardResponse.prescriptionId, _this.dashboardView.tphv);
                        /**
                         * As event emitter is working, so need to send reference as we need to operate on data
                         * Hence communicating via server
                         */
                        //Injecting variable references
                        // this.treatmentTabPatientId = dashboardResponse.patientId
                        // this.treatmentTabPrescriptionId = dashboardResponse.prescriptionId
                        // this.treatmentTabTreatmentPlanHistoryViews = this.dashboardView.tphv
                        _this.snackModel.isError = false;
                        _this.snackModel.msg = "Prescription added";
                        _this.snackModel.action = "OK";
                        _this.snackModel.callback = function () {
                            //navigate to treatment plan tab
                            _this.tabSelection(3);
                        };
                        _this.commonService.showSnackBar(_this.snackBar, _this.snackModel);
                    }
                    else {
                        _this.snackModel.isError = true;
                        _this.snackModel.msg = "Server error";
                        _this.snackModel.action = "OK";
                        _this.commonService.showSnackBar(_this.snackBar, _this.snackModel);
                    }
                }
            });
        }
    };
    CreatePrescriptionComponent.prototype.printPrescription = function () {
        console.log('Patient ID' + this.selectedPatient.pid);
        console.log('Prescription ID' + this.prescriptionId);
        if (this.dashboardResponse && this.dashboardResponse.patientId && this.dashboardResponse.prescriptionId) {
            this.router.navigate(['print'], { queryParams: { patientId: this.dashboardResponse.patientId, prescriptionId: this.dashboardResponse.prescriptionId } });
        }
        else if (this.isDisabledToModify) {
            this.router.navigate(['print'], { queryParams: { patientId: this.selectedPatient.pid, prescriptionId: this.prescriptionId } });
        }
    };
    CreatePrescriptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-prescription',
            template: __webpack_require__(/*! ./create-prescription.component.html */ "./src/app/create-prescription/create-prescription.component.html"),
            styles: [__webpack_require__(/*! ./create-prescription.component.css */ "./src/app/create-prescription/create-prescription.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: '0px', minHeight: '0', display: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _services_httpcomm_service__WEBPACK_IMPORTED_MODULE_6__["HttpcommService"],
            _services_treatment_plan_service__WEBPACK_IMPORTED_MODULE_10__["TreatmentPlanService"], _services_commonservice_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"],
            _services_event_service_service__WEBPACK_IMPORTED_MODULE_12__["EventServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]])
    ], CreatePrescriptionComponent);
    return CreatePrescriptionComponent;
}());

//Dialog box to select clinical findings mapped with tooth index
var DialogToothClinicalfindings = /** @class */ (function () {
    function DialogToothClinicalfindings(dialogRef, data, httpCom) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.httpCom = httpCom;
        this.cfTextToBeShownOnUi = [];
        this.originalCfList = [];
        this.toothForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.clinicalFindingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        // readonly separatorKeysCodes: number[] = [ENTER, COMMA];
        this.cftMapArray = [];
        //Scope for new clinical findingds
        this.customCFName = '';
        this.customCFDesc = '';
    }
    DialogToothClinicalfindings.prototype.ngOnInit = function () {
        for (var i = 0; i < this.data.clinicalFindingsComposite.length; i++) {
            this.originalCfList.push(this.data.clinicalFindingsComposite[i].fname);
        }
        ;
        this.startFilter1();
    };
    DialogToothClinicalfindings.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ;
    DialogToothClinicalfindings.prototype.getOrderedList = function (grp, isAsc) {
        if (isAsc === void 0) { isAsc = false; }
        return this.data.toothQuadrentsComposite
            .filter(function (tooth) { return tooth.toothQdr == grp; })
            .sort(function (a, b) {
            if (isAsc && a.toothIndex > b.toothIndex)
                return 1;
            else if (!isAsc && a.toothIndex < b.toothIndex)
                return 1;
            else
                return -1;
        });
    };
    DialogToothClinicalfindings.prototype.checkTooth = function (t) {
        t.selected = !t.selected;
    };
    //In case of other add the other data in db and process as usual if async add is on
    DialogToothClinicalfindings.prototype.add = function () {
        var _this = this;
        if (this.originalCfList.includes(this.clinicalFindingForm.value)) {
            // let selectedToothList: number[] = this.toothForm.value;
            var selectedToothIndexes_1 = '';
            this.data.toothQuadrentsComposite.map(function (tooth) {
                if (tooth.selected) {
                    var cft_1 = new _models_models__WEBPACK_IMPORTED_MODULE_1__["ClinicalFindingToothMapping"]();
                    cft_1.teeth = tooth;
                    selectedToothIndexes_1 = tooth.toothIndex.toString();
                    var formValue = _this.clinicalFindingForm.value;
                    if (formValue === 'Others') {
                        formValue = _this.customCFName;
                    }
                    //Combining tooth index for cf
                    _this.cfTextToBeShownOnUi.push(new _services_commonservice_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"]().combineValForStringArray(_this.cfTextToBeShownOnUi, formValue, selectedToothIndexes_1));
                    if (_this.clinicalFindingForm.value === 'Others') {
                        var cf = new _models_models__WEBPACK_IMPORTED_MODULE_1__["ClinicalFindingView"]();
                        cf.fname = _this.customCFName;
                        cf.fdesc = _this.customCFDesc;
                        cft_1.clinicalFinding = cf;
                        _this.httpCom.addClinicalFinding(cf).subscribe(function (resp) {
                            if (resp.status === 'SUCCESS') {
                                //TODO: Show message
                                console.log('CF added');
                            }
                        });
                    }
                    else {
                        _this.data.clinicalFindingsComposite.map(function (cf) {
                            if (cf.fname === _this.clinicalFindingForm.value) {
                                // console.log(`Match for ${this.clinicalFindingForm.value}`)
                                cft_1.clinicalFinding = cf;
                            }
                        });
                    }
                    tooth.selected = false;
                    _this.cftMapArray.push(cft_1);
                }
            });
        }
        else {
            // Show error
        }
        this.clinicalFindingForm.setValue('');
    };
    DialogToothClinicalfindings.prototype.closeDialog = function () {
        this.dialogRef.close(this.cftMapArray);
    };
    DialogToothClinicalfindings.prototype.remove = function (s) {
        var index = this.cfTextToBeShownOnUi.indexOf(s);
        if (index >= 0) {
            this.cfTextToBeShownOnUi.splice(index, 1);
        }
        var cfName = s.substring(0, s.indexOf("-"));
        for (var l = 0; l < this.cftMapArray.length; l++) {
            if (this.cftMapArray[l].clinicalFinding.fname === cfName) {
                this.cftMapArray.splice(l, 1);
            }
        }
    };
    DialogToothClinicalfindings.prototype.setSelect = function (t) {
        alert('Selected:' + t.toothIndex);
    };
    DialogToothClinicalfindings.prototype.startFilter1 = function () {
        var _this = this;
        this.filteredCfList = this.clinicalFindingForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (value) { return _this._filter(value); }));
    };
    DialogToothClinicalfindings.prototype._filter = function (value) {
        return this.originalCfList.filter(function (option) { return option.toLowerCase().includes(value.toLowerCase()); });
    };
    DialogToothClinicalfindings = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-tooth-cf',
            template: __webpack_require__(/*! ./dialog-tooth-cf.html */ "./src/app/create-prescription/dialog-tooth-cf.html"),
            styles: [__webpack_require__(/*! ./create-prescription.component.css */ "./src/app/create-prescription/create-prescription.component.css")],
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _models_models__WEBPACK_IMPORTED_MODULE_1__["CompositDialogBoxData"],
            _services_httpcomm_service__WEBPACK_IMPORTED_MODULE_6__["HttpcommService"]])
    ], DialogToothClinicalfindings);
    return DialogToothClinicalfindings;
}());

var CustomFeeInsertionDialog = /** @class */ (function () {
    function CustomFeeInsertionDialog(dialogRef, treatmentPlans) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.treatmentPlans = treatmentPlans;
        this.treatmentPlanForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.feeConfigView = new _models_models__WEBPACK_IMPORTED_MODULE_1__["FeeConfigView"]();
        if (treatmentPlans && treatmentPlans.length > 0) {
            this.treatmentPlanDescs = [];
            treatmentPlans.forEach(function (tpls) {
                _this.treatmentPlanDescs.push(tpls.trtDesc);
            });
        }
    }
    CustomFeeInsertionDialog.prototype.ngOnInit = function () {
        this.startTreatmentPlanFilter();
    };
    CustomFeeInsertionDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ;
    CustomFeeInsertionDialog.prototype.closeDialog = function () {
        if (!isNaN(this.feeConfigView.totalFee) && !isNaN(this.feeConfigView.amountPaid)) {
            this.getCustomFee();
            this.dialogRef.close(this.feeConfigView);
        }
    };
    CustomFeeInsertionDialog.prototype.startTreatmentPlanFilter = function () {
        var _this = this;
        this.treatmentPlanDescsObservable = this.treatmentPlanForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (value) { return _this._filter(value); }));
    };
    CustomFeeInsertionDialog.prototype._filter = function (value) {
        return this.treatmentPlanDescs.filter(function (desc) { return desc.toLowerCase().includes(value.toLowerCase()); });
    };
    CustomFeeInsertionDialog.prototype.getCustomFee = function () {
        var _this = this;
        if (this.treatmentPlanForm.value && this.treatmentPlanForm.value.length > 0) {
            var filterdList = this.treatmentPlans.filter(function (tDesc) { return _this.treatmentPlanForm.value == tDesc.trtDesc; });
            if (filterdList && filterdList.length > 0) {
                this.feeConfigView.treatmentPlanId = filterdList[0].trtId;
            }
        }
    };
    CustomFeeInsertionDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-fee-insert',
            template: __webpack_require__(/*! ./custom-fee-insert.html */ "./src/app/create-prescription/custom-fee-insert.html"),
            styles: [__webpack_require__(/*! ./create-prescription.component.css */ "./src/app/create-prescription/create-prescription.component.css")],
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Array])
    ], CustomFeeInsertionDialog);
    return CustomFeeInsertionDialog;
}());



/***/ }),

/***/ "./src/app/create-prescription/custom-fee-insert.html":
/*!************************************************************!*\
  !*** ./src/app/create-prescription/custom-fee-insert.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add Fee</h1>\r\n<div mat-dialog-content>\r\n    <form class=\"example-form\">\r\n        <mat-form-field class=\"example-full-width\">\r\n            <input type=\"text\" matInput placeholder=\"Select treatment plan\" aria-label=\"Number\" [formControl]=\"treatmentPlanForm\"\r\n                [matAutocomplete]=\"auto3\">\r\n            <mat-autocomplete autoActiveFirstOption #auto3=\"matAutocomplete\">\r\n                <mat-option *ngFor=\"let treatmentPlanDesc of treatmentPlanDescsObservable | async\" [value]=\"treatmentPlanDesc\">\r\n                    {{treatmentPlanDesc}}\r\n                </mat-option>\r\n            </mat-autocomplete>\r\n        </mat-form-field>\r\n    </form>\r\n    <mat-divider></mat-divider>\r\n\r\n    <mat-form-field class=\"example-margin\">\r\n        <input matInput type=\"number\" placeholder=\"Total Fee\" min=1 [(ngModel)]=\"feeConfigView.totalFee\" style=\"text-align:center\" required>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-margin\">\r\n        <input matInput type=\"number\" placeholder=\"Amount Paid\" min=1 [(ngModel)]=\"feeConfigView.amountPaid\" style=\"text-align:center\">\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-margin\">\r\n        <input matInput placeholder=\"Note\" [(ngModel)]=\"feeConfigView.notes\" style=\"text-align:center\">\r\n    </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button (click)=\"onNoClick()\">Close</button>\r\n    <button mat-button (click)=\"closeDialog()\">Done</button>\r\n</div>"

/***/ }),

/***/ "./src/app/create-prescription/dialog-tooth-cf.html":
/*!**********************************************************!*\
  !*** ./src/app/create-prescription/dialog-tooth-cf.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Create Clinical Findings</h1>\r\n<div mat-dialog-content>\r\n    <!-- <mat-list>\r\n        <h3 mat-subheader>Clinical Findings</h3>\r\n        <mat-list-item *ngFor=\"let cf of data.clinicalFindingsComposite\">\r\n            <mat-icon mat-list-icon>notes</mat-icon>\r\n            <h4 mat-line>Name : {{cf.fname}}</h4>\r\n            <p mat-line>Desc : {{cf.fdesc}} </p>\r\n        </mat-list-item>\r\n    </mat-list> -->\r\n    <form class=\"example-form\">\r\n        <mat-form-field class=\"example-full-width\">\r\n            <input type=\"text\" matInput placeholder=\"Select C/F\" aria-label=\"Number\" [formControl]=\"clinicalFindingForm\"\r\n                [matAutocomplete]=\"auto2\">\r\n            <mat-autocomplete autoActiveFirstOption #auto2=\"matAutocomplete\">\r\n                <mat-option *ngFor=\"let cfdd of filteredCfList | async\" [value]=\"cfdd\">\r\n                    {{cfdd}}\r\n                </mat-option>\r\n            </mat-autocomplete>\r\n        </mat-form-field>\r\n    </form>\r\n    <mat-divider></mat-divider>\r\n\r\n    <!-- Section for adding custom clinical findings -->\r\n    <table *ngIf=\"clinicalFindingForm?.value === 'Others'\">\r\n        <tr>\r\n            <td>\r\n                <!-- Custom clinical finding name -->\r\n                <mat-form-field hintLabel=\"Max 30 characters\" class=\"example-full-width\">\r\n                    <input matInput [maxlength]=\"30\" placeholder=\"C/F Name\" [(ngModel)]=\"customCFName\" required>\r\n                    <mat-hint align=\"end\">{{customCFName?.length || 0}}/30</mat-hint>\r\n                </mat-form-field>\r\n            </td>\r\n            <td>\r\n                <!-- Custom clinical finding desc -->\r\n                <mat-form-field hintLabel=\"Max 30 characters\" class=\"example-full-width\">\r\n                    <input matInput [maxlength]=\"30\" placeholder=\"C/F Desc\" [(ngModel)]=\"customCFDesc\">\r\n                    <mat-hint align=\"end\">{{customCFDesc?.length || 0}}/30</mat-hint>\r\n                </mat-form-field>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n\r\n\r\n    <!-- <mat-form-field>\r\n        <mat-select placeholder=\"Tooth\" [formControl]=\"toothForm\" multiple>\r\n            <mat-option *ngFor=\"let tooth of data.toothQuadrentsComposite\" [value]=\"tooth.toothIndex\">{{tooth.toothIndex}}</mat-option>\r\n        </mat-select>\r\n    </mat-form-field> -->\r\n\r\n    <table>\r\n        <tr>\r\n            <td *ngFor=\"let t of getOrderedList(1)\" class=\"rcorners2\" (click)=\"checkTooth(t)\">\r\n                <!-- (click)=\"setSelect(t)\" -->\r\n                <label>\r\n                    <input class=\"custom_mat-radio-button\" type=\"checkbox\" name=\"all\" value=\"{{t.toothIndex}}\"\r\n                        [checked]=\"t.selected\" disabled />\r\n                    {{t.toothIndex}}\r\n                </label>\r\n            </td>\r\n            <td *ngFor=\"let t of getOrderedList(2, true)\" class=\"rcorners2\" (click)=\"checkTooth(t)\">\r\n                <label>\r\n                    <input type=\"checkbox\" name=\"all\" value=\"{{t.toothIndex}}\" [checked]=\"t.selected\" disabled />\r\n                    <!-- (change)=\"checkTooth(t)\" -->\r\n                    {{t.toothIndex}}\r\n                </label>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td *ngFor=\"let t of getOrderedList(3)\" class=\"rcorners2\" (click)=\"checkTooth(t)\">\r\n                <input type=\"checkbox\" name=\"all\" value=\"{{t.toothIndex}}\" [checked]=\"t.selected\" disabled />\r\n                <!-- (change)=\"checkTooth(t)\" -->\r\n                {{t.toothIndex}}\r\n            </td>\r\n            <td *ngFor=\"let t of getOrderedList(4, true)\" class=\"rcorners2\" (click)=\"checkTooth(t)\">\r\n                <input type=\"checkbox\" name=\"all\" value=\"{{t.toothIndex}}\" [checked]=\"t.selected\" disabled />\r\n                <!-- (change)=\"checkTooth(t)\" -->\r\n                {{t.toothIndex}}\r\n            </td>\r\n        </tr>\r\n    </table>\r\n\r\n\r\n    <p>\r\n        <button mat-raised-button color=\"primary\" (click)=\"add()\">\r\n            Select <mat-icon aria-label=\"Select\">check_circle_outline</mat-icon>\r\n        </button>\r\n    </p>\r\n    <p>\r\n        <mat-form-field>\r\n            <mat-chip-list #chipList>\r\n                <mat-chip *ngFor=\"let cf of cfTextToBeShownOnUi\" selectable=\"true\" removable=\"true\" (removed)=\"remove(cf)\">\r\n                    {{cf}}\r\n                    <mat-icon matChipRemove>cancel</mat-icon>\r\n                </mat-chip>\r\n                <input placeholder=\"Result\" disabled [matChipInputFor]=\"chipList\" matChipInputAddOnBlur=\"true\">\r\n                <!-- \r\n                    (matChipInputTokenEnd)=\"addChip($event)\" \r\n                    [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                -->\r\n            </mat-chip-list>\r\n        </mat-form-field>\r\n    </p>\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button (click)=\"onNoClick()\">Close</button>\r\n    <button mat-button (click)=\"closeDialog()\">Done</button>\r\n</div>"

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
/* harmony import */ var _material_test_material_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material-test/material-test.component */ "./src/app/material-test/material-test.component.ts");
/* harmony import */ var _print_prescription_print_prescription_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./print-prescription/print-prescription.component */ "./src/app/print-prescription/print-prescription.component.ts");
/* harmony import */ var _print_print_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./print/print.component */ "./src/app/print/print.component.ts");
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
    { path: 'test', component: _material_test_material_test_component__WEBPACK_IMPORTED_MODULE_4__["MaterialTestComponent"] },
    { path: 'printTest', component: _print_prescription_print_prescription_component__WEBPACK_IMPORTED_MODULE_5__["PrintPrescriptionComponent"] },
    { path: 'print', component: _print_print_component__WEBPACK_IMPORTED_MODULE_6__["PrintComponent"] }
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

module.exports = ".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-card {\r\n    max-width: 800px;\r\n    min-width: 50px;\r\n    margin-left: 50px;\r\n    margin-top: 30px;\r\n    width : 100%;\r\n  }\r\n  \r\n  .expansion-margin {\r\n    max-width: 1000px;\r\n    margin-left: 150px;\r\n    margin-top: 30px;\r\n  }\r\n  \r\n  .example-section {\r\n    display: flex;\r\n    align-content: center;\r\n    align-items: center;\r\n    height: 60px;\r\n  }\r\n  \r\n  .example-margin {\r\n    /* margin: 0 10px; */\r\n    margin-top: 20px;\r\n    margin : 5px 10px;\r\n  }\r\n  \r\n  /* .mat-radio-button ~ .mat-radio-button {\r\n    padding: 36px;\r\n  } */\r\n  \r\n  .example-radio-group-column {\r\n    /* display: inline-flex; */\r\n    /* flex-direction: column; */\r\n  }\r\n  \r\n  .example-icon-radio-button {\r\n    margin: 0px;\r\n    padding-left: 27px;\r\n  }\r\n  \r\n  .example-half-width{\r\n    width: 50%;\r\n  }\r\n  \r\n  .icon-male {\r\n    background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 version%3D%221.1%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M9%2C9C10.29%2C9 11.5%2C9.41 12.47%2C10.11L17.58%2C5H13V3H21V11H19V6.41L13.89%2C11.5C14.59%2C12.5 15%2C13.7 15%2C15A6%2C6 0 0%2C1 9%2C21A6%2C6 0 0%2C1 3%2C15A6%2C6 0 0%2C1 9%2C9M9%2C11A4%2C4 0 0%2C0 5%2C15A4%2C4 0 0%2C0 9%2C19A4%2C4 0 0%2C0 13%2C15A4%2C4 0 0%2C0 9%2C11Z%22 %2F%3E%3C%2Fsvg%3E\");\r\n    height: 27px;\r\n    width: 22px;\r\n    display: block;\r\n    /* Other styles here */\r\n}\r\n  \r\n  .icon-female {\r\n  background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 version%3D%221.1%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M12%2C4A6%2C6 0 0%2C1 18%2C10C18%2C12.97 15.84%2C15.44 13%2C15.92V18H15V20H13V22H11V20H9V18H11V15.92C8.16%2C15.44 6%2C12.97 6%2C10A6%2C6 0 0%2C1 12%2C4M12%2C6A4%2C4 0 0%2C0 8%2C10A4%2C4 0 0%2C0 12%2C14A4%2C4 0 0%2C0 16%2C10A4%2C4 0 0%2C0 12%2C6Z%22 %2F%3E%3C%2Fsvg%3E\");\r\n  height: 27px;\r\n  width: 22px;\r\n  display: block;\r\n  /* Other styles here */\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dash\">\r\n  <mat-tab-group  [selectedIndex]=\"dashboardTabControl.value\" \r\n    (selectedIndexChange)=\"dashboardTabControl.setValue($event)\"\r\n    (selectedTabChange)=\"getSelectedTabChange($event)\"\r\n    >\r\n\r\n    <mat-tab label=\"Create Prescription\">\r\n      <div class=\"expansion-margin\">\r\n        <app-create-prescription>Loading...</app-create-prescription>\r\n      </div>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"Add Patient\">\r\n\r\n      <div class=\"expansion-margin\">\r\n\r\n        <!-- Accordian expansion panel -->\r\n        <mat-accordion>\r\n          <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                Basic data\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                Section for name, date of birth, weight, blood group\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n\r\n            <mat-card class=\"example-card\">\r\n              <mat-card-content>\r\n                <table>\r\n                  <tr>\r\n                    <td>\r\n                      <!-- First Name -->\r\n                      <div class=\"example-container example-margin\">\r\n                        <mat-form-field hintLabel=\"Max {{config.first_name_len}} characters\">\r\n                          <input matInput [maxlength]=\"config.first_name_len\" placeholder=\"First name\" [(ngModel)]=\"patient.firstName\" (keyup)='onKeyUp($event)'\r\n                            required>\r\n                          <mat-hint align=\"end\">{{patient.firstName?.length || 0}}/{{config.first_name_len}}</mat-hint>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </td>\r\n                    <td>\r\n                      <!-- Last Name -->\r\n                      <div class=\"example-container example-margin\">\r\n                        <mat-form-field hintLabel=\"Max {{config.last_name_len}} characters\">\r\n                          <input matInput maxlength=15 placeholder=\"Last name\" [(ngModel)]=\"patient.lastName\" required>\r\n                          <mat-hint align=\"end\">{{patient.lastName?.length || 0}}/{{config.last_name_len}}</mat-hint>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </td>\r\n                    <td>\r\n                      <!-- Sex -->\r\n                      <div class=\"example-container example-margin\">\r\n                        <div style=\"display: inline;\">\r\n                          <span>Sex</span>\r\n                          <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"patient.sex\">\r\n                            <span class=\"icon-male\">\r\n                              <mat-radio-button class=\"example-icon-radio-button\" value=\"male\"></mat-radio-button>\r\n                            </span>\r\n                            <span class='icon-female'>\r\n                              <mat-radio-button class=\"example-icon-radio-button\" value=\"female\"></mat-radio-button>\r\n                            </span>\r\n                          </mat-radio-group>\r\n                        </div>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n\r\n                      <!-- </td>\r\n                    <td> -->\r\n                      <!-- DOB -->\r\n                      <div class=\"example-margin\">\r\n                        <span>\r\n                          Date of birth :\r\n                        </span>\r\n                        <mat-form-field>\r\n                          <input matInput [matDatepicker]=\"picker\" placeholder=\"Select from calender\" (dateChange)=\"dateAddEvent('change', $event)\"\r\n                            disabled [formControl]=\"dobDate\">\r\n                          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                          <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </td>\r\n                    <!-- </tr>\r\n                  <tr> -->\r\n                    <td>\r\n\r\n                      <!-- </td>\r\n                    <td> -->\r\n                      <div class=\"example-margin\">\r\n                        <span>\r\n                          Blood Group :\r\n                        </span>\r\n                        <!-- Blood group -->\r\n                        <mat-select class=\"example-half-width\" placeholder=\"Blood group\" [(ngModel)]=\"patient.bloodGroup\" name=\"bloodGroup\">\r\n                          <mat-option *ngFor=\"let bg of bloodGroups\" [value]=\"bg.value\">\r\n                            {{bg.viewValue}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <!-- Height -->\r\n                      <div class=\"example-margin\">\r\n                        <span>\r\n                          Height(cm) :\r\n                        </span>\r\n                        <mat-form-field hintLabel=\"Enter in digits\">\r\n                          <input matInput maxlength=3 placeholder=\"Height\" [(ngModel)]=\"patient.height\" required>\r\n                          <mat-hint align=\"end\">{{patient.height?.length || 0}}/3</mat-hint>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </td>\r\n                    <td>\r\n                      <!-- Weight -->\r\n                      <div class=\"example-margin\">\r\n                        <span>\r\n                          Weight(kg) :\r\n                        </span>\r\n                        <mat-form-field hintLabel=\"Enter in digits\">\r\n                          <input matInput maxlength=3 placeholder=\"Weight\" [(ngModel)]=\"patient.weight\" required>\r\n                          <mat-hint align=\"end\">{{patient.weight?.length || 0}}/3</mat-hint>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </mat-card-content>\r\n            </mat-card>\r\n            <mat-action-row>\r\n              <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n            </mat-action-row>\r\n          </mat-expansion-panel>\r\n\r\n          <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle>\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                Contact data\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                Section for phone number, email and address\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <mat-card class=\"example-card\">\r\n              <mat-card-content>\r\n                <table>\r\n                  <tr>\r\n                    <td>\r\n                      <!-- Contact Number -->\r\n                      <div class=\"example-container example-margin\">\r\n                        <mat-form-field hintLabel=\"Enter in digits\" class=\"example-full-width\">\r\n                          <span matPrefix>+91 &nbsp;</span>\r\n                          <input type=\"tel\" matInput placeholder=\"Contact number\" [(ngModel)]=\"patient.contactNo1\">\r\n                          <mat-icon matSuffix>contact_phone</mat-icon>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </td>\r\n                    <td>\r\n                      <!-- Email address -->\r\n                      <div class=\"example-container example-margin\">\r\n                        <mat-form-field hintLabel=\"Optional email\">\r\n                          <input matInput maxlength=30 placeholder=\"Enter email\" type=\"email\" [(ngModel)]=\"patient.email\">\r\n                          <mat-icon matSuffix>contact_mail</mat-icon>\r\n                          <mat-hint align=\"end\">{{patient.email?.length || 0}}/30</mat-hint>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n\r\n                <!-- Address 1 -->\r\n                <div class=\"example-container example-margin\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <textarea matInput placeholder=\"Address1\" [(ngModel)]=\"patient.address1\" required></textarea>\r\n                    <button mat-button *ngIf=\"patient.address1\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"patient.address1=''\">\r\n                      <mat-icon>close</mat-icon>\r\n                    </button>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <!-- Address 2 -->\r\n                <div class=\"example-container example-margin\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <textarea matInput placeholder=\"Address2\" [(ngModel)]=\"patient.address2\"></textarea>\r\n                    <button mat-button *ngIf=\"patient.address2\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"patient.address2=''\">\r\n                      <mat-icon>close</mat-icon>\r\n                    </button>\r\n                  </mat-form-field>\r\n                </div>\r\n              </mat-card-content>\r\n            </mat-card>\r\n            <!-- <mat-action-row>\r\n              <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n              <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n            </mat-action-row> -->\r\n            <mat-action-row>\r\n              <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n              <button mat-button color=\"primary\" (click)=\"submitPatient()\">Add Patient</button>\r\n            </mat-action-row>\r\n          </mat-expansion-panel>\r\n\r\n          <!-- <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle>\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                Configuration data\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                Optional data\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <span>Discount</span>\r\n            <table>\r\n              <tr>\r\n                <td>\r\n                  <mat-radio-group class=\"example-margin\" [(ngModel)]=\"patient.discountType\">\r\n                    <mat-radio-button value=\"percentage\">Percent</mat-radio-button>\r\n                    <mat-radio-button value=\"flat\">Flat</mat-radio-button>\r\n                  </mat-radio-group>\r\n                </td>\r\n                <td>\r\n                  <div class=\"example-margin\">\r\n                    <mat-form-field hintLabel=\"Enter in digits\">\r\n                      <input matInput maxlength=\"5\" placeholder=\"Discount\" [(ngModel)]=\"patient.discount\">\r\n                      <mat-hint align=\"end\">{{patient.discount?.length || 0}}/5</mat-hint>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n            <mat-action-row>\r\n              <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n              <button mat-button color=\"primary\" (click)=\"submitPatient()\">Add Patient</button>\r\n            </mat-action-row>\r\n          </mat-expansion-panel> -->\r\n\r\n\r\n        </mat-accordion>\r\n\r\n      </div>\r\n    </mat-tab>\r\n\r\n  </mat-tab-group>\r\n</div>"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/models */ "./src/app/models/models.ts");
/* harmony import */ var _services_httpcomm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/httpcomm.service */ "./src/app/services/httpcomm.service.ts");
/* harmony import */ var _services_commonservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/commonservice.service */ "./src/app/services/commonservice.service.ts");
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
    function DashboardComponent(snackBar, httpClient, commonService) {
        this.snackBar = snackBar;
        this.httpClient = httpClient;
        this.commonService = commonService;
        this.dashboardTabControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0); //Dynamically tab selection
        this.dobDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](new Date());
        //Place holder for dynamic field validation
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
        this.patientEmailControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        //Accordian expansion bar control
        this.step = 0;
        this.patient = new _models_models__WEBPACK_IMPORTED_MODULE_4__["Patient"]();
        this.httpService = new _services_httpcomm_service__WEBPACK_IMPORTED_MODULE_5__["HttpcommService"](httpClient);
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
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent.prototype.submitPatient = function () {
        var _this = this;
        // this.nextStep();
        // console.log(this.patient)
        // console.log('DOB',this.dobDate.value)  
        this.httpService.addPatient(this.patient).subscribe(function (resp) {
            if (resp && resp.status == 'SUCCESS') {
                _this.commonService.showSuccessSnackBar(_this.snackBar);
                _this.patient = new _models_models__WEBPACK_IMPORTED_MODULE_4__["Patient"]();
                _this.dashboardTabControl.setValue(0); //Go back to add prescription page
            }
            else {
                _this.commonService.showErrorSnackBar(_this.snackBar, resp.desc);
            }
        });
    };
    DashboardComponent.prototype.onKeyUp = function (event) { };
    DashboardComponent.prototype.getSelectedTabChange = function (event) {
        console.log(event);
    };
    DashboardComponent.prototype.getFocusChange = function (event) {
        console.log(event);
    };
    DashboardComponent.prototype.dateAddEvent = function (type, event) {
        // console.log(`Date value: ${event.value}`)
        var dob = event.value;
        var parsedDate = this.commonService.getParsedDate(dob);
        if (parsedDate && parsedDate.length == 3) {
            this.patient.dobDd = parsedDate[0];
            this.patient.dobMm = parsedDate[1];
            this.patient.dobYy = parsedDate[2];
            this.patient.dobTimestamp = dob.getTime();
        }
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _services_commonservice_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/material-test/material-test.component.css":
/*!***********************************************************!*\
  !*** ./src/app/material-test/material-test.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n  }\r\n  \r\n  tr.example-detail-row {\r\n    height: 0;\r\n  }\r\n  \r\n  tr.example-element-row:not(.example-expanded-row):hover {\r\n    background: #f5f5f5;\r\n  }\r\n  \r\n  tr.example-element-row:not(.example-expanded-row):active {\r\n    background: #efefef;\r\n  }\r\n  \r\n  .example-element-row td {\r\n    border-bottom-width: 0;\r\n  }\r\n  \r\n  .example-element-detail {\r\n    overflow: hidden;\r\n    display: flex;\r\n  }\r\n  \r\n  .example-element-diagram {\r\n    min-width: 80px;\r\n    border: 2px solid black;\r\n    padding: 8px;\r\n    font-weight: lighter;\r\n    margin: 8px 0;\r\n    height: 104px;\r\n  }\r\n  \r\n  .example-element-symbol {\r\n    font-weight: bold;\r\n    font-size: 40px;\r\n    line-height: normal;\r\n  }\r\n  \r\n  .example-element-description {\r\n    padding: 16px;\r\n  }\r\n  \r\n  /* .example-element-description-attribution {\r\n    opacity: 0.5;\r\n  } */\r\n  "

/***/ }),

/***/ "./src/app/material-test/material-test.component.html":
/*!************************************************************!*\
  !*** ./src/app/material-test/material-test.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<table mat-table\n       [dataSource]=\"dataSource\" multiTemplateDataRows\n       class=\"mat-elevation-z8\">\n  <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of columnsToDisplay\">\n    <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\n  </ng-container>\n\n  <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n  <ng-container matColumnDef=\"expandedDetail\">\n    <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\n      <div class=\"example-element-detail\"\n           [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n        <div class=\"example-element-diagram\">\n          <div class=\"example-element-position\"> {{element.position}} </div>\n          <div class=\"example-element-symbol\"> {{element.symbol}} </div>\n          <div class=\"example-element-name\"> {{element.name}} </div>\n          <div class=\"example-element-weight\"> {{element.weight}} </div>\n        </div>\n        <div class=\"example-element-description\">\n          {{element.description}}\n          <p>\n            <!-- <span class=\"example-element-description-attribution\"> -- Wikipedia </span> -->\n            <button mat-raised-button color=\"primary\" (click)=\"selectedElement(expandedElement)\">\n                Select <mat-icon aria-label=\"Example icon-button with a heart icon\">check_circle_outline</mat-icon>\n            </button>\n          </p>\n        </div>\n      </div>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n  <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\n      class=\"example-element-row\"\n      [class.example-expanded-row]=\"expandedElement === element\"\n      (mouseenter)=\"mouseOverFn(element)\"\n      (mouseout)=\"mouseOutFn(expandedElement)\">\n  </tr>\n  <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n</table>\n\n\n<!-- Copyright 2018 Google Inc. All Rights Reserved.\n    Use of this source code is governed by an MIT-style license that\n    can be found in the LICENSE file at http://angular.io/license -->"

/***/ }),

/***/ "./src/app/material-test/material-test.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/material-test/material-test.component.ts ***!
  \**********************************************************/
/*! exports provided: MaterialTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialTestComponent", function() { return MaterialTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialTestComponent = /** @class */ (function () {
    function MaterialTestComponent() {
        this.dataSource = ELEMENT_DATA;
        this.columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
    }
    MaterialTestComponent.prototype.ngOnInit = function () {
    };
    MaterialTestComponent.prototype.mouseOverFn = function (element) {
        console.log("mouse enter called");
        this.expandedElement = element;
    };
    MaterialTestComponent.prototype.mouseOutFn = function (element) {
        console.log("mouse out called");
        // this.expandedElement = null;
    };
    MaterialTestComponent.prototype.selectedElement = function (element) {
        console.log("Selected position " + element.position);
    };
    MaterialTestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-material-test',
            template: __webpack_require__(/*! ./material-test.component.html */ "./src/app/material-test/material-test.component.html"),
            styles: [__webpack_require__(/*! ./material-test.component.css */ "./src/app/material-test/material-test.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px', minHeight: '0', display: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ]
        }),
        __metadata("design:paramtypes", [])
    ], MaterialTestComponent);
    return MaterialTestComponent;
}());

var ELEMENT_DATA = [
    {
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
        description: "Hydrogen is a chemical element with symbol H and atomic number 1. With a standard\n        atomic weight of 1.008, hydrogen is the lightest element on the periodic table."
    }, {
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He',
        description: "Helium is a chemical element with symbol He and atomic number 2. It is a\n        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas\n        group in the periodic table. Its boiling point is the lowest among all the elements."
    }, {
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li',
        description: "Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,\n        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the\n        lightest solid element."
    }, {
        position: 4,
        name: 'Beryllium',
        weight: 9.0122,
        symbol: 'Be',
        description: "Beryllium is a chemical element with symbol Be and atomic number 4. It is a\n        relatively rare element in the universe, usually occurring as a product of the spallation of\n        larger atomic nuclei that have collided with cosmic rays."
    }, {
        position: 5,
        name: 'Boron',
        weight: 10.811,
        symbol: 'B',
        description: "Boron is a chemical element with symbol B and atomic number 5. Produced entirely\n        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a\n        low-abundance element in the Solar system and in the Earth's crust."
    }, {
        position: 6,
        name: 'Carbon',
        weight: 12.0107,
        symbol: 'C',
        description: "Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic\n        and tetravalent\u2014making four electrons available to form covalent chemical bonds. It belongs\n        to group 14 of the periodic table."
    }, {
        position: 7,
        name: 'Nitrogen',
        weight: 14.0067,
        symbol: 'N',
        description: "Nitrogen is a chemical element with symbol N and atomic number 7. It was first\n        discovered and isolated by Scottish physician Daniel Rutherford in 1772."
    }, {
        position: 8,
        name: 'Oxygen',
        weight: 15.9994,
        symbol: 'O',
        description: "Oxygen is a chemical element with symbol O and atomic number 8. It is a member of\n         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing\n         agent that readily forms oxides with most elements as well as with other compounds."
    }, {
        position: 9,
        name: 'Fluorine',
        weight: 18.9984,
        symbol: 'F',
        description: "Fluorine is a chemical element with symbol F and atomic number 9. It is the\n        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard\n        conditions."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    },
];


/***/ }),

/***/ "./src/app/models/models.ts":
/*!**********************************!*\
  !*** ./src/app/models/models.ts ***!
  \**********************************/
/*! exports provided: Response, ClinicalFindingView, MedicalMaster, Patient, PrescriptionHistoryView, ToothQuadrentView, TreatmentPlan, MedicineView, FeesBreakupView, FeeConfigView, FeeConfigRequestListView, MedicalHistoryView, MedicineHistoryView, TreatmentPlanHistoryView, TreatmentPlanStatus, DashboardView, DashboardResponse, CompositDialogBoxData, ClinicalFindingToothMapping, PrescriptionPrintView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalFindingView", function() { return ClinicalFindingView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalMaster", function() { return MedicalMaster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Patient", function() { return Patient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrescriptionHistoryView", function() { return PrescriptionHistoryView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToothQuadrentView", function() { return ToothQuadrentView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatmentPlan", function() { return TreatmentPlan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicineView", function() { return MedicineView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeesBreakupView", function() { return FeesBreakupView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeConfigView", function() { return FeeConfigView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeConfigRequestListView", function() { return FeeConfigRequestListView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalHistoryView", function() { return MedicalHistoryView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicineHistoryView", function() { return MedicineHistoryView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatmentPlanHistoryView", function() { return TreatmentPlanHistoryView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatmentPlanStatus", function() { return TreatmentPlanStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardView", function() { return DashboardView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardResponse", function() { return DashboardResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompositDialogBoxData", function() { return CompositDialogBoxData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalFindingToothMapping", function() { return ClinicalFindingToothMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrescriptionPrintView", function() { return PrescriptionPrintView; });
var Response = /** @class */ (function () {
    function Response() {
    }
    return Response;
}());

;
var ClinicalFindingView = /** @class */ (function () {
    function ClinicalFindingView() {
    }
    return ClinicalFindingView;
}());

;
var MedicalMaster = /** @class */ (function () {
    function MedicalMaster() {
    }
    return MedicalMaster;
}());

;
var Patient = /** @class */ (function () {
    function Patient() {
    }
    return Patient;
}());

;
;
var PrescriptionHistoryView = /** @class */ (function () {
    function PrescriptionHistoryView() {
    }
    return PrescriptionHistoryView;
}());

;
var ToothQuadrentView = /** @class */ (function () {
    function ToothQuadrentView() {
        this.selected = false;
    }
    return ToothQuadrentView;
}());

;
var TreatmentPlan = /** @class */ (function () {
    function TreatmentPlan() {
    }
    return TreatmentPlan;
}());

;
var MedicineView = /** @class */ (function () {
    function MedicineView() {
    }
    return MedicineView;
}());

;
var FeesBreakupView = /** @class */ (function () {
    function FeesBreakupView() {
        this.amountPaid = 0;
    }
    return FeesBreakupView;
}());

;
var FeeConfigView = /** @class */ (function () {
    function FeeConfigView() {
        this.amountPaid = 0;
    }
    return FeeConfigView;
}());

var FeeConfigRequestListView = /** @class */ (function () {
    function FeeConfigRequestListView() {
    }
    return FeeConfigRequestListView;
}());

var MedicalHistoryView = /** @class */ (function () {
    function MedicalHistoryView() {
    }
    return MedicalHistoryView;
}());

var MedicineHistoryView = /** @class */ (function () {
    function MedicineHistoryView() {
    }
    return MedicineHistoryView;
}());

var TreatmentPlanHistoryView = /** @class */ (function () {
    function TreatmentPlanHistoryView() {
        this.status = TreatmentPlanStatus.PENDING;
    }
    return TreatmentPlanHistoryView;
}());

var TreatmentPlanStatus;
(function (TreatmentPlanStatus) {
    TreatmentPlanStatus["COMPLETED"] = "Completed";
    TreatmentPlanStatus["PENDING"] = "Pending";
})(TreatmentPlanStatus || (TreatmentPlanStatus = {}));
var DashboardView = /** @class */ (function () {
    function DashboardView() {
    }
    return DashboardView;
}());

var DashboardResponse = /** @class */ (function () {
    function DashboardResponse() {
    }
    return DashboardResponse;
}());

var CompositDialogBoxData = /** @class */ (function () {
    function CompositDialogBoxData() {
    }
    return CompositDialogBoxData;
}());

var ClinicalFindingToothMapping = /** @class */ (function () {
    function ClinicalFindingToothMapping() {
        this.customTrtmntPlan = false;
        this.treatmentPlanViewModel = '';
    }
    return ClinicalFindingToothMapping;
}());

var PrescriptionPrintView = /** @class */ (function () {
    function PrescriptionPrintView() {
    }
    return PrescriptionPrintView;
}());



/***/ }),

/***/ "./src/app/print-prescription/print-prescription.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/print-prescription/print-prescription.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*  ------ Global settings */\r\n\r\n* {\r\n    font-family: Cambria, Georgia, serif;\r\n    background-color: #ffffe0;\r\n    }\r\n\r\nbody {\r\n    text-align:justify;\r\n    counter-reset: chapter;\r\n    }\r\n\r\n/* ------- Pagination */\r\n\r\nh1, h2 {\r\n  page-break-after: avoid;\r\n  page-break-before: always;\r\n}\r\n\r\np {\r\n    orphans:3;\r\n    widows:3;\r\n}\r\n\r\n/* Default left, right, top, bottom margin is 2cm */\r\n\r\n@page { margin: 2cm }\r\n\r\n/* First page, 10 cm margin on top */\r\n\r\n@page :first {\r\nmargin-top: 10cm \r\n}\r\n\r\n/* Left pages, a wider margin on the left */\r\n\r\n@page :left {\r\nmargin-left: 3cm;\r\nmargin-right: 2cm;\r\n}\r\n\r\n@page :right {\r\nmargin-left: 2cm;\r\nmargin-right: 3cm;\r\n}\r\n\r\n/* ------ Normal elements */\r\n\r\np { \r\n    text-indent:   1.5em;\r\n    margin-top:    .75em;\r\n    margin-bottom: .75em;\r\n    line-height: 1.3;\r\n    }\r\n\r\n/* First paragraphs after a title  */\r\n\r\nh2+p {\r\n    text-indent: 0em;\r\n    }\r\n\r\nh2+p:first-letter {\r\n    font-size: 200%;\r\n    color: blue;\r\n    font-family: \"Goudy Old Style\", Georgia, serif;\r\n    line-height: 50%;\r\n    }\r\n\r\nh1,h2,h3,h4,h5,h6 { \r\n    text-align: center; \r\n    letter-spacing: 0.1em;\r\n    }\r\n\r\nh1 {\r\n    margin-top: 3cm;\r\n    }\r\n\r\nh2 {\r\n    border-top: 5px solid blue;\r\n    border-bottom: 1px solid blue;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    margin-top: 2cm;\r\n    counter-increment: chapter;\r\n    }\r\n\r\nh2:before {\r\n    content: \"Chapter \" counter(chapter) \": \";\r\n    }\r\n\r\nhr { \r\n    width: 50%;\r\n    text-align: center;\r\n    }\r\n\r\nstrong { \r\n    background-color: yellow;\r\n    font-style: normal;\r\n}\r\n\r\nblockquote {\r\n    font-size: 90%; \r\n    margin-left: 20%; \r\n    margin-right: 20%;\r\n    }\r\n\r\n/*  ------ Special sections, using CSS class identifiers */\r\n\r\n.toc  {\r\n    text-align:center;\r\n    margin-top: 2cm;\r\n    margin-bottom: 2cm;\r\n    }\r\n\r\n.toc p:first-letter {font-size: 100%;}\r\n\r\npre { \r\n    font-family: \"Comic Sans\", fantasy, serif;\r\n    font-style: italic; \r\n    margin-left: 20%;\r\n    }\r\n\r\np.fineprint {\r\n    font-size: 70%;\r\n    text-indent: 0em;\r\n    }\r\n\r\npre.copyright, .noprint {\r\n   display:none;\r\n}\r\n\r\np.heading {\r\n    font-size: x-large;\r\n    text-align: center; \r\n    }\r\n"

/***/ }),

/***/ "./src/app/print-prescription/print-prescription.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/print-prescription/print-prescription.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Learn graphics from https://www.w3schools.com/graphics/canvas_drawing.asp -->\n\n<div id=\"printableContent\">\n  <p class=\"fineprint\">\n    This text is a reformatted version of the The Project Gutenberg EBook <a href=\"http://www.gutenberg.org/2/7/8/2781/\">Just\n      So Stories</a>. It's purpose is to demonstrate some CSS technology as documented in <a href=\"http://edutechwiki.unige.ch/en/CSS_text_styling_tutorial\">CSS\n      text styling tutorial</a>. Copyright information is included at the bottom. DKS/nov 2011.\n  </p>\n\n\n  <h1>JUST SO STORIES</h1>\n\n  <p class=\"heading\">By Rudyard Kipling</p>\n\n\n  <div class=\"toc\">\n\n    <p class=\"heading\">Contents</p>\n\n    <p><a href=\"#2H_4_0001\">HOW THE WHALE GOT HIS THROAT</a></p>\n    <p><a href=\"#2H_4_0002\">HOW THE CAMEL GOT HIS HUMP</a></p>\n    <p><a href=\"#2H_4_0003\">HOW THE RHINOCEROS GOT HIS SKIN</a></p>\n    <p><a href=\"#2H_4_0004\">HOW THE LEOPARD GOT HIS SPOTS</a></p>\n    <p><a href=\"#2H_4_0005\">THE ELEPHANT'S CHILD</a></p>\n    <p><a href=\"#2H_4_0006\">THE SING-SONG OF OLD MAN KANGAROO</a></p>\n    <p><a href=\"#2H_4_0007\">THE BEGINNING OF THE ARMADILLOS</a></p>\n    <p><a href=\"#2H_4_0008\">HOW THE FIRST LETTER WAS WRITTEN</a></p>\n    <p><a href=\"#2H_4_0009\">HOW THE ALPHABET WAS MADE</a></p>\n    <p><a href=\"#2H_4_0010\">THE CRAB THAT PLAYED WITH THE SEA</a></p>\n    <p><a href=\"#2H_4_0011\">THE CAT THAT WALKED BY HIMSELF</a></p>\n    <p><a href=\"#2H_4_0012\">THE BUTTERFLY THAT STAMPED</a></p>\n    <p class=\"noprint\"><a href=\"#copyright\">Copyright information</a></p>\n\n  </div>\n\n  <a name=\"2H_4_0001\">\n  </a>\n  <h2>HOW THE WHALE GOT HIS THROAT</h2>\n  <p>\n    In the sea, once upon a time, O my Best Beloved, there was a Whale, and\n    he ate fishes. He ate the starfish and the garfish, and the crab and the\n    dab, and the plaice and the dace, and the skate and his mate, and the\n    mackereel and the pickereel, and the really truly twirly-whirly eel. All\n    the fishes he could find in all the sea he ate with his mouth&#8212;so! Till\n    at last there was only one small fish left in all the sea, and he was a\n    small 'Stute Fish, and he swam a little behind the Whale's right ear,\n    so as to be out of harm's way. Then the Whale stood up on his tail and\n    said, 'I'm hungry.' And the small 'Stute Fish said in a small 'stute\n    voice, 'Noble and generous Cetacean, have you ever tasted Man?'\n  </p>\n  <p>\n    'No,' said the Whale. 'What is it like?'\n  </p>\n  <p>\n    'Nice,' said the small 'Stute Fish. 'Nice but nubbly.'\n  </p>\n  <p>\n    'Then fetch me some,' said the Whale, and he made the sea froth up with\n    his tail.\n  </p>\n  <p>\n    'One at a time is enough,' said the 'Stute Fish. 'If you swim to\n    latitude Fifty North, longitude Forty West (that is magic), you will\n    find, sitting <i>on</i> a raft, <i>in</i> the middle of the sea, with nothing on\n    but a pair of blue canvas breeches, a pair of suspenders (you must <i>not</i>\n    forget the suspenders, Best Beloved), and a jack-knife, one\n    ship-wrecked Mariner, who, it is only fair to tell you, is a man of\n    infinite-resource-and-sagacity.'\n  </p>\n  <p>\n    So the Whale swam and swam to latitude Fifty North, longitude Forty\n    West, as fast as he could swim, and <i>on</i> a raft, <i>in</i> the middle of the\n    sea, <i>with</i> nothing to wear except a pair of blue canvas breeches, a\n    pair of suspenders (you must particularly remember the suspenders, Best\n    Beloved), <i>and</i> a jack-knife, he found one single, solitary shipwrecked\n    Mariner, trailing his toes in the water. (He had his mummy's leave to\n    paddle, or else he would never have done it, because he was a man of\n    infinite-resource-and-sagacity.)\n  </p>\n  <p>\n    Then the Whale opened his mouth back and back and back till it nearly\n    touched his tail, and he swallowed the shipwrecked Mariner, and the\n    raft he was sitting on, and his blue canvas breeches, and the suspenders\n    (which you <i>must</i> not forget), <i>and</i> the jack-knife&#8212;He swallowed them\n    all down into his warm, dark, inside cup-boards, and then he smacked his\n    lips&#8212;so, and turned round three times on his tail.\n  </p>\n  <p>\n    But as soon as the Mariner, who was a man of\n    infinite-resource-and-sagacity, found himself truly inside the Whale's\n    warm, dark, inside cup-boards, he stumped and he jumped and he thumped\n    and he bumped, and he pranced and he danced, and he banged and he\n    clanged, and he hit and he bit, and he leaped and he creeped, and he\n    prowled and he howled, and he hopped and he dropped, and he cried and he\n    sighed, and he crawled and he bawled, and he stepped and he lepped, and\n    he danced hornpipes where he shouldn't, and the Whale felt most unhappy\n    indeed. (<i>Have</i> you forgotten the suspenders?)\n  </p>\n  <p>\n    So he said to the 'Stute Fish, 'This man is very nubbly, and besides he\n    is making me hiccough. What shall I do?'\n  </p>\n  <p>\n    'Tell him to come out,' said the 'Stute Fish.\n  </p>\n  <p>\n    So the Whale called down his own throat to the shipwrecked Mariner,\n    'Come out and behave yourself. I've got the hiccoughs.'\n  </p>\n  <p>\n    'Nay, nay!' said the Mariner. 'Not so, but far otherwise. Take me to my\n    natal-shore and the white-cliffs-of-Albion, and I'll think about it.'\n    And he began to dance more than ever.\n  </p>\n  <pre>\n'You had better take him home,' said the 'Stute Fish to the Whale.\n'I ought to have warned you that he is a man of infinite-resource-and-sagacity.'\n</pre>\n  <p>\n    So the Whale swam and swam and swam, with both flippers and his tail,\n    as hard as he could for the hiccoughs; and at last he saw the Mariner's\n    natal-shore and the white-cliffs-of-Albion, and he rushed half-way\n    up the beach, and opened his mouth wide and wide and wide, and said,\n    'Change here for Winchester, Ashuelot, Nashua, Keene, and stations on\n    the <i>Fitch</i>burg Road;' and just as he said 'Fitch' the Mariner walked\n    out of his mouth. But while the Whale had been swimming, the Mariner,\n    who was indeed a person of infinite-resource-and-sagacity, had taken his\n    jack-knife and cut up the raft into a little square grating all running\n    criss-cross, and he had tied it firm with his suspenders (<i>now</i>, you\n    know why you were not to forget the suspenders!), and he dragged that\n    grating good and tight into the Whale's throat, and there it stuck! Then\n    he recited the following <i>Sloka</i>, which, as you have not heard it, I\n    will now proceed to relate&#8212;\n  </p>\n  <pre>\nBy means of a grating\nI have stopped your ating.\n</pre>\n  <p>\n    For the Mariner he was also an Hi-ber-ni-an. And he stepped out on the\n    shingle, and went home to his mother, who had given him leave to trail\n    his toes in the water; and he married and lived happily ever afterward.\n    So did the Whale. But from that day on, the grating in his throat,\n    which he could neither cough up nor swallow down, prevented him eating\n    anything except very, very small fish; and that is the reason why whales\n    nowadays never eat men or boys or little girls.\n  </p>\n  <p>\n    The small 'Stute Fish went and hid himself in the mud under the\n    Door-sills of the Equator. He was afraid that the Whale might be angry\n    with him.\n  </p>\n  <p>\n    The Sailor took the jack-knife home. He was wearing the blue canvas\n    breeches when he walked out on the shingle. The suspenders were left\n    behind, you see, to tie the grating with; and that is the end of <i>that</i>\n    tale.\n  </p>\n  <pre>\n     WHEN the cabin port-holes are dark and green\n     Because of the seas outside;\n     When the ship goes <i>wop</i> (with a wiggle between)\n     And the steward falls into the soup-tureen,\n     And the trunks begin to slide;\n     When Nursey lies on the floor in a heap,\n     And Mummy tells you to let her sleep,\n     And you aren't waked or washed or dressed,\n     Why, then you will know (if you haven't guessed)\n     You're 'Fifty North and Forty West!'\n</pre>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  <!-- <a name=\"2H_4_0002\"></a>\n  <h2>HOW THE CAMEL GOT HIS HUMP</h2>\n  <p>Now this is the next tale, and <strong>it tells how the Camel got his big hump</strong>.</p>\n  <p>\n    In the beginning of years, when the world was so new and all, and the\n    Animals were just beginning to work for Man, there was a Camel, and he\n    lived in the middle of a Howling Desert because he did not want to work;\n    and besides, he was a Howler himself. So he ate sticks and thorns and\n    tamarisks and milkweed and prickles, most 'scruciating idle; and when\n    anybody spoke to him he said 'Humph!' Just 'Humph!' and no more.\n  </p>\n  <p>\n    Presently the Horse came to him on Monday morning, with a saddle on his\n    back and a bit in his mouth, and said, 'Camel, O Camel, come out and\n    trot like the rest of us.'\n  </p>\n  <p>\n    'Humph!' said the Camel; and the Horse went away and told the Man.\n  </p>\n  <p>\n    Presently the Dog came to him, with a stick in his mouth, and said,\n    'Camel, O Camel, come and fetch and carry like the rest of us.'\n  </p>\n  <p>\n    'Humph!' said the Camel; and the Dog went away and told the Man.\n  </p>\n  <p>\n    Presently the Ox came to him, with the yoke on his neck and said,\n    'Camel, O Camel, come and plough like the rest of us.'\n  </p>\n  <p>\n    'Humph!' said the Camel; and the Ox went away and told the Man.\n  </p>\n  <p>\n    At the end of the day the Man called the Horse and the Dog and the Ox\n    together, and said, 'Three, O Three, I'm very sorry for you (with the\n    world so new-and-all); but that Humph-thing in the Desert can't work,\n    or he would have been here by now, so I am going to leave him alone, and\n    you must work double-time to make up for it.'\n  </p>\n  <p>\n    That made the Three very angry (with the world so new-and-all), and they\n    held a palaver, and an <i>indaba</i>, and a <i>punchayet</i>, and a pow-wow on\n    the edge of the Desert; and the Camel came chewing on milkweed <i>most</i>\n    'scruciating idle, and laughed at them. Then he said 'Humph!' and went\n    away again.\n  </p>\n  <p>\n    Presently there came along the Djinn in charge of All Deserts, rolling\n    in a cloud of dust (Djinns always travel that way because it is Magic),\n    and he stopped to palaver and pow-pow with the Three.\n  </p>\n  <p>\n    'Djinn of All Deserts,' said the Horse, 'is it right for any one to be\n    idle, with the world so new-and-all?'\n  </p>\n  <p>\n    'Certainly not,' said the Djinn.\n  </p>\n  <p>\n    'Well,' said the Horse, 'there's a thing in the middle of your Howling\n    Desert (and he's a Howler himself) with a long neck and long legs, and\n    he hasn't done a stroke of work since Monday morning. He won't trot.'\n  </p>\n  <p>\n    'Whew!' said the Djinn, whistling, 'that's my Camel, for all the gold in\n    Arabia! What does he say about it?'\n  </p>\n  <p>\n    'He says \"Humph!\"' said the Dog; 'and he won't fetch and carry.'\n  </p>\n  <p>\n    'Does he say anything else?'\n  </p>\n  <p>\n    'Only \"Humph!\"; and he won't plough,' said the Ox.\n  </p>\n  <p>\n    'Very good,' said the Djinn. 'I'll humph him if you will kindly wait a\n    minute.'\n  </p>\n  <p>\n    The Djinn rolled himself up in his dust-cloak, and took a bearing across\n    the desert, and found the Camel most 'scruciatingly idle, looking at his\n    own reflection in a pool of water.\n  </p>\n  <p>\n    'My long and bubbling friend,' said the Djinn, 'what's this I hear of\n    your doing no work, with the world so new-and-all?'\n  </p>\n  <p>\n    'Humph!' said the Camel.\n  </p>\n  <p>\n    The Djinn sat down, with his chin in his hand, and began to think a\n    Great Magic, while the Camel looked at his own reflection in the pool of\n    water.\n  </p>\n  <p>\n    'You've given the Three extra work ever since Monday morning, all on\n    account of your 'scruciating idleness,' said the Djinn; and he went on\n    thinking Magics, with his chin in his hand.\n  </p>\n  <p>\n    'Humph!' said the Camel.\n  </p>\n  <p>\n    'I shouldn't say that again if I were you,' said the Djinn; you might\n    say it once too often. Bubbles, I want you to work.'\n  </p>\n  <p>\n    And the Camel said 'Humph!' again; but no sooner had he said it than he\n    saw his back, that he was so proud of, puffing up and puffing up into a\n    great big lolloping humph.\n  </p>\n  <p>\n    'Do you see that?' said the Djinn. 'That's your very own humph that\n    you've brought upon your very own self by not working. To-day is\n    Thursday, and you've done no work since Monday, when the work began. Now\n    you are going to work.'\n  </p>\n  <p>\n    'How can I,' said the Camel, 'with this humph on my back?'\n  </p>\n  <p>\n    'That's made a-purpose,' said the Djinn, 'all because you missed those\n    three days. You will be able to work now for three days without eating,\n    because you can live on your humph; and don't you ever say I never\n    did anything for you. Come out of the Desert and go to the Three, and\n    behave. Humph yourself!'\n  </p>\n  <p>\n    And the Camel humphed himself, humph and all, and went away to join the\n    Three. And from that day to this the Camel always wears a humph (we call\n    it 'hump' now, not to hurt his feelings); but he has never yet caught up\n    with the three days that he missed at the beginning of the world, and he\n    has never yet learned how to behave.\n  </p>\n  <pre>     THE Camel's hump is an ugly lump\n       Which well you may see at the Zoo;\n     But uglier yet is the hump we get\n       From having too little to do.\n\n     Kiddies and grown-ups too-oo-oo,\n     If we haven't enough to do-oo-oo,\n         We get the hump&#8212;\n         Cameelious hump&#8212;\n     The hump that is black and blue!\n\n     We climb out of bed with a frouzly head\n       And a snarly-yarly voice.\n     We shiver and scowl and we grunt and we growl\n       At our bath and our boots and our toys;\n\n     And there ought to be a corner for me\n     (And I know there is one for you)\n         When we get the hump&#8212;\n         Cameelious hump&#8212;\n     The hump that is black and blue!\n\n     The cure for this ill is not to sit still,\n       Or frowst with a book by the fire;\n     But to take a large hoe and a shovel also,\n       And dig till you gently perspire;\n\n     And then you will find that the sun and the wind.\n     And the Djinn of the Garden too,\n         Have lifted the hump&#8212;\n         The horrible hump&#8212;\n     The hump that is black and blue!\n\n     I get it as well as you-oo-oo&#8212;\n     If I haven't enough to do-oo-oo&#8212;\n         We all get hump&#8212;\n         Cameelious hump&#8212;\n     Kiddies and grown-ups too!\n</pre>\n\n  <a name=\"2H_4_0003\">\n  </a>\n  <h2>HOW THE RHINOCEROS GOT HIS SKIN</h2>\n  <p>\n    Once upon a time, on an uninhabited island on the shores of the Red Sea,\n    there lived a Parsee from whose hat the rays of the sun were reflected\n    in more-than-oriental splendour. And the Parsee lived by the Red Sea\n    with nothing but his hat and his knife and a cooking-stove of the kind\n    that you must particularly never touch. And one day he took flour and\n    water and currants and plums and sugar and things, and made himself one\n    cake which was two feet across and three feet thick. It was indeed a\n    Superior Comestible (that's magic), and he put it on stove because he\n    was allowed to cook on the stove, and he baked it and he baked it till\n    it was all done brown and smelt most sentimental. But just as he\n    was going to eat it there came down to the beach from the Altogether\n    Uninhabited Interior one Rhinoceros with a horn on his nose, two piggy\n    eyes, and few manners. In those days the Rhinoceros's skin fitted him\n    quite tight. There were no wrinkles in it anywhere. He looked exactly\n    like a Noah's Ark Rhinoceros, but of course much bigger. All the same,\n    he had no manners then, and he has no manners now, and he never will\n    have any manners. He said, 'How!' and the Parsee left that cake and\n    climbed to the top of a palm tree with nothing on but his hat, from\n    which the rays of the sun were always reflected in more-than-oriental\n    splendour. And the Rhinoceros upset the oil-stove with his nose, and\n    the cake rolled on the sand, and he spiked that cake on the horn of his\n    nose, and he ate it, and he went away, waving his tail, to the desolate\n    and Exclusively Uninhabited Interior which abuts on the islands of\n    Mazanderan, Socotra, and Promontories of the Larger Equinox. Then the\n    Parsee came down from his palm-tree and put the stove on its legs and\n    recited the following Sloka, which, as you have not heard, I will now\n    proceed to relate:&#8212;\n  </p>\n  <pre>  Them that takes cakes\n  Which the Parsee-man bakes\n  Makes dreadful mistakes.\n</pre>\n  <p>\n    And there was a great deal more in that than you would think.\n  </p>\n  <p>\n    Because, five weeks later, there was a heat wave in the Red Sea, and\n    everybody took off all the clothes they had. The Parsee took off his\n    hat; but the Rhinoceros took off his skin and carried it over his\n    shoulder as he came down to the beach to bathe. In those days it\n    buttoned underneath with three buttons and looked like a waterproof. He\n    said nothing whatever about the Parsee's cake, because he had eaten\n    it all; and he never had any manners, then, since, or henceforward.\n    He waddled straight into the water and blew bubbles through his nose,\n    leaving his skin on the beach.\n  </p>\n  <p>\n    Presently the Parsee came by and found the skin, and he smiled one smile\n    that ran all round his face two times. Then he danced three times round\n    the skin and rubbed his hands. Then he went to his camp and filled his\n    hat with cake-crumbs, for the Parsee never ate anything but cake, and\n    never swept out his camp. He took that skin, and he shook that skin, and\n    he scrubbed that skin, and he rubbed that skin just as full of old,\n    dry, stale, tickly cake-crumbs and some burned currants as ever it could\n    possibly hold. Then he climbed to the top of his palm-tree and waited\n    for the Rhinoceros to come out of the water and put it on.\n  </p>\n  <p>\n    And the Rhinoceros did. He buttoned it up with the three buttons, and\n    it tickled like cake crumbs in bed. Then he wanted to scratch, but that\n    made it worse; and then he lay down on the sands and rolled and rolled\n    and rolled, and every time he rolled the cake crumbs tickled him worse\n    and worse and worse. Then he ran to the palm-tree and rubbed and rubbed\n    and rubbed himself against it. He rubbed so much and so hard that he\n    rubbed his skin into a great fold over his shoulders, and another fold\n    underneath, where the buttons used to be (but he rubbed the buttons\n    off), and he rubbed some more folds over his legs. And it spoiled his\n    temper, but it didn't make the least difference to the cake-crumbs.\n    They were inside his skin and they tickled. So he went home, very angry\n    indeed and horribly scratchy; and from that day to this every rhinoceros\n    has great folds in his skin and a very bad temper, all on account of the\n    cake-crumbs inside.\n  </p>\n  <p>\n    But the Parsee came down from his palm-tree, wearing his hat, from which\n    the rays of the sun were reflected in more-than-oriental splendour,\n    packed up his cooking-stove, and went away in the direction of Orotavo,\n    Amygdala, the Upland Meadows of Anantarivo, and the Marshes of Sonaput.\n  </p>\n  <pre>     THIS Uninhabited Island\n       Is off Cape Gardafui,\n     By the Beaches of Socotra\n       And the Pink Arabian Sea:\n     But it's hot&#8212;too hot from Suez\n       For the likes of you and me\n         Ever to go\n         In a P. and O.\n     And call on the Cake-Parsee!\n</pre>\n  <a name=\"2H_4_0004\">\n  </a>\n  <h2>HOW THE LEOPARD GOT HIS SPOTS</h2>\n  <p>\n    In the days when everybody started fair, Best Beloved, the Leopard lived\n    in a place called the High Veldt. 'Member it wasn't the Low Veldt, or\n    the Bush Veldt, or the Sour Veldt, but the 'sclusively bare, hot, shiny\n    High Veldt, where there was sand and sandy-coloured rock and 'sclusively\n    tufts of sandy-yellowish grass. The Giraffe and the Zebra and the Eland\n    and the Koodoo and the Hartebeest lived there; and they were 'sclusively\n    sandy-yellow-brownish all over; but the Leopard, he was the 'sclusivest\n    sandiest-yellowish-brownest of them all&#8212;a greyish-yellowish\n    catty-shaped kind of beast, and he matched the 'sclusively\n    yellowish-greyish-brownish colour of the High Veldt to one hair. This\n    was very bad for the Giraffe and the Zebra and the rest of them; for\n    he would lie down by a 'sclusively yellowish-greyish-brownish stone or\n    clump of grass, and when the Giraffe or the Zebra or the Eland or the\n    Koodoo or the Bush-Buck or the Bonte-Buck came by he would surprise them\n    out of their jumpsome lives. He would indeed! And, also, there was an\n    Ethiopian with bows and arrows (a 'sclusively greyish-brownish-yellowish\n    man he was then), who lived on the High Veldt with the Leopard; and the\n    two used to hunt together&#8212;the Ethiopian with his bows and arrows, and\n    the Leopard 'sclusively with his teeth and claws&#8212;till the Giraffe and\n    the Eland and the Koodoo and the Quagga and all the rest of them didn't\n    know which way to jump, Best Beloved. They didn't indeed!\n  </p>\n  <p>\n    After a long time&#8212;things lived for ever so long in those days&#8212;they\n    learned to avoid anything that looked like a Leopard or an Ethiopian;\n    and bit by bit&#8212;the Giraffe began it, because his legs were the\n    longest&#8212;they went away from the High Veldt. They scuttled for days\n    and days and days till they came to a great forest, 'sclusively full of\n    trees and bushes and stripy, speckly, patchy-blatchy shadows, and there\n    they hid: and after another long time, what with standing half in the\n    shade and half out of it, and what with the slippery-slidy shadows of\n    the trees falling on them, the Giraffe grew blotchy, and the Zebra grew\n    stripy, and the Eland and the Koodoo grew darker, with little wavy grey\n    lines on their backs like bark on a tree trunk; and so, though you could\n    hear them and smell them, you could very seldom see them, and then only\n    when you knew precisely where to look. They had a beautiful time in the\n    'sclusively speckly-spickly shadows of the forest, while the Leopard and\n    the Ethiopian ran about over the 'sclusively greyish-yellowish-reddish\n    High Veldt outside, wondering where all their breakfasts and their\n    dinners and their teas had gone. At last they were so hungry that they\n    ate rats and beetles and rock-rabbits, the Leopard and the Ethiopian,\n    and then they had the Big Tummy-ache, both together; and then they met\n    Baviaan&#8212;the dog-headed, barking Baboon, who is Quite the Wisest Animal\n    in All South Africa.\n  </p>\n  <p>\n    Said Leopard to Baviaan (and it was a very hot day), 'Where has all the\n    game gone?'\n  </p>\n  <p>\n    And Baviaan winked. He knew.\n  </p>\n  <p>\n    Said the Ethiopian to Baviaan, 'Can you tell me the present habitat\n    of the aboriginal Fauna?' (That meant just the same thing, but the\n    Ethiopian always used long words. He was a grown-up.)\n  </p>\n  <p>\n    And Baviaan winked. He knew.\n  </p>\n  <p>\n    Then said Baviaan, 'The game has gone into other spots; and my advice to\n    you, Leopard, is to go into other spots as soon as you can.'\n  </p>\n  <p>\n    And the Ethiopian said, 'That is all very fine, but I wish to know\n    whither the aboriginal Fauna has migrated.'\n  </p>\n  <p>\n    Then said Baviaan, 'The aboriginal Fauna has joined the aboriginal Flora\n    because it was high time for a change; and my advice to you, Ethiopian,\n    is to change as soon as you can.'\n  </p>\n  <p>\n    That puzzled the Leopard and the Ethiopian, but they set off to look for\n    the aboriginal Flora, and presently, after ever so many days, they saw\n    a great, high, tall forest full of tree trunks all 'sclusively speckled\n    and sprottled and spottled, dotted and splashed and slashed and hatched\n    and cross-hatched with shadows. (Say that quickly aloud, and you will\n    see how very shadowy the forest must have been.)\n  </p>\n  <p>\n    'What is this,' said the Leopard, 'that is so 'sclusively dark, and yet\n    so full of little pieces of light?'\n  </p>\n  <p>\n    'I don't know, said the Ethiopian, 'but it ought to be the aboriginal\n    Flora. I can smell Giraffe, and I can hear Giraffe, but I can't see\n    Giraffe.'\n  </p>\n  <p>\n    'That's curious,' said the Leopard. 'I suppose it is because we have\n    just come in out of the sunshine. I can smell Zebra, and I can hear\n    Zebra, but I can't see Zebra.'\n  </p>\n  <p>\n    'Wait a bit, said the Ethiopian. 'It's a long time since we've hunted\n    'em. Perhaps we've forgotten what they were like.'\n  </p>\n  <p>\n    'Fiddle!' said the Leopard. 'I remember them perfectly on the High\n    Veldt, especially their marrow-bones. Giraffe is about seventeen feet\n    high, of a 'sclusively fulvous golden-yellow from head to heel; and\n    Zebra is about four and a half feet high, of a'sclusively grey-fawn\n    colour from head to heel.'\n  </p>\n  <p>\n    'Umm, said the Ethiopian, looking into the speckly-spickly shadows of\n    the aboriginal Flora-forest. 'Then they ought to show up in this dark\n    place like ripe bananas in a smokehouse.'\n  </p>\n  <p>\n    But they didn't. The Leopard and the Ethiopian hunted all day; and\n    though they could smell them and hear them, they never saw one of them.\n  </p>\n  <p>\n    'For goodness' sake,' said the Leopard at tea-time, 'let us wait till it\n    gets dark. This daylight hunting is a perfect scandal.'\n  </p>\n  <p>\n    So they waited till dark, and then the Leopard heard something breathing\n    sniffily in the starlight that fell all stripy through the branches, and\n    he jumped at the noise, and it smelt like Zebra, and it felt like Zebra,\n    and when he knocked it down it kicked like Zebra, but he couldn't see\n    it. So he said, 'Be quiet, O you person without any form. I am going to\n    sit on your head till morning, because there is something about you that\n    I don't understand.'\n  </p>\n  <p>\n    Presently he heard a grunt and a crash and a scramble, and the Ethiopian\n    called out, 'I've caught a thing that I can't see. It smells like\n    Giraffe, and it kicks like Giraffe, but it hasn't any form.'\n  </p>\n  <p>\n    'Don't you trust it,' said the Leopard. 'Sit on its head till the\n    morning&#8212;same as me. They haven't any form&#8212;any of 'em.'\n  </p>\n  <p>\n    So they sat down on them hard till bright morning-time, and then Leopard\n    said, 'What have you at your end of the table, Brother?'\n  </p>\n  <p>\n    The Ethiopian scratched his head and said, 'It ought to be 'sclusively a\n    rich fulvous orange-tawny from head to heel, and it ought to be Giraffe;\n    but it is covered all over with chestnut blotches. What have you at your\n    end of the table, Brother?'\n  </p>\n  <p>\n    And the Leopard scratched his head and said, 'It ought to be 'sclusively\n    a delicate greyish-fawn, and it ought to be Zebra; but it is covered\n    all over with black and purple stripes. What in the world have you been\n    doing to yourself, Zebra? Don't you know that if you were on the High\n    Veldt I could see you ten miles off? You haven't any form.'\n  </p>\n  <p>\n    'Yes,' said the Zebra, 'but this isn't the High Veldt. Can't you see?'\n  </p>\n  <p>\n    'I can now,' said the Leopard. 'But I couldn't all yesterday. How is it\n    done?'\n  </p>\n  <p>\n    'Let us up,' said the Zebra, 'and we will show you.\n  </p>\n  <p>\n    They let the Zebra and the Giraffe get up; and Zebra moved away to some\n    little thorn-bushes where the sunlight fell all stripy, and Giraffe\n    moved off to some tallish trees where the shadows fell all blotchy.\n  </p>\n  <p>\n    'Now watch,' said the Zebra and the Giraffe. 'This is the way it's done.\n    One&#8212;two&#8212;three! And where's your breakfast?'\n  </p>\n  <p>\n    Leopard stared, and Ethiopian stared, but all they could see were stripy\n    shadows and blotched shadows in the forest, but never a sign of Zebra\n    and Giraffe. They had just walked off and hidden themselves in the\n    shadowy forest.\n  </p>\n  <p>\n    'Hi! Hi!' said the Ethiopian. 'That's a trick worth learning. Take a\n    lesson by it, Leopard. You show up in this dark place like a bar of soap\n    in a coal-scuttle.'\n  </p>\n  <p>\n    'Ho! Ho!' said the Leopard. 'Would it surprise you very much to know\n    that you show up in this dark place like a mustard-plaster on a sack of\n    coals?'\n  </p>\n  <p>\n    'Well, calling names won't catch dinner, said the Ethiopian. 'The long\n    and the little of it is that we don't match our backgrounds. I'm going\n    to take Baviaan's advice. He told me I ought to change; and as I've\n    nothing to change except my skin I'm going to change that.'\n  </p>\n  <p>\n    'What to?' said the Leopard, tremendously excited.\n  </p>\n  <p>\n    'To a nice working blackish-brownish colour, with a little purple in\n    it, and touches of slaty-blue. It will be the very thing for hiding in\n    hollows and behind trees.'\n  </p>\n  <p>\n    So he changed his skin then and there, and the Leopard was more excited\n    than ever; he had never seen a man change his skin before.\n  </p>\n  <p>\n    'But what about me?' he said, when the Ethiopian had worked his last\n    little finger into his fine new black skin.\n  </p>\n  <p>\n    'You take Baviaan's advice too. He told you to go into spots.'\n  </p>\n  <p>\n    'So I did,' said the Leopard. I went into other spots as fast as I\n    could. I went into this spot with you, and a lot of good it has done\n    me.'\n  </p>\n  <p>\n    'Oh,' said the Ethiopian, 'Baviaan didn't mean spots in South Africa. He\n    meant spots on your skin.'\n  </p>\n  <p>\n    'What's the use of that?' said the Leopard.\n  </p>\n  <p>\n    'Think of Giraffe,' said the Ethiopian. 'Or if you prefer stripes,\n    think of Zebra. They find their spots and stripes give them per-feet\n    satisfaction.'\n  </p>\n  <p>\n    'Umm,' said the Leopard. 'I wouldn't look like Zebra&#8212;not for ever so.'\n  </p>\n  <p>\n    'Well, make up your mind,' said the Ethiopian, 'because I'd hate to\n    go hunting without you, but I must if you insist on looking like a\n    sun-flower against a tarred fence.'\n  </p>\n  <p>\n    'I'll take spots, then,' said the Leopard; 'but don't make 'em too\n    vulgar-big. I wouldn't look like Giraffe&#8212;not for ever so.'\n  </p>\n  <p>\n    'I'll make 'em with the tips of my fingers,' said the Ethiopian.\n    'There's plenty of black left on my skin still. Stand over!'\n  </p>\n  <p>\n    Then the Ethiopian put his five fingers close together (there was plenty\n    of black left on his new skin still) and pressed them all over the\n    Leopard, and wherever the five fingers touched they left five little\n    black marks, all close together. You can see them on any Leopard's skin\n    you like, Best Beloved. Sometimes the fingers slipped and the marks got\n    a little blurred; but if you look closely at any Leopard now you will\n    see that there are always five spots&#8212;off five fat black finger-tips.\n  </p>\n  <p>\n    'Now you are a beauty!' said the Ethiopian. 'You can lie out on the bare\n    ground and look like a heap of pebbles. You can lie out on the naked\n    rocks and look like a piece of pudding-stone. You can lie out on a leafy\n    branch and look like sunshine sifting through the leaves; and you\n    can lie right across the centre of a path and look like nothing in\n    particular. Think of that and purr!'\n  </p>\n  <p>\n    'But if I'm all this,' said the Leopard, 'why didn't you go spotty too?'\n  </p>\n  <p>\n    'Oh, plain black's best for a nigger,' said the Ethiopian. 'Now come\n    along and we'll see if we can't get even with Mr. One-Two-Three Where's\n    your Breakfast!'\n  </p>\n  <p>\n    So they went away and lived happily ever afterward, Best Beloved. That\n    is all.\n  </p>\n  <p>\n    Oh, now and then you will hear grown-ups say, 'Can the Ethiopian change\n    his skin or the Leopard his spots?' I don't think even grown-ups would\n    keep on saying such a silly thing if the Leopard and the Ethiopian\n    hadn't done it once&#8212;do you? But they will never do it again, Best\n    Beloved. They are quite contented as they are.\n  </p>\n  <pre>   I AM the Most Wise Baviaan, saying in most wise tones,\n   'Let us melt into the landscape&#8212;just us two by our lones.'\n   People have come&#8212;in a carriage&#8212;calling. But Mummy is there....\n   Yes, I can go if you take me&#8212;Nurse says she don't care.\n   Let's go up to the pig-sties and sit on the farmyard rails!\n   Let's say things to the bunnies, and watch 'em skitter their tails!\n   Let's&#8212;oh, anything, daddy, so long as it's you and me,\n   And going truly exploring, and not being in till tea!\n   Here's your boots (I've brought 'em), and here's your cap and stick,\n   And here's your pipe and tobacco. Oh, come along out of it&#8212;quick.\n</pre>\n  <a name=\"2H_4_0005\">\n  </a>\n  <h2>THE ELEPHANT'S CHILD</h2>\n  <p>\n    In the High and Far-Off Times the Elephant, O Best Beloved, had no\n    trunk. He had only a blackish, bulgy nose, as big as a boot, that he\n    could wriggle about from side to side; but he couldn't pick up things\n    with it. But there was one Elephant&#8212;a new Elephant&#8212;an Elephant's\n    Child&#8212;who was full of 'satiable curtiosity, and that means he asked\n    ever so many questions. And he lived in Africa, and he filled all Africa\n    with his 'satiable curtiosities. He asked his tall aunt, the Ostrich,\n    why her tail-feathers grew just so, and his tall aunt the Ostrich\n    spanked him with her hard, hard claw. He asked his tall uncle, the\n    Giraffe, what made his skin spotty, and his tall uncle, the Giraffe,\n    spanked him with his hard, hard hoof. And still he was full of 'satiable\n    curtiosity! He asked his broad aunt, the Hippopotamus, why her eyes were\n    red, and his broad aunt, the Hippopotamus, spanked him with her broad,\n    broad hoof; and he asked his hairy uncle, the Baboon, why melons tasted\n    just so, and his hairy uncle, the Baboon, spanked him with his hairy,\n    hairy paw. And still he was full of 'satiable curtiosity! He asked\n    questions about everything that he saw, or heard, or felt, or smelt, or\n    touched, and all his uncles and his aunts spanked him. And still he was\n    full of 'satiable curtiosity!\n  </p>\n  <p>\n    One fine morning in the middle of the Precession of the Equinoxes this\n    'satiable Elephant's Child asked a new fine question that he had never\n    asked before. He asked, 'What does the Crocodile have for dinner?' Then\n    everybody said, 'Hush!' in a loud and dretful tone, and they spanked him\n    immediately and directly, without stopping, for a long time.\n  </p>\n  <p>\n    By and by, when that was finished, he came upon Kolokolo Bird sitting\n    in the middle of a wait-a-bit thorn-bush, and he said, 'My father has\n    spanked me, and my mother has spanked me; all my aunts and uncles have\n    spanked me for my 'satiable curtiosity; and still I want to know what\n    the Crocodile has for dinner!'\n  </p>\n  <p>\n    Then Kolokolo Bird said, with a mournful cry, 'Go to the banks of the\n    great grey-green, greasy Limpopo River, all set about with fever-trees,\n    and find out.'\n  </p>\n  <p>\n    That very next morning, when there was nothing left of the Equinoxes,\n    because the Precession had preceded according to precedent, this\n    'satiable Elephant's Child took a hundred pounds of bananas (the little\n    short red kind), and a hundred pounds of sugar-cane (the long purple\n    kind), and seventeen melons (the greeny-crackly kind), and said to all\n    his dear families, 'Goodbye. I am going to the great grey-green, greasy\n    Limpopo River, all set about with fever-trees, to find out what the\n    Crocodile has for dinner.' And they all spanked him once more for luck,\n    though he asked them most politely to stop.\n  </p>\n  <p>\n    Then he went away, a little warm, but not at all astonished, eating\n    melons, and throwing the rind about, because he could not pick it up.\n  </p>\n  <p>\n    He went from Graham's Town to Kimberley, and from Kimberley to Khama's\n    Country, and from Khama's Country he went east by north, eating melons\n    all the time, till at last he came to the banks of the great grey-green,\n    greasy Limpopo River, all set about with fever-trees, precisely as\n    Kolokolo Bird had said.\n  </p>\n  <p>\n    Now you must know and understand, O Best Beloved, that till that very\n    week, and day, and hour, and minute, this 'satiable Elephant's Child had\n    never seen a Crocodile, and did not know what one was like. It was all\n    his 'satiable curtiosity.\n  </p>\n  <p>\n    The first thing that he found was a Bi-Coloured-Python-Rock-Snake curled\n    round a rock.\n  </p>\n  <p>\n    ''Scuse me,' said the Elephant's Child most politely, 'but have you seen\n    such a thing as a Crocodile in these promiscuous parts?'\n  </p>\n  <p>\n    'Have I seen a Crocodile?' said the Bi-Coloured-Python-Rock-Snake, in a\n    voice of dretful scorn. 'What will you ask me next?'\n  </p>\n  <p>\n    ''Scuse me,' said the Elephant's Child, 'but could you kindly tell me\n    what he has for dinner?'\n  </p>\n  <p>\n    Then the Bi-Coloured-Python-Rock-Snake uncoiled himself very quickly\n    from the rock, and spanked the Elephant's Child with his scalesome,\n    flailsome tail.\n  </p>\n  <p>\n    'That is odd,' said the Elephant's Child, 'because my father and my\n    mother, and my uncle and my aunt, not to mention my other aunt, the\n    Hippopotamus, and my other uncle, the Baboon, have all spanked me for my\n    'satiable curtiosity&#8212;and I suppose this is the same thing.\n  </p>\n  <p>\n    So he said good-bye very politely to the Bi-Coloured-Python-Rock-Snake,\n    and helped to coil him up on the rock again, and went on, a little warm,\n    but not at all astonished, eating melons, and throwing the rind about,\n    because he could not pick it up, till he trod on what he thought was\n    a log of wood at the very edge of the great grey-green, greasy Limpopo\n    River, all set about with fever-trees.\n  </p>\n  <p>\n    But it was really the Crocodile, O Best Beloved, and the Crocodile\n    winked one eye&#8212;like this!\n  </p>\n  <p>\n    ''Scuse me,' said the Elephant's Child most politely, 'but do you happen\n    to have seen a Crocodile in these promiscuous parts?'\n  </p>\n  <p>\n    Then the Crocodile winked the other eye, and lifted half his tail out of\n    the mud; and the Elephant's Child stepped back most politely, because he\n    did not wish to be spanked again.\n  </p>\n  <p>\n    'Come hither, Little One,' said the Crocodile. 'Why do you ask such\n    things?'\n  </p>\n  <p>\n    ''Scuse me,' said the Elephant's Child most politely, 'but my father has\n    spanked me, my mother has spanked me, not to mention my tall aunt, the\n    Ostrich, and my tall uncle, the Giraffe, who can kick ever so hard, as\n    well as my broad aunt, the Hippopotamus, and my hairy uncle, the Baboon,\n    and including the Bi-Coloured-Python-Rock-Snake, with the scalesome,\n    flailsome tail, just up the bank, who spanks harder than any of them;\n    and so, if it's quite all the same to you, I don't want to be spanked\n    any more.'\n  </p>\n  <p>\n    'Come hither, Little One,' said the Crocodile, 'for I am the Crocodile,'\n    and he wept crocodile-tears to show it was quite true.\n  </p>\n  <p>\n    Then the Elephant's Child grew all breathless, and panted, and kneeled\n    down on the bank and said, 'You are the very person I have been looking\n    for all these long days. Will you please tell me what you have for\n    dinner?'\n  </p>\n  <p>\n    'Come hither, Little One,' said the Crocodile, 'and I'll whisper.'\n  </p>\n  <p>\n    Then the Elephant's Child put his head down close to the Crocodile's\n    musky, tusky mouth, and the Crocodile caught him by his little nose,\n    which up to that very week, day, hour, and minute, had been no bigger\n    than a boot, though much more useful.\n  </p>\n  <p>\n    'I think, said the Crocodile&#8212;and he said it between his teeth, like\n    this&#8212;'I think to-day I will begin with Elephant's Child!'\n  </p>\n  <p>\n    At this, O Best Beloved, the Elephant's Child was much annoyed, and he\n    said, speaking through his nose, like this, 'Led go! You are hurtig be!'\n  </p>\n  <p>\n    Then the Bi-Coloured-Python-Rock-Snake scuffled down from the bank and\n    said, 'My young friend, if you do not now, immediately and instantly,\n    pull as hard as ever you can, it is my opinion that your acquaintance in\n    the large-pattern leather ulster' (and by this he meant the Crocodile)\n    'will jerk you into yonder limpid stream before you can say Jack\n    Robinson.'\n  </p>\n  <p>\n    This is the way Bi-Coloured-Python-Rock-Snakes always talk.\n  </p>\n  <p>\n    Then the Elephant's Child sat back on his little haunches, and pulled,\n    and pulled, and pulled, and his nose began to stretch. And the Crocodile\n    floundered into the water, making it all creamy with great sweeps of his\n    tail, and he pulled, and pulled, and pulled.\n  </p>\n  <p>\n    And the Elephant's Child's nose kept on stretching; and the Elephant's\n    Child spread all his little four legs and pulled, and pulled, and\n    pulled, and his nose kept on stretching; and the Crocodile threshed his\n    tail like an oar, and he pulled, and pulled, and pulled, and at each\n    pull the Elephant's Child's nose grew longer and longer&#8212;and it hurt him\n    hijjus!\n  </p>\n  <p>\n    Then the Elephant's Child felt his legs slipping, and he said through\n    his nose, which was now nearly five feet long, 'This is too butch for\n    be!'\n  </p>\n  <p>\n    Then the Bi-Coloured-Python-Rock-Snake came down from the bank, and\n    knotted himself in a double-clove-hitch round the Elephant's Child's\n    hind legs, and said, 'Rash and inexperienced traveller, we will now\n    seriously devote ourselves to a little high tension, because if we do\n    not, it is my impression that yonder self-propelling man-of-war with\n    the armour-plated upper deck' (and by this, O Best Beloved, he meant the\n    Crocodile), 'will permanently vitiate your future career.\n  </p>\n  <p>\n    That is the way all Bi-Coloured-Python-Rock-Snakes always talk.\n  </p>\n  <p>\n    So he pulled, and the Elephant's Child pulled, and the Crocodile pulled;\n    but the Elephant's Child and the Bi-Coloured-Python-Rock-Snake pulled\n    hardest; and at last the Crocodile let go of the Elephant's Child's nose\n    with a plop that you could hear all up and down the Limpopo.\n  </p>\n  <p>\n    Then the Elephant's Child sat down most hard and sudden; but first he\n    was careful to say 'Thank you' to the Bi-Coloured-Python-Rock-Snake; and\n    next he was kind to his poor pulled nose, and wrapped it all up in cool\n    banana leaves, and hung it in the great grey-green, greasy Limpopo to\n    cool.\n  </p>\n  <p>\n    'What are you doing that for?' said the Bi-Coloured-Python-Rock-Snake.\n  </p>\n  <p>\n    ''Scuse me,' said the Elephant's Child, 'but my nose is badly out of\n    shape, and I am waiting for it to shrink.\n  </p>\n  <p>\n    'Then you will have to wait a long time, said the\n    Bi-Coloured-Python-Rock-Snake. 'Some people do not know what is good for\n    them.'\n  </p>\n  <p>\n    The Elephant's Child sat there for three days waiting for his nose to\n    shrink. But it never grew any shorter, and, besides, it made him squint.\n    For, O Best Beloved, you will see and understand that the Crocodile\n    had pulled it out into a really truly trunk same as all Elephants have\n    to-day.\n  </p>\n  <p>\n    At the end of the third day a fly came and stung him on the shoulder,\n    and before he knew what he was doing he lifted up his trunk and hit that\n    fly dead with the end of it.\n  </p>\n  <p>\n    ''Vantage number one!' said the Bi-Coloured-Python-Rock-Snake. 'You\n    couldn't have done that with a mere-smear nose. Try and eat a little\n    now.'\n  </p>\n  <p>\n    Before he thought what he was doing the Elephant's Child put out his\n    trunk and plucked a large bundle of grass, dusted it clean against his\n    fore-legs, and stuffed it into his own mouth.\n  </p>\n  <p>\n    'Vantage number two!' said the Bi-Coloured-Python-Rock-Snake. 'You\n    couldn't have done that with a mear-smear nose. Don't you think the sun\n    is very hot here?'\n  </p>\n  <p>\n    'It is,' said the Elephant's Child, and before he thought what he was\n    doing he schlooped up a schloop of mud from the banks of the great\n    grey-green, greasy Limpopo, and slapped it on his head, where it made a\n    cool schloopy-sloshy mud-cap all trickly behind his ears.\n  </p>\n  <p>\n    'Vantage number three!' said the Bi-Coloured-Python-Rock-Snake. 'You\n    couldn't have done that with a mere-smear nose. Now how do you feel\n    about being spanked again?'\n  </p>\n  <p>\n    ''Scuse me,' said the Elephant's Child, 'but I should not like it at\n    all.'\n  </p>\n  <p>\n    'How would you like to spank somebody?' said the\n    Bi-Coloured-Python-Rock-Snake.\n  </p>\n  <p>\n    'I should like it very much indeed,' said the Elephant's Child.\n  </p>\n  <p>\n    'Well,' said the Bi-Coloured-Python-Rock-Snake, 'you will find that new\n    nose of yours very useful to spank people with.'\n  </p>\n  <p>\n    'Thank you,' said the Elephant's Child, 'I'll remember that; and now I\n    think I'll go home to all my dear families and try.'\n  </p>\n  <p>\n    So the Elephant's Child went home across Africa frisking and whisking\n    his trunk. When he wanted fruit to eat he pulled fruit down from a tree,\n    instead of waiting for it to fall as he used to do. When he wanted grass\n    he plucked grass up from the ground, instead of going on his knees as he\n    used to do. When the flies bit him he broke off the branch of a tree\n    and used it as fly-whisk; and he made himself a new, cool, slushy-squshy\n    mud-cap whenever the sun was hot. When he felt lonely walking through\n    Africa he sang to himself down his trunk, and the noise was louder than\n    several brass bands.\n  </p>\n  <p>\n    He went especially out of his way to find a broad Hippopotamus (she was\n    no relation of his), and he spanked her very hard, to make sure that the\n    Bi-Coloured-Python-Rock-Snake had spoken the truth about his new trunk.\n    The rest of the time he picked up the melon rinds that he had dropped on\n    his way to the Limpopo&#8212;for he was a Tidy Pachyderm.\n  </p>\n  <p>\n    One dark evening he came back to all his dear families, and he coiled up\n    his trunk and said, 'How do you do?' They were very glad to see him,\n    and immediately said, 'Come here and be spanked for your 'satiable\n    curtiosity.'\n  </p>\n  <p>\n    'Pooh,' said the Elephant's Child. 'I don't think you peoples know\n    anything about spanking; but I do, and I'll show you.' Then he uncurled\n    his trunk and knocked two of his dear brothers head over heels.\n  </p>\n  <p>\n    'O Bananas!' said they, 'where did you learn that trick, and what have\n    you done to your nose?'\n  </p>\n  <p>\n    'I got a new one from the Crocodile on the banks of the great\n    grey-green, greasy Limpopo River,' said the Elephant's Child. 'I asked\n    him what he had for dinner, and he gave me this to keep.'\n  </p>\n  <p>\n    'It looks very ugly,' said his hairy uncle, the Baboon.\n  </p>\n  <p>\n    'It does,' said the Elephant's Child. 'But it's very useful,' and he\n    picked up his hairy uncle, the Baboon, by one hairy leg, and hove him\n    into a hornet's nest.\n  </p>\n  <p>\n    Then that bad Elephant's Child spanked all his dear families for a long\n    time, till they were very warm and greatly astonished. He pulled out\n    his tall Ostrich aunt's tail-feathers; and he caught his tall uncle, the\n    Giraffe, by the hind-leg, and dragged him through a thorn-bush; and he\n    shouted at his broad aunt, the Hippopotamus, and blew bubbles into her\n    ear when she was sleeping in the water after meals; but he never let any\n    one touch Kolokolo Bird.\n  </p>\n  <p>\n    At last things grew so exciting that his dear families went off one\n    by one in a hurry to the banks of the great grey-green, greasy Limpopo\n    River, all set about with fever-trees, to borrow new noses from the\n    Crocodile. When they came back nobody spanked anybody any more; and ever\n    since that day, O Best Beloved, all the Elephants you will ever see,\n    besides all those that you won't, have trunks precisely like the trunk\n    of the 'satiable Elephant's Child.\n  </p>\n  <pre>     I Keep six honest serving-men:\n       (They taught me all I knew)\n     Their names are What and Where and When\n       And How and Why and Who.\n     I send them over land and sea,\n       I send them east and west;\n     But after they have worked for me,\n       I give them all a rest.\n\n     I let them rest from nine till five.\n       For I am busy then,\n     As well as breakfast, lunch, and tea,\n       For they are hungry men:\n     But different folk have different views:\n       I know a person small&#8212;\n     She keeps ten million serving-men,\n       Who get no rest at all!\n     She sends 'em abroad on her own affairs,\n       From the second she opens her eyes&#8212;\n     One million Hows, two million Wheres,\n       And seven million Whys!\n</pre>\n  <a name=\"2H_4_0006\">\n  </a>\n  <h2>\n    THE SING-SONG OF OLD MAN KANGAROO\n  </h2>\n  <p>\n    Not always was the Kangaroo as now we do behold him, but a Different\n    Animal with four short legs. He was grey and he was woolly, and\n    his pride was inordinate: he danced on an outcrop in the middle of\n    Australia, and he went to the Little God Nqa.\n  </p>\n  <p>\n    He went to Nqa at six before breakfast, saying, 'Make me different from\n    all other animals by five this afternoon.'\n  </p>\n  <p>\n    Up jumped Nqa from his seat on the sandflat and shouted, 'Go away!'\n  </p>\n  <p>\n    He was grey and he was woolly, and his pride was inordinate: he danced\n    on a rock-ledge in the middle of Australia, and he went to the Middle\n    God Nquing.\n  </p>\n  <p>\n    He went to Nquing at eight after breakfast, saying, 'Make me different\n    from all other animals; make me, also, wonderfully popular by five this\n    afternoon.'\n  </p>\n  <p>\n    Up jumped Nquing from his burrow in the spinifex and shouted, 'Go away!'\n  </p>\n  <p>\n    He was grey and he was woolly, and his pride was inordinate: he danced\n    on a sandbank in the middle of Australia, and he went to the Big God\n    Nqong.\n  </p>\n  <p>\n    He went to Nqong at ten before dinner-time, saying, 'Make me different\n    from all other animals; make me popular and wonderfully run after by\n    five this afternoon.'\n  </p>\n  <p>\n    Up jumped Nqong from his bath in the salt-pan and shouted, 'Yes, I\n    will!'\n  </p>\n  <p>\n    Nqong called Dingo&#8212;Yellow-Dog Dingo&#8212;always hungry, dusty in the\n    sunshine, and showed him Kangaroo. Nqong said, 'Dingo! Wake up, Dingo!\n    Do you see that gentleman dancing on an ashpit? He wants to be popular\n    and very truly run after. Dingo, make him SO!'\n  </p>\n  <p>\n    Up jumped Dingo&#8212;Yellow-Dog Dingo&#8212;and said, 'What, that cat-rabbit?'\n  </p>\n  <p>\n    Off ran Dingo&#8212;Yellow-Dog Dingo&#8212;always hungry, grinning like a\n    coal-scuttle,&#8212;ran after Kangaroo.\n  </p>\n  <p>\n    Off went the proud Kangaroo on his four little legs like a bunny.\n  </p>\n  <p>\n    This, O Beloved of mine, ends the first part of the tale!\n  </p>\n  <p>\n    He ran through the desert; he ran through the mountains; he ran through\n    the salt-pans; he ran through the reed-beds; he ran through the blue\n    gums; he ran through the spinifex; he ran till his front legs ached.\n  </p>\n  <p>\n    He had to!\n  </p>\n  <p>\n    Still ran Dingo&#8212;Yellow-Dog Dingo&#8212;always hungry, grinning like a\n    rat-trap, never getting nearer, never getting farther,&#8212;ran after\n    Kangaroo.\n  </p>\n  <p>\n    He had to!\n  </p>\n  <p>\n    Still ran Kangaroo&#8212;Old Man Kangaroo. He ran through the ti-trees; he\n    ran through the mulga; he ran through the long grass; he ran through the\n    short grass; he ran through the Tropics of Capricorn and Cancer; he ran\n    till his hind legs ached.\n  </p>\n  <p>\n    He had to!\n  </p>\n  <p>\n    Still ran Dingo&#8212;Yellow-Dog Dingo&#8212;hungrier and hungrier, grinning like\n    a horse-collar, never getting nearer, never getting farther; and they\n    came to the Wollgong River.\n  </p>\n  <p>\n    Now, there wasn't any bridge, and there wasn't any ferry-boat, and\n    Kangaroo didn't know how to get over; so he stood on his legs and\n    hopped.\n  </p>\n  <p>\n    He had to!\n  </p>\n  <p>\n    He hopped through the Flinders; he hopped through the Cinders; he\n    hopped through the deserts in the middle of Australia. He hopped like a\n    Kangaroo.\n  </p>\n  <p>\n    First he hopped one yard; then he hopped three yards; then he hopped\n    five yards; his legs growing stronger; his legs growing longer. He\n    hadn't any time for rest or refreshment, and he wanted them very much.\n  </p>\n  <p>\n    Still ran Dingo&#8212;Yellow-Dog Dingo&#8212;very much bewildered, very much\n    hungry, and wondering what in the world or out of it made Old Man\n    Kangaroo hop.\n  </p>\n  <p>\n    For he hopped like a cricket; like a pea in a saucepan; or a new rubber\n    ball on a nursery floor.\n  </p>\n  <p>\n    He had to!\n  </p>\n  <p>\n    He tucked up his front legs; he hopped on his hind legs; he stuck out\n    his tail for a balance-weight behind him; and he hopped through the\n    Darling Downs.\n  </p>\n  <p>\n    He had to!\n  </p>\n  <p>\n    Still ran Dingo&#8212;Tired-Dog Dingo&#8212;hungrier and hungrier, very much\n    bewildered, and wondering when in the world or out of it would Old Man\n    Kangaroo stop.\n  </p>\n  <p>\n    Then came Nqong from his bath in the salt-pans, and said, 'It's five\n    o'clock.'\n  </p>\n  <p>\n    Down sat Dingo&#8212;Poor Dog Dingo&#8212;always hungry, dusky in the sunshine;\n    hung out his tongue and howled.\n  </p>\n  <p>\n    Down sat Kangaroo&#8212;Old Man Kangaroo&#8212;stuck out his tail like a\n    milking-stool behind him, and said, 'Thank goodness that's finished!'\n  </p>\n  <p>\n    Then said Nqong, who is always a gentleman, 'Why aren't you grateful to\n    Yellow-Dog Dingo? Why don't you thank him for all he has done for you?'\n  </p>\n  <p>\n    Then said Kangaroo&#8212;Tired Old Kangaroo&#8212;He's chased me out of the homes\n    of my childhood; he's chased me out of my regular meal-times; he's\n    altered my shape so I'll never get it back; and he's played Old Scratch\n    with my legs.'\n  </p>\n  <p>\n    Then said Nqong, 'Perhaps I'm mistaken, but didn't you ask me to make\n    you different from all other animals, as well as to make you very truly\n    sought after? And now it is five o'clock.'\n  </p>\n  <p>\n    'Yes,' said Kangaroo. 'I wish that I hadn't. I thought you would do it\n    by charms and incantations, but this is a practical joke.'\n  </p>\n  <p>\n    'Joke!' said Nqong from his bath in the blue gums. 'Say that again and\n    I'll whistle up Dingo and run your hind legs off.'\n  </p>\n  <p>\n    'No,' said the Kangaroo. 'I must apologise. Legs are legs, and you\n    needn't alter 'em so far as I am concerned. I only meant to explain to\n    Your Lordliness that I've had nothing to eat since morning, and I'm very\n    empty indeed.'\n  </p>\n  <p>\n    'Yes,' said Dingo&#8212;Yellow-Dog Dingo,&#8212;'I am just in the same situation.\n    I've made him different from all other animals; but what may I have for\n    my tea?'\n  </p>\n  <p>\n    Then said Nqong from his bath in the salt-pan, 'Come and ask me about it\n    tomorrow, because I'm going to wash.'\n  </p>\n  <p>\n    So they were left in the middle of Australia, Old Man Kangaroo and\n    Yellow-Dog Dingo, and each said, 'That's your fault.'\n  </p>\n  <pre>     THIS is the mouth-filling song\n     Of the race that was run by a Boomer,\n     Run in a single burst&#8212;only event of its kind&#8212;\n     Started by big God Nqong from Warrigaborrigarooma,\n     Old Man Kangaroo first: Yellow-Dog Dingo behind.\n\n     Kangaroo bounded away,\n     His back-legs working like pistons&#8212;\n     Bounded from morning till dark,\n     Twenty-five feet to a bound.\n     Yellow-Dog Dingo lay\n     Like a yellow cloud in the distance&#8212;\n     Much too busy to bark.\n     My! but they covered the ground!\n\n     Nobody knows where they went,\n     Or followed the track that they flew in,\n     For that Continent\n     Hadn't been given a name.\n     They ran thirty degrees,\n     From Torres Straits to the Leeuwin\n     (Look at the Atlas, please),\n     And they ran back as they came.\n\n     S'posing you could trot\n     From Adelaide to the Pacific,\n     For an afternoon's run\n     Half what these gentlemen did\n     You would feel rather hot,\n     But your legs would develop terrific&#8212;\n     Yes, my importunate son,\n     You'd be a Marvellous Kid!\n</pre>\n  <a name=\"2H_4_0007\">\n  </a>\n  <h2>\n    THE BEGINNING OF THE ARMADILLOS\n  </h2>\n  <p>\n    This, O Best Beloved, is another story of the High and Far-Off Times.\n    In the very middle of those times was a Stickly-Prickly Hedgehog, and\n    he lived on the banks of the turbid Amazon, eating shelly snails and\n    things. And he had a friend, a Slow-Solid Tortoise, who lived on the\n    banks of the turbid Amazon, eating green lettuces and things. And so\n    that was all right, Best Beloved. Do you see?\n  </p>\n  <p>\n    But also, and at the same time, in those High and Far-Off Times, there\n    was a Painted Jaguar, and he lived on the banks of the turbid Amazon\n    too; and he ate everything that he could catch. When he could not catch\n    deer or monkeys he would eat frogs and beetles; and when he could not\n    catch frogs and beetles he went to his Mother Jaguar, and she told him\n    how to eat hedgehogs and tortoises.\n  </p>\n  <p>\n    She said to him ever so many times, graciously waving her tail, 'My son,\n    when you find a Hedgehog you must drop him into the water and then he\n    will uncoil, and when you catch a Tortoise you must scoop him out of his\n    shell with your paw.' And so that was all right, Best Beloved.\n  </p>\n  <p>\n    One beautiful night on the banks of the turbid Amazon, Painted Jaguar\n    found Stickly-Prickly Hedgehog and Slow-Solid Tortoise sitting under the\n    trunk of a fallen tree. They could not run away, and so Stickly-Prickly\n    curled himself up into a ball, because he was a Hedgehog, and Slow-Solid\n    Tortoise drew in his head and feet into his shell as far as they would\n    go, because he was a Tortoise; and so that was all right, Best Beloved.\n    Do you see?\n  </p>\n  <p>\n    'Now attend to me,' said Painted Jaguar, 'because this is very\n    important. My mother said that when I meet a Hedgehog I am to drop him\n    into the water and then he will uncoil, and when I meet a Tortoise I am\n    to scoop him out of his shell with my paw. Now which of you is Hedgehog\n    and which is Tortoise? because, to save my spots, I can't tell.'\n  </p>\n  <p>\n    'Are you sure of what your Mummy told you?' said Stickly-Prickly\n    Hedgehog. 'Are you quite sure? Perhaps she said that when you uncoil a\n    Tortoise you must shell him out the water with a scoop, and when you paw\n    a Hedgehog you must drop him on the shell.'\n  </p>\n  <p>\n    'Are you sure of what your Mummy told you?' said Slow-and-Solid\n    Tortoise. 'Are you quite sure? Perhaps she said that when you water a\n    Hedgehog you must drop him into your paw, and when you meet a Tortoise\n    you must shell him till he uncoils.'\n  </p>\n  <p>\n    'I don't think it was at all like that,' said Painted Jaguar, but he\n    felt a little puzzled; 'but, please, say it again more distinctly.'\n  </p>\n  <p>\n    'When you scoop water with your paw you uncoil it with a Hedgehog,' said\n    Stickly-Prickly. 'Remember that, because it's important.'\n  </p>\n  <p>\n    'But,' said the Tortoise, 'when you paw your meat you drop it into a\n    Tortoise with a scoop. Why can't you understand?'\n  </p>\n  <p>\n    'You are making my spots ache,' said Painted Jaguar; 'and besides, I\n    didn't want your advice at all. I only wanted to know which of you is\n    Hedgehog and which is Tortoise.'\n  </p>\n  <p>\n    'I shan't tell you,' said Stickly-Prickly, 'but you can scoop me out of\n    my shell if you like.'\n  </p>\n  <p>\n    'Aha!' said Painted Jaguar. 'Now I know you're Tortoise. You thought I\n    wouldn't! Now I will.' Painted Jaguar darted out his paddy-paw just as\n    Stickly-Prickly curled himself up, and of course Jaguar's paddy-paw was\n    just filled with prickles. Worse than that, he knocked Stickly-Prickly\n    away and away into the woods and the bushes, where it was too dark to\n    find him. Then he put his paddy-paw into his mouth, and of course the\n    prickles hurt him worse than ever. As soon as he could speak he said,\n    'Now I know he isn't Tortoise at all. But'&#8212;and then he scratched\n    his head with his un-prickly paw&#8212;'how do I know that this other is\n    Tortoise?'\n  </p>\n  <p>\n    'But I am Tortoise,' said Slow-and-Solid. Your mother was quite right.\n    She said that you were to scoop me out of my shell with your paw.\n    Begin.'\n  </p>\n  <p>\n    'You didn't say she said that a minute ago, said Painted Jaguar, sucking\n    the prickles out of his paddy-paw. 'You said she said something quite\n    different.'\n  </p>\n  <p>\n    'Well, suppose you say that I said that she said something quite\n    different, I don't see that it makes any difference; because if she said\n    what you said I said she said, it's just the same as if I said what she\n    said she said. On the other hand, if you think she said that you were to\n    uncoil me with a scoop, instead of pawing me into drops with a shell, I\n    can't help that, can I?'\n  </p>\n  <p>\n    'But you said you wanted to be scooped out of your shell with my paw,'\n    said Painted Jaguar.\n  </p>\n  <p>\n    'If you'll think again you'll find that I didn't say anything of the\n    kind. I said that your mother said that you were to scoop me out of my\n    shell,' said Slow-and-Solid.\n  </p>\n  <p>\n    'What will happen if I do?' said the Jaguar most sniffily and most\n    cautious.\n  </p>\n  <p>\n    'I don't know, because I've never been scooped out of my shell before;\n    but I tell you truly, if you want to see me swim away you've only got to\n    drop me into the water.\n  </p>\n  <p>\n    'I don't believe it,' said Painted Jaguar. 'You've mixed up all the\n    things my mother told me to do with the things that you asked me whether\n    I was sure that she didn't say, till I don't know whether I'm on my\n    head or my painted tail; and now you come and tell me something I can\n    understand, and it makes me more mixy than before. My mother told me\n    that I was to drop one of you two into the water, and as you seem so\n    anxious to be dropped I think you don't want to be dropped. So jump into\n    the turbid Amazon and be quick about it.'\n  </p>\n  <p>\n    'I warn you that your Mummy won't be pleased. Don't tell her I didn't\n    tell you,' said Slow-Solid.\n  </p>\n  <p>\n    'If you say another word about what my mother said&#8212;' the Jaguar\n    answered, but he had not finished the sentence before Slow-and-Solid\n    quietly dived into the turbid Amazon, swam under water for a long way,\n    and came out on the bank where Stickly-Prickly was waiting for him.\n  </p>\n  <p>\n    'That was a very narrow escape,' said Stickly-Prickly. 'I don't rib\n    Painted Jaguar. What did you tell him that you were?'\n  </p>\n  <p>\n    'I told him truthfully that I was a truthful Tortoise, but he wouldn't\n    believe it, and he made me jump into the river to see if I was, and I\n    was, and he is surprised. Now he's gone to tell his Mummy. Listen to\n    him!'\n  </p>\n  <p>\n    They could hear Painted Jaguar roaring up and down among the trees and\n    the bushes by the side of the turbid Amazon, till his Mummy came.\n  </p>\n  <p>\n    'Son, son!' said his mother ever so many times, graciously waving her\n    tail, 'what have you been doing that you shouldn't have done?'\n  </p>\n  <p>\n    'I tried to scoop something that said it wanted to be scooped out of\n    its shell with my paw, and my paw is full of per-ickles,' said Painted\n    Jaguar.\n  </p>\n  <p>\n    'Son, son!' said his mother ever so many times, graciously waving her\n    tail, 'by the prickles in your paddy-paw I see that that must have been\n    a Hedgehog. You should have dropped him into the water.\n  </p>\n  <p>\n    'I did that to the other thing; and he said he was a Tortoise, and I\n    didn't believe him, and it was quite true, and he has dived under the\n    turbid Amazon, and he won't come up again, and I haven't anything at all\n    to eat, and I think we had better find lodgings somewhere else. They are\n    too clever on the turbid Amazon for poor me!'\n  </p>\n  <p>\n    'Son, son!' said his mother ever so many times, graciously waving\n    her tail, 'now attend to me and remember what I say. A Hedgehog curls\n    himself up into a ball and his prickles stick out every which way at\n    once. By this you may know the Hedgehog.'\n  </p>\n  <p>\n    'I don't like this old lady one little bit,' said Stickly-Prickly, under\n    the shadow of a large leaf. 'I wonder what else she knows?'\n  </p>\n  <p>\n    'A Tortoise can't curl himself up,' Mother Jaguar went on, ever so many\n    times, graciously waving her tail. 'He only draws his head and legs into\n    his shell. By this you may know the tortoise.'\n  </p>\n  <p>\n    'I don't like this old lady at all&#8212;at all,' said Slow-and-Solid\n    Tortoise. 'Even Painted Jaguar can't forget those directions. It's a\n    great pity that you can't swim, Stickly-Prickly.'\n  </p>\n  <p>\n    'Don't talk to me,' said Stickly-Prickly. 'Just think how much better\n    it would be if you could curl up. This is a mess! Listen to Painted\n    Jaguar.'\n  </p>\n  <p>\n    Painted Jaguar was sitting on the banks of the turbid Amazon sucking\n    prickles out of his Paws and saying to himself&#8212;\n  </p>\n  <pre>  'Can't curl, but can swim&#8212;\n  Slow-Solid, that's him!\n  Curls up, but can't swim&#8212;\n  Stickly-Prickly, that's him!'\n</pre>\n  <p>\n    'He'll never forget that this month of Sundays,' said Stickly-Prickly.\n    'Hold up my chin, Slow-and-Solid. I'm going to try to learn to swim. It\n    may be useful.'\n  </p>\n  <p>\n    'Excellent!' said Slow-and-Solid; and he held up Stickly-Prickly's chin,\n    while Stickly-Prickly kicked in the waters of the turbid Amazon.\n  </p>\n  <p>\n    'You'll make a fine swimmer yet,' said Slow-and-Solid. 'Now, if you can\n    unlace my back-plates a little, I'll see what I can do towards curling\n    up. It may be useful.'\n  </p>\n  <p>\n    Stickly-Prickly helped to unlace Tortoise's back-plates, so that by\n    twisting and straining Slow-and-Solid actually managed to curl up a\n    tiddy wee bit.\n  </p>\n  <p>\n    'Excellent!' said Stickly-Prickly; 'but I shouldn't do any more just\n    now. It's making you black in the face. Kindly lead me into the water\n    once again and I'll practice that side-stroke which you say is so easy.'\n    And so Stickly-Prickly practiced, and Slow-Solid swam alongside.\n  </p>\n  <p>\n    'Excellent!' said Slow-and-Solid. 'A little more practice will make you\n    a regular whale. Now, if I may trouble you to unlace my back and front\n    plates two holes more, I'll try that fascinating bend that you say is so\n    easy. Won't Painted Jaguar be surprised!'\n  </p>\n  <p>\n    'Excellent!' said Stickly-Prickly, all wet from the turbid Amazon. 'I\n    declare, I shouldn't know you from one of my own family. Two holes, I\n    think, you said? A little more expression, please, and don't grunt quite\n    so much, or Painted Jaguar may hear us. When you've finished, I want\n    to try that long dive which you say is so easy. Won't Painted Jaguar be\n    surprised!'\n  </p>\n  <p>\n    And so Stickly-Prickly dived, and Slow-and-Solid dived alongside.\n  </p>\n  <p>\n    'Excellent!' said Slow-and-Solid. 'A leetle more attention to holding\n    your breath and you will be able to keep house at the bottom of the\n    turbid Amazon. Now I'll try that exercise of putting my hind legs round\n    my ears which you say is so peculiarly comfortable. Won't Painted Jaguar\n    be surprised!'\n  </p>\n  <p>\n    'Excellent!' said Stickly-Prickly. 'But it's straining your back-plates\n    a little. They are all overlapping now, instead of lying side by side.'\n  </p>\n  <p>\n    'Oh, that's the result of exercise,' said Slow-and-Solid. 'I've noticed\n    that your prickles seem to be melting into one another, and that\n    you're growing to look rather more like a pinecone, and less like a\n    chestnut-burr, than you used to.'\n  </p>\n  <p>\n    'Am I?' said Stickly-Prickly. 'That comes from my soaking in the water.\n    Oh, won't Painted Jaguar be surprised!'\n  </p>\n  <p>\n    They went on with their exercises, each helping the other, till morning\n    came; and when the sun was high they rested and dried themselves. Then\n    they saw that they were both of them quite different from what they had\n    been.\n  </p>\n  <p>\n    'Stickly-Prickly,' said Tortoise after breakfast, 'I am not what I was\n    yesterday; but I think that I may yet amuse Painted Jaguar.\n  </p>\n  <p>\n    'That was the very thing I was thinking just now,' said Stickly-Prickly.\n    'I think scales are a tremendous improvement on prickles&#8212;to say nothing\n    of being able to swim. Oh, won't Painted Jaguar be surprised! Let's go\n    and find him.'\n  </p>\n  <p>\n    By and by they found Painted Jaguar, still nursing his paddy-paw that\n    had been hurt the night before. He was so astonished that he fell three\n    times backward over his own painted tail without stopping.\n  </p>\n  <p>\n    'Good morning!' said Stickly-Prickly. 'And how is your dear gracious\n    Mummy this morning?'\n  </p>\n  <p>\n    'She is quite well, thank you,' said Painted Jaguar; 'but you must\n    forgive me if I do not at this precise moment recall your name.'\n  </p>\n  <p>\n    'That's unkind of you,' said Stickly-Prickly, 'seeing that this time\n    yesterday you tried to scoop me out of my shell with your paw.'\n  </p>\n  <p>\n    'But you hadn't any shell. It was all prickles,' said Painted Jaguar. 'I\n    know it was. Just look at my paw!'\n  </p>\n  <p>\n    'You told me to drop into the turbid Amazon and be drowned,' said\n    Slow-Solid. 'Why are you so rude and forgetful to-day?'\n  </p>\n  <p>\n    'Don't you remember what your mother told you?' said Stickly-Prickly,&#8212;\n  </p>\n  <pre>  'Can't curl, but can swim&#8212;\n  Stickly-Prickly, that's him!\n  Curls up, but can't swim&#8212;\n  Slow-Solid, that's him!'\n</pre>\n  <p>\n    Then they both curled themselves up and rolled round and round Painted\n    Jaguar till his eyes turned truly cart-wheels in his head.\n  </p>\n  <p>\n    Then he went to fetch his mother.\n  </p>\n  <p>\n    'Mother,' he said, 'there are two new animals in the woods to-day, and\n    the one that you said couldn't swim, swims, and the one that you said\n    couldn't curl up, curls; and they've gone shares in their prickles, I\n    think, because both of them are scaly all over, instead of one being\n    smooth and the other very prickly; and, besides that, they are rolling\n    round and round in circles, and I don't feel comfy.'\n  </p>\n  <p>\n    'Son, son!' said Mother Jaguar ever so many times, graciously waving her\n    tail, 'a Hedgehog is a Hedgehog, and can't be anything but a Hedgehog;\n    and a Tortoise is a Tortoise, and can never be anything else.'\n  </p>\n  <p>\n    'But it isn't a Hedgehog, and it isn't a Tortoise. It's a little bit of\n    both, and I don't know its proper name.'\n  </p>\n  <p>\n    'Nonsense!' said Mother Jaguar. 'Everything has its proper name. I\n    should call it \"Armadillo\" till I found out the real one. And I should\n    leave it alone.'\n  </p>\n  <p>\n    So Painted Jaguar did as he was told, especially about leaving them\n    alone; but the curious thing is that from that day to this, O Best\n    Beloved, no one on the banks of the turbid Amazon has ever called\n    Stickly-Prickly and Slow-Solid anything except Armadillo. There are\n    Hedgehogs and Tortoises in other places, of course (there are some in\n    my garden); but the real old and clever kind, with their scales lying\n    lippety-lappety one over the other, like pine-cone scales, that lived on\n    the banks of the turbid Amazon in the High and Far-Off Days, are always\n    called Armadillos, because they were so clever.\n  </p>\n  <p>\n    So that; all right, Best Beloved. Do you see?\n  </p>\n  <pre>     I'VE never sailed the Amazon,\n       I've never reached Brazil;\n     But the Don and Magdelana,\n       They can go there when they will!\n\n             Yes, weekly from Southampton,\n             Great steamers, white and gold,\n             Go rolling down to Rio\n             (Roll down&#8212;roll down to Rio!)\n             And I'd like to roll to Rio\n             Some day before I'm old!\n\n     I've never seen a Jaguar,\n       Nor yet an Armadill\n     O dilloing in his armour,\n       And I s'pose I never will,\n\n             Unless I go to Rio\n             These wonders to behold&#8212;\n             Roll down&#8212;roll down to Rio&#8212;\n             Roll really down to Rio!\n             Oh, I'd love to roll to Rio\n             Some day before I'm old!\n</pre>\n  <a name=\"2H_4_0008\">\n  </a>\n  <h2>\n    HOW THE FIRST LETTER WAS WRITTEN\n  </h2>\n  <p>\n    Once upon a most early time was a Neolithic man. He was not a Jute or an\n    Angle, or even a Dravidian, which he might well have been, Best Beloved,\n    but never mind why. He was a Primitive, and he lived cavily in a Cave,\n    and he wore very few clothes, and he couldn't read and he couldn't write\n    and he didn't want to, and except when he was hungry he was\n    quite happy. His name was Tegumai Bopsulai, and that means,\n    'Man-who-does-not-put-his-foot-forward-in-a-hurry'; but we, O Best\n    Beloved, will call him Tegumai, for short. And his wife's name\n    was Teshumai Tewindrow, and that means,\n    'Lady-who-asks-a-very-many-questions'; but we, O Best Beloved, will\n    call her Teshumai, for short. And his little girl-daughter's name\n    was Taffimai Metallumai, and that means,\n    'Small-person-without-any-manners-who-ought-to-be-spanked'; but I'm\n    going to call her Taffy. And she was Tegumai Bopsulai's Best Beloved and\n    her own Mummy's Best Beloved, and she was not spanked half as much as\n    was good for her; and they were all three very happy. As soon as\n    Taffy could run about she went everywhere with her Daddy Tegumai, and\n    sometimes they would not come home to the Cave till they were hungry,\n    and then Teshumai Tewindrow would say, 'Where in the world have you two\n    been to, to get so shocking dirty? Really, my Tegumai, you're no better\n    than my Taffy.'\n  </p>\n  <p>\n    Now attend and listen!\n  </p>\n  <p>\n    One day Tegumai Bopsulai went down through the beaver-swamp to the Wagai\n    river to spear carp-fish for dinner, and Taffy went too. Tegumai's spear\n    was made of wood with shark's teeth at the end, and before he had caught\n    any fish at all he accidentally broke it clean across by jabbing it down\n    too hard on the bottom of the river. They were miles and miles from home\n    (of course they had their lunch with them in a little bag), and Tegumai\n    had forgotten to bring any extra spears.\n  </p>\n  <p>\n    'Here's a pretty kettle of fish!' said Tegumai. 'It will take me half\n    the day to mend this.'\n  </p>\n  <p>\n    'There's your big black spear at home,' said Taffy. 'Let me run back to\n    the Cave and ask Mummy to give it me.'\n  </p>\n  <p>\n    'It's too far for your little fat legs,' said Tegumai. 'Besides, you\n    might fall into the beaver-swamp and be drowned. We must make the best\n    of a bad job.' He sat down and took out a little leather mendy-bag, full\n    of reindeer-sinews and strips of leather, and lumps of bee's-wax and\n    resin, and began to mend the spear.\n  </p>\n  <p>\n    Taffy sat down too, with her toes in the water and her chin in her\n    hand, and thought very hard. Then she said&#8212;'I say, Daddy, it's an awful\n    nuisance that you and I don't know how to write, isn't it? If we did we\n    could send a message for the new spear.'\n  </p>\n  <p>\n    'Taffy,' said Tegumai, 'how often have I told you not to use slang?\n    \"Awful\" isn't a pretty word, but it could be a convenience, now you\n    mention it, if we could write home.'\n  </p>\n  <p>\n    Just then a Stranger-man came along the river, but he belonged to a\n    far tribe, the Tewaras, and he did not understand one word of Tegumai's\n    language. He stood on the bank and smiled at Taffy, because he had\n    a little girl-daughter Of his own at home. Tegumai drew a hank of\n    deer-sinews from his mendy-bag and began to mend his spear.\n  </p>\n  <p>\n    'Come here, said Taffy. 'Do you know where my Mummy lives?' And the\n    Stranger-man said 'Um!' being, as you know, a Tewara.\n  </p>\n  <p>\n    'Silly!' said Taffy, and she stamped her foot, because she saw a shoal\n    of very big carp going up the river just when her Daddy couldn't use his\n    spear.\n  </p>\n  <p>\n    'Don't bother grown-ups,' said Tegumai, so busy with his spear-mending\n    that he did not turn round.\n  </p>\n  <p>\n    'I aren't, said Taffy. 'I only want him to do what I want him to do, and\n    he won't understand.'\n  </p>\n  <p>\n    'Then don't bother me, said Tegumai, and he went on pulling and\n    straining at the deer-sinews with his mouth full of loose ends. The\n    Stranger-man&#8212;a genuine Tewara he was&#8212;sat down on the grass, and Taffy\n    showed him what her Daddy was doing. The Stranger-man thought, this is a\n    very wonderful child. She stamps her foot at me and she makes faces. She\n    must be the daughter of that noble Chief who is so great that he won't\n    take any notice of me.' So he smiled more politely than ever.\n  </p>\n  <p>\n    'Now,' said Taffy, 'I want you to go to my Mummy, because your legs are\n    longer than mine, and you won't fall into the beaver-swamp, and ask for\n    Daddy's other spear&#8212;the one with the black handle that hangs over our\n    fireplace.'\n  </p>\n  <p>\n    The Stranger-man (and he was a Tewara) thought, 'This is a very, very\n    wonderful child. She waves her arms and she shouts at me, but I don't\n    understand a word of what she says. But if I don't do what she wants, I\n    greatly fear that that haughty Chief, Man-who-turns-his-back-on-callers,\n    will be angry.' He got up and twisted a big flat piece of bark off a\n    birch-tree and gave it to Taffy. He did this, Best Beloved, to show that\n    his heart was as white as the birch-bark and that he meant no harm; but\n    Taffy didn't quite understand.\n  </p>\n  <p>\n    'Oh!' said she. 'Now I see! You want my Mummy's living-address? Of\n    course I can't write, but I can draw pictures if I've anything sharp to\n    scratch with. Please lend me the shark's tooth off your necklace.'\n  </p>\n  <p>\n    The Stranger-man (and he was a Tewara) didn't say anything, So Taffy\n    put up her little hand and pulled at the beautiful bead and seed and\n    shark-tooth necklace round his neck.\n  </p>\n  <p>\n    The Stranger-man (and he was a Tewara) thought, 'This is a very, very,\n    very wonderful child. The shark's tooth on my necklace is a magic\n    shark's tooth, and I was always told that if anybody touched it without\n    my leave they would immediately swell up or burst, but this\n    child doesn't swell up or burst, and that important Chief,\n    Man-who-attends-strictly-to-his-business, who has not yet taken any\n    notice of me at all, doesn't seem to be afraid that she will swell up or\n    burst. I had better be more polite.'\n  </p>\n  <p>\n    So he gave Taffy the shark's tooth, and she lay down flat on her tummy\n    with her legs in the air, like some people on the drawing-room floor\n    when they want to draw pictures, and she said, 'Now I'll draw you some\n    beautiful pictures! You can look over my shoulder, but you mustn't\n    joggle. First I'll draw Daddy fishing. It isn't very like him; but Mummy\n    will know, because I've drawn his spear all broken. Well, now I'll draw\n    the other spear that he wants, the black-handled spear. It looks as if\n    it was sticking in Daddy's back, but that's because the shark's tooth\n    slipped and this piece of bark isn't big enough. That's the spear I want\n    you to fetch; so I'll draw a picture of me myself 'splaining to you. My\n    hair doesn't stand up like I've drawn, but it's easier to draw that way.\n    Now I'll draw you. I think you're very nice really, but I can't make you\n    pretty in the picture, so you mustn't be 'fended. Are you 'fended?'\n  </p>\n  <p>\n    The Stranger-man (and he was a Tewara) smiled. He thought, 'There must\n    be a big battle going to be fought somewhere, and this extraordinary\n    child, who takes my magic shark's tooth but who does not swell up or\n    burst, is telling me to call all the great Chief's tribe to help him. He\n    is a great Chief, or he would have noticed me.\n  </p>\n  <p>\n    'Look,' said Taffy, drawing very hard and rather scratchily, 'now I've\n    drawn you, and I've put the spear that Daddy wants into your hand, just\n    to remind you that you're to bring it. Now I'll show you how to find my\n    Mummy's living-address. You go along till you come to two trees (those\n    are trees), and then you go over a hill (that's a hill), and then you\n    come into a beaver-swamp all full of beavers. I haven't put in all the\n    beavers, because I can't draw beavers, but I've drawn their heads, and\n    that's all you'll see of them when you cross the swamp. Mind you don't\n    fall in! Then our Cave is just beyond the beaver-swamp. It isn't as high\n    as the hills really, but I can't draw things very small. That's my Mummy\n    outside. She is beautiful. She is the most beautifullest Mummy there\n    ever was, but she won't be 'fended when she sees I've drawn her so\n    plain. She'll be pleased of me because I can draw. Now, in case you\n    forget, I've drawn the spear that Daddy wants outside our Cave. It's\n    inside really, but you show the picture to my Mummy and she'll give it\n    you. I've made her holding up her hands, because I know she'll be so\n    pleased to see you. Isn't it a beautiful picture? And do you quite\n    understand, or shall I 'splain again?'\n  </p>\n  <p>\n    The Stranger-man (and he was a Tewara) looked at the picture and nodded\n    very hard. He said to himself,' If I do not fetch this great Chief's\n    tribe to help him, he will be slain by his enemies who are coming up on\n    all sides with spears. Now I see why the great Chief pretended not to\n    notice me! He feared that his enemies were hiding in the bushes and\n    would see him. Therefore he turned to me his back, and let the wise and\n    wonderful child draw the terrible picture showing me his difficulties.\n    I will away and get help for him from his tribe.' He did not even ask\n    Taffy the road, but raced off into the bushes like the wind, with the\n    birch-bark in his hand, and Taffy sat down most pleased.\n  </p>\n  <p>\n    Now this is the picture that Taffy had drawn for him!\n  </p>\n  <p>\n    'What have you been doing, Taffy?' said Tegumai. He had mended his spear\n    and was carefully waving it to and fro.\n  </p>\n  <p>\n    'It's a little berangement of my own, Daddy dear,' said Taffy. 'If you\n    won't ask me questions, you'll know all about it in a little time, and\n    you'll be surprised. You don't know how surprised you'll be, Daddy!\n    Promise you'll be surprised.'\n  </p>\n  <p>\n    'Very well,' said Tegumai, and went on fishing.\n  </p>\n  <p>\n    The Stranger-man&#8212;did you know he was a Tewara?&#8212;hurried away with the\n    picture and ran for some miles, till quite by accident he found Teshumai\n    Tewindrow at the door of her Cave, talking to some other Neolithic\n    ladies who had come in to a Primitive lunch. Taffy was very like\n    Teshumai, especially about the upper part of the face and the eyes,\n    so the Stranger-man&#8212;always a pure Tewara&#8212;smiled politely and handed\n    Teshumai the birch-bark. He had run hard, so that he panted, and his\n    legs were scratched with brambles, but he still tried to be polite.\n  </p>\n  <p>\n    As soon as Teshumai saw the picture she screamed like anything and flew\n    at the Stranger-man. The other Neolithic ladies at once knocked him down\n    and sat on him in a long line of six, while Teshumai pulled his hair.\n  </p>\n  <p>\n    'It's as plain as the nose on this Stranger-man's face,' she said. 'He\n    has stuck my Tegumai all full of spears, and frightened poor Taffy so\n    that her hair stands all on end; and not content with that, he brings\n    me a horrid picture of how it was done. Look!' She showed the picture to\n    all the Neolithic ladies sitting patiently on the Stranger-man. 'Here is\n    my Tegumai with his arm broken; here is a spear sticking into his back;\n    here is a man with a spear ready to throw; here is another man throwing\n    a spear from a Cave, and here are a whole pack of people' (they were\n    Taffy's beavers really, but they did look rather like people) 'coming up\n    behind Tegumai. Isn't it shocking!'\n  </p>\n  <p>\n    'Most shocking!' said the Neolithic ladies, and they filled the\n    Stranger-man's hair with mud (at which he was surprised), and they beat\n    upon the Reverberating Tribal Drums, and called together all the chiefs\n    of the Tribe of Tegumai, with their Hetmans and Dolmans, all Neguses,\n    Woons, and Akhoonds of the organisation, in addition to the Warlocks,\n    Angekoks, Juju-men, Bonzes, and the rest, who decided that before they\n    chopped the Stranger-man's head off he should instantly lead them down\n    to the river and show them where he had hidden poor Taffy.\n  </p>\n  <p>\n    By this time the Stranger-man (in spite of being a Tewara) was really\n    annoyed. They had filled his hair quite solid with mud; they had rolled\n    him up and down on knobby pebbles; they had sat upon him in a long\n    line of six; they had thumped him and bumped him till he could hardly\n    breathe; and though he did not understand their language, he was almost\n    sure that the names the Neolithic ladies called him were not ladylike.\n    However, he said nothing till all the Tribe of Tegumai were assembled,\n    and then he led them back to the bank of the Wagai river, and there they\n    found Taffy making daisy-chains, and Tegumai carefully spearing small\n    carp with his mended spear.\n  </p>\n  <p>\n    'Well, you have been quick!' said Taffy. 'But why did you bring so many\n    people? Daddy dear, this is my surprise. Are you surprised, Daddy?'\n  </p>\n  <p>\n    'Very,' said Tegumai; 'but it has ruined all my fishing for the day.\n    Why, the whole dear, kind, nice, clean, quiet Tribe is here, Taffy.'\n  </p>\n  <p>\n    And so they were. First of all walked Teshumai Tewindrow and the\n    Neolithic ladies, tightly holding on to the Stranger-man, whose hair was\n    full of mud (although he was a Tewara). Behind them came the Head Chief,\n    the Vice-Chief, the Deputy and Assistant Chiefs (all armed to the upper\n    teeth), the Hetmans and Heads of Hundreds, Platoffs with their Platoons,\n    and Dolmans with their Detachments; Woons, Neguses, and Akhoonds ranking\n    in the rear (still armed to the teeth). Behind them was the Tribe in\n    hierarchical order, from owners of four caves (one for each season), a\n    private reindeer-run, and two salmon-leaps, to feudal and prognathous\n    Villeins, semi-entitled to half a bearskin of winter nights, seven yards\n    from the fire, and adscript serfs, holding the reversion of a scraped\n    marrow-bone under heriot (Aren't those beautiful words, Best Beloved?).\n    They were all there, prancing and shouting, and they frightened every\n    fish for twenty miles, and Tegumai thanked them in a fluid Neolithic\n    oration.\n  </p>\n  <p>\n    Then Teshumai Tewindrow ran down and kissed and hugged Taffy very much\n    indeed; but the Head Chief of the Tribe of Tegumai took Tegumai by the\n    top-knot feathers and shook him severely.\n  </p>\n  <p>\n    'Explain! Explain! Explain!' cried all the Tribe of Tegumai.\n  </p>\n  <p>\n    'Goodness' sakes alive!' said Tegumai. 'Let go of my top-knot. Can't\n    a man break his carp-spear without the whole countryside descending on\n    him? You're a very interfering people.'\n  </p>\n  <p>\n    'I don't believe you've brought my Daddy's black-handled spear after\n    all,' said Taffy. 'And what are you doing to my nice Stranger-man?'\n  </p>\n  <p>\n    They were thumping him by twos and threes and tens till his eyes turned\n    round and round. He could only gasp and point at Taffy.\n  </p>\n  <p>\n    'Where are the bad people who speared you, my darling?' said Teshumai\n    Tewindrow.\n  </p>\n  <p>\n    'There weren't any,' said Tegumai. 'My only visitor this morning was the\n    poor fellow that you are trying to choke. Aren't you well, or are you\n    ill, O Tribe of Tegumai?'\n  </p>\n  <p>\n    'He came with a horrible picture,' said the Head Chief,&#8212;'a picture that\n    showed you were full of spears.'\n  </p>\n  <p>\n    'Er-um-Pr'aps I'd better 'splain that I gave him that picture,' said\n    Taffy, but she did not feel quite comfy.\n  </p>\n  <p>\n    'You!' said the Tribe of Tegumai all together.\n    'Small-person-with-no-manners-who-ought-to-be-spanked! You?'\n  </p>\n  <p>\n    'Taffy dear, I'm afraid we're in for a little trouble,' said her Daddy,\n    and put his arm round her, so she didn't care.\n  </p>\n  <p>\n    'Explain! Explain! Explain!' said the Head Chief of the Tribe of\n    Tegumai, and he hopped on one foot.\n  </p>\n  <p>\n    'I wanted the Stranger-man to fetch Daddy's spear, so I drawded it,'\n    said Taffy. 'There wasn't lots of spears. There was only one spear. I\n    drawded it three times to make sure. I couldn't help it looking as if it\n    stuck into Daddy's head&#8212;there wasn't room on the birch-bark; and those\n    things that Mummy called bad people are my beavers. I drawded them to\n    show him the way through the swamp; and I drawded Mummy at the mouth of\n    the Cave looking pleased because he is a nice Stranger-man, and I think\n    you are just the stupidest people in the world,' said Taffy. 'He is a\n    very nice man. Why have you filled his hair with mud? Wash him!'\n  </p>\n  <p>\n    Nobody said anything at all for a longtime, till the Head Chief laughed;\n    then the Stranger-man (who was at least a Tewara) laughed; then Tegumai\n    laughed till he fell down flat on the bank; then all the Tribe laughed\n    more and worse and louder. The only people who did not laugh were\n    Teshumai Tewindrow and all the Neolithic ladies. They were very polite\n    to all their husbands, and said 'Idiot!' ever so often.\n  </p>\n  <p>\n    Then the Head Chief of the Tribe of Tegumai cried and said and sang, 'O\n    Small-person-with-out-any-manners-who-ought-to-be-spanked, you've hit\n    upon a great invention!'\n  </p>\n  <p>\n    'I didn't intend to; I only wanted Daddy's black-handled spear,' said\n    Taffy.\n  </p>\n  <p>\n    'Never mind. It is a great invention, and some day men will call it\n    writing. At present it is only pictures, and, as we have seen to-day,\n    pictures are not always properly understood. But a time will come, O\n    Babe of Tegumai, when we shall make letters&#8212;all twenty-six of 'em,&#8212;and\n    when we shall be able to read as well as to write, and then we shall\n    always say exactly what we mean without any mistakes. Let the Neolithic\n    ladies wash the mud out of the stranger's hair.'\n  </p>\n  <p>\n    'I shall be glad of that,' said Taffy, 'because, after all, though\n    you've brought every single other spear in the Tribe of Tegumai, you've\n    forgotten my Daddy's black-handled spear.'\n  </p>\n  <p>\n    Then the Head Chief cried and said and sang, 'Taffy dear, the next time\n    you write a picture-letter, you'd better send a man who can talk our\n    language with it, to explain what it means. I don't mind it myself,\n    because I am a Head Chief, but it's very bad for the rest of the Tribe\n    of Tegumai, and, as you can see, it surprises the stranger.'\n  </p>\n  <p>\n    Then they adopted the Stranger-man (a genuine Tewara of Tewar) into the\n    Tribe of Tegumai, because he was a gentleman and did not make a fuss\n    about the mud that the Neolithic ladies had put into his hair. But\n    from that day to this (and I suppose it is all Taffy's fault), very few\n    little girls have ever liked learning to read or write. Most of them\n    prefer to draw pictures and play about with their Daddies&#8212;just like\n    Taffy.\n  </p>\n  <pre>     THERE runs a road by Merrow Down&#8212;\n       A grassy track to-day it is\n     An hour out of Guildford town,\n       Above the river Wey it is.\n\n     Here, when they heard the horse-bells ring,\n       The ancient Britons dressed and rode\n     To watch the dark Phoenicians bring\n       Their goods along the Western Road.\n\n     And here, or hereabouts, they met\n       To hold their racial talks and such&#8212;\n     To barter beads for Whitby jet,\n       And tin for gay shell torques and such.\n\n     But long and long before that time\n       (When bison used to roam on it)\n     Did Taffy and her Daddy climb\n       That down, and had their home on it.\n\n     Then beavers built in Broadstone brook\n       And made a swamp where Bramley stands:\n     And hears from Shere would come and look\n       For Taffimai where Shamley stands.\n\n     The Wey, that Taffy called Wagai,\n       Was more than six times bigger then;\n     And all the Tribe of Tegumai\n       They cut a noble figure then!\n</pre>\n  <a name=\"2H_4_0009\">\n  </a>\n  <h2>\n    HOW THE ALPHABET WAS MADE\n  </h2>\n  <p>\n    The week after Taffimai Metallumai (we will still call her Taffy,\n    Best Beloved) made that little mistake about her Daddy's spear and the\n    Stranger-man and the picture-letter and all, she went carp-fishing again\n    with her Daddy. Her Mummy wanted her to stay at home and help hang up\n    hides to dry on the big drying-poles outside their Neolithic Cave,\n    but Taffy slipped away down to her Daddy quite early, and they fished.\n    Presently she began to giggle, and her Daddy said, 'Don't be silly,\n    child.'\n  </p>\n  <p>\n    'But wasn't it inciting!' said Taffy. 'Don't you remember how the Head\n    Chief puffed out his cheeks, and how funny the nice Stranger-man looked\n    with the mud in his hair?'\n  </p>\n  <p>\n    'Well do I,' said Tegumai. 'I had to pay two deerskins&#8212;soft ones with\n    fringes&#8212;to the Stranger-man for the things we did to him.'\n  </p>\n  <p>\n    'We didn't do anything,' said Taffy. 'It was Mummy and the other\n    Neolithic ladies&#8212;and the mud.'\n  </p>\n  <p>\n    'We won't talk about that,' said her Daddy, 'Let's have lunch.'\n  </p>\n  <p>\n    Taffy took a marrow-bone and sat mousy-quiet for ten whole minutes,\n    while her Daddy scratched on pieces of birch-bark with a shark's tooth.\n    Then she said, 'Daddy, I've thinked of a secret surprise. You make a\n    noise&#8212;any sort of noise.'\n  </p>\n  <p>\n    'Ah!' said Tegumai. 'Will that do to begin with?'\n  </p>\n  <p>\n    'Yes,' said Taffy. 'You look just like a carp-fish with its mouth open.\n    Say it again, please.'\n  </p>\n  <p>\n    'Ah! ah! ah!' said her Daddy. 'Don't be rude, my daughter.'\n  </p>\n  <p>\n    'I'm not meaning rude, really and truly,' said Taffy. 'It's part of my\n    secret-surprise-think. Do say ah, Daddy, and keep your mouth open at\n    the end, and lend me that tooth. I'm going to draw a carp-fish's mouth\n    wide-open.'\n  </p>\n  <p>\n    'What for?' said her Daddy.\n  </p>\n  <p>\n    'Don't you see?' said Taffy, scratching away on the bark. 'That will be\n    our little secret s'prise. When I draw a carp-fish with his mouth open\n    in the smoke at the back of our Cave&#8212;if Mummy doesn't mind&#8212;it will\n    remind you of that ah-noise. Then we can play that it was me jumped\n    out of the dark and s'prised you with that noise&#8212;same as I did in the\n    beaver-swamp last winter.'\n  </p>\n  <p>\n    'Really?' said her Daddy, in the voice that grown-ups use when they are\n    truly attending. 'Go on, Taffy.'\n  </p>\n  <p>\n    'Oh bother!' she said. 'I can't draw all of a carp-fish, but I can draw\n    something that means a carp-fish's mouth. Don't you know how they stand\n    on their heads rooting in the mud? Well, here's a pretence carp-fish (we\n    can play that the rest of him is drawn). Here's just his mouth, and that\n    means ah.' And she drew this. (1.)\n  </p>\n  <p>\n    'That's not bad,' said Tegumai, and scratched on his own piece of bark\n    for himself; but you've forgotten the feeler that hangs across his\n    mouth.'\n  </p>\n  <p>\n    'But I can't draw, Daddy.'\n  </p>\n  <p>\n    'You needn't draw anything of him except just the opening of his mouth\n    and the feeler across. Then we'll know he's a carp-fish, 'cause the\n    perches and trouts haven't got feelers. Look here, Taffy.' And he drew\n    this. (2.)\n  </p>\n  <p>\n    'Now I'll copy it.' said Taffy. 'Will you understand this when you see\n    it?'\n  </p>\n  <p>\n    'Perfectly,' said her Daddy.\n  </p>\n  <p>\n    And she drew this. (3.) 'And I'll be quite as s'prised when I see it\n    anywhere, as if you had jumped out from behind a tree and said '\"Ah!\"'\n  </p>\n  <p>\n    'Now, make another noise,' said Taffy, very proud.\n  </p>\n  <p>\n    'Yah!' said her Daddy, very loud.\n  </p>\n  <p>\n    'H'm,' said Taffy. 'That's a mixy noise. The end part is\n    ah-carp-fish-mouth; but what can we do about the front part? Yer-yer-yer\n    and ah! Ya!'\n  </p>\n  <p>\n    'It's very like the carp-fish-mouth noise. Let's draw another bit of the\n    carp-fish and join 'em,' said her Daddy. He was quite incited too.\n  </p>\n  <p>\n    'No. If they're joined, I'll forget. Draw it separate. Draw his tail.\n    If he's standing on his head the tail will come first. 'Sides, I think I\n    can draw tails easiest,' said Taffy.\n  </p>\n  <p>\n    'A good notion,' said Tegumai. 'Here's a carp-fish tail for the\n    yer-noise.' And he drew this. (4.)\n  </p>\n  <p>\n    'I'll try now,' said Taffy. ''Member I can't draw like you, Daddy. Will\n    it do if I just draw the split part of the tail, and the sticky-down\n    line for where it joins?' And she drew this. (5.)\n  </p>\n  <p>\n    Her Daddy nodded, and his eyes were shiny bright with 'citement.\n  </p>\n  <p>\n    'That's beautiful,' she said. 'Now make another noise, Daddy.'\n  </p>\n  <p>\n    'Oh!' said her Daddy, very loud.\n  </p>\n  <p>\n    'That's quite easy,' said Taffy. 'You make your mouth all around like an\n    egg or a stone. So an egg or a stone will do for that.'\n  </p>\n  <p>\n    'You can't always find eggs or stones. We'll have to scratch a round\n    something like one.' And he drew this. (6.)\n  </p>\n  <p>\n    'My gracious!' said Taffy, 'what a lot of noise-pictures we've\n    made,&#8212;carp-mouth, carp-tail, and egg! Now, make another noise, Daddy.'\n  </p>\n  <p>\n    'Ssh!' said her Daddy, and frowned to himself, but Taffy was too incited\n    to notice.\n  </p>\n  <p>\n    'That's quite easy,' she said, scratching on the bark.\n  </p>\n  <p>\n    'Eh, what?' said her Daddy. 'I meant I was thinking, and didn't want to\n    be disturbed.'\n  </p>\n  <p>\n    'It's a noise just the same. It's the noise a snake makes, Daddy,\n    when it is thinking and doesn't want to be disturbed. Let's make the\n    ssh-noise a snake. Will this do?' And she drew this. (7.)\n  </p>\n  <p>\n    'There,' she said. 'That's another s'prise-secret. When you draw a\n    hissy-snake by the door of your little back-cave where you mend\n    the spears, I'll know you're thinking hard; and I'll come in most\n    mousy-quiet. And if you draw it on a tree by the river when you are\n    fishing, I'll know you want me to walk most most mousy-quiet, so as not\n    to shake the banks.'\n  </p>\n  <p>\n    'Perfectly true,' said Tegumai. And there's more in this game than you\n    think. Taffy, dear, I've a notion that your Daddy's daughter has hit\n    upon the finest thing that there ever was since the Tribe of Tegumai\n    took to using shark's teeth instead of flints for their spear-heads. I\n    believe we've found out the big secret of the world.'\n  </p>\n  <p>\n    'Why?' said Taffy, and her eyes shone too with incitement.\n  </p>\n  <p>\n    'I'll show,' said her Daddy. 'What's water in the Tegumai language?'\n  </p>\n  <p>\n    'Ya, of course, and it means river too&#8212;like Wagai-ya&#8212;the Wagai river.'\n  </p>\n  <p>\n    'What is bad water that gives you fever if you drink it&#8212;black\n    water&#8212;swamp-water?'\n  </p>\n  <p>\n    'Yo, of course.'\n  </p>\n  <p>\n    'Now look,' said her Daddy. 'S'pose you saw this scratched by the side\n    of a pool in the beaver-swamp?' And he drew this. (8.)\n  </p>\n  <p>\n    'Carp-tail and round egg. Two noises mixed! Yo, bad water,' said Taffy.\n    ''Course I wouldn't drink that water because I'd know you said it was\n    bad.'\n  </p>\n  <p>\n    'But I needn't be near the water at all. I might be miles away, hunting,\n    and still&#8212;'\n  </p>\n  <p>\n    'And still it would be just the same as if you stood there and said,\n    \"G'way, Taffy, or you'll get fever.\" All that in a carp-fish-tail and\n    a round egg! O Daddy, we must tell Mummy, quick!' and Taffy danced all\n    round him.\n  </p>\n  <p>\n    'Not yet,' said Tegumai; 'not till we've gone a little further. Let's\n    see. Yo is bad water, but So is food cooked on the fire, isn't it?' And\n    he drew this. (9.)\n  </p>\n  <p>\n    'Yes. Snake and egg,' said Taffy 'So that means dinner's ready. If you\n    saw that scratched on a tree you'd know it was time to come to the Cave.\n    So'd I.'\n  </p>\n  <p>\n    'My Winkie!' said Tegumai. 'That's true too. But wait a minute. I see\n    a difficulty. SO means \"come and have dinner,\" but sho means the\n    drying-poles where we hang our hides.'\n  </p>\n  <p>\n    'Horrid old drying-poles!' said Taffy. 'I hate helping to hang heavy,\n    hot, hairy hides on them. If you drew the snake and egg, and I thought\n    it meant dinner, and I came in from the wood and found that it meant I\n    was to help Mummy hang the two hides on the drying-poles, what would I\n    do?'\n  </p>\n  <p>\n    'You'd be cross. So'd Mummy. We must make a new picture for sho. We must\n    draw a spotty snake that hisses sh-sh, and we'll play that the plain\n    snake only hisses ssss.'\n  </p>\n  <p>\n    'I couldn't be sure how to put in the spots,' said Taffy. 'And p'raps\n    if you were in a hurry you might leave them out, and I'd think it was\n    so when it was sho, and then Mummy would catch me just the same. No! I\n    think we'd better draw a picture of the horrid high drying-poles their\n    very selves, and make quite sure. I'll put them in just after the\n    hissy-snake. Look!' And she drew this. (10.)\n  </p>\n  <p>\n    'P'raps that's safest. It's very like our drying-poles, anyhow,'\n    said her Daddy, laughing. 'Now I'll make a new noise with a snake and\n    drying-pole sound in it. I'll say shi. That's Tegumai for spear, Taffy.'\n    And he laughed.\n  </p>\n  <p>\n    'Don't make fun of me,' said Taffy, as she thought of her picture-letter\n    and the mud in the Stranger-man's hair. 'You draw it, Daddy.'\n  </p>\n  <p>\n    'We won't have beavers or hills this time, eh?' said her Daddy, 'I'll\n    just draw a straight line for my spear.' and he drew this. (11.)\n  </p>\n  <p>\n    'Even Mummy couldn't mistake that for me being killed.'\n  </p>\n  <p>\n    'Please don't, Daddy. It makes me uncomfy. Do some more noises. We're\n    getting on beautifully.'\n  </p>\n  <p>\n    'Er-hm!' said Tegumai, looking up. 'We'll say shu. That means sky.'\n  </p>\n  <p>\n    Taffy drew the snake and the drying-pole. Then she stopped. 'We must\n    make a new picture for that end sound, mustn't we?'\n  </p>\n  <p>\n    'Shu-shu-u-u-u!' said her Daddy. 'Why, it's just like the\n    round-egg-sound made thin.'\n  </p>\n  <p>\n    'Then s'pose we draw a thin round egg, and pretend it's a frog that\n    hasn't eaten anything for years.'\n  </p>\n  <p>\n    'N-no,' said her Daddy. 'If we drew that in a hurry we might mistake it\n    for the round egg itself. Shu-shu-shu! 'I tell you what we'll do. We'll\n    open a little hole at the end of the round egg to show how the O-noise\n    runs out all thin, ooo-oo-oo. Like this.' And he drew this. (12.)\n  </p>\n  <p>\n    'Oh, that's lovely! Much better than a thin frog. Go on,' said Taffy,\n    using her shark's tooth. Her Daddy went on drawing, and his hand shook\n    with incitement. He went on till he had drawn this. (13.)\n  </p>\n  <p>\n    'Don't look up, Taffy,' he said. 'Try if you can make out what that\n    means in the Tegumai language. If you can, we've found the Secret.'\n  </p>\n  <p>\n    'Snake&#8212;pole&#8212;broken&#8212;egg&#8212;carp&#8212;tail and carp-mouth,' said Taffy.\n    'Shu-ya. Sky-water (rain).' Just then a drop fell on her hand, for the\n    day had clouded over. 'Why, Daddy, it's raining. Was that what you meant\n    to tell me?'\n  </p>\n  <p>\n    'Of course,' said her Daddy. 'And I told it you without saying a word,\n    didn't I?'\n  </p>\n  <p>\n    'Well, I think I would have known it in a minute, but that raindrop made\n    me quite sure. I'll always remember now. Shu-ya means rain, or \"it is\n    going to rain.\" Why, Daddy!' She got up and danced round him. 'S'pose\n    you went out before I was awake, and drawed shu-ya in the smoke on the\n    wall, I'd know it was going to rain and I'd take my beaver-skin hood.\n    Wouldn't Mummy be surprised?'\n  </p>\n  <p>\n    Tegumai got up and danced. (Daddies didn't mind doing those things in\n    those days.) 'More than that! More than that!' he said. 'S'pose I wanted\n    to tell you it wasn't going to rain much and you must come down to the\n    river, what would we draw? Say the words in Tegumai-talk first.'\n  </p>\n  <p>\n    'Shu-ya-las, ya maru. (Sky-water ending. River come to.) what a lot of\n    new sounds! I don't see how we can draw them.'\n  </p>\n  <p>\n    'But I do&#8212;but I do!' said Tegumai. 'Just attend a minute, Taffy, and\n    we won't do any more to-day. We've got shu-ya all right, haven't we? But\n    this las is a teaser. La-la-la' and he waved his shark-tooth.\n  </p>\n  <p>\n    'There's the hissy-snake at the end and the carp-mouth before the\n    snake&#8212;as-as-as. We only want la-la,' said Taffy.\n  </p>\n  <p>\n    'I know it, but we have to make la-la. And we're the first people in all\n    the world who've ever tried to do it, Taffimai!'\n  </p>\n  <p>\n    'Well,' said Taffy, yawning, for she was rather tired. 'Las means\n    breaking or finishing as well as ending, doesn't it?'\n  </p>\n  <p>\n    'So it does,' said Tegumai. 'To-las means that there's no water in the\n    tank for Mummy to cook with&#8212;just when I'm going hunting, too.'\n  </p>\n  <p>\n    'And shi-las means that your spear is broken. If I'd only thought of\n    that instead of drawing silly beaver pictures for the Stranger!'\n  </p>\n  <p>\n    'La! La! La!' said Tegumai, waiving his stick and frowning. 'Oh bother!'\n  </p>\n  <p>\n    'I could have drawn shi quite easily,' Taffy went on. 'Then I'd have\n    drawn your spear all broken&#8212;this way!' And she drew. (14.)\n  </p>\n  <p>\n    'The very thing,' said Tegumai. 'That's la all over. It isn't like any\n    of the other marks either.' And he drew this. (15.)\n  </p>\n  <p>\n    'Now for ya. Oh, we've done that before. Now for maru. Mum-mum-mum. Mum\n    shuts one's mouth up, doesn't it? We'll draw a shut mouth like this.'\n    And he drew. (16.)\n  </p>\n  <p>\n    'Then the carp-mouth open. That makes Ma-ma-ma! But what about this\n    rrrrr-thing, Taffy?'\n  </p>\n  <p>\n    'It sounds all rough and edgy, like your shark-tooth saw when you're\n    cutting out a plank for the canoe,' said Taffy.\n  </p>\n  <p>\n    'You mean all sharp at the edges, like this?' said Tegumai. And he drew.\n    (17.)\n  </p>\n  <p>\n    ''Xactly,' said Taffy. 'But we don't want all those teeth: only put\n    two.'\n  </p>\n  <p>\n    'I'll only put in one,' said Tegumai. 'If this game of ours is going\n    to be what I think it will, the easier we make our sound-pictures the\n    better for everybody.' And he drew. (18.)\n  </p>\n  <p>\n    'Now, we've got it,' said Tegumai, standing on one leg. 'I'll draw 'em\n    all in a string like fish.'\n  </p>\n  <p>\n    'Hadn't we better put a little bit of stick or something between each\n    word, so's they won't rub up against each other and jostle, same as if\n    they were carps?'\n  </p>\n  <p>\n    'Oh, I'll leave a space for that,' said her Daddy. And very incitedly he\n    drew them all without stopping, on a big new bit of birch-bark. (19.)\n  </p>\n  <p>\n    'Shu-ya-las ya-maru,' said Taffy, reading it out sound by sound.\n  </p>\n  <p>\n    'That's enough for to-day,' said Tegumai. 'Besides, you're getting\n    tired, Taffy. Never mind, dear. We'll finish it all to-morrow, and then\n    we'll be remembered for years and years after the biggest trees you can\n    see are all chopped up for firewood.'\n  </p>\n  <p>\n    So they went home, and all that evening Tegumai sat on one side of the\n    fire and Taffy on the other, drawing ya's and yo's and shu's and shi's\n    in the smoke on the wall and giggling together till her Mummy said,\n    'Really, Tegumai, you're worse than my Taffy.'\n  </p>\n  <p>\n    'Please don't mind,' said Taffy. 'It's only our secret-s'prise, Mummy\n    dear, and we'll tell you all about it the very minute it's done; but\n    please don't ask me what it is now, or else I'll have to tell.'\n  </p>\n  <p>\n    So her Mummy most carefully didn't; and bright and early next morning\n    Tegumai went down to the river to think about new sound pictures,\n    and when Taffy got up she saw Ya-las (water is ending or running out)\n    chalked on the side of the big stone water-tank, outside the Cave.\n  </p>\n  <p>\n    'Um,' said Taffy. 'These picture-sounds are rather a bother! Daddy's\n    just as good as come here himself and told me to get more water for\n    Mummy to cook with.' She went to the spring at the back of the house and\n    filled the tank from a bark bucket, and then she ran down to the river\n    and pulled her Daddy's left ear&#8212;the one that belonged to her to pull\n    when she was good.\n  </p>\n  <p>\n    'Now come along and we'll draw all the left-over sound-pictures,' said\n    her Daddy, and they had a most inciting day of it, and a beautiful lunch\n    in the middle, and two games of romps. When they came to T, Taffy said\n    that as her name, and her Daddy's, and her Mummy's all began with that\n    sound, they should draw a sort of family group of themselves holding\n    hands. That was all very well to draw once or twice; but when it came to\n    drawing it six or seven times, Taffy and Tegumai drew it scratchier and\n    scratchier, till at last the T-sound was only a thin long Tegumai with\n    his arms out to hold Taffy and Teshumai. You can see from these three\n    pictures partly how it happened. (20, 21, 22.)\n  </p>\n  <p>\n    Many of the other pictures were much too beautiful to begin with,\n    especially before lunch, but as they were drawn over and over again on\n    birch-bark, they became plainer and easier, till at last even Tegumai\n    said he could find no fault with them. They turned the hissy-snake the\n    other way round for the Z-sound, to show it was hissing backwards in a\n    soft and gentle way (23); and they just made a twiddle for E, because\n    it came into the pictures so often (24); and they drew pictures of the\n    sacred Beaver of the Tegumais for the B-sound (25, 26, 27, 28); and\n    because it was a nasty, nosy noise, they just drew noses for the\n    N-sound, till they were tired (29); and they drew a picture of the big\n    lake-pike's mouth for the greedy Ga-sound (30); and they drew the pike's\n    mouth again with a spear behind it for the scratchy, hurty Ka-sound\n    (31); and they drew pictures of a little bit of the winding Wagai river\n    for the nice windy-windy Wa-sound (32, 33); and so on and so forth and\n    so following till they had done and drawn all the sound-pictures that\n    they wanted, and there was the Alphabet, all complete.\n  </p>\n  <p>\n    And after thousands and thousands and thousands of years, and after\n    Hieroglyphics and Demotics, and Nilotics, and Cryptics, and Cufics, and\n    Runics, and Dorics, and Ionics, and all sorts of other ricks and\n    tricks (because the Woons, and the Neguses, and the Akhoonds, and the\n    Repositories of Tradition would never leave a good thing alone when they\n    saw it), the fine old easy, understandable Alphabet&#8212;A, B, C, D, E,\n    and the rest of 'em&#8212;got back into its proper shape again for all Best\n    Beloveds to learn when they are old enough.\n  </p>\n  <p>\n    But I remember Tegumai Bopsulai, and Taffimai Metallumai and Teshumai\n    Tewindrow, her dear Mummy, and all the days gone by. And it was so&#8212;just\n    so&#8212;a little time ago&#8212;on the banks of the big Wagai!\n  </p>\n  <pre>     OF all the Tribe of Tegumai\n       Who cut that figure, none remain,&#8212;\n     On Merrow Down the cuckoos cry\n       The silence and the sun remain.\n\n     But as the faithful years return\n       And hearts unwounded sing again,\n     Comes Taffy dancing through the fern\n       To lead the Surrey spring again.\n\n     Her brows are bound with bracken-fronds,\n       And golden elf-locks fly above;\n     Her eyes are bright as diamonds\n       And bluer than the skies above.\n\n     In mocassins and deer-skin cloak,\n       Unfearing, free and fair she flits,\n     And lights her little damp-wood smoke\n       To show her Daddy where she flits.\n\n     For far&#8212;oh, very far behind,\n       So far she cannot call to him,\n     Comes Tegumai alone to find\n       The daughter that was all to him.\n</pre>\n  <a name=\"2H_4_0010\">\n  </a>\n  <h2>\n    THE CRAB THAT PLAYED WITH THE SEA\n  </h2>\n  <p>\n    Before the High and Far-Off Times, O my Best Beloved, came the Time of\n    the Very Beginnings; and that was in the days when the Eldest Magician\n    was getting Things ready. First he got the Earth ready; then he got the\n    Sea ready; and then he told all the Animals that they could come out and\n    play. And the Animals said, 'O Eldest Magician, what shall we play\n    at?' and he said, 'I will show you. He took the\n    Elephant&#8212;All-the-Elephant-there-was&#8212;and said, 'Play at being\n    an Elephant,' and All-the-Elephant-there-was played. He took the\n    Beaver&#8212;All-the-Beaver-there-was and said, 'Play at being a Beaver,'\n    and All-the Beaver-there-was played. He took the Cow&#8212;All-the\n    Cow-there-was&#8212;and said, 'Play at being a Cow,' and\n    All-the-Cow-there-was played. He took the Turtle&#8212;All-the-Turtle\n    there-was and said, 'Play at being a Turtle,' and\n    All-the-Turtle-there-was played. One by one he took all the beasts and\n    birds and fishes and told them what to play at.\n  </p>\n  <p>\n    But towards evening, when people and things grow restless and tired,\n    there came up the Man (With his own little girl-daughter?)&#8212;Yes, with\n    his own best beloved little girl-daughter sitting upon his shoulder, and\n    he said, 'What is this play, Eldest Magician?' And the Eldest Magician\n    said, 'Ho, Son of Adam, this is the play of the Very Beginning; but you\n    are too wise for this play.' And the Man saluted and said, 'Yes, I am\n    too wise for this play; but see that you make all the Animals obedient\n    to me.'\n  </p>\n  <p>\n    Now, while the two were talking together, Pau Amma the Crab, who was\n    next in the game, scuttled off sideways and stepped into the sea, saying\n    to himself, 'I will play my play alone in the deep waters, and I will\n    never be obedient to this son of Adam.' Nobody saw him go away except\n    the little girl-daughter where she leaned on the Man's shoulder. And the\n    play went on till there were no more Animals left without orders; and\n    the Eldest Magician wiped the fine dust off his hands and walked about\n    the world to see how the Animals were playing.\n  </p>\n  <p>\n    He went North, Best Beloved, and he found All-the-Elephant-there-was\n    digging with his tusks and stamping with his feet in the nice new clean\n    earth that had been made ready for him.\n  </p>\n  <p>\n    'Kun?' said All-the-Elephant-there-was, meaning, 'Is this right?'\n  </p>\n  <p>\n    'Payah kun,' said the Eldest Magician, meaning, 'That is quite\n    right'; and he breathed upon the great rocks and lumps of earth that\n    All-the-Elephant-there-was had thrown up, and they became the great\n    Himalayan Mountains, and you can look them out on the map.\n  </p>\n  <p>\n    He went East, and he found All-the-Cow there-was feeding in the field\n    that had been made ready for her, and she licked her tongue round a\n    whole forest at a time, and swallowed it and sat down to chew her cud.\n  </p>\n  <p>\n    'Kun?' said All-the-Cow-there-was.\n  </p>\n  <p>\n    'Payah kun,' said the Eldest Magician; and he breathed upon the bare\n    patch where she had eaten, and upon the place where she had sat down,\n    and one became the great Indian Desert, and the other became the Desert\n    of Sahara, and you can look them out on the map.\n  </p>\n  <p>\n    He went West, and he found All-the-Beaver-there-was making a beaver-dam\n    across the mouths of broad rivers that had been got ready for him.\n  </p>\n  <p>\n    'Kun?' said All-the-Beaver-there-was.\n  </p>\n  <p>\n    'Payah kun,' said the Eldest Magician; and he breathed upon the fallen\n    trees and the still water, and they became the Everglades in Florida,\n    and you may look them out on the map.\n  </p>\n  <p>\n    Then he went South and found All-the-Turtle-there-was scratching with\n    his flippers in the sand that had been got ready for him, and the sand\n    and the rocks whirled through the air and fell far off into the sea.\n  </p>\n  <p>\n    'Kun?' said All-the-Turtle-there-was.\n  </p>\n  <p>\n    'Payah kun,' said the Eldest Magician; and he breathed upon the sand and\n    the rocks, where they had fallen in the sea, and they became the most\n    beautiful islands of Borneo, Celebes, Sumatra, Java, and the rest of the\n    Malay Archipelago, and you can look them out on the map!\n  </p>\n  <p>\n    By and by the Eldest Magician met the Man on the banks of the Perak\n    river, and said, 'Ho! Son of Adam, are all the Animals obedient to you?'\n  </p>\n  <p>\n    'Yes,' said the Man.\n  </p>\n  <p>\n    'Is all the Earth obedient to you?'\n  </p>\n  <p>\n    'Yes,' said the Man.\n  </p>\n  <p>\n    'Is all the Sea obedient to you?'\n  </p>\n  <p>\n    'No,' said the Man. 'Once a day and once a night the Sea runs up the\n    Perak river and drives the sweet-water back into the forest, so that my\n    house is made wet; once a day and once a night it runs down the river\n    and draws all the water after it, so that there is nothing left but mud,\n    and my canoe is upset. Is that the play you told it to play?'\n  </p>\n  <p>\n    'No,' said the Eldest Magician. 'That is a new and a bad play.'\n  </p>\n  <p>\n    'Look!' said the Man, and as he spoke the great Sea came up the mouth of\n    the Perak river, driving the river backwards till it overflowed all the\n    dark forests for miles and miles, and flooded the Man's house.\n  </p>\n  <p>\n    'This is wrong. Launch your canoe and we will find out who is playing\n    with the Sea,' said the Eldest Magician. They stepped into the canoe;\n    the little girl-daughter came with them; and the Man took his kris&#8212;a\n    curving, wavy dagger with a blade like a flame,&#8212;and they pushed out on\n    the Perak river. Then the sea began to run back and back, and the canoe\n    was sucked out of the mouth of the Perak river, past Selangor, past\n    Malacca, past Singapore, out and out to the Island of Bingtang, as\n    though it had been pulled by a string.\n  </p>\n  <p>\n    Then the Eldest Magician stood up and shouted, 'Ho! beasts, birds, and\n    fishes, that I took between my hands at the Very Beginning and taught\n    the play that you should play, which one of you is playing with the\n    Sea?'\n  </p>\n  <p>\n    Then all the beasts, birds, and fishes said together, 'Eldest Magician,\n    we play the plays that you taught us to play&#8212;we and our children's\n    children. But not one of us plays with the Sea.'\n  </p>\n  <p>\n    Then the Moon rose big and full over the water, and the Eldest Magician\n    said to the hunchbacked old man who sits in the Moon spinning a\n    fishing-line with which he hopes one day to catch the world, 'Ho! Fisher\n    of the Moon, are you playing with the Sea?'\n  </p>\n  <p>\n    'No,' said the Fisherman, 'I am spinning a line with which I shall some\n    day catch the world; but I do not play with the Sea.' And he went on\n    spinning his line.\n  </p>\n  <p>\n    Now there is also a Rat up in the Moon who always bites the old\n    Fisherman's line as fast as it is made, and the Eldest Magician said to\n    him, 'Ho! Rat of the Moon, are you playing with the Sea?'\n  </p>\n  <p>\n    And the Rat said, 'I am too busy biting through the line that this\n    old Fisherman is spinning. I do not play with the Sea.' And he went on\n    biting the line.\n  </p>\n  <p>\n    Then the little girl-daughter put up her little soft brown arms with the\n    beautiful white shell bracelets and said, 'O Eldest Magician! when my\n    father here talked to you at the Very Beginning, and I leaned upon his\n    shoulder while the beasts were being taught their plays, one beast went\n    away naughtily into the Sea before you had taught him his play.\n  </p>\n  <p>\n    And the Eldest Magician said, 'How wise are little children who see and\n    are silent! What was the beast like?'\n  </p>\n  <p>\n    And the little girl-daughter said, 'He was round and he was flat; and\n    his eyes grew upon stalks; and he walked sideways like this; and he was\n    covered with strong armour upon his back.'\n  </p>\n  <p>\n    And the Eldest Magician said, 'How wise are little children who speak\n    truth! Now I know where Pau Amma went. Give me the paddle!'\n  </p>\n  <p>\n    So he took the paddle; but there was no need to paddle, for the water\n    flowed steadily past all the islands till they came to the place called\n    Pusat Tasek&#8212;the Heart of the Sea&#8212;where the great hollow is that leads\n    down to the heart of the world, and in that hollow grows the Wonderful\n    Tree, Pauh Janggi, that bears the magic twin nuts. Then the Eldest\n    Magician slid his arm up to the shoulder through the deep warm water,\n    and under the roots of the Wonderful Tree he touched the broad back of\n    Pau Amma the Crab. And Pau Amma settled down at the touch, and all the\n    Sea rose up as water rises in a basin when you put your hand into it.\n  </p>\n  <p>\n    'Ah!' said the Eldest Magician. 'Now I know who has been playing with\n    the Sea;' and he called out, 'What are you doing, Pau Amma?'\n  </p>\n  <p>\n    And Pau Amma, deep down below, answered, 'Once a day and once a night I\n    go out to look for my food. Once a day and once a night I return. Leave\n    me alone.'\n  </p>\n  <p>\n    Then the Eldest Magician said, 'Listen, Pau Amma. When you go out from\n    your cave the waters of the Sea pour down into Pusat Tasek, and all the\n    beaches of all the islands are left bare, and the little fish die, and\n    Raja Moyang Kaban, the King of the Elephants, his legs are made muddy.\n    When you come back and sit in Pusat Tasek, the waters of the Sea rise,\n    and half the little islands are drowned, and the Man's house is flooded,\n    and Raja Abdullah, the King of the Crocodiles, his mouth is filled with\n    the salt water.\n  </p>\n  <p>\n    Then Pau Amma, deep down below, laughed and said, 'I did not know I\n    was so important. Henceforward I will go out seven times a day, and the\n    waters shall never be still.'\n  </p>\n  <p>\n    And the Eldest Magician said, 'I cannot make you play the play you were\n    meant to play, Pau Amma, because you escaped me at the Very Beginning;\n    but if you are not afraid, come up and we will talk about it.'\n  </p>\n  <p>\n    'I am not afraid,' said Pau Amma, and he rose to the top of the sea in\n    the moonlight. There was nobody in the world so big as Pau Amma&#8212;for he\n    was the King Crab of all Crabs. Not a common Crab, but a King Crab. One\n    side of his great shell touched the beach at Sarawak; the other\n    touched the beach at Pahang; and he was taller than the smoke of three\n    volcanoes! As he rose up through the branches of the Wonderful Tree he\n    tore off one of the great twin fruits&#8212;the magic double kernelled nuts\n    that make people young,&#8212;and the little girl-daughter saw it bobbing\n    alongside the canoe, and pulled it in and began to pick out the soft\n    eyes of it with her little golden scissors.\n  </p>\n  <p>\n    'Now,' said the Magician, 'make a Magic, Pau Amma, to show that you are\n    really important.'\n  </p>\n  <p>\n    Pau Amma rolled his eyes and waved his legs, but he could only stir up\n    the Sea, because, though he was a King Crab, he was nothing more than a\n    Crab, and the Eldest Magician laughed.\n  </p>\n  <p>\n    'You are not so important after all, Pau Amma,' he said. 'Now, let\n    me try,' and he made a Magic with his left hand&#8212;with just the little\n    finger of his left hand&#8212;and&#8212;lo and behold, Best Beloved, Pau Amma's\n    hard, blue-green-black shell fell off him as a husk falls off a\n    cocoa-nut, and Pau Amma was left all soft&#8212;soft as the little crabs that\n    you sometimes find on the beach, Best Beloved.\n  </p>\n  <p>\n    'Indeed, you are very important,' said the Eldest Magician. 'Shall I ask\n    the Man here to cut you with kris? Shall I send for Raja Moyang Kaban,\n    the King of the Elephants, to pierce you with his tusks, or shall I call\n    Raja Abdullah, the King of the Crocodiles, to bite you?'\n  </p>\n  <p>\n    And Pau Amma said, 'I am ashamed! Give me back my hard shell and let me\n    go back to Pusat Tasek, and I will only stir out once a day and once a\n    night to get my food.'\n  </p>\n  <p>\n    And the Eldest Magician said, 'No, Pau Amma, I will not give you back\n    your shell, for you will grow bigger and prouder and stronger, and\n    perhaps you will forget your promise, and you will play with the Sea\n    once more.\n  </p>\n  <p>\n    Then Pau Amma said, 'What shall I do? I am so big that I can only hide\n    in Pusat Tasek, and if I go anywhere else, all soft as I am now, the\n    sharks and the dogfish will eat me. And if I go to Pusat Tasek, all soft\n    as I am now, though I may be safe, I can never stir out to get my food,\n    and so I shall die.' Then he waved his legs and lamented.\n  </p>\n  <p>\n    'Listen, Pau Amma,' said the Eldest Magician. 'I cannot make you play\n    the play you were meant to play, because you escaped me at the Very\n    Beginning; but if you choose, I can make every stone and every hole and\n    every bunch of weed in all the seas a safe Pusat Tasek for you and your\n    children for always.'\n  </p>\n  <p>\n    Then Pau Amma said, 'That is good, but I do not choose yet. Look! there\n    is that Man who talked to you at the Very Beginning. If he had not taken\n    up your attention I should not have grown tired of waiting and run away,\n    and all this would never have happened. What will he do for me?'\n  </p>\n  <p>\n    And the Man said, 'If you choose, I will make a Magic, so that both\n    the deep water and the dry ground will be a home for you and your\n    children&#8212;so that you shall be able to hide both on the land and in the\n    sea.'\n  </p>\n  <p>\n    And Pau Amma said, 'I do not choose yet. Look! there is that girl who\n    saw me running away at the Very Beginning. If she had spoken then, the\n    Eldest Magician would have called me back, and all this would never have\n    happened. What will she do for me?'\n  </p>\n  <p>\n    And the little girl-daughter said, 'This is a good nut that I am eating.\n    If you choose, I will make a Magic and I will give you this pair of\n    scissors, very sharp and strong, so that you and your children can eat\n    cocoa-nuts like this all day long when you come up from the Sea to the\n    land; or you can dig a Pusat Tasek for yourself with the scissors that\n    belong to you when there is no stone or hole near by; and when the earth\n    is too hard, by the help of these same scissors you can run up a tree.'\n  </p>\n  <p>\n    And Pau Amma said, 'I do not choose yet, for, all soft as I am, these\n    gifts would not help me. Give me back my shell, O Eldest Magician, and\n    then I will play your play.'\n  </p>\n  <p>\n    And the Eldest Magician said, 'I will give it back, Pau Amma, for eleven\n    months of the year; but on the twelfth month of every year it shall grow\n    soft again, to remind you and all your children that I can make magics,\n    and to keep you humble, Pau Amma; for I see that if you can run both\n    under the water and on land, you will grow too bold; and if you can\n    climb trees and crack nuts and dig holes with your scissors, you will\n    grow too greedy, Pau Amma.'\n  </p>\n  <p>\n    Then Pau Amma thought a little and said, 'I have made my choice. I will\n    take all the gifts.'\n  </p>\n  <p>\n    Then the Eldest Magician made a Magic with the right hand, with all five\n    fingers of his right hand, and lo and behold, Best Beloved, Pau Amma\n    grew smaller and smaller and smaller, till at last there was only a\n    little green crab swimming in the water alongside the canoe, crying in a\n    very small voice, 'Give me the scissors!'\n  </p>\n  <p>\n    And the girl-daughter picked him up on the palm of her little brown\n    hand, and sat him in the bottom of the canoe and gave him her scissors,\n    and he waved them in his little arms, and opened them and shut them and\n    snapped them, and said, 'I can eat nuts. I can crack shells. I can dig\n    holes. I can climb trees. I can breathe in the dry air, and I can find\n    a safe Pusat Tasek under every stone. I did not know I was so important.\n    Kun?' (Is this right?)\n  </p>\n  <p>\n    'Payah-kun,' said the Eldest Magician, and he laughed and gave him his\n    blessing; and little Pau Amma scuttled over the side of the canoe into\n    the water; and he was so tiny that he could have hidden under the shadow\n    of a dry leaf on land or of a dead shell at the bottom of the sea.\n  </p>\n  <p>\n    'Was that well done?' said the Eldest Magician.\n  </p>\n  <p>\n    'Yes,' said the Man. 'But now we must go back to Perak, and that is\n    a weary way to paddle. If we had waited till Pau Amma had gone out of\n    Pusat Tasek and come home, the water would have carried us there by\n    itself.'\n  </p>\n  <p>\n    'You are lazy,' said the Eldest Magician. 'So your children shall be\n    lazy. They shall be the laziest people in the world. They shall be\n    called the Malazy&#8212;the lazy people;' and he held up his finger to the\n    Moon and said, 'O Fisherman, here is the Man too lazy to row home. Pull\n    his canoe home with your line, Fisherman.'\n  </p>\n  <p>\n    'No,' said the Man. 'If I am to be lazy all my days, let the Sea work\n    for me twice a day for ever. That will save paddling.'\n  </p>\n  <p>\n    And the Eldest Magician laughed and said, 'Payah kun' (That is right).\n  </p>\n  <p>\n    And the Rat of the Moon stopped biting the line; and the Fisherman let\n    his line down till it touched the Sea, and he pulled the whole deep Sea\n    along, past the Island of Bintang, past Singapore, past Malacca, past\n    Selangor, till the canoe whirled into the mouth of the Perak River\n    again. Kun?' said the Fisherman of the Moon.\n  </p>\n  <p>\n    'Payah kun,' said the Eldest Magician. 'See now that you pull the Sea\n    twice a day and twice a night for ever, so that the Malazy fishermen may\n    be saved paddling. But be careful not to do it too hard, or I shall make\n    a magic on you as I did to Pau Amma.'\n  </p>\n  <p>\n    Then they all went up the Perak River and went to bed, Best Beloved.\n  </p>\n  <p>\n    Now listen and attend!\n  </p>\n  <p>\n    From that day to this the Moon has always pulled the sea up and down\n    and made what we call the tides. Sometimes the Fisher of the Sea pulls a\n    little too hard, and then we get spring tides; and sometimes he pulls\n    a little too softly, and then we get what are called neap-tides; but\n    nearly always he is careful, because of the Eldest Magician.\n  </p>\n  <p>\n    And Pau Amma? You can see when you go to the beach, how all Pau Amma's\n    babies make little Pusat Taseks for themselves under every stone\n    and bunch of weed on the sands; you can see them waving their little\n    scissors; and in some parts of the world they truly live on the dry\n    land and run up the palm trees and eat cocoa-nuts, exactly as the\n    girl-daughter promised. But once a year all Pau Ammas must shake off\n    their hard armour and be soft-to remind them of what the Eldest Magician\n    could do. And so it isn't fair to kill or hunt Pau Amma's babies just\n    because old Pau Amma was stupidly rude a very long time ago.\n  </p>\n  <p>\n    Oh yes! And Pau Amma's babies hate being taken out of their little Pusat\n    Taseks and brought home in pickle-bottles. That is why they nip you with\n    their scissors, and it serves you right!\n  </p>\n  <pre>     CHINA-GOING P's and O's\n     Pass Pau Amma's playground close,\n     And his Pusat Tasek lies\n     Near the track of most B.I.'s.\n     U.Y.K. and N.D.L.\n     Know Pau Amma's home as well\n     As the fisher of the Sea knows\n     'Bens,' M.M.'s, and Rubattinos.\n     But (and this is rather queer)\n     A.T.L.'s can not come here;\n     O. and O. and D.O.A.\n     Must go round another way.\n     Orient, Anchor, Bibby, Hall,\n     Never go that way at all.\n     U.C.S. would have a fit\n     If it found itself on it.\n     And if 'Beavers' took their cargoes\n     To Penang instead of Lagos,\n     Or a fat Shaw-Savill bore\n     Passengers to Singapore,\n     Or a White Star were to try a\n     Little trip to Sourabaya,\n     Or a B.S.A. went on\n     Past Natal to Cheribon,\n     Then great Mr. Lloyds would come\n     With a wire and drag them home!\n\n     You'll know what my riddle means\n     When you've eaten mangosteens.\n</pre>\n  <p>\n    Or if you can't wait till then, ask them to let you have the outside\n    page of the Times; turn over to page 2 where it is marked 'Shipping'\n    on the top left hand; then take the Atlas (and that is the finest\n    picture-book in the world) and see how the names of the places that\n    the steamers go to fit into the names of the places on the map. Any\n    steamer-kiddy ought to be able to do that; but if you can't read, ask\n    some one to show it you.\n  </p>\n  <a name=\"2H_4_0011\">\n  </a>\n  <h2>\n    THE CAT THAT WALKED BY HIMSELF\n  </h2>\n  <p>\n    Hear and attend and listen; for this befell and behappened and became\n    and was, O my Best Beloved, when the Tame animals were wild. The Dog was\n    wild, and the Horse was wild, and the Cow was wild, and the Sheep was\n    wild, and the Pig was wild&#8212;as wild as wild could be&#8212;and they walked in\n    the Wet Wild Woods by their wild lones. But the wildest of all the wild\n    animals was the Cat. He walked by himself, and all places were alike to\n    him.\n  </p>\n  <p>\n    Of course the Man was wild too. He was dreadfully wild. He didn't even\n    begin to be tame till he met the Woman, and she told him that she\n    did not like living in his wild ways. She picked out a nice dry Cave,\n    instead of a heap of wet leaves, to lie down in; and she strewed clean\n    sand on the floor; and she lit a nice fire of wood at the back of\n    the Cave; and she hung a dried wild-horse skin, tail-down, across the\n    opening of the Cave; and she said, 'Wipe you feet, dear, when you come\n    in, and now we'll keep house.'\n  </p>\n  <p>\n    That night, Best Beloved, they ate wild sheep roasted on the hot stones,\n    and flavoured with wild garlic and wild pepper; and wild duck stuffed\n    with wild rice and wild fenugreek and wild coriander; and marrow-bones\n    of wild oxen; and wild cherries, and wild grenadillas. Then the Man\n    went to sleep in front of the fire ever so happy; but the Woman sat up,\n    combing her hair. She took the bone of the shoulder of mutton&#8212;the big\n    fat blade-bone&#8212;and she looked at the wonderful marks on it, and she\n    threw more wood on the fire, and she made a Magic. She made the First\n    Singing Magic in the world.\n  </p>\n  <p>\n    Out in the Wet Wild Woods all the wild animals gathered together where\n    they could see the light of the fire a long way off, and they wondered\n    what it meant.\n  </p>\n  <p>\n    Then Wild Horse stamped with his wild foot and said, 'O my Friends and O\n    my Enemies, why have the Man and the Woman made that great light in that\n    great Cave, and what harm will it do us?'\n  </p>\n  <p>\n    Wild Dog lifted up his wild nose and smelled the smell of roast mutton,\n    and said, 'I will go up and see and look, and say; for I think it is\n    good. Cat, come with me.'\n  </p>\n  <p>\n    'Nenni!' said the Cat. 'I am the Cat who walks by himself, and all\n    places are alike to me. I will not come.'\n  </p>\n  <p>\n    'Then we can never be friends again,' said Wild Dog, and he trotted off\n    to the Cave. But when he had gone a little way the Cat said to himself,\n    'All places are alike to me. Why should I not go too and see and look\n    and come away at my own liking.' So he slipped after Wild Dog softly,\n    very softly, and hid himself where he could hear everything.\n  </p>\n  <p>\n    When Wild Dog reached the mouth of the Cave he lifted up the dried\n    horse-skin with his nose and sniffed the beautiful smell of the roast\n    mutton, and the Woman, looking at the blade-bone, heard him, and\n    laughed, and said, 'Here comes the first. Wild Thing out of the Wild\n    Woods, what do you want?'\n  </p>\n  <p>\n    Wild Dog said, 'O my Enemy and Wife of my Enemy, what is this that\n    smells so good in the Wild Woods?'\n  </p>\n  <p>\n    Then the Woman picked up a roasted mutton-bone and threw it to Wild Dog,\n    and said, 'Wild Thing out of the Wild Woods, taste and try.' Wild Dog\n    gnawed the bone, and it was more delicious than anything he had ever\n    tasted, and he said, 'O my Enemy and Wife of my Enemy, give me another.'\n  </p>\n  <p>\n    The Woman said, 'Wild Thing out of the Wild Woods, help my Man to hunt\n    through the day and guard this Cave at night, and I will give you as\n    many roast bones as you need.'\n  </p>\n  <p>\n    'Ah!' said the Cat, listening. 'This is a very wise Woman, but she is\n    not so wise as I am.'\n  </p>\n  <p>\n    Wild Dog crawled into the Cave and laid his head on the Woman's lap, and\n    said, 'O my Friend and Wife of my Friend, I will help Your Man to hunt\n    through the day, and at night I will guard your Cave.'\n  </p>\n  <p>\n    'Ah!' said the Cat, listening. 'That is a very foolish Dog.' And he went\n    back through the Wet Wild Woods waving his wild tail, and walking by his\n    wild lone. But he never told anybody.\n  </p>\n  <p>\n    When the Man waked up he said, 'What is Wild Dog doing here?' And the\n    Woman said, 'His name is not Wild Dog any more, but the First Friend,\n    because he will be our friend for always and always and always. Take him\n    with you when you go hunting.'\n  </p>\n  <p>\n    Next night the Woman cut great green armfuls of fresh grass from the\n    water-meadows, and dried it before the fire, so that it smelt like\n    new-mown hay, and she sat at the mouth of the Cave and plaited a halter\n    out of horse-hide, and she looked at the shoulder of mutton-bone&#8212;at the\n    big broad blade-bone&#8212;and she made a Magic. She made the Second Singing\n    Magic in the world.\n  </p>\n  <p>\n    Out in the Wild Woods all the wild animals wondered what had happened to\n    Wild Dog, and at last Wild Horse stamped with his foot and said, 'I will\n    go and see and say why Wild Dog has not returned. Cat, come with me.'\n  </p>\n  <p>\n    'Nenni!' said the Cat. 'I am the Cat who walks by himself, and all\n    places are alike to me. I will not come.' But all the same he followed\n    Wild Horse softly, very softly, and hid himself where he could hear\n    everything.\n  </p>\n  <p>\n    When the Woman heard Wild Horse tripping and stumbling on his long mane,\n    she laughed and said, 'Here comes the second. Wild Thing out of the Wild\n    Woods what do you want?'\n  </p>\n  <p>\n    Wild Horse said, 'O my Enemy and Wife of my Enemy, where is Wild Dog?'\n  </p>\n  <p>\n    The Woman laughed, and picked up the blade-bone and looked at it, and\n    said, 'Wild Thing out of the Wild Woods, you did not come here for Wild\n    Dog, but for the sake of this good grass.'\n  </p>\n  <p>\n    And Wild Horse, tripping and stumbling on his long mane, said, 'That is\n    true; give it me to eat.'\n  </p>\n  <p>\n    The Woman said, 'Wild Thing out of the Wild Woods, bend your wild head\n    and wear what I give you, and you shall eat the wonderful grass three\n    times a day.'\n  </p>\n  <p>\n    'Ah,' said the Cat, listening, 'this is a clever Woman, but she is not\n    so clever as I am.' Wild Horse bent his wild head, and the Woman slipped\n    the plaited hide halter over it, and Wild Horse breathed on the Woman's\n    feet and said, 'O my Mistress, and Wife of my Master, I will be your\n    servant for the sake of the wonderful grass.'\n  </p>\n  <p>\n    'Ah,' said the Cat, listening, 'that is a very foolish Horse.' And he\n    went back through the Wet Wild Woods, waving his wild tail and walking\n    by his wild lone. But he never told anybody.\n  </p>\n  <p>\n    When the Man and the Dog came back from hunting, the Man said, 'What is\n    Wild Horse doing here?' And the Woman said, 'His name is not Wild Horse\n    any more, but the First Servant, because he will carry us from place\n    to place for always and always and always. Ride on his back when you go\n    hunting.\n  </p>\n  <p>\n    Next day, holding her wild head high that her wild horns should not\n    catch in the wild trees, Wild Cow came up to the Cave, and the Cat\n    followed, and hid himself just the same as before; and everything\n    happened just the same as before; and the Cat said the same things as\n    before, and when Wild Cow had promised to give her milk to the Woman\n    every day in exchange for the wonderful grass, the Cat went back through\n    the Wet Wild Woods waving his wild tail and walking by his wild lone,\n    just the same as before. But he never told anybody. And when the Man\n    and the Horse and the Dog came home from hunting and asked the same\n    questions same as before, the Woman said, 'Her name is not Wild Cow any\n    more, but the Giver of Good Food. She will give us the warm white milk\n    for always and always and always, and I will take care of her while you\n    and the First Friend and the First Servant go hunting.\n  </p>\n  <p>\n    Next day the Cat waited to see if any other Wild thing would go up to\n    the Cave, but no one moved in the Wet Wild Woods, so the Cat walked\n    there by himself; and he saw the Woman milking the Cow, and he saw the\n    light of the fire in the Cave, and he smelt the smell of the warm white\n    milk.\n  </p>\n  <p>\n    Cat said, 'O my Enemy and Wife of my Enemy, where did Wild Cow go?'\n  </p>\n  <p>\n    The Woman laughed and said, 'Wild Thing out of the Wild Woods, go back\n    to the Woods again, for I have braided up my hair, and I have put away\n    the magic blade-bone, and we have no more need of either friends or\n    servants in our Cave.\n  </p>\n  <p>\n    Cat said, 'I am not a friend, and I am not a servant. I am the Cat who\n    walks by himself, and I wish to come into your cave.'\n  </p>\n  <p>\n    Woman said, 'Then why did you not come with First Friend on the first\n    night?'\n  </p>\n  <p>\n    Cat grew very angry and said, 'Has Wild Dog told tales of me?'\n  </p>\n  <p>\n    Then the Woman laughed and said, 'You are the Cat who walks by himself,\n    and all places are alike to you. Your are neither a friend nor a\n    servant. You have said it yourself. Go away and walk by yourself in all\n    places alike.'\n  </p>\n  <p>\n    Then Cat pretended to be sorry and said, 'Must I never come into the\n    Cave? Must I never sit by the warm fire? Must I never drink the warm\n    white milk? You are very wise and very beautiful. You should not be\n    cruel even to a Cat.'\n  </p>\n  <p>\n    Woman said, 'I knew I was wise, but I did not know I was beautiful. So I\n    will make a bargain with you. If ever I say one word in your praise you\n    may come into the Cave.'\n  </p>\n  <p>\n    'And if you say two words in my praise?' said the Cat.\n  </p>\n  <p>\n    'I never shall,' said the Woman, 'but if I say two words in your praise,\n    you may sit by the fire in the Cave.'\n  </p>\n  <p>\n    'And if you say three words?' said the Cat.\n  </p>\n  <p>\n    'I never shall,' said the Woman, 'but if I say three words in your\n    praise, you may drink the warm white milk three times a day for always\n    and always and always.'\n  </p>\n  <p>\n    Then the Cat arched his back and said, 'Now let the Curtain at the mouth\n    of the Cave, and the Fire at the back of the Cave, and the Milk-pots\n    that stand beside the Fire, remember what my Enemy and the Wife of my\n    Enemy has said.' And he went away through the Wet Wild Woods waving his\n    wild tail and walking by his wild lone.\n  </p>\n  <p>\n    That night when the Man and the Horse and the Dog came home from\n    hunting, the Woman did not tell them of the bargain that she had made\n    with the Cat, because she was afraid that they might not like it.\n  </p>\n  <p>\n    Cat went far and far away and hid himself in the Wet Wild Woods by his\n    wild lone for a long time till the Woman forgot all about him. Only the\n    Bat&#8212;the little upside-down Bat&#8212;that hung inside the Cave, knew where\n    Cat hid; and every evening Bat would fly to Cat with news of what was\n    happening.\n  </p>\n  <p>\n    One evening Bat said, 'There is a Baby in the Cave. He is new and pink\n    and fat and small, and the Woman is very fond of him.'\n  </p>\n  <p>\n    'Ah,' said the Cat, listening, 'but what is the Baby fond of?'\n  </p>\n  <p>\n    'He is fond of things that are soft and tickle,' said the Bat. 'He is\n    fond of warm things to hold in his arms when he goes to sleep. He is\n    fond of being played with. He is fond of all those things.'\n  </p>\n  <p>\n    'Ah,' said the Cat, listening, 'then my time has come.'\n  </p>\n  <p>\n    Next night Cat walked through the Wet Wild Woods and hid very near the\n    Cave till morning-time, and Man and Dog and Horse went hunting. The\n    Woman was busy cooking that morning, and the Baby cried and interrupted.\n    So she carried him outside the Cave and gave him a handful of pebbles to\n    play with. But still the Baby cried.\n  </p>\n  <p>\n    Then the Cat put out his paddy paw and patted the Baby on the cheek, and\n    it cooed; and the Cat rubbed against its fat knees and tickled it under\n    its fat chin with his tail. And the Baby laughed; and the Woman heard\n    him and smiled.\n  </p>\n  <p>\n    Then the Bat&#8212;the little upside-down bat&#8212;that hung in the mouth of the\n    Cave said, 'O my Hostess and Wife of my Host and Mother of my Host's\n    Son, a Wild Thing from the Wild Woods is most beautifully playing with\n    your Baby.'\n  </p>\n  <p>\n    'A blessing on that Wild Thing whoever he may be,' said the Woman,\n    straightening her back, 'for I was a busy woman this morning and he has\n    done me a service.'\n  </p>\n  <p>\n    That very minute and second, Best Beloved, the dried horse-skin\n    Curtain that was stretched tail-down at the mouth of the Cave fell\n    down&#8212;whoosh!&#8212;because it remembered the bargain she had made with the\n    Cat, and when the Woman went to pick it up&#8212;lo and behold!&#8212;the Cat was\n    sitting quite comfy inside the Cave.\n  </p>\n  <p>\n    'O my Enemy and Wife of my Enemy and Mother of my Enemy,' said the Cat,\n    'it is I: for you have spoken a word in my praise, and now I can sit\n    within the Cave for always and always and always. But still I am the Cat\n    who walks by himself, and all places are alike to me.'\n  </p>\n  <p>\n    The Woman was very angry, and shut her lips tight and took up her\n    spinning-wheel and began to spin. But the Baby cried because the Cat had\n    gone away, and the Woman could not hush it, for it struggled and kicked\n    and grew black in the face.\n  </p>\n  <p>\n    'O my Enemy and Wife of my Enemy and Mother of my Enemy,' said the Cat,\n    'take a strand of the wire that you are spinning and tie it to your\n    spinning-whorl and drag it along the floor, and I will show you a magic\n    that shall make your Baby laugh as loudly as he is now crying.'\n  </p>\n  <p>\n    'I will do so,' said the Woman, 'because I am at my wits' end; but I\n    will not thank you for it.'\n  </p>\n  <p>\n    She tied the thread to the little clay spindle whorl and drew it across\n    the floor, and the Cat ran after it and patted it with his paws and\n    rolled head over heels, and tossed it backward over his shoulder and\n    chased it between his hind-legs and pretended to lose it, and pounced\n    down upon it again, till the Baby laughed as loudly as it had been\n    crying, and scrambled after the Cat and frolicked all over the Cave till\n    it grew tired and settled down to sleep with the Cat in its arms.\n  </p>\n  <p>\n    'Now,' said the Cat, 'I will sing the Baby a song that shall keep him\n    asleep for an hour. And he began to purr, loud and low, low and loud,\n    till the Baby fell fast asleep. The Woman smiled as she looked down upon\n    the two of them and said, 'That was wonderfully done. No question but\n    you are very clever, O Cat.'\n  </p>\n  <p>\n    That very minute and second, Best Beloved, the smoke of the fire at the\n    back of the Cave came down in clouds from the roof&#8212;puff!&#8212;because\n    it remembered the bargain she had made with the Cat, and when it had\n    cleared away&#8212;lo and behold!&#8212;the Cat was sitting quite comfy close to\n    the fire.\n  </p>\n  <p>\n    'O my Enemy and Wife of my Enemy and Mother of My Enemy,' said the Cat,\n    'it is I, for you have spoken a second word in my praise, and now I can\n    sit by the warm fire at the back of the Cave for always and always and\n    always. But still I am the Cat who walks by himself, and all places are\n    alike to me.'\n  </p>\n  <p>\n    Then the Woman was very very angry, and let down her hair and put more\n    wood on the fire and brought out the broad blade-bone of the shoulder of\n    mutton and began to make a Magic that should prevent her from saying\n    a third word in praise of the Cat. It was not a Singing Magic, Best\n    Beloved, it was a Still Magic; and by and by the Cave grew so still that\n    a little wee-wee mouse crept out of a corner and ran across the floor.\n  </p>\n  <p>\n    'O my Enemy and Wife of my Enemy and Mother of my Enemy,' said the Cat,\n    'is that little mouse part of your magic?'\n  </p>\n  <p>\n    'Ouh! Chee! No indeed!' said the Woman, and she dropped the blade-bone\n    and jumped upon the footstool in front of the fire and braided up her\n    hair very quick for fear that the mouse should run up it.\n  </p>\n  <p>\n    'Ah,' said the Cat, watching, 'then the mouse will do me no harm if I\n    eat it?'\n  </p>\n  <p>\n    'No,' said the Woman, braiding up her hair, 'eat it quickly and I will\n    ever be grateful to you.'\n  </p>\n  <p>\n    Cat made one jump and caught the little mouse, and the Woman said,\n    'A hundred thanks. Even the First Friend is not quick enough to catch\n    little mice as you have done. You must be very wise.'\n  </p>\n  <p>\n    That very moment and second, O Best Beloved, the Milk-pot that stood by\n    the fire cracked in two pieces&#8212;ffft&#8212;because it remembered the bargain\n    she had made with the Cat, and when the Woman jumped down from the\n    footstool&#8212;lo and behold!&#8212;the Cat was lapping up the warm white milk\n    that lay in one of the broken pieces.\n  </p>\n  <p>\n    'O my Enemy and Wife of my Enemy and Mother of my Enemy, said the Cat,\n    'it is I; for you have spoken three words in my praise, and now I can\n    drink the warm white milk three times a day for always and always and\n    always. But still I am the Cat who walks by himself, and all places are\n    alike to me.'\n  </p>\n  <p>\n    Then the Woman laughed and set the Cat a bowl of the warm white milk and\n    said, 'O Cat, you are as clever as a man, but remember that your bargain\n    was not made with the Man or the Dog, and I do not know what they will\n    do when they come home.'\n  </p>\n  <p>\n    'What is that to me?' said the Cat. 'If I have my place in the Cave by\n    the fire and my warm white milk three times a day I do not care what the\n    Man or the Dog can do.'\n  </p>\n  <p>\n    That evening when the Man and the Dog came into the Cave, the Woman\n    told them all the story of the bargain while the Cat sat by the fire and\n    smiled. Then the Man said, 'Yes, but he has not made a bargain with me\n    or with all proper Men after me.' Then he took off his two leather boots\n    and he took up his little stone axe (that makes three) and he fetched a\n    piece of wood and a hatchet (that is five altogether), and he set them\n    out in a row and he said, 'Now we will make our bargain. If you do not\n    catch mice when you are in the Cave for always and always and always, I\n    will throw these five things at you whenever I see you, and so shall all\n    proper Men do after me.'\n  </p>\n  <p>\n    'Ah,' said the Woman, listening, 'this is a very clever Cat, but he is\n    not so clever as my Man.'\n  </p>\n  <p>\n    The Cat counted the five things (and they looked very knobby) and he\n    said, 'I will catch mice when I am in the Cave for always and always and\n    always; but still I am the Cat who walks by himself, and all places are\n    alike to me.'\n  </p>\n  <p>\n    'Not when I am near,' said the Man. 'If you had not said that last I\n    would have put all these things away for always and always and always;\n    but I am now going to throw my two boots and my little stone axe (that\n    makes three) at you whenever I meet you. And so shall all proper Men do\n    after me!'\n  </p>\n  <p>\n    Then the Dog said, 'Wait a minute. He has not made a bargain with me or\n    with all proper Dogs after me.' And he showed his teeth and said, 'If\n    you are not kind to the Baby while I am in the Cave for always and\n    always and always, I will hunt you till I catch you, and when I catch\n    you I will bite you. And so shall all proper Dogs do after me.'\n  </p>\n  <p>\n    'Ah,' said the Woman, listening, 'this is a very clever Cat, but he is\n    not so clever as the Dog.'\n  </p>\n  <p>\n    Cat counted the Dog's teeth (and they looked very pointed) and he said,\n    'I will be kind to the Baby while I am in the Cave, as long as he does\n    not pull my tail too hard, for always and always and always. But still I\n    am the Cat that walks by himself, and all places are alike to me.'\n  </p>\n  <p>\n    'Not when I am near,' said the Dog. 'If you had not said that last I\n    would have shut my mouth for always and always and always; but now I am\n    going to hunt you up a tree whenever I meet you. And so shall all proper\n    Dogs do after me.'\n  </p>\n  <p>\n    Then the Man threw his two boots and his little stone axe (that makes\n    three) at the Cat, and the Cat ran out of the Cave and the Dog chased\n    him up a tree; and from that day to this, Best Beloved, three proper Men\n    out of five will always throw things at a Cat whenever they meet him,\n    and all proper Dogs will chase him up a tree. But the Cat keeps his side\n    of the bargain too. He will kill mice and he will be kind to Babies when\n    he is in the house, just as long as they do not pull his tail too hard.\n    But when he has done that, and between times, and when the moon gets up\n    and night comes, he is the Cat that walks by himself, and all places are\n    alike to him. Then he goes out to the Wet Wild Woods or up the Wet Wild\n    Trees or on the Wet Wild Roofs, waving his wild tail and walking by his\n    wild lone.\n  </p>\n  <pre>     PUSSY can sit by the fire and sing,\n       Pussy can climb a tree,\n     Or play with a silly old cork and string\n       To'muse herself, not me.\n     But I like Binkie my dog, because\n       He Lnows how to behave;\n     So, Binkie's the same as the First Friend was,\n       And I am the Man in the Cave.\n\n     Pussy will play man-Friday till\n       It's time to wet her paw\n     And make her walk on the window-sill\n       (For the footprint Crusoe saw);\n     Then she fluffles her tail and mews,\n       And scratches and won't attend.\n     But Binkie will play whatever I choose,\n       And he is my true First Friend.\n\n     Pussy will rub my knees with her head\n       Pretending she loves me hard;\n     But the very minute I go to my bed\n       Pussy runs out in the yard,\n     And there she stays till the morning-light;\n       So I know it is only pretend;\n     But Binkie, he snores at my feet all night,\n       And he is my Firstest Friend!\n</pre>\n  <a name=\"2H_4_0012\">\n  </a>\n  <h2>\n    THE BUTTERFLY THAT STAMPED\n  </h2>\n  <p>\n    This, O my Best Beloved, is a story&#8212;a new and a wonderful story&#8212;a\n    story quite different from the other stories&#8212;a story about The Most\n    Wise Sovereign Suleiman-bin-Daoud&#8212;Solomon the Son of David.\n  </p>\n  <p>\n    There are three hundred and fifty-five stories about Suleiman-bin-Daoud;\n    but this is not one of them. It is not the story of the Lapwing who\n    found the Water; or the Hoopoe who shaded Suleimanbin-Daoud from the\n    heat. It is not the story of the Glass Pavement, or the Ruby with\n    the Crooked Hole, or the Gold Bars of Balkis. It is the story of the\n    Butterfly that Stamped.\n  </p>\n  <p>\n    Now attend all over again and listen!\n  </p>\n  <p>\n    Suleiman-bin-Daoud was wise. He understood what the beasts said, what\n    the birds said, what the fishes said, and what the insects said. He\n    understood what the rocks said deep under the earth when they bowed in\n    towards each other and groaned; and he understood what the trees\n    said when they rustled in the middle of the morning. He understood\n    everything, from the bishop on the bench to the hyssop on the wall, and\n    Balkis, his Head Queen, the Most Beautiful Queen Balkis, was nearly as\n    wise as he was.\n  </p>\n  <p>\n    Suleiman-bin-Daoud was strong. Upon the third finger of the right hand\n    he wore a ring. When he turned it once, Afrits and Djinns came Out of\n    the earth to do whatever he told them. When he turned it twice, Fairies\n    came down from the sky to do whatever he told them; and when he turned\n    it three times, the very great angel Azrael of the Sword came dressed\n    as a water-carrier, and told him the news of the three worlds,\n    Above&#8212;Below&#8212;and Here.\n  </p>\n  <p>\n    And yet Suleiman-bin-Daoud was not proud. He very seldom showed off, and\n    when he did he was sorry for it. Once he tried to feed all the animals\n    in all the world in one day, but when the food was ready an Animal came\n    out of the deep sea and ate it up in three mouthfuls. Suleiman-bin-Daoud\n    was very surprised and said, 'O Animal, who are you?' And the Animal\n    said, 'O King, live for ever! I am the smallest of thirty thousand\n    brothers, and our home is at the bottom of the sea. We heard that you\n    were going to feed all the animals in all the world, and my brothers\n    sent me to ask when dinner would be ready.' Suleiman-bin-Daoud was more\n    surprised than ever and said, 'O Animal, you have eaten all the dinner\n    that I made ready for all the animals in the world.' And the Animal\n    said, 'O King, live for ever, but do you really call that a dinner?\n    Where I come from we each eat twice as much as that between meals.' Then\n    Suleiman-bin-Daoud fell flat on his face and said, 'O Animal! I gave\n    that dinner to show what a great and rich king I was, and not because I\n    really wanted to be kind to the animals. Now I am ashamed, and it serves\n    me right. Suleiman-bin-Daoud was a really truly wise man, Best Beloved.\n    After that he never forgot that it was silly to show off; and now the\n    real story part of my story begins.\n  </p>\n  <p>\n    He married ever so many wifes. He married nine hundred and ninety-nine\n    wives, besides the Most Beautiful Balkis; and they all lived in a great\n    golden palace in the middle of a lovely garden with fountains. He\n    didn't really want nine-hundred and ninety-nine wives, but in those\n    days everybody married ever so many wives, and of course the King had to\n    marry ever so many more just to show that he was the King.\n  </p>\n  <p>\n    Some of the wives were nice, but some were simply horrid, and the horrid\n    ones quarrelled with the nice ones and made them horrid too, and then\n    they would all quarrel with Suleiman-bin-Daoud, and that was horrid\n    for him. But Balkis the Most Beautiful never quarrelled with\n    Suleiman-bin-Daoud. She loved him too much. She sat in her rooms in the\n    Golden Palace, or walked in the Palace garden, and was truly sorry for\n    him.\n  </p>\n  <p>\n    Of course if he had chosen to turn his ring on his finger and call\n    up the Djinns and the Afrits they would have magicked all those nine\n    hundred and ninety-nine quarrelsome wives into white mules of the desert\n    or greyhounds or pomegranate seeds; but Suleiman-bin-Daoud thought that\n    that would be showing off. So, when they quarrelled too much, he only\n    walked by himself in one part of the beautiful Palace gardens and wished\n    he had never been born.\n  </p>\n  <p>\n    One day, when they had quarrelled for three weeks&#8212;all nine hundred and\n    ninety-nine wives together&#8212;Suleiman-bin-Daoud went out for peace\n    and quiet as usual; and among the orange trees he met Balkis the Most\n    Beautiful, very sorrowful because Suleiman-bin-Daoud was so worried.\n    And she said to him, 'O my Lord and Light of my Eyes, turn the ring upon\n    your finger and show these Queens of Egypt and Mesopotamia and\n    Persia and China that you are the great and terrible King.' But\n    Suleiman-bin-Daoud shook his head and said, 'O my Lady and Delight of my\n    Life, remember the Animal that came out of the sea and made me ashamed\n    before all the animals in all the world because I showed off. Now, if\n    I showed off before these Queens of Persia and Egypt and Abyssinia and\n    China, merely because they worry me, I might be made even more ashamed\n    than I have been.'\n  </p>\n  <p>\n    And Balkis the Most Beautiful said, 'O my Lord and Treasure of my Soul,\n    what will you do?'\n  </p>\n  <p>\n    And Suleiman-bin-Daoud said, 'O my Lady and Content of my Heart, I\n    shall continue to endure my fate at the hands of these nine hundred and\n    ninety-nine Queens who vex me with their continual quarrelling.'\n  </p>\n  <p>\n    So he went on between the lilies and the loquats and the roses and the\n    cannas and the heavy-scented ginger-plants that grew in the garden, till\n    he came to the great camphor-tree that was called the Camphor Tree of\n    Suleiman-bin-Daoud. But Balkis hid among the tall irises and the spotted\n    bamboos and the red lillies behind the camphor-tree, so as to be near\n    her own true love, Suleiman-bin-Daoud.\n  </p>\n  <p>\n    Presently two Butterflies flew under the tree, quarrelling.\n  </p>\n  <p>\n    Suleiman-bin-Daoud heard one say to the other, 'I wonder at your\n    presumption in talking like this to me. Don't you know that if I stamped\n    with my foot all Suleiman-bin-Daoud's Palace and this garden here would\n    immediately vanish in a clap of thunder.'\n  </p>\n  <p>\n    Then Suleiman-bin-Daoud forgot his nine hundred and ninety-nine\n    bothersome wives, and laughed, till the camphor-tree shook, at the\n    Butterfly's boast. And he held out his finger and said, 'Little man,\n    come here.'\n  </p>\n  <p>\n    The Butterfly was dreadfully frightened, but he managed to fly up to\n    the hand of Suleiman-bin-Daoud, and clung there, fanning himself.\n    Suleiman-bin-Daoud bent his head and whispered very softly, 'Little man,\n    you know that all your stamping wouldn't bend one blade of grass. What\n    made you tell that awful fib to your wife?&#8212;for doubtless she is your\n    wife.'\n  </p>\n  <p>\n    The Butterfly looked at Suleiman-bin-Daoud and saw the most wise King's\n    eye twinkle like stars on a frosty night, and he picked up his courage\n    with both wings, and he put his head on one side and said, 'O King, live\n    for ever. She is my wife; and you know what wives are like.\n  </p>\n  <p>\n    Suleiman-bin-Daoud smiled in his beard and said, 'Yes, I know, little\n    brother.\n  </p>\n  <p>\n    'One must keep them in order somehow, said the Butterfly, and she has\n    been quarrelling with me all the morning. I said that to quiet her.'\n  </p>\n  <p>\n    And Suleiman-bin-Daoud said, 'May it quiet her. Go back to your wife,\n    little brother, and let me hear what you say.'\n  </p>\n  <p>\n    Back flew the Butterfly to his wife, who was all of a twitter behind\n    a leaf, and she said, 'He heard you! Suleiman-bin-Daoud himself heard\n    you!'\n  </p>\n  <p>\n    'Heard me!' said the Butterfly. 'Of course he did. I meant him to hear\n    me.'\n  </p>\n  <p>\n    'And what did he say? Oh, what did he say?'\n  </p>\n  <p>\n    'Well,' said the Butterfly, fanning himself most importantly, 'between\n    you and me, my dear&#8212;of course I don't blame him, because his Palace\n    must have cost a great deal and the oranges are just ripening,&#8212;he asked\n    me not to stamp, and I promised I wouldn't.'\n  </p>\n  <p>\n    'Gracious!' said his wife, and sat quite quiet; but Suleiman-bin-Daoud\n    laughed till the tears ran down his face at the impudence of the bad\n    little Butterfly.\n  </p>\n  <p>\n    Balkis the Most Beautiful stood up behind the tree among the red lilies\n    and smiled to herself, for she had heard all this talk. She thought,\n    'If I am wise I can yet save my Lord from the persecutions of these\n    quarrelsome Queens,' and she held out her finger and whispered softly to\n    the Butterfly's Wife, 'Little woman, come here.' Up flew the Butterfly's\n    Wife, very frightened, and clung to Balkis's white hand.\n  </p>\n  <p>\n    Balkis bent her beautiful head down and whispered, 'Little woman, do you\n    believe what your husband has just said?'\n  </p>\n  <p>\n    The Butterfly's Wife looked at Balkis, and saw the most beautiful\n    Queen's eyes shining like deep pools with starlight on them, and she\n    picked up her courage with both wings and said, 'O Queen, be lovely for\n    ever. You know what men-folk are like.'\n  </p>\n  <p>\n    And the Queen Balkis, the Wise Balkis of Sheba, put her hand to her lips\n    to hide a smile and said, 'Little sister, I know.'\n  </p>\n  <p>\n    'They get angry,' said the Butterfly's Wife, fanning herself quickly,\n    'over nothing at all, but we must humour them, O Queen. They never mean\n    half they say. If it pleases my husband to believe that I believe he\n    can make Suleiman-bin-Daoud's Palace disappear by stamping his foot, I'm\n    sure I don't care. He'll forget all about it to-morrow.'\n  </p>\n  <p>\n    'Little sister,' said Balkis, 'you are quite right; but next time he\n    begins to boast, take him at his word. Ask him to stamp, and see what\n    will happen. We know what men-folk are like, don't we? He'll be very\n    much ashamed.'\n  </p>\n  <p>\n    Away flew the Butterfly's Wife to her husband, and in five minutes they\n    were quarrelling worse than ever.\n  </p>\n  <p>\n    'Remember!' said the Butterfly. 'Remember what I can do if I stamp my\n    foot.'\n  </p>\n  <p>\n    'I don't believe you one little bit,' said the Butterfly's Wife. 'I\n    should very much like to see it done. Suppose you stamp now.'\n  </p>\n  <p>\n    'I promised Suleiman-bin-Daoud that I wouldn't,' said the Butterfly,\n    'and I don't want to break my promise.'\n  </p>\n  <p>\n    'It wouldn't matter if you did,' said his wife. 'You couldn't bend\n    a blade of grass with your stamping. I dare you to do it,' she said.\n    Stamp! Stamp! Stamp!'\n  </p>\n  <p>\n    Suleiman-bin-Daoud, sitting under the camphor-tree, heard every word\n    of this, and he laughed as he had never laughed in his life before. He\n    forgot all about his Queens; he forgot all about the Animal that came\n    out of the sea; he forgot about showing off. He just laughed with joy,\n    and Balkis, on the other side of the tree, smiled because her own true\n    love was so joyful.\n  </p>\n  <p>\n    Presently the Butterfly, very hot and puffy, came whirling back under\n    the shadow of the camphor-tree and said to Suleiman, 'She wants me to\n    stamp! She wants to see what will happen, O Suleiman-bin-Daoud! You know\n    I can't do it, and now she'll never believe a word I say. She'll laugh\n    at me to the end of my days!'\n  </p>\n  <p>\n    'No, little brother,' said Suleiman-bin-Daoud, 'she will never laugh at\n    you again,' and he turned the ring on his finger&#8212;just for the little\n    Butterfly's sake, not for the sake of showing off,&#8212;and, lo and behold,\n    four huge Djinns came out of the earth!\n  </p>\n  <p>\n    'Slaves,' said Suleiman-bin-Daoud, 'when this gentleman on my finger'\n    (that was where the impudent Butterfly was sitting) 'stamps his left\n    front forefoot you will make my Palace and these gardens disappear in\n    a clap of thunder. When he stamps again you will bring them back\n    carefully.'\n  </p>\n  <p>\n    'Now, little brother,' he said, 'go back to your wife and stamp all\n    you've a mind to.'\n  </p>\n  <p>\n    Away flew the Butterfly to his wife, who was crying, 'I dare you to do\n    it! I dare you to do it! Stamp! Stamp now! Stamp!' Balkis saw the four\n    vast Djinns stoop down to the four corners of the gardens with the\n    Palace in the middle, and she clapped her hands softly and said, 'At\n    last Suleiman-bin-Daoud will do for the sake of a Butterfly what he\n    ought to have done long ago for his own sake, and the quarrelsome Queens\n    will be frightened!'\n  </p>\n  <p>\n    The the butterfly stamped. The Djinns jerked the Palace and the gardens\n    a thousand miles into the air: there was a most awful thunder-clap, and\n    everything grew inky-black. The Butterfly's Wife fluttered about in the\n    dark, crying, 'Oh, I'll be good! I'm so sorry I spoke. Only bring the\n    gardens back, my dear darling husband, and I'll never contradict again.'\n  </p>\n  <p>\n    The Butterfly was nearly as frightened as his wife, and\n    Suleiman-bin-Daoud laughed so much that it was several minutes before\n    he found breath enough to whisper to the Butterfly, 'Stamp again, little\n    brother. Give me back my Palace, most great magician.'\n  </p>\n  <p>\n    'Yes, give him back his Palace,' said the Butterfly's Wife, still flying\n    about in the dark like a moth. 'Give him back his Palace, and don't\n    let's have any more horrid.magic.'\n  </p>\n  <p>\n    'Well, my dear,' said the Butterfly as bravely as he could, 'you see\n    what your nagging has led to. Of course it doesn't make any difference\n    to me&#8212;I'm used to this kind of thing&#8212;but as a favour to you and to\n    Suleiman-bin-Daoud I don't mind putting things right.'\n  </p>\n  <p>\n    So he stamped once more, and that instant the Djinns let down the Palace\n    and the gardens, without even a bump. The sun shone on the dark-green\n    orange leaves; the fountains played among the pink Egyptian lilies; the\n    birds went on singing, and the Butterfly's Wife lay on her side under\n    the camphor-tree waggling her wings and panting, 'Oh, I'll be good! I'll\n    be good!'\n  </p>\n  <p>\n    Suleiman-bin-Daolld could hardly speak for laughing. He leaned back all\n    weak and hiccoughy, and shook his finger at the Butterfly and said, 'O\n    great wizard, what is the sense of returning to me my Palace if at the\n    same time you slay me with mirth!'\n  </p>\n  <p>\n    Then came a terrible noise, for all the nine hundred and ninety-nine\n    Queens ran out of the Palace shrieking and shouting and calling for\n    their babies. They hurried down the great marble steps below the\n    fountain, one hundred abreast, and the Most Wise Balkis went statelily\n    forward to meet them and said, 'What is your trouble, O Queens?'\n  </p>\n  <p>\n    They stood on the marble steps one hundred abreast and shouted, 'What is\n    our trouble? We were living peacefully in our golden palace, as is our\n    custom, when upon a sudden the Palace disappeared, and we were left\n    sitting in a thick and noisome darkness; and it thundered, and Djinns\n    and Afrits moved about in the darkness! That is our trouble, O Head\n    Queen, and we are most extremely troubled on account of that trouble,\n    for it was a troublesome trouble, unlike any trouble we have known.'\n  </p>\n  <p>\n    Then Balkis the Most Beautiful Queen&#8212;Suleiman-bin-Daoud's Very Best\n    Beloved&#8212;Queen that was of Sheba and Sable and the Rivers of the Gold\n    of the South&#8212;from the Desert of Zinn to the Towers of Zimbabwe&#8212;Balkis,\n    almost as wise as the Most Wise Suleiman-bin-Daoud himself, said, 'It\n    is nothing, O Queens! A Butterfly has made complaint against his\n    wife because she quarrelled with him, and it has pleased our Lord\n    Suleiman-bin-Daoud to teach her a lesson in low-speaking and humbleness,\n    for that is counted a virtue among the wives of the butterflies.'\n  </p>\n  <p>\n    Then up and spoke an Egyptian Queen&#8212;the daughter of a Pharoah&#8212;and she\n    said, 'Our Palace cannot be plucked up by the roots like a leek for the\n    sake of a little insect. No! Suleiman-bin-Daoud must be dead, and what\n    we heard and saw was the earth thundering and darkening at the news.'\n  </p>\n  <p>\n    Then Balkis beckoned that bold Queen without looking at her, and said to\n    her and to the others, 'Come and see.'\n  </p>\n  <p>\n    They came down the marble steps, one hundred abreast, and beneath his\n    camphor-tree, still weak with laughing, they saw the Most Wise King\n    Suleiman-bin-Daoud rocking back and forth with a Butterfly on either\n    hand, and they heard him say, 'O wife of my brother in the air, remember\n    after this, to please your husband in all things, lest he be provoked to\n    stamp his foot yet again; for he has said that he is used to this magic,\n    and he is most eminently a great magician&#8212;one who steals away the very\n    Palace of Suleirnan-bin-Daoud himself. Go in peace, little folk!' And he\n    kissed them on the wings, and they flew away.\n  </p>\n  <p>\n    Then all the Queens except Balkis&#8212;the Most Beautiful and Splendid\n    Balkis, who stood apart smiling&#8212;fell flat on their faces, for they\n    said, 'If these things are done when a Butterfly is displeased with\n    his wife, what shall be done to us who have vexed our King with our\n    loud-speaking and open quarrelling through many days?'\n  </p>\n  <p>\n    Then they put their veils over their heads, and they put their hands\n    over their mouths, and they tiptoed back to the Palace most mousy-quiet.\n  </p>\n  <p>\n    Then Balkis&#8212;The Most Beautiful and Excellent Balkis&#8212;went forward\n    through the red lilies into the shade of the camphor-tree and laid\n    her hand upon Suleiman-bin-Daoud's shoulder and said, 'O my Lord and\n    Treasure of my Soul, rejoice, for we have taught the Queens of Egypt and\n    Ethiopia and Abyssinia and Persia and India and China with a great and a\n    memorable teaching.'\n  </p>\n  <p>\n    And Suleiman-bin-Daoud, still looking after the Butterflies where they\n    played in the sunlight, said, 'O my Lady and Jewel of my Felicity, when\n    did this happen? For I have been jesting with a Butterfly ever since I\n    came into the garden.' And he told Balkis what he had done.\n  </p>\n  <p>\n    Balkis&#8212;The tender and Most Lovely Balkis&#8212;said, 'O my Lord and Regent\n    of my Existence, I hid behind the camphor-tree and saw it all. It was I\n    who told the Butterfly's Wife to ask the Butterfly to stamp, because I\n    hoped that for the sake of the jest my Lord would make some great magic\n    and that the Queens would see it and be frightened.' And she told him\n    what the Queens had said and seen and thought.\n  </p>\n  <p>\n    Then Suleiman-bin-Daoud rose up from his seat under the camphor-tree,\n    and stretched his arms and rejoiced and said, 'O my Lady and Sweetener\n    of my Days, know that if I had made a magic against my Queens for the\n    sake of pride or anger, as I made that feast for all the animals, I\n    should certainly have been put to shame. But by means of your wisdom\n    I made the magic for the sake of a jest and for the sake of a little\n    Butterfly, and&#8212;behold&#8212;it has also delivered me from the vexations of\n    my vexatious wives! Tell me, therefore, O my Lady and Heart of my Heart,\n    how did you come to be so wise?' And Balkis the Queen, beautiful and\n    tall, looked up into Suleiman-bin-Daoud's eyes and put her head a little\n    on one side, just like the Butterfly, and said, 'First, O my Lord,\n    because I loved you; and secondly, O my Lord, because I know what\n    women-folk are.'\n  </p>\n  <p>\n    Then they went up to the Palace and lived happily ever afterwards.\n  </p>\n  <p>\n    But wasn't it clever of Balkis?\n  </p>\n  <pre>\n     THERE was never a Queen like Balkis,\n       From here to the wide world's end;\n     But Balkis tailed to a butterfly\n       As you would talk to a friend.\n\n     There was never a King like Solomon,\n       Not since the world began;\n     But Solomon talked to a butterfly\n       As a man would talk to a man.\n\n     She was Queen of Sabaea&#8212;\n       And he was Asia's Lord&#8212;\n     But they both of 'em talked to butterflies\n       When they took their walks abroad!\n</pre>\n  <hr />\n\n  <a name=\"copyright\">\n  </a>\n  <h2 class=\"noprint\">Copyright Information</h2>\n\n  <pre class=\"copyright\">\nThis eBook is for the use of anyone anywhere at no cost and with\nalmost no restrictions whatsoever.  You may copy it, give it away or\nre-use it under the terms of the Project Gutenberg License included\nwith this eBook or online at www.gutenberg.org\n\n\nTitle: Just So Stories\n\nAuthor: Rudyard Kipling\n\nRelease Date: December 22, 2008 [EBook #2781]\n\nLanguage: English\n\nCharacter set encoding: ASCII\n\nProduced by David Reed, and David Widger\n\n</pre>\n\n  <pre class=\"copyright\">\n***** This file should be named 2781-h.htm or 2781-h.zip *****\nThis and all associated files of various formats will be found in:\n        http://www.gutenberg.org/2/7/8/2781/\n\nProduced by David Reed, and David Widger\n\n\nUpdated editions will replace the previous one--the old editions\nwill be renamed.\n\nCreating the works from public domain print editions means that no\none owns a United States copyright in these works, so the Foundation\n(and you!) can copy and distribute it in the United States without\npermission and without paying copyright royalties.  Special rules,\nset forth in the General Terms of Use part of this license, apply to\ncopying and distributing Project Gutenberg-tm electronic works to\nprotect the PROJECT GUTENBERG-tm concept and trademark.  Project\nGutenberg is a registered trademark, and may not be used if you\ncharge for the eBooks, unless you receive specific permission.  If you\ndo not charge anything for copies of this eBook, complying with the\nrules is very easy.  You may use this eBook for nearly any purpose\nsuch as creation of derivative works, reports, performances and\nresearch.  They may be modified and printed and given away--you may do\npractically ANYTHING with public domain eBooks.  Redistribution is\nsubject to the trademark license, especially commercial\nredistribution.\n\n*** START: FULL LICENSE ***\n\nTHE FULL PROJECT GUTENBERG LICENSE\nPLEASE READ THIS BEFORE YOU DISTRIBUTE OR USE THIS WORK\n\nTo protect the Project Gutenberg-tm mission of promoting the free\ndistribution of electronic works, by using or distributing this work\n(or any other work associated in any way with the phrase \"Project\nGutenberg\"), you agree to comply with all the terms of the Full Project\nGutenberg-tm License (available with this file or online at\nhttp://gutenberg.org/license).\n\n\nSection 1.  General Terms of Use and Redistributing Project Gutenberg-tm\nelectronic works\n\n1.A.  By reading or using any part of this Project Gutenberg-tm\nelectronic work, you indicate that you have read, understand, agree to\nand accept all the terms of this license and intellectual property\n(trademark/copyright) agreement.  If you do not agree to abide by all\nthe terms of this agreement, you must cease using and return or destroy\nall copies of Project Gutenberg-tm electronic works in your possession.\nIf you paid a fee for obtaining a copy of or access to a Project\nGutenberg-tm electronic work and you do not agree to be bound by the\nterms of this agreement, you may obtain a refund from the person or\nentity to whom you paid the fee as set forth in paragraph 1.E.8.\n\n1.B.  \"Project Gutenberg\" is a registered trademark.  It may only be\nused on or associated in any way with an electronic work by people who\nagree to be bound by the terms of this agreement.  There are a few\nthings that you can do with most Project Gutenberg-tm electronic works\neven without complying with the full terms of this agreement.  See\nparagraph 1.C below.  There are a lot of things you can do with Project\nGutenberg-tm electronic works if you follow the terms of this agreement\nand help preserve free future access to Project Gutenberg-tm electronic\nworks.  See paragraph 1.E below.\n\n1.C.  The Project Gutenberg Literary Archive Foundation (\"the Foundation\"\nor PGLAF), owns a compilation copyright in the collection of Project\nGutenberg-tm electronic works.  Nearly all the individual works in the\ncollection are in the public domain in the United States.  If an\nindividual work is in the public domain in the United States and you are\nlocated in the United States, we do not claim a right to prevent you from\ncopying, distributing, performing, displaying or creating derivative\nworks based on the work as long as all references to Project Gutenberg\nare removed.  Of course, we hope that you will support the Project\nGutenberg-tm mission of promoting free access to electronic works by\nfreely sharing Project Gutenberg-tm works in compliance with the terms of\nthis agreement for keeping the Project Gutenberg-tm name associated with\nthe work.  You can easily comply with the terms of this agreement by\nkeeping this work in the same format with its attached full Project\nGutenberg-tm License when you share it without charge with others.\n\n1.D.  The copyright laws of the place where you are located also govern\nwhat you can do with this work.  Copyright laws in most countries are in\na constant state of change.  If you are outside the United States, check\nthe laws of your country in addition to the terms of this agreement\nbefore downloading, copying, displaying, performing, distributing or\ncreating derivative works based on this work or any other Project\nGutenberg-tm work.  The Foundation makes no representations concerning\nthe copyright status of any work in any country outside the United\nStates.\n\n1.E.  Unless you have removed all references to Project Gutenberg:\n\n1.E.1.  The following sentence, with active links to, or other immediate\naccess to, the full Project Gutenberg-tm License must appear prominently\nwhenever any copy of a Project Gutenberg-tm work (any work on which the\nphrase \"Project Gutenberg\" appears, or with which the phrase \"Project\nGutenberg\" is associated) is accessed, displayed, performed, viewed,\ncopied or distributed:\n\nThis eBook is for the use of anyone anywhere at no cost and with\nalmost no restrictions whatsoever.  You may copy it, give it away or\nre-use it under the terms of the Project Gutenberg License included\nwith this eBook or online at www.gutenberg.org\n\n1.E.2.  If an individual Project Gutenberg-tm electronic work is derived\nfrom the public domain (does not contain a notice indicating that it is\nposted with permission of the copyright holder), the work can be copied\nand distributed to anyone in the United States without paying any fees\nor charges.  If you are redistributing or providing access to a work\nwith the phrase \"Project Gutenberg\" associated with or appearing on the\nwork, you must comply either with the requirements of paragraphs 1.E.1\nthrough 1.E.7 or obtain permission for the use of the work and the\nProject Gutenberg-tm trademark as set forth in paragraphs 1.E.8 or\n1.E.9.\n\n1.E.3.  If an individual Project Gutenberg-tm electronic work is posted\nwith the permission of the copyright holder, your use and distribution\nmust comply with both paragraphs 1.E.1 through 1.E.7 and any additional\nterms imposed by the copyright holder.  Additional terms will be linked\nto the Project Gutenberg-tm License for all works posted with the\npermission of the copyright holder found at the beginning of this work.\n\n1.E.4.  Do not unlink or detach or remove the full Project Gutenberg-tm\nLicense terms from this work, or any files containing a part of this\nwork or any other work associated with Project Gutenberg-tm.\n\n1.E.5.  Do not copy, display, perform, distribute or redistribute this\nelectronic work, or any part of this electronic work, without\nprominently displaying the sentence set forth in paragraph 1.E.1 with\nactive links or immediate access to the full terms of the Project\nGutenberg-tm License.\n\n1.E.6.  You may convert to and distribute this work in any binary,\ncompressed, marked up, nonproprietary or proprietary form, including any\nword processing or hypertext form.  However, if you provide access to or\ndistribute copies of a Project Gutenberg-tm work in a format other than\n\"Plain Vanilla ASCII\" or other format used in the official version\nposted on the official Project Gutenberg-tm web site (www.gutenberg.org),\nyou must, at no additional cost, fee or expense to the user, provide a\ncopy, a means of exporting a copy, or a means of obtaining a copy upon\nrequest, of the work in its original \"Plain Vanilla ASCII\" or other\nform.  Any alternate format must include the full Project Gutenberg-tm\nLicense as specified in paragraph 1.E.1.\n\n1.E.7.  Do not charge a fee for access to, viewing, displaying,\nperforming, copying or distributing any Project Gutenberg-tm works\nunless you comply with paragraph 1.E.8 or 1.E.9.\n\n1.E.8.  You may charge a reasonable fee for copies of or providing\naccess to or distributing Project Gutenberg-tm electronic works provided\nthat\n\n- You pay a royalty fee of 20% of the gross profits you derive from\n     the use of Project Gutenberg-tm works calculated using the method\n     you already use to calculate your applicable taxes.  The fee is\n     owed to the owner of the Project Gutenberg-tm trademark, but he\n     has agreed to donate royalties under this paragraph to the\n     Project Gutenberg Literary Archive Foundation.  Royalty payments\n     must be paid within 60 days following each date on which you\n     prepare (or are legally required to prepare) your periodic tax\n     returns.  Royalty payments should be clearly marked as such and\n     sent to the Project Gutenberg Literary Archive Foundation at the\n     address specified in Section 4, \"Information about donations to\n     the Project Gutenberg Literary Archive Foundation.\"\n\n- You provide a full refund of any money paid by a user who notifies\n     you in writing (or by e-mail) within 30 days of receipt that s/he\n     does not agree to the terms of the full Project Gutenberg-tm\n     License.  You must require such a user to return or\n     destroy all copies of the works possessed in a physical medium\n     and discontinue all use of and all access to other copies of\n     Project Gutenberg-tm works.\n\n- You provide, in accordance with paragraph 1.F.3, a full refund of any\n     money paid for a work or a replacement copy, if a defect in the\n     electronic work is discovered and reported to you within 90 days\n     of receipt of the work.\n\n- You comply with all other terms of this agreement for free\n     distribution of Project Gutenberg-tm works.\n\n1.E.9.  If you wish to charge a fee or distribute a Project Gutenberg-tm\nelectronic work or group of works on different terms than are set\nforth in this agreement, you must obtain permission in writing from\nboth the Project Gutenberg Literary Archive Foundation and Michael\nHart, the owner of the Project Gutenberg-tm trademark.  Contact the\nFoundation as set forth in Section 3 below.\n\n1.F.\n\n1.F.1.  Project Gutenberg volunteers and employees expend considerable\neffort to identify, do copyright research on, transcribe and proofread\npublic domain works in creating the Project Gutenberg-tm\ncollection.  Despite these efforts, Project Gutenberg-tm electronic\nworks, and the medium on which they may be stored, may contain\n\"Defects,\" such as, but not limited to, incomplete, inaccurate or\ncorrupt data, transcription errors, a copyright or other intellectual\nproperty infringement, a defective or damaged disk or other medium, a\ncomputer virus, or computer codes that damage or cannot be read by\nyour equipment.\n\n1.F.2.  LIMITED WARRANTY, DISCLAIMER OF DAMAGES - Except for the \"Right\nof Replacement or Refund\" described in paragraph 1.F.3, the Project\nGutenberg Literary Archive Foundation, the owner of the Project\nGutenberg-tm trademark, and any other party distributing a Project\nGutenberg-tm electronic work under this agreement, disclaim all\nliability to you for damages, costs and expenses, including legal\nfees.  YOU AGREE THAT YOU HAVE NO REMEDIES FOR NEGLIGENCE, STRICT\nLIABILITY, BREACH OF WARRANTY OR BREACH OF CONTRACT EXCEPT THOSE\nPROVIDED IN PARAGRAPH F3.  YOU AGREE THAT THE FOUNDATION, THE\nTRADEMARK OWNER, AND ANY DISTRIBUTOR UNDER THIS AGREEMENT WILL NOT BE\nLIABLE TO YOU FOR ACTUAL, DIRECT, INDIRECT, CONSEQUENTIAL, PUNITIVE OR\nINCIDENTAL DAMAGES EVEN IF YOU GIVE NOTICE OF THE POSSIBILITY OF SUCH\nDAMAGE.\n\n1.F.3.  LIMITED RIGHT OF REPLACEMENT OR REFUND - If you discover a\ndefect in this electronic work within 90 days of receiving it, you can\nreceive a refund of the money (if any) you paid for it by sending a\nwritten explanation to the person you received the work from.  If you\nreceived the work on a physical medium, you must return the medium with\nyour written explanation.  The person or entity that provided you with\nthe defective work may elect to provide a replacement copy in lieu of a\nrefund.  If you received the work electronically, the person or entity\nproviding it to you may choose to give you a second opportunity to\nreceive the work electronically in lieu of a refund.  If the second copy\nis also defective, you may demand a refund in writing without further\nopportunities to fix the problem.\n\n1.F.4.  Except for the limited right of replacement or refund set forth\nin paragraph 1.F.3, this work is provided to you 'AS-IS' WITH NO OTHER\nWARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO\nWARRANTIES OF MERCHANTIBILITY OR FITNESS FOR ANY PURPOSE.\n\n1.F.5.  Some states do not allow disclaimers of certain implied\nwarranties or the exclusion or limitation of certain types of damages.\nIf any disclaimer or limitation set forth in this agreement violates the\nlaw of the state applicable to this agreement, the agreement shall be\ninterpreted to make the maximum disclaimer or limitation permitted by\nthe applicable state law.  The invalidity or unenforceability of any\nprovision of this agreement shall not void the remaining provisions.\n\n1.F.6.  INDEMNITY - You agree to indemnify and hold the Foundation, the\ntrademark owner, any agent or employee of the Foundation, anyone\nproviding copies of Project Gutenberg-tm electronic works in accordance\nwith this agreement, and any volunteers associated with the production,\npromotion and distribution of Project Gutenberg-tm electronic works,\nharmless from all liability, costs and expenses, including legal fees,\nthat arise directly or indirectly from any of the following which you do\nor cause to occur: (a) distribution of this or any Project Gutenberg-tm\nwork, (b) alteration, modification, or additions or deletions to any\nProject Gutenberg-tm work, and (c) any Defect you cause.\n\n\nSection  2.  Information about the Mission of Project Gutenberg-tm\n\nProject Gutenberg-tm is synonymous with the free distribution of\nelectronic works in formats readable by the widest variety of computers\nincluding obsolete, old, middle-aged and new computers.  It exists\nbecause of the efforts of hundreds of volunteers and donations from\npeople in all walks of life.\n\nVolunteers and financial support to provide volunteers with the\nassistance they need, is critical to reaching Project Gutenberg-tm's\ngoals and ensuring that the Project Gutenberg-tm collection will\nremain freely available for generations to come.  In 2001, the Project\nGutenberg Literary Archive Foundation was created to provide a secure\nand permanent future for Project Gutenberg-tm and future generations.\nTo learn more about the Project Gutenberg Literary Archive Foundation\nand how your efforts and donations can help, see Sections 3 and 4\nand the Foundation web page at http://www.pglaf.org.\n\n\nSection 3.  Information about the Project Gutenberg Literary Archive\nFoundation\n\nThe Project Gutenberg Literary Archive Foundation is a non profit\n501(c)(3) educational corporation organized under the laws of the\nstate of Mississippi and granted tax exempt status by the Internal\nRevenue Service.  The Foundation's EIN or federal tax identification\nnumber is 64-6221541.  Its 501(c)(3) letter is posted at\nhttp://pglaf.org/fundraising.  Contributions to the Project Gutenberg\nLiterary Archive Foundation are tax deductible to the full extent\npermitted by U.S. federal laws and your state's laws.\n\nThe Foundation's principal office is located at 4557 Melan Dr. S.\nFairbanks, AK, 99712., but its volunteers and employees are scattered\nthroughout numerous locations.  Its business office is located at\n809 North 1500 West, Salt Lake City, UT 84116, (801) 596-1887, email\nbusiness@pglaf.org.  Email contact links and up to date contact\ninformation can be found at the Foundation's web site and official\npage at http://pglaf.org\n\nFor additional contact information:\n     Dr. Gregory B. Newby\n     Chief Executive and Director\n     gbnewby@pglaf.org\n\n\nSection 4.  Information about Donations to the Project Gutenberg\nLiterary Archive Foundation\n\nProject Gutenberg-tm depends upon and cannot survive without wide\nspread public support and donations to carry out its mission of\nincreasing the number of public domain and licensed works that can be\nfreely distributed in machine readable form accessible by the widest\narray of equipment including outdated equipment.  Many small donations\n($1 to $5,000) are particularly important to maintaining tax exempt\nstatus with the IRS.\n\nThe Foundation is committed to complying with the laws regulating\ncharities and charitable donations in all 50 states of the United\nStates.  Compliance requirements are not uniform and it takes a\nconsiderable effort, much paperwork and many fees to meet and keep up\nwith these requirements.  We do not solicit donations in locations\nwhere we have not received written confirmation of compliance.  To\nSEND DONATIONS or determine the status of compliance for any\nparticular state visit http://pglaf.org\n\nWhile we cannot and do not solicit contributions from states where we\nhave not met the solicitation requirements, we know of no prohibition\nagainst accepting unsolicited donations from donors in such states who\napproach us with offers to donate.\n\nInternational donations are gratefully accepted, but we cannot make\nany statements concerning tax treatment of donations received from\noutside the United States.  U.S. laws alone swamp our small staff.\n\nPlease check the Project Gutenberg Web pages for current donation\nmethods and addresses.  Donations are accepted in a number of other\nways including checks, online payments and credit card donations.\nTo donate, please visit: http://pglaf.org/donate\n\n\nSection 5.  General Information About Project Gutenberg-tm electronic\nworks.\n\nProfessor Michael S. Hart is the originator of the Project Gutenberg-tm\nconcept of a library of electronic works that could be freely shared\nwith anyone.  For thirty years, he produced and distributed Project\nGutenberg-tm eBooks with only a loose network of volunteer support.\n\n\nProject Gutenberg-tm eBooks are often created from several printed\neditions, all of which are confirmed as Public Domain in the U.S.\nunless a copyright notice is included.  Thus, we do not necessarily\nkeep eBooks in compliance with any particular paper edition.\n\n\nMost people start at our Web site which has the main PG search facility:\n\n     http://www.gutenberg.org\n\nThis Web site includes information about Project Gutenberg-tm,\nincluding how to make donations to the Project Gutenberg Literary\nArchive Foundation, how to help produce our new eBooks, and how to\nsubscribe to our email newsletter to hear about new eBooks.\n\n</pre> -->\n</div>\n<!-- </body>\n\n</html> -->"

/***/ }),

/***/ "./src/app/print-prescription/print-prescription.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/print-prescription/print-prescription.component.ts ***!
  \********************************************************************/
/*! exports provided: PrintPrescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintPrescriptionComponent", function() { return PrintPrescriptionComponent; });
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

var PrintPrescriptionComponent = /** @class */ (function () {
    function PrintPrescriptionComponent() {
    }
    PrintPrescriptionComponent.prototype.ngOnInit = function () {
        this.printPrescription();
    };
    PrintPrescriptionComponent.prototype.printPrescription = function () {
        var prescriptionContent = document.getElementById("printableContent").innerHTML;
        var openWindow = window.open("", "_blank", "width=auto, height=100%");
        var printablePage = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"> \n        <html lang=\"en\"> \n          <head> \n            <meta http-equiv=\"Content-Type\" content=\"text/html; charset=us-ascii\" /> \n            <title>Just So Stories, by Rudyard Kipling</title>  \n            <style>\n            /*  ------ Global settings */\n\n            * {\n                font-family: Cambria, Georgia, serif;\n                background-color: #ffffe0;\n                }\n            \n            body {\n                text-align:justify;\n                counter-reset: chapter;\n                }\n                \n            /* ------- Pagination */\n            \n            h1, h2 {\n              page-break-after: avoid;\n              page-break-before: always;\n            }\n            \n            p {\n                orphans:3;\n                widows:3;\n            }\n            \n            /* Default left, right, top, bottom margin is 2cm */\n            @page { margin: 2cm } \n            \n            /* First page, 10 cm margin on top */\n            @page :first {\n            margin-top: 10cm \n            }\n            \n            /* Left pages, a wider margin on the left */\n            @page :left {\n            margin-left: 3cm;\n            margin-right: 2cm;\n            }\n            \n            @page :right {\n            margin-left: 2cm;\n            margin-right: 3cm;\n            }\n            \n            /* ------ Normal elements */\n                \n             p { \n                text-indent:   1.5em;\n                margin-top:    .75em;\n                margin-bottom: .75em;\n                line-height: 1.3;\n                }\n                \n            /* First paragraphs after a title  */\n                \n            h2+p {\n                text-indent: 0em;\n                }\n                \n            h2+p:first-letter {\n                font-size: 200%;\n                color: blue;\n                font-family: \"Goudy Old Style\", Georgia, serif;\n                line-height: 50%;\n                }\n            \n            h1,h2,h3,h4,h5,h6 { \n                text-align: center; \n                letter-spacing: 0.1em;\n                }\n            \n             h1 {\n                margin-top: 3cm;\n                }\n                \n             h2 {\n                border-top: 5px solid blue;\n                border-bottom: 1px solid blue;\n                padding-top: 5px;\n                padding-bottom: 5px;\n                margin-top: 2cm;\n                counter-increment: chapter;\n                }\n                \n             h2:before {\n                content: \"Chapter \" counter(chapter) \": \";\n                }\n            \n             hr { \n                width: 50%;\n                text-align: center;\n                }\n            \n            strong { \n                background-color: yellow;\n                font-style: normal;\n            }\n                \n            blockquote {\n                font-size: 90%; \n                margin-left: 20%; \n                margin-right: 20%;\n                }\n                \n            /*  ------ Special sections, using CSS class identifiers */\n                \n            .toc  {\n                text-align:center;\n                margin-top: 2cm;\n                margin-bottom: 2cm;\n                }\n                \n            .toc p:first-letter {font-size: 100%;}\n                \n            pre { \n                font-family: \"Comic Sans\", fantasy, serif;\n                font-style: italic; \n                margin-left: 20%;\n                }\n                \n            p.fineprint {\n                font-size: 70%;\n                text-indent: 0em;\n                }\n                \n            pre.copyright, .noprint {\n               display:none;\n            }\n            \n            p.heading {\n                font-size: x-large;\n                text-align: center; \n                }\n            \n            </style>\n          </head> \n          <body>\n       " + prescriptionContent + "\n       </body></html>";
        // console.log("printPrescription", JSON.stringify(printablePage))
        openWindow.document.open();
        openWindow.document.write(printablePage);
        openWindow.document.close;
        openWindow.focus();
        openWindow.print();
        // openWindow.close();
    };
    PrintPrescriptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-print-prescription',
            template: __webpack_require__(/*! ./print-prescription.component.html */ "./src/app/print-prescription/print-prescription.component.html"),
            styles: [__webpack_require__(/*! ./print-prescription.component.css */ "./src/app/print-prescription/print-prescription.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrintPrescriptionComponent);
    return PrintPrescriptionComponent;
}());



/***/ }),

/***/ "./src/app/print/print.component.css":
/*!*******************************************!*\
  !*** ./src/app/print/print.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*  ------ Global settings */\r\n\r\n* {\r\n    font-family: Cambria, Georgia, serif;\r\n    /* background-color: #ffffe0; */\r\n    }\r\n\r\nbody {\r\n    text-align:justify;\r\n    counter-reset: chapter;\r\n    }\r\n\r\n/* ------- Pagination */\r\n\r\nh1, h2 {\r\n  page-break-after: avoid;\r\n  /* page-break-before: always; */\r\n}\r\n\r\n/* p {\r\n    orphans:3;\r\n    widows:3;\r\n} */\r\n\r\n/* Default left, right, top, bottom margin is 2cm */\r\n\r\n@page { margin: 1cm }\r\n\r\n/* First page, 10 cm margin on top */\r\n\r\n@page :first {\r\n/* margin-top: 10cm  */\r\n}\r\n\r\n/* Left pages, a wider margin on the left */\r\n\r\n/* @page :left {\r\nmargin-left: 3cm;\r\nmargin-right: 2cm;\r\n}\r\n\r\n@page :right {\r\nmargin-left: 2cm;\r\nmargin-right: 3cm;\r\n} */\r\n\r\n/* ------ Normal elements */\r\n\r\np,div,td { \r\n    text-indent:   1em;\r\n    margin-top:    .5em;\r\n    margin-bottom: .5em;\r\n    line-height: 1.5;\r\n    }\r\n\r\n/* First paragraphs after a title  */\r\n\r\nh2+p {\r\n    text-indent: 0em;\r\n    }\r\n\r\nh2+p:first-letter {\r\n    font-size: 200%;\r\n    color: blue;\r\n    font-family: \"Goudy Old Style\", Georgia, serif;\r\n    line-height: 50%;\r\n    }\r\n\r\nh1,h2,h4,h5,h6 { \r\n    text-align: center; \r\n    letter-spacing: 0.1em;\r\n    }\r\n\r\nh1 {\r\n    /* margin-top: 3cm; */\r\n    color: red;\r\n    }\r\n\r\nh2 {\r\n    border-top: 5px solid blue;\r\n    border-bottom: 1px solid blue;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    margin-top: 2cm;\r\n    counter-increment: chapter;\r\n    }\r\n\r\nh2:before {\r\n    content: \"Chapter \" counter(chapter) \": \";\r\n    }\r\n\r\nhr { \r\n    width: 50%;\r\n    text-align: center;\r\n    }\r\n\r\nstrong { \r\n    background-color: yellow;\r\n    font-style: normal;\r\n}\r\n\r\nblockquote {\r\n    font-size: 90%; \r\n    margin-left: 20%; \r\n    margin-right: 20%;\r\n    }\r\n\r\n/*  ------ Special sections, using CSS class identifiers */\r\n\r\n.toc  {\r\n    text-align:center;\r\n    margin-top: 2cm;\r\n    margin-bottom: 2cm;\r\n    }\r\n\r\n.toc p:first-letter {font-size: 100%;}\r\n\r\npre { \r\n    font-family: \"Comic Sans\", fantasy, serif;\r\n    font-style: italic; \r\n    margin-left: 20%;\r\n    }\r\n\r\np.fineprint {\r\n    font-size: 70%;\r\n    text-indent: 0em;\r\n    }\r\n\r\npre.copyright, .noprint {\r\n   display:none;\r\n}\r\n\r\np.heading {\r\n    font-size: x-large;\r\n    text-align: center; \r\n    }\r\n\r\n/* Custom entry */\r\n\r\n.left {\r\n    text-align: left;    \r\n}\r\n\r\n.center {\r\n    text-align: center;\r\n}\r\n\r\n.right {\r\n    text-align: right;\r\n}\r\n\r\n.border{\r\n    border-top: 3px solid blue;\r\n}\r\n\r\n.smaller-border{\r\n    border-top: 1.5px solid blue;\r\n}\r\n\r\ntable,tr{\r\n    width:100%;\r\n}\r\n\r\n.block1,.block2{\r\n    display: inline;\r\n}"

/***/ }),

/***/ "./src/app/print/print.component.html":
/*!********************************************!*\
  !*** ./src/app/print/print.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"requestLoading\">\r\n    <h1>Loading...</h1>\r\n    <mat-progress-bar style=\"width: 100%\" color=\"primary\" mode=\"indeterminate\">\r\n    </mat-progress-bar>\r\n</div>\r\n<div id=\"printableContent\" *ngIf=\"printView\">\r\n\r\n    <button mat-raised-button color=\"primary\" class=\"noPrint\" (click)=\"printPrescription()\">Print</button>\r\n    <div id=\"printableContent\">\r\n\r\n        <div style=\"text-indent: 0em\"> <img src=\"../img/g5220.png\" alt=\"E Prescription\" height=\"150px\" width=\"99%\">\r\n        </div>\r\n        <br />\r\n        <!-- <div class=\"border\"></div> -->\r\n        <p class=\"left\">Prescription ID: {{printView.prescriptionId}}</p>\r\n        <p class=\"left\"><b>PATIENT INFORMATION</b></p>\r\n        <table>\r\n            <tr>\r\n                <td>\r\n                    Name: <b>{{printView.name}}</b>\r\n                </td>\r\n                <td>\r\n                    Reg: {{printView.regDate}}\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    Sex: {{printView.sex}}\r\n                </td>\r\n                <td>\r\n                    Visited: {{printView.visitDateTime}}\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    Age: {{printView.age}}\r\n                </td>\r\n                <td>\r\n                    Visit No: {{printView.visitNo}}\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <!-- <td>\r\n                    <table>\r\n                        <tr>\r\n                            <td>\r\n                                Phone No. {{printView.phoneNo}}\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                Department: {{printView.department}}\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                Doctor: {{printView.doctor}}\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                </td> -->\r\n                <td>\r\n                    Others: {{printView.printableNotes}}\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <div class=\"border\"></div>\r\n        <table>\r\n            <tr>\r\n                <td style=\"width:40%\">\r\n                    CHIEF COMPLAINT:\r\n                </td>\r\n                <td style=\"width:70%\">\r\n                    {{printView.chiefComplain}}\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    <p class=\"smaller-border\"></p>\r\n                </td>\r\n                <td>\r\n                    <p class=\"smaller-border\"></p>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td style=\"width:40%\">\r\n                    MEDICAL HISTORY:\r\n                </td>\r\n                <td style=\"width:70%\">\r\n                    {{printView.medicalHistory}}\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    <p class=\"smaller-border\"></p>\r\n                </td>\r\n                <td>\r\n                    <p class=\"smaller-border\"></p>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td style=\"width:40%\">\r\n                    CLINICAL EXAMINATION:\r\n                </td>\r\n                <td style=\"width:70%\">\r\n                    {{printView.clinicalFindings}}\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <div class=\"border\"></div>\r\n        <p><b>ADVICE</b></p>\r\n        <div>\r\n            <ul>\r\n                <li *ngFor=\"let advice of getOrderedAdviceList()\">{{advice}}</li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"smaller-border\"></div>\r\n        <p><b>MEDICINE</b></p>\r\n        <div>\r\n            <ol>\r\n                <li *ngFor=\"let med of printView.medicine\">\r\n                    {{med}}\r\n                </li>\r\n            </ol>\r\n        </div>\r\n        <div class=\"border\"></div>\r\n        <br />\r\n        <table>\r\n            <tr>\r\n                <td style=\"color:red\" class=\"left\">\r\n                    <div class=\"block1\"><b><i>Dr. Mitrasen Manna</i></b></div>\r\n                    <div class=\"block2\" style=\"color:red\"><b> [B.D.S. (W.B.U.H.S)]</b></div>\r\n                </td>\r\n                <td style=\"color:red\" class=\"right\">\r\n                    <div class=\"block1\"><b><i>Dr. Aparna Gupta</i></b></div>\r\n                    <div class=\"block2\" style=\"color:red\"><b> [B.D.S., M.D.S. (W.B.U.H.S)]</b></div>\r\n                </td>\r\n            </tr>\r\n            <!-- <tr>\r\n                <td class=\"left\" style=\"color:red\"><b>B.D.S. (W.B.U.H.S)</b></td>\r\n                <td class=\"right\" style=\"color:red\"><b>B.D.S., M.D.S. (W.B.U.H.S)</b></td>\r\n            </tr> -->\r\n            <tr>\r\n                <td style=\"color:blue\">Regd No: 3350A</td>\r\n                <td class=\"right\" style=\"color:blue\">Regd No: 5883-A</td>\r\n            </tr>\r\n            <tr>\r\n                <td style=\"color:blue\">\r\n                    Ex-House Surgeon, R. G. Kar Medical College & Hospital, Kolkata\r\n                </td>\r\n                <td class=\"right\" style=\"color:blue\">\r\n                    Ex-Resident, Dr. R. Ahmed Dental College & Hospital, Sealdah, Kolkata\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td></td>\r\n                <!-- <td style=\"color:blue\">\r\n                    Contact No. 7044074579, 8697969918\r\n                </td> -->\r\n                <td class=\"right\" style=\"color:blue\">\r\n                    Ex-House Surgeon, GTB Hospital New Delhi\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/print/print.component.ts":
/*!******************************************!*\
  !*** ./src/app/print/print.component.ts ***!
  \******************************************/
/*! exports provided: PrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintComponent", function() { return PrintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_httpcomm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/httpcomm.service */ "./src/app/services/httpcomm.service.ts");
/* harmony import */ var _services_commonservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/commonservice.service */ "./src/app/services/commonservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PrintComponent = /** @class */ (function () {
    function PrintComponent(route, httpClient, matSnackbar, router, dialog) {
        this.route = route;
        this.matSnackbar = matSnackbar;
        this.router = router;
        this.dialog = dialog;
        this.requestLoading = true;
        this.printStylesheet = "\n    <style>\n    /*  ------ Global settings */\n\n    * {\n        font-family: Cambria, Georgia, serif;\n        /* background-color: #ffffe0; */\n        }\n    \n    body {\n        text-align:justify;\n        counter-reset: chapter;\n        }\n        \n    /* ------- Pagination */\n    \n    h1, h2 {\n      page-break-after: avoid;\n      /* page-break-before: always; */\n    }\n    \n    /* p {\n        orphans:3;\n        widows:3;\n    } */\n    \n    /* Default left, right, top, bottom margin is 2cm */\n    @page { margin: 1cm } \n    \n    /* First page, 10 cm margin on top */\n    @page :first {\n    /* margin-top: 10cm  */\n    }\n    \n    /* Left pages, a wider margin on the left */\n    /* @page :left {\n    margin-left: 3cm;\n    margin-right: 2cm;\n    }\n    \n    @page :right {\n    margin-left: 2cm;\n    margin-right: 3cm;\n    } */\n    \n    /* ------ Normal elements */\n        \n     p,div,td { \n        text-indent:   1em;\n        margin-top:    .5em;\n        margin-bottom: .5em;\n        line-height: 1.5;\n        }\n        \n    /* First paragraphs after a title  */\n        \n    h2+p {\n        text-indent: 0em;\n        }\n        \n    h2+p:first-letter {\n        font-size: 200%;\n        color: blue;\n        font-family: \"Goudy Old Style\", Georgia, serif;\n        line-height: 50%;\n        }\n    \n    h1,h2,h4,h5,h6 { \n        text-align: center; \n        letter-spacing: 0.1em;\n        }\n        \n     h1 {\n        /* margin-top: 3cm; */\n        color: red;\n        }\n        \n     h2 {\n        border-top: 5px solid blue;\n        border-bottom: 1px solid blue;\n        padding-top: 5px;\n        padding-bottom: 5px;\n        margin-top: 2cm;\n        counter-increment: chapter;\n        }\n        \n     h2:before {\n        content: \"Chapter \" counter(chapter) \": \";\n        }\n    \n     hr { \n        width: 50%;\n        text-align: center;\n        }\n    \n    strong { \n        background-color: yellow;\n        font-style: normal;\n    }\n        \n    blockquote {\n        font-size: 90%; \n        margin-left: 20%; \n        margin-right: 20%;\n        }\n        \n    .toc  {\n        text-align:center;\n        margin-top: 2cm;\n        margin-bottom: 2cm;\n        }\n        \n    .toc p:first-letter {font-size: 100%;}\n        \n    pre { \n        font-family: \"Comic Sans\", fantasy, serif;\n        font-style: italic; \n        margin-left: 20%;\n        }\n        \n    p.fineprint {\n        font-size: 70%;\n        text-indent: 0em;\n        }\n        \n    pre.copyright, .noprint {\n       display:none;\n    }\n    \n    p.heading {\n        font-size: x-large;\n        text-align: center; \n        }\n    \n    \n    /* Custom entry */\n    .left {\n        text-align: left;    \n    }\n    .center {\n        text-align: center;\n    }\n    .right {\n        text-align: right;\n    }\n    .border{\n        border-top: 3px solid blue;\n    }\n    .smaller-border{\n        border-top: 1.5px solid blue;\n    }\n    table,tr{\n        width:100%;\n    }\n    .block1,.block2{\n        display: inline;\n    }\n    </style>\n    ";
        this.httpService = new _services_httpcomm_service__WEBPACK_IMPORTED_MODULE_4__["HttpcommService"](httpClient);
        this.commonService = new _services_commonservice_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]();
    }
    PrintComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var patientId = +this.route.snapshot.queryParamMap.get('patientId');
        var prescriptionId = +this.route.snapshot.queryParamMap.get('prescriptionId');
        if (patientId > 0 && prescriptionId > 0) {
            this.httpService.getPrescriptionPrintView(patientId, prescriptionId).subscribe(function (resp) {
                _this.requestLoading = false;
                if (resp && resp.status == 'SUCCESS') {
                    _this.printView = resp.resp;
                }
                else {
                    _this.commonService.showErrorSnackBar(_this.matSnackbar, resp.desc, function () {
                        _this.router.navigate(['']);
                    });
                }
            });
        }
        else {
            this.router.navigate(['']);
        }
    };
    PrintComponent.prototype.ngOnInit = function () {
        /**
         * More details on route and queryparams
         * https://www.tektutorialshub.com/angular/angular-passing-optional-query-parameters-to-route/
         * https://www.tektutorialshub.com/angular/angular-passing-parameters-to-route/
         */
    };
    PrintComponent.prototype.getOrderedAdviceList = function () {
        return this.commonService.getNewLineSeperatedArrayString(this.printView.advice);
    };
    PrintComponent.prototype.printPrescription = function () {
        var prescriptionContent = document.getElementById("printableContent");
        // if (prescriptionContent.requestFullscreen) {
        //     prescriptionContent.requestFullscreen();
        // }
        // var openWindow = window.open("", "_blank", "fullscreen=yes,width=800,height=600")
        var openWindow = window.open("", "target", "fullscreen=yes");
        var css = this.printStylesheet;
        var printablePage = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"> \n        <html lang=\"en\"> \n          <head> \n            <meta http-equiv=\"Content-Type\" content=\"text/html; charset=us-ascii\" /> \n            <title>E - prescription</title>\n            " + css + "\n          </head> \n          <body>\n       " + prescriptionContent.innerHTML + "\n       </body></html>";
        openWindow.document.open();
        openWindow.document.write(printablePage);
        openWindow.document.close;
        openWindow.focus();
        if (!this.httpService.dummy) {
            openWindow.print();
            openWindow.close();
        }
    };
    PrintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-print',
            template: __webpack_require__(/*! ./print.component.html */ "./src/app/print/print.component.html"),
            styles: [__webpack_require__(/*! ./print.component.css */ "./src/app/print/print.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], PrintComponent);
    return PrintComponent;
}());

// @Component({
//     selector: 'doctor-selection-dialog',
//     templateUrl: 'doctor-selection-dialog.html',
//     styleUrls: ['./print.component.css'],
// })
// export class DoctorSelectionDialog {
//     regdNo: string
//     constructor(
//         public dialogRef: MatDialogRef<DoctorSelectionDialog>,
//         @Inject(MAT_DIALOG_DATA) public customData: string = "") {
//     }
//     closeDialog() {
//         this.dialogRef.close(this.regdNo)
//     }
//     onNoClick(): void {
//         this.dialogRef.close();
//     };
// }


/***/ }),

/***/ "./src/app/services/commonservice.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/commonservice.service.ts ***!
  \***************************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _snackhelper_snackbar_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../snackhelper/snackbar-model */ "./src/app/snackhelper/snackbar-model.ts");
/* harmony import */ var _snackhelper_snackhelper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../snackhelper/snackhelper.component */ "./src/app/snackhelper/snackhelper.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommonService = /** @class */ (function () {
    function CommonService() {
        this.message = [];
    }
    CommonService.prototype.hasValue = function (s) {
        if (s) {
            if (s.length > 0) {
                return true;
            }
        }
        return false;
    };
    CommonService.prototype.addMessage = function (msg) {
        this.message.push(msg);
    };
    CommonService.prototype.getMessages = function () {
        return this.message;
    };
    CommonService.prototype.validateDate = function (date) {
        if (date.getDate() > 0 &&
            date.getMonth() >= 0 &&
            date.getFullYear() > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    CommonService.prototype.getParsedDate = function (date) {
        var pd = null;
        // console.log(date.getTime())
        // console.log(date.getDate())
        // console.log(date.getMonth())
        // console.log(date.getFullYear())
        console.log('Date validation: ' + this.validateDate(date));
        if (this.validateDate(date)) {
            pd = [];
            pd.push(date.getDate());
            pd.push(date.getMonth() + 1);
            pd.push(date.getFullYear());
        }
        console.log(pd);
        return pd;
    };
    /**
     * Method to create array to view clinical finding and corresponding teeth
     * @param stringArr
     * @param key
     * @param addVal
     * @param keyValueSeperator
     * @param valueSeperator
     */
    CommonService.prototype.combineValForStringArray = function (stringArr, key, addVal, keyValueSeperator, valueSeperator) {
        if (keyValueSeperator === void 0) { keyValueSeperator = ' - '; }
        if (valueSeperator === void 0) { valueSeperator = ','; }
        var combinedVal = '';
        for (var index = 0; index < stringArr.length; index++) {
            if (stringArr[index].includes(key)) {
                var insertedVal = stringArr.splice(index, 1)[0];
                if (insertedVal.includes(addVal)) {
                    return insertedVal;
                }
                else {
                    combinedVal = this.getSortedValues(insertedVal + valueSeperator + addVal, keyValueSeperator, valueSeperator);
                    // console.log('Return', combinedVal)
                    return combinedVal;
                }
            }
        }
        var response = key + keyValueSeperator + addVal;
        return response;
    };
    /**
     * Method to sort teeths in ascending order for a clinical finding
     * @param values
     * @param keyValueSeperator
     * @param valueSeperator
     * @param isAsync
     */
    CommonService.prototype.getSortedValues = function (values, keyValueSeperator, valueSeperator, isAsync) {
        if (isAsync === void 0) { isAsync = true; }
        var keyValueArray = values.split(keyValueSeperator);
        if (keyValueArray && keyValueArray.length == 2) {
            var key = keyValueArray[0];
            var valueStringArray = keyValueArray[1].split(valueSeperator);
            var valueNumberArray_1 = [];
            valueStringArray.map(function (vs) {
                valueNumberArray_1.push(Number(vs));
            });
            var sortedNumberArray = valueNumberArray_1.sort(function (n1, n2) {
                if (isAsync && n1 > n2)
                    return 1;
                else
                    return -1;
            });
            return key + keyValueSeperator + sortedNumberArray;
        }
        else
            return values;
    };
    CommonService.prototype.getFormattedClinicalFindingsForPost = function (stringArray) {
        var response = '';
        if (stringArray && stringArray.length > 0) {
            stringArray.forEach(function (str, index) {
                response += str.replace(/,/g, " ");
                if (index + 1 < stringArray.length) {
                    response += ",";
                }
            });
        }
        // console.log(`Response getFormattedClinicalFindingsForPost ${response}`)
        return response;
    };
    CommonService.prototype.showSnackBar = function (snackBar, snackBarModel) {
        snackBar.openFromComponent(_snackhelper_snackhelper_component__WEBPACK_IMPORTED_MODULE_2__["SnackhelperComponent"], {
            data: snackBarModel, duration: snackBarModel.duration
        });
    };
    CommonService.prototype.showSuccessSnackBar = function (snackBar, successMsg, callback) {
        if (successMsg === void 0) { successMsg = 'Data updated successfully'; }
        if (callback === void 0) { callback = null; }
        var snackBarModel = new _snackhelper_snackbar_model__WEBPACK_IMPORTED_MODULE_1__["SnackbarModel"]();
        snackBarModel.action = "OK";
        snackBarModel.msg = successMsg;
        if (callback) {
            snackBarModel.callback = callback;
        }
        snackBar.openFromComponent(_snackhelper_snackhelper_component__WEBPACK_IMPORTED_MODULE_2__["SnackhelperComponent"], {
            data: snackBarModel, duration: snackBarModel.duration
        });
    };
    CommonService.prototype.showErrorSnackBar = function (snackBar, errorMsg, callback) {
        if (errorMsg === void 0) { errorMsg = 'Server error'; }
        if (callback === void 0) { callback = null; }
        var snackBarModel = new _snackhelper_snackbar_model__WEBPACK_IMPORTED_MODULE_1__["SnackbarModel"]();
        snackBarModel.action = "OK";
        snackBarModel.isError = true;
        snackBarModel.msg = errorMsg;
        if (callback) {
            snackBarModel.callback = callback;
        }
        snackBar.openFromComponent(_snackhelper_snackhelper_component__WEBPACK_IMPORTED_MODULE_2__["SnackhelperComponent"], {
            data: snackBarModel, duration: snackBarModel.duration
        });
    };
    CommonService.prototype.getNewLineSeperatedArrayString = function (input) {
        return (input && input.length > 0) ? input.split(/\n/g) : [];
    };
    CommonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CommonService);
    return CommonService;
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
                    "age": 24,
                    "height": 169,
                    "sex": "male",
                    "weight": 80,
                    "image": null,
                    "email": "sadhuait@gmail.com",
                    "address1": "Habra Jaigachi Rathtala North 24 Parganas",
                    "address2": "Trying to write a pretty looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong looooooooooooooooooooong text",
                    "pid": 1
                },
                {
                    "bloodGroup": "AB_POSITIVE",
                    "contactNo2": 9046787913,
                    "contactNo1": 7980231838,
                    "discountType": "flat",
                    "discount": 20,
                    "dobDd": 27,
                    "dobMm": 3,
                    "dobYy": 1992,
                    "firstName": "gourab",
                    "lastName": "sadhu",
                    "age": 20,
                    "tsCreated": 1534695098485,
                    "weight": 80,
                    "image": null,
                    "email": "sadhuait@gmail.com",
                    "address1": "Habra",
                    "address2": "looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong looooooooooooooooooooong text",
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
                    "trtId": 3,
                    "trtDesc": "Extraction",
                    "trtName": "Extraction",
                    "clinicalFinding": 2
                },
                {
                    "trtId": 4,
                    "trtDesc": "Oral prophylaxis",
                    "trtName": "Oral prophylaxis",
                    "clinicalFinding": 10
                },
                {
                    "trtId": 5,
                    "trtDesc": "Restoration statined teeth",
                    "trtName": "Restoration Stain",
                    "clinicalFinding": 9
                },
                {
                    "trtId": 6,
                    "trtDesc": "Prosthesis removable",
                    "trtName": "Prosthesis Remove",
                    "clinicalFinding": 10
                },
                {
                    "trtId": 7,
                    "trtDesc": "Prosthesis fixed",
                    "trtName": "Prosthesis Fixed",
                    "clinicalFinding": 10
                },
                {
                    "trtId": 8,
                    "trtDesc": "Prosthesis implant",
                    "trtName": "Prosthesis Implant",
                    "clinicalFinding": 10
                },
                {
                    "trtId": 10,
                    "trtDesc": "Other treatment",
                    "trtName": "Other",
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
                    "treatmentPlan": null,
                    "medicineId": 1
                },
                {
                    "medicineName": "med2",
                    "ageGroup": "10to30",
                    "treatmentId": 1,
                    "dosage": "sokale bikale 1 ta khabar por",
                    "clinicalAvailability": 7,
                    "diseaseCode": "dCode2",
                    "ageGroupBean": null,
                    "treatmentPlan": null,
                    "medicineId": 2
                },
                {
                    "medicineName": "med3",
                    "ageGroup": "10to30",
                    "treatmentId": 1,
                    "dosage": "sokale bikale 1 ta khabar por",
                    "clinicalAvailability": 7,
                    "diseaseCode": "dCode3",
                    "medicineId": 3
                }
            ]
        };
        this.medicalMaster = {
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
                },
                {
                    "medicalHistoryName": "Hypotension",
                    "medicalHistories": null
                },
                {
                    "medicalHistoryName": "Asthma",
                    "medicalHistories": null
                },
                {
                    "medicalHistoryName": "Cerebro vascular accident",
                    "medicalHistories": null
                },
                {
                    "medicalHistoryName": "Cardiac diseases",
                    "medicalHistories": null
                },
                {
                    "medicalHistoryName": "Hypothyroidism",
                    "medicalHistories": null
                },
                {
                    "medicalHistoryName": "Hyperthyroidism",
                    "medicalHistories": null
                },
                {
                    "medicalHistoryName": "Drug hypersensitivity",
                    "medicalHistories": null
                },
                {
                    "medicalHistoryName": "Other",
                    "medicalHistories": null
                }
            ]
        };
        this.getFeeConfig = {
            "status": "SUCCESS",
            "desc": null,
            "resp": {
                "feeConfigId": 18,
                "ageGroupId": "10to30",
                "ageGroupPercent": 10,
                "baseFee": 60,
                "toothGroupId": 2,
                "toothGroupPercent": 10,
                "treatmentPlanId": 1,
                "totalFee": 72,
                "amountPaid": 0
            }
        };
        this.getFeeConfigList = {
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
                    "totalFee": 72,
                },
                {
                    "feeConfigId": -24,
                    "ageGroupId": "3to10",
                    "ageGroupPercent": 30,
                    "baseFee": 89,
                    "toothGroupId": 1,
                    "toothGroupPercent": 5,
                    "treatmentPlanId": 2,
                    "totalFee": 119
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
        this.clinicalFindingList = {
            "status": "SUCCESS",
            "desc": null,
            "resp": [
                {
                    "fdesc": "desc Caries",
                    "fid": 1,
                    "fname": "Caries"
                },
                {
                    "fdesc": "desc Periodontities",
                    "fid": 2,
                    "fname": "Periodontities"
                },
                {
                    "fdesc": "desc Grossly decayed",
                    "fid": 3,
                    "fname": "Grossly decayed"
                },
                {
                    "fdesc": "desc Root stump",
                    "fid": 4,
                    "fname": "Root stump"
                },
                {
                    "fdesc": "desc Attrition",
                    "fid": 5,
                    "fname": "Attrition"
                },
                {
                    "fdesc": "desc Cervical abrasion",
                    "fid": 6,
                    "fname": "Cervical abrasion"
                },
                {
                    "fdesc": "desc Missing tooth",
                    "fid": 7,
                    "fname": "Missing tooth"
                },
                {
                    "fdesc": "desc Calculus",
                    "fid": 8,
                    "fname": "Calculus"
                },
                {
                    "fdesc": "desc Stain",
                    "fid": 9,
                    "fname": "Stain"
                },
                {
                    "fdesc": "other desc",
                    "fid": 10,
                    "fname": "Others"
                }
            ]
        };
        this.addonClinicalFinding = {
            "status": "SUCCESS",
            "desc": null,
            "resp": {
                "fdesc": "desc Caries",
                "fid": 1,
                "fname": "Caries"
            }
        };
        this.toothQuadrentList = {
            "status": "SUCCESS",
            "desc": null,
            "resp": [
                {
                    "toothIndex": 41,
                    "toothGroup": 1,
                    "toothNumber": 1,
                    "toothQdr": 4
                },
                {
                    "toothIndex": 42,
                    "toothGroup": 1,
                    "toothNumber": 2,
                    "toothQdr": 4
                },
                {
                    "toothIndex": 43,
                    "toothGroup": 2,
                    "toothNumber": 3,
                    "toothQdr": 4
                },
                {
                    "toothIndex": 44,
                    "toothGroup": 2,
                    "toothNumber": 4,
                    "toothQdr": 4
                },
                {
                    "toothIndex": 35,
                    "toothGroup": 3,
                    "toothNumber": 5,
                    "toothQdr": 3
                },
                {
                    "toothIndex": 36,
                    "toothGroup": 3,
                    "toothNumber": 6,
                    "toothQdr": 3
                },
                {
                    "toothIndex": 37,
                    "toothGroup": 4,
                    "toothNumber": 7,
                    "toothQdr": 3
                },
                {
                    "toothIndex": 38,
                    "toothGroup": 4,
                    "toothNumber": 8,
                    "toothQdr": 3
                },
                {
                    "toothIndex": 45,
                    "toothGroup": 3,
                    "toothNumber": 5,
                    "toothQdr": 4
                },
                {
                    "toothIndex": 46,
                    "toothGroup": 3,
                    "toothNumber": 6,
                    "toothQdr": 4
                },
                {
                    "toothIndex": 12,
                    "toothGroup": 1,
                    "toothNumber": 2,
                    "toothQdr": 1
                },
                {
                    "toothIndex": 11,
                    "toothGroup": 1,
                    "toothNumber": 1,
                    "toothQdr": 1
                },
                {
                    "toothIndex": 14,
                    "toothGroup": 2,
                    "toothNumber": 4,
                    "toothQdr": 1
                },
                {
                    "toothIndex": 13,
                    "toothGroup": 2,
                    "toothNumber": 3,
                    "toothQdr": 1
                },
                {
                    "toothIndex": 16,
                    "toothGroup": 3,
                    "toothNumber": 6,
                    "toothQdr": 1
                },
                {
                    "toothIndex": 15,
                    "toothGroup": 3,
                    "toothNumber": 5,
                    "toothQdr": 1
                },
                {
                    "toothIndex": 18,
                    "toothGroup": 4,
                    "toothNumber": 8,
                    "toothQdr": 1
                },
                {
                    "toothIndex": 17,
                    "toothGroup": 4,
                    "toothNumber": 7,
                    "toothQdr": 1
                },
                {
                    "toothIndex": 22,
                    "toothGroup": 1,
                    "toothNumber": 2,
                    "toothQdr": 2
                },
                {
                    "toothIndex": 21,
                    "toothGroup": 1,
                    "toothNumber": 1,
                    "toothQdr": 2
                },
                {
                    "toothIndex": 24,
                    "toothGroup": 2,
                    "toothNumber": 4,
                    "toothQdr": 2
                },
                {
                    "toothIndex": 23,
                    "toothGroup": 2,
                    "toothNumber": 3,
                    "toothQdr": 2
                },
                {
                    "toothIndex": 26,
                    "toothGroup": 3,
                    "toothNumber": 6,
                    "toothQdr": 2
                },
                {
                    "toothIndex": 25,
                    "toothGroup": 3,
                    "toothNumber": 5,
                    "toothQdr": 2
                },
                {
                    "toothIndex": 28,
                    "toothGroup": 4,
                    "toothNumber": 8,
                    "toothQdr": 2
                },
                {
                    "toothIndex": 27,
                    "toothGroup": 4,
                    "toothNumber": 7,
                    "toothQdr": 2
                },
                {
                    "toothIndex": 32,
                    "toothGroup": 1,
                    "toothNumber": 2,
                    "toothQdr": 3
                },
                {
                    "toothIndex": 31,
                    "toothGroup": 1,
                    "toothNumber": 1,
                    "toothQdr": 3
                },
                {
                    "toothIndex": 34,
                    "toothGroup": 2,
                    "toothNumber": 4,
                    "toothQdr": 3
                },
                {
                    "toothIndex": 33,
                    "toothGroup": 2,
                    "toothNumber": 3,
                    "toothQdr": 3
                },
                {
                    "toothIndex": 48,
                    "toothGroup": 4,
                    "toothNumber": 8,
                    "toothQdr": 4
                },
                {
                    "toothIndex": 47,
                    "toothGroup": 4,
                    "toothNumber": 7,
                    "toothQdr": 4
                }
            ]
        };
        this.getDashboardView = {
            "status": "SUCCESS",
            "desc": null,
            "resp": [
                {
                    "pHistory": {
                        "prescriptionId": 34,
                        "advice": "general test  advice",
                        "chiefComplaint": "general test cc",
                        "clinicalFindings": "Periodontities - 34 35",
                        "investigation": "general test iv",
                        "nextAppointment": 1542393000000,
                        "note": "general test notes",
                        "printableNotes": "Printed",
                        "patientId": 1,
                        "provisionalDiagnosis": "general test pd",
                        "tsCreated": 1542426489661,
                        "tsModified": null
                    },
                    "fbl": [
                        {
                            "fId": 34,
                            "amount": 500,
                            "amountPaid": 390,
                            "trtmntPlanRef": 2,
                            "notes": "general test fee",
                            "patientId": 1,
                            "prescriptionId": null,
                            "tsCreated": 1542426489787,
                            "paymentTs": null
                        },
                        {
                            "fId": 35,
                            "amount": 356,
                            "amountPaid": 70,
                            "trtmntPlanRef": 2,
                            "notes": "general test fee",
                            "patientId": 1,
                            "prescriptionId": null,
                            "tsCreated": 1542426489787,
                            "paymentTs": null
                        }
                    ],
                    "mhv": [
                        {
                            "medicalHistoryId": 37,
                            "medicalHistoryName": "Hypotension",
                            "note": null,
                            "patientId": 1,
                            "prescriptionId": 34,
                            "severity": null,
                            "startedFrom": 1542426489878
                        },
                        {
                            "medicalHistoryId": 38,
                            "medicalHistoryName": "Asthma",
                            "note": null,
                            "patientId": 1,
                            "prescriptionId": 34,
                            "severity": null,
                            "startedFrom": 1542426489878
                        }
                    ],
                    "medhv": [
                        {
                            "medId": 20,
                            "diseaseCode": "dCode2",
                            "diseaseName": null,
                            "dosage": "dose",
                            "medicineName": "med2",
                            "patientId": 1,
                            "prescriptionId": 34
                        },
                        {
                            "medId": 21,
                            "diseaseCode": "dCode3",
                            "diseaseName": null,
                            "dosage": "dose",
                            "medicineName": "med3",
                            "patientId": 1,
                            "prescriptionId": 34
                        }
                    ],
                    "tphv": [
                        {
                            "clinicalFinding": "Periodontities",
                            "note": null,
                            "patientId": 1,
                            "prescriptionId": 40,
                            "toothIndex": "35",
                            "tsCreated": 1546330807107,
                            "tsModified": null,
                            "status": "Pending",
                            "tname": "Prosthesis removable",
                            "tid": 8
                        },
                        {
                            "clinicalFinding": "Periodontities",
                            "note": null,
                            "patientId": 1,
                            "prescriptionId": 40,
                            "toothIndex": "34",
                            "tsCreated": 1546330836694,
                            "tsModified": null,
                            "status": "Completed",
                            "tname": "RCT",
                            "tid": 9
                        }
                    ]
                }
            ]
        };
        this.getSinglePrescriptionView = {
            "status": "SUCCESS",
            "desc": null,
            "resp": [{
                    "pHistory": {
                        "prescriptionId": 34,
                        "advice": "general test  advice",
                        "chiefComplaint": "general test cc",
                        "clinicalFindings": "Periodontities - 34 35",
                        "investigation": "general test iv",
                        "nextAppointment": 1542393000000,
                        "note": "general test notes",
                        "printableNotes": "Printed",
                        "patientId": 1,
                        "provisionalDiagnosis": "general test pd",
                        "tsCreated": 1542426489661,
                        "tsModified": null
                    },
                    "fbl": [
                        {
                            "fId": 34,
                            "amount": 500,
                            "amountPaid": 390,
                            "trtmntPlanRef": 2,
                            "notes": "general test fee",
                            "patientId": 1,
                            "prescriptionId": null,
                            "tsCreated": 1542426489787,
                            "paymentTs": null
                        },
                        {
                            "fId": 35,
                            "amount": 356,
                            "amountPaid": 70,
                            "trtmntPlanRef": 2,
                            "notes": "general test fee",
                            "patientId": 1,
                            "prescriptionId": null,
                            "tsCreated": 1542426489787,
                            "paymentTs": null
                        }
                    ],
                    "mhv": [
                        {
                            "medicalHistoryId": 37,
                            "medicalHistoryName": "Hypotension",
                            "note": null,
                            "patientId": 1,
                            "prescriptionId": 34,
                            "severity": null,
                            "startedFrom": 1542426489878
                        },
                        {
                            "medicalHistoryId": 38,
                            "medicalHistoryName": "Asthma",
                            "note": null,
                            "patientId": 1,
                            "prescriptionId": 34,
                            "severity": null,
                            "startedFrom": 1542426489878
                        }
                    ],
                    "medhv": [
                        {
                            "medId": 20,
                            "diseaseCode": "dCode2",
                            "diseaseName": null,
                            "dosage": "dose",
                            "medicineName": "med2",
                            "patientId": 1,
                            "prescriptionId": 34
                        },
                        {
                            "medId": 21,
                            "diseaseCode": "dCode3",
                            "diseaseName": null,
                            "dosage": "dose",
                            "medicineName": "med3",
                            "patientId": 1,
                            "prescriptionId": 34
                        }
                    ],
                    "tphv": [
                        {
                            "clinicalFinding": "Periodontities",
                            "note": null,
                            "patientId": 1,
                            "prescriptionId": 40,
                            "toothIndex": "35",
                            "tsCreated": 1546330807107,
                            "tsModified": null,
                            "status": "Pending",
                            "tname": "Prosthesis removable",
                            "tid": 8
                        },
                        {
                            "clinicalFinding": "Periodontities",
                            "note": null,
                            "patientId": 1,
                            "prescriptionId": 40,
                            "toothIndex": "34",
                            "tsCreated": 1546330836694,
                            "tsModified": null,
                            "status": "Completed",
                            "tname": "RCT",
                            "tid": 9
                        }
                    ]
                }]
        };
        this.prescriptionPrintView = {
            "status": "SUCCESS",
            "desc": null,
            "resp": {
                "name": "Sourabh Sadhu",
                "sex": "Male",
                "age": "26 Yrs 9 Months 23 Days",
                "phoneNo": "9046787913 / 7980231838",
                "department": "Oral and Maxillofacial Surgery OPD",
                "doctor": "Dr. Aparna Gupta / Dr. Mitrasen Manna",
                "prescriptionId": "41",
                "regDate": "19-08-2018 09:41 PM",
                "visitNo": "1",
                "visitDateTime": "05-01-2019 11:35 AM",
                "nextAppointmentDateTime": "09-01-2019 12:00 AM",
                "printableNotes": "Printed",
                "chiefComplain": "Dental Pain",
                "medicalHistory": "Asthma, Cardiac diseases, Hypertension, Hypotension, Hyperthyroidism, Drug hypersensitivity",
                "clinicalFindings": "RETAINED ROOT IN 23,32,36,37,45 \n CARIOUS 13,14",
                "advice": "Extraction in 23, 36, 37, 45, 13, 14.\n Come within 9:30 AM after having full meal with an adult addendent except SUNDAYs and enlisted holidays.\n EXTRACTION OF 23 HAS BEEN DONE UNDER L.A.\n HEMOSTASIS HAS BEEN ACHIEVED.\n MOIST COTTON PACK GIVEN.\n SOFT AND COLD DIET FOR NEXT 24 HOURS.\n WARM SALINE MOUTH WASH FREQUENTLY AFTER 24 HOURS.\n IN CASE OF ANY EMERGENCY, ADVISED TO GO TO ANY NEARBY GOVT HOSPITAL.",
                "medicine": [
                    "Amoxycilin 500mg + Clavulenic Acid 125mg Tab 3 after meal 5 days",
                    "Metronidazole Tab I.P. 400mg (Flim coated) 3 after meal 5 days",
                    "Paracetamol I.P. 650mg. Tab 3 after meal 5 days",
                    "Rantidine Tab. I.P. 150mg 2 before meal 5 days"
                ]
            }
        };
    }
    return DummyResponse;
}());



/***/ }),

/***/ "./src/app/services/event-service.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/event-service.service.ts ***!
  \***************************************************/
/*! exports provided: EventServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventServiceService", function() { return EventServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventServiceService = /** @class */ (function () {
    function EventServiceService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    EventServiceService.prototype.sendEvent = function (dataLoaded) {
        this.subject.next({ flag: dataLoaded });
    };
    EventServiceService.prototype.clearEvent = function () {
        this.subject.next();
    };
    EventServiceService.prototype.getEvent = function () {
        return this.subject.asObservable();
    };
    EventServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], EventServiceService);
    return EventServiceService;
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
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/models */ "./src/app/models/models.ts");
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
    function HttpcommService(http) {
        this.http = http;
        this.dummy = false;
        this.baseUrl = 'http://localhost:12000/my-portal/';
        this.ageGrpUrl = this.baseUrl + 'age-group/get-age-group?age=';
        this.getPatientUrl = this.baseUrl + 'patient/get-patient';
        this.addPatientUrl = this.baseUrl + 'patient/add-patient';
        this.getAllToothQuadrent = this.baseUrl + 'tooth-qdr/get-all';
        this.getAllTreatmentPlan = this.baseUrl + 'trtmnt/get-plan';
        this.getAllClinicalFindings = this.baseUrl + 'clinical-finding/get-all';
        this.getAllMedicalHistory = this.baseUrl + 'medical-history/get-all';
        this.getAllMedicalHistoryMaster = this.baseUrl + 'medical-history/get-medical-master';
        this.getMedicineUrl = this.baseUrl + 'medicine/get-medicine';
        this.getMedicineUrlPart1 = '?trtmntId=';
        this.getMedicineUrlPart2 = '&age=';
        this.getFeeConfigUrl = this.baseUrl + 'fee/get-config';
        this.getFeeConfigAgeGrpPart1Url = '?age=';
        this.getFeeConfigToothGrpPart2Url = '&tooth_grp_idx=';
        this.getFeeConfigTrtIdPart3Url = '&trtmnt_id=';
        this.getFeeConfigListUrl = this.baseUrl + 'fee/get-config-list';
        this.addDashboardUrl = this.baseUrl + 'dashboard/add-dashboard';
        this.updateDashboardUrl = this.baseUrl + 'dashboard/update-dashboard';
        this.getDashboardUrl = this.baseUrl + 'dashboard/get-dashboard?';
        this.postAddClinicalFindingUrl = this.baseUrl + 'clinical-finding/add-clinical-finding';
        this.getAddTreatmentPlanUrl = this.baseUrl + 'trtmnt/add-treatment-plan';
        this.getPrescriptionPrintViewUrl = this.baseUrl + 'prescription-print/get?';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Accept': 'application/json',
                // 'Content-Type' : 'text/plain',
                'Content-Type': 'application/json',
            })
        };
        this.dummyResp = new _dummyresponse__WEBPACK_IMPORTED_MODULE_4__["DummyResponse"]();
    }
    HttpcommService.prototype.parseData = function (s) {
        return JSON.parse(JSON.stringify(s));
    };
    HttpcommService.prototype.getDashboardView = function (patientId) {
        if (this.dummy) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.parseData(this.dummyResp.getDashboardView));
        }
        else {
            return this.http.get(this.getDashboardUrl + 'patientId=' + patientId, this.httpOptions);
        }
    };
    HttpcommService.prototype.getAgeGroup = function (age) {
        if (this.dummy) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.parseData(this.dummyResp.getAgeGroup));
        }
        else {
            return this.http.get(this.ageGrpUrl + age, this.httpOptions);
        }
    };
    HttpcommService.prototype.getPatient = function (patient) {
        if (this.dummy) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.parseData(this.dummyResp.getPatient));
        }
        else {
            return this.http.post(this.getPatientUrl, patient, this.httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('test', new _models_models__WEBPACK_IMPORTED_MODULE_3__["Response"]())));
        }
    };
    HttpcommService.prototype.addPatient = function (p) {
        if (this.dummy) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.parseData(this.dummyResp.getPatient));
        }
        else {
            return this.http.post(this.addPatientUrl, p, this.httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('post patient', new _models_models__WEBPACK_IMPORTED_MODULE_3__["Response"]())));
        }
    };
    HttpcommService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //console.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    HttpcommService.prototype.getClinicalFindings = function () {
        if (this.dummy) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.parseData(this.dummyResp.clinicalFindingList));
        }
        else {
            return this.http.get(this.getAllClinicalFindings, this.httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('Get Clinicalfindings', new _models_models__WEBPACK_IMPORTED_MODULE_3__["Response"]())));
        }
    };
    ;
    HttpcommService.prototype.getToothQuadrents = function () {
        if (this.dummy) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.parseData(this.dummyResp.toothQuadrentList));
        }
        else {
            return this.http.get(this.getAllToothQuadrent, this.httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('Get ToothQuadrent', new _models_models__WEBPACK_IMPORTED_MODULE_3__["Response"]())));
        }
    };
    ;
    HttpcommService.prototype.getMedicalMaster = function () {
        if (this.dummy) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.parseData(this.dummyResp.medicalMaster));
        }
        else {
            return this.genericGetRequest(this.getAllMedicalHistoryMaster);
        }
    };
    ;
    HttpcommService.prototype.getTreatmentPlan = function () {
        if (this.dummy) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.parseData(this.dummyResp.getTreatmentPlan));
        }
        else {
            return this.genericGetRequest(this.getAllTreatmentPlan);
        }
    };
    ;
    HttpcommService.prototype.getAllMedicine = function () {
        if (this.dummy) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.parseData(this.dummyResp.getMedicine));
        }
        else {
            return this.genericGetRequest(this.baseUrl + 'medicine/');
        }
    };
    HttpcommService.prototype.getMedicineView = function (url) {
        if (this.dummy) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.parseData(this.dummyResp.getMedicine));
        }
        else {
            return this.genericGetRequest(url);
        }
    };
    HttpcommService.prototype.getFeeConfig = function (age, tooth_grp_idx, treatmentId) {
        if (this.dummy) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.parseData(this.dummyResp.getFeeConfig));
        }
        else {
            var url = this.getFeeConfigUrl + this.getFeeConfigAgeGrpPart1Url + age + this.getFeeConfigToothGrpPart2Url + tooth_grp_idx + this.getFeeConfigTrtIdPart3Url + treatmentId;
            return this.genericGetRequest(url);
        }
    };
    HttpcommService.prototype.getFeeConfigList = function (age, feeReqListView) {
        if (this.dummy) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.parseData(this.dummyResp.getFeeConfigList));
        }
        else {
            var url = this.getFeeConfigListUrl + this.getFeeConfigAgeGrpPart1Url + age;
            return this.genericPostRequest(url, feeReqListView);
        }
    };
    HttpcommService.prototype.addDashBoard = function (req) {
        if (!this.dummy) {
            return this.genericPostRequest(this.addDashboardUrl, req, 'Add dashboard');
        }
        else {
            var resp = new _models_models__WEBPACK_IMPORTED_MODULE_3__["Response"]();
            resp.status = 'SUCCESS';
            var response = new _models_models__WEBPACK_IMPORTED_MODULE_3__["DashboardResponse"]();
            response.patientId = req.pHistory.patientId;
            response.prescriptionId = 99;
            response.status = true;
            resp.resp = response;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(resp);
        }
    };
    HttpcommService.prototype.updateDashBoard = function (req) {
        if (!this.dummy) {
            return this.genericPostRequest(this.updateDashboardUrl, req, 'Update dashboard');
        }
        else {
            var resp = new _models_models__WEBPACK_IMPORTED_MODULE_3__["Response"]();
            resp.status = 'SUCCESS';
            var response = new _models_models__WEBPACK_IMPORTED_MODULE_3__["DashboardResponse"]();
            response.patientId = req.pHistory.patientId;
            response.prescriptionId = 99;
            response.status = true;
            resp.resp = response;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(resp);
        }
    };
    HttpcommService.prototype.addClinicalFinding = function (req) {
        if (this.dummy) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.parseData(this.dummyResp.addonClinicalFinding));
        }
        else {
            return this.genericPostRequest(this.postAddClinicalFindingUrl, req, 'Add cf');
        }
    };
    HttpcommService.prototype.genericGetRequest = function (url, notation) {
        if (notation === void 0) { notation = 'http get'; }
        return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(notation, new _models_models__WEBPACK_IMPORTED_MODULE_3__["Response"]())));
    };
    HttpcommService.prototype.genericPostRequest = function (url, reqObject, notation) {
        if (notation === void 0) { notation = 'http post'; }
        console.log('Post', url);
        console.log('Data', reqObject);
        return this.http.post(url, reqObject, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(notation, new _models_models__WEBPACK_IMPORTED_MODULE_3__["Response"]())));
    };
    HttpcommService.prototype.sleep = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    HttpcommService.prototype.getPrescriptionPrintView = function (patientId, prescriptionId) {
        if (this.dummy) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.parseData(this.dummyResp.prescriptionPrintView));
        }
        else {
            return this.genericGetRequest(this.getPrescriptionPrintViewUrl + 'patientId=' + patientId + '&prescriptionId=' + prescriptionId, 'Prescription Print');
        }
        // return this.genericGetRequest('https://demo5063914.mockable.io/prescription-print/get')
    };
    HttpcommService.prototype.getSinglePrescriptionDetail = function (prescriptionId) {
        if (this.dummy) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.dummyResp.getSinglePrescriptionView);
        }
        else {
            return this.genericGetRequest(this.getDashboardUrl + 'prescriptionId=' + prescriptionId, 'Single prescription request');
        }
    };
    HttpcommService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], HttpcommService);
    return HttpcommService;
}());



/***/ }),

/***/ "./src/app/services/treatment-plan.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/treatment-plan.service.ts ***!
  \****************************************************/
/*! exports provided: TreatmentPlanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatmentPlanService", function() { return TreatmentPlanService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/models */ "./src/app/models/models.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreatmentPlanService = /** @class */ (function () {
    function TreatmentPlanService() {
    }
    TreatmentPlanService.prototype.setTreatmentData = function (patientId, prescriptionId, treatmentPlanHistoryViewList) {
        this.patientId = patientId;
        this.prescriptionId = prescriptionId;
        this.treatmentPlanHistoryViewList = treatmentPlanHistoryViewList;
    };
    TreatmentPlanService.prototype.getPatientId = function () {
        return this.patientId;
    };
    TreatmentPlanService.prototype.getPrescriptionId = function () {
        return this.prescriptionId;
    };
    // setPrescriptionDetails(patientId: number, prescriptionId: number) {
    //   this.patientId = patientId
    //   this.prescriptionId = prescriptionId
    // }
    TreatmentPlanService.prototype.getTreatmentPlanSuggestionViewList = function () {
        return (this.treatmentPlanHistoryViewList.length > 0) ? this.treatmentPlanHistoryViewList.filter(function (tph) { return tph.status == _models_models__WEBPACK_IMPORTED_MODULE_1__["TreatmentPlanStatus"].PENDING; }) : [];
    };
    TreatmentPlanService.prototype.getTreatmentDoneHistoryViewList = function () {
        return (this.treatmentPlanHistoryViewList.length > 0) ? this.treatmentPlanHistoryViewList.filter(function (tph) { return tph.status == _models_models__WEBPACK_IMPORTED_MODULE_1__["TreatmentPlanStatus"].COMPLETED; }) : [];
    };
    TreatmentPlanService.prototype.updateTreatmentPlan = function (treatmentPlan) {
        console.log("Before splice " + this.treatmentPlanHistoryViewList);
        var existingTreatmentPlanIndex = this.treatmentPlanHistoryViewList.findIndex(function (tph) { return tph.tid == treatmentPlan.tid; });
        console.log("index = " + existingTreatmentPlanIndex);
        if (existingTreatmentPlanIndex && existingTreatmentPlanIndex >= 0) {
            this.treatmentPlanHistoryViewList.splice(existingTreatmentPlanIndex, 1);
        }
        this.treatmentPlanHistoryViewList.push(treatmentPlan);
        console.log("After update " + this.treatmentPlanHistoryViewList);
    };
    TreatmentPlanService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TreatmentPlanService);
    return TreatmentPlanService;
}());



/***/ }),

/***/ "./src/app/snackhelper/snackbar-model.ts":
/*!***********************************************!*\
  !*** ./src/app/snackhelper/snackbar-model.ts ***!
  \***********************************************/
/*! exports provided: SnackbarModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarModel", function() { return SnackbarModel; });
var SnackbarModel = /** @class */ (function () {
    function SnackbarModel() {
        this.msg = '';
        this.duration = 3000;
        this.isError = false;
        this.action = 'OK';
    }
    return SnackbarModel;
}());



/***/ }),

/***/ "./src/app/snackhelper/snackhelper.component.css":
/*!*******************************************************!*\
  !*** ./src/app/snackhelper/snackhelper.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-snack {\r\n    color: rgb(209, 77, 0);\r\n}\r\n.info-snack {\r\n    color: yellowgreen;\r\n}\r\n.snackbtn {\r\n    float: right;\r\n    padding-right: 5px;\r\n}"

/***/ }),

/***/ "./src/app/snackhelper/snackhelper.component.html":
/*!********************************************************!*\
  !*** ./src/app/snackhelper/snackhelper.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isError\">\n    <span *ngIf=\"msg?.length > 0\" class=\"error-snack\">{{msg}}\n        <button class=\"snackbtn\" mat-raised-button color=\"primary\" (click)=\"actionCallback()\">{{action}}</button>\n    </span>\n    <span *ngIf=\"msg?.length == 0\" class=\"error-snack\">Oops! Something went wrong\n        <button class=\"snackbtn\" mat-raised-button color=\"primary\" (click)=\"actionCallback()\">{{action}}</button>\n    </span>\n</div>\n<span *ngIf=\"!isError\" class=\"info-snack\">{{msg}}\n    <button class=\"snackbtn\" mat-raised-button color=\"primary\" (click)=\"actionCallback()\">{{action}}</button>\n</span>"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _snackbar_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snackbar-model */ "./src/app/snackhelper/snackbar-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var SnackhelperComponent = /** @class */ (function () {
    function SnackhelperComponent(data) {
        this.data = data;
        // snackBarRef: MatSnackBarRef<SimpleSnackBar>
        // snackBarOnDismissal: () => void
        // snackBarOnAction: () => void
        //public snackBar: MatSnackBar,
        this.isError = false;
        this.msg = '';
        this.isError = data.isError;
        this.action = data.action;
        if (data.msg && data.msg.length > 0) {
            this.msg = data.msg;
        }
    }
    SnackhelperComponent.prototype.ngOnInit = function () { };
    SnackhelperComponent.prototype.actionCallback = function () {
        this.data.callback();
    };
    SnackhelperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-snackhelper',
            template: __webpack_require__(/*! ./snackhelper.component.html */ "./src/app/snackhelper/snackhelper.component.html"),
            styles: [__webpack_require__(/*! ./snackhelper.component.css */ "./src/app/snackhelper/snackhelper.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_SNACK_BAR_DATA"])),
        __metadata("design:paramtypes", [_snackbar_model__WEBPACK_IMPORTED_MODULE_2__["SnackbarModel"]])
    ], SnackhelperComponent);
    return SnackhelperComponent;
}());



/***/ }),

/***/ "./src/app/treatment-plan/treatment-plan.component.css":
/*!*************************************************************!*\
  !*** ./src/app/treatment-plan/treatment-plan.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-stretched-tabs {\r\n    max-width: 1000px;\r\n  }\r\n  .example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  .example-container > * {\r\n    width: 100%;\r\n  }\r\n  .example-card-parent {\r\n    /* max-width: 800px; */\r\n    min-width: 50px;\r\n    margin-left: 50px;\r\n    margin-top: 30px;\r\n    width : 100%;\r\n  }\r\n  .example-card {\r\n    /* max-width: 800px; */\r\n    min-width: 50px;\r\n    margin: 30px;\r\n    /* width : 100%; */\r\n  }\r\n  .expansion-margin {\r\n    max-width: 500px;\r\n    margin-left: 150px;\r\n    margin-top: 30px;\r\n  }\r\n  .example-section {\r\n    display: flex;\r\n    align-content: center;\r\n    align-items: center;\r\n    height: 60px;\r\n  }\r\n  .example-margin {\r\n    /* margin: 0 10px; */\r\n    margin-top: 20px;\r\n    margin-left : 10px;\r\n    margin-right: 10px;\r\n    margin-bottom: 10px;\r\n  }\r\n  .example-short-margin {    \r\n    margin-right: 10px;\r\n  }\r\n  .mat-radio-button ~ .mat-radio-button {\r\n    padding: 36px;\r\n  }\r\n  table {\r\n    width: 100%;\r\n  }\r\n  tr.example-detail-row {\r\n    height: 0;\r\n  }\r\n  tr.example-element-row:not(.example-expanded-row):hover {\r\n    background: #f5f5f5;\r\n  }\r\n  tr.example-element-row:not(.example-expanded-row):active {\r\n    background: #efefef;\r\n  }\r\n  .example-element-row td {\r\n    border-bottom-width: 0;\r\n  }\r\n  .example-element-detail {\r\n    overflow: hidden;\r\n    display: flex;\r\n  }\r\n  .example-element-diagram {\r\n    min-width: 80px;\r\n    border: 2px solid black;\r\n    padding: 8px;\r\n    font-weight: lighter;\r\n    margin: 8px 0;\r\n    height: 104px;\r\n  }\r\n  .example-element-symbol {\r\n    font-weight: bold;\r\n    font-size: 40px;\r\n    line-height: normal;\r\n  }\r\n  .example-element-description {\r\n    padding: 16px;\r\n  }\r\n  /* .example-element-description-attribution {\r\n    opacity: 0.5;\r\n  } */\r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n  .example-half-width{\r\n    width : 50%;\r\n  }\r\n  .example-grid-margin{\r\n    margin-top: 20px;\r\n    margin-bottom: 10px;\r\n    margin-right: 50px;\r\n  }\r\n  .rcorners2 {\r\n    border-radius: 25px;\r\n    border: 2px solid #73AD21;\r\n    /* padding-left: 4px;  \r\n    width: 200px;\r\n    height: 150px;     */\r\n    margin-left: 4px;\r\n    margin-right: 4px;\r\n  }\r\n  table {\r\n    width: 100%;\r\n  }\r\n  tr.mat-footer-row {\r\n    font-weight: bold;\r\n  }\r\n  tr{\r\n    text-align:center !important\r\n  }\r\n  th th.mat-header-cell{\r\n    text-align:center !important\r\n  }\r\n  td{\r\n    text-align:center !important\r\n  }\r\n  .mat-table-sticky {\r\n    border-top: 1px solid #e0e0e0;\r\n  }\r\n  .example-section {\r\n    display: flex;\r\n    align-content: center;\r\n    align-items: center;\r\n    height: 60px;\r\n  }"

/***/ }),

/***/ "./src/app/treatment-plan/treatment-plan.component.html":
/*!**************************************************************!*\
  !*** ./src/app/treatment-plan/treatment-plan.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Treatment plan history section -->\n<!-- <div *ngIf=\"treatmentTabPatientId && treatmentTabPrescriptionId && treatmentTabTreatmentPlanHistoryViews && treatmentTabTreatmentPlanHistoryViews.length > 0\"> -->\n  <p>\n    <span class=\"example-margin\">Treatment plan history</span>\n  </p>\n  <button class=\"example-margin rcorners2\" mat-stroked-button color=\"primary\" (click)=\"fetchTphvList()\">Check History\n  </button>\n  <div *ngIf=\"requestLoading\">\n    <section class=\"example-section\">\n      <mat-progress-bar class=\"example-margin\" color=\"primary\" mode=\"indeterminate\">\n      </mat-progress-bar>\n    </section>\n  </div>\n  <div class=\"example-full-width\">\n    <div *ngIf=\"treatmentPlanHistories && treatmentPlanHistories.length > 0\">\n      <table mat-table [dataSource]=\"trtmntPlanHistListDataSource\" class=\"mat-elevation-z8\">\n\n        <ng-container matColumnDef=\"tname\">\n          <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Name </th>\n          <td mat-cell *matCellDef=\"let tphv\"> {{tphv.tname}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"clinicalFinding\">\n          <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> C/F </th>\n          <td mat-cell *matCellDef=\"let tphv\"> {{tphv.clinicalFinding}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"toothIndex\">\n          <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Tooth </th>\n          <td mat-cell *matCellDef=\"let tphv\"> {{tphv.toothIndex}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"note\">\n          <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Note </th>\n          <td mat-cell *matCellDef=\"let tphv\"> {{tphv.note}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"tsCreated\">\n          <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Time </th>\n          <td mat-cell *matCellDef=\"let tphv\"> {{tphv.tsCreated | date:'dd/MM/yy hh:mm a'}} </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"trtmntPlanHistListViewColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: trtmntPlanHistListViewColumns;\"></tr>\n      </table>\n    </div>\n  </div>\n\n  <div>\n    <button class=\"example-margin rcorners2\" mat-stroked-button color=\"primary\" (click)=\"getSuggestionList()\">Select\n      from suggestion\n    </button>\n    OR\n    <button class=\"example-margin rcorners2\" mat-stroked-button color=\"primary\" (click)=\"addTphv()\">Add manually\n    </button>\n  </div>\n\n  <!-- Suggestion to add from Treatment Plan List -->\n  <div class=\"example-full-width\" *ngIf=\"showTrtmentPlanSuggestionList\">\n    <table mat-table [dataSource]=\"trtmntPlanListDataSource\" class=\"mat-elevation-z8\">\n\n      <ng-container matColumnDef=\"tname\">\n        <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Treatment Plan </th>\n        <td mat-cell *matCellDef=\"let tphv\"> {{tphv.tname}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"clinicalFinding\">\n        <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> C/F </th>\n        <td mat-cell *matCellDef=\"let tphv\"> {{tphv.clinicalFinding}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"toothIndex\">\n        <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Tooth </th>\n        <td mat-cell *matCellDef=\"let tphv; let i = index;\">\n          {{tphv.toothIndex}}\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"action\">\n        <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Action </th>\n        <td mat-cell *matCellDef=\"let tphv; let i = index;\">\n          <button class=\"rcorners2\" mat-stroked-button color=\"primary\" (click)=\"addTphv(tphv, i)\">Select</button>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"trtmntPlanListViewColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: trtmntPlanListViewColumns;\"></tr>\n    </table>\n  </div>\n  <!-- selectedTreatmentPlanHistView -->\n  <div *ngIf=\"showTrtmentPlanAdditionSection\">\n    <mat-card class=\"example-card\">\n      <mat-card-header>\n        <mat-card-title>Treatment Plan</mat-card-title>\n        <mat-card-subtitle> {{selectedTreatmentPlanHistView.treatmentPlanViewModel}} </mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <mat-form-field class=\"example-short-margin\" hintLabel=\"Max 30 characters\">\n          <input matInput [maxlength]=\"30\" placeholder=\"Treatment name\" [(ngModel)]=\"selectedTreatmentPlanHistView.tname\"\n            required>\n          <mat-hint align=\"end\">{{selectedTreatmentPlanHistView.tname?.length || 0}}/30</mat-hint>\n        </mat-form-field>\n        <mat-form-field class=\"example-short-margin\" hintLabel=\"Max 30 characters\">\n          <input matInput [maxlength]=\"30\" placeholder=\"C/F\" [(ngModel)]=\"selectedTreatmentPlanHistView.clinicalFinding\"\n            required>\n          <mat-hint align=\"end\">{{selectedTreatmentPlanHistView.clinicalFinding?.length || 0}}/30</mat-hint>\n        </mat-form-field>\n        <mat-form-field class=\"example-short-margin\" hintLabel=\"Max 30 characters\">\n          <input matInput [maxlength]=\"30\" placeholder=\"Tooth\" [(ngModel)]=\"selectedTreatmentPlanHistView.toothIndex\"\n            required>\n          <mat-hint align=\"end\">{{selectedTreatmentPlanHistView.toothIndex?.length || 0}}/30</mat-hint>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-short-margin\">\n          <mat-select placeholder=\"Status\" [formControl]=\"treatmentStatusForm\" [(ngModel)]=\"selectedTreatmentPlanStatus\"\n            required>\n            <mat-option *ngFor=\"let statusList of treatmentStatusList\" [value]=\"statusList\">{{statusList}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field hintLabel=\"Max 30 characters\">\n          <input matInput [maxlength]=\"30\" placeholder=\"Note\" [(ngModel)]=\"selectedTreatmentPlanHistView.note\">\n          <mat-hint align=\"end\">{{selectedTreatmentPlanHistView.note?.length || 0}}/30</mat-hint>\n        </mat-form-field>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-stroked-button class=\"example-margin rcorners2\" color=\"primary\" (click)=\"addTreatmentPlan()\">ADD</button>\n        <button mat-stroked-button class=\"example-margin rcorners2\" color=\"warn\" (click)=\"deleteSelectedTphv()\">DELETE</button>\n      </mat-card-actions>\n    </mat-card>\n\n  </div>\n<!-- </div> -->"

/***/ }),

/***/ "./src/app/treatment-plan/treatment-plan.component.ts":
/*!************************************************************!*\
  !*** ./src/app/treatment-plan/treatment-plan.component.ts ***!
  \************************************************************/
/*! exports provided: TreatmentPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatmentPlanComponent", function() { return TreatmentPlanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/models */ "./src/app/models/models.ts");
/* harmony import */ var _services_treatment_plan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/treatment-plan.service */ "./src/app/services/treatment-plan.service.ts");
/* harmony import */ var _services_event_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/event-service.service */ "./src/app/services/event-service.service.ts");
/* harmony import */ var _services_httpcomm_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/httpcomm.service */ "./src/app/services/httpcomm.service.ts");
/* harmony import */ var _snackhelper_snackbar_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../snackhelper/snackbar-model */ "./src/app/snackhelper/snackbar-model.ts");
/* harmony import */ var _services_commonservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/commonservice.service */ "./src/app/services/commonservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var TreatmentPlanComponent = /** @class */ (function () {
    function TreatmentPlanComponent(treatmentPlanService, eventService, httpComService, snackBar, commonService) {
        var _this = this;
        this.treatmentPlanService = treatmentPlanService;
        this.eventService = eventService;
        this.httpComService = httpComService;
        this.snackBar = snackBar;
        this.commonService = commonService;
        /**
         * As event emitter is working, so need to send reference as we need to operate on data
         * Hence communicating via server
         */
        // @Input() treatmentTabPatientId : number
        // @Input() treatmentTabPrescriptionId : number
        // @Input() treatmentTabTreatmentPlanHistoryViews : TreatmentPlanHistoryView[]
        this.trtmntPlanHistListDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.trtmntPlanHistListViewColumns = ['tname', 'clinicalFinding', 'toothIndex', 'note', 'tsCreated'];
        this.trtmntPlanListDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.trtmntPlanListViewColumns = ['tname', 'clinicalFinding', 'toothIndex', 'action'];
        this.showTrtmentPlanSuggestionList = false;
        this.showTrtmentPlanAdditionSection = false;
        this.selectedTreatmentPlanHistView = new _models_models__WEBPACK_IMPORTED_MODULE_4__["TreatmentPlanHistoryView"]();
        this.requestLoading = false; //Progress bar at the time request loading
        this.treatmentPlanHistories = [];
        this.treatmentStatusForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.treatmentStatusList = [];
        this.subscription = eventService.getEvent().subscribe(function (isDataLoaded) {
            if (isDataLoaded) {
                //Prepare the list
                // this.getSuggestionList()
                _this.fetchTphvList();
            }
        });
    }
    TreatmentPlanComponent.prototype.ngOnInit = function () {
        this.treatmentStatusList.push(_models_models__WEBPACK_IMPORTED_MODULE_4__["TreatmentPlanStatus"].COMPLETED.valueOf());
        this.treatmentStatusList.push(_models_models__WEBPACK_IMPORTED_MODULE_4__["TreatmentPlanStatus"].PENDING.valueOf());
        this.snackBarModel = new _snackhelper_snackbar_model__WEBPACK_IMPORTED_MODULE_8__["SnackbarModel"]();
    };
    TreatmentPlanComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    // Show treatment plan list from prescription history
    TreatmentPlanComponent.prototype.getSuggestionList = function () {
        var suggestions = this.treatmentPlanService.getTreatmentPlanSuggestionViewList();
        // let suggestions = this.treatmentTabTreatmentPlanHistoryViews.filter(tph => tph.status == TreatmentPlanStatus.PENDING)
        if (suggestions && suggestions.length > 0) {
            this.showTrtmentPlanSuggestionList = true;
            this.trtmntPlanListDataSource.data = suggestions;
        }
    };
    //Show custom addition section from suggestion list or for manual addition
    TreatmentPlanComponent.prototype.addTphv = function (tphv, index) {
        if (tphv === void 0) { tphv = null; }
        if (index === void 0) { index = 0; }
        this.showTrtmentPlanSuggestionList = false;
        this.showTrtmentPlanAdditionSection = true;
        if (tphv || tphv != null) {
            this.selectedTreatmentPlanHistView = tphv;
            this.selectedTreatmentPlanStatus = tphv.status;
        }
        else {
            this.selectedTreatmentPlanHistView = new _models_models__WEBPACK_IMPORTED_MODULE_4__["TreatmentPlanHistoryView"]();
            this.selectedTreatmentPlanStatus = '';
        }
    };
    TreatmentPlanComponent.prototype.deleteSelectedTphv = function () {
        this.showTrtmentPlanAdditionSection = false;
        this.selectedTreatmentPlanHistView = new _models_models__WEBPACK_IMPORTED_MODULE_4__["TreatmentPlanHistoryView"]();
    };
    //Fetch previous entries
    TreatmentPlanComponent.prototype.fetchTphvList = function () {
        this.treatmentPlanHistories = this.treatmentPlanService.getTreatmentDoneHistoryViewList();
        // this.treatmentPlanHistories = this.treatmentTabTreatmentPlanHistoryViews
        if (this.treatmentPlanHistories && this.treatmentPlanHistories.length > 0) {
            this.trtmntPlanHistListDataSource.data = this.treatmentPlanHistories;
        }
    };
    TreatmentPlanComponent.prototype.addTreatmentPlan = function () {
        var _this = this;
        if (this.validateData()) {
            this.selectedTreatmentPlanHistView.patientId = this.treatmentPlanService.getPatientId();
            this.selectedTreatmentPlanHistView.prescriptionId = this.treatmentPlanService.getPrescriptionId();
            // this.selectedTreatmentPlanHistView.patientId = this.treatmentTabPatientId
            // this.selectedTreatmentPlanHistView.prescriptionId = this.treatmentTabPrescriptionId
            this.selectedTreatmentPlanHistView.status = this.treatmentStatusForm.value;
            console.log("Add Treatment Plan", JSON.stringify(this.selectedTreatmentPlanHistView));
            var url = this.httpComService.getAddTreatmentPlanUrl + '?patientId=' + this.selectedTreatmentPlanHistView.patientId + '&prescriptionId=' + this.selectedTreatmentPlanHistView.prescriptionId;
            console.log("URL", JSON.stringify(url));
            this.httpComService.genericPostRequest(url, this.selectedTreatmentPlanHistView, "Add Treatment Plan").subscribe(function (resp) {
                if (resp.status == "SUCCESS") {
                    //Update History
                    _this.showTrtmentPlanAdditionSection = false;
                    // this.treatmentPlanService.updateTreatmentPlan(this.selectedTreatmentPlanHistView)
                    _this.commonService.showSuccessSnackBar(_this.snackBar);
                    _this.selectedTreatmentPlanHistView = new _models_models__WEBPACK_IMPORTED_MODULE_4__["TreatmentPlanHistoryView"]();
                }
                else {
                    _this.commonService.showErrorSnackBar(_this.snackBar);
                }
            });
        }
    };
    TreatmentPlanComponent.prototype.validateData = function () {
        if (!this.selectedTreatmentPlanHistView)
            return false;
        if (!this.selectedTreatmentPlanHistView.clinicalFinding || this.selectedTreatmentPlanHistView.clinicalFinding.length <= 0)
            return false;
        if (!this.selectedTreatmentPlanHistView.tname || this.selectedTreatmentPlanHistView.tname.length <= 0)
            return false;
        if (!this.selectedTreatmentPlanHistView.toothIndex)
            return false;
        if (!this.treatmentStatusForm.value || this.treatmentStatusForm.value.length <= 0)
            return false;
        if (!this.treatmentPlanService.getPatientId())
            return false;
        if (!this.treatmentPlanService.getPrescriptionId())
            return false;
        return true;
    };
    TreatmentPlanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-treatment-plan',
            template: __webpack_require__(/*! ./treatment-plan.component.html */ "./src/app/treatment-plan/treatment-plan.component.html"),
            styles: [__webpack_require__(/*! ./treatment-plan.component.css */ "./src/app/treatment-plan/treatment-plan.component.css")]
        }),
        __metadata("design:paramtypes", [_services_treatment_plan_service__WEBPACK_IMPORTED_MODULE_5__["TreatmentPlanService"],
            _services_event_service_service__WEBPACK_IMPORTED_MODULE_6__["EventServiceService"],
            _services_httpcomm_service__WEBPACK_IMPORTED_MODULE_7__["HttpcommService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _services_commonservice_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"]])
    ], TreatmentPlanComponent);
    return TreatmentPlanComponent;
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