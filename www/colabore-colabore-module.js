(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["colabore-colabore-module"],{

/***/ "74Em":
/*!*********************************************!*\
  !*** ./src/app/colabore/colabore.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xhYm9yZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "JxYn":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/colabore/colabore.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <!-- menu -->\n  <nav class=\"navbar navbar-expand-lg personal-navbar fixed-top\">\n    <div class=\"container-fluid distance-top-desktop mb-2\">\n      <img class=\"space-left-5 mouse-pointer\" src=\"../../assets/logo-cerebro.png\" alt=\"André Fraga\" (click)=\"proximo('home')\">\n      <button class=\"btn personal-btn-login btn-mobile\" (click)=\"proximo('colabore')\">Login</button>\n    </div>\n    <div class=\"container-fluid distance-top-desktop mb-2\">\n      <div class=\"row mobile-menu\">\n        <div class=\"col-3 mouse-pointer personal-links-menu text-bottom\" (click)=\"proximo('home')\"><span class=\"project-text-white\">Quem sou</span></div>\n        <div class=\"col-3 mouse-pointer personal-links-menu\" (click)=\"proximo('nosso-mandato')\"><span class=\"project-text-white\">Nosso Mandato</span></div>\n        <div class=\"col-3 mouse-pointer personal-links-menu text-bottom component-active\" (click)=\"proximo('colabore')\"><span>Colabore</span></div>\n        <div class=\"col-3 mouse-pointer personal-links-menu text-bottom\" (click)=\"proximo('contato')\"><span class=\"project-text-white\">Contato</span></div>\n      </div>\n      <div class=\"desktop-menu v-center-h-center\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item mouse-pointer personal-links-menu\" (click)=\"proximo('home')\"><span class=\"project-text-white\">Quem sou</span></li>\n          <li class=\"nav-item mouse-pointer personal-links-menu ms-4\" (click)=\"proximo('nosso-mandato')\"><span class=\"project-text-white\">Nosso Mandato</span></li>\n          <li class=\"nav-item mouse-pointer personal-links-menu ms-4 component-active\" (click)=\"proximo('colabore')\"><span>Colabore</span></li>\n          <li class=\"nav-item mouse-pointer personal-links-menu ms-4\" (click)=\"proximo('contato')\"><span class=\"project-text-white\">Contato</span></li>\n          <li class=\"nav-item mouse-pointer personal-links-menu ms-4\" (click)=\"proximo('colabore')\"><span class=\"project-text-white\">Login</span></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <!-- botão voltar -->\n  <div class=\"container component-space-nav-8\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <button type=\"button\" class=\"btn btn-outline-secondary btn-back\" (click)=\"proximo('home')\"><span class=\"fas fa-angle-left\"></span>  Voltar</button>\n      </div>\n    </div>\n  </div>\n  <!-- logo Nosso Mandato -->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 text-center mt-3\">\n        <img src=\"../../assets/colabore.png\" alt=\"Nosso Mandato\">\n      </div>\n    </div>\n  </div>\n  <div class=\"component-bg-grey\">\n    <div class=\"container\">\n      <div class=\"row resize-margin\">\n        <div class=\"col-md-12 space-to-footer\">\n          <!-- oficial screen -->\n          <div *ngIf=\"loading\">\n            <p class=\"component-text-black mt-4\">{{ textOne }}</p>\n          </div>\n          <!-- skeleton screen -->\n          <div *ngIf=\"!loading\">\n            <div class=\"ion-padding custom-skeleton\">\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n              <ion-skeleton-text animated></ion-skeleton-text>\n              <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n              <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n            </div>\n          </div>\n          <!-- oficial screen -->\n          <div class=\"row\">\n            <div class=\"col-4 text-center\">\n              <img src=\"../../assets/icon-denuncia.png\" alt=\"Fazer uma denúncia\">\n            </div>\n            <div class=\"col-4 text-center\">\n              <img src=\"../../assets/icon-sugerir-leis.png\" alt=\"Sugerir projeto\">\n            </div>\n            <div class=\"col-4 text-center\">\n              <img src=\"../../assets/icon-edital.png\" alt=\"Edital de emenda\">\n            </div>\n          </div>\n          <!-- oficial screen -->\n          <div *ngIf=\"loading\">\n            <p class=\"component-text-black mt-4\">{{ textTwo }}</p>\n          </div>\n          <!-- skeleton screen -->\n          <div *ngIf=\"!loading\">\n            <div class=\"ion-padding custom-skeleton\">\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n              <ion-skeleton-text animated></ion-skeleton-text>\n              <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n              <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n            </div>\n          </div>\n          <!-- oficial screen -->\n          <div class=\"mt-4\">\n            <div class=\"mb-3\">\n              <label for=\"exampleFormControlInput1\" class=\"form-label component-text-black ms-4\">Usuário</label>\n              <input [(ngModel)]=\"email\" type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"andre.fraga@gmai.com\">\n            </div>\n            <div class=\"mb-3\">\n              <label for=\"exampleFormControlInput2\" class=\"form-label component-text-black ms-4\">Senha</label>\n              <input [(ngModel)]=\"password\" type=\"password\" class=\"form-control\" id=\"exampleFormControlInput2\" placeholder=\"#votenoverde\">\n            </div>\n            <div class=\"text-center\">\n              <div class=\"mt-5 mb-4\">\n                <label (click)=\"proximo('recupera-senha')\" class=\"colabore-link fw-bold\">Esqueci minha senha</label>\n              </div>\n              <div class=\"mb-3 d-grid gap-2\">\n                <button class=\"btn btn-block btn-secondary btn-colabore\" ion-button (click)=\"login()\">Login</button>\n              </div>\n              <div class=\"mb-3\">\n                <p class=\"component-text-black\">Ainda não faz parte do mandato? <span class=\"fw-bold\" (click)=\"proximo('cadastro-usuario')\"><label class=\"colabore-link\">Cadastre-se</label></span> </p>\n              </div>\n              <div class=\"mb-3\">\n                <p [class]=\"statusResponse ? 'component-active fw-bold' : 'component-negative fw-bold'\">{{response}}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- rodapé -->\n    <footer class=\"footer mt-auto py-3 component-footer z-index-up\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <!-- titulo -->\n          <div class=\"col-12 text-center\">\n            <h6 class=\"project-text-white\">ME SEGUE LÁ</h6>\n          </div>\n          <!-- ícones -->\n          <div class=\"col-12 text-center inline-father\">\n            <a href=\"https://twitter.com/euandrefraga\" target=\"_blank\">\n              <div class=\"inline-child space-icon\">\n                <img src=\"../../assets/icon-twitter.png\" alt=\"Twitter\">\n              </div>\n            </a>\n            <a href=\"https://www.facebook.com/euandrefraga\" target=\"_blank\">\n              <div class=\"inline-child space-icon\">\n                <img src=\"../../assets/icon-facebook.png\" alt=\"Facebook\">\n              </div>\n            </a>\n            <a href=\"https://www.instagram.com/euandrefraga/\" target=\"_blank\">\n              <div class=\"inline-child space-icon\">\n                <img src=\"../../assets/icon-instagram.png\" alt=\"Instagram\">\n              </div>\n            </a>\n            <a href=\"https://www.youtube.com/channel/UC7BSLZW3MscGlXvc1dpHekA\" target=\"_blank\">\n              <div class=\"inline-child space-icon\">\n                <img src=\"../../assets/icon-youtube.png\" alt=\"YouTube\">\n              </div>\n            </a>\n            <a href=\"https://www.linkedin.com/in/andr%C3%A9-fraga-b7b15434\" target=\"_blank\">\n              <div class=\"inline-child\">\n                <img src=\"../../assets/icon-linkedin.png\" alt=\"Linkedin\">\n              </div>\n            </a>\n          </div>\n          <!-- divisor -->\n          <div class=\"col-12\">\n            <hr class=\"footer-hr mt-4\">\n          </div>\n          <!-- contato -->\n          <div class=\"col-12\">\n            <p class=\"project-text-white fw-bold mb-1\">ENTRE EM CONTATO</p>\n            <p class=\"project-text-white mb-0 txt-300\">E-mail: andrefraga@cms.ba.gov</p>\n            <p class=\"project-text-white mb-0 txt-300\">Telefone: 71 9 9318-4941</p>\n            <p class=\"project-text-white txt-300\">Endereço: Rua Ruy Barbosa, nº27, Edf. Bahia Center, gabinete 33 - Centro - Salvador/BA</p>\n          </div>\n          <!-- titulo -->\n          <div class=\"col-12 text-center\">\n            <h6 class=\"project-text-white\">ANDRÉ FRAGA. TODOS OS DIREITOS RESERVADOS | 2021</h6>\n          </div>\n        </div>\n      </div>\n    </footer>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "LqIE":
/*!*****************************************************!*\
  !*** ./src/app/colabore/colabore-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ColaborePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColaborePageRoutingModule", function() { return ColaborePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _colabore_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colabore.page */ "WGqJ");




const routes = [
    {
        path: '',
        component: _colabore_page__WEBPACK_IMPORTED_MODULE_3__["ColaborePage"]
    }
];
let ColaborePageRoutingModule = class ColaborePageRoutingModule {
};
ColaborePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ColaborePageRoutingModule);



/***/ }),

/***/ "WGqJ":
/*!*******************************************!*\
  !*** ./src/app/colabore/colabore.page.ts ***!
  \*******************************************/
/*! exports provided: ColaborePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColaborePage", function() { return ColaborePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_colabore_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./colabore.page.html */ "JxYn");
/* harmony import */ var _colabore_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colabore.page.scss */ "74Em");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/firebase.service */ "Z2Br");






let ColaborePage = class ColaborePage {
    constructor(nav, firebaseService) {
        this.nav = nav;
        this.firebaseService = firebaseService;
        this.loading = false;
        this.response = '';
        this.getContentPage();
    }
    ngOnInit() {
    }
    login() {
        this.firebaseService.login(this.email, this.password).then(res => {
            this.statusResponse = true;
            this.response = 'Login efetuado com sucesso';
            this.proximo('colabore-dashboard');
        }).catch(e => {
            this.statusResponse = false;
            this.response = 'Erro ao fazer login! Verifique as credenciais e a sua internet';
        });
    }
    getContentPage() {
        this.firebaseService.getContentPage('colabore').then(res => {
            this.content = res;
        }).then(() => {
            this.textOne = this.content.contentOne;
            this.textTwo = this.content.contentTwo;
            this.loading = true;
        });
    }
    proximo(values) {
        this.nav.navigateForward('/' + values);
    }
};
ColaborePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"] }
];
ColaborePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-colabore',
        template: _raw_loader_colabore_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_colabore_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ColaborePage);



/***/ }),

/***/ "j49U":
/*!*********************************************!*\
  !*** ./src/app/colabore/colabore.module.ts ***!
  \*********************************************/
/*! exports provided: ColaborePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColaborePageModule", function() { return ColaborePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _colabore_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colabore-routing.module */ "LqIE");
/* harmony import */ var _colabore_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./colabore.page */ "WGqJ");







let ColaborePageModule = class ColaborePageModule {
};
ColaborePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _colabore_routing_module__WEBPACK_IMPORTED_MODULE_5__["ColaborePageRoutingModule"]
        ],
        declarations: [_colabore_page__WEBPACK_IMPORTED_MODULE_6__["ColaborePage"]]
    })
], ColaborePageModule);



/***/ })

}]);
//# sourceMappingURL=colabore-colabore-module.js.map