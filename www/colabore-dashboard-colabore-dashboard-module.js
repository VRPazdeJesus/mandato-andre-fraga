(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["colabore-dashboard-colabore-dashboard-module"],{

/***/ "ArT4":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/colabore-dashboard/colabore-dashboard.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <!-- menu -->\n  <nav class=\"navbar navbar-expand-lg personal-navbar fixed-top\">\n    <div class=\"container-fluid distance-top-desktop mb-2\">\n      <img class=\"space-left-5 mouse-pointer\" src=\"../../assets/logo-cerebro.png\" alt=\"André Fraga\" (click)=\"proximo('home')\">\n      <button class=\"btn personal-btn-login\" (click)=\"proximo('colabore')\">Sair</button>\n    </div>\n    <div class=\"container-fluid distance-top-desktop mb-2\">\n      <div class=\"row mobile-menu\">\n        <div class=\"col-3 mouse-pointer personal-links-menu text-bottom\" (click)=\"proximo('home')\"><span class=\"project-text-white\">Quem sou</span></div>\n        <div class=\"col-3 mouse-pointer personal-links-menu\" (click)=\"proximo('nosso-mandato')\"><span class=\"project-text-white\">Nosso Mandato</span></div>\n        <div class=\"col-3 mouse-pointer personal-links-menu text-bottom component-active\" (click)=\"proximo('colabore')\"><span>Colabore</span></div>\n        <div class=\"col-3 mouse-pointer personal-links-menu text-bottom\" (click)=\"proximo('contato')\"><span class=\"project-text-white\">Contato</span></div>\n      </div>\n      <div class=\"desktop-menu v-center-h-center\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item mouse-pointer personal-links-menu\" (click)=\"proximo('home')\"><span class=\"project-text-white\">Quem sou</span></li>\n          <li class=\"nav-item mouse-pointer personal-links-menu ms-4\" (click)=\"proximo('nosso-mandato')\"><span class=\"project-text-white\">Nosso Mandato</span></li>\n          <li class=\"nav-item mouse-pointer personal-links-menu ms-4 component-active\" (click)=\"proximo('colabore')\"><span>Colabore</span></li>\n          <li class=\"nav-item mouse-pointer personal-links-menu ms-4\" (click)=\"proximo('contato')\"><span class=\"project-text-white\">Contato</span></li>\n          <li class=\"nav-item mouse-pointer personal-links-menu ms-4\" (click)=\"proximo('colabore')\"><span class=\"project-text-white\">Login</span></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <!-- botão voltar -->\n  <div class=\"container component-space-nav-8\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <button type=\"button\" class=\"btn btn-outline-secondary btn-back\" (click)=\"proximo('home')\"><span class=\"fas fa-angle-left\"></span>  Voltar</button>\n      </div>\n    </div>\n  </div>\n  <!-- logo Nosso Mandato -->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 text-center mt-3\">\n        <img src=\"../../assets/colabore.png\" alt=\"Nosso Mandato\">\n      </div>\n    </div>\n  </div>\n  <div class=\"component-bg-grey\">\n    <div class=\"container\">\n      <div class=\"row resize-margin\">\n        <div class=\"col-md-12 space-to-footer\">\n          <p class=\"component-text-black mt-4\">Durante o mandato, este aqui é um dos canais de comunicação e colaboração, onde você poderá sugerir ideias, projetos de leis, fazer denúncias e opinar com as principais ações.</p>\n          <div class=\"mt-4 resize-margin\">\n            <div class=\"mb-4\">\n              <ion-card (click)=\"proximo('fazer-denuncia')\" class=\"component-bg-light mouse-pointer\" style=\"border-radius: 16px;\">\n                <ion-card-content>\n                  <div class=\"row\">\n                    <div class=\"col-3\">\n                      <img src=\"../../assets/icon-mega-fone.png\" alt=\"Mega fone\">\n                    </div>\n                    <div class=\"col-9 text-center\" style=\"display: flex; justify-content: center; align-content: center; flex-direction: column;\">\n                      <p style=\"color: #4D256C; font-size: 1rem; font-weight: bold;\">Fazer uma denúncia</p>\n                    </div>\n                  </div>\n                </ion-card-content>\n              </ion-card>\n            </div>\n            <div class=\"mb-4\">\n              <ion-card (click)=\"proximo('sugerir-projeto-de-leis')\" class=\"component-bg-light mouse-pointer\" style=\"border-radius: 16px;\">\n                <ion-card-content>\n                  <div class=\"row\">\n                    <div class=\"col-3\">\n                      <img src=\"../../assets/icon-sugerir-projeto.png\" alt=\"Mega fone\">\n                    </div>\n                    <div class=\"col-9 text-center\" style=\"display: flex; justify-content: center; align-content: center; flex-direction: column;\">\n                      <p style=\"color: #4D256C; font-size: 1rem; font-weight: bold;\">Sugerir projeto de lei</p>\n                    </div>\n                  </div>\n                </ion-card-content>\n              </ion-card>\n            </div>\n            <div class=\"mb-4\">\n              <ion-card (click)=\"proximo('edital-de-emenda')\" class=\"component-bg-light mouse-pointer\" style=\"border-radius: 16px;\">\n                <ion-card-content>\n                  <div class=\"row\">\n                    <div class=\"col-3\">\n                      <img src=\"../../assets/icon-inscrever-projeto.png\" alt=\"Mega fone\">\n                    </div>\n                    <div class=\"col-9 text-center\" style=\"display: flex; justify-content: center; align-content: center; flex-direction: column;\">\n                      <p style=\"color: #4D256C; font-size: 1rem; font-weight: bold;\">Ver edital de emenda</p>\n                    </div>\n                  </div>\n                </ion-card-content>\n              </ion-card>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- rodapé -->\n    <footer class=\"footer mt-auto py-3 component-footer z-index-up\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <!-- titulo -->\n          <div class=\"col-12 text-center\">\n            <h6 class=\"project-text-white\">ME SEGUE LÁ</h6>\n          </div>\n          <!-- ícones -->\n          <div class=\"col-12 text-center inline-father\">\n            <a href=\"https://twitter.com/euandrefraga\" target=\"_blank\">\n              <div class=\"inline-child space-icon\">\n                <img src=\"../../assets/icon-twitter.png\" alt=\"Twitter\">\n              </div>\n            </a>\n            <a href=\"https://www.facebook.com/euandrefraga\" target=\"_blank\">\n              <div class=\"inline-child space-icon\">\n                <img src=\"../../assets/icon-facebook.png\" alt=\"Facebook\">\n              </div>\n            </a>\n            <a href=\"https://www.instagram.com/euandrefraga/\" target=\"_blank\">\n              <div class=\"inline-child space-icon\">\n                <img src=\"../../assets/icon-instagram.png\" alt=\"Instagram\">\n              </div>\n            </a>\n            <a href=\"https://www.youtube.com/channel/UC7BSLZW3MscGlXvc1dpHekA\" target=\"_blank\">\n              <div class=\"inline-child space-icon\">\n                <img src=\"../../assets/icon-youtube.png\" alt=\"YouTube\">\n              </div>\n            </a>\n            <a href=\"https://www.linkedin.com/in/andr%C3%A9-fraga-b7b15434\" target=\"_blank\">\n              <div class=\"inline-child\">\n                <img src=\"../../assets/icon-linkedin.png\" alt=\"Linkedin\">\n              </div>\n            </a>\n          </div>\n          <!-- divisor -->\n          <div class=\"col-12\">\n            <hr class=\"footer-hr mt-4\">\n          </div>\n          <!-- contato -->\n          <div class=\"col-12\">\n            <p class=\"project-text-white fw-bold mb-1\">ENTRE EM CONTATO</p>\n            <p class=\"project-text-white mb-0 txt-300\">E-mail: andrefraga@cms.ba.gov</p>\n            <p class=\"project-text-white mb-0 txt-300\">Telefone: 71 9 9318-4941</p>\n            <p class=\"project-text-white txt-300\">Endereço: Rua Ruy Barbosa, nº27, Edf. Bahia Center, gabinete 33 - Centro - Salvador/BA</p>\n          </div>\n          <!-- titulo -->\n          <div class=\"col-12 text-center\">\n            <h6 class=\"project-text-white\">ANDRÉ FRAGA. TODOS OS DIREITOS RESERVADOS | 2021</h6>\n          </div>\n        </div>\n      </div>\n    </footer>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "Barg":
/*!*************************************************************************!*\
  !*** ./src/app/colabore-dashboard/colabore-dashboard-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ColaboreDashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColaboreDashboardPageRoutingModule", function() { return ColaboreDashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _colabore_dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colabore-dashboard.page */ "EweH");




const routes = [
    {
        path: '',
        component: _colabore_dashboard_page__WEBPACK_IMPORTED_MODULE_3__["ColaboreDashboardPage"]
    }
];
let ColaboreDashboardPageRoutingModule = class ColaboreDashboardPageRoutingModule {
};
ColaboreDashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ColaboreDashboardPageRoutingModule);



/***/ }),

/***/ "EweH":
/*!***************************************************************!*\
  !*** ./src/app/colabore-dashboard/colabore-dashboard.page.ts ***!
  \***************************************************************/
/*! exports provided: ColaboreDashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColaboreDashboardPage", function() { return ColaboreDashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_colabore_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./colabore-dashboard.page.html */ "ArT4");
/* harmony import */ var _colabore_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colabore-dashboard.page.scss */ "i5Wn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ColaboreDashboardPage = class ColaboreDashboardPage {
    constructor(nav) {
        this.nav = nav;
    }
    ngOnInit() {
    }
    proximo(values) {
        this.nav.navigateForward('/' + values);
    }
};
ColaboreDashboardPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
ColaboreDashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-colabore-dashboard',
        template: _raw_loader_colabore_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_colabore_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ColaboreDashboardPage);



/***/ }),

/***/ "i5Wn":
/*!*****************************************************************!*\
  !*** ./src/app/colabore-dashboard/colabore-dashboard.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xhYm9yZS1kYXNoYm9hcmQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "kDjz":
/*!*****************************************************************!*\
  !*** ./src/app/colabore-dashboard/colabore-dashboard.module.ts ***!
  \*****************************************************************/
/*! exports provided: ColaboreDashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColaboreDashboardPageModule", function() { return ColaboreDashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _colabore_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colabore-dashboard-routing.module */ "Barg");
/* harmony import */ var _colabore_dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./colabore-dashboard.page */ "EweH");







let ColaboreDashboardPageModule = class ColaboreDashboardPageModule {
};
ColaboreDashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _colabore_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["ColaboreDashboardPageRoutingModule"]
        ],
        declarations: [_colabore_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["ColaboreDashboardPage"]]
    })
], ColaboreDashboardPageModule);



/***/ })

}]);
//# sourceMappingURL=colabore-dashboard-colabore-dashboard-module.js.map