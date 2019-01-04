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
            { "name": "Admin", "path": "admin" },
            { "name": "Test", "path": "test" }
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
                _treatment_plan_treatment_plan_component__WEBPACK_IMPORTED_MODULE_16__["TreatmentPlanComponent"]
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

module.exports = ".example-stretched-tabs {\r\n  max-width: 1000px;\r\n}\r\n.example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n.example-card-parent {\r\n  /* max-width: 800px; */\r\n  min-width: 50px;\r\n  margin-left: 50px;\r\n  margin-top: 30px;\r\n  width : 100%;\r\n}\r\n.example-card {\r\n  /* max-width: 800px; */\r\n  min-width: 50px;\r\n  margin: 30px;\r\n  /* width : 100%; */\r\n}\r\n.expansion-margin {\r\n  max-width: 500px;\r\n  margin-left: 150px;\r\n  margin-top: 30px;\r\n}\r\n.example-section {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n  height: 60px;\r\n}\r\n.example-margin {\r\n  /* margin: 0 10px; */\r\n  margin-top: 20px;\r\n  margin-left : 10px;\r\n  margin-right: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n.mat-radio-button ~ .mat-radio-button {\r\n  padding: 36px;\r\n}\r\ntable {\r\n  width: 100%;\r\n}\r\ntr.example-detail-row {\r\n  height: 0;\r\n}\r\ntr.example-element-row:not(.example-expanded-row):hover {\r\n  background: #f5f5f5;\r\n}\r\ntr.example-element-row:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n.example-element-row td {\r\n  border-bottom-width: 0;\r\n}\r\n.example-element-detail {\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n.example-element-diagram {\r\n  min-width: 80px;\r\n  border: 2px solid black;\r\n  padding: 8px;\r\n  font-weight: lighter;\r\n  margin: 8px 0;\r\n  height: 104px;\r\n}\r\n.example-element-symbol {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  line-height: normal;\r\n}\r\n.example-element-description {\r\n  padding: 16px;\r\n}\r\n/* .example-element-description-attribution {\r\n  opacity: 0.5;\r\n} */\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n.example-half-width{\r\n  width : 50%;\r\n}\r\n.example-grid-margin{\r\n  margin-top: 20px;\r\n  margin-bottom: 10px;\r\n  margin-right: 50px;\r\n}\r\n.rcorners2 {\r\n  border-radius: 25px;\r\n  border: 2px solid #73AD21;\r\n  padding-left: 4px; \r\n  /* width: 200px;\r\n  height: 150px;     */\r\n  margin-left: 4px;\r\n  margin-right: 4px;\r\n}\r\n/* label > input{ HIDE RADIO \r\n  visibility: hidden; Makes input not-clickable\r\n  position: absolute; Remove input from document flow\r\n}\r\nlabel > input { IMAGE STYLES\r\n  cursor:pointer;\r\n  border:2px solid transparent;\r\n}\r\nlabel > input:checked { (RADIO CHECKED) IMAGE STYLES\r\n  border:20px solid #f00;\r\n} */\r\n/* Fees table properties */\r\ntable {\r\n  width: 100%;\r\n}\r\ntr.mat-footer-row {\r\n  font-weight: bold;\r\n}\r\n.mat-table-sticky {\r\n  border-top: 1px solid #e0e0e0;\r\n}\r\n.icon-search {\r\n  background: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z%22%2F%3E%3Cpath d%3D%22M0 0h24v24H0z%22 fill%3D%22none%22%2F%3E%3C%2Fsvg%3E\");\r\n  height: 27px;\r\n  width: 22px;\r\n  display: block;\r\n  /* Other styles here */\r\n}\r\n.icon-refresh {\r\n  background: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z%22%2F%3E%3Cpath d%3D%22M0 0h24v24H0z%22 fill%3D%22none%22%2F%3E%3C%2Fsvg%3E\");\r\n  height: 27px;\r\n  width: 22px;\r\n  display: block;\r\n  /* Other styles here */\r\n}\r\n.icon-print {\r\n  background: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z%22%2F%3E%3Cpath d%3D%22M0 0h24v24H0z%22 fill%3D%22none%22%2F%3E%3C%2Fsvg%3E\");\r\n  height: 27px;\r\n  width: 22px;\r\n  display: block;\r\n  /* Other styles here */\r\n}\r\n.icon-add-fee {\r\n  background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 16.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 version%3D%221.1%22 id%3D%22Layer_1%22 x%3D%220px%22 y%3D%220px%22 width%3D%22480px%22 height%3D%22480px%22 viewBox%3D%220 0 512 512%22 enable-background%3D%22new 0 0 512 512%22 xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%09%3Cg%3E%09%09%3Cg%3E%09%09%09%3Cpath fill%3D%22%23D6E5E5%22 d%3D%22M389.2%2C204.5l-0.1-7.2c-29-0.9-57.8%2C0.8-86.7%2C2.5c-0.1-0.8-0.2-1.5-0.4-2.3h-0.4c0-0.9%2C0-1.7%2C0-2.6     c-0.1-0.4-0.1-0.8-0.2-1.2c0-1.3-0.1-2.6-0.2-3.9c0.1%2C0%2C0.3%2C0%2C0.4%2C0c0-23.1%2C0.2-46.2%2C0.2-69.3c-20.9-0.1-41.8-1-62.8-1h-39.6     c-0.1%2C0.7-0.2%2C1.5-0.2%2C2.2c-0.2%2C3.7-0.2%2C7.3-0.1%2C11c0.1%2C7%2C0.4%2C14%2C0.6%2C21c0.4%2C13.2%2C0.9%2C26.4%2C1.4%2C39.6h0l0%2C0c0%2C1.4%2C0.1%2C2.8%2C0.1%2C4.1     h-0.7l-0.8%2C5.8c-27.6%2C0.3-55.2%2C0.2-82.8%2C0.4c0%2C20.9-0.6%2C41.8-0.5%2C62.8L117%2C306c0.7%2C0.1%2C1.5%2C0.1%2C2.2%2C0.2c3.7%2C0.1%2C7.3%2C0.1%2C11%2C0     c7-0.1%2C14-0.5%2C21-0.7c16.3-0.6%2C33.8-1.4%2C50.1-2l-0.3%2C2h0.1c0%2C2.1%2C0%2C4.3-0.1%2C6.4c-0.2%2C26-0.7%2C52.1%2C1.5%2C78     c17.6%2C1.7%2C35.9%2C1.4%2C53.4%2C0.4c13.9-0.8%2C29.7-3.4%2C43%2C2.2h7.2c1.1-29.1-0.4-58-1.8-87h0.6v-2.4c1.5%2C0%2C2.9%2C0%2C4.4%2C0     c26%2C0%2C52.1%2C0.3%2C78-2.1c1.5-17.6%2C1.1-35.9%2C0-53.4C386.5%2C233.6%2C383.7%2C217.8%2C389.2%2C204.5z%22%2F%3E%09%09%3C%2Fg%3E%09%3C%2Fg%3E%09%3Cg%3E%09%09%3Cg%3E%09%09%09%3Cpath fill%3D%22%2371C598%22 d%3D%22M474.2%2C161.7c-16.1-46.6-46.7-87.1-91.3-109.6C332%2C26.5%2C272%2C24.1%2C216.5%2C32.9C166.8%2C40.8%2C114.3%2C58.8%2C77%2C94     c-19.6%2C18.5-34.7%2C40.9-42.7%2C66.8c-8%2C26-10.4%2C53.1-12.1%2C80.1c-0.1%2C1.1-0.4%2C2-1%2C2.7c0%2C0.2%2C0.1%2C0.5%2C0.1%2C0.8     c0%2C52.9-1.1%2C108.3%2C30.1%2C153.9c25.3%2C37.1%2C64.5%2C61.5%2C107.2%2C73.7c88%2C25.2%2C194.2%2C9.6%2C264.9-50.8C497.6%2C357.9%2C504.4%2C248.9%2C474.2%2C161.7     z M397.6%2C251.9c0.3%2C18.2%2C1.2%2C36.4-0.6%2C54.6c-0.2%2C2.2-2.4%2C3.8-4.5%2C4.1c-25.7%2C2.7-51.7%2C2.6-77.6%2C2.6c1.4%2C28%2C2.5%2C56%2C1.2%2C84     c-0.1%2C2.5-1.6%2C5.4-4.6%2C5.4h-15c-1.7%2C0-3.1-0.7-4-1.8c-12.7-4.1-28-0.3-40.8-0.2c-18.2%2C0.1-36.4%2C0.9-54.6-1.1     c-2.2-0.2-3.8-2.4-4-4.5c-2.6-27-2.2-54.2-1.9-81.3c-14.8%2C0.6-29.6%2C1.5-44.4%2C2.1c-7.9%2C0.3-15.9%2C0.7-23.9%2C0.6     c-4.1-0.1-12.4%2C0.7-14.9-3.7c-0.2-0.4-0.4-0.7-0.5-1.1c-0.2-0.6-0.4-1.2-0.4-1.9l-0.3-42.2c-0.2-22.4%2C0.6-44.8%2C0.5-67.2     c0-0.5%2C0.1-0.9%2C0.2-1.3c-0.2-2.5%2C1.2-5%2C4.4-5.1c26.1-0.2%2C53.4-0.1%2C79.8-0.3c-0.5-14.8-1.2-29.6-1.7-44.3     c-0.3-7.9-0.6-15.9-0.4-23.9c0.1-4.1-0.6-12.4%2C3.8-14.8c0.4-0.2%2C0.7-0.4%2C1.1-0.5c0.6-0.2%2C1.2-0.4%2C1.9-0.4h42.2     c22.4%2C0%2C44.8%2C1%2C67.2%2C1c0.5%2C0%2C0.9%2C0.1%2C1.3%2C0.2c2.5-0.2%2C5%2C1.2%2C5%2C4.4c0%2C24.7-0.2%2C49.4-0.3%2C74.1c27.3-1.5%2C54.6-2.8%2C82-1.7     c2.5%2C0.1%2C5.4%2C1.6%2C5.4%2C4.6l0.1%2C13.5c0%2C0%2C0%2C0%2C0%2C0.1l0%2C1.5c0%2C1.7-0.7%2C3.1-1.8%2C4C393.4%2C223.8%2C397.4%2C239%2C397.6%2C251.9z%22%2F%3E%09%09%3C%2Fg%3E%09%3C%2Fg%3E%09%3Cg%3E%09%09%3Cg%3E%09%09%09%3Cpath d%3D%22M487.9%2C168.7c-14.2-46.9-40.9-88.3-82-115.7c-46.4-31-105.3-38.4-159.8-34.4c-51.7%2C3.8-104.6%2C17.9-148.6%2C46     c-21.6%2C13.8-40.9%2C31.9-55%2C53.4C27.7%2C140.5%2C20%2C166.6%2C16%2C193.2c-2.3%2C15.1-3.4%2C30.3-4.4%2C45.6c-0.1%2C0.9%2C0.1%2C1.8%2C0.4%2C2.6     c-0.9%2C0.9-1.5%2C2.2-1.5%2C3.8c0%2C30.1-0.6%2C60.4%2C4.6%2C90.2c4.8%2C27.1%2C15.2%2C52.9%2C31.6%2C75.1c29.2%2C39.5%2C73.5%2C63.3%2C120.4%2C75     c88.9%2C22.2%2C194.2%2C3.7%2C264.5-57.1C505.6%2C364.4%2C514.8%2C257.6%2C487.9%2C168.7z M423.5%2C421.2c-70.8%2C60.4-176.9%2C76-264.9%2C50.8     c-42.7-12.2-81.9-36.6-107.2-73.7c-31.1-45.6-30.1-101-30.1-153.9c0-0.3%2C0-0.5-0.1-0.8c0.5-0.7%2C0.9-1.6%2C1-2.7     c1.7-27%2C4.1-54.1%2C12.1-80.1C42.2%2C134.9%2C57.4%2C112.4%2C77%2C94c37.3-35.2%2C89.8-53.2%2C139.6-61.1C272%2C24.1%2C332%2C26.5%2C383%2C52.1     c44.6%2C22.5%2C75.1%2C63.1%2C91.3%2C109.6C504.4%2C248.9%2C497.6%2C357.9%2C423.5%2C421.2z%22%2F%3E%09%09%3C%2Fg%3E%09%3C%2Fg%3E%09%3Cg%3E%09%09%3Cg%3E%09%09%09%3Cpath d%3D%22M397.4%2C211.1c1.1-0.9%2C1.8-2.2%2C1.8-4l0-1.5c0%2C0%2C0%2C0%2C0-0.1l-0.1-13.5c0-3-2.9-4.5-5.4-4.6c-27.4-1.1-54.7%2C0.1-82%2C1.7     c0-24.7%2C0.3-49.4%2C0.3-74.1c0-3.2-2.5-4.6-5-4.4c-0.4-0.1-0.9-0.2-1.3-0.2c-22.4%2C0-44.8-1-67.2-1h-42.2c-0.7%2C0-1.4%2C0.1-1.9%2C0.4     c-0.4%2C0.1-0.7%2C0.3-1.1%2C0.5c-4.4%2C2.5-3.7%2C10.7-3.8%2C14.8c-0.2%2C8%2C0.1%2C15.9%2C0.4%2C23.9c0.5%2C14.8%2C1.3%2C29.5%2C1.7%2C44.3     c-26.4%2C0.2-53.6%2C0.1-79.8%2C0.3c-3.2%2C0-4.6%2C2.6-4.4%2C5.1c-0.1%2C0.4-0.2%2C0.9-0.2%2C1.3c0.1%2C22.4-0.7%2C44.8-0.5%2C67.2l0.3%2C42.2     c0%2C0.7%2C0.1%2C1.4%2C0.4%2C1.9c0.1%2C0.4%2C0.3%2C0.7%2C0.5%2C1.1c2.5%2C4.4%2C10.8%2C3.6%2C14.9%2C3.7c8%2C0.2%2C15.9-0.2%2C23.9-0.6c14.8-0.6%2C29.6-1.5%2C44.4-2.1     c-0.3%2C27.1-0.7%2C54.4%2C1.9%2C81.3c0.2%2C2.1%2C1.8%2C4.3%2C4%2C4.5c18.1%2C2%2C36.4%2C1.2%2C54.6%2C1.1c12.9-0.1%2C28.2-3.9%2C40.8%2C0.2c0.9%2C1.1%2C2.2%2C1.8%2C4%2C1.8     h15c3%2C0%2C4.5-2.8%2C4.6-5.4c1.4-28.1%2C0.2-56-1.2-84c25.9%2C0.1%2C51.9%2C0.1%2C77.6-2.6c2.1-0.2%2C4.3-1.8%2C4.5-4.1c1.9-18.1%2C0.9-36.4%2C0.6-54.6     C397.4%2C239%2C393.4%2C223.8%2C397.4%2C211.1z M387.4%2C247.5c1.1%2C17.6%2C1.6%2C35.8%2C0%2C53.4c-25.9%2C2.4-52%2C2.1-78%2C2.1c-1.5%2C0-2.9%2C0-4.4%2C0v2.4     h-0.6c1.5%2C29%2C2.9%2C58%2C1.8%2C87H299c-13.3-5.6-29.1-3-43-2.2c-17.6%2C1-35.8%2C1.3-53.4-0.4c-2.2-25.9-1.7-52-1.5-78c0-2.1%2C0-4.3%2C0.1-6.4     H201l0.3-2c-16.3%2C0.6-33.8%2C1.4-50.1%2C2c-7%2C0.2-14%2C0.6-21%2C0.7c-3.7%2C0.1-7.3%2C0.1-11%2C0c-0.7%2C0-1.5-0.1-2.2-0.2l-0.3-39.6     c-0.2-20.9%2C0.5-41.9%2C0.5-62.8c27.6-0.2%2C55.2-0.1%2C82.8-0.4l0.8-5.8h0.7c0-1.4-0.1-2.8-0.1-4.1l0%2C0h0c-0.4-13.2-1-26.4-1.4-39.6     c-0.2-7-0.5-14-0.6-21c0-3.7%2C0-7.3%2C0.1-11c0-0.7%2C0.1-1.5%2C0.2-2.2h39.6c20.9%2C0%2C41.8%2C0.8%2C62.8%2C1c0%2C23.1-0.2%2C46.2-0.2%2C69.3     c-0.1%2C0-0.3%2C0-0.4%2C0c0.1%2C1.3%2C0.2%2C2.6%2C0.2%2C3.9c0%2C0.4%2C0.1%2C0.8%2C0.2%2C1.2c0%2C0.9%2C0%2C1.7%2C0%2C2.6h0.4c0.1%2C0.8%2C0.2%2C1.5%2C0.4%2C2.3     c28.9-1.7%2C57.7-3.3%2C86.7-2.5l0.1%2C7.2C383.7%2C217.8%2C386.5%2C233.6%2C387.4%2C247.5z%22%2F%3E%09%09%3C%2Fg%3E%09%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\r\n  height: 27px;\r\n  width: 27px;\r\n  display: block;\r\n}\r\n.svg-icon{\r\n  margin: 5px auto auto;\r\n  padding: 0;\r\n  display: inline-block;\r\n  background-repeat: no-repeat no-repeat;\r\n  pointer-events: none;\r\n}\r\n.md-button.logo {\r\n  height: 7rem;\r\n  width: 7rem;\r\n}\r\n.logo-image {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n/* Putting table headers in center */\r\n/* mat-cell{\r\n  display:flex !important;\r\n  justify-content:center!important;\r\n  \r\n}\r\n\r\nmat-header-cell {\r\n  display:flex;\r\n  justify-content:center;\r\n  text-align: center;\r\n} */"

/***/ }),

/***/ "./src/app/create-prescription/create-prescription.component.html":
/*!************************************************************************!*\
  !*** ./src/app/create-prescription/create-prescription.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Section to create presciption -->\n<mat-card class=\"example-card-parent\">\n\n  <mat-tab-group [selectedIndex]=\"prescriptionFromControl.value\" (selectedIndexChange)=\"prescriptionFromControl.setValue($event)\"\n    mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4\">\n    <mat-tab label=\"Basic Info\">\n      <mat-card class=\"example-card\">\n        <mat-card-content>\n          <table>\n            <tr>\n              <td>\n                <!-- First Name -->\n                <div class=\"example-container example-margin\">\n                  <mat-form-field hintLabel=\"Min {{minCharToSearch}} char to search\">\n                    <input matInput cdkFocusInitial maxlength=20 placeholder=\"First name\" [(ngModel)]=\"selectedPatient.firstName\"\n                      (keyup)='fetchPatient($event)'>\n                    <mat-hint align=\"end\">{{selectedPatient.firstName?.length || 0}}/20</mat-hint>\n                  </mat-form-field>\n                </div>\n              </td>\n              <td>\n                <!-- Last Name -->\n                <div class=\"example-container example-margin\">\n                  <mat-form-field hintLabel=\"Min {{minCharToSearch}} char to search\">\n                    <input matInput maxlength=20 placeholder=\"Last name\" [(ngModel)]=\"selectedPatient.lastName\" (keyup)='fetchPatient($event)'>\n                    <mat-hint align=\"end\">{{selectedPatient.lastName?.length || 0}}/20</mat-hint>\n                  </mat-form-field>\n                </div>\n              </td>\n              <td>\n                <div class=\"example-container example-margin\">\n                  <mat-form-field>\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Select from calender\" (dateChange)=\"dateValidate($event)\"\n                      disabled>\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n                  </mat-form-field>\n                </div>\n              </td>\n              <td>\n                <div class=\"example-margin\">\n                  <button mat-mini-fab color=\"primary\" (click)=\"fetchPatient($event)\" matTooltip=\"Search\">\n                    <mat-icon aria-label=\"Search\">search</mat-icon>\n                  </button>\n                </div>\n              </td>\n              <td>\n                <div class=\"example-margin\">\n                  <button mat-mini-fab color=\"primary\" (click)=\"refreshSearch()\" matTooltip=\"Refresh\">\n                    <mat-icon aria-label=\"Refresh\">refresh</mat-icon>\n                  </button>\n                </div>\n              </td>\n            </tr>\n          </table>\n          <!-- Loading progressbar -->\n          <mat-progress-bar *ngIf=\"isPatientLoading\" color=\"color\" mode=\"indeterminate\"></mat-progress-bar>\n          <!-- Patient list -->\n          <div *ngIf=\"isPatientLoaded\">\n            <table mat-table [dataSource]=\"patientDataSource\" multiTemplateDataRows class=\"mat-elevation-z8\">\n              <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of columnsToDisplay\">\n                <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\n              </ng-container>\n\n              <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n              <ng-container matColumnDef=\"expandedDetail\">\n                <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\n                  <div class=\"example-element-detail\" [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n                    <div class=\"example-element-diagram\">\n                      <div class=\"example-element-position\"> {{element.firstName}} </div>\n                      <div class=\"example-element-symbol\"> {{element.lastName}} </div>\n                      <div class=\"example-element-name\"> {{element.age}} </div>\n                      <div class=\"example-element-weight\"> {{element.contactNo1}} </div>\n                      <!-- <span>Image placeholder</span> -->\n                    </div>\n                    <div class=\"example-element-description\">\n                      <p>\n                        {{element.address1}}\n                      </p>\n                      <p>\n                        {{element.address2}}\n                      </p>\n                      <p>\n                        <!-- <span class=\"example-element-description-attribution\"> -- Wikipedia </span> -->\n                        <button mat-raised-button color=\"primary\" (click)=\"selectedElement(expandedElement)\">\n                          Select <mat-icon aria-label=\"Select\">check_circle_outline</mat-icon>\n                        </button>\n                      </p>\n                    </div>\n                  </div>\n                </td>\n              </ng-container>\n\n              <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n              <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\" class=\"example-element-row\"\n                [class.example-expanded-row]=\"expandedElement === element\" (mouseenter)=\"mouseOverFn(element)\">\n                <!-- (mouseout)=\"mouseOutFn(expandedElement)\" -->\n              </tr>\n              <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n            </table>\n          </div>\n        </mat-card-content>\n        <!-- <mat-card-actions>\n          <button mat-button>LIKE</button>\n          <button mat-button>SHARE</button>\n        </mat-card-actions> -->\n      </mat-card>\n\n    </mat-tab>\n\n    <!-- \n      *******************************************************************************************\n      *******************************************************************************************\n      ********************************* History Section *****************************************\n      *******************************************************************************************\n      *******************************************************************************************\n     -->\n\n    <mat-tab label=\"History\" [disabled]=\"disableTabs\">\n\n      <!-- Dashboard view -->\n      <div *ngIf=\"dashboardDataSource.data && dashboardDataSource.data.length > 0\">\n        <table mat-table [dataSource]=\"dashboardDataSource\" class=\"mat-elevation-z8\">\n\n          <!-- ['Date','C/F', 'Treatment Plan', 'Treatment Done', 'Due', 'Next Appo'] -->\n          <ng-container matColumnDef=\"Date\">\n            <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Date </th>\n            <td mat-cell *matCellDef=\"let dv\"> {{ dv.pHistory.tsCreated | date:'dd/MM/yy hh:mm a' }}</td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"C/F\">\n            <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> C/F </th>\n            <td mat-cell *matCellDef=\"let dv\">\n              <!--  {{ dv.pHistory.clinicalFindings }} getOrderedClinicalFindings -->\n              <ul>\n                <li style=\"list-style: none;\" *ngFor=\"let cf of getOrderedClinicalFindings(dv.pHistory.clinicalFindings)\">{{\n                  cf }}</li>\n              </ul>\n            </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"Treatment Plan\">\n            <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Treatment Plan </th>\n            <td mat-cell *matCellDef=\"let dv; let i = index;\">\n              <ul>\n                <li style=\"list-style: none;\" *ngFor=\"let tpv of dv.tphv\">{{ tpv.tname }} - {{ tpv.toothIndex }}</li>\n              </ul>\n            </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"Treatment Done\">\n            <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Treatment Done </th>\n            <td mat-cell *matCellDef=\"let dv; let i = index;\">\n              <ul>\n                <li style=\"list-style: none;\" *ngFor=\"let tph of dv.tphv\">{{ tph.tName }}</li>\n              </ul>\n            </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"Due\">\n            <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Due </th>\n            <td mat-cell *matCellDef=\"let dv; let i = index;\">\n              {{ getDueFee(dv.fbl) }}\n              <!-- <ul >\n                <li style=\"list-style: none;\" *ngFor=\"let fb of dv.fbl\">{{ fb.amount }}</li>\n              </ul>    -->\n            </td>\n          </ng-container>\n\n          <!-- Next Appo -->\n          <ng-container matColumnDef=\"Next Appo\">\n            <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Next Appo </th>\n            <td mat-cell *matCellDef=\"let dv; let i = index;\">\n              {{ dv.pHistory.nextAppointment | date:'dd/MM/yy hh:mm a' }}\n            </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"dashboardHistoryListColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: dashboardHistoryListColumns;\" (click)=\"selectPrescription(row)\"></tr>\n        </table>\n      </div>\n    </mat-tab>\n\n    <!-- \n      *******************************************************************************************\n      *******************************************************************************************\n      ********************************* Prescription Section ************************************\n      *******************************************************************************************\n      *******************************************************************************************\n     -->\n    <mat-tab label=\"Prescription\" [disabled]=\"disableTabs\">\n      <mat-card id=\"printableContent1\" class=\"example-card\">\n        <mat-card-content>\n          <mat-form-field class=\"example-full-width\">\n            <textarea matInput [disabled]=\"checkIfDisabledToModify()\" placeholder=\"Chief complaint\" [(ngModel)]=\"prescriptionHistoryView.chiefComplaint\"\n              cdkTextareaAutosize cdkAutosizeMinRows=\"1\" cdkAutosizeMaxRows=\"5\"></textarea>\n            <button mat-button *ngIf=\"prescriptionHistoryView.chiefComplaint\" matSuffix mat-icon-button aria-label=\"Clear\"\n              (click)=\"prescriptionHistoryView.chiefComplaint=''\" matToolTip=\"Clear\" [disabled]=\"checkIfDisabledToModify()\">\n              <mat-icon>close</mat-icon>\n            </button>\n          </mat-form-field>\n\n          <mat-form-field class=\"example-full-width\">\n            <!-- <button mat-button matPrefix mat-icon-button aria-label=\"Add\" (click)=\"openDialog()\" matToolTip=\"Add\" \n              [disabled]=\"checkIfDisabledToModify()\">\n              <mat-icon>add_circle_outline</mat-icon>\n            </button> -->\n            <!-- <textarea matInput placeholder=\"Chief findings\" disabled [(ngModel)]=\"clinicalFindingsView\" cdkTextareaAutosize\n              cdkAutosizeMinRows=\"1\" cdkAutosizeMaxRows=\"5\"></textarea> -->\n            <mat-chip-list #chipList1>\n              <mat-chip *ngFor=\"let s of clinicalFindingsViewForUi\" selectable=\"false\" removable=\"false\">\n                {{s}}\n              </mat-chip>\n              <input (click)=\"openDialog()\" (keydown)=\"openDialog()\" placeholder=\"Add C/F\" [matChipInputFor]=\"chipList1\"\n                matChipInputAddOnBlur=\"true\" [disabled]=\"checkIfDisabledToModify()\">\n            </mat-chip-list>\n          </mat-form-field>\n\n          <table>\n            <tr>\n              <td>\n                <!-- Medical History -->\n                <mat-form-field class=\"example-full-width\">\n                  <mat-select placeholder=\"Medical History\" [formControl]=\"medicalHistoryForm\" [(ngModel)]=\"medicalHistoryViewModel\"\n                    multiple class=\"example-full-width\" [disabled]=\"checkIfDisabledToModify()\">\n                    <mat-option *ngFor=\"let mh of mhList\" [value]=\"mh\">{{mh}}</mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <!-- Loading progressbar -->\n                <mat-progress-bar *ngIf=\"mhList == null || mhList?.length <= 0\" color=\"color\" mode=\"indeterminate\"></mat-progress-bar>\n              </td>\n              <td>\n                <!-- Investigation -->\n                <mat-form-field hintLabel=\"Max 30 characters\" class=\"example-full-width\">\n                  <input matInput [maxlength]=\"30\" placeholder=\"Investigation\" [(ngModel)]=\"prescriptionHistoryView.investigation\"\n                    [disabled]=\"checkIfDisabledToModify()\">\n                  <mat-hint align=\"end\">{{prescriptionHistoryView.investigation?.length || 0}}/30</mat-hint>\n                </mat-form-field>\n              </td>\n            </tr>\n          </table>\n\n          <!-- provisionalDiagnosis -->\n          <mat-form-field class=\"example-full-width\">\n            <textarea matInput placeholder=\"Provisional diagnosis\" [(ngModel)]=\"prescriptionHistoryView.provisionalDiagnosis\"\n              cdkTextareaAutosize cdkAutosizeMinRows=\"1\" cdkAutosizeMaxRows=\"5\" [disabled]=\"checkIfDisabledToModify()\"></textarea>\n            <button mat-button *ngIf=\"prescriptionHistoryView.provisionalDiagnosis\" matSuffix mat-icon-button\n              aria-label=\"Clear\" (click)=\"prescriptionHistoryView.provisionalDiagnosis=''\" matToolTip=\"Clear\"\n              [disabled]=\"checkIfDisabledToModify()\">\n              <mat-icon>close</mat-icon>\n            </button>\n          </mat-form-field>\n\n          <!-- Treatment Plan -->\n          <!-- <mat-form-field class=\"example-full-width\">\n            <mat-chip-list #chipListtrtmnt>\n              <mat-chip *ngFor=\"let s of treatmentPlanListView\" selectable=\"true\" removable=\"true\" (removed)=\"removeChip(s,1)\">\n                {{s}}\n                <mat-icon matChipRemove>cancel</mat-icon>\n              </mat-chip>\n              <input placeholder=\"Treatment Plan\" [matChipInputFor]=\"chipListtrtmnt\" matChipInputAddOnBlur=\"true\"\n                (matChipInputTokenEnd)=\"addTreatmentPlan($event)\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\">\n            </mat-chip-list>\n          </mat-form-field> -->\n\n          <!-- Treatment plan -->\n          <span class=\"example-margin\">Advised Treatment plan</span>\n          <div *ngIf=\"cftMapArray && cftMapArray.length > 0\">\n            <table mat-table [dataSource]=\"trtmntPlanListDataSource\" class=\"mat-elevation-z8\">\n\n              <ng-container matColumnDef=\"cf\">\n                <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> C/F </th>\n                <td mat-cell *matCellDef=\"let cftMap\"> {{cftMap.clinicalFinding.fname}} </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"teeth\">\n                <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Tooth </th>\n                <td mat-cell *matCellDef=\"let cftMap\"> {{cftMap.teeth.toothIndex}}\n                </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"plan\">\n                <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Plan </th>\n                <td mat-cell *matCellDef=\"let cftMap; let i = index;\">\n                  <mat-form-field class=\"example-full-width\">\n                    <div *ngIf=\"!checkIfDisabledToModify()\">\n                      <mat-select placeholder=\"Select Treatment Plan\" [formControl]=\"treatmentPlanFormControl\" class=\"example-full-width\"\n                        (selectionChange)=\"updateTrtmntPlanSelect($event.value, i)\" [disabled]=\"checkIfDisabledToModify()\">\n                        <!-- [(value)] = cftMap.treatmentPlanName -->\n                        <mat-option *ngFor=\"let tpl of treatmentPlanList\" [value]=\"tpl.trtName\">{{tpl.trtName}}</mat-option>\n                      </mat-select>\n                    </div>\n                    <div *ngIf=\"checkIfDisabledToModify()\">\n                      <textarea matInput placeholder=\"Treatment Plans\" cdkTextareaAutosize cdkAutosizeMinRows=\"1\"\n                        cdkAutosizeMaxRows=\"5\" disabled>{{cftMap.treatmentPlanViewModel}}</textarea>\n                    </div>\n                  </mat-form-field>\n                </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"newPlan\">\n                <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> New Plan </th>\n                <td mat-cell *matCellDef=\"let cftMap; let i = index;\">\n                  <input class=\"example-full-width\"  style=\"text-align:center\" *ngIf=\"cftMap.customTrtmntPlan\" matInput placeholder=\"Custom plan\"\n                    (input)=\"updateTrtmntPlanI($event.target.value, i)\" required [disabled]=\"checkIfDisabledToModify()\">\n                </td>\n              </ng-container>\n\n              <tr mat-header-row *matHeaderRowDef=\"trtmntPlanListViewColumns\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: trtmntPlanListViewColumns;\"></tr>\n            </table>\n          </div>\n\n          <!-- advice -->\n          <mat-form-field class=\"example-full-width example-grid-margin\">\n            <textarea matInput placeholder=\"Advice\" [(ngModel)]=\"prescriptionHistoryView.advice\" cdkTextareaAutosize\n              cdkAutosizeMinRows=\"1\" cdkAutosizeMaxRows=\"5\" [disabled]=\"checkIfDisabledToModify()\"></textarea>\n            <button mat-button *ngIf=\"prescriptionHistoryView.advice\" matSuffix mat-icon-button aria-label=\"Clear\"\n              (click)=\"prescriptionHistoryView.advice=''\" matToolTip=\"Clear\" [disabled]=\"checkIfDisabledToModify()\">\n              <mat-icon>close</mat-icon>\n            </button>\n          </mat-form-field>\n\n          <!-- Previous Medicines -->\n          <div *ngIf=\"checkIfDisabledToModify()\">\n            <mat-form-field class=\"example-full-width example-grid-margin\">\n              <textarea matInput placeholder=\"Previous Medicines\" [(ngModel)]=\"medicineHistoryViewModel\"\n                cdkTextareaAutosize cdkAutosizeMinRows=\"1\" cdkAutosizeMaxRows=\"5\" [disabled]=\"checkIfDisabledToModify()\">\n              </textarea>\n            </mat-form-field>\n          </div>\n\n          <!-- Medicine -->\n          <mat-form-field class=\"example-full-width\">\n            <mat-select placeholder=\"Select Medicine\" [formControl]=\"medicineForm\" multiple class=\"example-full-width\">\n              <mat-option *ngFor=\"let mh of medicineMasterViewList\" [value]=\"mh\">{{mh.medicineName}} {{mh.dosage}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n\n          <!-- Next appointment -->\n          <table>\n            <tr>\n              <td>\n                <span>Next appointment</span>\n              </td>\n              <td class=\"example-full-width\">\n                <mat-form-field>\n                  <input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"nextAppoPicker\" placeholder=\"Date\"\n                    (dateChange)=\"createNextAppo($event)\">\n                  <!-- <mat-datepicker-toggle matSuffix [for]=\"nextAppoPicker\"></mat-datepicker-toggle> -->\n                  <mat-datepicker #nextAppoPicker></mat-datepicker>\n                </mat-form-field>\n                <button mat-raised-button (click)=\"nextAppoPicker.open()\">Choose Date</button>\n              </td>\n              <td class=\"example-full-width\">\n                <mat-form-field hintLabel=\"Enter in digits\">\n                  <input matInput maxlength=\"2\" type=\"number\" min=0 max=24 placeholder=\"Hour\" [(ngModel)]=\"nextAppoHour\"\n                    (change)=\"createNextAppoTime()\">\n                </mat-form-field>\n              </td>\n              <td class=\"example-full-width\">\n                <mat-form-field hintLabel=\"Enter in digits\">\n                  <input matInput maxlength=\"2\" type=\"number\" min=0 max=59 placeholder=\"Minute\" [(ngModel)]=\"nextAppoMinute\"\n                    (change)=\"createNextAppoTime()\">\n                </mat-form-field>\n              </td>\n            </tr>\n          </table>\n\n          <div *ngIf=\"feesConfigListView && feesConfigListView.length > 0\">\n            <div class=\"example-margin\" align=\"right\">\n              <span>Add Fee</span>\n              <button mat-icon-button color=\"primary\" (click)=\"addCustomFee()\">\n                <mat-icon aria-label=\"\">add_circle</mat-icon>\n              </button>\n            </div>\n            <div>\n              <table mat-table [dataSource]=\"feesConfigListDataSource\" class=\"mat-elevation-z8\">\n                <!-- column list -->\n                <!-- Id Column -->\n                <ng-container matColumnDef=\"treatmentPlanId\">\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> # </th>\n                  <td mat-cell *matCellDef=\"let fee\"> {{fee.treatmentPlanId}} </td>\n                  <td mat-footer-cell *matFooterCellDef> </td>\n                </ng-container>\n\n                <!-- baseFee Column -->\n                <ng-container matColumnDef=\"baseFee\">\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Base </th>\n                  <td mat-cell *matCellDef=\"let fee\"> {{fee.baseFee}} </td>\n                  <td mat-footer-cell *matFooterCellDef> </td>\n                </ng-container>\n\n                <!-- ageGroupId Column -->\n                <ng-container matColumnDef=\"ageGroupId\">\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> AgeGrp </th>\n                  <td mat-cell *matCellDef=\"let fee\"> {{fee.ageGroupId}} </td>\n                  <td mat-footer-cell *matFooterCellDef> </td>\n                </ng-container>\n\n                <!-- ageGroupPercent Column -->\n                <ng-container matColumnDef=\"ageGroupPercent\">\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> % </th>\n                  <td mat-cell *matCellDef=\"let fee\"> {{fee.ageGroupPercent}} </td>\n                  <td mat-footer-cell *matFooterCellDef> </td>\n                </ng-container>\n\n                <!-- toothGroupId Column -->\n                <ng-container matColumnDef=\"toothGroupId\">\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> ToothGrp </th>\n                  <td mat-cell *matCellDef=\"let fee\" style=\"text-align:center\"> {{fee.toothGroupId}} </td>\n                  <td mat-footer-cell *matFooterCellDef> </td>\n                </ng-container>\n\n                <!-- toothGroupPercent Column -->\n                <ng-container matColumnDef=\"toothGroupPercent\">\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> % </th>\n                  <td mat-cell *matCellDef=\"let fee\"> {{fee.toothGroupPercent}} </td>\n                  <td mat-footer-cell *matFooterCellDef> </td>\n                </ng-container>\n\n                <!-- totalFee Column -->\n                <ng-container matColumnDef=\"totalFee\">\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Fee </th>\n                  <td mat-cell *matCellDef=\"let fee\">\n                    <mat-form-field>\n                      <input matInput type=\"number\" min=1 [(ngModel)]=\"fee.totalFee\" (change)=\"getTotalFee()\"\n                        style=\"text-align:center\" [disabled]=\"checkIfDisabledToModify()\">\n                    </mat-form-field>\n                  </td>\n                  <td mat-footer-cell *matFooterCellDef> Total </td>\n                </ng-container>\n\n                <!-- amountPaid Column -->\n                <ng-container matColumnDef=\"amountPaid\">\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Paid </th>\n                  <td mat-cell *matCellDef=\"let fee\">\n                    <mat-form-field>\n                      <input matInput type=\"number\" min=1 [(ngModel)]=\"fee.amountPaid\" style=\"text-align:center\">\n                    </mat-form-field>\n                  </td>\n                  <td mat-footer-cell *matFooterCellDef></td>\n                </ng-container>\n\n                <!-- notes Column -->\n                <ng-container matColumnDef=\"notes\">\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Note </th>\n                  <td mat-cell *matCellDef=\"let fee\">\n                    <mat-form-field>\n                      <input matInput [(ngModel)]=\"fee.notes\" style=\"text-align:center\">\n                    </mat-form-field>\n                    <button mat-button matSuffix mat-icon-button aria-label=\"Remove\" (click)=\"removeFees($index)\"\n                      matToolTip=\"Remove\">\n                      <mat-icon>close</mat-icon>\n                    </button>\n                  </td>\n                  <td mat-footer-cell *matFooterCellDef> {{totalFees | currency:'&#8377;' }} </td>\n                </ng-container>\n\n                <tr mat-header-row *matHeaderRowDef=\"feesConfigListViewColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: feesConfigListViewColumns;\"></tr>\n                <tr mat-footer-row *matFooterRowDef=\"feesConfigListViewColumns; sticky: true\"></tr>\n              </table>\n            </div>\n          </div>\n\n          <!-- Note -->\n          <div class=\"example-margin\">\n            <mat-form-field class=\"example-full-width\">\n              <textarea matInput placeholder=\"Notes\" [(ngModel)]=\"prescriptionHistoryView.note\" cdkTextareaAutosize\n                cdkAutosizeMinRows=\"1\" cdkAutosizeMaxRows=\"5\" [disabled]=\"checkIfDisabledToModify()\"></textarea>\n              <button mat-button *ngIf=\"prescriptionHistoryView.note\" matSuffix mat-icon-button aria-label=\"Clear\"\n                (click)=\"prescriptionHistoryView.note=''\" matToolTip=\"Clear\" [disabled]=\"checkIfDisabledToModify()\">\n                <mat-icon>close</mat-icon>\n              </button>\n            </mat-form-field>\n          </div>\n\n          <button mat-mini-fab color=\"primary\" (click)=\"createAndSubmitPrescription()\" matTooltip=\"Print\" [disabled]=\"checkIfDisabledToModify()\">\n            <mat-icon aria-label=\"Print\">print</mat-icon>\n          </button>\n        </mat-card-content>\n      </mat-card>\n    </mat-tab>\n\n    <mat-tab label=\"Treatment Done\" [disabled]=\"disableTreatmentDoneTab\">\n      <mat-card class=\"example-card\">\n        <mat-card-content>\n          <!-- Treatment Done -->\n          <!-- Need new table and apis to store -->\n          <app-treatment-plan>Loading..</app-treatment-plan>\n          <!-- <mat-form-field class=\"example-full-width\">            \n            <textarea matInput placeholder=\"Treatment done\" [(ngModel)]=\"prescriptionHistoryView.treatmentDone\"\n              cdkTextareaAutosize cdkAutosizeMinRows=\"1\" cdkAutosizeMaxRows=\"5\"></textarea>\n            <button mat-button *ngIf=\"prescriptionHistoryView.treatmentDone\" matSuffix mat-icon-button aria-label=\"Clear\"\n              (click)=\"prescriptionHistoryView.treatmentDone=''\" matToolTip=\"Clear\">\n              <mat-icon>close</mat-icon>\n            </button>\n          </mat-form-field> -->\n        </mat-card-content>\n      </mat-card>\n    </mat-tab>\n\n  </mat-tab-group>\n\n</mat-card>"

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
    function CreatePrescriptionComponent(snackBar, dialog, httpCom, treatmentPlanService) {
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.httpCom = httpCom;
        this.treatmentPlanService = treatmentPlanService;
        this.columnsToDisplay = ['firstName', 'lastName', 'age', 'weight'];
        this.medicineForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.dialogData = new _models_models__WEBPACK_IMPORTED_MODULE_1__["CompositDialogBoxData"]();
        this.mhList = [];
        this.medicalHistoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.treatmentPlanList = [];
        this.treatmentPlanFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["COMMA"]];
        this.feesConfigListViewColumns = ['treatmentPlanId', 'baseFee', 'ageGroupId', 'ageGroupPercent', 'toothGroupId', 'toothGroupPercent', 'totalFee', 'amountPaid', 'notes'];
        this.disableTabs = false;
        //Enable treatment done tab on prescription repeat or after submitting prescription
        this.disableTreatmentDoneTab = false;
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
        this.nextAppoHour = 0;
        this.nextAppoMinute = 0;
        this.minDate = new Date();
        this.todayMillis = this.minDate.getTime();
        this.maxMillis = this.todayMillis + (5 * 86400 * 1000);
        this.maxDate = new Date(this.maxMillis);
        this.trtmntPlanListDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableDataSource"]();
        this.trtmntPlanListViewColumns = ['cf', 'teeth', 'plan', 'newPlan'];
    }
    CreatePrescriptionComponent.prototype.ngOnInit = function () {
        this.initializeValiables();
        this.commonService = new _services_commonservice_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"]();
    };
    CreatePrescriptionComponent.prototype.refreshSearch = function () {
        this.isPatientLoading = false;
        this.isPatientLoaded = false;
        this.isPatientSelected = false;
        this.tabSelection(0);
        this.disableTabs = true;
        this.initializeValiables();
        this.patientDataSource = [];
    };
    CreatePrescriptionComponent.prototype.initializeValiables = function () {
        var _this = this;
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
        this.treatmentPlanListView = [];
        this.feesConfigListView = [];
        this.feesConfigListDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableDataSource"]();
    };
    CreatePrescriptionComponent.prototype.fetchPatient = function (event) {
        // console.log(event.key);
        if ((this.selectedPatient.firstName !== undefined && this.selectedPatient.firstName.length >= this.minCharToSearch) ||
            (this.selectedPatient.lastName !== undefined && this.selectedPatient.lastName.length >= this.minCharToSearch)) {
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
            if (resp && resp.status === 'SUCCESS') {
                if (resp.status && resp.status.length > 0)
                    _this.patientDataSource = resp.resp;
                _this.isPatientLoaded = true;
                _this.isPatientLoading = false;
            }
            else {
                //TODO: navigate to add patient tab
            }
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
    CreatePrescriptionComponent.prototype.tabSelection = function (tabIndex) {
        this.prescriptionFromControl.setValue(tabIndex);
    };
    CreatePrescriptionComponent.prototype.fetchDashboard = function (patientId) {
        var _this = this;
        this.httpCom.getDashboardView(patientId).subscribe(function (resp) {
            if (resp.status === 'SUCCESS' && resp.resp && resp.resp.length > 0) {
                _this.dashboardDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableDataSource"]();
                _this.dashboardDataSource.data = resp.resp;
            }
            else {
                _this.tabSelection(2);
            }
        });
    };
    CreatePrescriptionComponent.prototype.getDueFee = function (feesList) {
        var due = 0;
        feesList.map(function (fee) {
            due += fee.amount - fee.amountPaid;
        });
        return due;
    };
    //populate prescription details
    CreatePrescriptionComponent.prototype.selectPrescription = function (dashboard) {
        var _this = this;
        this.tabSelection(2);
        this.isDisabledToModify = true;
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
            console.log('Start of cftMapArray');
            this.cftMapArray = [];
            if (dashboard.pHistory &&
                dashboard.pHistory.clinicalFindings &&
                dashboard.pHistory.clinicalFindings.length > 0) {
                var clinicalFinidingToothComposite = dashboard.pHistory.clinicalFindings.split(',');
                clinicalFinidingToothComposite.forEach(function (e) {
                    var clinicalFindingComposite = e.split(' -  ');
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
                this.treatmentPlanService.setTreatmentData(dashboard.pHistory.patientId, dashboard.pHistory.prescriptionId, dashboard.tphv);
                this.httpCom.getAgeGroup(this.selectedPatient.age.toString()).subscribe(function (resp) {
                    if (resp && resp.status === 'SUCCESS') {
                        _this.ageGroup = resp.resp.groupId;
                    }
                });
                dashboard.fbl.forEach(function (fee) {
                    var feeConf = new _models_models__WEBPACK_IMPORTED_MODULE_1__["FeeConfigView"]();
                    feeConf.treatmentPlanId = fee.trtmntPlanRef;
                    feeConf.totalFee = fee.amount;
                    feeConf.amountPaid = fee.amountPaid;
                    feeConf.notes = fee.notes;
                    feeConf.ageGroupId = _this.ageGroup;
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
            this.prescriptionHistoryView.nextAppointment = event.value.getTime();
            if (0 <= this.nextAppoHour && this.nextAppoHour <= 24 && 0 <= this.nextAppoMinute && this.nextAppoMinute <= 59) {
                var modifiedTime = ((this.nextAppoHour * 60) + this.nextAppoMinute) * 60 * 1000 + event.value.getTime();
                console.log('next appo ' + modifiedTime);
            }
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
        // if (this.treatmentPlanList && this.treatmentPlanList.length > 0) {
        //   this.treatmentPlanList.forEach(tpl => {
        //     // if (tpl.clinicalFinding == this.cftMapArray[i].clinicalFinding.fid) {
        //       //Concurrency check
        //       if (this.treatmentPlanListView.indexOf(tpl.trtName) < 0) {
        //         this.treatmentPlanListView.push(tpl.trtName);
        //       //Getting fees config
        //       // let feeConfigRequestListView: FeeConfigRequestListView[] = [];
        //       // this.cftMapArray[i].teeth.forEach(t => {
        //       //   let feeConfigRequestView = new FeeConfigRequestListView();
        //       //   feeConfigRequestView.tooth_grp_idx = t.toothGroup;
        //       //   feeConfigRequestView.trtmnt_id = tpl.trtId;
        //       //   feeConfigRequestListView.push(feeConfigRequestView);
        //       // })
        //       //Print data
        //       // console.log('Fee config data:', feeConfigRequestListView);
        //       // this.httpCom.getFeeConfigList(this.selectedPatient.age, feeConfigRequestListView).subscribe(resp => {
        //       //   if (resp && resp.status === 'SUCCESS') {
        //       //     resp.resp.forEach(element => {
        //       //       let feeConfigData: FeeConfigView = element;
        //       //       if (feeConfigData && feeConfigData.totalFee > 0) {
        //       //         this.feesConfigListView.push(element);
        //       //         this.feesConfigListDataSource.data = this.feesConfigListView;
        //       //       }
        //       //     });
        //       //     this.getTotalFee();
        //       //     // console.log('Fee config object:', this.feesConfigListView);
        //       //   }
        //       // });
        //     // }
        //   });
        // } else {
        //   console.log("Treatment plan empty");
        // }
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
                            _this.feesConfigListView.push(feeConfigData);
                            _this.feesConfigListDataSource.data = _this.feesConfigListView;
                            _this.getTotalFee();
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
        // Need refactoring
        this.dashboardView.pHistory.clinicalFindings = this.clinicalFindingsViewForUi.toString();
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
                _this.printPrescription();
            }
        });
    };
    CreatePrescriptionComponent.prototype.printPrescription = function () {
        //printableContent1
        //Need to create a separate page and populate the prescription data only    
        var prescriptionContent = document.getElementById("printableContent1").outerHTML;
        var openWindow = window.open("", "target", "width=800, height=800");
        // let printablePage = `<!doctype html>
        // <html lang="en">
        // <head>
        //   <meta charset="utf-8">
        //   <title>EpsDashboard</title>
        //   <base href="/">
        //   <meta name="viewport" content="width=device-width, initial-scale=1">
        //   <link rel="icon" type="image/x-icon" href="favicon.ico">
        //   <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        //   <link rel="stylesheet" href="create-prescription.component.css">
        //   <link rel="stylesheet" href="../dashboard/dashboard.component.css">
        // </head>
        // <body> ${prescriptionContent} </body></html>`;
        var printablePage = '<html>' +
            '<head>' +
            '<title>Prescription</title>' +
            '<script type="text/javascript" src="runtime.js"></script>' +
            '<script type="text/javascript" src="polyfills.js"></script>' +
            '<script type="text/javascript" src="styles.js"></script>' +
            // '<script type="text/javascript" src="vendor.js"></script>'+
            '<script type="text/javascript" src="main.js"></script>' +
            '<link rel="stylesheet" href="../dashboard/dashboard.component.css"/>' +
            '<link rel="icon" type="image/x-icon" href="favicon.ico"/>' +
            '</head>' +
            '<body ' +
            // 'onload="window.print()"'+
            '>'
            + prescriptionContent
            + '</body></html>';
        console.log("printPrescription", JSON.stringify(printablePage));
        openWindow.document.open();
        openWindow.document.write(printablePage);
        openWindow.document.close;
        openWindow.focus();
        // openWindow.print();
        // openWindow.close();
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
            _services_treatment_plan_service__WEBPACK_IMPORTED_MODULE_10__["TreatmentPlanService"]])
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

module.exports = ".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-card {\r\n    max-width: 800px;\r\n    min-width: 50px;\r\n    margin-left: 50px;\r\n    margin-top: 30px;\r\n    width : 100%;\r\n  }\r\n  \r\n  .expansion-margin {\r\n    max-width: 1000px;\r\n    margin-left: 150px;\r\n    margin-top: 30px;\r\n  }\r\n  \r\n  .example-section {\r\n    display: flex;\r\n    align-content: center;\r\n    align-items: center;\r\n    height: 60px;\r\n  }\r\n  \r\n  .example-margin {\r\n    /* margin: 0 10px; */\r\n    margin-top: 20px;\r\n    margin : 5px 10px;\r\n  }\r\n  \r\n  /* .mat-radio-button ~ .mat-radio-button {\r\n    padding: 36px;\r\n  } */\r\n  \r\n  .example-radio-group-column {\r\n    /* display: inline-flex; */\r\n    /* flex-direction: column; */\r\n  }\r\n  \r\n  .example-icon-radio-button {\r\n    margin: 0px;\r\n    padding-left: 27px;\r\n  }\r\n  \r\n  .example-half-width{\r\n    width: 50%;\r\n  }\r\n  \r\n  .icon-male {\r\n    background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 version%3D%221.1%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M9%2C9C10.29%2C9 11.5%2C9.41 12.47%2C10.11L17.58%2C5H13V3H21V11H19V6.41L13.89%2C11.5C14.59%2C12.5 15%2C13.7 15%2C15A6%2C6 0 0%2C1 9%2C21A6%2C6 0 0%2C1 3%2C15A6%2C6 0 0%2C1 9%2C9M9%2C11A4%2C4 0 0%2C0 5%2C15A4%2C4 0 0%2C0 9%2C19A4%2C4 0 0%2C0 13%2C15A4%2C4 0 0%2C0 9%2C11Z%22 %2F%3E%3C%2Fsvg%3E\");\r\n    height: 27px;\r\n    width: 22px;\r\n    display: block;\r\n    /* Other styles here */\r\n}\r\n  \r\n  .icon-female {\r\n  background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 version%3D%221.1%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M12%2C4A6%2C6 0 0%2C1 18%2C10C18%2C12.97 15.84%2C15.44 13%2C15.92V18H15V20H13V22H11V20H9V18H11V15.92C8.16%2C15.44 6%2C12.97 6%2C10A6%2C6 0 0%2C1 12%2C4M12%2C6A4%2C4 0 0%2C0 8%2C10A4%2C4 0 0%2C0 12%2C14A4%2C4 0 0%2C0 16%2C10A4%2C4 0 0%2C0 12%2C6Z%22 %2F%3E%3C%2Fsvg%3E\");\r\n  height: 27px;\r\n  width: 22px;\r\n  display: block;\r\n  /* Other styles here */\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dash\">\n  <mat-tab-group>\n\n    <mat-tab label=\"Create Prescription\">\n      <div class=\"expansion-margin\">\n        <app-create-prescription>Loading...</app-create-prescription>\n      </div>\n    </mat-tab>\n\n    <mat-tab label=\"Add Patient\">\n\n      <div class=\"expansion-margin\">\n\n        <!-- Accordian expansion panel -->\n        <mat-accordion>\n          <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Basic data\n              </mat-panel-title>\n              <mat-panel-description>\n                Section for name, date of birth, weight, blood group\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n\n            <mat-card class=\"example-card\">\n              <mat-card-content>\n                <table>\n                  <tr>\n                    <td>\n                      <!-- First Name -->\n                      <div class=\"example-container example-margin\">\n                        <mat-form-field hintLabel=\"Max {{config.first_name_len}} characters\">\n                          <input matInput [maxlength]=\"config.first_name_len\" placeholder=\"First name\" [(ngModel)]=\"patient.firstName\" (keyup)='onKeyUp($event)'\n                            required>\n                          <mat-hint align=\"end\">{{patient.firstName?.length || 0}}/{{config.first_name_len}}</mat-hint>\n                        </mat-form-field>\n                      </div>\n                    </td>\n                    <td>\n                      <!-- Last Name -->\n                      <div class=\"example-container example-margin\">\n                        <mat-form-field hintLabel=\"Max {{config.last_name_len}} characters\">\n                          <input matInput maxlength=15 placeholder=\"Last name\" [(ngModel)]=\"patient.lastName\" required>\n                          <mat-hint align=\"end\">{{patient.lastName?.length || 0}}/{{config.last_name_len}}</mat-hint>\n                        </mat-form-field>\n                      </div>\n                    </td>\n                    <td>\n                      <!-- Sex -->\n                      <div class=\"example-container example-margin\">\n                        <div style=\"display: inline;\">\n                          <span>Sex</span>\n                          <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"patient.sex\">\n                            <span class=\"icon-male\">\n                              <mat-radio-button class=\"example-icon-radio-button\" value=\"male\"></mat-radio-button>\n                            </span>\n                            <span class='icon-female'>\n                              <mat-radio-button class=\"example-icon-radio-button\" value=\"female\"></mat-radio-button>\n                            </span>\n                          </mat-radio-group>\n                        </div>\n                      </div>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n\n                      <!-- </td>\n                    <td> -->\n                      <!-- DOB -->\n                      <div class=\"example-margin\">\n                        <span>\n                          Date of birth :\n                        </span>\n                        <mat-form-field>\n                          <input matInput [matDatepicker]=\"picker\" placeholder=\"Select from calender\" (dateChange)=\"dateAddEvent('change', $event)\"\n                            disabled>\n                          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                          <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n                        </mat-form-field>\n                      </div>\n                    </td>\n                    <!-- </tr>\n                  <tr> -->\n                    <td>\n\n                      <!-- </td>\n                    <td> -->\n                      <div class=\"example-margin\">\n                        <span>\n                          Blood Group :\n                        </span>\n                        <!-- Blood group -->\n                        <mat-select class=\"example-half-width\" placeholder=\"Blood group\" [(ngModel)]=\"patient.bloodGroup\" name=\"bloodGroup\">\n                          <mat-option *ngFor=\"let bg of bloodGroups\" [value]=\"bg.value\">\n                            {{bg.viewValue}}\n                          </mat-option>\n                        </mat-select>\n                      </div>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <!-- Height -->\n                      <div class=\"example-margin\">\n                        <span>\n                          Height(cm) :\n                        </span>\n                        <mat-form-field hintLabel=\"Enter in digits\">\n                          <input matInput maxlength=3 placeholder=\"Height\" [(ngModel)]=\"patient.height\" required>\n                          <mat-hint align=\"end\">{{patient.height?.length || 0}}/3</mat-hint>\n                        </mat-form-field>\n                      </div>\n                    </td>\n                    <td>\n                      <!-- Weight -->\n                      <div class=\"example-margin\">\n                        <span>\n                          Weight(kg) :\n                        </span>\n                        <mat-form-field hintLabel=\"Enter in digits\">\n                          <input matInput maxlength=3 placeholder=\"Weight\" [(ngModel)]=\"patient.weight\" required>\n                          <mat-hint align=\"end\">{{patient.weight?.length || 0}}/3</mat-hint>\n                        </mat-form-field>\n                      </div>\n                    </td>\n                  </tr>\n                </table>\n              </mat-card-content>\n            </mat-card>\n            <mat-action-row>\n              <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n            </mat-action-row>\n          </mat-expansion-panel>\n\n          <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Contact data\n              </mat-panel-title>\n              <mat-panel-description>\n                Section for phone number, email and address\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n            <mat-card class=\"example-card\">\n              <mat-card-content>\n                <table>\n                  <tr>\n                    <td>\n                      <!-- Contact Number -->\n                      <div class=\"example-container example-margin\">\n                        <mat-form-field hintLabel=\"Enter in digits\" class=\"example-full-width\">\n                          <span matPrefix>+91 &nbsp;</span>\n                          <input type=\"tel\" matInput placeholder=\"Contact number\" [(ngModel)]=\"patient.contactNo1\">\n                          <mat-icon matSuffix>contact_phone</mat-icon>\n                        </mat-form-field>\n                      </div>\n                    </td>\n                    <td>\n                      <!-- Email address -->\n                      <div class=\"example-container example-margin\">\n                        <mat-form-field hintLabel=\"Optional email\">\n                          <input matInput maxlength=30 placeholder=\"Enter email\" type=\"email\" [(ngModel)]=\"patient.email\">\n                          <mat-icon matSuffix>contact_mail</mat-icon>\n                          <mat-hint align=\"end\">{{patient.email?.length || 0}}/30</mat-hint>\n                        </mat-form-field>\n                      </div>\n                    </td>\n                  </tr>\n                </table>\n\n                <!-- Address 1 -->\n                <div class=\"example-container example-margin\">\n                  <mat-form-field class=\"example-full-width\">\n                    <textarea matInput placeholder=\"Address1\" [(ngModel)]=\"patient.address1\" required></textarea>\n                    <button mat-button *ngIf=\"patient.address1\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"patient.address1=''\">\n                      <mat-icon>close</mat-icon>\n                    </button>\n                  </mat-form-field>\n                </div>\n\n                <!-- Address 2 -->\n                <div class=\"example-container example-margin\">\n                  <mat-form-field class=\"example-full-width\">\n                    <textarea matInput placeholder=\"Address2\" [(ngModel)]=\"patient.address2\"></textarea>\n                    <button mat-button *ngIf=\"patient.address2\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"patient.address2=''\">\n                      <mat-icon>close</mat-icon>\n                    </button>\n                  </mat-form-field>\n                </div>\n              </mat-card-content>\n            </mat-card>\n            <mat-action-row>\n              <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n              <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n            </mat-action-row>\n          </mat-expansion-panel>\n\n          <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Configuration data\n              </mat-panel-title>\n              <mat-panel-description>\n                Optional data\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n            <span>Discount</span>\n            <table>\n              <tr>\n                <td>\n                  <mat-radio-group class=\"example-margin\" [(ngModel)]=\"patient.discountType\">\n                    <mat-radio-button value=\"percentage\">Percent</mat-radio-button>\n                    <mat-radio-button value=\"flat\">Flat</mat-radio-button>\n                  </mat-radio-group>\n                </td>\n                <td>\n                  <div class=\"example-margin\">\n                    <mat-form-field hintLabel=\"Enter in digits\">\n                      <input matInput maxlength=\"5\" placeholder=\"Discount\" [(ngModel)]=\"patient.discount\">\n                      <mat-hint align=\"end\">{{patient.discount?.length || 0}}/5</mat-hint>\n                    </mat-form-field>\n                  </div>\n                </td>\n              </tr>\n            </table>\n            <mat-action-row>\n              <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n              <button mat-button color=\"primary\" (click)=\"submitPatient()\">Add Patient</button>\n            </mat-action-row>\n          </mat-expansion-panel>\n\n\n        </mat-accordion>\n\n      </div>\n    </mat-tab>\n\n  </mat-tab-group>\n</div>"

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
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/models */ "./src/app/models/models.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_httpcomm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/httpcomm.service */ "./src/app/services/httpcomm.service.ts");
/* harmony import */ var _services_commonservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/commonservice.service */ "./src/app/services/commonservice.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _snackhelper_snackbar_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../snackhelper/snackbar-model */ "./src/app/snackhelper/snackbar-model.ts");
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
    function DashboardComponent(snackBar, httpClient) {
        this.snackBar = snackBar;
        this.httpClient = httpClient;
        this.commonService = new _services_commonservice_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]();
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
        this.patient = new _models_models__WEBPACK_IMPORTED_MODULE_1__["Patient"]();
        this.httpService = new _services_httpcomm_service__WEBPACK_IMPORTED_MODULE_4__["HttpcommService"](httpClient);
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
    };
    DashboardComponent.prototype.getRealPatient = function () {
        var _this = this;
        this.httpService.getPatient(this.patient).subscribe(function (resp) {
            if (resp && resp.status === 'SUCCESS') {
                if (resp.resp && resp.resp.length > 0) {
                    _this.patient = resp.resp[0];
                    _this.firstName = _this.patient.firstName;
                    _this.lastName = _this.patient.lastName;
                }
                else {
                }
            }
            else {
            }
        });
    };
    DashboardComponent.prototype.submitPatient = function () {
        this.nextStep();
        console.log('Sending from dash');
        console.log(this.patient);
        this.httpService.addPatient(this.patient).subscribe(function (s) {
            console.log('Receieved response');
            console.log('s');
        });
    };
    DashboardComponent.prototype.onKeyUp = function (event) {
        var snackbarConfig = new _snackhelper_snackbar_model__WEBPACK_IMPORTED_MODULE_7__["SnackbarModel"]();
        snackbarConfig.isError = true;
        snackbarConfig.msg = 'test msg';
        snackbarConfig.duration = 2000;
        snackbarConfig.callback = function () {
            console.log('Callback ok');
        };
        this.commonService.showSnackBar(this.snackBar, snackbarConfig);
    };
    DashboardComponent.prototype.dateAddEvent = function (type, event) {
        var parsedDate = this.commonService.getParsedDate(event.value);
        if (parsedDate && parsedDate.length == 3) {
            this.patient.dobDd = parsedDate[0];
            this.patient.dobMm = parsedDate[1];
            this.patient.dobYy = parsedDate[2];
        }
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
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
/*! exports provided: Response, ClinicalFindingView, MedicalMaster, Patient, PrescriptionHistoryView, ToothQuadrentView, TreatmentPlan, MedicineView, FeesBreakupView, FeeConfigView, FeeConfigRequestListView, MedicalHistoryView, MedicineHistoryView, TreatmentPlanHistoryView, TreatmentPlanStatus, DashboardView, CompositDialogBoxData, ClinicalFindingToothMapping */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompositDialogBoxData", function() { return CompositDialogBoxData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalFindingToothMapping", function() { return ClinicalFindingToothMapping; });
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



/***/ }),

/***/ "./src/app/print-prescription/print-prescription.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/print-prescription/print-prescription.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/print-prescription/print-prescription.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/print-prescription/print-prescription.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  print-prescription works!\n</p>\n"

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
/* harmony import */ var _snackhelper_snackhelper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../snackhelper/snackhelper.component */ "./src/app/snackhelper/snackhelper.component.ts");
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
        if (date &&
            date.getDate() && date.getDate() > 0 &&
            date.getMonth() && date.getMonth() >= 0 &&
            date.getFullYear() && date.getFullYear() > 0)
            return true;
        return false;
    };
    CommonService.prototype.getParsedDate = function (date) {
        var pd = null;
        // console.log('Date validation: ' + this.validateDate(date));
        if (this.validateDate(date)) {
            pd = [];
            pd.push(date.getDate());
            pd.push(date.getMonth() + 1);
            pd.push(date.getFullYear());
        }
        return pd;
    };
    CommonService.prototype.combineValForStringArray = function (stringArr, key, addVal, keyValueSeperator, valueSeperator) {
        if (keyValueSeperator === void 0) { keyValueSeperator = ' - '; }
        if (valueSeperator === void 0) { valueSeperator = ','; }
        var combinedVal = '';
        for (var index = 0; index <= stringArr.length - 1; index++) {
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
        // console.log('Return', key + keyValueSeperator + addVal)
        return key + keyValueSeperator + addVal;
    };
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
    CommonService.prototype.showSnackBar = function (snackBar, snackBarModel) {
        snackBar.openFromComponent(_snackhelper_snackhelper_component__WEBPACK_IMPORTED_MODULE_1__["SnackhelperComponent"], {
            data: snackBarModel, duration: snackBarModel.duration
        });
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
                        "clinicalFindings": "Periodontities -  33 34 35,Stain -  11 32",
                        "investigation": "general test iv",
                        "nextAppointment": 1542393000000,
                        "note": "general test notes",
                        "patientId": 1,
                        "provisionalDiagnosis": "general test pd",
                        "tsCreated": 1542426489661,
                        "tsModified": null
                    },
                    "fbl": [
                        {
                            "fId": 34,
                            "amount": 500,
                            "amountPaid": 0,
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
                            "note": "Test check",
                            "patientId": 1,
                            "prescriptionId": 34,
                            "toothIndex": "35",
                            "tsCreated": 1542426513622,
                            "tsModified": null,
                            "tid": 3,
                            "tname": "RCT",
                            "status": "Completed"
                        },
                        {
                            "clinicalFinding": "Periodontities",
                            "note": "Test check",
                            "patientId": 1,
                            "prescriptionId": 34,
                            "toothIndex": "34",
                            "tsCreated": 1542426534816,
                            "tsModified": null,
                            "tid": 4,
                            "tname": "Extraction",
                            "status": "Completed"
                        },
                        {
                            "clinicalFinding": "Periodontities",
                            "note": "Test check",
                            "patientId": 1,
                            "prescriptionId": 34,
                            "toothIndex": "33",
                            "tsCreated": 1542426536451,
                            "tsModified": null,
                            "tid": 5,
                            "tname": "Extraction",
                            "status": "Completed"
                        },
                        {
                            "clinicalFinding": "Stain",
                            "note": null,
                            "patientId": 1,
                            "prescriptionId": 34,
                            "toothIndex": "11",
                            "tsCreated": 1542426537785,
                            "tsModified": null,
                            "tid": 6,
                            "tname": "RCT",
                            "status": "Pending"
                        },
                        {
                            "clinicalFinding": "Stain",
                            "note": null,
                            "patientId": 1,
                            "prescriptionId": 34,
                            "toothIndex": "32",
                            "tsCreated": 1542426542147,
                            "tsModified": null,
                            "tid": 7,
                            "tname": "RCT",
                            "status": "Pending"
                        }
                    ]
                }
            ]
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
        this.getDashboard = this.baseUrl + 'dashboard/get-dashboard?patientId=';
        this.postAddClinicalFindingUrl = this.baseUrl + 'clinical-finding/add-clinical-finding';
        this.getAddTreatmentPlanUrl = this.baseUrl + 'trtmnt/add-treatment-plan';
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
            return this.http.get(this.baseUrl + 'dashboard/get-dashboard?patientId=' + patientId, this.httpOptions);
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
        //console.log('http service called');
        if (this.dummy) {
            //console.log(this.parseData(this.dummyResp.getPatient));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.parseData(this.dummyResp.getPatient));
        }
        else {
            //console.log(1.2);
            return this.http.post(this.getPatientUrl, patient, this.httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('test', new _models_models__WEBPACK_IMPORTED_MODULE_3__["Response"]())));
        }
    };
    HttpcommService.prototype.addPatient = function (p) {
        //console.log('Posting patient');
        //console.log(p);
        if (this.dummy) {
            //console.log('Dummy post');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.parseData(this.dummyResp.getPatient));
        }
        else {
            //console.log('Real post');
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
            resp.resp = req;
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
    TreatmentPlanService.prototype.setPrescriptionDetails = function (patientId, prescriptionId) {
        this.patientId = patientId;
        this.prescriptionId = prescriptionId;
    };
    TreatmentPlanService.prototype.getTreatmentPlanSuggestionViewList = function () {
        return (this.treatmentPlanHistoryViewList.length > 0) ? this.treatmentPlanHistoryViewList.filter(function (tph) { return tph.status == _models_models__WEBPACK_IMPORTED_MODULE_1__["TreatmentPlanStatus"].PENDING; }) : [];
    };
    TreatmentPlanService.prototype.getTreatmentPlanHistoryViewList = function () {
        return (this.treatmentPlanHistoryViewList.length > 0) ? this.treatmentPlanHistoryViewList.filter(function (tph) { return tph.status == _models_models__WEBPACK_IMPORTED_MODULE_1__["TreatmentPlanStatus"].COMPLETED; }) : [];
    };
    TreatmentPlanService.prototype.getPatientId = function () {
        return this.patientId;
    };
    TreatmentPlanService.prototype.getPrescriptionId = function () {
        return this.prescriptionId;
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

module.exports = "<!-- Treatment plan history section -->\n<p>\n  <span class=\"example-margin\">Treatment plan history</span>\n</p>\n<button \n    class=\"example-margin rcorners2\" \n    mat-stroked-button color=\"primary\" \n    (click)=\"fetchTphvList()\">Check History\n  </button>\n<div *ngIf=\"requestLoading\">\n  <section class=\"example-section\">\n    <mat-progress-bar\n        class=\"example-margin\"\n        color=\"primary\"\n        mode=\"indeterminate\">\n    </mat-progress-bar>\n  </section>\n</div>\n<div class=\"example-full-width\">\n  <div *ngIf=\"treatmentPlanHistories && treatmentPlanHistories.length > 0\">\n    <table mat-table [dataSource]=\"trtmntPlanHistListDataSource\" class=\"mat-elevation-z8\">\n\n      <ng-container matColumnDef=\"tname\">\n        <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Name </th>\n        <td mat-cell *matCellDef=\"let tphv\"> {{tphv.tname}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"clinicalFinding\">\n        <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> C/F </th>\n        <td mat-cell *matCellDef=\"let tphv\"> {{tphv.clinicalFinding}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"toothIndex\">\n        <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Tooth </th>\n        <td mat-cell *matCellDef=\"let tphv\"> {{tphv.toothIndex}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"note\">\n        <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Note </th>\n        <td mat-cell *matCellDef=\"let tphv\"> {{tphv.note}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"tsCreated\">\n        <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Time </th>\n        <td mat-cell *matCellDef=\"let tphv\"> {{tphv.tsCreated | date:'dd/MM/yy hh:mm a'}} </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"trtmntPlanHistListViewColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: trtmntPlanHistListViewColumns;\"></tr>\n    </table>\n  </div>\n</div>\n\n<div>\n  <button \n    class=\"example-margin rcorners2\" \n    mat-stroked-button color=\"primary\" \n    (click)=\"getSuggestionList()\">Select from suggestion\n  </button>\n  OR\n  <button \n    class=\"example-margin rcorners2\" \n    mat-stroked-button color=\"primary\" \n    (click)=\"addTphv()\">Add manually\n  </button>\n</div>\n\n<!-- Suggestion to add from Treatment Plan List -->\n<div class=\"example-full-width\" *ngIf=\"showTrtmentPlanSuggestionList\">\n  <table mat-table [dataSource]=\"trtmntPlanListDataSource\" class=\"mat-elevation-z8\">\n\n    <ng-container matColumnDef=\"tname\">\n      <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Name </th>\n      <td mat-cell *matCellDef=\"let tphv\"> {{tphv.tname}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"clinicalFinding\">\n      <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> C/F </th>\n      <td mat-cell *matCellDef=\"let tphv\"> {{tphv.clinicalFinding}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"toothIndex\">\n      <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Tooth </th>\n      <td mat-cell *matCellDef=\"let tphv; let i = index;\">\n        {{tphv.toothIndex}}\n        <button class=\"rcorners2\" mat-stroked-button color=\"primary\" (click)=\"addTphv(tphv, i)\">Select</button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"trtmntPlanListViewColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: trtmntPlanListViewColumns;\"></tr>\n  </table>\n</div>\n<!-- selectedTreatmentPlanHistView -->\n<div *ngIf=\"showTrtmentPlanAdditionSection\">\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title>Treatment Plan</mat-card-title>\n      <mat-card-subtitle> {{selectedTreatmentPlanHistView.treatmentPlanViewModel}} </mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      <mat-form-field class=\"example-short-margin\" hintLabel=\"Max 30 characters\">\n        <input matInput [maxlength]=\"30\" placeholder=\"Treatment name\" [(ngModel)]=\"selectedTreatmentPlanHistView.tname\"\n          required>\n        <mat-hint align=\"end\">{{selectedTreatmentPlanHistView.tname?.length || 0}}/30</mat-hint>\n      </mat-form-field>\n      <mat-form-field class=\"example-short-margin\" hintLabel=\"Max 30 characters\">\n        <input matInput [maxlength]=\"30\" placeholder=\"C/F\" [(ngModel)]=\"selectedTreatmentPlanHistView.clinicalFinding\"\n          required>\n        <mat-hint align=\"end\">{{selectedTreatmentPlanHistView.clinicalFinding?.length || 0}}/30</mat-hint>\n      </mat-form-field>\n      <mat-form-field class=\"example-short-margin\" hintLabel=\"Max 30 characters\">\n        <input matInput [maxlength]=\"30\" placeholder=\"Tooth\" [(ngModel)]=\"selectedTreatmentPlanHistView.toothIndex\"\n          required>\n        <mat-hint align=\"end\">{{selectedTreatmentPlanHistView.toothIndex?.length || 0}}/30</mat-hint>\n      </mat-form-field>\n\n      <mat-form-field class=\"example-short-margin\">\n        <mat-select placeholder=\"Status\" [formControl]=\"treatmentStatusForm\">\n          <mat-option *ngFor=\"let statusList of treatmentStatusList\" [value]=\"statusList\">{{statusList}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field hintLabel=\"Max 30 characters\">\n        <input matInput [maxlength]=\"30\" placeholder=\"Note\" [(ngModel)]=\"selectedTreatmentPlanHistView.note\">\n        <mat-hint align=\"end\">{{selectedTreatmentPlanHistView.note?.length || 0}}/30</mat-hint>\n      </mat-form-field>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-stroked-button class=\"example-margin rcorners2\" color=\"primary\" (click)=\"addTreatmentPlan()\" >ADD</button>\n      <button mat-stroked-button class=\"example-margin rcorners2\" color=\"warn\" (click)=\"deleteSelectedTphv()\" >DELETE</button>\n    </mat-card-actions>\n  </mat-card>\n\n</div>"

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
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/models */ "./src/app/models/models.ts");
/* harmony import */ var _services_treatment_plan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/treatment-plan.service */ "./src/app/services/treatment-plan.service.ts");
/* harmony import */ var _services_httpcomm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/httpcomm.service */ "./src/app/services/httpcomm.service.ts");
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
    function TreatmentPlanComponent(treatmentPlanService, httpComService) {
        this.treatmentPlanService = treatmentPlanService;
        this.httpComService = httpComService;
        this.trtmntPlanHistListDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.trtmntPlanHistListViewColumns = ['tname', 'clinicalFinding', 'toothIndex', 'note', 'tsCreated'];
        this.trtmntPlanListDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.trtmntPlanListViewColumns = ['tname', 'clinicalFinding', 'toothIndex'];
        this.showTrtmentPlanSuggestionList = false;
        this.showTrtmentPlanAdditionSection = false;
        this.selectedTreatmentPlanHistView = new _models_models__WEBPACK_IMPORTED_MODULE_3__["TreatmentPlanHistoryView"]();
        this.requestLoading = false; //Progress bar at the time request loading
        this.treatmentPlanHistories = [];
        this.treatmentStatusForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.treatmentStatusList = [];
    }
    TreatmentPlanComponent.prototype.ngOnInit = function () {
        this.treatmentStatusList.push(_models_models__WEBPACK_IMPORTED_MODULE_3__["TreatmentPlanStatus"].COMPLETED.valueOf());
        this.treatmentStatusList.push(_models_models__WEBPACK_IMPORTED_MODULE_3__["TreatmentPlanStatus"].PENDING.valueOf());
    };
    // Show treatment plan list from prescription history
    TreatmentPlanComponent.prototype.getSuggestionList = function () {
        var suggestions = this.treatmentPlanService.getTreatmentPlanSuggestionViewList();
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
        }
        else {
            this.selectedTreatmentPlanHistView = new _models_models__WEBPACK_IMPORTED_MODULE_3__["TreatmentPlanHistoryView"]();
        }
    };
    TreatmentPlanComponent.prototype.deleteSelectedTphv = function () {
        this.showTrtmentPlanAdditionSection = false;
        this.selectedTreatmentPlanHistView = new _models_models__WEBPACK_IMPORTED_MODULE_3__["TreatmentPlanHistoryView"]();
    };
    //Fetch previous entries
    TreatmentPlanComponent.prototype.fetchTphvList = function () {
        this.treatmentPlanHistories = this.treatmentPlanService.getTreatmentPlanHistoryViewList();
        if (this.treatmentPlanHistories && this.treatmentPlanHistories.length > 0) {
            this.trtmntPlanHistListDataSource.data = this.treatmentPlanHistories;
        }
    };
    TreatmentPlanComponent.prototype.addTreatmentPlan = function () {
        if (this.validateData()) {
            this.selectedTreatmentPlanHistView.patientId = this.treatmentPlanService.getPatientId();
            this.selectedTreatmentPlanHistView.prescriptionId = this.treatmentPlanService.getPrescriptionId();
            this.selectedTreatmentPlanHistView.status = this.treatmentStatusForm.value;
            console.log("Add Treatment Plan", JSON.stringify(this.selectedTreatmentPlanHistView));
            var url = this.httpComService.getAddTreatmentPlanUrl + '?patientId=' + this.treatmentPlanService.getPatientId() + '&prescriptionId=' + this.treatmentPlanService.getPrescriptionId();
            console.log("URL", JSON.stringify(url));
            this.httpComService.genericPostRequest(url, this.selectedTreatmentPlanHistView, "Add Treatment Plan").subscribe(function (resp) {
                if (resp.status == "SUCCESS") {
                    //Update History
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
        __metadata("design:paramtypes", [_services_treatment_plan_service__WEBPACK_IMPORTED_MODULE_4__["TreatmentPlanService"], _services_httpcomm_service__WEBPACK_IMPORTED_MODULE_5__["HttpcommService"]])
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