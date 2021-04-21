(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nosso-mandato-nosso-mandato-module"],{

/***/ "MbKc":
/*!*****************************************************!*\
  !*** ./src/app/nosso-mandato/nosso-mandato.page.ts ***!
  \*****************************************************/
/*! exports provided: NossoMandatoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NossoMandatoPage", function() { return NossoMandatoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nosso_mandato_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nosso-mandato.page.html */ "rv9k");
/* harmony import */ var _nosso_mandato_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nosso-mandato.page.scss */ "obWt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let NossoMandatoPage = class NossoMandatoPage {
    constructor(nav) {
        this.nav = nav;
    }
    ngOnInit() {
    }
    proximo(values) {
        this.nav.navigateForward('/' + values);
    }
};
NossoMandatoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
NossoMandatoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nosso-mandato',
        template: _raw_loader_nosso_mandato_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nosso_mandato_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NossoMandatoPage);



/***/ }),

/***/ "NGDJ":
/*!***************************************************************!*\
  !*** ./src/app/nosso-mandato/nosso-mandato-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: NossoMandatoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NossoMandatoPageRoutingModule", function() { return NossoMandatoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nosso_mandato_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nosso-mandato.page */ "MbKc");




const routes = [
    {
        path: '',
        component: _nosso_mandato_page__WEBPACK_IMPORTED_MODULE_3__["NossoMandatoPage"]
    }
];
let NossoMandatoPageRoutingModule = class NossoMandatoPageRoutingModule {
};
NossoMandatoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NossoMandatoPageRoutingModule);



/***/ }),

/***/ "m/sT":
/*!*******************************************************!*\
  !*** ./src/app/nosso-mandato/nosso-mandato.module.ts ***!
  \*******************************************************/
/*! exports provided: NossoMandatoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NossoMandatoPageModule", function() { return NossoMandatoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nosso_mandato_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nosso-mandato-routing.module */ "NGDJ");
/* harmony import */ var _nosso_mandato_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nosso-mandato.page */ "MbKc");







let NossoMandatoPageModule = class NossoMandatoPageModule {
};
NossoMandatoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _nosso_mandato_routing_module__WEBPACK_IMPORTED_MODULE_5__["NossoMandatoPageRoutingModule"]
        ],
        declarations: [_nosso_mandato_page__WEBPACK_IMPORTED_MODULE_6__["NossoMandatoPage"]]
    })
], NossoMandatoPageModule);



/***/ }),

/***/ "obWt":
/*!*******************************************************!*\
  !*** ./src/app/nosso-mandato/nosso-mandato.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3Nzby1tYW5kYXRvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "rv9k":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nosso-mandato/nosso-mandato.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <!-- menu -->\n  <nav class=\"navbar navbar-expand-lg personal-navbar fixed-top\">\n    <div class=\"container-fluid\">\n      <img class=\"space-left-5\" src=\"../../assets/logo-cerebro.png\" alt=\"André Fraga\" (click)=\"proximo('home')\">\n      <button class=\"btn personal-btn-login\" (click)=\"proximo('colabore')\">Login</button>\n    </div>\n    <div class=\"container-fluid mt-2\">\n      <div class=\"row\">\n        <div class=\"col-3 personal-links-menu text-bottom\" (click)=\"proximo('home')\"><span class=\"project-text-white\">Quem sou</span></div>\n        <div class=\"col-3 personal-links-menu component-active\"><span>Nosso Mandato</span></div>\n        <div class=\"col-3 personal-links-menu text-bottom\" (click)=\"proximo('colabore')\"><span class=\"project-text-white\">Colabore</span></div>\n        <div class=\"col-3 personal-links-menu text-bottom\" (click)=\"proximo('contato')\"><span class=\"project-text-white\">Contato</span></div>\n      </div>\n    </div>\n  </nav>\n  <!-- botão voltar -->\n  <div class=\"container component-space-nav-8\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <button type=\"button\" class=\"btn btn-outline-secondary btn-back\" (click)=\"proximo('home')\"><span class=\"fas fa-angle-left\"></span>  Voltar</button>\n      </div>\n    </div>\n  </div>\n  <!-- logo Nosso Mandato -->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 text-center mt-3\">\n        <img src=\"../../assets/nosso-mandato.png\" alt=\"Nosso Mandato\">\n      </div>\n      <div class=\"col-md-12 component-bg-grey space-to-footer\">\n        <p class=\"component-text-black mt-4\">Acompanhe o andamento dos projetos de lei e de indicação propostos pelo nosso mandato colaborativo. </p>\n        <p class=\"component-text-black\">Veja também como estamos implementando as 43 ideias para Salvador, formuladas em conjunto na época da campanha. </p>\n        <p class=\"component-text-black\">Por fim, veja as fiscalizações feitas por nós.</p>\n        <img class=\"w-100 mt-4\" src=\"../../assets/projetos-leis.png\" alt=\"Nosso Mandato\" (click)=\"proximo('projeto-de-lei')\">\n        <img class=\"w-100 mt-4\" src=\"../../assets/ideias.png\" alt=\"Nosso Mandato\" (click)=\"proximo('ideias')\">\n        <img class=\"w-100 mt-4\" src=\"../../assets/fiscalizacao.png\" alt=\"Nosso Mandato\" (click)=\"proximo('fiscalizacao')\">\n      </div>\n      <!-- rodapé -->\n      <footer class=\"footer mt-auto py-3 component-footer z-index-up\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <!-- titulo -->\n            <div class=\"col-12 text-center\">\n              <h6 class=\"project-text-white\">ME SEGUE LÁ</h6>\n            </div>\n            <!-- ícones -->\n            <div class=\"col-12 text-center inline-father\">\n              <a href=\"https://twitter.com/euandrefraga\" target=\"_blank\">\n                <div class=\"inline-child space-icon\">\n                  <img src=\"../../assets/icon-twitter.png\" alt=\"Twitter\">\n                </div>\n              </a>\n              <a href=\"https://www.facebook.com/euandrefraga\" target=\"_blank\">\n                <div class=\"inline-child space-icon\">\n                  <img src=\"../../assets/icon-facebook.png\" alt=\"Facebook\">\n                </div>\n              </a>\n              <a href=\"https://www.instagram.com/euandrefraga/\" target=\"_blank\">\n                <div class=\"inline-child space-icon\">\n                  <img src=\"../../assets/icon-instagram.png\" alt=\"Instagram\">\n                </div>\n              </a>\n              <a href=\"https://www.youtube.com/channel/UC7BSLZW3MscGlXvc1dpHekA\" target=\"_blank\">\n                <div class=\"inline-child space-icon\">\n                  <img src=\"../../assets/icon-youtube.png\" alt=\"YouTube\">\n                </div>\n              </a>\n              <a href=\"https://www.linkedin.com/in/andr%C3%A9-fraga-b7b15434\" target=\"_blank\">\n                <div class=\"inline-child\">\n                  <img src=\"../../assets/icon-linkedin.png\" alt=\"Linkedin\">\n                </div>\n              </a>\n            </div>\n            <!-- divisor -->\n            <div class=\"col-12\">\n              <hr class=\"footer-hr mt-4\">\n            </div>\n            <!-- contato -->\n            <div class=\"col-12\">\n              <p class=\"project-text-white fw-bold mb-1\">ENTRE EM CONTATO</p>\n              <p class=\"project-text-white mb-0 txt-300\">E-mail: andrefraga@cms.ba.gov</p>\n              <p class=\"project-text-white mb-0 txt-300\">Telefone: 71 9 9318-4941</p>\n              <p class=\"project-text-white txt-300\">Endereço: Rua Ruy Barbosa, nº27, Edf. Bahia Center, gabinete 33 - Centro - Salvador/BA</p>\n            </div>\n            <!-- titulo -->\n            <div class=\"col-12 text-center\">\n              <h6 class=\"project-text-white\">ANDRÉ FRAGA. TODOS OS DIREITOS RESERVADOS | 2021</h6>\n            </div>\n          </div>\n        </div>\n      </footer>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=nosso-mandato-nosso-mandato-module.js.map