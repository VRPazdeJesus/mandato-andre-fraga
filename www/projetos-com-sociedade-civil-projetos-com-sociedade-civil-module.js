(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projetos-com-sociedade-civil-projetos-com-sociedade-civil-module"],{

/***/ "46Ku":
/*!*********************************************************************************************!*\
  !*** ./src/app/projetos-com-sociedade-civil/projetos-com-sociedade-civil-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: ProjetosComSociedadeCivilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetosComSociedadeCivilPageRoutingModule", function() { return ProjetosComSociedadeCivilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _projetos_com_sociedade_civil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projetos-com-sociedade-civil.page */ "JU9S");




const routes = [
    {
        path: '',
        component: _projetos_com_sociedade_civil_page__WEBPACK_IMPORTED_MODULE_3__["ProjetosComSociedadeCivilPage"]
    }
];
let ProjetosComSociedadeCivilPageRoutingModule = class ProjetosComSociedadeCivilPageRoutingModule {
};
ProjetosComSociedadeCivilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProjetosComSociedadeCivilPageRoutingModule);



/***/ }),

/***/ "JU9S":
/*!***********************************************************************************!*\
  !*** ./src/app/projetos-com-sociedade-civil/projetos-com-sociedade-civil.page.ts ***!
  \***********************************************************************************/
/*! exports provided: ProjetosComSociedadeCivilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetosComSociedadeCivilPage", function() { return ProjetosComSociedadeCivilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_projetos_com_sociedade_civil_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./projetos-com-sociedade-civil.page.html */ "NX/l");
/* harmony import */ var _projetos_com_sociedade_civil_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projetos-com-sociedade-civil.page.scss */ "mZwX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modals_post_post_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/post/post.page */ "IoGL");







let ProjetosComSociedadeCivilPage = class ProjetosComSociedadeCivilPage {
    constructor(nav, modalController) {
        this.nav = nav;
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    proximo(values) {
        this.nav.navigateForward('/' + values);
    }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modals_post_post_page__WEBPACK_IMPORTED_MODULE_5__["PostPage"],
                //cssClass: 'my-custom-class',
                componentProps: {
                    'firstName': 'Douglas',
                    'lastName': 'Adams',
                    'middleInitial': 'N'
                }
            });
            return yield modal.present();
        });
    }
};
ProjetosComSociedadeCivilPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ProjetosComSociedadeCivilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-projetos-com-sociedade-civil',
        template: _raw_loader_projetos_com_sociedade_civil_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_projetos_com_sociedade_civil_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProjetosComSociedadeCivilPage);



/***/ }),

/***/ "NX/l":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projetos-com-sociedade-civil/projetos-com-sociedade-civil.page.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <!-- menu -->\n  <nav class=\"navbar navbar-expand-lg personal-navbar fixed-top\">\n    <div class=\"container-fluid\">\n      <img class=\"space-left-5\" src=\"../../assets/logo-cerebro.png\" alt=\"André Fraga\" (click)=\"proximo('home')\">\n      <button class=\"btn personal-btn-login\" (click)=\"proximo('colabore')\">Login</button>\n    </div>\n    <div class=\"container-fluid mt-2\">\n      <div class=\"row\">\n        <div class=\"col-3 personal-links-menu text-bottom\" (click)=\"proximo('home')\"><span class=\"project-text-white\">Quem sou</span></div>\n        <div class=\"col-3 personal-links-menu\" (click)=\"proximo('nosso-mandato')\"><span class=\"project-text-white\">Nosso Mandato</span></div>\n        <div class=\"col-3 personal-links-menu text-bottom component-active\" (click)=\"proximo('colabore')\"><span>Colabore</span></div>\n        <div class=\"col-3 personal-links-menu text-bottom\" (click)=\"proximo('contato')\"><span class=\"project-text-white\">Contato</span></div>\n      </div>\n    </div>\n  </nav>\n  <!-- botão voltar -->\n  <div class=\"container component-space-nav-8\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <button type=\"button\" class=\"btn btn-outline-secondary btn-back\" (click)=\"proximo('home')\"><span class=\"fas fa-angle-left\"></span>  Voltar</button>\n      </div>\n    </div>\n  </div>\n  <!-- logo Nosso Mandato -->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 text-center mt-3\">\n        <img src=\"../../assets/sociedade-civil.png\" alt=\"Nosso Mandato\">\n      </div>\n      <div class=\"col-md-12 component-bg-grey space-to-footer text-center\">\n        <!-- lista de posts -->\n        <div class=\"mt-4 space-to-footer component-bg-trnsparent\" (click)=\"presentModal()\">\n          <div class=\"mb-3\">\n            <div class=\"card component-bg-trnsparent no-border\">\n              <img class=\"card-img-top\" src=\"../../assets/post-canteiro.webp\" alt=\"canteiro\" style=\"z-index: 1;\">\n              <div class=\"card-body component-bg-light card-content-slide text-start\" style=\"height: 220px !important;\">\n                <h5 class=\"card-title project-text-secondary fw-bold\">CANTEIROS COLETIVOS</h5>\n                <p class=\"card-text component-text-black container-text\">O movimento Canteiros Coletivos é uma iniciativa cidadã, autônoma e apartidária de recuperação de praças e canteiros abandonados da cidade de Salvador.</p>\n                <a href=\"#\" class=\"post-link\">Clique para saber mais</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- rodapé -->\n      <footer class=\"footer mt-auto py-3 component-footer z-index-up\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <!-- titulo -->\n            <div class=\"col-12 text-center\">\n              <h6 class=\"project-text-white\">ME SEGUE LÁ</h6>\n            </div>\n            <!-- ícones -->\n            <div class=\"col-12 text-center inline-father\">\n              <a href=\"https://twitter.com/euandrefraga\" target=\"_blank\">\n                <div class=\"inline-child space-icon\">\n                  <img src=\"../../assets/icon-twitter.png\" alt=\"Twitter\">\n                </div>\n              </a>\n              <a href=\"https://www.facebook.com/euandrefraga\" target=\"_blank\">\n                <div class=\"inline-child space-icon\">\n                  <img src=\"../../assets/icon-facebook.png\" alt=\"Facebook\">\n                </div>\n              </a>\n              <a href=\"https://www.instagram.com/euandrefraga/\" target=\"_blank\">\n                <div class=\"inline-child space-icon\">\n                  <img src=\"../../assets/icon-instagram.png\" alt=\"Instagram\">\n                </div>\n              </a>\n              <a href=\"https://www.youtube.com/channel/UC7BSLZW3MscGlXvc1dpHekA\" target=\"_blank\">\n                <div class=\"inline-child space-icon\">\n                  <img src=\"../../assets/icon-youtube.png\" alt=\"YouTube\">\n                </div>\n              </a>\n              <a href=\"https://www.linkedin.com/in/andr%C3%A9-fraga-b7b15434\" target=\"_blank\">\n                <div class=\"inline-child\">\n                  <img src=\"../../assets/icon-linkedin.png\" alt=\"Linkedin\">\n                </div>\n              </a>\n            </div>\n            <!-- divisor -->\n            <div class=\"col-12\">\n              <hr class=\"footer-hr mt-4\">\n            </div>\n            <!-- contato -->\n            <div class=\"col-12\">\n              <p class=\"project-text-white fw-bold mb-1\">ENTRE EM CONTATO</p>\n              <p class=\"project-text-white mb-0 txt-300\">E-mail: andrefraga@cms.ba.gov</p>\n              <p class=\"project-text-white mb-0 txt-300\">Telefone: 71 9 9318-4941</p>\n              <p class=\"project-text-white txt-300\">Endereço: Rua Ruy Barbosa, nº27, Edf. Bahia Center, gabinete 33 - Centro - Salvador/BA</p>\n            </div>\n            <!-- titulo -->\n            <div class=\"col-12 text-center\">\n              <h6 class=\"project-text-white\">ANDRÉ FRAGA. TODOS OS DIREITOS RESERVADOS | 2021</h6>\n            </div>\n          </div>\n        </div>\n      </footer>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "dYZ6":
/*!*************************************************************************************!*\
  !*** ./src/app/projetos-com-sociedade-civil/projetos-com-sociedade-civil.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ProjetosComSociedadeCivilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetosComSociedadeCivilPageModule", function() { return ProjetosComSociedadeCivilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _projetos_com_sociedade_civil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projetos-com-sociedade-civil-routing.module */ "46Ku");
/* harmony import */ var _projetos_com_sociedade_civil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projetos-com-sociedade-civil.page */ "JU9S");







let ProjetosComSociedadeCivilPageModule = class ProjetosComSociedadeCivilPageModule {
};
ProjetosComSociedadeCivilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _projetos_com_sociedade_civil_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProjetosComSociedadeCivilPageRoutingModule"]
        ],
        declarations: [_projetos_com_sociedade_civil_page__WEBPACK_IMPORTED_MODULE_6__["ProjetosComSociedadeCivilPage"]]
    })
], ProjetosComSociedadeCivilPageModule);



/***/ }),

/***/ "mZwX":
/*!*************************************************************************************!*\
  !*** ./src/app/projetos-com-sociedade-civil/projetos-com-sociedade-civil.page.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZXRvcy1jb20tc29jaWVkYWRlLWNpdmlsLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=projetos-com-sociedade-civil-projetos-com-sociedade-civil-module.js.map