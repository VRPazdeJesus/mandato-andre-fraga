(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fiscalizacao-fiscalizacao-module"],{

/***/ "Qb7P":
/*!*****************************************************!*\
  !*** ./src/app/fiscalizacao/fiscalizacao.module.ts ***!
  \*****************************************************/
/*! exports provided: FiscalizacaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiscalizacaoPageModule", function() { return FiscalizacaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _fiscalizacao_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fiscalizacao-routing.module */ "oD4n");
/* harmony import */ var _fiscalizacao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fiscalizacao.page */ "TryG");







let FiscalizacaoPageModule = class FiscalizacaoPageModule {
};
FiscalizacaoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fiscalizacao_routing_module__WEBPACK_IMPORTED_MODULE_5__["FiscalizacaoPageRoutingModule"]
        ],
        declarations: [_fiscalizacao_page__WEBPACK_IMPORTED_MODULE_6__["FiscalizacaoPage"]]
    })
], FiscalizacaoPageModule);



/***/ }),

/***/ "TryG":
/*!***************************************************!*\
  !*** ./src/app/fiscalizacao/fiscalizacao.page.ts ***!
  \***************************************************/
/*! exports provided: FiscalizacaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiscalizacaoPage", function() { return FiscalizacaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_fiscalizacao_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./fiscalizacao.page.html */ "ZpaL");
/* harmony import */ var _fiscalizacao_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fiscalizacao.page.scss */ "rfxN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let FiscalizacaoPage = class FiscalizacaoPage {
    constructor(nav) {
        this.nav = nav;
    }
    ngOnInit() {
    }
    proximo(values) {
        this.nav.navigateForward('/' + values);
    }
};
FiscalizacaoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
FiscalizacaoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-fiscalizacao',
        template: _raw_loader_fiscalizacao_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_fiscalizacao_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FiscalizacaoPage);



/***/ }),

/***/ "ZpaL":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fiscalizacao/fiscalizacao.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <!-- menu -->\n  <nav class=\"navbar navbar-expand-lg personal-navbar fixed-top\">\n    <div class=\"container-fluid distance-top-desktop mb-2\">\n      <img class=\"space-left-5 mouse-pointer\" src=\"../../assets/logo-cerebro.png\" alt=\"Andr?? Fraga\" (click)=\"proximo('home')\">\n      <button class=\"btn personal-btn-login btn-mobile\" (click)=\"proximo('colabore')\">Login</button>\n    </div>\n\n    <div class=\"container-fluid distance-top-desktop mb-2 force-center mobile-menu\">\n      <div class=\"row\">\n        <div class=\"col-12 personal-titles-menu component-active mt-2\"><span>FISCALIZA????O</span></div>\n      </div>\n    </div>\n\n    <div class=\"container-fluid distance-top-desktop mb-2 force-center desktop-menu\">\n      <div class=\"row\">\n        <div class=\"col-12 personal-titles-menu-desktop component-active mt-2\"><span>FISCALIZA????O</span></div>\n      </div>\n    </div>\n  </nav>\n  <!-- bot??o voltar -->\n  <div class=\"container component-space-nav-8\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <button type=\"button\" class=\"btn btn-outline-secondary btn-back\" (click)=\"proximo('nosso-mandato')\"><span class=\"fas fa-angle-left\"></span>  Voltar</button>\n      </div>\n    </div>\n  </div>\n  <!-- logo Nosso Mandato -->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 text-center mt-3\">\n        <img src=\"../../assets/logo-fiscalizacao.png\" alt=\"Logo fiscaliza????o\">\n      </div>\n    </div>\n  </div>\n  <div class=\"component-bg-grey\">\n    <div class=\"container space-to-footer\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <p class=\"component-text-black mt-4\">Al??m de legislar, outra fun????o importante do vereador ?? a de fiscalizar o poder executivo municipal, cujos representantes s??o o prefeito e o vice-prefeito.</p>\n          <p class=\"component-text-black mt-4\">?? papel do vereador, portanto, representar a sociedade em sua pluralidade de interesses e  garantir que as pol??ticas p??blicas estejam sendo implementadas de fato.</p>\n          <p class=\"component-text-black mt-4\">Acompanhe, a seguir, as minhas a????es de fiscaliza????o e seus respectivos efeitos:</p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"card mouse-pointer\" style=\"border-radius: 35px 0px 35px 0px; background: linear-gradient(to bottom, var(--ion-color-primary) 0%, var(--ion-color-secondary) 100%); padding-left: 0px; padding-right: 0px;\">\n          <div class=\"card-body component-bg-light text-start\" style=\"margin-top: 10px; margin-bottom: 10px; border-radius: 35px 0px 35px 0px; height: 200px;\">\n            <div id=\"post-title\">\n              <h5 class=\"mt-0 card-title project-text-secondary fw-bold\">Titulo</h5>\n            </div>\n            <div id=\"post-description\">\n              <p class=\"card-text component-text-black container-text\">Descricao</p>\n            </div>\n            <a href=\"#\" class=\"post-link\">Clique para saber mais</a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- rodap?? -->\n    <footer class=\"footer mt-auto py-3 component-footer z-index-up\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <!-- titulo -->\n          <div class=\"col-12 text-center\">\n            <h6 class=\"project-text-white\">ME SEGUE L??</h6>\n          </div>\n          <!-- ??cones -->\n          <div class=\"col-12 text-center inline-father\">\n            <a href=\"https://twitter.com/euandrefraga\" target=\"_blank\">\n              <div class=\"inline-child space-icon\">\n                <img src=\"../../assets/icon-twitter.png\" alt=\"Twitter\">\n              </div>\n            </a>\n            <a href=\"https://www.facebook.com/euandrefraga\" target=\"_blank\">\n              <div class=\"inline-child space-icon\">\n                <img src=\"../../assets/icon-facebook.png\" alt=\"Facebook\">\n              </div>\n            </a>\n            <a href=\"https://www.instagram.com/euandrefraga/\" target=\"_blank\">\n              <div class=\"inline-child space-icon\">\n                <img src=\"../../assets/icon-instagram.png\" alt=\"Instagram\">\n              </div>\n            </a>\n            <a href=\"https://www.youtube.com/channel/UC7BSLZW3MscGlXvc1dpHekA\" target=\"_blank\">\n              <div class=\"inline-child space-icon\">\n                <img src=\"../../assets/icon-youtube.png\" alt=\"YouTube\">\n              </div>\n            </a>\n            <a href=\"https://www.linkedin.com/in/andr%C3%A9-fraga-b7b15434\" target=\"_blank\">\n              <div class=\"inline-child\">\n                <img src=\"../../assets/icon-linkedin.png\" alt=\"Linkedin\">\n              </div>\n            </a>\n          </div>\n          <!-- divisor -->\n          <div class=\"col-12\">\n            <hr class=\"footer-hr mt-4\">\n          </div>\n          <!-- contato -->\n          <div class=\"col-12\">\n            <p class=\"project-text-white fw-bold mb-1\">ENTRE EM CONTATO</p>\n            <p class=\"project-text-white mb-0 txt-300\">E-mail: andrefraga@cms.ba.gov</p>\n            <p class=\"project-text-white mb-0 txt-300\">Telefone: 71 9 9318-4941</p>\n            <p class=\"project-text-white txt-300\">Endere??o: Rua Ruy Barbosa, n??27, Edf. Bahia Center, gabinete 33 - Centro - Salvador/BA</p>\n          </div>\n          <!-- titulo -->\n          <div class=\"col-12 text-center\">\n            <h6 class=\"project-text-white\">ANDR?? FRAGA. TODOS OS DIREITOS RESERVADOS | 2021</h6>\n          </div>\n        </div>\n      </div>\n    </footer>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "oD4n":
/*!*************************************************************!*\
  !*** ./src/app/fiscalizacao/fiscalizacao-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: FiscalizacaoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiscalizacaoPageRoutingModule", function() { return FiscalizacaoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fiscalizacao_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fiscalizacao.page */ "TryG");




const routes = [
    {
        path: '',
        component: _fiscalizacao_page__WEBPACK_IMPORTED_MODULE_3__["FiscalizacaoPage"]
    }
];
let FiscalizacaoPageRoutingModule = class FiscalizacaoPageRoutingModule {
};
FiscalizacaoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FiscalizacaoPageRoutingModule);



/***/ }),

/***/ "rfxN":
/*!*****************************************************!*\
  !*** ./src/app/fiscalizacao/fiscalizacao.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaXNjYWxpemFjYW8ucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=fiscalizacao-fiscalizacao-module.js.map