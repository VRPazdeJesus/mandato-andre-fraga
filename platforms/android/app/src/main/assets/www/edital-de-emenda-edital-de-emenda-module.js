(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edital-de-emenda-edital-de-emenda-module"],{

/***/ "ENVI":
/*!*************************************************************!*\
  !*** ./src/app/edital-de-emenda/edital-de-emenda.module.ts ***!
  \*************************************************************/
/*! exports provided: EditalDeEmendaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditalDeEmendaPageModule", function() { return EditalDeEmendaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edital_de_emenda_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edital-de-emenda-routing.module */ "lRAJ");
/* harmony import */ var _edital_de_emenda_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edital-de-emenda.page */ "qfj1");







let EditalDeEmendaPageModule = class EditalDeEmendaPageModule {
};
EditalDeEmendaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edital_de_emenda_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditalDeEmendaPageRoutingModule"]
        ],
        declarations: [_edital_de_emenda_page__WEBPACK_IMPORTED_MODULE_6__["EditalDeEmendaPage"]]
    })
], EditalDeEmendaPageModule);



/***/ }),

/***/ "V1BF":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edital-de-emenda/edital-de-emenda.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <!-- menu -->\n  <nav class=\"navbar navbar-expand-lg personal-navbar fixed-top\">\n    <div class=\"container-fluid\">\n      <img class=\"space-left-5\" src=\"../../assets/logo-cerebro.png\" alt=\"André Fraga\" (click)=\"proximo('home')\">\n      <button class=\"btn personal-btn-login\" (click)=\"proximo('colabore')\">Sair</button>\n    </div>\n    <div class=\"container-fluid mt-2 force-center\">\n      <div class=\"row\">\n        <div class=\"col-12 personal-titles-menu component-active mt-2\"><span>EDITAL DE EMENDAS</span></div>\n      </div>\n    </div>\n  </nav>\n  <!-- botão voltar -->\n  <div class=\"container component-space-nav-8\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <button type=\"button\" class=\"btn btn-outline-secondary btn-back\" (click)=\"proximo('colabore')\"><span class=\"fas fa-angle-left\"></span>  Voltar</button>\n      </div>\n    </div>\n  </div>\n  <!-- logo Nosso Mandato -->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 text-center mt-3\">\n        <img src=\"../../assets/edital-de-emendas.png\" alt=\"Sugerir projetos de lei\">\n      </div>\n      <div class=\"col-md-12 component-bg-grey space-to-footer\">\n        <div class=\"mt-4\">\n          <p class=\"component-text-black\">Todos os anos, os vereadores têm direito a uma quantia do Orçamento Público Municipal cuja alocação fica a critério de cada um.</p>\n          <p class=\"component-text-black\">Com o propósito de construir uma política mais sustentável, colaborativa e transparente, destinarei os recursos previstos para as emendas parlamentares individuais por meio de edital, no qual os critérios de escolha envolverão aspectos técnicos e não favoritismo político.</p>\n          <p class=\"component-text-black\">Confira abaixo o Edital de Emendas 2021:</p>\n          <div class=\"row mb-5\">\n            <div class=\"col-12\">\n              <div style=\"width: 350px; height: 200px; background-image: url(../../assets/img-edital.png); -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; border-radius: 16px;\">\n                <div style=\"position: relative; width: 350px; height: 200px; background: linear-gradient(180deg, rgba(77, 37, 108, 0.13) 0%, rgba(77, 37, 108, 0.58) 100%); border-radius: 16px;\">\n                  <h2 style=\"margin-left: 16px; position: absolute; bottom: 0; left: 0;\">EDITAL DE EMENDAS</h2>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"text-center\">\n            <div class=\"mb-3 d-grid gap-2\">\n              <button class=\"btn btn-block btn-secondary btn-colabore\" ion-button (click)=\"sendProposal()\">Inscreva seu projeto</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- rodapé -->\n      <footer class=\"footer mt-auto py-3 component-footer z-index-up\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <!-- titulo -->\n            <div class=\"col-12 text-center\">\n              <h6 class=\"project-text-white\">ME SEGUE LÁ</h6>\n            </div>\n            <!-- ícones -->\n            <div class=\"col-12 text-center inline-father\">\n              <a href=\"https://twitter.com/euandrefraga\" target=\"_blank\">\n                <div class=\"inline-child space-icon\">\n                  <img src=\"../../assets/icon-twitter.png\" alt=\"Twitter\">\n                </div>\n              </a>\n              <a href=\"https://www.facebook.com/euandrefraga\" target=\"_blank\">\n                <div class=\"inline-child space-icon\">\n                  <img src=\"../../assets/icon-facebook.png\" alt=\"Facebook\">\n                </div>\n              </a>\n              <a href=\"https://www.instagram.com/euandrefraga/\" target=\"_blank\">\n                <div class=\"inline-child space-icon\">\n                  <img src=\"../../assets/icon-instagram.png\" alt=\"Instagram\">\n                </div>\n              </a>\n              <a href=\"https://www.youtube.com/channel/UC7BSLZW3MscGlXvc1dpHekA\" target=\"_blank\">\n                <div class=\"inline-child space-icon\">\n                  <img src=\"../../assets/icon-youtube.png\" alt=\"YouTube\">\n                </div>\n              </a>\n              <a href=\"https://www.linkedin.com/in/andr%C3%A9-fraga-b7b15434\" target=\"_blank\">\n                <div class=\"inline-child\">\n                  <img src=\"../../assets/icon-linkedin.png\" alt=\"Linkedin\">\n                </div>\n              </a>\n            </div>\n            <!-- divisor -->\n            <div class=\"col-12\">\n              <hr class=\"footer-hr mt-4\">\n            </div>\n            <!-- contato -->\n            <div class=\"col-12\">\n              <p class=\"project-text-white fw-bold mb-1\">ENTRE EM CONTATO</p>\n              <p class=\"project-text-white mb-0 txt-300\">E-mail: andrefraga@cms.ba.gov</p>\n              <p class=\"project-text-white mb-0 txt-300\">Telefone: 71 9 9318-4941</p>\n              <p class=\"project-text-white txt-300\">Endereço: Rua Ruy Barbosa, nº27, Edf. Bahia Center, gabinete 33 - Centro - Salvador/BA</p>\n            </div>\n            <!-- titulo -->\n            <div class=\"col-12 text-center\">\n              <h6 class=\"project-text-white\">ANDRÉ FRAGA. TODOS OS DIREITOS RESERVADOS | 2021</h6>\n            </div>\n          </div>\n        </div>\n      </footer>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "kuIE":
/*!*************************************************************!*\
  !*** ./src/app/edital-de-emenda/edital-de-emenda.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0YWwtZGUtZW1lbmRhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "lRAJ":
/*!*********************************************************************!*\
  !*** ./src/app/edital-de-emenda/edital-de-emenda-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: EditalDeEmendaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditalDeEmendaPageRoutingModule", function() { return EditalDeEmendaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edital_de_emenda_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edital-de-emenda.page */ "qfj1");




const routes = [
    {
        path: '',
        component: _edital_de_emenda_page__WEBPACK_IMPORTED_MODULE_3__["EditalDeEmendaPage"]
    }
];
let EditalDeEmendaPageRoutingModule = class EditalDeEmendaPageRoutingModule {
};
EditalDeEmendaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditalDeEmendaPageRoutingModule);



/***/ }),

/***/ "qfj1":
/*!***********************************************************!*\
  !*** ./src/app/edital-de-emenda/edital-de-emenda.page.ts ***!
  \***********************************************************/
/*! exports provided: EditalDeEmendaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditalDeEmendaPage", function() { return EditalDeEmendaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edital_de_emenda_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edital-de-emenda.page.html */ "V1BF");
/* harmony import */ var _edital_de_emenda_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edital-de-emenda.page.scss */ "kuIE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let EditalDeEmendaPage = class EditalDeEmendaPage {
    constructor(nav) {
        this.nav = nav;
    }
    ngOnInit() {
    }
    proximo(values) {
        this.nav.navigateForward('/' + values);
    }
    sendProposal() {
        this.proximo('edital-de-emenda-form');
    }
};
EditalDeEmendaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
EditalDeEmendaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edital-de-emenda',
        template: _raw_loader_edital_de_emenda_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edital_de_emenda_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditalDeEmendaPage);



/***/ })

}]);
//# sourceMappingURL=edital-de-emenda-edital-de-emenda-module.js.map