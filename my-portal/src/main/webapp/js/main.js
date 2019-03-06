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

module.exports = ".example-container {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n\r\n  .block1, .block2{\r\n    display: inline;\r\n  }\r\n\r\n  .menuButton{\r\n    margin-top: 30px;\r\n    margin-left: 30px;\r\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"example-container\" (backdropClick)=\"close('backdrop')\">\n  <mat-sidenav #sidenav (keydown.escape)=\"sidenav.close()\" disableClose>\n    <p *ngFor = \"let menu of navMenus\" style=\"text-align: center\">\n      <button mat-stroked-button routerLink={{menu.path}} (click) = \"sidenav.close()\">{{menu.name}}</button>  \n    </p>\n    <!-- <p>      \n      <button mat-button [routerLink]=\"['print']\" [queryParams]=\"{ patientId:1 , prescriptionId:12}\" (click) = \"sidenav.close()\">Print</button>\n    </p> -->\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <div class=\"block\">\n      <button class=\"menuButton\" mat-fab (click)=\"sidenav.open()\">\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">home</mat-icon>\n      </button>\n    </div>\n    <div class=\"block2\">\n      <router-outlet></router-outlet>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n<!-- <nav>\n  <a routerLink=\"/dashboard\">Dashboard</a>\n  <a routerLink=\"/admin\">Admin</a>\n</nav> -->\n\n"

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
/* harmony import */ var _services_httpcomm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/httpcomm.service */ "./src/app/services/httpcomm.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
    function AppComponent(httpClient) {
        this.httpClient = httpClient;
        this.title = 'eps-dashboard';
        this.reason = '';
        this.navMenus = [
            { "name": "Dashboard", "path": "dashboard" },
            { "name": "Admin", "path": "admin" }
        ];
        var httpDummyService = new _services_httpcomm_service__WEBPACK_IMPORTED_MODULE_2__["HttpcommService"](httpClient);
        if (httpDummyService.dummy) {
            this.navMenus.push({ "name": "Test", "path": "test" }, { "name": "SortTable", "path": "sortTable" }, { "name": "Print", "path": "print?patientId=1&prescriptionId=12" }, { "name": "Ultimate Print", "path": "print-medium-site" });
        }
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
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
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
/* harmony import */ var _create_prescription_medicine_dialog_medicine_insertion_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./create-prescription/medicine-dialog/medicine-insertion-dialog-component */ "./src/app/create-prescription/medicine-dialog/medicine-insertion-dialog-component.ts");
/* harmony import */ var _treatment_plan_treatment_plan_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./treatment-plan/treatment-plan.component */ "./src/app/treatment-plan/treatment-plan.component.ts");
/* harmony import */ var _print_print_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./print/print.component */ "./src/app/print/print.component.ts");
/* harmony import */ var _mat_sort_table_mat_sort_table_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mat-sort-table/mat-sort-table.component */ "./src/app/mat-sort-table/mat-sort-table.component.ts");
/* harmony import */ var _print_medium_site_print_medium_site_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./print-medium-site/print-medium-site.component */ "./src/app/print-medium-site/print-medium-site.component.ts");
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
                _create_prescription_medicine_dialog_medicine_insertion_dialog_component__WEBPACK_IMPORTED_MODULE_15__["MedicineInsertionDialog"],
                _treatment_plan_treatment_plan_component__WEBPACK_IMPORTED_MODULE_16__["TreatmentPlanComponent"],
                _print_print_component__WEBPACK_IMPORTED_MODULE_17__["PrintComponent"],
                _mat_sort_table_mat_sort_table_component__WEBPACK_IMPORTED_MODULE_18__["MatSortTableComponent"],
                _print_print_component__WEBPACK_IMPORTED_MODULE_17__["HeaderFooterConfirmationDialog"],
                _print_print_component__WEBPACK_IMPORTED_MODULE_17__["CustomTreatmentPlanDialog"],
                _print_medium_site_print_medium_site_component__WEBPACK_IMPORTED_MODULE_19__["PrintMediumSiteComponent"]
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
            entryComponents: [_snackhelper_snackhelper_component__WEBPACK_IMPORTED_MODULE_12__["SnackhelperComponent"], _create_prescription_create_prescription_component__WEBPACK_IMPORTED_MODULE_13__["DialogToothClinicalfindings"],
                _create_prescription_create_prescription_component__WEBPACK_IMPORTED_MODULE_13__["CustomFeeInsertionDialog"], _create_prescription_medicine_dialog_medicine_insertion_dialog_component__WEBPACK_IMPORTED_MODULE_15__["MedicineInsertionDialog"],
                _print_print_component__WEBPACK_IMPORTED_MODULE_17__["HeaderFooterConfirmationDialog"], _print_print_component__WEBPACK_IMPORTED_MODULE_17__["CustomTreatmentPlanDialog"]
            ]
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

module.exports = ".example-stretched-tabs {\r\n  max-width: 1000px;\r\n}\r\n.example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n.example-card-parent {\r\n  /* max-width: 800px; */\r\n  min-width: 50px;\r\n  margin-left: 50px;\r\n  margin-top: 30px;\r\n  width : 100%;\r\n}\r\n.example-loading-shade {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 56px;\r\n  right: 0;\r\n  background: rgba(0, 0, 0, 0.15);\r\n  z-index: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.example-card {\r\n  /* max-width: 800px; */\r\n  min-width: 50px;\r\n  margin: 30px;\r\n  /* width : 100%; */\r\n}\r\n.expansion-margin {\r\n  max-width: 500px;\r\n  margin-left: 150px;\r\n  margin-top: 30px;\r\n}\r\n.example-section {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n  height: 60px;\r\n}\r\n.example-margin {\r\n  /* margin: 0 10px; */\r\n  margin-top: 20px;\r\n  margin-left : 10px;\r\n  margin-right: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n.mat-radio-button ~ .mat-radio-button {\r\n  padding: 36px;\r\n}\r\ntable {\r\n  width: 100%;\r\n}\r\ntr.example-detail-row {\r\n  height: 0;\r\n}\r\ntr.example-element-row:not(.example-expanded-row):hover {\r\n  background: #f5f5f5;\r\n}\r\ntr.example-element-row:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n.example-element-row td {\r\n  border-bottom-width: 0;\r\n}\r\n.example-element-detail {\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n.example-element-diagram {\r\n  min-width: 80px;\r\n  border: 2px solid black;\r\n  padding: 8px;\r\n  font-weight: lighter;\r\n  margin: 8px 0;\r\n  height: 104px;\r\n}\r\n.example-element-symbol {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  line-height: normal;\r\n}\r\n.example-element-description {\r\n  padding: 16px;\r\n}\r\n/* .example-element-description-attribution {\r\n  opacity: 0.5;\r\n} */\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n.example-half-width{\r\n  width : 50%;\r\n}\r\n.example-grid-margin{\r\n  margin-top: 20px;\r\n  margin-bottom: 10px;\r\n  margin-right: 50px;\r\n}\r\n.rcorners2 {\r\n  border-radius: 25px;\r\n  border: 2px solid #73AD21;\r\n  padding-left: 4px; \r\n  /* width: 200px;\r\n  height: 150px;     */\r\n  margin-left: 4px;\r\n  margin-right: 4px;\r\n}\r\n/* label > input{ HIDE RADIO \r\n  visibility: hidden; Makes input not-clickable\r\n  position: absolute; Remove input from document flow\r\n}\r\nlabel > input { IMAGE STYLES\r\n  cursor:pointer;\r\n  border:2px solid transparent;\r\n}\r\nlabel > input:checked { (RADIO CHECKED) IMAGE STYLES\r\n  border:20px solid #f00;\r\n} */\r\n/* Fees table properties */\r\ntable {\r\n  width: 100%;\r\n}\r\ntr.mat-footer-row {\r\n  font-weight: bold;\r\n}\r\n.mat-table-sticky {\r\n  border-top: 1px solid #e0e0e0;\r\n}\r\n/* .icon-search {\r\n  background: url(\"../images/search.svg\");\r\n  height: 27px;\r\n  width: 22px;\r\n  display: block;\r\n}\r\n.icon-refresh {\r\n  background: url(\"../images/refresh.svg\");\r\n  height: 27px;\r\n  width: 22px;\r\n  display: block;\r\n}\r\n.icon-print {\r\n  background: url(\"../images/print.svg\");\r\n  height: 27px;\r\n  width: 22px;\r\n  display: block;\r\n}\r\n.icon-add-fee {\r\n  background: url(\"../images/icons8-plus.svg\");\r\n  height: 27px;\r\n  width: 27px;\r\n  display: block;\r\n}\r\n.svg-icon{\r\n  margin: 5px auto auto;\r\n  padding: 0;\r\n  display: inline-block;\r\n  background-repeat: no-repeat no-repeat;\r\n  pointer-events: none;\r\n} */\r\n.md-button.logo {\r\n  height: 7rem;\r\n  width: 7rem;\r\n}\r\n.logo-image {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n/* Putting table headers in center */\r\n/* mat-cell{\r\n  display:flex !important;\r\n  justify-content:center!important;\r\n  \r\n}\r\n\r\nmat-header-cell {\r\n  display:flex;\r\n  justify-content:center;\r\n  text-align: center;\r\n} */\r\n.fab {\r\n  position: fixed;\r\n  bottom: 30px;\r\n  right: 30px;\r\n}"

/***/ }),

/***/ "./src/app/create-prescription/create-prescription.component.html":
/*!************************************************************************!*\
  !*** ./src/app/create-prescription/create-prescription.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Section to create presciption -->\r\n<mat-card class=\"example-card-parent\">\r\n\r\n  <mat-tab-group [selectedIndex]=\"prescriptionFromControl.value\" (selectedIndexChange)=\"prescriptionFromControl.setValue($event)\"\r\n    (selectedTabChange)=\"loadTabSpecificData($event.index)\" mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4\">\r\n    <mat-tab label=\"Basic Info\">\r\n      <mat-card class=\"example-card\">\r\n        <mat-card-content>\r\n          <table>\r\n            <tr>\r\n              <td>\r\n                <i>Search by Patient details</i>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <!-- First Name -->\r\n                <div class=\"example-container example-margin\">\r\n                  <mat-form-field hintLabel=\"Min {{minCharToSearch}} char to search\">\r\n                    <input matInput cdkFocusInitial maxlength=20 placeholder=\"First name\" [(ngModel)]=\"selectedPatient.firstName\"\r\n                      (keyup)='fetchPatient($event)'>\r\n                    <mat-hint align=\"end\">{{selectedPatient.firstName?.length || 0}}/20</mat-hint>\r\n                  </mat-form-field>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <!-- Last Name -->\r\n                <div class=\"example-container example-margin\">\r\n                  <mat-form-field hintLabel=\"Min {{minCharToSearch}} char to search\">\r\n                    <input matInput maxlength=20 placeholder=\"Last name\" [(ngModel)]=\"selectedPatient.lastName\" (keyup)='fetchPatient($event)'>\r\n                    <mat-hint align=\"end\">{{selectedPatient.lastName?.length || 0}}/20</mat-hint>\r\n                  </mat-form-field>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <!-- Date of birth -->\r\n                <div class=\"example-container example-margin\">\r\n                  <mat-form-field>\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Select from calender\" (dateChange)=\"dateValidate($event)\"\r\n                      disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <!-- Search patients -->\r\n                <div class=\"example-margin\">\r\n                  <button mat-mini-fab color=\"primary\" (click)=\"fetchPatient($event)\" matTooltip=\"Search\">\r\n                    <mat-icon aria-label=\"Search\">search</mat-icon>\r\n                  </button>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <!-- Reset all details -->\r\n                <div class=\"example-margin\">\r\n                  <button mat-mini-fab color=\"primary\" (click)=\"refreshSearch()\" matTooltip=\"Refresh\">\r\n                    <mat-icon aria-label=\"Refresh\">refresh</mat-icon>\r\n                  </button>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <mat-divider></mat-divider>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <i>Search by Prescription number</i>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <!-- Prescription id -->\r\n                <div class=\"example-container example-margin\">\r\n                  <mat-form-field>\r\n                    <input matInput maxlength=20 placeholder=\"Enter Prescription ID\" [(ngModel)]=\"prescriptionId\">\r\n                    <mat-hint align=\"end\">Enter in number</mat-hint>\r\n                  </mat-form-field>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <div class=\"example-margin\">\r\n                  <button mat-mini-fab color=\"primary\" (click)=\"searchPrescription()\" matTooltip=\"Search\">\r\n                    <mat-icon aria-label=\"Search\">pageview</mat-icon>\r\n                  </button>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n          <!-- Loading progressbar -->\r\n          <mat-progress-bar *ngIf=\"isPatientLoading\" color=\"color\" mode=\"indeterminate\"></mat-progress-bar>\r\n          <!-- Patient list -->\r\n          <div *ngIf=\"isPatientLoaded\">\r\n            <table mat-table [dataSource]=\"patientDataSource\" multiTemplateDataRows class=\"mat-elevation-z8\">\r\n              <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of columnsToDisplay\">\r\n                <th mat-header-cell *matHeaderCellDef> {{column}} </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\r\n              </ng-container>\r\n\r\n              <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\r\n              <ng-container matColumnDef=\"expandedDetail\">\r\n                <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\r\n                  <div class=\"example-element-detail\" [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\r\n                    <!-- <div class=\"example-element-diagram\">\r\n                      <div class=\"example-element-position\"> {{element.firstName}} </div>\r\n                      <div class=\"example-element-symbol\"> {{element.lastName}} </div>\r\n                      <div class=\"example-element-name\"> {{element.age}} </div>\r\n                      <div class=\"example-element-weight\"> {{element.contactNo1}} </div>\r\n                      <span>Image placeholder</span>\r\n                    </div> --> \r\n                    <div class=\"example-element-description\">\r\n                      <p>\r\n                        {{element.address1}}\r\n                      </p>\r\n                      <p>\r\n                        {{element.address2}}\r\n                      </p>\r\n                      <p>\r\n                        <!-- <span class=\"example-element-description-attribution\"> -- Wikipedia </span> -->\r\n                        <button mat-raised-button color=\"primary\" (click)=\"selectedElement(expandedElement)\">\r\n                          Select <mat-icon aria-label=\"Select\">check_circle_outline</mat-icon>\r\n                        </button>\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </ng-container>\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\r\n              <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\" class=\"example-element-row\"\r\n                [class.example-expanded-row]=\"expandedElement === element\" (mouseenter)=\"mouseOverFn(element)\">\r\n                <!-- (mouseout)=\"mouseOutFn(expandedElement)\" -->\r\n              </tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\r\n            </table>\r\n          </div>\r\n        </mat-card-content>\r\n        <!-- <mat-card-actions>\r\n          <button mat-button>LIKE</button>\r\n          <button mat-button>SHARE</button>\r\n        </mat-card-actions> -->\r\n      </mat-card>\r\n\r\n    </mat-tab>\r\n\r\n    <!-- \r\n      *******************************************************************************************\r\n      *******************************************************************************************\r\n      ********************************* History Section *****************************************\r\n      *******************************************************************************************\r\n      *******************************************************************************************\r\n     -->\r\n\r\n    <mat-tab label=\"History\" [disabled]=\"disableTabs\">\r\n\r\n      <!-- Dashboard view -->\r\n      <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\r\n        <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>    \r\n      </div>  \r\n      \r\n        <table mat-table [dataSource]=\"dashboardDataSource\" class=\"mat-elevation-z8\"\r\n          matSort matSortActive=\"Date\" matSortDisableClear matSortDirection=\"desc\">\r\n\r\n          <!-- ['Date','C/F', 'Treatment Plan', 'Treatment Done', 'Due', 'Next Appo'] -->\r\n          <ng-container matColumnDef=\"Date\">\r\n            <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Date </th>\r\n            <td mat-cell *matCellDef=\"let dv\"> {{ dv.pHistory.tsCreated | date:'dd/MM/yy hh:mm a' }}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"C/F\">\r\n            <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> C/F </th>\r\n            <td mat-cell *matCellDef=\"let dv\">\r\n              <!--  {{ dv.pHistory.clinicalFindings }} getOrderedClinicalFindings -->\r\n              <ul>\r\n                <li style=\"list-style: none;\" *ngFor=\"let cf of getOrderedClinicalFindings(dv.pHistory.clinicalFindings)\">{{\r\n                  cf }}</li>\r\n              </ul>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"Treatment Plan\">\r\n            <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Treatment Plan </th>\r\n            <td mat-cell *matCellDef=\"let dv; let i = index;\">\r\n              <ul>\r\n                <li style=\"list-style: none;\" *ngFor=\"let tpv of dv.tphv\">{{ tpv.tname }} - {{ tpv.toothIndex }}</li>\r\n              </ul>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"Treatment Done\">\r\n            <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Treatment Done </th>\r\n            <td mat-cell *matCellDef=\"let dv; let i = index;\">\r\n              <ul>\r\n                <li style=\"list-style: none;\" *ngFor=\"let tph of getTreatmentDoneHistoryView(dv.tphv)\">{{ tph.tname }}</li>\r\n              </ul>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"Due\">\r\n            <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Due </th>\r\n            <td mat-cell *matCellDef=\"let dv; let i = index;\" style=\"color:red\">\r\n              {{ getDueFee(dv.fbl) }}\r\n              <!-- <ul >\r\n                <li style=\"list-style: none;\" *ngFor=\"let fb of dv.fbl\">{{ fb.amount }}</li>\r\n              </ul>    -->\r\n            </td>\r\n          </ng-container>\r\n\r\n          <!-- Next Appo -->\r\n          <ng-container matColumnDef=\"Next Appo\">\r\n            <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Next Appo </th>\r\n            <td mat-cell *matCellDef=\"let dv; let i = index;\">\r\n              {{ dv.pHistory.nextAppointment | date:'dd/MM/yy hh:mm a' }}\r\n            </td>\r\n          </ng-container>\r\n\r\n          <!-- Action -->\r\n          <ng-container matColumnDef=\"Action\">\r\n            <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Action </th>\r\n            <td mat-cell *matCellDef=\"let dv; let i = index;\">\r\n              <button class=\"example-margin\" mat-mini-fab color=\"primary\" (click)=\"printPrescriptionFromDash(dv.pHistory.prescriptionId)\" matTooltip=\"Print\">\r\n                <mat-icon aria-label=\"Print\">local_printshop</mat-icon>\r\n              </button>\r\n              <button class=\"example-margin\" mat-mini-fab color=\"primary\" (click)=\"selectPrescription(dv)\" matTooltip=\"Select\">\r\n                <mat-icon aria-label=\"Select\">forward</mat-icon>\r\n              </button>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <tr mat-header-row *matHeaderRowDef=\"dashboardHistoryListColumns\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: dashboardHistoryListColumns;\"></tr>\r\n        </table>\r\n        <mat-paginator [length]=\"resultsLength\" [pageSize]=\"3\"></mat-paginator>\r\n    \r\n    </mat-tab>\r\n\r\n    <!-- \r\n      *******************************************************************************************\r\n      *******************************************************************************************\r\n      ********************************* Prescription Section ************************************\r\n      *******************************************************************************************\r\n      *******************************************************************************************\r\n     -->\r\n    <mat-tab label=\"Prescription\" [disabled]=\"disableTabs\">\r\n      <mat-card id=\"printableContent1\" class=\"example-card\">\r\n        <mat-card-content>\r\n          <div class=\"fab\">\r\n            <button mat-fab color=\"primary\" (click)=\"resetPrescriptionData()\" matTooltip=\"Reset\">\r\n              <mat-icon aria-label=\"Reset\">restore</mat-icon>\r\n            </button>\r\n          </div>\r\n          <mat-form-field class=\"example-full-width\">\r\n            <textarea matInput [disabled]=\"checkIfDisabledToModify()\" placeholder=\"Chief complaint\" [(ngModel)]=\"prescriptionHistoryView.chiefComplaint\"\r\n              cdkTextareaAutosize cdkAutosizeMinRows=\"1\" cdkAutosizeMaxRows=\"5\"></textarea>\r\n            <button mat-button *ngIf=\"prescriptionHistoryView.chiefComplaint\" matSuffix mat-icon-button aria-label=\"Clear\"\r\n              (click)=\"prescriptionHistoryView.chiefComplaint=''\" matToolTip=\"Clear\" [disabled]=\"checkIfDisabledToModify()\">\r\n              <mat-icon>close</mat-icon>\r\n            </button>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n            <!-- <button mat-button matPrefix mat-icon-button aria-label=\"Add\" (click)=\"openDialog()\" matToolTip=\"Add\" \r\n              [disabled]=\"checkIfDisabledToModify()\">\r\n              <mat-icon>add_circle_outline</mat-icon>\r\n            </button> -->\r\n            <!-- <textarea matInput placeholder=\"Chief findings\" disabled [(ngModel)]=\"clinicalFindingsView\" cdkTextareaAutosize\r\n              cdkAutosizeMinRows=\"1\" cdkAutosizeMaxRows=\"5\"></textarea> -->\r\n            <mat-chip-list #chipList1>\r\n              <mat-chip *ngFor=\"let s of clinicalFindingsViewForUi\" selectable=\"false\" removable=\"false\">\r\n                {{s}}\r\n              </mat-chip>\r\n              <input (click)=\"openClinicalFindingToothMappingDialog()\" (keydown)=\"openClinicalFindingToothMappingDialog()\" placeholder=\"Add C/F\" [matChipInputFor]=\"chipList1\"\r\n                matChipInputAddOnBlur=\"true\" [disabled]=\"checkIfDisabledToModify()\">\r\n            </mat-chip-list>\r\n          </mat-form-field>\r\n\r\n          <table>\r\n            <tr>\r\n              <td>\r\n                <!-- Medical History -->\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <mat-select placeholder=\"Medical History\" [formControl]=\"medicalHistoryForm\" [(ngModel)]=\"medicalHistoryViewModel\"\r\n                    multiple class=\"example-full-width\" [disabled]=\"checkIfDisabledToModify()\">\r\n                    <mat-option *ngFor=\"let mh of mhList\" [value]=\"mh\">{{mh}}</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <!-- Loading progressbar -->\r\n                <mat-progress-bar *ngIf=\"mhList == null || mhList?.length <= 0\" color=\"color\" mode=\"indeterminate\"></mat-progress-bar>\r\n              </td>\r\n              <td>\r\n                <!-- Investigation -->\r\n                <mat-form-field hintLabel=\"Max 30 characters\" class=\"example-full-width\">\r\n                  <input matInput [maxlength]=\"30\" placeholder=\"Investigation\" [(ngModel)]=\"prescriptionHistoryView.investigation\"\r\n                    [disabled]=\"checkIfDisabledToModify()\">\r\n                  <mat-hint align=\"end\">{{prescriptionHistoryView.investigation?.length || 0}}/30</mat-hint>\r\n                </mat-form-field>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n\r\n          <!-- provisionalDiagnosis -->\r\n          <mat-form-field class=\"example-full-width\">\r\n            <textarea matInput placeholder=\"Provisional diagnosis\" [(ngModel)]=\"prescriptionHistoryView.provisionalDiagnosis\"\r\n              cdkTextareaAutosize cdkAutosizeMinRows=\"1\" cdkAutosizeMaxRows=\"5\" [disabled]=\"checkIfDisabledToModify()\"></textarea>\r\n            <button mat-button *ngIf=\"prescriptionHistoryView.provisionalDiagnosis\" matSuffix mat-icon-button\r\n              aria-label=\"Clear\" (click)=\"prescriptionHistoryView.provisionalDiagnosis=''\" matToolTip=\"Clear\"\r\n              [disabled]=\"checkIfDisabledToModify()\">\r\n              <mat-icon>close</mat-icon>\r\n            </button>\r\n          </mat-form-field>\r\n\r\n          <!-- Treatment Plan -->\r\n          <!-- <mat-form-field class=\"example-full-width\">\r\n            <mat-chip-list #chipListtrtmnt>\r\n              <mat-chip *ngFor=\"let s of treatmentPlanListView\" selectable=\"true\" removable=\"true\" (removed)=\"removeChip(s,1)\">\r\n                {{s}}\r\n                <mat-icon matChipRemove>cancel</mat-icon>\r\n              </mat-chip>\r\n              <input placeholder=\"Treatment Plan\" [matChipInputFor]=\"chipListtrtmnt\" matChipInputAddOnBlur=\"true\"\r\n                (matChipInputTokenEnd)=\"addTreatmentPlan($event)\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\">\r\n            </mat-chip-list>\r\n          </mat-form-field> -->\r\n\r\n          <!-- Treatment plan -->\r\n          <span class=\"example-margin\">Advised Treatment plan</span>\r\n          <div *ngIf=\"cftMapArray && cftMapArray.length > 0\">\r\n            <table mat-table [dataSource]=\"trtmntPlanListDataSource\" class=\"mat-elevation-z8\">\r\n\r\n              <ng-container matColumnDef=\"cf\">\r\n                <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> C/F </th>\r\n                <td mat-cell *matCellDef=\"let cftMap\"> {{cftMap.clinicalFinding.fname}} </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"teeth\">\r\n                <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Tooth </th>\r\n                <td mat-cell *matCellDef=\"let cftMap\"> {{cftMap.teeth.toothIndex}}\r\n                </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"plan\">\r\n                <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Plan </th>\r\n                <td mat-cell *matCellDef=\"let cftMap; let i = index;\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <div *ngIf=\"!checkIfDisabledToModify()\">\r\n                      <mat-select placeholder=\"Select Treatment Plan\" [formControl]=\"treatmentPlanFormControl\" class=\"example-full-width\"\r\n                        (selectionChange)=\"updateTrtmntPlanSelect($event.value, i)\" [disabled]=\"checkIfDisabledToModify()\">\r\n                        <!-- [(value)] = cftMap.treatmentPlanName -->\r\n                        <mat-option *ngFor=\"let tpl of treatmentPlanList\" [value]=\"tpl.trtName\">{{tpl.trtName}}</mat-option>\r\n                      </mat-select>\r\n                    </div>\r\n                    <div *ngIf=\"checkIfDisabledToModify()\">\r\n                      <textarea matInput placeholder=\"Treatment Plans\" cdkTextareaAutosize cdkAutosizeMinRows=\"1\"\r\n                        cdkAutosizeMaxRows=\"5\" disabled>{{cftMap.treatmentPlanViewModel}}</textarea>\r\n                    </div>\r\n                  </mat-form-field>\r\n                </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"newPlan\">\r\n                <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> New Plan </th>\r\n                <td mat-cell *matCellDef=\"let cftMap; let i = index;\">\r\n                  <input class=\"example-full-width\" style=\"text-align:center\" *ngIf=\"cftMap.customTrtmntPlan\" matInput\r\n                    placeholder=\"Custom plan\" (input)=\"updateTrtmntPlanI($event.target.value, i)\" required [disabled]=\"checkIfDisabledToModify()\">\r\n                </td>\r\n              </ng-container>\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"trtmntPlanListViewColumns\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: trtmntPlanListViewColumns;\"></tr>\r\n            </table>\r\n          </div>\r\n\r\n          <!-- advice -->\r\n          <mat-form-field class=\"example-full-width example-grid-margin\">\r\n            <textarea matInput placeholder=\"Advice\" [(ngModel)]=\"prescriptionHistoryView.advice\" cdkTextareaAutosize\r\n              cdkAutosizeMinRows=\"1\" cdkAutosizeMaxRows=\"5\" [disabled]=\"checkIfDisabledToModify()\"></textarea>\r\n            <button mat-button *ngIf=\"prescriptionHistoryView.advice\" matSuffix mat-icon-button aria-label=\"Clear\"\r\n              (click)=\"prescriptionHistoryView.advice=''\" matToolTip=\"Clear\" [disabled]=\"checkIfDisabledToModify()\">\r\n              <mat-icon>close</mat-icon>\r\n            </button>\r\n          </mat-form-field>\r\n\r\n          <!-- Medicine -->\r\n          <!-- <mat-form-field class=\"example-full-width\">\r\n            <mat-select placeholder=\"Add Medicine\" [formControl]=\"medicineForm\" multiple class=\"example-full-width\">\r\n              <mat-option *ngFor=\"let mh of medicineMasterViewList\" [value]=\"mh\">{{mh.medicineName}} {{mh.dosage}}</mat-option>\r\n            </mat-select>\r\n          </mat-form-field> -->\r\n          <div class=\"example-margin\" align=\"right\">\r\n            <span>Add Medicine</span>\r\n            <button mat-icon-button color=\"primary\" (click)=\"openMedicineInsertionDialog()\">\r\n              <mat-icon aria-label=\"\">add_circle</mat-icon>\r\n            </button>\r\n          </div>\r\n\r\n          <!-- Medicines Preview -->\r\n          <div *ngIf=\"medicineHistoryViewModel\">\r\n            <mat-form-field class=\"example-full-width example-grid-margin\">\r\n              <textarea matInput placeholder=\"Medicines\" [(ngModel)]=\"medicineHistoryViewModel\"\r\n                cdkTextareaAutosize cdkAutosizeMinRows=\"1\" cdkAutosizeMaxRows=\"5\" [disabled]=\"checkIfDisabledToModify()\">\r\n              </textarea>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <!-- Next appointment -->\r\n          <table>\r\n            <tr>\r\n              <td>\r\n                <span>Next appo</span>\r\n              </td>\r\n              <td class=\"example-full-width\">\r\n                <mat-form-field>\r\n                  <input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"nextAppoPicker\" placeholder=\"Date\"\r\n                    (dateChange)=\"createNextAppo($event)\">\r\n                  <!-- <mat-datepicker-toggle matSuffix [for]=\"nextAppoPicker\"></mat-datepicker-toggle> -->\r\n                  <mat-datepicker #nextAppoPicker></mat-datepicker>\r\n                </mat-form-field>\r\n                <button mat-raised-button (click)=\"nextAppoPicker.open()\">Choose Date</button>\r\n              </td>\r\n              <td class=\"example-full-width\">\r\n                <mat-form-field hintLabel=\"Enter in digits\">\r\n                  <input matInput maxlength=\"2\" type=\"number\" min=0 max=24 placeholder=\"Hour\" [(ngModel)]=\"nextAppoHour\"\r\n                    (change)=\"createNextAppoTime()\">\r\n                </mat-form-field>\r\n              </td>\r\n              <td class=\"example-full-width\">\r\n                <mat-form-field hintLabel=\"Enter in digits\">\r\n                  <input matInput maxlength=\"2\" type=\"number\" min=0 max=59 placeholder=\"Minute\" [(ngModel)]=\"nextAppoMinute\"\r\n                    (change)=\"createNextAppoTime()\">\r\n                </mat-form-field>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n\r\n          <div>\r\n            <div class=\"example-margin\" align=\"right\">\r\n              <span>Add Fee</span>\r\n              <button mat-icon-button color=\"primary\" (click)=\"addCustomFee()\">\r\n                <mat-icon aria-label=\"\">add_circle</mat-icon>\r\n              </button>\r\n            </div>\r\n            <div *ngIf=\"feesConfigListView && feesConfigListView.length > 0\">\r\n              <table mat-table [dataSource]=\"feesConfigListDataSource\" class=\"mat-elevation-z8\">\r\n                <!-- column list -->\r\n                <!-- Id Column -->\r\n                <ng-container matColumnDef=\"treatmentPlanId\">\r\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> # </th>\r\n                  <td mat-cell *matCellDef=\"let fee\"> {{fee.treatmentPlanId}} </td>\r\n                  <td mat-footer-cell *matFooterCellDef> </td>\r\n                </ng-container>\r\n\r\n                <!-- baseFee Column -->\r\n                <ng-container matColumnDef=\"baseFee\">\r\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Base </th>\r\n                  <td mat-cell *matCellDef=\"let fee\"> {{fee.baseFee}} </td>\r\n                  <td mat-footer-cell *matFooterCellDef> </td>\r\n                </ng-container>\r\n\r\n                <!-- ageGroupId Column -->\r\n                <ng-container matColumnDef=\"ageGroupId\">\r\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> AgeGrp </th>\r\n                  <td mat-cell *matCellDef=\"let fee\"> {{fee.ageGroupId}} </td>\r\n                  <td mat-footer-cell *matFooterCellDef> </td>\r\n                </ng-container>\r\n\r\n                <!-- ageGroupPercent Column -->\r\n                <ng-container matColumnDef=\"ageGroupPercent\">\r\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> % </th>\r\n                  <td mat-cell *matCellDef=\"let fee\"> {{fee.ageGroupPercent}} </td>\r\n                  <td mat-footer-cell *matFooterCellDef> </td>\r\n                </ng-container>\r\n\r\n                <!-- toothGroupId Column -->\r\n                <ng-container matColumnDef=\"toothGroupId\">\r\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> ToothGrp </th>\r\n                  <td mat-cell *matCellDef=\"let fee\" style=\"text-align:center\"> {{fee.toothGroupId}} </td>\r\n                  <td mat-footer-cell *matFooterCellDef> </td>\r\n                </ng-container>\r\n\r\n                <!-- toothGroupPercent Column -->\r\n                <ng-container matColumnDef=\"toothGroupPercent\">\r\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> % </th>\r\n                  <td mat-cell *matCellDef=\"let fee\"> {{fee.toothGroupPercent}} </td>\r\n                  <td mat-footer-cell *matFooterCellDef> </td>\r\n                </ng-container>\r\n\r\n                <!-- totalFee Column -->\r\n                <ng-container matColumnDef=\"totalFee\">\r\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Fee </th>\r\n                  <td mat-cell *matCellDef=\"let fee\">\r\n                    <mat-form-field>\r\n                      <input matInput type=\"number\" min=1 [(ngModel)]=\"fee.totalFee\" (change)=\"getTotalFee()\" style=\"text-align:center\"\r\n                        [disabled]=\"checkIfDisabledToModify()\">\r\n                    </mat-form-field>\r\n                  </td>\r\n                  <td mat-footer-cell *matFooterCellDef> Total {{totalFees | currency:'&#8377;' }}</td>\r\n                </ng-container>\r\n\r\n                <!-- amountPaid Column -->\r\n                <ng-container matColumnDef=\"amountPaid\">\r\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Paid </th>\r\n                  <td mat-cell *matCellDef=\"let fee\">\r\n                    <mat-form-field>\r\n                      <input matInput type=\"number\" min=1 [(ngModel)]=\"fee.amountPaid\" (change)=\"getTotalFee()\" style=\"text-align:center\">\r\n                    </mat-form-field>\r\n                  </td>\r\n                  <td mat-footer-cell *matFooterCellDef> Paid {{totalPaidFees | currency:'&#8377;' }}</td>\r\n                </ng-container>\r\n\r\n                <!-- notes Column -->\r\n                <ng-container matColumnDef=\"notes\">\r\n                  <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Note </th>\r\n                  <td mat-cell *matCellDef=\"let fee\">\r\n                    <mat-form-field>\r\n                      <input matInput [(ngModel)]=\"fee.notes\" style=\"text-align:center\">\r\n                    </mat-form-field>\r\n                    <button mat-button matSuffix mat-icon-button aria-label=\"Remove\" (click)=\"removeFees($index)\"\r\n                      matToolTip=\"Remove\" [disabled]=\"checkIfDisabledToModify()\">\r\n                      <mat-icon>close</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                  <td mat-footer-cell *matFooterCellDef style=\"color: red;\"> Due {{totalDueFees | currency:'&#8377;' }}\r\n                  </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"feesConfigListViewColumns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: feesConfigListViewColumns;\"></tr>\r\n                <tr mat-footer-row *matFooterRowDef=\"feesConfigListViewColumns; sticky: true\"></tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Note -->\r\n          <div class=\"example-margin\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <textarea matInput placeholder=\"Notes\" [(ngModel)]=\"prescriptionHistoryView.note\" cdkTextareaAutosize\r\n                cdkAutosizeMinRows=\"1\" cdkAutosizeMaxRows=\"5\" [disabled]=\"checkIfDisabledToModify()\"></textarea>\r\n              <button mat-button *ngIf=\"prescriptionHistoryView.note\" matSuffix mat-icon-button aria-label=\"Clear\"\r\n                (click)=\"prescriptionHistoryView.note=''\" matToolTip=\"Clear\" [disabled]=\"checkIfDisabledToModify()\">\r\n                <mat-icon>close</mat-icon>\r\n              </button>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <!-- Printable notes -->\r\n          <div class=\"example-margin\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <textarea matInput placeholder=\"Notes to be printed\" [(ngModel)]=\"prescriptionHistoryView.printableNotes\"\r\n                cdkTextareaAutosize cdkAutosizeMinRows=\"1\" cdkAutosizeMaxRows=\"5\"></textarea>\r\n              <button mat-button *ngIf=\"prescriptionHistoryView.printableNotes\" matSuffix mat-icon-button aria-label=\"Clear\"\r\n                (click)=\"prescriptionHistoryView.printableNotes=''\" matToolTip=\"Clear\">\r\n                <mat-icon>close</mat-icon>\r\n              </button>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div>\r\n            <a>Save Prescription </a>\r\n            <button class=\"example-margin\" mat-mini-fab color=\"primary\" (click)=\"createAndSubmitPrescription()\" matTooltip=\"Upload\">\r\n              <mat-icon aria-label=\"Upload\">cloud_upload</mat-icon>\r\n            </button>\r\n          \r\n            <a>      Print Prescription </a>\r\n            <button class=\"example-margin\" mat-mini-fab color=\"primary\" (click)=\"printPrescription()\" matTooltip=\"Print\" [disabled]=\"!checkIfDisabledToModify()\">\r\n              <mat-icon aria-label=\"Print\">local_printshop</mat-icon>\r\n            </button>\r\n          </div>\r\n\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-tab>\r\n\r\n    <!-- \r\n  /************************************************************************************************************\r\n   ************************************************************************************************************\r\n   *************************************** Treatment Plan Section *********************************************\r\n   ************************************************************************************************************\r\n   ************************************************************************************************************\r\n   */\r\n     -->\r\n\r\n    <mat-tab label=\"Treatment Done\" [disabled]=\"disableTreatmentDoneTab\">\r\n      <mat-card class=\"example-card\">\r\n        <mat-card-content>\r\n          <!-- Treatment Done -->\r\n          <!-- this.treatmentTabPatientId = dashboardResponse.patientId\r\n            this.treatmentTabPrescriptionId = dashboardResponse.prescriptionId\r\n            this.treatmentTabTreatmentPlanHistoryViews -->\r\n          <!-- <app-treatment-plan \r\n              [treatmentTabPatientId] = \"treatmentTabPatientId\"\r\n              [treatmentTabPrescriptionId] = \"treatmentTabPrescriptionId\"\r\n              [treatmentTabTreatmentPlanHistoryViews] = \"treatmentTabTreatmentPlanHistoryViews\"\r\n            >Loading..</app-treatment-plan> -->\r\n          <app-treatment-plan>Loading..</app-treatment-plan>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-tab>\r\n\r\n  </mat-tab-group>\r\n\r\n</mat-card>"

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_commonservice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/commonservice.service */ "./src/app/services/commonservice.service.ts");
/* harmony import */ var _services_treatment_plan_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/treatment-plan.service */ "./src/app/services/treatment-plan.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _services_event_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/event-service.service */ "./src/app/services/event-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _medicine_dialog_medicine_insertion_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./medicine-dialog/medicine-insertion-dialog-component */ "./src/app/create-prescription/medicine-dialog/medicine-insertion-dialog-component.ts");
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
        this.dashboardHistoryListColumns = ['Date', 'C/F', 'Treatment Plan', 'Treatment Done', 'Due', 'Next Appo', 'Action'];
        // @ViewChild(MatSort) sort: MatSort;
        this.resultsLength = 0;
        this.isLoadingResults = false;
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
        this.trtmntPlanListDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableDataSource"]();
        this.trtmntPlanListViewColumns = ['cf', 'teeth', 'plan', 'newPlan'];
    }
    CreatePrescriptionComponent.prototype.ngOnInit = function () {
        this.initializeValiables();
        // this.commonService = new CommonService();
    };
    CreatePrescriptionComponent.prototype.ngAfterViewInit = function () {
        // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
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
        this.dashboardDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableDataSource"]();
        this.medicalHistoryViewModel = [];
        this.clinicalFindingsViewForUi = [];
        this.cftMapArray = [];
        this.treatmentPlanListView = [];
        this.feesConfigListView = [];
        this.feesConfigListDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableDataSource"]();
        this.medicineHistoryViews = [];
        this.medicineHistoryViewModel = '';
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
        // this.httpCom.getDashboardView(patientId).subscribe(
        //   resp => {
        //     if (resp.status === 'SUCCESS' && resp.resp) {
        //       if (resp.resp && resp.resp.length > 0) {
        //         this.dashboardDataSource = new MatTableDataSource<DashboardView>()
        //         this.dashboardDataSource.data = resp.resp
        //       } else {
        //         this.tabSelection(2)
        //       }
        //     } else {
        //       this.commonService.showErrorSnackBar(this.snackBar, resp.desc, () => { this.tabSelection(2) })
        //       this.tabSelection(2)
        //     }
        //   }
        // )
        var _this = this;
        this.httpCom.getDashboardCount(patientId).subscribe(function (resp) {
            if (resp && resp.status == 'SUCCESS' && resp.resp > 0) {
                _this.resultsLength = resp.resp;
                Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(_this.paginator.page)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function () {
                    _this.isLoadingResults = true;
                    return _this.httpCom.getDashboardPaginatedView(patientId, _this.paginator.pageIndex, 3);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (data) {
                    // Flip flag to show that loading has finished.
                    _this.isLoadingResults = false;
                    if (data) {
                        if (data && data.status == 'SUCCESS') {
                            _this.dashboardDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableDataSource"]();
                            _this.dashboardDataSource.data = data.resp;
                        }
                        else {
                            _this.commonService.showErrorSnackBar(_this.snackBar, data.desc);
                        }
                    }
                    else {
                        _this.commonService.showErrorSnackBar(_this.snackBar);
                    }
                    return data.resp;
                })).subscribe(function (data) {
                    console.log(data);
                });
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
            _this.feesConfigListDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableDataSource"]();
            _this.checkIfDisabledToModify();
        });
    };
    CreatePrescriptionComponent.prototype.getOrderedClinicalFindings = function (cf) {
        if (cf && cf.length > 0)
            return cf.split(',');
    };
    //Prescription Section
    CreatePrescriptionComponent.prototype.openClinicalFindingToothMappingDialog = function () {
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
    CreatePrescriptionComponent.prototype.openMedicineInsertionDialog = function () {
        var _this = this;
        var dialogFeeRef = this.dialog.open(_medicine_dialog_medicine_insertion_dialog_component__WEBPACK_IMPORTED_MODULE_15__["MedicineInsertionDialog"], {
            width: '700px',
            data: this.medicineMasterViewList
        });
        dialogFeeRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result) {
                var medicineHistoryView = result;
                if (medicineHistoryView) {
                    medicineHistoryView.patientId = _this.selectedPatient.pid;
                    medicineHistoryView.prescriptionId = _this.prescriptionId;
                    _this.medicineHistoryViews.push(medicineHistoryView);
                    _this.medicineHistoryViewModel = _this.medicineHistoryViewModel + medicineHistoryView.medicineName + ' ' + medicineHistoryView.dosage + '\n';
                }
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
    // Commenting as no usage found for addMedicine
    //Function for adding custom medicines
    // addMedicine(event: MatChipInputEvent) {
    //   let customMedicineMaster = new MedicineView();
    //   const input = event.input;
    //   let data = event.value;
    //   if ((data || '').trim()) {
    //     let dataParts: string[] = data.split(' -- ');
    //     if (dataParts.length == 2) {
    //       customMedicineMaster.medicineName = dataParts[0];
    //       customMedicineMaster.dosage = dataParts[1];
    //       this.medicineMasterViewList.push(customMedicineMaster);
    //     } else {
    //       console.log('Error medicine format');
    //     }
    //   }
    //   if (input) {
    //     input.value = '';
    //   }
    // }
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
            // this.dashboardView.medhv = []
            // if (this.medicineForm.value && this.medicineForm.value.length > 0) {
            //   this.medicineForm.value.map(m => {
            //     let medh = new MedicineHistoryView()
            //     medh.medicineName = m.medicineName
            //     medh.diseaseCode = m.diseaseCode
            //     medh.diseaseName = m.diseaseName
            //     medh.dosage = m.dosage
            //     medh.patientId = this.selectedPatient.pid
            //     this.dashboardView.medhv.push(medh)
            //   })
            // }
            this.dashboardView.medhv = this.medicineHistoryViews;
            this.dashboardView.pHistory = new _models_models__WEBPACK_IMPORTED_MODULE_1__["PrescriptionHistoryView"]();
            this.dashboardView.pHistory.patientId = this.selectedPatient.pid;
            this.dashboardView.pHistory.prescriptionId = this.prescriptionId;
            this.dashboardView.pHistory.printableNotes = this.prescriptionHistoryView.printableNotes;
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
            // if (this.medicineForm.value && this.medicineForm.value.length > 0) {
            //   this.medicineForm.value.map(m => {
            //     let medh = new MedicineHistoryView()
            //     medh.medicineName = m.medicineName
            //     medh.diseaseCode = m.diseaseCode
            //     medh.diseaseName = m.diseaseName
            //     medh.dosage = m.dosage
            //     medh.patientId = this.selectedPatient.pid
            //     this.dashboardView.medhv.push(medh)
            //   })
            // }
            this.dashboardView.medhv = this.medicineHistoryViews;
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
    CreatePrescriptionComponent.prototype.printPrescriptionFromDash = function (prescriptionId) {
        this.prescriptionId = prescriptionId;
        this.isDisabledToModify = true;
        this.printPrescription();
    };
    CreatePrescriptionComponent.prototype.printPrescription = function () {
        // console.log('Patient ID' + this.selectedPatient.pid)
        // console.log('Prescription ID' + this.prescriptionId)
        if (this.dashboardResponse && this.dashboardResponse.patientId && this.dashboardResponse.prescriptionId) {
            this.router.navigate(['print'], { queryParams: { patientId: this.dashboardResponse.patientId, prescriptionId: this.dashboardResponse.prescriptionId } });
        }
        else if (this.isDisabledToModify) {
            this.router.navigate(['print'], { queryParams: { patientId: this.selectedPatient.pid, prescriptionId: this.prescriptionId } });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], CreatePrescriptionComponent.prototype, "paginator", void 0);
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
            _services_treatment_plan_service__WEBPACK_IMPORTED_MODULE_11__["TreatmentPlanService"], _services_commonservice_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"],
            _services_event_service_service__WEBPACK_IMPORTED_MODULE_13__["EventServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]])
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
                    _this.cfTextToBeShownOnUi.push(new _services_commonservice_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"]().combineValForStringArray(_this.cfTextToBeShownOnUi, formValue, selectedToothIndexes_1));
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
        this.filteredCfList = this.clinicalFindingForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (value) { return _this._filter(value); }));
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
        this.treatmentPlanDescsObservable = this.treatmentPlanForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (value) { return _this._filter(value); }));
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

/***/ "./src/app/create-prescription/medicine-dialog/medicine-insert.html":
/*!**************************************************************************!*\
  !*** ./src/app/create-prescription/medicine-dialog/medicine-insert.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add Fee</h1>\r\n<div mat-dialog-content>\r\n    <form class=\"example-form\">\r\n        <mat-form-field class=\"example-full-width\">\r\n            <input type=\"text\" matInput placeholder=\"Select Medicine\" [formControl]=\"medicineForm\"\r\n                [matAutocomplete]=\"autoMedicine\">\r\n            <mat-autocomplete autoActiveFirstOption #autoMedicine=\"matAutocomplete\">\r\n                <mat-option *ngFor=\"let medicineName of medicineNameListObservable | async\" [value]=\"medicineName\">\r\n                    {{medicineName}}\r\n                </mat-option>\r\n            </mat-autocomplete>\r\n        </mat-form-field>\r\n    </form>\r\n    <mat-divider></mat-divider>\r\n\r\n    <mat-form-field class=\"example-margin\">\r\n        <input matInput placeholder=\"Repetition\" [(ngModel)]=\"repetition\" style=\"text-align:center\" required>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-margin\">\r\n        <input matInput placeholder=\"Period in days\" [(ngModel)]=\"period\" style=\"text-align:center\" required>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-margin\">\r\n        <input matInput [ngModel]=\"result\" style=\"text-align:center\" disabled>\r\n    </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button (click)=\"onNoClick()\">Close</button>\r\n    <button mat-button (click)=\"generatePreview()\">Check</button>\r\n    <button mat-button (click)=\"closeDialog()\">Done</button>\r\n</div>"

/***/ }),

/***/ "./src/app/create-prescription/medicine-dialog/medicine-insertion-dialog-component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/create-prescription/medicine-dialog/medicine-insertion-dialog-component.ts ***!
  \********************************************************************************************/
/*! exports provided: MedicineInsertionDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicineInsertionDialog", function() { return MedicineInsertionDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/models */ "./src/app/models/models.ts");
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





/**
 * @Input MedicineView List
 * @Output MedicineHistoryView object without patientId and prescriptionId
 */
var MedicineInsertionDialog = /** @class */ (function () {
    function MedicineInsertionDialog(dialogRef, medicineList) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.medicineList = medicineList;
        this.medicineForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.repetition = '';
        this.period = '';
        this.result = '';
        if (medicineList && medicineList.length > 0) {
            this.medicineNameList = [];
            medicineList.forEach(function (meds) {
                _this.medicineNameList.push(meds.medicineName);
            });
        }
    }
    MedicineInsertionDialog.prototype.ngOnInit = function () {
        this.startMedicineFilter();
    };
    MedicineInsertionDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ;
    MedicineInsertionDialog.prototype.generatePreview = function () {
        this.result = this.medicineForm.value + ' ' + this.repetition + ' ' + this.period + ' days';
    };
    MedicineInsertionDialog.prototype.closeDialog = function () {
        if (this.medicineForm && this.medicineForm.value) {
            var medicineHistoryView = new _models_models__WEBPACK_IMPORTED_MODULE_4__["MedicineHistoryView"]();
            medicineHistoryView.medicineName = this.medicineForm.value;
            medicineHistoryView.dosage = this.repetition + ' ' + this.period + ' days';
            var medicineIndex = this.medicineNameList.indexOf(medicineHistoryView.medicineName);
            if (medicineIndex && this.medicineList.length > medicineIndex) {
                medicineHistoryView.medId = this.medicineList[medicineIndex].medicineId;
            }
            this.dialogRef.close(medicineHistoryView);
        }
    };
    MedicineInsertionDialog.prototype.startMedicineFilter = function () {
        var _this = this;
        this.medicineNameListObservable = this.medicineForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (value) { return _this._filter(value); }));
    };
    MedicineInsertionDialog.prototype._filter = function (value) {
        return this.medicineNameList.filter(function (desc) { return desc.toLowerCase().includes(value.toLowerCase()); });
    };
    MedicineInsertionDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'medicine-insert',
            template: __webpack_require__(/*! ./medicine-insert.html */ "./src/app/create-prescription/medicine-dialog/medicine-insert.html"),
            styles: [__webpack_require__(/*! ../create-prescription.component.css */ "./src/app/create-prescription/create-prescription.component.css")],
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Array])
    ], MedicineInsertionDialog);
    return MedicineInsertionDialog;
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
/* harmony import */ var _material_test_material_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material-test/material-test.component */ "./src/app/material-test/material-test.component.ts");
/* harmony import */ var _print_print_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./print/print.component */ "./src/app/print/print.component.ts");
/* harmony import */ var _mat_sort_table_mat_sort_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mat-sort-table/mat-sort-table.component */ "./src/app/mat-sort-table/mat-sort-table.component.ts");
/* harmony import */ var _print_medium_site_print_medium_site_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./print-medium-site/print-medium-site.component */ "./src/app/print-medium-site/print-medium-site.component.ts");
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
    { path: 'print', component: _print_print_component__WEBPACK_IMPORTED_MODULE_5__["PrintComponent"] },
    { path: 'sortTable', component: _mat_sort_table_mat_sort_table_component__WEBPACK_IMPORTED_MODULE_6__["MatSortTableComponent"] },
    { path: 'print-medium-site', component: _print_medium_site_print_medium_site_component__WEBPACK_IMPORTED_MODULE_7__["PrintMediumSiteComponent"] }
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

/***/ "./src/app/mat-sort-table/mat-sort-table.component.css":
/*!*************************************************************!*\
  !*** ./src/app/mat-sort-table/mat-sort-table.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\r\n.example-container {\r\n    position: relative;\r\n    min-height: 200px;\r\n  }\r\n.example-table-container {\r\n    position: relative;\r\n    max-height: 400px;\r\n    overflow: auto;\r\n  }\r\ntable {\r\n    width: 100%;\r\n  }\r\n.example-loading-shade {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 56px;\r\n    right: 0;\r\n    background: rgba(0, 0, 0, 0.15);\r\n    z-index: 1;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n.example-rate-limit-reached {\r\n    color: #980000;\r\n    max-width: 360px;\r\n    text-align: center;\r\n  }\r\n/* Column Widths */\r\n.mat-column-number,\r\n  .mat-column-state {\r\n    max-width: 64px;\r\n  }\r\n.mat-column-created {\r\n    max-width: 124px;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/mat-sort-table/mat-sort-table.component.html":
/*!**************************************************************!*\
  !*** ./src/app/mat-sort-table/mat-sort-table.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\r\n  <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults || isRateLimitReached\">\r\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n    <div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\r\n      GitHub's API rate limit has been reached. It will be reset in one minute.\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"example-table-container\">\r\n\r\n    <!-- <table mat-table [dataSource]=\"data\" class=\"example-table\"\r\n             matSort matSortActive=\"created\" matSortDisableClear matSortDirection=\"desc\">\r\n\r\n        <ng-container matColumnDef=\"number\">\r\n          <th mat-header-cell *matHeaderCellDef>#</th>\r\n          <td mat-cell *matCellDef=\"let row\">{{row.number}}</td>\r\n        </ng-container>\r\n        \r\n        <ng-container matColumnDef=\"title\">\r\n          <th mat-header-cell *matHeaderCellDef>Title</th>\r\n          <td mat-cell *matCellDef=\"let row\">{{row.title}}</td>\r\n        </ng-container>\r\n          \r\n        <ng-container matColumnDef=\"state\">\r\n          <th mat-header-cell *matHeaderCellDef>State</th>\r\n          <td mat-cell *matCellDef=\"let row\">{{row.state}}</td>\r\n        </ng-container>\r\n          \r\n        <ng-container matColumnDef=\"created\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\r\n            Created\r\n          </th>\r\n          <td mat-cell *matCellDef=\"let row\">{{row.created_at | date}}</td>\r\n        </ng-container>\r\n  \r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n      </table> -->\r\n\r\n    <table mat-table [dataSource]=\"dashboardDataSource\" class=\"example-table mat-elevation-z8\"\r\n      matSort matSortActive=\"created\" matSortDisableClear matSortDirection=\"desc\">\r\n\r\n      <!-- ['Date','C/F', 'Treatment Plan', 'Treatment Done', 'Due', 'Next Appo'] -->\r\n      <ng-container matColumnDef=\"Date\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Date </th>\r\n        <td mat-cell *matCellDef=\"let dv\"> {{ dv.pHistory.tsCreated | date:'dd/MM/yy hh:mm a' }}</td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"C/F\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> C/F </th>\r\n        <td mat-cell *matCellDef=\"let dv\">\r\n          <!--  {{ dv.pHistory.clinicalFindings }} getOrderedClinicalFindings -->\r\n          <ul>\r\n            <li style=\"list-style: none;\" *ngFor=\"let cf of getOrderedClinicalFindings(dv.pHistory.clinicalFindings)\">{{\r\n              cf }}</li>\r\n          </ul>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"Treatment Plan\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Treatment Plan </th>\r\n        <td mat-cell *matCellDef=\"let dv; let i = index;\">\r\n          <ul>\r\n            <li style=\"list-style: none;\" *ngFor=\"let tpv of dv.tphv\">{{ tpv.tname }} - {{ tpv.toothIndex }}</li>\r\n          </ul>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"Treatment Done\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Treatment Done </th>\r\n        <td mat-cell *matCellDef=\"let dv; let i = index;\">\r\n          <ul>\r\n            <li style=\"list-style: none;\" *ngFor=\"let tph of getTreatmentDoneHistoryView(dv.tphv)\">{{ tph.tname }}</li>\r\n          </ul>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"Due\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Due </th>\r\n        <td mat-cell *matCellDef=\"let dv; let i = index;\">\r\n          {{ getDueFee(dv.fbl) }}\r\n        </td>\r\n      </ng-container>\r\n\r\n      <!-- Next Appo -->\r\n      <ng-container matColumnDef=\"Next Appo\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"text-align:center\"> Next Appo </th>\r\n        <td mat-cell *matCellDef=\"let dv; let i = index;\">\r\n          {{ dv.pHistory.nextAppointment | date:'dd/MM/yy hh:mm a' }}\r\n        </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"dashboardHistoryListColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: dashboardHistoryListColumns;\" (click)=\"selectPrescription(row)\"></tr>\r\n    </table>\r\n\r\n  </div>\r\n\r\n  <mat-paginator [length]=\"resultsLength\" [pageSize]=\"3\"></mat-paginator>\r\n</div>"

/***/ }),

/***/ "./src/app/mat-sort-table/mat-sort-table.component.ts":
/*!************************************************************!*\
  !*** ./src/app/mat-sort-table/mat-sort-table.component.ts ***!
  \************************************************************/
/*! exports provided: MatSortTableComponent, ExampleHttpDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSortTableComponent", function() { return MatSortTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleHttpDatabase", function() { return ExampleHttpDatabase; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MatSortTableComponent = /** @class */ (function () {
    function MatSortTableComponent(http) {
        this.http = http;
        this.dashboardHistoryListColumns = ['Date', 'C/F', 'Treatment Plan', 'Treatment Done', 'Due', 'Next Appo'];
        this.data = [];
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
    }
    MatSortTableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.exampleDatabase = new ExampleHttpDatabase(this.http);
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            _this.isLoadingResults = true;
            return _this.exampleDatabase.getRepoIssues(
            // this.sort.active, this.sort.direction, this.paginator.pageIndex
            "1", _this.paginator.pageIndex, 3);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            if (data && data.status == 'SUCCESS') {
                // Flip flag to show that loading has finished.
                _this.isLoadingResults = false;
                _this.isRateLimitReached = false;
                _this.data = data.resp;
                _this.dashboardDataSource.data = data.resp;
                _this.resultsLength = _this.data.length;
            }
            return data.resp;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () {
            _this.isLoadingResults = false;
            // Catch if the GitHub API has reached its rate limit. Return empty data.
            _this.isRateLimitReached = true;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        })).subscribe(function (data) { return _this.data = data; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], MatSortTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], MatSortTableComponent.prototype, "sort", void 0);
    MatSortTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mat-sort-table',
            template: __webpack_require__(/*! ./mat-sort-table.component.html */ "./src/app/mat-sort-table/mat-sort-table.component.html"),
            styles: [__webpack_require__(/*! ./mat-sort-table.component.css */ "./src/app/mat-sort-table/mat-sort-table.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], MatSortTableComponent);
    return MatSortTableComponent;
}());

// export interface GithubApi {
//   items: GithubIssue[];
//   total_count: number;
// }
// export interface GithubIssue {
//   created_at: string;
//   number: string;
//   state: string;
//   title: string;
// }
/** An example database that the data source uses to retrieve data for the table. */
var ExampleHttpDatabase = /** @class */ (function () {
    function ExampleHttpDatabase(http) {
        this.http = http;
    }
    ExampleHttpDatabase.prototype.getRepoIssues = function (patientId, page, size) {
        if (patientId === void 0) { patientId = "1"; }
        if (size === void 0) { size = 5; }
        var href = 'http://localhost:12000/my-portal/dashboard/get-dashboard';
        var requestUrl = href + "?patientId=" + patientId + "&page=" + (page + 1) + "&size=" + size;
        return this.http.get(requestUrl);
    };
    return ExampleHttpDatabase;
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

module.exports = "<!-- <form>\n  <input type=\"file\" id=\"selectFile\" name=\"selectFile\" multiple />\n  <input type=\"button\" (click)=\"uploadImage()\" value=\"Upload Image\" /> \n</form> -->\n\n<form>\n  <input id=\"myForm\" type=\"file\" name=\"file\" (change)=\"postMethod($event.target.files)\">\n</form>\n\n<table mat-table\n       [dataSource]=\"dataSource\" multiTemplateDataRows\n       class=\"mat-elevation-z8\">\n  <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of columnsToDisplay\">\n    <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\n  </ng-container>\n\n  <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n  <ng-container matColumnDef=\"expandedDetail\">\n    <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\n      <div class=\"example-element-detail\"\n           [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n        <div class=\"example-element-diagram\">\n          <div class=\"example-element-position\"> {{element.position}} </div>\n          <div class=\"example-element-symbol\"> {{element.symbol}} </div>\n          <div class=\"example-element-name\"> {{element.name}} </div>\n          <div class=\"example-element-weight\"> {{element.weight}} </div>\n        </div>\n        <div class=\"example-element-description\">\n          {{element.description}}\n          <p>\n            <!-- <span class=\"example-element-description-attribution\"> -- Wikipedia </span> -->\n            <button mat-raised-button color=\"primary\" (click)=\"selectedElement(expandedElement)\">\n                Select <mat-icon aria-label=\"Example icon-button with a heart icon\">check_circle_outline</mat-icon>\n            </button>\n          </p>\n        </div>\n      </div>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n  <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\n      class=\"example-element-row\"\n      [class.example-expanded-row]=\"expandedElement === element\"\n      (mouseenter)=\"mouseOverFn(element)\"\n      (mouseout)=\"mouseOutFn(expandedElement)\">\n  </tr>\n  <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n</table>\n\n\n<!-- Copyright 2018 Google Inc. All Rights Reserved.\n    Use of this source code is governed by an MIT-style license that\n    can be found in the LICENSE file at http://angular.io/license -->"

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
/* harmony import */ var _services_httpcomm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/httpcomm.service */ "./src/app/services/httpcomm.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
    function MaterialTestComponent(httpClient) {
        this.httpClient = httpClient;
        this.dataSource = ELEMENT_DATA;
        this.columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
        this.httpService = new _services_httpcomm_service__WEBPACK_IMPORTED_MODULE_2__["HttpcommService"](httpClient);
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
    MaterialTestComponent.prototype.postMethod = function (files) {
        this.fileToUpload = files.item(0);
        var formData = new FormData();
        formData.append('file', this.fileToUpload, this.fileToUpload.name);
        this.httpService.genericPostRequest("http://www.google.com", formData).subscribe(function (val) {
            console.log(val);
        });
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
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
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

/***/ "./src/app/print-medium-site/print-medium-site.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/print-medium-site/print-medium-site.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Styles go here */\r\n\r\n.page-header, .page-header-space {\r\n    height: 100px;\r\n  }\r\n\r\n.page-footer, .page-footer-space {\r\n    height: 50px;\r\n  \r\n  }\r\n\r\n.page-footer {\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 100%;\r\n    border-top: 1px solid black; /* for demo */\r\n    background: yellow; /* for demo */\r\n  }\r\n\r\n.page-header {\r\n    position: fixed;\r\n    top: 0mm;\r\n    width: 100%;\r\n    border-bottom: 1px solid black; /* for demo */\r\n    background: yellow; /* for demo */\r\n  }\r\n\r\n.page {\r\n    page-break-after: always;\r\n  }\r\n\r\n@page {\r\n    margin: 20mm\r\n  }\r\n\r\n@media print {\r\n     thead {display: table-header-group;} \r\n     tfoot {display: table-footer-group;}\r\n     \r\n     button {display: none;}\r\n     \r\n     body {margin: 0;}\r\n  }"

/***/ }),

/***/ "./src/app/print-medium-site/print-medium-site.component.html":
/*!********************************************************************!*\
  !*** ./src/app/print-medium-site/print-medium-site.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <!DOCTYPE html>\n<html>\n\n<head>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n\n<body> -->\n<div id=\"printContent\">\n  <div class=\"page-header\" style=\"text-align: center\">\n    I'm The Header\n    <br />\n    <button type=\"button\" (click)=\"print()\" style=\"background: pink\">\n      PRINT ME!\n    </button>\n  </div>\n\n  <div class=\"page-footer\">\n    I'm The Footer\n  </div>\n\n  <table>\n\n    <thead>\n      <tr>\n        <td>\n          <!--place holder for the fixed-position header-->\n          <div class=\"page-header-space\"></div>\n        </td>\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr>\n        <td>\n          <!--*** CONTENT GOES HERE ***-->\n          <div class=\"page\">PAGE 1</div>\n          <div class=\"page\">PAGE 2</div>\n          <div class=\"page\" style=\"line-height: 3;\">\n            PAGE 3 - Long Content\n            <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt metus eu consectetur rutrum.\n            Praesent tempor facilisis dapibus. Aliquam cursus diam ac vehicula pulvinar. Integer lacinia non odio et\n            condimentum. Aenean faucibus cursus\n            mi, sed interdum turpis sagittis a. Quisque quis pellentesque mi. Ut erat eros, posuere sed scelerisque ut,\n            pharetra vitae tellus. Suspendisse ligula sapien, laoreet ac hendrerit sit amet, viverra vel mi.\n            Pellentesque faucibus nisl et dolor\n            pharetra, vel mattis massa venenatis. Integer congue condimentum nisi, sed tincidunt velit tincidunt non.\n            Nulla sagittis sed lorem pretium aliquam. Praesent consectetur volutpat nibh, quis pulvinar est volutpat id.\n            Cras maximus odio posuere\n            suscipit venenatis. Donec rhoncus scelerisque metus, in tempus erat rhoncus sed. Morbi massa sapien,\n            porttitor id urna vel, volutpat blandit velit. Cras sit amet sem eros. Quisque commodo facilisis tristique.\n            Proin pellentesque sodales rutrum.\n            Vestibulum purus neque, congue vel dapibus in, venenatis ut felis. Donec et ligula enim. Sed sapien sapien,\n            tincidunt vitae lectus quis, ultricies rhoncus mi. Nunc dapibus nulla tempus nunc interdum, sed facilisis ex\n            pellentesque. Nunc vel\n            lorem leo. Cras pharetra sodales metus. Cras lacus ex, consequat at consequat vel, laoreet ac dui. Curabitur\n            aliquam, sapien quis congue feugiat, nisi nisl feugiat diam, sed vehicula velit nulla ac nisl. Aliquam quis\n            nisi euismod massa blandit\n            pharetra nec eget nunc. Etiam eros ante, auctor sit amet quam vel, fringilla faucibus leo. Morbi a pulvinar\n            nulla. Praesent sed vulputate nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\n            ridiculus mus. Aenean commodo\n            mollis iaculis. Maecenas consectetur enim vitae mollis venenatis. Ut scelerisque pretium orci id laoreet. In\n            sit amet pharetra diam. Vestibulum in molestie lorem. Nunc gravida, eros non consequat fermentum, ex orci\n            vestibulum orci, non accumsan\n            sem velit ac lectus. Vivamus malesuada lacus nec velit dignissim, ac fermentum nulla pretium. Aenean mi\n            nisi, convallis sed tempor in, porttitor eu libero. Praesent et molestie ante. Duis suscipit vitae purus sit\n            amet aliquam. Vestibulum lectus\n            justo, lobortis a purus a, dapibus efficitur metus. Suspendisse potenti. Duis dictum ex lorem. Suspendisse\n            nec ligula consectetur magna hendrerit ullamcorper et eget mauris. Etiam vestibulum sodales diam, eget\n            venenatis nunc luctus quis. Ut\n            fermentum placerat neque nec elementum. Praesent orci erat, rhoncus vitae est eu, dictum molestie metus.\n            Cras et fermentum elit. Aenean eget augue lacinia, varius ante in, ullamcorper dolor. Cras viverra purus non\n            egestas consectetur. Nulla\n            nec dolor ac lectus convallis aliquet sed a metus. Suspendisse eu imperdiet nunc, id pulvinar risus.\n            Maecenas varius sagittis est, vel fermentum risus accumsan at. Vestibulum sollicitudin dui pharetra sapien\n            volutpat, id convallis mi vestibulum.\n            Phasellus commodo sit amet lorem quis imperdiet. Proin nec diam sed urna euismod ultricies at sed urna.\n            Quisque ornare, nulla et vehicula ultrices, massa purus vehicula urna, ac sodales lacus leo vitae mi. Sed\n            congue placerat justo at placerat.\n            Aenean suscipit fringilla vehicula. Quisque iaculis orci vitae arcu commodo maximus. Maecenas nec nunc\n            rutrum, cursus elit quis, porttitor sapien. Sed ac hendrerit ipsum, lacinia fringilla velit. Donec ultricies\n            feugiat dictum.\n          </div>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <h1 class=\"page\">JUST SO STORIES</h1>\n          <p class=\"heading\">By Rudyard Kipling</p>\n          <div class=\"toc\">\n\n            <p class=\"heading\">Contents</p>\n\n            <p><a href=\"#2H_4_0001\">HOW THE WHALE GOT HIS THROAT</a></p>\n            <p><a href=\"#2H_4_0002\">HOW THE CAMEL GOT HIS HUMP</a></p>\n            <p><a href=\"#2H_4_0003\">HOW THE RHINOCEROS GOT HIS SKIN</a></p>\n            <p><a href=\"#2H_4_0004\">HOW THE LEOPARD GOT HIS SPOTS</a></p>\n            <p><a href=\"#2H_4_0005\">THE ELEPHANT'S CHILD</a></p>\n            <p><a href=\"#2H_4_0006\">THE SING-SONG OF OLD MAN KANGAROO</a></p>\n            <p><a href=\"#2H_4_0007\">THE BEGINNING OF THE ARMADILLOS</a></p>\n            <p><a href=\"#2H_4_0008\">HOW THE FIRST LETTER WAS WRITTEN</a></p>\n            <p><a href=\"#2H_4_0009\">HOW THE ALPHABET WAS MADE</a></p>\n            <p><a href=\"#2H_4_0010\">THE CRAB THAT PLAYED WITH THE SEA</a></p>\n            <p><a href=\"#2H_4_0011\">THE CAT THAT WALKED BY HIMSELF</a></p>\n            <p><a href=\"#2H_4_0012\">THE BUTTERFLY THAT STAMPED</a></p>\n            <p class=\"noprint\"><a href=\"#copyright\">Copyright information</a></p>\n\n          </div>\n\n          <a name=\"2H_4_0001\">\n          </a>\n          <h2>HOW THE WHALE GOT HIS THROAT</h2>\n          <p>\n            In the sea, once upon a time, O my Best Beloved, there was a Whale, and\n            he ate fishes. He ate the starfish and the garfish, and the crab and the\n            dab, and the plaice and the dace, and the skate and his mate, and the\n            mackereel and the pickereel, and the really truly twirly-whirly eel. All\n            the fishes he could find in all the sea he ate with his mouth&#8212;so! Till\n            at last there was only one small fish left in all the sea, and he was a\n            small 'Stute Fish, and he swam a little behind the Whale's right ear,\n            so as to be out of harm's way. Then the Whale stood up on his tail and\n            said, 'I'm hungry.' And the small 'Stute Fish said in a small 'stute\n            voice, 'Noble and generous Cetacean, have you ever tasted Man?'\n          </p>\n          <p>\n            'No,' said the Whale. 'What is it like?'\n          </p>\n          <p>\n            'Nice,' said the small 'Stute Fish. 'Nice but nubbly.'\n          </p>\n          <p>\n            'Then fetch me some,' said the Whale, and he made the sea froth up with\n            his tail.\n          </p>\n\n          <table style=\"width:100%;\">\n            <tr style=\"width:100%;\">\n              <td class=\"left\">Left</td>\n              <td class=\"center\">Center</td>\n              <td class=\"right\">Right</td>\n            </tr>\n          </table>\n\n          <p>\n            'One at a time is enough,' said the 'Stute Fish. 'If you swim to\n            latitude Fifty North, longitude Forty West (that is magic), you will\n            find, sitting <i>on</i> a raft, <i>in</i> the middle of the sea, with nothing on\n            but a pair of blue canvas breeches, a pair of suspenders (you must <i>not</i>\n            forget the suspenders, Best Beloved), and a jack-knife, one\n            ship-wrecked Mariner, who, it is only fair to tell you, is a man of\n            infinite-resource-and-sagacity.'\n          </p>\n          <p>\n            So the Whale swam and swam to latitude Fifty North, longitude Forty\n            West, as fast as he could swim, and <i>on</i> a raft, <i>in</i> the middle of the\n            sea, <i>with</i> nothing to wear except a pair of blue canvas breeches, a\n            pair of suspenders (you must particularly remember the suspenders, Best\n            Beloved), <i>and</i> a jack-knife, he found one single, solitary shipwrecked\n            Mariner, trailing his toes in the water. (He had his mummy's leave to\n            paddle, or else he would never have done it, because he was a man of\n            infinite-resource-and-sagacity.)\n          </p>\n          <p>\n            Then the Whale opened his mouth back and back and back till it nearly\n            touched his tail, and he swallowed the shipwrecked Mariner, and the\n            raft he was sitting on, and his blue canvas breeches, and the suspenders\n            (which you <i>must</i> not forget), <i>and</i> the jack-knife&#8212;He swallowed them\n            all down into his warm, dark, inside cup-boards, and then he smacked his\n            lips&#8212;so, and turned round three times on his tail.\n          </p>\n          <p>\n            But as soon as the Mariner, who was a man of\n            infinite-resource-and-sagacity, found himself truly inside the Whale's\n            warm, dark, inside cup-boards, he stumped and he jumped and he thumped\n            and he bumped, and he pranced and he danced, and he banged and he\n            clanged, and he hit and he bit, and he leaped and he creeped, and he\n            prowled and he howled, and he hopped and he dropped, and he cried and he\n            sighed, and he crawled and he bawled, and he stepped and he lepped, and\n            he danced hornpipes where he shouldn't, and the Whale felt most unhappy\n            indeed. (<i>Have</i> you forgotten the suspenders?)\n          </p>\n          <p>\n            So he said to the 'Stute Fish, 'This man is very nubbly, and besides he\n            is making me hiccough. What shall I do?'\n          </p>\n          <p>\n            'Tell him to come out,' said the 'Stute Fish.\n          </p>\n          <p>\n            So the Whale called down his own throat to the shipwrecked Mariner,\n            'Come out and behave yourself. I've got the hiccoughs.'\n          </p>\n          <p>\n            'Nay, nay!' said the Mariner. 'Not so, but far otherwise. Take me to my\n            natal-shore and the white-cliffs-of-Albion, and I'll think about it.'\n            And he began to dance more than ever.\n          </p>\n          <pre>\n'You had better take him home,' said the 'Stute Fish to the Whale.\n'I ought to have warned you that he is a man of infinite-resource-and-sagacity.'\n</pre>\n          <p>\n            So the Whale swam and swam and swam, with both flippers and his tail,\n            as hard as he could for the hiccoughs; and at last he saw the Mariner's\n            natal-shore and the white-cliffs-of-Albion, and he rushed half-way\n            up the beach, and opened his mouth wide and wide and wide, and said,\n            'Change here for Winchester, Ashuelot, Nashua, Keene, and stations on\n            the <i>Fitch</i>burg Road;' and just as he said 'Fitch' the Mariner walked\n            out of his mouth. But while the Whale had been swimming, the Mariner,\n            who was indeed a person of infinite-resource-and-sagacity, had taken his\n            jack-knife and cut up the raft into a little square grating all running\n            criss-cross, and he had tied it firm with his suspenders (<i>now</i>, you\n            know why you were not to forget the suspenders!), and he dragged that\n            grating good and tight into the Whale's throat, and there it stuck! Then\n            he recited the following <i>Sloka</i>, which, as you have not heard it, I\n            will now proceed to relate&#8212;\n          </p>\n          <pre>\nBy means of a grating\nI have stopped your ating.\n</pre>\n          <p>\n            For the Mariner he was also an Hi-ber-ni-an. And he stepped out on the\n            shingle, and went home to his mother, who had given him leave to trail\n            his toes in the water; and he married and lived happily ever afterward.\n            So did the Whale. But from that day on, the grating in his throat,\n            which he could neither cough up nor swallow down, prevented him eating\n            anything except very, very small fish; and that is the reason why whales\n            nowadays never eat men or boys or little girls.\n          </p>\n          <p>\n            The small 'Stute Fish went and hid himself in the mud under the\n            Door-sills of the Equator. He was afraid that the Whale might be angry\n            with him.\n          </p>\n          <p>\n            The Sailor took the jack-knife home. He was wearing the blue canvas\n            breeches when he walked out on the shingle. The suspenders were left\n            behind, you see, to tie the grating with; and that is the end of <i>that</i>\n            tale.\n          </p>\n          <pre>\n     WHEN the cabin port-holes are dark and green\n     Because of the seas outside;\n     When the ship goes <i>wop</i> (with a wiggle between)\n     And the steward falls into the soup-tureen,\n     And the trunks begin to slide;\n     When Nursey lies on the floor in a heap,\n     And Mummy tells you to let her sleep,\n     And you aren't waked or washed or dressed,\n     Why, then you will know (if you haven't guessed)\n     You're 'Fifty North and Forty West!'\n</pre>\n        </td>\n      </tr>\n    </tbody>\n\n    <tfoot>\n      <tr>\n        <td>\n          <!--place holder for the fixed-position footer-->\n          <div class=\"page-footer-space\"></div>\n        </td>\n      </tr>\n    </tfoot>\n\n  </table>\n</div>\n<!-- </body> -->\n\n<!-- </html> -->"

/***/ }),

/***/ "./src/app/print-medium-site/print-medium-site.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/print-medium-site/print-medium-site.component.ts ***!
  \******************************************************************/
/*! exports provided: PrintMediumSiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintMediumSiteComponent", function() { return PrintMediumSiteComponent; });
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

var PrintMediumSiteComponent = /** @class */ (function () {
    function PrintMediumSiteComponent() {
        this.printCss = "\n  .page-header, .page-header-space {\n    height: 100px;\n  }\n  \n  .page-footer, .page-footer-space {\n    height: 50px;\n  \n  }\n  \n  .page-footer {\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    border-top: 1px solid black; /* for demo */\n    background: yellow; /* for demo */\n  }\n  \n  .page-header {\n    position: fixed;\n    top: 0mm;\n    width: 100%;\n    border-bottom: 1px solid black; /* for demo */\n    background: yellow; /* for demo */\n  }\n  \n  .page {\n    page-break-after: always;\n  }\n  \n  @page {\n    margin: 20mm\n  }\n  \n  @media print {\n     thead {display: table-header-group;} \n     tfoot {display: table-footer-group;}\n     \n     button {display: none;}\n     \n     body {margin: 0;}\n  }\n  ";
    }
    PrintMediumSiteComponent.prototype.ngOnInit = function () {
    };
    PrintMediumSiteComponent.prototype.print = function () {
        var openWindow = window.open("", "target", "fullscreen=yes");
        var css = this.printCss;
        var htmlData = document.getElementById("printContent").innerHTML;
        var printablePage = "<!DOCTYPE html> \n        <html lang=\"en\"> \n          <head>\n            <title>Ultimate Print Medium</title>\n            <style>\n              " + css + "\n            </style>\n          </head> \n          <body>\n       " + htmlData + "\n       </body></html>";
        openWindow.document.open();
        openWindow.document.write(printablePage);
        // openWindow.document.close
        openWindow.focus();
        // openWindow.print();
    };
    PrintMediumSiteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-print-medium-site',
            template: __webpack_require__(/*! ./print-medium-site.component.html */ "./src/app/print-medium-site/print-medium-site.component.html"),
            styles: [__webpack_require__(/*! ./print-medium-site.component.css */ "./src/app/print-medium-site/print-medium-site.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrintMediumSiteComponent);
    return PrintMediumSiteComponent;
}());



/***/ }),

/***/ "./src/app/print/header-footer-confirmation.html":
/*!*******************************************************!*\
  !*** ./src/app/print/header-footer-confirmation.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Print with header footer?</h1>\r\n<div mat-dialog-actions>\r\n  <button mat-button color=\"warn\" (click)=\"onNoClick()\">No Thanks</button>\r\n  <button mat-button color=\"primary\" (click)=\"onPositiveClick()\" cdkFocusInitial>Ok</button>\r\n</div>"

/***/ }),

/***/ "./src/app/print/header-footer.ts":
/*!****************************************!*\
  !*** ./src/app/print/header-footer.ts ***!
  \****************************************/
/*! exports provided: HeaderFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderFooter", function() { return HeaderFooter; });
var HeaderFooter = /** @class */ (function () {
    function HeaderFooter(isDummy) {
        this.isDummy = isDummy;
        this.header = "\n    <div class=\"page-header\">\n        <table>\n            <tr>                \n                <td style=\"text-indent: 5em\">\n                    <div>\n                        " + this.getHeaderImage() + "\n                    </div>\n                </td>\n                <td class=\"center\">\n                    <p class=\"header deep-green-letterhead\">SMILESTONE DENTAL CARE</p>\n                    <p class=\"sub-header light-green-letterhead\">KAJIALPARA BUS STOP, RAJARHAT,\n                        KOLKATA-700135\n                    </p>\n                    <p class=\"sub-header deep-green-letterhead\">TIMINGS: </p>\n                    <p class=\"sub-header deep-green-letterhead\">MORNING: 10 AM TO 1 PM </p>\n                    <p class=\"sub-header deep-green-letterhead\">EVENING: 5.30 PM TO 8.30 PM </p>\n                    <p class=\"sub-header deep-green-letterhead\">SUNDAY EVENING & MONDAY FULL DAY CLOSED</p>\n                </td>\n                <!-- <td style=\"text-align: center;min-width:100px;\"></td> -->\n            </tr>\n        </table>\n    </div>\n    <table style=\"min-width:100%;width:100%\">\n        <thead>\n            <tr>\n                <td>\n                    <!--place holder for the fixed-position header-->\n                    <div class=\"page-header-space\"></div>\n                </td>\n            </tr>\n        </thead>\n\n        <tbody>\n            <tr>\n                <td>\n    ";
        this.footer = "\n            </td>\n        </tr>\n    </tbody>\n    <tfoot>\n        <tr>\n            <td>\n                <!--place holder for the fixed-position footer-->\n                <div class=\"page-footer-space\"></div>\n            </td>\n        </tr>\n    </tfoot>\n    </table>\n    \n    <table class=\"page-footer\">\n        <tr>\n            <td class=\"smaller-border\" style=\"max-width:50%; width:50%;\" ></td>\n            <td class=\"smaller-border\" style=\"max-width:50%; width:50%;\" ></td>\n        </tr>\n        <tr>\n            <td class=\"left\">\n                <p class=\"block1 footer deep-green-letterhead\"><b>Dr. Mitrasen Manna</b></p>\n            </td>\n            <td class=\"right\">\n                <p class=\"block1 footer deep-green-letterhead\"><b>Dr. Aparna Gupta</b></p>\n            </td>\n        </tr>\n        <tr>\n            <td class=\"light-green-letterhead\">Regd No: 3350A</td>\n            <td class=\"right light-green-letterhead\">Regd No: 5883-A</td>\n        </tr>\n        <tr>\n            <td class=\"light-green-letterhead\">\n                Ex-House Surgeon, R. G. Kar Medical College & Hospital\n            </td>\n            <td class=\"right light-green-letterhead\">\n                Ex-House Surgeon, GTB Hospital New Delhi\n            </td>\n        </tr>\n        <tr>\n            <td class=\"light-green-letterhead\">\n                Ex- Resident, Dr.R.Ahmed Dental College & Hospital\n            </td>\n            <td class=\"right light-green-letterhead\">\n                Ex-Resident, Dr. R. Ahmed Dental College & Hospital\n            </td>\n        </tr>\n        <tr>\n            <td class=\"right deep-green-letterhead\">CONTACT NO.:</td>\n            <td class=\"left deep-green-letterhead\">7044074579, 8697969918</td>\n        </tr>\n    </table>\n    ";
    }
    HeaderFooter.prototype.getHeaderImage = function () {
        if (this.isDummy) {
            return "<img src=\"http://localhost:4200/prescription-header-print.png\" alt=\"E Prescription\"\n                    height=\"150px\" width=\"150px\">";
        }
        else {
            return "<img src=\"../img/prescription-header-print.png\" alt=\"E Prescription\" height=\"150px\"\n                    width=\"150px\">";
        }
    };
    return HeaderFooter;
}());



/***/ }),

/***/ "./src/app/print/image.css":
/*!*********************************!*\
  !*** ./src/app/print/image.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-header {\r\n    background: url('prescription-header-print.png');\r\n}\r\n.icon-header-old {\r\n    background: url('g5220.png');\r\n    height: 150px;\r\n    width: 99%;\r\n}"

/***/ }),

/***/ "./src/app/print/print-medium-site.css":
/*!*********************************************!*\
  !*** ./src/app/print/print-medium-site.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Styles go here */\r\n/* Source: https://medium.com/@Idan_Co/the-ultimate-print-html-template-with-header-footer-568f415f6d2a */\r\n/* Live example: https://next.plnkr.co/edit/lWk6Yd?preview */\r\n.page-header, .page-header-space {\r\n  /* height: 100px; */\r\n  /* Changing height as per requirement */\r\n  height: 200px;\r\n}\r\n.page-footer, .page-footer-space {\r\n  height: 90px;\r\n}\r\n.page-footer {\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  /* border-top: 1px solid black; for demo */\r\n  /* background: #67b67863; for demo */\r\n}\r\n.page-header {\r\n  position: fixed;\r\n  top: 0mm;\r\n  width: 100%;\r\n  /* border-bottom: 1px solid black; for demo */\r\n  /* background: #67b67863; for demo */\r\n}\r\n.page {\r\n  page-break-after: always;\r\n}\r\n@page {\r\n  margin: 20mm\r\n}\r\n@media print {\r\n  thead {display: table-header-group;} \r\n  tfoot {display: table-footer-group;}\r\n    \r\n  button, .noprint {display: none;}\r\n    \r\n  body {margin: 0;}\r\n\r\n  div, table, ul, ol {page-break-inside: avoid;}\r\n}\r\n/* Custom entries */\r\n.fab {\r\n  position: fixed;\r\n  bottom: 30px;\r\n  right: 30px;\r\n}\r\n.left {\r\n  text-align: left;    \r\n}\r\n.center {\r\n    text-align: center;\r\n}\r\n.right {\r\n    text-align: right;\r\n}\r\n/* .border{\r\n    border-top: 3px solid blue;\r\n} */\r\n.smaller-border{\r\n    border-top: 1.5px solid blue;\r\n}\r\np.header {\r\n  font-family: 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n  font-size: 18px;\r\n  -webkit-transform:scale(2,1);\r\n  transform:scale(2,1);\r\n  margin: 9px;\r\n}\r\np.sub-header{\r\n  /* font-family: 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */\r\n  font-size: 15px;\r\n  margin: 9px;\r\n}\r\n.font30{\r\n  font-size: 30px\r\n}\r\n.light-green-letterhead{\r\n  color : #6ab689\r\n}\r\n.deep-green-letterhead{\r\n  color : #6da945\r\n}\r\n.left {\r\n  text-align: left;    \r\n}\r\n.center {\r\n  text-align: center;\r\n}\r\n.right {\r\n  text-align: right;\r\n}\r\n.border{\r\n  border-top: 3px solid blue;\r\n}\r\n.smaller-border{\r\n  border-top: 1.5px solid blue;\r\n}\r\ntable,tr{\r\n  width:100%;\r\n}\r\n.block1,.block2{\r\n  display: inline;\r\n}\r\np,div,td { \r\n  text-indent:   1em;\r\n  margin-top:    .5em;\r\n  margin-bottom: .5em;\r\n  line-height: 1.5;\r\n}"

/***/ }),

/***/ "./src/app/print/print.component.html":
/*!********************************************!*\
  !*** ./src/app/print/print.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"requestLoading\">\r\n    <h1>Loading...</h1>\r\n    <mat-progress-bar style=\"width: 100%\" color=\"primary\" mode=\"indeterminate\">\r\n    </mat-progress-bar>\r\n</div>\r\n<!-- <div *ngIf=\"printView\"> -->\r\n<!-- <div> -->\r\n<mat-tab-group mat-align-tabs=\"center\" animationDuration=\"1500ms\">\r\n    <!--\r\n        ====================================================================================\r\n        ====================================================================================\r\n        ====================================================================================\r\n        ================================    First Visit    =================================\r\n        ====================================================================================\r\n        ====================================================================================\r\n        ====================================================================================\r\n    -->\r\n    <mat-tab label=\"Full Prescription\">\r\n        <div class=\"fab\">\r\n            <button mat-fab color=\"primary\" (click)=\"printPrescription()\" matTooltip=\"Print\">\r\n                <mat-icon aria-label=\"Print\">local_printshop</mat-icon>\r\n            </button>\r\n        </div>\r\n        <div id=\"printableFullPrescriptionContent\">     \r\n            <div class=\"smaller-border\"></div>                   \r\n            <p class=\"right\"># {{printView.prescriptionId}}</p>\r\n            <p class=\"left\"><b>PATIENT INFORMATION</b></p>\r\n            <table>\r\n                <tr>\r\n                    <td>\r\n                        Name: {{printView.name}}\r\n                    </td>\r\n                    <td>\r\n                        Date: {{date | date: 'dd-MM-yyyy hh:mm a'}}\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        Sex: {{printView.sex}}\r\n                    </td>\r\n                    <td>\r\n                        Visited: {{printView.visitDateTime}}\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        Age: {{printView.age}}\r\n                    </td>\r\n                    <td>\r\n                        Next Appointment: {{printView.nextAppointmentDateTime}}\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <div class=\"smaller-border\"></div>\r\n            <table>\r\n                <tr>\r\n                    <td style=\"width:40%\">\r\n                        CHIEF COMPLAINT:\r\n                    </td>\r\n                    <td style=\"width:70%\">\r\n                        {{printView.chiefComplain}}\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <p class=\"smaller-border\"></p>\r\n                    </td>\r\n                    <td>\r\n                        <p class=\"smaller-border\"></p>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td style=\"width:40%\">\r\n                        MEDICAL HISTORY:\r\n                    </td>\r\n                    <td style=\"width:70%\">\r\n                        {{printView.medicalHistory}}\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <p class=\"smaller-border\"></p>\r\n                    </td>\r\n                    <td>\r\n                        <p class=\"smaller-border\"></p>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td style=\"width:40%\">\r\n                        CLINICAL FINDINGS:\r\n                    </td>\r\n                    <td style=\"width:70%\">\r\n                        {{printView.clinicalFindings}}\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <p class=\"smaller-border\"></p>\r\n                    </td>\r\n                    <td>\r\n                        <p class=\"smaller-border\"></p>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td style=\"width:40%\">\r\n                        PROVISIONAL DIAGNOSIS:\r\n                    </td>\r\n                    <td style=\"width:70%\">\r\n                        {{printView.provisionalDiagnosis}}\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <div class=\"smaller-border\"></div>\r\n            <div *ngIf=\"printView.tphv && printView.tphv.length > 0\">\r\n                <p><b>Treatment Plan:</b></p>\r\n                <div>\r\n                    <ol>\r\n                        <li *ngFor=\"let tphvItem of printView.tphv\">\r\n                            {{tphvItem.tname}} on {{tphvItem.toothIndex}} for\r\n                            {{tphvItem.clinicalFinding}} is\r\n                            {{tphvItem.status}}\r\n                        </li>\r\n                    </ol>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"printView.advice\">\r\n                <div class=\"smaller-border\"></div>\r\n                <p><b>ADVICE</b></p>\r\n                <div>\r\n                    <ul>\r\n                        <li *ngFor=\"let advice of getOrderedAdviceList()\">{{advice}}</li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"noPrint\" *ngIf=\"printView.medicineAll\">\r\n                <div class=\"smaller-border\"></div>\r\n                <p><b>ALL MEDICINE</b></p>\r\n                <div>\r\n                    <ol>\r\n                        <li *ngFor=\"let med of printView.medicineAll\">\r\n                            {{med}}\r\n                        </li>\r\n                    </ol>\r\n                </div>\r\n            </div>\r\n            <div id=\"medicine\" *ngIf=\"printView.medicineCurrent && printView.medicineCurrent.length > 0\">\r\n                <div class=\"smaller-border\"></div>\r\n                <p><b>MEDICINE</b></p>\r\n                <div>\r\n                    <ol>\r\n                        <li *ngFor=\"let med of printView.medicineCurrent\">\r\n                            {{med}}\r\n                        </li>\r\n                    </ol>\r\n                </div>\r\n            </div>\r\n            <div class=\"smaller-border\"></div>\r\n            <p>Others: {{printView.printableNotes}}</p>            \r\n        </div>\r\n    </mat-tab>\r\n    <!--\r\n        ====================================================================================\r\n        ====================================================================================\r\n        ====================================================================================\r\n        ================================    Re Visit    ====================================\r\n        ====================================================================================\r\n        ====================================================================================\r\n        ====================================================================================\r\n    -->\r\n    <mat-tab label=\"Revisit Prescription\">\r\n        <div class=\"fab\">\r\n            <button mat-fab color=\"primary\" (click)=\"printRevisit()\" matTooltip=\"Print\">\r\n                <mat-icon aria-label=\"Print\">local_printshop</mat-icon>\r\n            </button>\r\n        </div>\r\n        <div id=\"printableRevisitPrescriptionContent\">  \r\n            <div class=\"smaller-border\"></div>          \r\n            <p class=\"right\"># {{printView.prescriptionId}}</p>\r\n            <div>Visit count : {{printView.visitNo}}</div>\r\n            <div class=\"noPrint\" *ngIf=\"printView.tphv && printView.tphv.length > 0\">\r\n                <div class=\"smaller-border\"></div>\r\n                <p><b>Treatment History:</b></p>\r\n                <div>\r\n                    <ol>\r\n                        <li *ngFor=\"let tphvItem of printView.tphv\">\r\n                            {{tphvItem.tname}} on {{tphvItem.toothIndex}} for {{tphvItem.clinicalFinding}} is\r\n                            {{tphvItem.status}}\r\n                        </li>\r\n                    </ol>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"printView.tphvCompleted && printView.tphvCompleted.length > 0\">\r\n                <div class=\"smaller-border\"></div>\r\n                <p>\r\n                    <b>Treatment Done:</b>\r\n                    <button mat-icon-button (click)=\"editTreatmentPlan()\" class=\"noPrint\">\r\n                        <mat-icon aria-label=\"Edit\">create</mat-icon>\r\n                    </button>\r\n                </p>\r\n                <!-- <mat-form-field class=\"example-full-width\">\r\n                    <textarea matInput placeholder=\"Treatment details\" cdkTextareaAutosize cdkAutosizeMinRows=\"1\" \r\n                        cdkAutosizeMaxRows=\"5\" [(ngModel)]=\"customTreatmentPlan\"></textarea>\r\n                </mat-form-field> -->\r\n                <p>{{customTreatmentPlan}}</p>\r\n            </div>\r\n            <div class=\"noPrint\" *ngIf=\"printView.medicineAll\">\r\n                <div class=\"smaller-border\"></div>\r\n                <p><b>ALL MEDICINE</b></p>\r\n                <div>\r\n                    <ol>\r\n                        <li *ngFor=\"let med of printView.medicineAll\">\r\n                            {{med}}\r\n                        </li>\r\n                    </ol>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"printView.medicineCurrent\">\r\n                <div class=\"smaller-border\"></div>\r\n                <p><b>MEDICINE</b></p>\r\n                <div>\r\n                    <ol>\r\n                        <li *ngFor=\"let med of printView.medicineCurrent\">\r\n                            {{med}}\r\n                        </li>\r\n                    </ol>\r\n                </div>\r\n            </div>\r\n            <div id=\"nextAppo\">\r\n                <div class=\"smaller-border\"></div>\r\n                <p>Next Appointment: {{printView.nextAppointmentDateTime}}</p>\r\n            </div>\r\n            <div class=\"smaller-border\"></div>\r\n        </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Money Receipt\">Coming soon</mat-tab>\r\n</mat-tab-group>\r\n\r\n<!-- </div> -->"

/***/ }),

/***/ "./src/app/print/print.component.ts":
/*!******************************************!*\
  !*** ./src/app/print/print.component.ts ***!
  \******************************************/
/*! exports provided: PrintComponent, HeaderFooterConfirmationDialog, CustomTreatmentPlanDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintComponent", function() { return PrintComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderFooterConfirmationDialog", function() { return HeaderFooterConfirmationDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomTreatmentPlanDialog", function() { return CustomTreatmentPlanDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/models */ "./src/app/models/models.ts");
/* harmony import */ var _services_httpcomm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/httpcomm.service */ "./src/app/services/httpcomm.service.ts");
/* harmony import */ var _services_commonservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/commonservice.service */ "./src/app/services/commonservice.service.ts");
/* harmony import */ var _header_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header-footer */ "./src/app/print/header-footer.ts");
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








var PrintComponent = /** @class */ (function () {
    function PrintComponent(route, httpClient, matSnackbar, router, dialog) {
        this.route = route;
        this.matSnackbar = matSnackbar;
        this.router = router;
        this.dialog = dialog;
        this.printView = new _models_models__WEBPACK_IMPORTED_MODULE_4__["PrescriptionPrintView"]();
        this.requestLoading = true;
        this.date = new Date();
        this.printMediumCss = "\n    <style>\n    .page-header, .page-header-space {\n        /* height: 100px; */\n        /* Changing height as per requirement */\n        height: 230px;\n      }\n      \n      .page-footer {\n        height: 50px;\n      }\n\n      .page-footer-space {\n          height: 250px;\n      }\n        \n      .page-footer {\n        position: fixed;\n        bottom: 0;\n        width: 100%;        \n      }\n        \n      .page-header {\n        position: fixed;\n        top: 0mm;\n        width: 100%;\n      }\n        \n      .page {\n        page-break-after: always;\n      }\n        \n      @page {\n        margin: 20mm\n      }\n        \n      @media print {\n        thead {display: table-header-group;} \n        tfoot {display: table-footer-group;}          \n        button, .noprint{display: none;}          \n        body {margin: 0;}\n        div, table, ul, ol {page-break-inside: avoid;}\n      }\n      \n      /* Custom entries */\n      .fab {\n        position: fixed;\n        bottom: 150px;\n        right: 30px;\n      }\n      .left {\n        text-align: left;    \n      }\n      .center {\n          text-align: center;\n      }\n      .right {\n          text-align: right;\n      }\n      .smaller-border{\n          border-top: 1.5px solid blue;\n        //   min-width: 100%;\n          width: 100%;\n      }\n      .smaller-border-footer{\n        border-top: 1.5px solid blue;\n      }\n      p.header {\n        font-family: 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n        font-size: 35px;\n        margin-bottom: 0px;\n      }\n      p.footer {\n        font-family: 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n        font-size: 25px;\n        margin-bottom: 0px;\n margin-bottom:0px;     }\n      \n      p.sub-header{\n        /* font-family: 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */\n        font-size: 15px;\n        margin: 9px;\n      }\n      .light-green-letterhead{\n        color : #6ab689\n      }\n      .deep-green-letterhead{\n        color : #6da945\n      }\n      .left {\n        text-align: left;    \n      }\n      .center {\n        text-align: center;\n      }\n      .right {\n        text-align: right;\n      }\n      .border{\n        border-top: 3px solid blue;\n      }\n      .smaller-border{\n        border-top: 1.5px solid blue;\n      }\n      .block1,.block2{\n        display: inline;\n      }\n      p,div,td { \n        text-indent:   1em;\n        margin-top:    .5em;\n        margin-bottom: .5em;\n        line-height: 1.5;\n      }\n      </style>\n    ";
        this.printStylesheet = "\n    <style>\n    /*  ------ Global settings */\n\n    * {\n        font-family: Cambria, Georgia, serif;\n        /* background-color: #ffffe0; */\n        }\n    \n    body {\n        text-align:justify;\n        counter-reset: chapter;\n        }\n        \n    /* ------- Pagination */\n    \n    h1, h2 {\n      page-break-after: avoid;\n      /* page-break-before: always; */\n    }\n    \n    p.header {\n        font-family: 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n        font-size: 25px;\n        /*display:inline-block;\n        -webkit-transform:scale(2,1); * Safari and Chrome *\n        -moz-transform:scale(2,1); * Firefox *\n        -ms-transform:scale(2,1); * IE 9 *\n        -o-transform:scale(2,1); Opera \n        transform:scale(2,1); */\n        -webkit-transform:scale(2,1);\n        transform:scale(2,1);\n      }\n    \n    p.sub-header{\n        font-family: 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n        font-size: 15px;\n    }\n    .font30{\n        font-size: 30px\n    }\n    @media screen {\n        div.footer {\n          display: none;\n        }\n      }\n    @media print {\n        div.footer {\n          position: relative;\n          bottom: 0;\n        }\n        div, table, ul, ol {\n            page-break-inside: avoid;\n        }\n      }\n    .light-green-letterhead{\n        color : #6ab689\n    }\n    .deep-green-letterhead{\n        color : #6da945\n    }\n    \n    /* Default left, right, top, bottom margin is 2cm */\n    @page { margin: 1cm } \n    \n    /* First page, 10 cm margin on top */\n    @page :first {\n    /* margin-top: 10cm  */\n    }\n    \n    /* Left pages, a wider margin on the left */\n    /* @page :left {\n    margin-left: 3cm;\n    margin-right: 2cm;\n    }\n    \n    @page :right {\n    margin-left: 2cm;\n    margin-right: 3cm;\n    } */\n    \n    /* ------ Normal elements */\n        \n     p,div,td { \n        text-indent:   1em;\n        margin-top:    .5em;\n        margin-bottom: .5em;\n        line-height: 1.5;\n        }\n        \n    /* First paragraphs after a title  */\n        \n    h2+p {\n        text-indent: 0em;\n        }\n        \n    h2+p:first-letter {\n        font-size: 200%;\n        color: blue;\n        font-family: \"Goudy Old Style\", Georgia, serif;\n        line-height: 50%;\n        }\n    \n    h1,h2,h4,h5,h6 { \n        text-align: center; \n        letter-spacing: 0.1em;\n        }\n        \n     h1 {\n        /* margin-top: 3cm; */\n        color: red;\n        }\n        \n     h2 {\n        border-top: 5px solid blue;\n        border-bottom: 1px solid blue;\n        padding-top: 5px;\n        padding-bottom: 5px;\n        margin-top: 2cm;\n        counter-increment: chapter;\n        }\n        \n     h2:before {\n        content: \"Chapter \" counter(chapter) \": \";\n        }\n    \n     hr { \n        width: 50%;\n        text-align: center;\n        }\n    \n    strong { \n        background-color: yellow;\n        font-style: normal;\n    }\n        \n    blockquote {\n        font-size: 90%; \n        margin-left: 20%; \n        margin-right: 20%;\n        }\n        \n    .toc  {\n        text-align:center;\n        margin-top: 2cm;\n        margin-bottom: 2cm;\n        }\n        \n    .toc p:first-letter {font-size: 100%;}\n        \n    pre { \n        font-family: \"Comic Sans\", fantasy, serif;\n        font-style: italic; \n        margin-left: 20%;\n        }\n        \n    p.fineprint {\n        font-size: 70%;\n        text-indent: 0em;\n        }\n        \n    pre.copyright, .noprint {\n       display:none;\n    }\n    \n    p.heading {\n        font-size: x-large;\n        text-align: center; \n        }\n    \n    \n    /* Custom entry */\n    .left {\n        text-align: left;    \n    }\n    .center {\n        text-align: center;\n    }\n    .right {\n        text-align: right;\n    }\n    .border{\n        border-top: 3px solid blue;\n    }\n    .smaller-border{\n        border-top: 1.5px solid blue;\n    }\n    table,tr{\n        width:100%;\n    }\n    .block1,.block2{\n        display: inline;\n    }\n    </style>\n    ";
        this.customTreatmentPlan = '';
        this.httpService = new _services_httpcomm_service__WEBPACK_IMPORTED_MODULE_5__["HttpcommService"](httpClient);
        this.isDummy = this.httpService.dummy;
        this.commonService = new _services_commonservice_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]();
        this.headerFooter = new _header_footer__WEBPACK_IMPORTED_MODULE_7__["HeaderFooter"](this.isDummy);
        console.log(this.isDummy);
    }
    PrintComponent.prototype.ngOnInit = function () {
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
    PrintComponent.prototype.ngAfterViewInit = function () {
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
        var prescriptionContent = document.getElementById("printableFullPrescriptionContent");
        this.processPrintProcess(this.headerFooter.header + prescriptionContent.innerHTML + this.headerFooter.footer);
    };
    PrintComponent.prototype.printRevisit = function () {
        var _this = this;
        var dialogRef = this.dialog.open(HeaderFooterConfirmationDialog, {
            width: '350px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                var revisit = document.getElementById("printableRevisitPrescriptionContent").innerHTML;
                _this.processPrintProcess(_this.headerFooter.header + revisit + _this.headerFooter.footer);
            }
            else {
                var revisit = document.getElementById("printableRevisitPrescriptionContent").innerHTML;
                _this.processPrintProcess(revisit, false);
            }
        });
    };
    PrintComponent.prototype.processPrintProcess = function (htmlData, isAsync) {
        if (isAsync === void 0) { isAsync = true; }
        // var openWindow = window.open("http://localhost:4200/print?patientId=1&prescriptionId=34", "_blank", "fullscreen=yes")
        var openWindow = window.open("http://localhost:4200/print?patientId=1&prescriptionId=34", "_blank", 'height=' + screen.height + ', width=' + screen.width);
        var css = this.printMediumCss;
        var printablePage = "<!DOCTYPE html\"> \n            <html lang=\"en\"> \n                <head> \n                    <title>E - prescription</title>\n                    " + css + "\n                </head> \n                <body>\n                    " + htmlData + "\n                </body>\n            </html>";
        openWindow.document.open();
        openWindow.document.write(printablePage);
        //Async flag to set timeout for loading image
        if (isAsync) {
            setTimeout(function () {
                openWindow.document.close;
                openWindow.focus();
                openWindow.print();
                openWindow.close();
            }, 2 * 1000);
        }
        else {
            openWindow.document.close;
            openWindow.focus();
            openWindow.print();
            openWindow.close();
        }
    };
    PrintComponent.prototype.editTreatmentPlan = function () {
        var _this = this;
        var dialogRef = this.dialog.open(CustomTreatmentPlanDialog, {
            width: '250px',
            data: this.customTreatmentPlan
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.customTreatmentPlan = result;
        });
    };
    PrintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-print',
            template: __webpack_require__(/*! ./print.component.html */ "./src/app/print/print.component.html"),
            styles: [__webpack_require__(/*! ./print-medium-site.css */ "./src/app/print/print-medium-site.css"), __webpack_require__(/*! ./image.css */ "./src/app/print/image.css")]
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
var HeaderFooterConfirmationDialog = /** @class */ (function () {
    function HeaderFooterConfirmationDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    HeaderFooterConfirmationDialog.prototype.onNoClick = function () {
        this.dialogRef.close(false);
    };
    HeaderFooterConfirmationDialog.prototype.onPositiveClick = function () {
        this.dialogRef.close(true);
    };
    HeaderFooterConfirmationDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header-footer-confirmation',
            template: __webpack_require__(/*! ./header-footer-confirmation.html */ "./src/app/print/header-footer-confirmation.html"),
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], HeaderFooterConfirmationDialog);
    return HeaderFooterConfirmationDialog;
}());

var CustomTreatmentPlanDialog = /** @class */ (function () {
    function CustomTreatmentPlanDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CustomTreatmentPlanDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CustomTreatmentPlanDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-treatment-plan-selector',
            template: "<h1 mat-dialog-title>Edit Treament details</h1>\n    <div mat-dialog-content>\n        <mat-form-field>\n            <textarea matInput placeholder=\"Treatment details\" cdkTextareaAutosize cdkAutosizeMinRows=\"1\"\n                cdkAutosizeMaxRows=\"5\" [(ngModel)]=\"data\"></textarea>\n        </mat-form-field>\n    </div>\n    <div mat-dialog-actions>\n        <button mat-button (click)=\"onNoClick()\">Cancel</button>\n        <button mat-button [mat-dialog-close]=\"data\" color=\"primary\">Ok</button>\n    </div>"
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], String])
    ], CustomTreatmentPlanDialog);
    return CustomTreatmentPlanDialog;
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
        this.getDashboardCountView = {
            "status": "SUCCESS",
            "desc": null,
            "resp": 3
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
                "provisionalDiagnosis": "Diagnosis critical",
                "medicalHistory": "Asthma, Cardiac diseases, Hypertension, Hypotension, Hyperthyroidism, Drug hypersensitivity",
                "clinicalFindings": "RETAINED ROOT IN 23,32,36,37,45 \n CARIOUS 13,14",
                "advice": "EXTRACTION OF 23 HAS BEEN DONE UNDER L.A.\nCome within 9:30 AM after having full meal with an adult addendent except SUNDAYs and enlisted holidays.\n EXTRACTION OF 23 HAS BEEN DONE UNDER L.A.\n HEMOSTASIS HAS BEEN ACHIEVED.\n MOIST COTTON PACK GIVEN.\n SOFT AND COLD DIET FOR NEXT 24 HOURS.\n WARM SALINE MOUTH WASH FREQUENTLY AFTER 24 HOURS.\n IN CASE OF ANY EMERGENCY, ADVISED TO GO TO ANY NEARBY GOVT HOSPITAL., 36, 37, 45, 13, 14.\n Come within 9:30 AM after having full meal with an adult addendent except SUNDAYs and enlisted holidays.\n EXTRACTION OF 23 HAS BEEN DONE UNDER L.A.\n HEMOSTASIS HAS BEEN ACHIEVED.\n MOIST COTTON PACK GIVEN.\n SOFT AND COLD DIET FOR NEXT 24 HOURS.\n WARM SALINE MOUTH WASH FREQUENTLY AFTER 24 HOURS.\n IN CASE OF ANY EMERGENCY, ADVISED TO GO TO ANY NEARBY GOVT HOSPITAL., 36, 37, 45, 13, 14.\n Come within 9:30 AM after having full meal with an adult addendent except SUNDAYs and enlisted holidays.\n EXTRACTION OF 23 HAS BEEN DONE UNDER L.A.\n HEMOSTASIS HAS BEEN ACHIEVED.\n MOIST COTTON PACK GIVEN.\n SOFT AND COLD DIET FOR NEXT 24 HOURS.\n WARM SALINE MOUTH WASH FREQUENTLY AFTER 24 HOURS.\n IN CASE OF ANY EMERGENCY, ADVISED TO GO TO ANY NEARBY GOVT HOSPITAL.",
                "medicineAll": [
                    "Amoxycilin 500mg + Clavulenic Acid 125mg Tab 3 after meal 5 days",
                    "Metronidazole Tab I.P. 400mg (Flim coated) 3 after meal 5 days",
                    "Paracetamol I.P. 650mg. Tab 3 after meal 5 days",
                    "Rantidine Tab. I.P. 150mg 2 before meal 5 days"
                ],
                "medicineCurrent": [
                    "Paracetamol I.P. 650mg. Tab 3 after meal 5 days",
                    "Rantidine Tab. I.P. 150mg 2 before meal 5 days"
                ],
                "tphv": [
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
                    },
                    {
                        "clinicalFinding": "Periodontities",
                        "note": null,
                        "patientId": 1,
                        "prescriptionId": 40,
                        "toothIndex": "17",
                        "tsCreated": 1546330836694,
                        "tsModified": null,
                        "status": "Pending",
                        "tname": "Removal",
                        "tid": 9
                    }
                ],
                "tphvCompleted": [
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
        this.getDashboardCountUrl = this.baseUrl + 'dashboard/get-dashboard-count?';
        this.postAddClinicalFindingUrl = this.baseUrl + 'clinical-finding/add-clinical-finding';
        this.getAddTreatmentPlanHistUrl = this.baseUrl + 'trtmnt/add-treatment-plan-hist';
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
    HttpcommService.prototype.getDashboardCount = function (patientId) {
        if (this.dummy) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.parseData(this.dummyResp.getDashboardCountView));
        }
        else {
            return this.genericGetRequest(this.getDashboardCountUrl + 'patientId=' + patientId, "Dashboard count");
        }
    };
    HttpcommService.prototype.getDashboardPaginatedView = function (patientId, page, size) {
        if (this.dummy) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.parseData(this.dummyResp.getDashboardView));
        }
        else {
            return this.genericGetRequest(this.getDashboardUrl + "patientId=" + patientId + "&page=" + page + "&size=" + size);
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
            var url = this.httpComService.getAddTreatmentPlanHistUrl + '?patientId=' + this.selectedTreatmentPlanHistView.patientId + '&prescriptionId=' + this.selectedTreatmentPlanHistView.prescriptionId;
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

module.exports = __webpack_require__(/*! F:\Git\Smilestone\Smilestone_eps\portal-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map