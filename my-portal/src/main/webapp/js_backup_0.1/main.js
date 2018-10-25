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
                _create_prescription_create_prescription_component__WEBPACK_IMPORTED_MODULE_13__["DialogToothClinicalfindings"]
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
            entryComponents: [_snackhelper_snackhelper_component__WEBPACK_IMPORTED_MODULE_12__["SnackhelperComponent"], _create_prescription_create_prescription_component__WEBPACK_IMPORTED_MODULE_13__["DialogToothClinicalfindings"]]
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

module.exports = ".example-stretched-tabs {\r\n  max-width: 1000px;\r\n}\r\n.example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n.example-card-parent {\r\n  /* max-width: 800px; */\r\n  min-width: 50px;\r\n  margin-left: 50px;\r\n  margin-top: 30px;\r\n  width : 100%;\r\n}\r\n.example-card {\r\n  /* max-width: 800px; */\r\n  min-width: 50px;\r\n  margin: 30px;\r\n  /* width : 100%; */\r\n}\r\n.expansion-margin {\r\n  max-width: 500px;\r\n  margin-left: 150px;\r\n  margin-top: 30px;\r\n}\r\n.example-section {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n  height: 60px;\r\n}\r\n.example-margin {\r\n  /* margin: 0 10px; */\r\n  margin-top: 20px;\r\n  margin : 5px 10px;\r\n}\r\n.mat-radio-button ~ .mat-radio-button {\r\n  padding: 36px;\r\n}\r\ntable {\r\n  width: 100%;\r\n}\r\ntr.example-detail-row {\r\n  height: 0;\r\n}\r\ntr.example-element-row:not(.example-expanded-row):hover {\r\n  background: #f5f5f5;\r\n}\r\ntr.example-element-row:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n.example-element-row td {\r\n  border-bottom-width: 0;\r\n}\r\n.example-element-detail {\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n.example-element-diagram {\r\n  min-width: 80px;\r\n  border: 2px solid black;\r\n  padding: 8px;\r\n  font-weight: lighter;\r\n  margin: 8px 0;\r\n  height: 104px;\r\n}\r\n.example-element-symbol {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  line-height: normal;\r\n}\r\n.example-element-description {\r\n  padding: 16px;\r\n}\r\n/* .example-element-description-attribution {\r\n  opacity: 0.5;\r\n} */\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n.example-half-width{\r\n  width : 50%;\r\n}\r\n.example-grid-margin{\r\n  margin-top: 20px;\r\n  margin-bottom: 10px;\r\n  margin-right: 50px;\r\n}\r\n.rcorners2 {\r\n  border-radius: 25px;\r\n  border: 2px solid #73AD21;\r\n  padding-left: 4px; \r\n  /* width: 200px;\r\n  height: 150px;     */\r\n  margin-left: 4px;\r\n  margin-right: 4px;\r\n}\r\n/* label > input{ HIDE RADIO \r\n  visibility: hidden; Makes input not-clickable\r\n  position: absolute; Remove input from document flow\r\n}\r\nlabel > input { IMAGE STYLES\r\n  cursor:pointer;\r\n  border:2px solid transparent;\r\n}\r\nlabel > input:checked { (RADIO CHECKED) IMAGE STYLES\r\n  border:20px solid #f00;\r\n} */"

/***/ }),

/***/ "./src/app/create-prescription/create-prescription.component.html":
/*!************************************************************************!*\
  !*** ./src/app/create-prescription/create-prescription.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"example-margin\">\n  <form class=\"example-form\">\n    <mat-form-field class=\"example-full-width\">\n      <input type=\"text\" matInput placeholder=\"Pick one\" aria-label=\"Number\" [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n      <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n        <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n          {{option}}\n        </mat-option>\n      </mat-autocomplete>\n    </mat-form-field>\n  </form>\n  <form class=\"example-form\">\n    <mat-form-field class=\"example-full-width\">\n      <input type=\"text\" matInput placeholder=\"Pick one2\" aria-label=\"Number\" [formControl]=\"myControl2\" [matAutocomplete]=\"auto2\">\n      <mat-autocomplete autoActiveFirstOption #auto2=\"matAutocomplete\">\n        <mat-option *ngFor=\"let option2 of filteredOptions2 | async\" [value]=\"option2\">\n          {{option2}}\n        </mat-option>\n      </mat-autocomplete>\n    </mat-form-field>\n  </form>\n</div> -->\n\n<!-- Section to create presciption -->\n<mat-card class=\"example-card-parent\">\n\n  <mat-tab-group [selectedIndex]=\"prescriptionFromControl.value\" (selectedIndexChange)=\"prescriptionFromControl.setValue($event)\"\n    mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4\">\n    <mat-tab label=\"Basic Info\">\n      <mat-card class=\"example-card\">\n        <mat-card-content>\n          <table>\n            <tr>\n              <td>\n                <!-- First Name -->\n                <div class=\"example-container example-margin\">\n                  <mat-form-field hintLabel=\"Min {{minCharToSearch}} char to search\">\n                    <input matInput cdkFocusInitial maxlength=20 placeholder=\"First name\" [(ngModel)]=\"selectedPatient.firstName\"\n                      (keyup)='fetchPatient($event)'>\n                    <mat-hint align=\"end\">{{selectedPatient.firstName?.length || 0}}/20</mat-hint>\n                  </mat-form-field>\n                </div>\n              </td>\n              <td>\n                <!-- Last Name -->\n                <div class=\"example-container example-margin\">\n                  <mat-form-field hintLabel=\"Min {{minCharToSearch}} char to search\">\n                    <input matInput maxlength=20 placeholder=\"Last name\" [(ngModel)]=\"selectedPatient.lastName\" (keyup)='fetchPatient($event)'>\n                    <mat-hint align=\"end\">{{selectedPatient.lastName?.length || 0}}/20</mat-hint>\n                  </mat-form-field>\n                </div>\n              </td>\n              <td>\n                <div class=\"example-container example-margin\">\n                  <mat-form-field>\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Select from calender\" \n                      (dateChange)=\"dateValidate($event)\"\n                      disabled>\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n                  </mat-form-field>\n                </div>\n              </td>\n              <td>\n                <div class=\"\">\n                  <button mat-mini-fab color=\"primary\" (click)=\"fetchPatient($event)\" matTooltip=\"Search\">\n                    <mat-icon aria-label=\"Search\">search</mat-icon>\n                  </button>\n                </div>\n              </td>\n              <td>\n                <div class=\"example-margin\">\n                  <button mat-mini-fab color=\"primary\" (click)=\"initializeValiables()\" matTooltip=\"Refresh\">\n                    <mat-icon aria-label=\"Refresh\">refresh</mat-icon>\n                  </button>\n                </div>\n              </td>\n            </tr>\n          </table>\n          <!-- Loading progressbar -->\n          <mat-progress-bar *ngIf=\"isPatientLoading\" color=\"color\" mode=\"indeterminate\"></mat-progress-bar>\n          <!-- Patient list -->\n          <div *ngIf=\"isPatientLoaded\">\n            <table mat-table [dataSource]=\"patientDataSource\" multiTemplateDataRows class=\"mat-elevation-z8\">\n              <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of columnsToDisplay\">\n                <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\n              </ng-container>\n\n              <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n              <ng-container matColumnDef=\"expandedDetail\">\n                <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\n                  <div class=\"example-element-detail\" [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n                    <div class=\"example-element-diagram\">\n                      <div class=\"example-element-position\"> {{element.firstName}} </div>\n                      <div class=\"example-element-symbol\"> {{element.lastName}} </div>\n                      <div class=\"example-element-name\"> {{element.age}} </div>\n                      <div class=\"example-element-weight\"> {{element.contactNo1}} </div>\n                      <!-- <span>Image placeholder</span> -->\n                    </div>\n                    <div class=\"example-element-description\">\n                      <p>\n                        {{element.address1}}\n                      </p>\n                      <p>\n                        {{element.address2}}\n                      </p>\n                      <p>\n                        <!-- <span class=\"example-element-description-attribution\"> -- Wikipedia </span> -->\n                        <button mat-raised-button color=\"primary\" (click)=\"selectedElement(expandedElement)\">\n                          Select <mat-icon aria-label=\"Select\">check_circle_outline</mat-icon>\n                        </button>\n                      </p>\n                    </div>\n                  </div>\n                </td>\n              </ng-container>\n\n              <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n              <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\" class=\"example-element-row\"\n                [class.example-expanded-row]=\"expandedElement === element\" (mouseenter)=\"mouseOverFn(element)\">\n                <!-- (mouseout)=\"mouseOutFn(expandedElement)\" -->\n              </tr>\n              <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n            </table>\n          </div>\n        </mat-card-content>\n        <!-- <mat-card-actions>\n          <button mat-button>LIKE</button>\n          <button mat-button>SHARE</button>\n        </mat-card-actions> -->\n      </mat-card>\n\n    </mat-tab>\n    \n    <mat-tab label=\"History\">\n\n    </mat-tab>\n\n    <mat-tab label=\"Prescription\">\n      <mat-card class=\"example-card\">\n        <mat-card-content>\n          <mat-form-field class=\"example-full-width\">\n            <textarea matInput placeholder=\"Chief complaint\" [(ngModel)]=\"pv.chiefComplaint\" cdkTextareaAutosize\n              cdkAutosizeMinRows=\"1\" cdkAutosizeMaxRows=\"5\"></textarea>\n            <button mat-button *ngIf=\"pv.chiefComplaint\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"pv.chiefComplaint=''\"\n              matToolTip=\"Clear\">\n              <mat-icon>close</mat-icon>\n            </button>\n          </mat-form-field>\n\n          <mat-form-field class=\"example-full-width\">\n            <button mat-button matPrefix mat-icon-button aria-label=\"Add\" (click)=\"openDialog()\" matToolTip=\"Add\">\n              <mat-icon>add_circle_outline</mat-icon>\n            </button>\n            <!-- <textarea matInput placeholder=\"Chief findings\" disabled [(ngModel)]=\"clinicalFindingsView\" cdkTextareaAutosize\n              cdkAutosizeMinRows=\"1\" cdkAutosizeMaxRows=\"5\"></textarea> -->\n            <mat-chip-list #chipList1>\n              <mat-chip *ngFor=\"let s of clinicalFindingsView\" selectable=\"false\" removable=\"false\">\n                {{s}}\n              </mat-chip>\n              <input placeholder=\"Add C/F\"  [matChipInputFor]=\"chipList1\" matChipInputAddOnBlur=\"true\" disabled\n              >\n            </mat-chip-list>\n          </mat-form-field>\n\n          <table>\n            <tr>\n              <td>\n                <!-- Medical History -->\n                <mat-form-field class=\"example-full-width\">\n                  <mat-select placeholder=\"Medical History\" [formControl]=\"medicalHistoryForm\" multiple class=\"example-full-width\">\n                    <mat-option *ngFor=\"let mh of mhList\" [value]=\"mh\">{{mh}}</mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <!-- Loading progressbar -->\n                <mat-progress-bar *ngIf=\"mhList == null || mhList?.length <= 0\" color=\"color\" mode=\"indeterminate\"></mat-progress-bar>\n              </td>\n              <td>\n                <mat-form-field hintLabel=\"Max 30 characters\" class=\"example-full-width\">\n                  <input matInput [maxlength]=\"30\" placeholder=\"Investigation\" [(ngModel)]=\"pv.investigation\">\n                  <mat-hint align=\"end\">{{pv.investigation?.length || 0}}/30</mat-hint>\n                </mat-form-field>\n              </td>\n            </tr>\n          </table>\n\n          <!-- provisionalDiagnosis -->\n          <mat-form-field class=\"example-full-width\">\n            <textarea matInput placeholder=\"Provisional diagnosis\" [(ngModel)]=\"pv.provisionalDiagnosis\"\n              cdkTextareaAutosize cdkAutosizeMinRows=\"1\" cdkAutosizeMaxRows=\"5\"></textarea>\n            <button mat-button *ngIf=\"pv.provisionalDiagnosis\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"pv.provisionalDiagnosis=''\"\n              matToolTip=\"Clear\">\n              <mat-icon>close</mat-icon>\n            </button>\n          </mat-form-field>\n\n          <!-- Treatment Done -->\n          <mat-form-field class=\"example-full-width\">\n            <textarea matInput placeholder=\"Treatment done\" [(ngModel)]=\"pv.treatmentDone\" cdkTextareaAutosize\n              cdkAutosizeMinRows=\"1\" cdkAutosizeMaxRows=\"5\"></textarea>\n            <button mat-button *ngIf=\"pv.treatmentDone\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"pv.treatmentDone=''\"\n              matToolTip=\"Clear\">\n              <mat-icon>close</mat-icon>\n            </button>\n          </mat-form-field>\n\n          <!-- Treatment Plan -->\n          <mat-form-field class=\"example-full-width\">\n            <mat-chip-list #chipListtrtmnt>\n              <mat-chip *ngFor=\"let s of treatmentPlanListView\" selectable=\"true\" removable=\"true\" (removed)=\"removeChip(s,1)\">\n                {{s}}\n                <mat-icon matChipRemove>cancel</mat-icon>\n              </mat-chip>\n              <input placeholder=\"Treatment Plan\" [matChipInputFor]=\"chipListtrtmnt\" matChipInputAddOnBlur=\"true\"\n                (matChipInputTokenEnd)=\"addTreatmentPlan($event)\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\">\n            </mat-chip-list>\n          </mat-form-field>\n\n          <!-- advice -->\n          <mat-grid-list cols=\"4\" rowHeight=\"50px\">\n            <mat-grid-tile colspan=\"3\" rowspan=\"1\">\n              <mat-form-field class=\"example-full-width example-grid-margin\">\n                <textarea matInput placeholder=\"Advice\" [(ngModel)]=\"pv.advice\" cdkTextareaAutosize\n                  cdkAutosizeMinRows=\"1\" cdkAutosizeMaxRows=\"5\"></textarea>\n                <button mat-button *ngIf=\"pv.advice\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"pv.advice=''\"\n                  matToolTip=\"Clear\">\n                  <mat-icon>close</mat-icon>\n                </button>\n              </mat-form-field>\n            </mat-grid-tile>\n            <!-- Next appointment -->\n            <mat-grid-tile colspan=\"1\" rowspan=\"2\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"nextAppoPicker\" placeholder=\"Choose a date\">\n                <mat-datepicker-toggle matSuffix [for]=\"nextAppoPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #nextAppoPicker></mat-datepicker>\n              </mat-form-field>\n            </mat-grid-tile>\n            <!-- Medicine -->\n            <mat-grid-tile colspan=\"3\" rowspan=\"1\">\n              <mat-form-field class=\"example-full-width\">\n                  <mat-chip-list #chipListmedicine>\n                    <mat-chip *ngFor=\"let s of medicineListView\" selectable=\"true\" removable=\"true\" (removed)=\"removeChip(s,2)\">\n                      {{s}}\n                      <mat-icon matChipRemove>cancel</mat-icon>\n                    </mat-chip>\n                    <input placeholder=\"Medicines\" [matChipInputFor]=\"chipListmedicine\" matChipInputAddOnBlur=\"true\"\n                      (matChipInputTokenEnd)=\"addMedicine($event)\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\">\n                  </mat-chip-list>\n                </mat-form-field>\n            </mat-grid-tile>\n          </mat-grid-list>\n          \n          \n\n          <!-- <form class=\"example-form\">\n            <mat-form-field class=\"example-full-width\">\n              <input type=\"text\" matInput placeholder=\"Pick one\" aria-label=\"Number\" [formControl]=\"clinicalFindingForm\"\n                [matAutocomplete]=\"auto\">\n              <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n                <mat-option *ngFor=\"let cfdd of originalCfList | async\" [value]=\"cfdd\">\n                  {{cfdd}}\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </form> -->\n        </mat-card-content>\n      </mat-card>\n    </mat-tab>\n\n  </mat-tab-group>\n\n</mat-card>"

/***/ }),

/***/ "./src/app/create-prescription/create-prescription.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/create-prescription/create-prescription.component.ts ***!
  \**********************************************************************/
/*! exports provided: CreatePrescriptionComponent, CompositDialogBoxData, ClinicalFindingToothMapping, DialogToothClinicalfindings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePrescriptionComponent", function() { return CreatePrescriptionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompositDialogBoxData", function() { return CompositDialogBoxData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalFindingToothMapping", function() { return ClinicalFindingToothMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogToothClinicalfindings", function() { return DialogToothClinicalfindings; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/models */ "./src/app/models/models.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _services_httpcomm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/httpcomm.service */ "./src/app/services/httpcomm.service.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_commonservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/commonservice.service */ "./src/app/services/commonservice.service.ts");
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
    function CreatePrescriptionComponent(snackBar, dialog, httpCom) {
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.httpCom = httpCom;
        this.columnsToDisplay = ['firstName', 'lastName', 'age', 'weight'];
        this.dialogData = new CompositDialogBoxData();
        this.mhList = [];
        this.medicalHistoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.treatmentPlanList = [];
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["COMMA"]];
        this.prescriptionFromControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0);
        this.minCharToSearch = 3;
        this.minDate = new Date();
        this.todayMillis = this.minDate.getTime();
        this.maxMillis = this.todayMillis + (5 * 86400 * 1000);
        this.maxDate = new Date(this.maxMillis);
    }
    CreatePrescriptionComponent.prototype.ngOnInit = function () {
        this.initializeValiables();
        this.commonService = new _services_commonservice_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]();
    };
    CreatePrescriptionComponent.prototype.initializeValiables = function () {
        var _this = this;
        this.selectedPatient = new _models_models__WEBPACK_IMPORTED_MODULE_1__["Patient"]();
        this.pv = new _models_models__WEBPACK_IMPORTED_MODULE_1__["PrescriptionHistoryView"]();
        this.isPatientLoading = false;
        this.isPatientLoaded = false;
        this.isPatientSelected = false;
        this.clinicalFindingsView = [];
        this.httpCom.genericGetRequest(this.httpCom.getAllMedicalHistoryMaster, 'Get Medical History').subscribe(function (resp) {
            if (resp.status == 'SUCCESS') {
                for (var i = 0; i < resp.resp.length; i++) {
                    _this.mhList.push(resp.resp[i].medicalHistoryName);
                }
            }
        });
        this.httpCom.genericGetRequest(this.httpCom.getAllTreatmentPlan, 'Get Treatment Plan').subscribe(function (resp) {
            if (resp.status == 'SUCCESS') {
                _this.treatmentPlanList = resp.resp;
            }
        });
        this.treatmentPlanListView = [];
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
        this.tabSelection(1);
    };
    CreatePrescriptionComponent.prototype.tabSelection = function (tabIndex) {
        this.prescriptionFromControl.setValue(tabIndex);
    };
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
                            _this.cftMapArray = result;
                            var _loop_1 = function (i) {
                                var teeths = '';
                                for (var j = 0; j < _this.cftMapArray[i].teeth.length; j++) {
                                    teeths += ' ' + _this.cftMapArray[i].teeth[j].toothIndex;
                                }
                                _this.clinicalFindingsView.push(_this.cftMapArray[i].clinicalFinding.fname + ' - ' + teeths);
                                if (_this.treatmentPlanList && _this.treatmentPlanList.length > 0) {
                                    _this.treatmentPlanList.map(function (tpl) {
                                        if (tpl.clinicalFinding == _this.cftMapArray[i].clinicalFinding.fid) {
                                            if (_this.treatmentPlanListView.indexOf(tpl.trtName) < 0) {
                                                _this.treatmentPlanListView.push(tpl.trtName);
                                            }
                                        }
                                    });
                                }
                                else {
                                    console.log("Treatment plan empty");
                                }
                            };
                            for (var i = 0; i < _this.cftMapArray.length; i++) {
                                _loop_1(i);
                            }
                        });
                    }
                });
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
        if (n == 1) {
            var idx = this.treatmentPlanListView.indexOf(s);
            if (idx >= 0) {
                this.treatmentPlanListView.splice(idx, 1);
            }
        }
        else if (n == 2) {
        }
    };
    ;
    CreatePrescriptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-prescription',
            template: __webpack_require__(/*! ./create-prescription.component.html */ "./src/app/create-prescription/create-prescription.component.html"),
            styles: [__webpack_require__(/*! ./create-prescription.component.css */ "./src/app/create-prescription/create-prescription.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '0px', minHeight: '0', display: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _services_httpcomm_service__WEBPACK_IMPORTED_MODULE_5__["HttpcommService"]])
    ], CreatePrescriptionComponent);
    return CreatePrescriptionComponent;
}());

var CompositDialogBoxData = /** @class */ (function () {
    function CompositDialogBoxData() {
    }
    return CompositDialogBoxData;
}());

var ClinicalFindingToothMapping = /** @class */ (function () {
    function ClinicalFindingToothMapping() {
    }
    return ClinicalFindingToothMapping;
}());

//Dialog box to select clinical findings mapped with tooth index
var DialogToothClinicalfindings = /** @class */ (function () {
    function DialogToothClinicalfindings(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.cfTextToBeShownOnUi = [];
        this.originalCfList = [];
        this.toothForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.clinicalFindingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        // readonly separatorKeysCodes: number[] = [ENTER, COMMA];
        this.cftMapArray = [];
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
            // return 0;
        });
    };
    DialogToothClinicalfindings.prototype.checkTooth = function (t) {
        t.selected = !t.selected;
    };
    DialogToothClinicalfindings.prototype.add = function () {
        if (this.originalCfList.includes(this.clinicalFindingForm.value)) {
            // let selectedToothList: number[] = this.toothForm.value;
            var cft_1 = new ClinicalFindingToothMapping();
            cft_1.teeth = [];
            // for (let i = 0; i < selectedToothList.length; i++) {
            //   for (let j = 0; j < this.data.toothQuadrentsComposite.length; j++) {
            //     if (this.data.toothQuadrentsComposite[j].toothIndex == selectedToothList[i]) {
            //       cft.teeth.push(this.data.toothQuadrentsComposite[j]);
            //       break;
            //     }
            //   }
            // }
            var selectedToothIndexes_1 = '';
            this.data.toothQuadrentsComposite.map(function (tooth) {
                {
                    if (tooth.selected) {
                        cft_1.teeth.push(tooth);
                        selectedToothIndexes_1 += ' ' + tooth.toothIndex;
                    }
                    tooth.selected = false;
                }
            });
            this.cfTextToBeShownOnUi.push(this.clinicalFindingForm.value + '-' + selectedToothIndexes_1);
            for (var k = 0; k < this.data.clinicalFindingsComposite.length; k++) {
                if (this.data.clinicalFindingsComposite[k].fname === this.clinicalFindingForm.value) {
                    cft_1.clinicalFinding = this.data.clinicalFindingsComposite[k];
                    break;
                }
            }
            this.cftMapArray.push(cft_1);
            console.log(JSON.stringify(this.cftMapArray));
        }
        else {
            // Show error
        }
        // this.toothForm.setValue('');
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
        console.log(JSON.stringify(this.cftMapArray));
    };
    DialogToothClinicalfindings.prototype.setSelect = function (t) {
        alert('Selected:' + t.toothIndex);
    };
    DialogToothClinicalfindings.prototype.startFilter1 = function () {
        var _this = this;
        this.filteredCfList = this.clinicalFindingForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (value) { return _this._filter(value); }));
    };
    DialogToothClinicalfindings.prototype._filter = function (value) {
        return this.originalCfList.filter(function (option) { return option.toLowerCase().includes(value.toLowerCase()); });
        // return this.originalCfList.filter(option => option.toLowerCase().indexOf(value.toLowerCase()) === 0);
    };
    DialogToothClinicalfindings = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-tooth-cf',
            template: __webpack_require__(/*! ./dialog-tooth-cf.html */ "./src/app/create-prescription/dialog-tooth-cf.html"),
            styles: [__webpack_require__(/*! ./create-prescription.component.css */ "./src/app/create-prescription/create-prescription.component.css")],
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            CompositDialogBoxData])
    ], DialogToothClinicalfindings);
    return DialogToothClinicalfindings;
}());



/***/ }),

/***/ "./src/app/create-prescription/dialog-tooth-cf.html":
/*!**********************************************************!*\
  !*** ./src/app/create-prescription/dialog-tooth-cf.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Create Clinical Findings</h1>\r\n<div mat-dialog-content>\r\n    <!-- <mat-list>\r\n        <h3 mat-subheader>Clinical Findings</h3>\r\n        <mat-list-item *ngFor=\"let cf of data.clinicalFindingsComposite\">\r\n            <mat-icon mat-list-icon>notes</mat-icon>\r\n            <h4 mat-line>Name : {{cf.fname}}</h4>\r\n            <p mat-line>Desc : {{cf.fdesc}} </p>\r\n        </mat-list-item>\r\n    </mat-list> -->\r\n    <form class=\"example-form\">\r\n        <mat-form-field class=\"example-full-width\">\r\n            <input type=\"text\" matInput placeholder=\"Pick one\" aria-label=\"Number\" [formControl]=\"clinicalFindingForm\"\r\n                [matAutocomplete]=\"auto2\">\r\n            <mat-autocomplete autoActiveFirstOption #auto2=\"matAutocomplete\">\r\n                <mat-option *ngFor=\"let cfdd of filteredCfList | async\" [value]=\"cfdd\">\r\n                    {{cfdd}}\r\n                </mat-option>\r\n            </mat-autocomplete>\r\n        </mat-form-field>\r\n    </form>\r\n    <mat-divider></mat-divider>\r\n\r\n    <!-- <mat-form-field>\r\n        <mat-select placeholder=\"Tooth\" [formControl]=\"toothForm\" multiple>\r\n            <mat-option *ngFor=\"let tooth of data.toothQuadrentsComposite\" [value]=\"tooth.toothIndex\">{{tooth.toothIndex}}</mat-option>\r\n        </mat-select>\r\n    </mat-form-field> -->\r\n\r\n    <table>\r\n        <tr>\r\n            <td *ngFor=\"let t of getOrderedList(1)\" class=\"rcorners2\" (click)=\"checkTooth(t)\">\r\n                <!-- (click)=\"setSelect(t)\" -->\r\n                <label>\r\n                    <input  class=\"custom_mat-radio-button\" type=\"checkbox\" name=\"all\" value=\"{{t.toothIndex}}\" [checked]=\"t.selected\" disabled \r\n                    />\r\n                    {{t.toothIndex}}\r\n                </label>\r\n            </td>\r\n            <td *ngFor=\"let t of getOrderedList(2, true)\" class=\"rcorners2\" (click)=\"checkTooth(t)\">\r\n                <label>\r\n                    <input type=\"checkbox\" name=\"all\" value=\"{{t.toothIndex}}\" [checked]=\"t.selected\" disabled />\r\n                    <!-- (change)=\"checkTooth(t)\" -->\r\n                    {{t.toothIndex}}\r\n                </label>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td *ngFor=\"let t of getOrderedList(3)\" class=\"rcorners2\" (click)=\"checkTooth(t)\">\r\n                <input type=\"checkbox\" name=\"all\" value=\"{{t.toothIndex}}\" [checked]=\"t.selected\" disabled />\r\n                <!-- (change)=\"checkTooth(t)\" -->\r\n                {{t.toothIndex}}\r\n            </td>\r\n            <td *ngFor=\"let t of getOrderedList(4, true)\" class=\"rcorners2\" (click)=\"checkTooth(t)\">\r\n                <input type=\"checkbox\" name=\"all\" value=\"{{t.toothIndex}}\" [checked]=\"t.selected\" disabled />\r\n                <!-- (change)=\"checkTooth(t)\" -->\r\n                {{t.toothIndex}}\r\n            </td>\r\n        </tr>\r\n    </table>\r\n\r\n\r\n    <p>\r\n        <button mat-raised-button color=\"primary\" (click)=\"add()\">\r\n            Select <mat-icon aria-label=\"Select\">check_circle_outline</mat-icon>\r\n        </button>\r\n    </p>\r\n    <p>\r\n        <mat-form-field>\r\n            <mat-chip-list #chipList>\r\n                <mat-chip *ngFor=\"let cf of cfTextToBeShownOnUi\" selectable=\"true\" removable=\"true\" (removed)=\"remove(cf)\">\r\n                    {{cf}}\r\n                    <mat-icon matChipRemove>cancel</mat-icon>\r\n                </mat-chip>\r\n                <input placeholder=\"Result\" disabled [matChipInputFor]=\"chipList\" matChipInputAddOnBlur=\"true\">\r\n                <!-- \r\n                    (matChipInputTokenEnd)=\"addChip($event)\" \r\n                    [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                -->\r\n            </mat-chip-list>\r\n        </mat-form-field>\r\n    </p>\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button (click)=\"onNoClick()\">Close</button>\r\n    <button mat-button (click)=\"closeDialog()\">Done</button>\r\n</div>"

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
/* harmony import */ var _snackhelper_snackhelper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../snackhelper/snackhelper.component */ "./src/app/snackhelper/snackhelper.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_httpcomm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/httpcomm.service */ "./src/app/services/httpcomm.service.ts");
/* harmony import */ var _services_commonservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/commonservice.service */ "./src/app/services/commonservice.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
        this.commonService = new _services_commonservice_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]();
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
        this.patientEmailControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
        ]);
        //Accordian expansion bar control
        this.step = 0;
        this.patient = new _models_models__WEBPACK_IMPORTED_MODULE_1__["Patient"]();
        // this.snackBar.openFromComponent(SnackbarComponent,{
        //   duration : 2000,
        // })
        //public patientService : PatientService,
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
        console.log(event);
        console.log(event.key);
        // this.snackBar.open('demo','',{
        this.snackBar.openFromComponent(_snackhelper_snackhelper_component__WEBPACK_IMPORTED_MODULE_3__["SnackhelperComponent"], {
            duration: 2000,
        });
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
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]])
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

module.exports = "<table mat-table\n       [dataSource]=\"dataSource\" multiTemplateDataRows\n       class=\"mat-elevation-z8\">\n  <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of columnsToDisplay\">\n    <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\n  </ng-container>\n\n  <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n  <ng-container matColumnDef=\"expandedDetail\">\n    <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\n      <div class=\"example-element-detail\"\n           [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n        <div class=\"example-element-diagram\">\n          <div class=\"example-element-position\"> {{element.position}} </div>\n          <div class=\"example-element-symbol\"> {{element.symbol}} </div>\n          <div class=\"example-element-name\"> {{element.name}} </div>\n          <div class=\"example-element-weight\"> {{element.weight}} </div>\n        </div>\n        <div class=\"example-element-description\">\n          {{element.description}}\n          <p>\n            <!-- <span class=\"example-element-description-attribution\"> -- Wikipedia </span> -->\n            <button mat-raised-button color=\"primary\" (click)=\"selectedElement(expandedElement)\">\n                Select <mat-icon aria-label=\"Example icon-button with a heart icon\">check_circle_outline</mat-icon>\n            </button>\n          </p>\n        </div>\n      </div>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n  <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\n      class=\"example-element-row\"\n      [class.example-expanded-row]=\"expandedElement === element\"\n      (mouseenter)=\"mouseOverFn(element)\"\n      (mouseout)=\"mouseOutFn(expandedElement)\">\n  </tr>\n  <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n</table>\n\n\n<!-- Copyright 2018 Google Inc. All Rights Reserved.\n    Use of this source code is governed by an MIT-style license that\n    can be found in the LICENSE file at http://angular.io/license -->"

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
/*! exports provided: Response, ClinicalFindingView, MedicalMaster, Patient, PrescriptionHistoryView, ToothQuadrentView, TreatmentPlan, MedicineView */
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
        console.log('Date validation: ' + this.validateDate(date));
        if (this.validateDate(date)) {
            pd = [];
            pd.push(date.getDate());
            pd.push(date.getMonth() + 1);
            pd.push(date.getFullYear());
        }
        return pd;
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
                    "trtId": 2,
                    "trtDesc": "Root canal treatment",
                    "trtName": "RCT",
                    "clinicalFinding": 4
                },
                {
                    "trtId": 3,
                    "trtDesc": "Extraction",
                    "trtName": "Extraction",
                    "clinicalFinding": 3
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
                    "trtName": "Restoration",
                    "clinicalFinding": 9
                },
                {
                    "trtId": 6,
                    "trtDesc": "Prosthesis removable",
                    "trtName": "Prosthesis",
                    "clinicalFinding": 10
                },
                {
                    "trtId": 7,
                    "trtDesc": "Prosthesis fixed",
                    "trtName": "Prosthesis",
                    "clinicalFinding": 10
                },
                {
                    "trtId": 8,
                    "trtDesc": "Prosthesis implant",
                    "trtName": "Prosthesis",
                    "clinicalFinding": 10
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
                    "fdesc": "Not known",
                    "fid": 10,
                    "fname": "Unknown"
                }
            ]
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
    HttpcommService.prototype.getAgeGroup = function (age) {
        if (this.dummy) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.parseData(this.dummyResp.getPatient));
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
    };
    ;
    HttpcommService.prototype.getTreatmentPlan = function () {
        if (this.dummy) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.parseData(this.dummyResp.getTreatmentPlan));
        }
        else {
            return this.http.get(this.getAllTreatmentPlan, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('Get TreatmentPlan', new _models_models__WEBPACK_IMPORTED_MODULE_3__["Response"]())));
        }
    };
    ;
    HttpcommService.prototype.getMedicineView = function () {
        if (this.dummy) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.parseData(this.dummyResp.getMedicine));
        }
    };
    HttpcommService.prototype.genericGetRequest = function (url, notation) {
        if (notation === void 0) { notation = 'http get'; }
        return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(notation, new _models_models__WEBPACK_IMPORTED_MODULE_3__["Response"]())));
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