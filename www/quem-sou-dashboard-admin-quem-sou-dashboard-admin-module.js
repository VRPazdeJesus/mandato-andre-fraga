(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quem-sou-dashboard-admin-quem-sou-dashboard-admin-module"],{

/***/ "HMxP":
/*!*************************************************************************************!*\
  !*** ./src/app/quem-sou-dashboard-admin/quem-sou-dashboard-admin-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: QuemSouDashboardAdminPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuemSouDashboardAdminPageRoutingModule", function() { return QuemSouDashboardAdminPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _quem_sou_dashboard_admin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quem-sou-dashboard-admin.page */ "JQke");




const routes = [
    {
        path: '',
        component: _quem_sou_dashboard_admin_page__WEBPACK_IMPORTED_MODULE_3__["QuemSouDashboardAdminPage"]
    }
];
let QuemSouDashboardAdminPageRoutingModule = class QuemSouDashboardAdminPageRoutingModule {
};
QuemSouDashboardAdminPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], QuemSouDashboardAdminPageRoutingModule);



/***/ }),

/***/ "I074":
/*!*****************************************************************************!*\
  !*** ./src/app/quem-sou-dashboard-admin/quem-sou-dashboard-admin.module.ts ***!
  \*****************************************************************************/
/*! exports provided: QuemSouDashboardAdminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuemSouDashboardAdminPageModule", function() { return QuemSouDashboardAdminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _quem_sou_dashboard_admin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quem-sou-dashboard-admin-routing.module */ "HMxP");
/* harmony import */ var _quem_sou_dashboard_admin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quem-sou-dashboard-admin.page */ "JQke");







let QuemSouDashboardAdminPageModule = class QuemSouDashboardAdminPageModule {
};
QuemSouDashboardAdminPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _quem_sou_dashboard_admin_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuemSouDashboardAdminPageRoutingModule"]
        ],
        declarations: [_quem_sou_dashboard_admin_page__WEBPACK_IMPORTED_MODULE_6__["QuemSouDashboardAdminPage"]]
    })
], QuemSouDashboardAdminPageModule);



/***/ }),

/***/ "JQke":
/*!***************************************************************************!*\
  !*** ./src/app/quem-sou-dashboard-admin/quem-sou-dashboard-admin.page.ts ***!
  \***************************************************************************/
/*! exports provided: QuemSouDashboardAdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuemSouDashboardAdminPage", function() { return QuemSouDashboardAdminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_quem_sou_dashboard_admin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./quem-sou-dashboard-admin.page.html */ "Vnst");
/* harmony import */ var _quem_sou_dashboard_admin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quem-sou-dashboard-admin.page.scss */ "RKxw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/firebase.service */ "Z2Br");







let QuemSouDashboardAdminPage = class QuemSouDashboardAdminPage {
    constructor(nav, modalController, firebaseService) {
        this.nav = nav;
        this.modalController = modalController;
        this.firebaseService = firebaseService;
        this.blog = [];
        this.carousel = [];
        this.add = {};
    }
    ngOnInit() {
        this.getPostPage();
    }
    getPostPage() {
        this.firebaseService.getContentPage('quem-sou/blog').then(res => {
            this.content = res;
        }).then(() => {
            for (let key in this.content) {
                this.blog.push(this.content[key]);
            }
        }).then(() => {
            this.getCarouselPage();
        });
    }
    getCarouselPage() {
        this.firebaseService.getContentPage('quem-sou/slide').then(res => {
            this.content = res;
        }).then(() => {
            for (let key in this.content) {
                this.carousel.push(this.content[key]);
            }
        }).then(() => {
            this.getAddImage();
        });
    }
    getAddImage() {
        this.firebaseService.getContentPage('quem-sou/add').then(res => {
            this.add = res;
            console.log('add', this.add);
        }).then(() => {
            this.loading = false;
        });
    }
    proximo(values) {
        this.nav.navigateForward('/' + values);
    }
};
QuemSouDashboardAdminPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"] }
];
QuemSouDashboardAdminPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-quem-sou-dashboard-admin',
        template: _raw_loader_quem_sou_dashboard_admin_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_quem_sou_dashboard_admin_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], QuemSouDashboardAdminPage);



/***/ }),

/***/ "RKxw":
/*!*****************************************************************************!*\
  !*** ./src/app/quem-sou-dashboard-admin/quem-sou-dashboard-admin.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWVtLXNvdS1kYXNoYm9hcmQtYWRtaW4ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "Vnst":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quem-sou-dashboard-admin/quem-sou-dashboard-admin.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"h-100\">\n    <div class=\"row h-100\">\n      <!-- menu -->\n      <div id=\"sideNav\" class=\"col-2 pe-0 component-bg-login sidenav\">\n        <div class=\"text-center\">\n          <img class=\"logo-dashboard\" src=\"../../assets/logo-vereador-andre.svg\" alt=\"Vereador André Fraga\" (click)=\"proximo('home')\">\n          <p class=\"salutation\">Olá, bem-vindo(a)!</p>\n          <div id=\"lateral-buttons\" class=\"text-start\">\n            <div class=\"button-dashboard mt-5\">\n              <a (click)=\"proximo('visao-geral')\"><img class=\"mouse-pointer\" src=\"../../assets/icon-visao-geral.svg\" alt=\"Visão Geral\"></a>\n            </div>\n            <div class=\"button-dashboard\">\n              <a (click)=\"proximo('quem-sou-dashboard-admin')\"><img class=\"mouse-pointer\" src=\"../../assets/icon-quem-sou.svg\" alt=\"Quem sou\"></a>\n            </div>\n            <div class=\"button-dashboard\">\n              <a (click)=\"proximo('nosso-mandato-dashboard-admin')\"><img class=\"mouse-pointer\" src=\"../../assets/icon-nosso-mandato.svg\" alt=\"Nosso mandato\"></a>\n            </div>\n            <div class=\"button-dashboard\">\n              <a (click)=\"proximo('colabore-dashboard-admin')\"><img class=\"mouse-pointer\" src=\"../../assets/icon-colabore.svg\" alt=\"Colabore\"></a>\n            </div>\n            <div class=\"button-dashboard\">\n              <a (click)=\"proximo('usuarios-cadastrados')\"><img class=\"mouse-pointer\" src=\"../../assets/icon-usuarios-cadastrados.svg\" alt=\"Usuários cadastrados\"></a>\n            </div>\n            <div class=\"button-dashboard\">\n              <a (click)=\"proximo('login')\"><img class=\"mouse-pointer\" src=\"../../assets/icon-sair.svg\" alt=\"Sair\"></a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- content -->\n      <div class=\"col-10 ps-0\">\n        <div class=\"container-fluid\">\n          <h1 class=\"title-dashboard\">Quem sou</h1>\n          <div class=\"row\">\n            <div class=\"col-md-6 parent-element-vertically-left-center\">\n              <div class=\"text-start child-element-vertically-center\">\n                <p class=\"subtitle-dashboard mb-0\">CARROSSEL</p>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <hr class=\"divisor\">\n            </div>\n            <div class=\"col-md-12\">\n              <!-- <p class=\"p-dashboard mb-0\">Sem novo projetos de leis, no momento</p> -->\n              <div class=\"row\">\n                <div class=\"col-3 text-center\" *ngFor=\"let image of carousel\">\n                  <!-- <div id=\"image-post\" class=\"post-img-quem-sou\" style='background-image: url({{image.url}})'></div> -->\n                  <img src=\"{{image.url}}\" class=\"mx-auto d-block\" alt=\"post\">\n                  <div id=\"delete-button\" class=\"text-center mt-3 d-grid gap-2\">\n                    <button (click)=\"downloadUsers()\" type=\"button\" class=\"export-button btn btn-light-green btn-sm\">Excluir</button>\n                  </div>\n                </div>\n                <div class=\"col-3\">\n                  <img src=\"{{add.url}}\" class=\"mx-auto d-block\" alt=\"add\">\n                  <div id=\"delete-button\" class=\"text-center mt-3 d-grid gap-2\">\n                    <button (click)=\"downloadUsers()\" type=\"button\" class=\"export-button btn btn-primary btn-sm\">{{add.title}}</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row mt-5\">\n            <div class=\"col-md-6 parent-element-vertically-left-center\">\n              <div class=\"text-start child-element-vertically-center\">\n                <p class=\"subtitle-dashboard mb-0\">Projetos com a Sociedade Civil</p>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"text-end\">\n                <button (click)=\"downloadUsers()\" type=\"button\" class=\"export-button btn btn-secondary btn-sm\">Incluir novo projeto</button>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <hr class=\"divisor\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div *ngFor=\"let post of blog\" class=\"col-12 col-md-4 text-center mb-3\" (click)=\"presentModal()\">\n              <div class=\"card card-post mouse-pointer component-bg-secondary-light\">\n                <img class=\"card-cover\" src=\"{{ post.cover }}\" alt=\"foto de capa\">\n                <div class=\"card-body card-content-slide text-start\">\n                  <div id=\"post-title\">\n                    <h5 class=\"mt-0 card-title project-text-secondary fw-bold\">{{ post.title }}</h5>\n                  </div>\n                  <div id=\"post-description\">\n                    <p class=\"card-text component-text-black container-text\">{{ post.content }}</p>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-12 text-end\">\n                      <button (click)=\"downloadUsers()\" type=\"button\" class=\"export-button btn btn-light-green btn-sm me-3\">Excluir</button>\n                      <button (click)=\"downloadUsers()\" type=\"button\" class=\"export-button btn btn-secondary btn-sm\">Editar</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=quem-sou-dashboard-admin-quem-sou-dashboard-admin-module.js.map