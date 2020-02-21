(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var i1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'OpenSponsorship';
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "router-outlet");
            i0.ɵɵelementEnd();
        } }, directives: [i1.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var core_2 = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/__ivy_ngcc__/fesm5/ngx-formly-core.js");
var bootstrap_1 = __webpack_require__(/*! @ngx-formly/bootstrap */ "./node_modules/@ngx-formly/bootstrap/__ivy_ngcc__/fesm5/ngx-formly-bootstrap.js");
var stepper_1 = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/stepper.js");
var table_1 = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/table.js");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var home_page_component_1 = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
var i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var i1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var i2 = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/__ivy_ngcc__/fesm5/ngx-formly-core.js");
exports.routes = [{ path: "", component: home_page_component_1.HomePageComponent }];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [app_component_1.AppComponent] });
    AppModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
                table_1.MatTableModule,
                router_1.RouterModule.forRoot(exports.routes),
                animations_1.BrowserAnimationsModule,
                forms_1.ReactiveFormsModule,
                stepper_1.MatStepperModule,
                bootstrap_1.FormlyBootstrapModule,
                core_2.FormlyModule.forRoot({
                    validationMessages: [
                        { name: "required", message: "This field is required" }
                    ]
                })
            ]] });
    return AppModule;
}());
exports.AppModule = AppModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [app_component_1.AppComponent, home_page_component_1.HomePageComponent], imports: [table_1.MatTableModule, i1.RouterModule, animations_1.BrowserAnimationsModule,
        forms_1.ReactiveFormsModule,
        stepper_1.MatStepperModule,
        bootstrap_1.FormlyBootstrapModule, i2.FormlyModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: [app_component_1.AppComponent, home_page_component_1.HomePageComponent],
                imports: [
                    table_1.MatTableModule,
                    router_1.RouterModule.forRoot(exports.routes),
                    animations_1.BrowserAnimationsModule,
                    forms_1.ReactiveFormsModule,
                    stepper_1.MatStepperModule,
                    bootstrap_1.FormlyBootstrapModule,
                    core_2.FormlyModule.forRoot({
                        validationMessages: [
                            { name: "required", message: "This field is required" }
                        ]
                    })
                ],
                bootstrap: [app_component_1.AppComponent]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var axios_1 = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
var i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var i1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var i2 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var i3 = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/stepper.js");
var i4 = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/table.js");
var i5 = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/__ivy_ngcc__/fesm5/ngx-formly-core.js");
function HomePageComponent_table_0_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 17);
    i0.ɵɵtext(1, "No.");
    i0.ɵɵelementEnd();
} }
function HomePageComponent_table_0_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r19 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r19.position, " ");
} }
function HomePageComponent_table_0_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 17);
    i0.ɵɵtext(1, "Name");
    i0.ɵɵelementEnd();
} }
function HomePageComponent_table_0_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r20 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r20.name, " ");
} }
function HomePageComponent_table_0_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 17);
    i0.ɵɵtext(1, "Gender");
    i0.ɵɵelementEnd();
} }
function HomePageComponent_table_0_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r21 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r21.gender);
} }
function HomePageComponent_table_0_th_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 17);
    i0.ɵɵtext(1, "Date of Birth");
    i0.ɵɵelementEnd();
} }
function HomePageComponent_table_0_td_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r22 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r22.birth);
} }
function HomePageComponent_table_0_th_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 17);
    i0.ɵɵtext(1, "Nationality");
    i0.ɵɵelementEnd();
} }
function HomePageComponent_table_0_td_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r23 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r23.nationality);
} }
function HomePageComponent_table_0_th_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 17);
    i0.ɵɵtext(1, "Association");
    i0.ɵɵelementEnd();
} }
function HomePageComponent_table_0_td_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r24 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r24.association);
} }
function HomePageComponent_table_0_th_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 17);
    i0.ɵɵtext(1, "Team");
    i0.ɵɵelementEnd();
} }
function HomePageComponent_table_0_td_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r25 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r25.team);
} }
function HomePageComponent_table_0_tr_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 19);
} }
function HomePageComponent_table_0_tr_23_Template(rf, ctx) { if (rf & 1) {
    var _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 20);
    i0.ɵɵlistener("click", function HomePageComponent_table_0_tr_23_Template_tr_click_0_listener($event) { i0.ɵɵrestoreView(_r28); var row_r26 = ctx.$implicit; var ctx_r27 = i0.ɵɵnextContext(2); return ctx_r27.getRecord(row_r26); });
    i0.ɵɵelementEnd();
} }
function HomePageComponent_table_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 5);
    i0.ɵɵelementContainerStart(1, 6);
    i0.ɵɵtemplate(2, HomePageComponent_table_0_th_2_Template, 2, 0, "th", 7);
    i0.ɵɵtemplate(3, HomePageComponent_table_0_td_3_Template, 2, 1, "td", 8);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(4, 9);
    i0.ɵɵtemplate(5, HomePageComponent_table_0_th_5_Template, 2, 0, "th", 7);
    i0.ɵɵtemplate(6, HomePageComponent_table_0_td_6_Template, 2, 1, "td", 8);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(7, 10);
    i0.ɵɵtemplate(8, HomePageComponent_table_0_th_8_Template, 2, 0, "th", 7);
    i0.ɵɵtemplate(9, HomePageComponent_table_0_td_9_Template, 2, 1, "td", 8);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(10, 11);
    i0.ɵɵtemplate(11, HomePageComponent_table_0_th_11_Template, 2, 0, "th", 7);
    i0.ɵɵtemplate(12, HomePageComponent_table_0_td_12_Template, 2, 1, "td", 8);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(13, 12);
    i0.ɵɵtemplate(14, HomePageComponent_table_0_th_14_Template, 2, 0, "th", 7);
    i0.ɵɵtemplate(15, HomePageComponent_table_0_td_15_Template, 2, 1, "td", 8);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(16, 13);
    i0.ɵɵtemplate(17, HomePageComponent_table_0_th_17_Template, 2, 0, "th", 7);
    i0.ɵɵtemplate(18, HomePageComponent_table_0_td_18_Template, 2, 1, "td", 8);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(19, 14);
    i0.ɵɵtemplate(20, HomePageComponent_table_0_th_20_Template, 2, 0, "th", 7);
    i0.ɵɵtemplate(21, HomePageComponent_table_0_td_21_Template, 2, 1, "td", 8);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(22, HomePageComponent_table_0_tr_22_Template, 1, 0, "tr", 15);
    i0.ɵɵtemplate(23, HomePageComponent_table_0_tr_23_Template, 1, 0, "tr", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("dataSource", ctx_r0.dataSource)("hidden", ctx_r0.isShowForm);
    i0.ɵɵadvance(22);
    i0.ɵɵproperty("matHeaderRowDef", ctx_r0.displayedColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matRowDefColumns", ctx_r0.displayedColumns);
} }
function HomePageComponent_mat_step_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    var step_r29 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtextInterpolate(step_r29.label);
} }
function HomePageComponent_mat_step_3_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 27);
    i0.ɵɵlistener("click", function HomePageComponent_mat_step_3_button_4_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r39); var index_r30 = i0.ɵɵnextContext().index; var ctx_r37 = i0.ɵɵnextContext(); return ctx_r37.prevStep(index_r30); });
    i0.ɵɵtext(1, " Back ");
    i0.ɵɵelementEnd();
} }
function HomePageComponent_mat_step_3_button_5_Template(rf, ctx) { if (rf & 1) {
    var _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 28);
    i0.ɵɵlistener("click", function HomePageComponent_mat_step_3_button_5_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r42); var index_r30 = i0.ɵɵnextContext().index; var ctx_r40 = i0.ɵɵnextContext(); return ctx_r40.nextStep(index_r30); });
    i0.ɵɵtext(1, " Next ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var index_r30 = i0.ɵɵnextContext().index;
    var ctx_r34 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", !ctx_r34.form.at(index_r30).valid);
} }
function HomePageComponent_mat_step_3_button_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 29);
    i0.ɵɵtext(1, " Submit ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r35 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", !ctx_r35.form.valid);
} }
function HomePageComponent_mat_step_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-step");
    i0.ɵɵtemplate(1, HomePageComponent_mat_step_3_ng_template_1_Template, 1, 1, "ng-template", 21);
    i0.ɵɵelement(2, "formly-form", 22);
    i0.ɵɵelementStart(3, "div", 23);
    i0.ɵɵtemplate(4, HomePageComponent_mat_step_3_button_4_Template, 2, 0, "button", 24);
    i0.ɵɵtemplate(5, HomePageComponent_mat_step_3_button_5_Template, 2, 1, "button", 25);
    i0.ɵɵtemplate(6, HomePageComponent_mat_step_3_button_6_Template, 2, 1, "button", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var step_r29 = ctx.$implicit;
    var index_r30 = ctx.index;
    var last_r31 = ctx.last;
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("form", ctx_r1.form.at(index_r30))("model", ctx_r1.model)("fields", step_r29.fields)("options", ctx_r1.options[index_r30]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", index_r30 !== 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !last_r31);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", last_r31);
} }
function HomePageComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    var _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function HomePageComponent_button_5_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r45); var ctx_r44 = i0.ɵɵnextContext(); return ctx_r44.changeVis(); });
    i0.ɵɵtext(1, " Upload New Profile ");
    i0.ɵɵelementEnd();
} }
var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
        var _this = this;
        this.isShowForm = false;
        this.isLoaded = false;
        this.isButtonVisible = true;
        this.isEditing = false;
        this.editData = null;
        this.dataSource = [];
        this.displayedColumns = [
            "position",
            "name",
            "gender",
            "birth",
            "association",
            "nationality",
            "team"
        ];
        this.activedStep = 0;
        this.showForm = false;
        this.model = {};
        this.steps = [
            {
                label: "Basic Info",
                fields: [
                    {
                        key: "name",
                        type: "input",
                        // defaultValue: this.model,
                        templateOptions: {
                            label: "Name",
                            required: true
                        }
                    },
                    {
                        key: "gender",
                        type: "select",
                        templateOptions: {
                            required: true,
                            // multiple: true,
                            label: "Gender",
                            labelProp: "name",
                            options: [
                                {
                                    name: "Male",
                                    value: "male"
                                },
                                {
                                    name: "Female",
                                    value: "female"
                                }
                            ]
                        }
                    },
                    {
                        key: "birth",
                        type: "input",
                        templateOptions: {
                            type: "date",
                            label: "Date of Birth",
                            required: true
                        }
                    },
                    {
                        key: "nationality",
                        type: "input",
                        defaultValue: "N/A",
                        templateOptions: {
                            type: "text",
                            label: "Nationality"
                        }
                    },
                    {
                        key: "location",
                        type: "input",
                        defaultValue: "N/A",
                        templateOptions: {
                            type: "text",
                            label: "Location"
                        }
                    },
                    {
                        key: "marital",
                        type: "select",
                        defaultValue: "N/A",
                        templateOptions: {
                            label: "Marital status",
                            labelProp: "name",
                            options: [
                                {
                                    name: "Single",
                                    value: "single"
                                },
                                {
                                    name: "Married",
                                    value: "married"
                                }
                            ]
                        }
                    }
                ]
            },
            {
                label: "Personal",
                fields: [
                    {
                        key: "interest",
                        type: "input",
                        defaultValue: "N/A",
                        templateOptions: {
                            label: "Interest",
                            type: "text"
                        }
                    },
                    {
                        key: "alcohol",
                        type: "select",
                        defaultValue: "N/A",
                        templateOptions: {
                            label: "Alcohol?",
                            labelProp: "name",
                            options: [
                                {
                                    name: "Yes",
                                    value: "yes"
                                },
                                {
                                    name: "No",
                                    value: "no"
                                }
                            ]
                        }
                    },
                    {
                        key: "pets",
                        type: "input",
                        defaultValue: "N/A",
                        templateOptions: {
                            label: "Pet(s)"
                        }
                    },
                    {
                        key: "charities",
                        type: "input",
                        defaultValue: "N/A",
                        templateOptions: {
                            label: "Charities"
                        }
                    }
                ]
            },
            {
                label: "Sports",
                fields: [
                    {
                        key: "team",
                        type: "input",
                        templateOptions: {
                            type: "text",
                            label: "Team",
                            required: true
                        }
                    },
                    {
                        key: "association",
                        type: "input",
                        templateOptions: {
                            type: "input",
                            label: "Association",
                            required: true
                        }
                    },
                    {
                        key: "sports",
                        type: "select",
                        defaultValue: "N/A",
                        templateOptions: {
                            label: "Sports",
                            multiple: true,
                            labelProp: "name",
                            options: [
                                {
                                    name: "Golf",
                                    value: "golf"
                                },
                                {
                                    name: "Tennis",
                                    value: "tennis"
                                },
                                {
                                    name: "Cricket",
                                    value: "cricket"
                                },
                                {
                                    name: "Basketball",
                                    value: "basketball"
                                },
                                {
                                    name: "Baseball",
                                    value: "baseball"
                                },
                                {
                                    name: "Aquatics",
                                    value: "aquatics"
                                },
                                {
                                    name: "American Football",
                                    value: "american football"
                                },
                                {
                                    name: "Archery",
                                    value: "archery"
                                },
                                {
                                    name: "Automobile Racing",
                                    value: "automobile racing"
                                },
                                {
                                    name: "Badminton",
                                    value: "badminton"
                                },
                                {
                                    name: "Beach Volleyball",
                                    value: "beach volleyball"
                                },
                                {
                                    name: "Bobsleigh",
                                    value: "bobsleigh"
                                },
                                {
                                    name: "Body Building",
                                    value: "body building"
                                },
                                {
                                    name: "Boxing",
                                    value: "boxing"
                                },
                                {
                                    name: "Cross Country Running",
                                    value: "cross country running"
                                },
                                {
                                    name: "Cross Country Skiing",
                                    value: "cross country skiing"
                                },
                                {
                                    name: "Curling",
                                    value: "curling"
                                },
                                {
                                    name: "Cycling",
                                    value: "cycling"
                                },
                                {
                                    name: "Darts",
                                    value: "darts"
                                },
                                {
                                    name: "Decathlon",
                                    value: "decathlon"
                                },
                                {
                                    name: "Down Hill Skiing",
                                    value: "down hill skiing"
                                },
                                {
                                    name: "Equestrianism",
                                    value: "equestrianism"
                                },
                                {
                                    name: "eSports",
                                    value: "esports"
                                },
                                {
                                    name: "Fencing",
                                    value: "fencing"
                                },
                                {
                                    name: "Field Hockey",
                                    value: "field hockey"
                                },
                                {
                                    name: "Figure Skating",
                                    value: "figure skating"
                                },
                                {
                                    name: "Gymnastics",
                                    value: "gymnastics"
                                },
                                {
                                    name: "Ice Hockey",
                                    value: "ice hockey"
                                },
                                {
                                    name: "Martial Arts",
                                    value: "martial arts"
                                },
                                {
                                    name: "Mixed Martial Arts",
                                    value: "mixed martial arts"
                                },
                                {
                                    name: "Netball",
                                    value: "netball"
                                },
                                {
                                    name: "Polo",
                                    value: "polo"
                                },
                                {
                                    name: "Racquetball",
                                    value: "racquetball"
                                },
                                {
                                    name: "Rowing",
                                    value: "rowing"
                                },
                                {
                                    name: "Rugby",
                                    value: "rugby"
                                },
                                {
                                    name: "Sailing",
                                    value: "sailing"
                                },
                                {
                                    name: "Softball",
                                    value: "softball"
                                },
                                {
                                    name: "Shooting",
                                    value: "shooting"
                                },
                                {
                                    name: "Skateboarding",
                                    value: "skateboarding"
                                },
                                {
                                    name: "Skeet Shooting",
                                    value: "skeet shooting"
                                },
                                {
                                    name: "Skeleton",
                                    value: "skeleton"
                                },
                                {
                                    name: "Soccer",
                                    value: "soccer"
                                },
                                {
                                    name: "Squash",
                                    value: "squash"
                                },
                                {
                                    name: "Surfing",
                                    value: "surfing"
                                },
                                {
                                    name: "Swimming",
                                    value: "swimming"
                                },
                                {
                                    name: "Track and Field",
                                    value: "track and field"
                                }
                            ]
                        }
                    }
                ]
            },
            {
                label: "About",
                fields: [
                    {
                        key: "desc",
                        type: "input",
                        defaultValue: "N/A",
                        templateOptions: {
                            type: "text",
                            label: "Description"
                        }
                    },
                    {
                        key: "profile",
                        type: "input",
                        templateOptions: {
                            type: "file",
                            label: "Profile",
                            required: true
                        }
                    },
                    {
                        key: "media",
                        type: "input",
                        defaultValue: "N/A",
                        templateOptions: {
                            label: "Social Media"
                        }
                    }
                ]
            }
        ];
        this.form = new forms_1.FormArray(this.steps.map(function () { return new forms_1.FormGroup({}); }));
        this.options = this.steps.map(function () { return ({}); });
        this.prevStep = function (step) {
            _this.activedStep = step - 1;
        };
        this.nextStep = function (step) {
            _this.activedStep = step + 1;
        };
        this.changeVis = function () {
            // alert(this.open);
            _this.isShowForm = !_this.isShowForm;
            _this.isButtonVisible = !_this.isButtonVisible;
        };
        this.submit = function () {
            if (_this.isEditing) {
                axios_1.default
                    .put("http://localhost:3000/api", _this.model)
                    .then(function (response) {
                    alert("Edit succeeded!");
                    window.location.reload();
                })
                    .catch(function (error) {
                    console.log(error);
                });
            }
            else {
                axios_1.default
                    .post("http://localhost:3000/api", _this.model)
                    .then(function (response) {
                    alert("Upload succeeded!");
                    // this.isButtonVisible = !this.isButtonVisible;
                    // this.isShowForm = !this.isShowForm;
                    window.location.reload();
                })
                    .catch(function (error) {
                    console.log(error);
                });
            }
        };
        this.getRecord = function (row) {
            // this.editData = this.allData[row.position - 1];
            _this.model = _this.allData[row.position - 1];
            _this.isShowForm = !_this.isShowForm;
            _this.isButtonVisible = !_this.isButtonVisible;
            _this.isEditing = !_this.isEditing;
            console.info(_this.model);
        };
    }
    HomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = [];
        axios_1.default
            .get("http://localhost:3000/api")
            .then(function (response) {
            _this.allData = response.data;
            return response.data.map(function (person, index) {
                _this.dataSource.push({
                    position: index + 1,
                    name: person.name,
                    gender: person.gender,
                    birth: person.birth,
                    nationality: person.nationality,
                    association: person.association,
                    team: person.team
                });
            });
        })
            .then(function () {
            _this.isLoaded = !_this.isLoaded;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
    HomePageComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 6, vars: 5, consts: [["mat-table", "", "class", "mat-elevation-z8", 3, "dataSource", "hidden", 4, "ngIf"], [3, "formGroup", "hidden", "ngSubmit"], [4, "ngFor", "ngForOf"], [1, "upload-button"], ["type", "button", 3, "click", 4, "ngIf"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource", "hidden"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "gender"], ["matColumnDef", "birth"], ["matColumnDef", "nationality"], ["matColumnDef", "association"], ["matColumnDef", "team"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"], ["matStepLabel", ""], [3, "form", "model", "fields", "options"], [1, "buttons"], ["matStepperPrevious", "", "class", "btn btn-primary", "type", "button", 3, "click", 4, "ngIf"], ["matStepperNext", "", "class", "btn btn-primary", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-primary", "type", "submit", 3, "disabled", 4, "ngIf"], ["matStepperPrevious", "", "type", "button", 1, "btn", "btn-primary", 3, "click"], ["matStepperNext", "", "type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 3, "click"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, HomePageComponent_table_0_Template, 24, 4, "table", 0);
            i0.ɵɵelementStart(1, "form", 1);
            i0.ɵɵlistener("ngSubmit", function HomePageComponent_Template_form_ngSubmit_1_listener($event) { return ctx.submit(); });
            i0.ɵɵelementStart(2, "mat-horizontal-stepper");
            i0.ɵɵtemplate(3, HomePageComponent_mat_step_3_Template, 7, 7, "mat-step", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵtemplate(5, HomePageComponent_button_5_Template, 2, 0, "button", 4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isLoaded);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.form)("hidden", !ctx.isShowForm);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.steps);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.isButtonVisible);
        } }, directives: [i1.NgIf, i2.ɵangular_packages_forms_forms_y, i2.NgControlStatusGroup, i2.FormGroupDirective, i3.MatHorizontalStepper, i1.NgForOf, i4.MatTable, i4.MatColumnDef, i4.MatHeaderCellDef, i4.MatCellDef, i4.MatHeaderRowDef, i4.MatRowDef, i4.MatHeaderCell, i4.MatCell, i4.MatHeaderRow, i4.MatRow, i3.MatStep, i3.MatStepLabel, i5.FormlyForm, i3.MatStepperPrevious, i3.MatStepperNext], styles: [".mat-step-header .mat-step-icon {\n  display: none;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.upload-button[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n}\n\n.upload-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n  \n  border-radius: 4px;\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-decoration: none;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL0M6XFxVc2Vyc1xcbGl1ejZcXERlc2t0b3BcXFdvcmtcXE9BXFxPcGVuU3BvbnNvcnNoaXAvc3JjXFxhcHBcXGhvbWUtcGFnZVxcaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREdFO0VBQ0Usa0JBQUE7QUNBSjs7QURJQTtFQUNFLGtCQUFBO0VBYUEsZ0JBQUE7QUNiRjs7QURDRTtFQUNFLHlCQUFBO0VBQTJCLFVBQUE7RUFDM0Isa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEscUJBQUE7RUFFQSxlQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4udXBsb2FkLWJ1dHRvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwOyAvKiBHcmVlbiAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG5cclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbiIsIjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJ1dHRvbnMgYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4udXBsb2FkLWJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi51cGxvYWQtYnV0dG9uIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XG4gIC8qIEdyZWVuICovXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHggMzJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE2cHg7XG59Il19 */"] });
    return HomePageComponent;
}());
exports.HomePageComponent = HomePageComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HomePageComponent, [{
        type: core_1.Component,
        args: [{
                selector: "app-home-page",
                templateUrl: "./home-page.component.html",
                styleUrls: ["./home-page.component.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __NgCli_bootstrap_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var __NgCli_bootstrap_2 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
__NgCli_bootstrap_2.platformBrowser().bootstrapModule(__NgCli_bootstrap_1.AppModule)
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\liuz6\Desktop\Work\OA\OpenSponsorship\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map