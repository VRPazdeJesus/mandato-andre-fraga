(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cadastro-usuario-cadastro-usuario-module"],{

/***/ "XF+r":
/*!*********************************************************************!*\
  !*** ./src/app/cadastro-usuario/cadastro-usuario-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: CadastroUsuarioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroUsuarioPageRoutingModule", function() { return CadastroUsuarioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cadastro_usuario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro-usuario.page */ "s0DT");




const routes = [
    {
        path: '',
        component: _cadastro_usuario_page__WEBPACK_IMPORTED_MODULE_3__["CadastroUsuarioPage"]
    }
];
let CadastroUsuarioPageRoutingModule = class CadastroUsuarioPageRoutingModule {
};
CadastroUsuarioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CadastroUsuarioPageRoutingModule);



/***/ }),

/***/ "ZkCB":
/*!*************************************************************!*\
  !*** ./src/app/cadastro-usuario/cadastro-usuario.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-check-input:checked {\n  background-color: var(--ion-color-primary) !important;\n  border-color: var(--ion-color-primary) !important;\n}\n\n.form-check-input:focus {\n  border-color: var(--ion-color-primary) !important;\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(77, 37, 108, 0.25) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NhZGFzdHJvLXVzdWFyaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscURBQUE7RUFDQSxpREFBQTtBQUNKOztBQUVBO0VBQ0ksaURBQUE7RUFDQSxVQUFBO0VBQ0EsNERBQUE7QUFDSiIsImZpbGUiOiJjYWRhc3Ryby11c3VhcmlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtLWNoZWNrLWlucHV0OmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4yNXJlbSByZ2IoNzcgMzcgMTA4IC8gMjUlKSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "nVQb":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro-usuario/cadastro-usuario.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <!-- menu -->\n  <nav class=\"navbar navbar-expand-lg personal-navbar fixed-top\">\n    <div class=\"container-fluid\">\n      <img class=\"space-left-5\" src=\"../../assets/logo-cerebro.png\" alt=\"André Fraga\" (click)=\"proximo('home')\">\n      <button class=\"btn personal-btn-login\" (click)=\"proximo('colabore')\">Login</button>\n    </div>\n    <div class=\"container-fluid mt-2\">\n      <div class=\"row\">\n        <div class=\"col-3 personal-links-menu text-bottom\" (click)=\"proximo('home')\"><span class=\"project-text-white\">Quem sou</span></div>\n        <div class=\"col-3 personal-links-menu\" (click)=\"proximo('nosso-mandato')\"><span class=\"project-text-white\">Nosso Mandato</span></div>\n        <div class=\"col-3 personal-links-menu text-bottom component-active\" (click)=\"proximo('colabore')\"><span>Colabore</span></div>\n        <div class=\"col-3 personal-links-menu text-bottom\" (click)=\"proximo('contato')\"><span class=\"project-text-white\">Contato</span></div>\n      </div>\n    </div>\n  </nav>\n  <!-- botão voltar -->\n  <div class=\"container component-space-nav-8\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <button type=\"button\" class=\"btn btn-outline-secondary btn-back\" (click)=\"proximo('colabore')\"><span class=\"fas fa-angle-left\"></span>  Voltar</button>\n      </div>\n    </div>\n  </div>\n  <!-- logo Nosso Mandato -->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 text-center mt-3\">\n        <img src=\"../../assets/cadastro.png\" alt=\"Cadastro de usuário\">\n      </div>\n      <div class=\"col-md-12 component-bg-grey space-to-footer\">\n        <div class=\"mt-4\">\n          <div class=\"mb-3\">\n            <label for=\"exampleFormControlInput1\" class=\"form-label component-text-black ms-4\">Nome completo</label>\n            <input [(ngModel)]=\"name\" type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"Digite aqui seu nome\">\n          </div>\n          <div class=\"mb-3\">\n            <label for=\"exampleFormControlInput2\" class=\"form-label component-text-black ms-4\">Data de nascimento</label>\n            <input [(ngModel)]=\"birthDate\" type=\"text\" class=\"form-control\" id=\"exampleFormControlInput2\" placeholder=\"Digite sua data de nascimento\">\n          </div>\n          <div class=\"mb-3\">\n            <label for=\"exampleFormControlInput3\" class=\"form-label component-text-black ms-4\">Telefone</label>\n            <input [(ngModel)]=\"telephone\" type=\"tel\" class=\"form-control\" id=\"exampleFormControlInput3\" placeholder=\"(xx) xxxxx-xxxx\">\n          </div>\n          <div class=\"mb-3\">\n            <label for=\"exampleFormControlInput4\" class=\"form-label component-text-black ms-4\">Endereço</label>\n            <input [(ngModel)]=\"address\" type=\"text\" class=\"form-control\" id=\"exampleFormControlInput4\" placeholder=\"Digite sua rua\">\n          </div>\n          <div class=\"mb-3\">\n            <label for=\"exampleFormControlInput5\" class=\"form-label component-text-black ms-4\">Bairro</label>\n            <input [(ngModel)]=\"district\" type=\"text\" class=\"form-control\" id=\"exampleFormControlInput5\" placeholder=\"Informe o bairro que reside\">\n          </div>\n          <div class=\"mb-3\">\n            <label for=\"exampleFormControlInput6\" class=\"form-label component-text-black ms-4\">E-mail</label>\n            <input [(ngModel)]=\"email\" type=\"email\" class=\"form-control\" id=\"exampleFormControlInput6\" placeholder=\"Digite seu e-mail\">\n          </div>\n          <div class=\"mb-3\">\n            <label for=\"exampleFormControlInput7\" class=\"form-label component-text-black ms-4\">Redes sociais</label>\n            <input [(ngModel)]=\"socialNetwork\" type=\"text\" class=\"form-control\" id=\"exampleFormControlInput7\" placeholder=\"Link do facebook, instagram, etc.\">\n          </div>\n          <div class=\"mb-3 ms-4\">\n            <p class=\"component-text-black\">É eleitor de André?</p>\n            <div class=\"form-group\">\n              <div class=\"form-check form-check-inline\">\n                <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"sim\" [(ngModel)]=\"andreVoter\">\n                <label class=\"form-check-label component-text-black \" for=\"inlineRadio1\">Sim</label>\n              </div>\n              <div class=\"form-check form-check-inline\">\n                <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"não\" [(ngModel)]=\"andreVoter\">\n                <label class=\"form-check-label component-text-black \" for=\"inlineRadio2\">Não</label>\n              </div>\n            </div>\n          </div>\n          <div class=\"mb-3 ms-4\">\n            <p class=\"component-text-black\">Participou da Rede de Embaixadores?</p>\n            <div class=\"form-group\">\n              <div class=\"form-check form-check-inline\">\n                <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions2\" id=\"inlineRadio3\" value=\"sim\" [(ngModel)]=\"participantAmbassadorNetwork\">\n                <label class=\"form-check-label component-text-black \" for=\"inlineRadio3\">Sim</label>\n              </div>\n              <div class=\"form-check form-check-inline\">\n                <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions2\" id=\"inlineRadio4\" value=\"não\" [(ngModel)]=\"participantAmbassadorNetwork\">\n                <label class=\"form-check-label component-text-black \" for=\"inlineRadio4\">Não</label>\n              </div>\n            </div>\n          </div>\n          <div class=\"mb-3\">\n            <label for=\"exampleFormControlInput8\" class=\"form-label component-text-black ms-4\">Senha</label>\n            <input [(ngModel)]=\"password\" type=\"password\" class=\"form-control\" id=\"exampleFormControlInput8\" placeholder=\"Digite senha de ao menos 8 dígitos\">\n          </div>\n          <div class=\"mb-3\">\n            <label for=\"exampleFormControlInput9\" class=\"form-label component-text-black ms-4\">Confirmar senha</label>\n            <input [(ngModel)]=\"confirmPassword\" type=\"password\" class=\"form-control\" id=\"exampleFormControlInput9\" placeholder=\"Digite a mesma senha acima\">\n          </div>\n          <div class=\"mb-3 form-group form-check ms-4\">\n            <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n            <label class=\"form-check-label component-text-black\" for=\"exampleCheck1\">Desejo receber notícias do mandato</label>\n          </div>\n          <div class=\"mb-3 form-group form-check ms-4\">\n            <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck2\">\n            <label class=\"form-check-label component-text-black\" for=\"exampleCheck2\">Li e concordo com os termos de uso e política de privacidade. </label>\n          </div>\n          <div class=\"text-center\">\n            <div class=\"mb-3 d-grid gap-2\">\n              <!-- <a href=\"#\" role=\"button\" class=\"btn btn-block btn-secondary btn-colabore\">Login</a> -->\n              <button class=\"btn btn-block btn-secondary btn-colabore\" ion-button (click)=\"registerUser()\">Cadastrar</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- rodapé -->\n      <footer class=\"footer mt-auto py-3 component-footer z-index-up\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <!-- titulo -->\n            <div class=\"col-12 text-center\">\n              <h6 class=\"project-text-white\">ME SEGUE LÁ</h6>\n            </div>\n            <!-- ícones -->\n            <div class=\"col-12 text-center inline-father\">\n              <a href=\"https://twitter.com/euandrefraga\" target=\"_blank\">\n                <div class=\"inline-child space-icon\">\n                  <img src=\"../../assets/icon-twitter.png\" alt=\"Twitter\">\n                </div>\n              </a>\n              <a href=\"https://www.facebook.com/euandrefraga\" target=\"_blank\">\n                <div class=\"inline-child space-icon\">\n                  <img src=\"../../assets/icon-facebook.png\" alt=\"Facebook\">\n                </div>\n              </a>\n              <a href=\"https://www.instagram.com/euandrefraga/\" target=\"_blank\">\n                <div class=\"inline-child space-icon\">\n                  <img src=\"../../assets/icon-instagram.png\" alt=\"Instagram\">\n                </div>\n              </a>\n              <a href=\"https://www.youtube.com/channel/UC7BSLZW3MscGlXvc1dpHekA\" target=\"_blank\">\n                <div class=\"inline-child space-icon\">\n                  <img src=\"../../assets/icon-youtube.png\" alt=\"YouTube\">\n                </div>\n              </a>\n              <a href=\"https://www.linkedin.com/in/andr%C3%A9-fraga-b7b15434\" target=\"_blank\">\n                <div class=\"inline-child\">\n                  <img src=\"../../assets/icon-linkedin.png\" alt=\"Linkedin\">\n                </div>\n              </a>\n            </div>\n            <!-- divisor -->\n            <div class=\"col-12\">\n              <hr class=\"footer-hr mt-4\">\n            </div>\n            <!-- contato -->\n            <div class=\"col-12\">\n              <p class=\"project-text-white fw-bold mb-1\">ENTRE EM CONTATO</p>\n              <p class=\"project-text-white mb-0 txt-300\">E-mail: andrefraga@cms.ba.gov</p>\n              <p class=\"project-text-white mb-0 txt-300\">Telefone: 71 9 9318-4941</p>\n              <p class=\"project-text-white txt-300\">Endereço: Rua Ruy Barbosa, nº27, Edf. Bahia Center, gabinete 33 - Centro - Salvador/BA</p>\n            </div>\n            <!-- titulo -->\n            <div class=\"col-12 text-center\">\n              <h6 class=\"project-text-white\">ANDRÉ FRAGA. TODOS OS DIREITOS RESERVADOS | 2021</h6>\n            </div>\n          </div>\n        </div>\n      </footer>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "p9h1":
/*!*************************************************************!*\
  !*** ./src/app/cadastro-usuario/cadastro-usuario.module.ts ***!
  \*************************************************************/
/*! exports provided: CadastroUsuarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroUsuarioPageModule", function() { return CadastroUsuarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cadastro_usuario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cadastro-usuario-routing.module */ "XF+r");
/* harmony import */ var _cadastro_usuario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cadastro-usuario.page */ "s0DT");







let CadastroUsuarioPageModule = class CadastroUsuarioPageModule {
};
CadastroUsuarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cadastro_usuario_routing_module__WEBPACK_IMPORTED_MODULE_5__["CadastroUsuarioPageRoutingModule"]
        ],
        declarations: [_cadastro_usuario_page__WEBPACK_IMPORTED_MODULE_6__["CadastroUsuarioPage"]]
    })
], CadastroUsuarioPageModule);



/***/ }),

/***/ "s0DT":
/*!***********************************************************!*\
  !*** ./src/app/cadastro-usuario/cadastro-usuario.page.ts ***!
  \***********************************************************/
/*! exports provided: CadastroUsuarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroUsuarioPage", function() { return CadastroUsuarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_usuario_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro-usuario.page.html */ "nVQb");
/* harmony import */ var _cadastro_usuario_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro-usuario.page.scss */ "ZkCB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/firebase.service */ "Z2Br");






let CadastroUsuarioPage = class CadastroUsuarioPage {
    constructor(nav, firebaseService) {
        this.nav = nav;
        this.firebaseService = firebaseService;
    }
    ngOnInit() {
    }
    proximo(values) {
        this.nav.navigateForward('/' + values);
    }
    registerUser() {
        let data = {
            name: this.name,
            birthDate: this.birthDate,
            telephone: this.telephone,
            address: this.address,
            district: this.district,
            email: this.email,
            socialNetwork: this.socialNetwork,
            andreVoter: this.andreVoter,
            participantAmbassadorNetwork: this.participantAmbassadorNetwork,
            password: this.password
        };
        this.saveRegister(data);
    }
    saveRegister(data) {
        this.firebaseService.register(data).then(res => {
            this.proximo('colabore-dashboard');
        });
    }
};
CadastroUsuarioPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"] }
];
CadastroUsuarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cadastro-usuario',
        template: _raw_loader_cadastro_usuario_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_usuario_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CadastroUsuarioPage);



/***/ })

}]);
//# sourceMappingURL=cadastro-usuario-cadastro-usuario-module.js.map