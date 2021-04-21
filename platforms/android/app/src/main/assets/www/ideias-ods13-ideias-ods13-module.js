(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ideias-ods13-ideias-ods13-module"],{

/***/ "Age6":
/*!*****************************************************!*\
  !*** ./src/app/ideias-ods13/ideias-ods13.module.ts ***!
  \*****************************************************/
/*! exports provided: IdeiasOds13PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeiasOds13PageModule", function() { return IdeiasOds13PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ideias_ods13_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ideias-ods13-routing.module */ "ZDI6");
/* harmony import */ var _ideias_ods13_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ideias-ods13.page */ "YwAa");







let IdeiasOds13PageModule = class IdeiasOds13PageModule {
};
IdeiasOds13PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ideias_ods13_routing_module__WEBPACK_IMPORTED_MODULE_5__["IdeiasOds13PageRoutingModule"]
        ],
        declarations: [_ideias_ods13_page__WEBPACK_IMPORTED_MODULE_6__["IdeiasOds13Page"]]
    })
], IdeiasOds13PageModule);



/***/ }),

/***/ "VtK3":
/*!*****************************************************!*\
  !*** ./src/app/ideias-ods13/ideias-ods13.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpZGVpYXMtb2RzMTMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "YwAa":
/*!***************************************************!*\
  !*** ./src/app/ideias-ods13/ideias-ods13.page.ts ***!
  \***************************************************/
/*! exports provided: IdeiasOds13Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeiasOds13Page", function() { return IdeiasOds13Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ideias_ods13_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ideias-ods13.page.html */ "ry20");
/* harmony import */ var _ideias_ods13_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ideias-ods13.page.scss */ "VtK3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let IdeiasOds13Page = class IdeiasOds13Page {
    constructor() { }
    ngOnInit() {
    }
};
IdeiasOds13Page.ctorParameters = () => [];
IdeiasOds13Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ideias-ods13',
        template: _raw_loader_ideias_ods13_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ideias_ods13_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IdeiasOds13Page);



/***/ }),

/***/ "ZDI6":
/*!*************************************************************!*\
  !*** ./src/app/ideias-ods13/ideias-ods13-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: IdeiasOds13PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeiasOds13PageRoutingModule", function() { return IdeiasOds13PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ideias_ods13_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ideias-ods13.page */ "YwAa");




const routes = [
    {
        path: '',
        component: _ideias_ods13_page__WEBPACK_IMPORTED_MODULE_3__["IdeiasOds13Page"]
    }
];
let IdeiasOds13PageRoutingModule = class IdeiasOds13PageRoutingModule {
};
IdeiasOds13PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IdeiasOds13PageRoutingModule);



/***/ }),

/***/ "ry20":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ideias-ods13/ideias-ods13.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>ideias-ods13</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=ideias-ods13-ideias-ods13-module.js.map