(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resposta-de-envio-resposta-de-envio-module"],{

/***/ "2OpN":
/*!***************************************************************!*\
  !*** ./src/app/resposta-de-envio/resposta-de-envio.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNwb3N0YS1kZS1lbnZpby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "GUZC":
/*!***********************************************************************!*\
  !*** ./src/app/resposta-de-envio/resposta-de-envio-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: RespostaDeEnvioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RespostaDeEnvioPageRoutingModule", function() { return RespostaDeEnvioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _resposta_de_envio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resposta-de-envio.page */ "hsAk");




const routes = [
    {
        path: '',
        component: _resposta_de_envio_page__WEBPACK_IMPORTED_MODULE_3__["RespostaDeEnvioPage"]
    }
];
let RespostaDeEnvioPageRoutingModule = class RespostaDeEnvioPageRoutingModule {
};
RespostaDeEnvioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RespostaDeEnvioPageRoutingModule);



/***/ }),

/***/ "PN8N":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resposta-de-envio/resposta-de-envio.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <!-- menu -->\n  <nav class=\"navbar navbar-expand-lg personal-navbar fixed-top\">\n    <div class=\"container-fluid\">\n      <img class=\"space-left-5\" src=\"../../assets/logo-cerebro.png\" alt=\"André Fraga\" (click)=\"proximo('home')\">\n      <button class=\"btn personal-btn-login\" (click)=\"proximo('colabore')\">Sair</button>\n    </div>\n    <div class=\"container-fluid mt-2 force-center\">\n      <div class=\"row\">\n        <div class=\"col-12 personal-titles-menu component-active mt-2\"><span>{{ dataResponse.titlePage }}</span></div>\n      </div>\n    </div>\n  </nav>\n  <!-- botão voltar -->\n  <div class=\"container component-space-nav-8\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <button type=\"button\" class=\"btn btn-outline-secondary btn-back\" (click)=\"proximo('nosso-mandato')\"><span class=\"fas fa-angle-left\"></span>  Voltar</button>\n      </div>\n    </div>\n  </div>\n  <!-- logo Nosso Mandato -->\n  <div class=\"container\">\n    <div class=\"row\">\n      <!-- <div class=\"col-md-12 text-center mt-3\">\n        <img src=\"../../assets/43-ideias.png\" alt=\"Ideias para Salvador\">\n      </div> -->\n      <div class=\"col-md-12 space-to-footer\">\n        <p [class]=\"dataResponse.sucessResponse === true ? 'component-text-success mt-4' : 'component-text-danger mt-4'\">{{ dataResponse.titleContent }}</p>\n        <p class=\"component-text-black mt-4\">{{ dataResponse.descriptionContent }}</p>\n        <div class=\"row mt-5 mb-5\">\n          <div class=\"col-12 text-center\">\n            <img [src]=\"dataResponse.sucessResponse === true ? '../../assets/icon-toca-aqui.png' : '../../assets/icone-negativo.png'\" alt=\"ícone do conteúdo\">\n          </div>\n        </div>\n        <div class=\"row mt-3\">\n          <div class=\"col-6 text-center\">\n            <button type=\"button\" class=\"btn btn-light-green btn-response fw-bold\" (click)=\"proximo('colabore')\">Outra colaboração</button>\n          </div>\n          <div class=\"col-6 text-center\">\n            <button type=\"button\" class=\"btn btn-secondary btn-response fw-bold\" (click)=\"proximo(dataResponse.pageURL)\">Novo projeto</button>\n          </div>\n        </div>\n      </div>\n      <!-- rodapé -->\n      <footer class=\"footer mt-auto py-3 component-footer z-index-up\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <!-- titulo -->\n            <div class=\"col-12 text-center\">\n              <h6 class=\"project-text-white\">ME SEGUE LÁ</h6>\n            </div>\n            <!-- ícones -->\n            <div class=\"col-12 text-center inline-father\">\n              <a href=\"https://twitter.com/euandrefraga\" target=\"_blank\">\n                <div class=\"inline-child space-icon\">\n                  <img src=\"../../assets/icon-twitter.png\" alt=\"Twitter\">\n                </div>\n              </a>\n              <a href=\"https://www.facebook.com/euandrefraga\" target=\"_blank\">\n                <div class=\"inline-child space-icon\">\n                  <img src=\"../../assets/icon-facebook.png\" alt=\"Facebook\">\n                </div>\n              </a>\n              <a href=\"https://www.instagram.com/euandrefraga/\" target=\"_blank\">\n                <div class=\"inline-child space-icon\">\n                  <img src=\"../../assets/icon-instagram.png\" alt=\"Instagram\">\n                </div>\n              </a>\n              <a href=\"https://www.youtube.com/channel/UC7BSLZW3MscGlXvc1dpHekA\" target=\"_blank\">\n                <div class=\"inline-child space-icon\">\n                  <img src=\"../../assets/icon-youtube.png\" alt=\"YouTube\">\n                </div>\n              </a>\n              <a href=\"https://www.linkedin.com/in/andr%C3%A9-fraga-b7b15434\" target=\"_blank\">\n                <div class=\"inline-child\">\n                  <img src=\"../../assets/icon-linkedin.png\" alt=\"Linkedin\">\n                </div>\n              </a>\n            </div>\n            <!-- divisor -->\n            <div class=\"col-12\">\n              <hr class=\"footer-hr mt-4\">\n            </div>\n            <!-- contato -->\n            <div class=\"col-12\">\n              <p class=\"project-text-white fw-bold mb-1\">ENTRE EM CONTATO</p>\n              <p class=\"project-text-white mb-0 txt-300\">E-mail: andrefraga@cms.ba.gov</p>\n              <p class=\"project-text-white mb-0 txt-300\">Telefone: 71 9 9318-4941</p>\n              <p class=\"project-text-white txt-300\">Endereço: Rua Ruy Barbosa, nº27, Edf. Bahia Center, gabinete 33 - Centro - Salvador/BA</p>\n            </div>\n            <!-- titulo -->\n            <div class=\"col-12 text-center\">\n              <h6 class=\"project-text-white\">ANDRÉ FRAGA. TODOS OS DIREITOS RESERVADOS | 2021</h6>\n            </div>\n          </div>\n        </div>\n      </footer>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "VHg0":
/*!***************************************************************!*\
  !*** ./src/app/resposta-de-envio/resposta-de-envio.module.ts ***!
  \***************************************************************/
/*! exports provided: RespostaDeEnvioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RespostaDeEnvioPageModule", function() { return RespostaDeEnvioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _resposta_de_envio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resposta-de-envio-routing.module */ "GUZC");
/* harmony import */ var _resposta_de_envio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resposta-de-envio.page */ "hsAk");







let RespostaDeEnvioPageModule = class RespostaDeEnvioPageModule {
};
RespostaDeEnvioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _resposta_de_envio_routing_module__WEBPACK_IMPORTED_MODULE_5__["RespostaDeEnvioPageRoutingModule"]
        ],
        declarations: [_resposta_de_envio_page__WEBPACK_IMPORTED_MODULE_6__["RespostaDeEnvioPage"]]
    })
], RespostaDeEnvioPageModule);



/***/ }),

/***/ "hsAk":
/*!*************************************************************!*\
  !*** ./src/app/resposta-de-envio/resposta-de-envio.page.ts ***!
  \*************************************************************/
/*! exports provided: RespostaDeEnvioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RespostaDeEnvioPage", function() { return RespostaDeEnvioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_resposta_de_envio_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./resposta-de-envio.page.html */ "PN8N");
/* harmony import */ var _resposta_de_envio_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resposta-de-envio.page.scss */ "2OpN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let RespostaDeEnvioPage = class RespostaDeEnvioPage {
    constructor(nav) {
        this.nav = nav;
        this.dataResponse = {
            titlePage: 'SUGERIR PROJETO DE LEI',
            titleContent: 'Sua sugestão de Projeto foi enviada.',
            descriptionContent: 'Em breve minha equipe retornará o contato pelo whatsapp. Obrigado por fazer parte dessa rede!',
            sucessResponse: true,
            pageURL: 'sugerir-projeto-de-leis'
        };
    }
    ngOnInit() {
    }
    proximo(values) {
        this.nav.navigateForward('/' + values);
    }
};
RespostaDeEnvioPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
RespostaDeEnvioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-resposta-de-envio',
        template: _raw_loader_resposta_de_envio_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_resposta_de_envio_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RespostaDeEnvioPage);



/***/ })

}]);
//# sourceMappingURL=resposta-de-envio-resposta-de-envio-module.js.map