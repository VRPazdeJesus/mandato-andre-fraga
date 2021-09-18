(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contato-contato-module"],{

/***/ "Hywg":
/*!*******************************************!*\
  !*** ./src/app/contato/contato.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YXRvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "NNRZ":
/*!*****************************************!*\
  !*** ./src/app/contato/contato.page.ts ***!
  \*****************************************/
/*! exports provided: ContatoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatoPage", function() { return ContatoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contato_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contato.page.html */ "U48A");
/* harmony import */ var _contato_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contato.page.scss */ "Hywg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ContatoPage = class ContatoPage {
    constructor(nav) {
        this.nav = nav;
    }
    ngOnInit() {
    }
    proximo(values) {
        this.nav.navigateForward('/' + values);
    }
};
ContatoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
ContatoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contato',
        template: _raw_loader_contato_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contato_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContatoPage);



/***/ }),

/***/ "U48A":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contato/contato.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <!-- menu -->\n  <nav class=\"navbar navbar-expand-lg personal-navbar fixed-top\">\n    <div class=\"container-fluid\">\n      <img class=\"space-left-5\" src=\"../../assets/logo-cerebro.png\" alt=\"André Fraga\" (click)=\"proximo('home')\">\n      <button class=\"btn personal-btn-login\" (click)=\"proximo('colabore')\">Login</button>\n    </div>\n    <div class=\"container-fluid mt-2\">\n      <div class=\"row\">\n        <div class=\"col-3 personal-links-menu text-bottom\" (click)=\"proximo('home')\"><span class=\"project-text-white\">Quem sou</span></div>\n        <div class=\"col-3 personal-links-menu\" (click)=\"proximo('nosso-mandato')\"><span class=\"project-text-white\">Nosso Mandato</span></div>\n        <div class=\"col-3 personal-links-menu text-bottom\" (click)=\"proximo('colabore')\"><span>Colabore</span></div>\n        <div class=\"col-3 personal-links-menu text-bottom component-active\" (click)=\"proximo('contato')\"><span>Contato</span></div>\n      </div>\n    </div>\n  </nav>\n  <!-- botão voltar -->\n  <div class=\"container component-space-nav-8\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <button type=\"button\" class=\"btn btn-outline-secondary btn-back\" (click)=\"proximo('home')\"><span class=\"fas fa-angle-left\"></span>  Voltar</button>\n      </div>\n    </div>\n  </div>\n  <!-- logo Nosso Mandato -->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 text-center mt-3\">\n        <img src=\"../../assets/contato.png\" alt=\"Nosso Mandato\">\n      </div>\n      <div class=\"col-md-12 component-bg-grey space-to-footer\">\n        <p class=\"component-text-black mt-4\">Eu e minha equipe estamos a postos para fazer deste um mandato NOSSO.</p>\n        <p class=\"component-text-black mt-4\">Portanto, se você sentiu falta de algum conteúdo no site ou mesmo deseja solicitar uma agenda, conto com a sua colaboração, com o seu contato:</p>\n        <div class=\"mt-4\">\n          <div class=\"row\">\n            <div class=\"col-2\">\n              <img class=\"w-100\" src=\"../../assets/icone-localizacao.png\" alt=\"Localização\">\n            </div>\n            <div class=\"col-10\">\n              <p class=\"component-text-black fw-bold\">Endereço do gabinete: Rua Ruy Barbosa, nº27, Edf. Bahia Center, gabinete 33 - Centro - Salvador/BA</p>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-2\">\n              <img class=\"w-100\" src=\"../../assets/icone-email.png\" alt=\"Email\">\n            </div>\n            <div class=\"col-10\">\n              <p class=\"component-text-black fw-bold\">E-mail: andrefraga@cms.ba.gov <br>Ou agende com minha equipe através do whatsapp:</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"mb-3 d-grid gap-2 mt-3\">\n          <a target=\"_blank\" href=\"https://wa.me/5571993184941?text=Olá!\" role=\"button\" class=\"btn btn-block btn-secondary btn-colabore\"><span class=\"me-3\"><img src=\"../../assets/btn-whatsapp.png\" alt=\"Whatsapp\"></span> Fale com André</a>\n        </div>\n      </div>\n      <!-- rodapé -->\n      <footer class=\"footer mt-auto py-3 component-footer z-index-up\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <!-- titulo -->\n            <div class=\"col-12 text-center\">\n              <h6 class=\"project-text-white\">ME SEGUE LÁ</h6>\n            </div>\n            <!-- ícones -->\n            <div class=\"col-12 text-center inline-father\">\n              <a href=\"https://twitter.com/euandrefraga\" target=\"_blank\">\n                <div class=\"inline-child space-icon\">\n                  <img src=\"../../assets/icon-twitter.png\" alt=\"Twitter\">\n                </div>\n              </a>\n              <a href=\"https://www.facebook.com/euandrefraga\" target=\"_blank\">\n                <div class=\"inline-child space-icon\">\n                  <img src=\"../../assets/icon-facebook.png\" alt=\"Facebook\">\n                </div>\n              </a>\n              <a href=\"https://www.instagram.com/euandrefraga/\" target=\"_blank\">\n                <div class=\"inline-child space-icon\">\n                  <img src=\"../../assets/icon-instagram.png\" alt=\"Instagram\">\n                </div>\n              </a>\n              <a href=\"https://www.youtube.com/channel/UC7BSLZW3MscGlXvc1dpHekA\" target=\"_blank\">\n                <div class=\"inline-child space-icon\">\n                  <img src=\"../../assets/icon-youtube.png\" alt=\"YouTube\">\n                </div>\n              </a>\n              <a href=\"https://www.linkedin.com/in/andr%C3%A9-fraga-b7b15434\" target=\"_blank\">\n                <div class=\"inline-child\">\n                  <img src=\"../../assets/icon-linkedin.png\" alt=\"Linkedin\">\n                </div>\n              </a>\n            </div>\n            <!-- divisor -->\n            <div class=\"col-12\">\n              <hr class=\"footer-hr mt-4\">\n            </div>\n            <!-- contato -->\n            <div class=\"col-12\">\n              <p class=\"project-text-white fw-bold mb-1\">ENTRE EM CONTATO</p>\n              <p class=\"project-text-white mb-0 txt-300\">E-mail: andrefraga@cms.ba.gov</p>\n              <p class=\"project-text-white mb-0 txt-300\">Telefone: 71 9 9318-4941</p>\n              <p class=\"project-text-white txt-300\">Endereço: Rua Ruy Barbosa, nº27, Edf. Bahia Center, gabinete 33 - Centro - Salvador/BA</p>\n            </div>\n            <!-- titulo -->\n            <div class=\"col-12 text-center\">\n              <h6 class=\"project-text-white\">ANDRÉ FRAGA. TODOS OS DIREITOS RESERVADOS | 2021</h6>\n            </div>\n          </div>\n        </div>\n      </footer>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "saEW":
/*!***************************************************!*\
  !*** ./src/app/contato/contato-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ContatoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatoPageRoutingModule", function() { return ContatoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contato_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contato.page */ "NNRZ");




const routes = [
    {
        path: '',
        component: _contato_page__WEBPACK_IMPORTED_MODULE_3__["ContatoPage"]
    }
];
let ContatoPageRoutingModule = class ContatoPageRoutingModule {
};
ContatoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContatoPageRoutingModule);



/***/ }),

/***/ "v9yK":
/*!*******************************************!*\
  !*** ./src/app/contato/contato.module.ts ***!
  \*******************************************/
/*! exports provided: ContatoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatoPageModule", function() { return ContatoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _contato_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contato-routing.module */ "saEW");
/* harmony import */ var _contato_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contato.page */ "NNRZ");







let ContatoPageModule = class ContatoPageModule {
};
ContatoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contato_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContatoPageRoutingModule"]
        ],
        declarations: [_contato_page__WEBPACK_IMPORTED_MODULE_6__["ContatoPage"]]
    })
], ContatoPageModule);



/***/ })

}]);
//# sourceMappingURL=contato-contato-module.js.map