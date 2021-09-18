(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recupera-senha-recupera-senha-module"],{

/***/ "/rIX":
/*!*******************************************************!*\
  !*** ./src/app/recupera-senha/recupera-senha.page.ts ***!
  \*******************************************************/
/*! exports provided: RecuperaSenhaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperaSenhaPage", function() { return RecuperaSenhaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_recupera_senha_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./recupera-senha.page.html */ "xeN8");
/* harmony import */ var _recupera_senha_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recupera-senha.page.scss */ "z00O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/firebase.service */ "Z2Br");






let RecuperaSenhaPage = class RecuperaSenhaPage {
    constructor(nav, firebaseService) {
        this.nav = nav;
        this.firebaseService = firebaseService;
        this.response = '';
        this.email = '';
    }
    ngOnInit() {
    }
    recoveryPassword() {
        console.log('this.email', this.email);
        this.firebaseService.recoveryPassword(this.email).then(res => {
            this.response = 'E-mail enviado com sucesso';
            this.email = '';
            this.statusResponse = true;
        }).catch(e => {
            this.response = 'E-mail não cadastrado! Tente novamente';
            this.email = '';
            this.statusResponse = false;
        });
    }
    proximo(values) {
        this.nav.navigateForward('/' + values);
    }
};
RecuperaSenhaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"] }
];
RecuperaSenhaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-recupera-senha',
        template: _raw_loader_recupera_senha_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_recupera_senha_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RecuperaSenhaPage);



/***/ }),

/***/ "4hLP":
/*!*********************************************************!*\
  !*** ./src/app/recupera-senha/recupera-senha.module.ts ***!
  \*********************************************************/
/*! exports provided: RecuperaSenhaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperaSenhaPageModule", function() { return RecuperaSenhaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _recupera_senha_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recupera-senha-routing.module */ "lzk/");
/* harmony import */ var _recupera_senha_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recupera-senha.page */ "/rIX");







let RecuperaSenhaPageModule = class RecuperaSenhaPageModule {
};
RecuperaSenhaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _recupera_senha_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecuperaSenhaPageRoutingModule"]
        ],
        declarations: [_recupera_senha_page__WEBPACK_IMPORTED_MODULE_6__["RecuperaSenhaPage"]]
    })
], RecuperaSenhaPageModule);



/***/ }),

/***/ "lzk/":
/*!*****************************************************************!*\
  !*** ./src/app/recupera-senha/recupera-senha-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: RecuperaSenhaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperaSenhaPageRoutingModule", function() { return RecuperaSenhaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _recupera_senha_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recupera-senha.page */ "/rIX");




const routes = [
    {
        path: '',
        component: _recupera_senha_page__WEBPACK_IMPORTED_MODULE_3__["RecuperaSenhaPage"]
    }
];
let RecuperaSenhaPageRoutingModule = class RecuperaSenhaPageRoutingModule {
};
RecuperaSenhaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RecuperaSenhaPageRoutingModule);



/***/ }),

/***/ "xeN8":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recupera-senha/recupera-senha.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <!-- menu -->\n  <nav class=\"navbar navbar-expand-lg personal-navbar fixed-top\">\n    <div class=\"container-fluid distance-top-desktop mb-2\">\n      <img class=\"space-left-5 mouse-pointer\" src=\"../../assets/logo-cerebro.png\" alt=\"André Fraga\" (click)=\"proximo('home')\">\n      <button class=\"btn personal-btn-login btn-mobile\" (click)=\"proximo('colabore')\">Login</button>\n    </div>\n    <div class=\"container-fluid distance-top-desktop mb-2\">\n      <div class=\"row mobile-menu\">\n        <div class=\"col-3 mouse-pointer personal-links-menu text-bottom\" (click)=\"proximo('home')\"><span class=\"project-text-white\">Quem sou</span></div>\n        <div class=\"col-3 mouse-pointer personal-links-menu\" (click)=\"proximo('nosso-mandato')\"><span class=\"project-text-white\">Nosso Mandato</span></div>\n        <div class=\"col-3 mouse-pointer personal-links-menu text-bottom component-active\" (click)=\"proximo('colabore')\"><span>Colabore</span></div>\n        <div class=\"col-3 mouse-pointer personal-links-menu text-bottom\" (click)=\"proximo('contato')\"><span class=\"project-text-white\">Contato</span></div>\n      </div>\n      <div class=\"desktop-menu v-center-h-center\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item mouse-pointer personal-links-menu\" (click)=\"proximo('home')\"><span class=\"project-text-white\">Quem sou</span></li>\n          <li class=\"nav-item mouse-pointer personal-links-menu ms-4\" (click)=\"proximo('nosso-mandato')\"><span class=\"project-text-white\">Nosso Mandato</span></li>\n          <li class=\"nav-item mouse-pointer personal-links-menu ms-4 component-active\" (click)=\"proximo('colabore')\"><span>Colabore</span></li>\n          <li class=\"nav-item mouse-pointer personal-links-menu ms-4\" (click)=\"proximo('contato')\"><span class=\"project-text-white\">Contato</span></li>\n          <li class=\"nav-item mouse-pointer personal-links-menu ms-4\" (click)=\"proximo('colabore')\"><span class=\"project-text-white\">Login</span></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <!-- botão voltar -->\n  <div class=\"container component-space-nav-8\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <button type=\"button\" class=\"btn btn-outline-secondary btn-back\" (click)=\"proximo('colabore')\"><span class=\"fas fa-angle-left\"></span>  Voltar</button>\n      </div>\n    </div>\n  </div>\n  <!-- logo Nosso Mandato -->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 text-center mt-3\">\n        <img src=\"../../assets/colabore.png\" alt=\"Colabore\">\n      </div>\n    </div>\n  </div>\n  <div class=\"component-bg-grey\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12 space-to-footer text-center\">\n          <h2 class=\"component-text-black-v2 mt-4 fw-bold\">Recuperação de senha</h2>\n            <div class=\"mt-4 mb-4\">\n              <div class=\"mb-3\">\n                <label for=\"exampleFormControlInput1\" class=\"form-label component-text-black ms-4\">Informe o e-mail cadastrado</label>\n                <input [(ngModel)]=\"email\" type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"andre.fraga@gmai.com\">\n              </div>\n              <div class=\"text-center\">\n                <div class=\"mb-5 d-grid gap-2\">\n                  <button class=\"btn btn-block btn-secondary btn-colabore\" ion-button (click)=\"recoveryPassword()\">Recuperar senha</button>\n                </div>\n                <div class=\"d-grid gap-2\">\n                  <p [class]=\"statusResponse ? 'component-active fw-bold' : 'component-negative fw-bold'\">{{response}}</p>\n                </div>\n              </div>\n            </div>\n        </div>\n      </div>\n    </div>\n    <!-- rodapé -->\n    <footer class=\"footer mt-auto py-3 component-footer z-index-up\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <!-- titulo -->\n          <div class=\"col-12 text-center\">\n            <h6 class=\"project-text-white\">ME SEGUE LÁ</h6>\n          </div>\n          <!-- ícones -->\n          <div class=\"col-12 text-center inline-father\">\n            <a href=\"https://twitter.com/euandrefraga\" target=\"_blank\">\n              <div class=\"inline-child space-icon\">\n                <img src=\"../../assets/icon-twitter.png\" alt=\"Twitter\">\n              </div>\n            </a>\n            <a href=\"https://www.facebook.com/euandrefraga\" target=\"_blank\">\n              <div class=\"inline-child space-icon\">\n                <img src=\"../../assets/icon-facebook.png\" alt=\"Facebook\">\n              </div>\n            </a>\n            <a href=\"https://www.instagram.com/euandrefraga/\" target=\"_blank\">\n              <div class=\"inline-child space-icon\">\n                <img src=\"../../assets/icon-instagram.png\" alt=\"Instagram\">\n              </div>\n            </a>\n            <a href=\"https://www.youtube.com/channel/UC7BSLZW3MscGlXvc1dpHekA\" target=\"_blank\">\n              <div class=\"inline-child space-icon\">\n                <img src=\"../../assets/icon-youtube.png\" alt=\"YouTube\">\n              </div>\n            </a>\n            <a href=\"https://www.linkedin.com/in/andr%C3%A9-fraga-b7b15434\" target=\"_blank\">\n              <div class=\"inline-child\">\n                <img src=\"../../assets/icon-linkedin.png\" alt=\"Linkedin\">\n              </div>\n            </a>\n          </div>\n          <!-- divisor -->\n          <div class=\"col-12\">\n            <hr class=\"footer-hr mt-4\">\n          </div>\n          <!-- contato -->\n          <div class=\"col-12\">\n            <p class=\"project-text-white fw-bold mb-1\">ENTRE EM CONTATO</p>\n            <p class=\"project-text-white mb-0 txt-300\">E-mail: andrefraga@cms.ba.gov</p>\n            <p class=\"project-text-white mb-0 txt-300\">Telefone: 71 9 9318-4941</p>\n            <p class=\"project-text-white txt-300\">Endereço: Rua Ruy Barbosa, nº27, Edf. Bahia Center, gabinete 33 - Centro - Salvador/BA</p>\n          </div>\n          <!-- titulo -->\n          <div class=\"col-12 text-center\">\n            <h6 class=\"project-text-white\">ANDRÉ FRAGA. TODOS OS DIREITOS RESERVADOS | 2021</h6>\n          </div>\n        </div>\n      </div>\n    </footer>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "z00O":
/*!*********************************************************!*\
  !*** ./src/app/recupera-senha/recupera-senha.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWN1cGVyYS1zZW5oYS5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=recupera-senha-recupera-senha-module.js.map