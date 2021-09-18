(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visao-geral-visao-geral-module"],{

/***/ "8HNG":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/visao-geral/visao-geral.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"h-100\">\n    <div class=\"row h-100\">\n      <!-- menu -->\n      <div id=\"sideNav\" class=\"col-2 pe-0 component-bg-login sidenav\">\n        <div class=\"text-center\">\n          <img class=\"logo-dashboard\" src=\"../../assets/logo-vereador-andre.svg\" alt=\"Vereador André Fraga\" (click)=\"proximo('home')\">\n          <p class=\"salutation\">Olá, bem-vindo(a)!</p>\n          <div id=\"lateral-buttons\" class=\"text-start\">\n            <div class=\"button-dashboard mt-5\">\n              <a (click)=\"proximo('visao-geral')\"><img class=\"mouse-pointer\" src=\"../../assets/icon-visao-geral.svg\" alt=\"Visão Geral\"></a>\n            </div>\n            <div class=\"button-dashboard\">\n              <a (click)=\"proximo('quem-sou-dashboard-admin')\"><img class=\"mouse-pointer\" src=\"../../assets/icon-quem-sou.svg\" alt=\"Quem sou\"></a>\n            </div>\n            <div class=\"button-dashboard\">\n              <a (click)=\"proximo('nosso-mandato-dashboard-admin')\"><img class=\"mouse-pointer\" src=\"../../assets/icon-nosso-mandato.svg\" alt=\"Nosso mandato\"></a>\n            </div>\n            <div class=\"button-dashboard\">\n              <a (click)=\"proximo('colabore-dashboard-admin')\"><img class=\"mouse-pointer\" src=\"../../assets/icon-colabore.svg\" alt=\"Colabore\"></a>\n            </div>\n            <div class=\"button-dashboard\">\n              <a (click)=\"proximo('usuarios-cadastrados')\"><img class=\"mouse-pointer\" src=\"../../assets/icon-usuarios-cadastrados.svg\" alt=\"Usuários cadastrados\"></a>\n            </div>\n            <div class=\"button-dashboard\">\n              <a (click)=\"proximo('login')\"><img class=\"mouse-pointer\" src=\"../../assets/icon-sair.svg\" alt=\"Sair\"></a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- content -->\n      <div class=\"col-10 ps-0\">\n        <div class=\"container-fluid\">\n          <h1 class=\"title-dashboard\">Visão Geral</h1>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"text-start\">\n                <p class=\"subtitle-dashboard mb-0\">ÚLTIMOS USUÁRIOS CADASTRADOS</p>\n                <p class=\"subtitle-as-label\">(Total: {{userAmount}})</p>\n              </div>\n              <div class=\"table-responsive-md\">\n                <table class=\"table table-striped-two\">\n                  <tbody>\n                    <tr *ngFor=\"let user of users\">\n                      <td style=\"font-size: 12px;\"><span style=\"font-weight: bold; font-size: 12px;\">DATA </span><br> {{user.dayregister}}</td>\n                      <td style=\"font-size: 12px;\"><span style=\"font-weight: bold; font-size: 12px;\">NOME COMPLETO </span><br> {{user.name}}</td>\n                      <td style=\"font-size: 12px;\"><span style=\"font-weight: bold; font-size: 12px;\">BAIRRO </span><br> {{user.district}}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n              <div class=\"text-end\">\n                <button (click)=\"proximo('usuarios-cadastrados')\" type=\"button\" class=\"export-button btn btn-primary btn-sm\">Ver lista</button>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"text-start\">\n                <p class=\"subtitle-dashboard mb-0\">SUGESTÕES DE PROJETOS DE LEI RECENTES</p>\n                <p class=\"subtitle-as-label\">(Total: 34 sugestões enviadas)</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"row mt-3\">\n            <div class=\"col-md-6\">\n              <div class=\"text-start\">\n                <p class=\"subtitle-dashboard mb-0\">INSCRIÇÕES DE PROJETOS DE EMENDA RECENTES</p>\n                <p class=\"subtitle-as-label\">(Total de projetos inscritos: 25)</p>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"text-start\">\n                <p class=\"subtitle-dashboard mb-0\">ÚLTIMAS DENÚNCIAS FEITAS</p>\n                <p class=\"subtitle-as-label\">(Total de denúncias: 143)</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "9EoT":
/*!***************************************************!*\
  !*** ./src/app/visao-geral/visao-geral.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aXNhby1nZXJhbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "PpZ/":
/*!***************************************************!*\
  !*** ./src/app/visao-geral/visao-geral.module.ts ***!
  \***************************************************/
/*! exports provided: VisaoGeralPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisaoGeralPageModule", function() { return VisaoGeralPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _visao_geral_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visao-geral-routing.module */ "kvmS");
/* harmony import */ var _visao_geral_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visao-geral.page */ "nNRg");







let VisaoGeralPageModule = class VisaoGeralPageModule {
};
VisaoGeralPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _visao_geral_routing_module__WEBPACK_IMPORTED_MODULE_5__["VisaoGeralPageRoutingModule"]
        ],
        declarations: [_visao_geral_page__WEBPACK_IMPORTED_MODULE_6__["VisaoGeralPage"]]
    })
], VisaoGeralPageModule);



/***/ }),

/***/ "kvmS":
/*!***********************************************************!*\
  !*** ./src/app/visao-geral/visao-geral-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: VisaoGeralPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisaoGeralPageRoutingModule", function() { return VisaoGeralPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _visao_geral_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visao-geral.page */ "nNRg");




const routes = [
    {
        path: '',
        component: _visao_geral_page__WEBPACK_IMPORTED_MODULE_3__["VisaoGeralPage"]
    }
];
let VisaoGeralPageRoutingModule = class VisaoGeralPageRoutingModule {
};
VisaoGeralPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VisaoGeralPageRoutingModule);



/***/ }),

/***/ "nNRg":
/*!*************************************************!*\
  !*** ./src/app/visao-geral/visao-geral.page.ts ***!
  \*************************************************/
/*! exports provided: VisaoGeralPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisaoGeralPage", function() { return VisaoGeralPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_visao_geral_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./visao-geral.page.html */ "8HNG");
/* harmony import */ var _visao_geral_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visao-geral.page.scss */ "9EoT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/firebase.service */ "Z2Br");






let VisaoGeralPage = class VisaoGeralPage {
    constructor(nav, firebaseService) {
        this.nav = nav;
        this.firebaseService = firebaseService;
        this.getUsers();
        this.users = [];
        this.userAmount = 0;
    }
    ngOnInit() {
    }
    proximo(values) {
        this.nav.navigateForward('/' + values);
    }
    getUsers() {
        this.firebaseService.getUsers().then(res => {
            this.content = res;
        }).then(() => {
            for (let key in this.content) {
                if (this.content.hasOwnProperty(key)) {
                    this.users.push(this.content[key]);
                }
            }
            this.userAmount = this.users.length;
        });
    }
};
VisaoGeralPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"] }
];
VisaoGeralPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-visao-geral',
        template: _raw_loader_visao_geral_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_visao_geral_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VisaoGeralPage);



/***/ })

}]);
//# sourceMappingURL=visao-geral-visao-geral-module.js.map