(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nosso-mandato-dashboard-admin-nosso-mandato-dashboard-admin-module"],{

/***/ "2YIs":
/*!***************************************************************************************!*\
  !*** ./src/app/nosso-mandato-dashboard-admin/nosso-mandato-dashboard-admin.page.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3Nzby1tYW5kYXRvLWRhc2hib2FyZC1hZG1pbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "JBAG":
/*!***********************************************************************************************!*\
  !*** ./src/app/nosso-mandato-dashboard-admin/nosso-mandato-dashboard-admin-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: NossoMandatoDashboardAdminPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NossoMandatoDashboardAdminPageRoutingModule", function() { return NossoMandatoDashboardAdminPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nosso_mandato_dashboard_admin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nosso-mandato-dashboard-admin.page */ "NbIc");




const routes = [
    {
        path: '',
        component: _nosso_mandato_dashboard_admin_page__WEBPACK_IMPORTED_MODULE_3__["NossoMandatoDashboardAdminPage"]
    }
];
let NossoMandatoDashboardAdminPageRoutingModule = class NossoMandatoDashboardAdminPageRoutingModule {
};
NossoMandatoDashboardAdminPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NossoMandatoDashboardAdminPageRoutingModule);



/***/ }),

/***/ "NbIc":
/*!*************************************************************************************!*\
  !*** ./src/app/nosso-mandato-dashboard-admin/nosso-mandato-dashboard-admin.page.ts ***!
  \*************************************************************************************/
/*! exports provided: NossoMandatoDashboardAdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NossoMandatoDashboardAdminPage", function() { return NossoMandatoDashboardAdminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nosso_mandato_dashboard_admin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nosso-mandato-dashboard-admin.page.html */ "qGjb");
/* harmony import */ var _nosso_mandato_dashboard_admin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nosso-mandato-dashboard-admin.page.scss */ "2YIs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let NossoMandatoDashboardAdminPage = class NossoMandatoDashboardAdminPage {
    constructor(nav) {
        this.nav = nav;
    }
    ngOnInit() {
    }
    proximo(values) {
        this.nav.navigateForward('/' + values);
    }
};
NossoMandatoDashboardAdminPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
NossoMandatoDashboardAdminPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nosso-mandato-dashboard-admin',
        template: _raw_loader_nosso_mandato_dashboard_admin_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nosso_mandato_dashboard_admin_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NossoMandatoDashboardAdminPage);



/***/ }),

/***/ "lkx+":
/*!***************************************************************************************!*\
  !*** ./src/app/nosso-mandato-dashboard-admin/nosso-mandato-dashboard-admin.module.ts ***!
  \***************************************************************************************/
/*! exports provided: NossoMandatoDashboardAdminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NossoMandatoDashboardAdminPageModule", function() { return NossoMandatoDashboardAdminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nosso_mandato_dashboard_admin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nosso-mandato-dashboard-admin-routing.module */ "JBAG");
/* harmony import */ var _nosso_mandato_dashboard_admin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nosso-mandato-dashboard-admin.page */ "NbIc");







let NossoMandatoDashboardAdminPageModule = class NossoMandatoDashboardAdminPageModule {
};
NossoMandatoDashboardAdminPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _nosso_mandato_dashboard_admin_routing_module__WEBPACK_IMPORTED_MODULE_5__["NossoMandatoDashboardAdminPageRoutingModule"]
        ],
        declarations: [_nosso_mandato_dashboard_admin_page__WEBPACK_IMPORTED_MODULE_6__["NossoMandatoDashboardAdminPage"]]
    })
], NossoMandatoDashboardAdminPageModule);



/***/ }),

/***/ "qGjb":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nosso-mandato-dashboard-admin/nosso-mandato-dashboard-admin.page.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"h-100\">\n    <div class=\"row h-100\">\n      <!-- menu -->\n      <div id=\"sideNav\" class=\"col-2 pe-0 component-bg-login sidenav\">\n        <div class=\"text-center\">\n          <img class=\"logo-dashboard\" src=\"../../assets/logo-vereador-andre.svg\" alt=\"Vereador André Fraga\" (click)=\"proximo('home')\">\n          <p class=\"salutation\">Olá, bem-vindo(a)!</p>\n          <div id=\"lateral-buttons\" class=\"text-start\">\n            <div class=\"button-dashboard mt-5\">\n              <a (click)=\"proximo('visao-geral')\"><img class=\"mouse-pointer\" src=\"../../assets/icon-visao-geral.svg\" alt=\"Visão Geral\"></a>\n            </div>\n            <div class=\"button-dashboard\">\n              <a (click)=\"proximo('quem-sou-dashboard-admin')\"><img class=\"mouse-pointer\" src=\"../../assets/icon-quem-sou.svg\" alt=\"Quem sou\"></a>\n            </div>\n            <div class=\"button-dashboard\">\n              <a (click)=\"proximo('nosso-mandato-dashboard-admin')\"><img class=\"mouse-pointer\" src=\"../../assets/icon-nosso-mandato.svg\" alt=\"Nosso mandato\"></a>\n            </div>\n            <div class=\"button-dashboard\">\n              <a (click)=\"proximo('colabore-dashboard-admin')\"><img class=\"mouse-pointer\" src=\"../../assets/icon-colabore.svg\" alt=\"Colabore\"></a>\n            </div>\n            <div class=\"button-dashboard\">\n              <a (click)=\"proximo('usuarios-cadastrados')\"><img class=\"mouse-pointer\" src=\"../../assets/icon-usuarios-cadastrados.svg\" alt=\"Usuários cadastrados\"></a>\n            </div>\n            <div class=\"button-dashboard\">\n              <a (click)=\"proximo('login')\"><img class=\"mouse-pointer\" src=\"../../assets/icon-sair.svg\" alt=\"Sair\"></a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- content -->\n      <div class=\"col-10 ps-0\">\n        <div class=\"container-fluid\">\n          <h1 class=\"title-dashboard\">NOSSO MANDATO</h1>\n          <div class=\"row\">\n            <ul class=\"nav nav-tabs justify-content-end\" id=\"myTab\" role=\"tablist\">\n              <li class=\"nav-item\" role=\"presentation\">\n                <button class=\"nav-link active\" id=\"home-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#home\" type=\"button\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">PROJETOS DE LEI</button>\n              </li>\n              <li class=\"nav-item\" role=\"presentation\">\n                <button class=\"nav-link\" id=\"profile-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#profile\" type=\"button\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">43 IDEIAS PARA SSA</button>\n              </li>\n              <li class=\"nav-item\" role=\"presentation\">\n                <button class=\"nav-link\" id=\"contact-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#contact\" type=\"button\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\">FISCALIZAÇÃO</button>\n              </li>\n            </ul>\n            <div class=\"tab-content\" id=\"myTabContent\">\n              <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n                <div class=\"row mt-5\">\n                    <div class=\"col-md-6 parent-element-vertically-left-center\">\n                      <div class=\"text-start child-element-vertically-center\">\n                        <p class=\"subtitle-dashboard mb-0\">PROJETOS DE LEI E DE INDICAÇÃO PROTOCOLADOS POR ANDRÉ</p>\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"text-end\">\n                        <button (click)=\"downloadUsers()\" type=\"button\" class=\"export-button btn btn-secondary btn-sm\">Incluir novo projeto</button>\n                      </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                      <hr class=\"divisor\">\n                    </div>\n                    <div class=\"col-md-12\">\n                      <p class=\"p-dashboard mb-0\">Sem projetos de lei, no momento</p>\n                    </div>\n                </div>\n              </div>\n              <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n                <div class=\"row mt-5\">\n                  <div class=\"col-md-6 parent-element-vertically-left-center\">\n                    <div class=\"text-start child-element-vertically-center\">\n                      <p class=\"subtitle-dashboard mb-0\">43 IDEIAS PARA SALVADOR</p>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <!-- <div class=\"text-end\">\n                      <button (click)=\"downloadUsers()\" type=\"button\" class=\"export-button btn btn-secondary btn-sm\">Exportar dados</button>\n                    </div> -->\n                  </div>\n                  <div class=\"col-md-12\">\n                    <hr class=\"divisor\">\n                  </div>\n                  <div class=\"col-md-12\">\n                    <p class=\"p-dashboard mb-0\">Sem ideias, no momento</p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"tab-pane fade\" id=\"contact\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">\n                <div class=\"row mt-5\">\n                  <div class=\"col-md-6 parent-element-vertically-left-center\">\n                    <div class=\"text-start child-element-vertically-center\">\n                      <p class=\"subtitle-dashboard mb-0\">AÇÕES DE FISCALIZAÇÃO E SEUS RESPECTIVOS EFEITOS</p>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"text-end\">\n                      <button (click)=\"downloadUsers()\" type=\"button\" class=\"export-button btn btn-secondary btn-sm\">Nova fiscalização</button>\n                    </div>\n                  </div>\n                  <div class=\"col-md-12\">\n                    <hr class=\"divisor\">\n                  </div>\n                  <div class=\"col-md-12\">\n                    <p class=\"p-dashboard mb-0\">Sem novas fiscalizações, no momento</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          \n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=nosso-mandato-dashboard-admin-nosso-mandato-dashboard-admin-module.js.map