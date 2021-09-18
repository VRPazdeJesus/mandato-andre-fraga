(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["colabore-dashboard-admin-colabore-dashboard-admin-module"],{

/***/ "+6VR":
/*!*************************************************************************************!*\
  !*** ./src/app/colabore-dashboard-admin/colabore-dashboard-admin-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ColaboreDashboardAdminPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColaboreDashboardAdminPageRoutingModule", function() { return ColaboreDashboardAdminPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _colabore_dashboard_admin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colabore-dashboard-admin.page */ "d27I");




const routes = [
    {
        path: '',
        component: _colabore_dashboard_admin_page__WEBPACK_IMPORTED_MODULE_3__["ColaboreDashboardAdminPage"]
    }
];
let ColaboreDashboardAdminPageRoutingModule = class ColaboreDashboardAdminPageRoutingModule {
};
ColaboreDashboardAdminPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ColaboreDashboardAdminPageRoutingModule);



/***/ }),

/***/ "4oQz":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/colabore-dashboard-admin/colabore-dashboard-admin.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"h-100\">\n    <div class=\"row h-100\">\n      <!-- menu -->\n      <div id=\"sideNav\" class=\"col-2 pe-0 component-bg-login sidenav\">\n        <div class=\"text-center\">\n          <img class=\"logo-dashboard\" src=\"../../assets/logo-vereador-andre.svg\" alt=\"Vereador André Fraga\" (click)=\"proximo('home')\">\n          <p class=\"salutation\">Olá, bem-vindo(a)!</p>\n          <div id=\"lateral-buttons\" class=\"text-start\">\n            <div class=\"button-dashboard mt-5\">\n              <a (click)=\"proximo('visao-geral')\"><img class=\"mouse-pointer\" src=\"../../assets/icon-visao-geral.svg\" alt=\"Visão Geral\"></a>\n            </div>\n            <div class=\"button-dashboard\">\n              <a (click)=\"proximo('quem-sou-dashboard-admin')\"><img class=\"mouse-pointer\" src=\"../../assets/icon-quem-sou.svg\" alt=\"Quem sou\"></a>\n            </div>\n            <div class=\"button-dashboard\">\n              <a (click)=\"proximo('nosso-mandato-dashboard-admin')\"><img class=\"mouse-pointer\" src=\"../../assets/icon-nosso-mandato.svg\" alt=\"Nosso mandato\"></a>\n            </div>\n            <div class=\"button-dashboard\">\n              <a (click)=\"proximo('colabore-dashboard-admin')\"><img class=\"mouse-pointer\" src=\"../../assets/icon-colabore.svg\" alt=\"Colabore\"></a>\n            </div>\n            <div class=\"button-dashboard\">\n              <a (click)=\"proximo('usuarios-cadastrados')\"><img class=\"mouse-pointer\" src=\"../../assets/icon-usuarios-cadastrados.svg\" alt=\"Usuários cadastrados\"></a>\n            </div>\n            <div class=\"button-dashboard\">\n              <a (click)=\"proximo('login')\"><img class=\"mouse-pointer\" src=\"../../assets/icon-sair.svg\" alt=\"Sair\"></a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- content -->\n      <div class=\"col-10 ps-0\">\n        <div class=\"container-fluid\">\n          <h1 class=\"title-dashboard\">Colabore</h1>\n          <div class=\"row\">\n            <ul class=\"nav nav-tabs justify-content-end\" id=\"myTab\" role=\"tablist\">\n              <li class=\"nav-item\" role=\"presentation\">\n                <button class=\"nav-link active\" id=\"home-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#home\" type=\"button\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">DENÚNCIAS</button>\n              </li>\n              <li class=\"nav-item\" role=\"presentation\">\n                <button class=\"nav-link\" id=\"profile-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#profile\" type=\"button\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">PROJETOS DE LEIS SUGERIDOS</button>\n              </li>\n              <li class=\"nav-item\" role=\"presentation\">\n                <button class=\"nav-link\" id=\"contact-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#contact\" type=\"button\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\">PROJETOS PARA EMENDA</button>\n              </li>\n            </ul>\n            <div class=\"tab-content\" id=\"myTabContent\">\n              <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n                <div class=\"row mt-5\">\n                    <div class=\"col-md-6 parent-element-vertically-left-center\">\n                      <div class=\"text-start child-element-vertically-center\">\n                        <p class=\"subtitle-dashboard mb-0\">DENÚNCIAS FEITAS PELOS CIDADÃOS</p>\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"text-end\">\n                        <button (click)=\"downloadUsers()\" type=\"button\" class=\"export-button btn btn-secondary btn-sm\">Exportar dados</button>\n                      </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                      <hr class=\"divisor\">\n                    </div>\n                    <div class=\"col-md-12\">\n                      <p class=\"p-dashboard mb-0\">Sem denúncias, no momento</p>\n                    </div>\n                </div>\n              </div>\n              <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n                <div class=\"row mt-5\">\n                  <div class=\"col-md-6 parent-element-vertically-left-center\">\n                    <div class=\"text-start child-element-vertically-center\">\n                      <p class=\"subtitle-dashboard mb-0\">PROJETOS DE LEI SUGERIDOS PELOS CIDADÃOS</p>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"text-end\">\n                      <button (click)=\"downloadUsers()\" type=\"button\" class=\"export-button btn btn-secondary btn-sm\">Exportar dados</button>\n                    </div>\n                  </div>\n                  <div class=\"col-md-12\">\n                    <hr class=\"divisor\">\n                  </div>\n                  <div class=\"col-md-12\">\n                    <p class=\"p-dashboard mb-0\">Sem novo projetos de leis, no momento</p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"tab-pane fade\" id=\"contact\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">\n                <div class=\"row mt-5\">\n                  <div class=\"col-md-6 parent-element-vertically-left-center\">\n                    <div class=\"text-start child-element-vertically-center\">\n                      <p class=\"subtitle-dashboard mb-0\">PROJETOS INSCRITOS PARA RECEBER EMENDA</p>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"text-end\">\n                      <button (click)=\"downloadUsers()\" type=\"button\" class=\"export-button btn btn-light-green btn-sm me-3\">Edital de Emendas</button>\n                      <button (click)=\"downloadUsers()\" type=\"button\" class=\"export-button btn btn-secondary btn-sm\">Exportar dados</button>\n                    </div>\n                  </div>\n                  <div class=\"col-md-12\">\n                    <hr class=\"divisor\">\n                  </div>\n                  <div class=\"col-md-12\">\n                    <p class=\"p-dashboard mb-0\">Sem projetos inscritos, no momento</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          \n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "TUxc":
/*!*****************************************************************************!*\
  !*** ./src/app/colabore-dashboard-admin/colabore-dashboard-admin.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ColaboreDashboardAdminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColaboreDashboardAdminPageModule", function() { return ColaboreDashboardAdminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _colabore_dashboard_admin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colabore-dashboard-admin-routing.module */ "+6VR");
/* harmony import */ var _colabore_dashboard_admin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./colabore-dashboard-admin.page */ "d27I");







let ColaboreDashboardAdminPageModule = class ColaboreDashboardAdminPageModule {
};
ColaboreDashboardAdminPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _colabore_dashboard_admin_routing_module__WEBPACK_IMPORTED_MODULE_5__["ColaboreDashboardAdminPageRoutingModule"]
        ],
        declarations: [_colabore_dashboard_admin_page__WEBPACK_IMPORTED_MODULE_6__["ColaboreDashboardAdminPage"]]
    })
], ColaboreDashboardAdminPageModule);



/***/ }),

/***/ "d27I":
/*!***************************************************************************!*\
  !*** ./src/app/colabore-dashboard-admin/colabore-dashboard-admin.page.ts ***!
  \***************************************************************************/
/*! exports provided: ColaboreDashboardAdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColaboreDashboardAdminPage", function() { return ColaboreDashboardAdminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_colabore_dashboard_admin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./colabore-dashboard-admin.page.html */ "4oQz");
/* harmony import */ var _colabore_dashboard_admin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colabore-dashboard-admin.page.scss */ "y4n3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ColaboreDashboardAdminPage = class ColaboreDashboardAdminPage {
    constructor(nav) {
        this.nav = nav;
    }
    ngOnInit() {
    }
    proximo(values) {
        this.nav.navigateForward('/' + values);
    }
};
ColaboreDashboardAdminPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
ColaboreDashboardAdminPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-colabore-dashboard-admin',
        template: _raw_loader_colabore_dashboard_admin_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_colabore_dashboard_admin_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ColaboreDashboardAdminPage);



/***/ }),

/***/ "y4n3":
/*!*****************************************************************************!*\
  !*** ./src/app/colabore-dashboard-admin/colabore-dashboard-admin.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xhYm9yZS1kYXNoYm9hcmQtYWRtaW4ucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=colabore-dashboard-admin-colabore-dashboard-admin-module.js.map