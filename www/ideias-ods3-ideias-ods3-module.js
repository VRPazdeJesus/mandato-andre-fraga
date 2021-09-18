(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ideias-ods3-ideias-ods3-module"],{

/***/ "1sTa":
/*!*************************************************!*\
  !*** ./src/app/ideias-ods3/ideias-ods3.page.ts ***!
  \*************************************************/
/*! exports provided: IdeiasOds3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeiasOds3Page", function() { return IdeiasOds3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ideias_ods3_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ideias-ods3.page.html */ "HhYP");
/* harmony import */ var _ideias_ods3_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ideias-ods3.page.scss */ "DoiW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let IdeiasOds3Page = class IdeiasOds3Page {
    constructor(nav) {
        this.nav = nav;
    }
    ngOnInit() {
    }
    proximo(values) {
        console.log(values);
        this.nav.navigateForward('/' + values);
    }
};
IdeiasOds3Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
IdeiasOds3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ideias-ods3',
        template: _raw_loader_ideias_ods3_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ideias_ods3_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IdeiasOds3Page);



/***/ }),

/***/ "DoiW":
/*!***************************************************!*\
  !*** ./src/app/ideias-ods3/ideias-ods3.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpZGVpYXMtb2RzMy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "HhYP":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ideias-ods3/ideias-ods3.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <!-- menu -->\n  <nav class=\"navbar navbar-expand-lg personal-navbar fixed-top\">\n    <div class=\"container-fluid distance-top-desktop mb-2\">\n      <img class=\"space-left-5 mouse-pointer\" src=\"../../assets/logo-cerebro.png\" alt=\"André Fraga\" (click)=\"proximo('home')\">\n      <button class=\"btn personal-btn-login btn-mobile\" (click)=\"proximo('colabore')\">Login</button>\n    </div>\n\n    <div class=\"container-fluid distance-top-desktop mb-2 force-center mobile-menu\">\n      <div class=\"row\">\n        <div class=\"col-12 personal-titles-menu component-active mt-2\"><span>43 IDEIAS PARA SALVADOR</span></div>\n      </div>\n    </div>\n\n    <div class=\"container-fluid distance-top-desktop mb-2 force-center desktop-menu\">\n      <div class=\"row\">\n        <div class=\"col-12 personal-titles-menu-desktop component-active mt-2\"><span>43 IDEIAS PARA SALVADOR</span></div>\n      </div>\n    </div>\n  </nav>\n  <!-- botão voltar -->\n  <div class=\"container component-space-nav-8\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <button type=\"button\" class=\"btn btn-outline-secondary btn-back\" (click)=\"proximo('ideias')\"><span class=\"fas fa-angle-left\"></span>  Voltar</button>\n      </div>\n    </div>\n  </div>\n  <!-- logo Nosso Mandato -->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 text-center mt-3\">\n        <img src=\"../../assets/saude-bem-estar.png\" alt=\"Saúde e Bem-estar\">\n      </div>\n      <div class=\"col-md-12 component-bg-grey space-to-footer\">\n        <!-- card ionic -->\n        <ion-card class=\"mt-4 radios-card-9\">\n          <div class=\"row\">\n            <div class=\"col-1 lateral-line\"></div>\n            <div class=\"col-11 lateral-content\">\n              <ion-card-header class=\"ps-0\">\n                <ion-card-title class=\"card-index\">01</ion-card-title>\n              </ion-card-header>\n            \n              <ion-card-content class=\"ps-0\">\n                <div class=\"row\">\n                  <p class=\"fw-bold component-text-black\">Criar um protocolo municipal para o enfrentamento de pandemias, considerando a experiência adquirida com o novo coronavírus.</p>\n                </div>\n                <div class=\"row mt-3\">\n                  <div class=\"col-6 text-center\">\n                    <p class=\"fw-bold\">Situação</p>\n                    <p>Em andamento</p>\n                  </div>\n                  <div class=\"col-6 text-center\">\n                    <button type=\"button\" class=\"btn btn-secondary btn-more\" (click)=\"proximo('nosso-mandato')\">Saiba mais</button>\n                  </div>\n                </div>\n              </ion-card-content>\n            </div>\n          </div>\n        </ion-card>\n      </div>\n      <!-- rodapé -->\n      <footer class=\"footer mt-auto py-3 component-footer z-index-up\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <!-- titulo -->\n            <div class=\"col-12 text-center\">\n              <h6 class=\"project-text-white\">ME SEGUE LÁ</h6>\n            </div>\n            <!-- ícones -->\n            <div class=\"col-12 text-center inline-father\">\n              <a href=\"https://twitter.com/euandrefraga\" target=\"_blank\">\n                <div class=\"inline-child space-icon\">\n                  <img src=\"../../assets/icon-twitter.png\" alt=\"Twitter\">\n                </div>\n              </a>\n              <a href=\"https://www.facebook.com/euandrefraga\" target=\"_blank\">\n                <div class=\"inline-child space-icon\">\n                  <img src=\"../../assets/icon-facebook.png\" alt=\"Facebook\">\n                </div>\n              </a>\n              <a href=\"https://www.instagram.com/euandrefraga/\" target=\"_blank\">\n                <div class=\"inline-child space-icon\">\n                  <img src=\"../../assets/icon-instagram.png\" alt=\"Instagram\">\n                </div>\n              </a>\n              <a href=\"https://www.youtube.com/channel/UC7BSLZW3MscGlXvc1dpHekA\" target=\"_blank\">\n                <div class=\"inline-child space-icon\">\n                  <img src=\"../../assets/icon-youtube.png\" alt=\"YouTube\">\n                </div>\n              </a>\n              <a href=\"https://www.linkedin.com/in/andr%C3%A9-fraga-b7b15434\" target=\"_blank\">\n                <div class=\"inline-child\">\n                  <img src=\"../../assets/icon-linkedin.png\" alt=\"Linkedin\">\n                </div>\n              </a>\n            </div>\n            <!-- divisor -->\n            <div class=\"col-12\">\n              <hr class=\"footer-hr mt-4\">\n            </div>\n            <!-- contato -->\n            <div class=\"col-12\">\n              <p class=\"project-text-white fw-bold mb-1\">ENTRE EM CONTATO</p>\n              <p class=\"project-text-white mb-0 txt-300\">E-mail: andrefraga@cms.ba.gov</p>\n              <p class=\"project-text-white mb-0 txt-300\">Telefone: 71 9 9318-4941</p>\n              <p class=\"project-text-white txt-300\">Endereço: Rua Ruy Barbosa, nº27, Edf. Bahia Center, gabinete 33 - Centro - Salvador/BA</p>\n            </div>\n            <!-- titulo -->\n            <div class=\"col-12 text-center\">\n              <h6 class=\"project-text-white\">ANDRÉ FRAGA. TODOS OS DIREITOS RESERVADOS | 2021</h6>\n            </div>\n          </div>\n        </div>\n      </footer>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "b8c6":
/*!***************************************************!*\
  !*** ./src/app/ideias-ods3/ideias-ods3.module.ts ***!
  \***************************************************/
/*! exports provided: IdeiasOds3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeiasOds3PageModule", function() { return IdeiasOds3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ideias_ods3_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ideias-ods3-routing.module */ "mORs");
/* harmony import */ var _ideias_ods3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ideias-ods3.page */ "1sTa");







let IdeiasOds3PageModule = class IdeiasOds3PageModule {
};
IdeiasOds3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ideias_ods3_routing_module__WEBPACK_IMPORTED_MODULE_5__["IdeiasOds3PageRoutingModule"]
        ],
        declarations: [_ideias_ods3_page__WEBPACK_IMPORTED_MODULE_6__["IdeiasOds3Page"]]
    })
], IdeiasOds3PageModule);



/***/ }),

/***/ "mORs":
/*!***********************************************************!*\
  !*** ./src/app/ideias-ods3/ideias-ods3-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: IdeiasOds3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeiasOds3PageRoutingModule", function() { return IdeiasOds3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ideias_ods3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ideias-ods3.page */ "1sTa");




const routes = [
    {
        path: '',
        component: _ideias_ods3_page__WEBPACK_IMPORTED_MODULE_3__["IdeiasOds3Page"]
    }
];
let IdeiasOds3PageRoutingModule = class IdeiasOds3PageRoutingModule {
};
IdeiasOds3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IdeiasOds3PageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=ideias-ods3-ideias-ods3-module.js.map