(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edital-de-emenda-form-edital-de-emenda-form-module"],{

/***/ "+zIO":
/*!***********************************************************************!*\
  !*** ./src/app/edital-de-emenda-form/edital-de-emenda-form.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0YWwtZGUtZW1lbmRhLWZvcm0ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "0FXj":
/*!*********************************************************************!*\
  !*** ./src/app/edital-de-emenda-form/edital-de-emenda-form.page.ts ***!
  \*********************************************************************/
/*! exports provided: EditalDeEmendaFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditalDeEmendaFormPage", function() { return EditalDeEmendaFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edital_de_emenda_form_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edital-de-emenda-form.page.html */ "zvvs");
/* harmony import */ var _edital_de_emenda_form_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edital-de-emenda-form.page.scss */ "+zIO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let EditalDeEmendaFormPage = class EditalDeEmendaFormPage {
    constructor(nav) {
        this.nav = nav;
        this.categories = [
            'Acessibilidade e Cidadania',
            'Administração e Gestão de Pessoa',
            'Assistencia ao Animal',
            'Comunicação',
            'Cultura',
            'Datas Comemorativas',
            'Denominação de Logadouro',
            'Desenvolvimento Econômico e Social',
            'Direitos da Mulher',
            'Direito e Proteção Idoso',
            'Direitos Humanos e Justiça',
            'Educação',
            'Esporte e Lazer',
            'Finanças e Orçamento',
            'Frente Parlamentar',
            'Honraria',
            'Meio Ambiente',
            'Planejamento Urbano',
            'Previdência Social',
            'Reparação',
            'Saúde',
            'Segurança / Combate a Violência',
            'Serviço Público',
            'Trasnporte e Trânsito',
            'Turismo e Desporto',
            'Utilidade Pública',
            'Outros'
        ];
        this.tituloDoProjeto = '';
        this.categoriaDoProjeto = 'Selecione a categoria';
        this.resumoDaSolicitacao = '';
        this.bairroDoProjeto = '';
        this.entidadeDoProjeto = '';
        this.valorDoProjeto = '';
    }
    ngOnInit() {
    }
    proximo(values) {
        this.nav.navigateForward('/' + values);
    }
    sendProposal() {
        this.tituloDoProjeto = '';
        console.log("Enviando proposta");
        this.categoriaDoProjeto = 'Selecione a categoria';
        this.resumoDaSolicitacao = '';
        this.bairroDoProjeto = '';
        this.entidadeDoProjeto = '';
        this.valorDoProjeto = '';
        this.proximo('resposta-de-envio');
    }
};
EditalDeEmendaFormPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
EditalDeEmendaFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edital-de-emenda-form',
        template: _raw_loader_edital_de_emenda_form_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edital_de_emenda_form_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditalDeEmendaFormPage);



/***/ }),

/***/ "7a4m":
/*!*******************************************************************************!*\
  !*** ./src/app/edital-de-emenda-form/edital-de-emenda-form-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: EditalDeEmendaFormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditalDeEmendaFormPageRoutingModule", function() { return EditalDeEmendaFormPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edital_de_emenda_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edital-de-emenda-form.page */ "0FXj");




const routes = [
    {
        path: '',
        component: _edital_de_emenda_form_page__WEBPACK_IMPORTED_MODULE_3__["EditalDeEmendaFormPage"]
    }
];
let EditalDeEmendaFormPageRoutingModule = class EditalDeEmendaFormPageRoutingModule {
};
EditalDeEmendaFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditalDeEmendaFormPageRoutingModule);



/***/ }),

/***/ "Bh8V":
/*!***********************************************************************!*\
  !*** ./src/app/edital-de-emenda-form/edital-de-emenda-form.module.ts ***!
  \***********************************************************************/
/*! exports provided: EditalDeEmendaFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditalDeEmendaFormPageModule", function() { return EditalDeEmendaFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edital_de_emenda_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edital-de-emenda-form-routing.module */ "7a4m");
/* harmony import */ var _edital_de_emenda_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edital-de-emenda-form.page */ "0FXj");







let EditalDeEmendaFormPageModule = class EditalDeEmendaFormPageModule {
};
EditalDeEmendaFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edital_de_emenda_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditalDeEmendaFormPageRoutingModule"]
        ],
        declarations: [_edital_de_emenda_form_page__WEBPACK_IMPORTED_MODULE_6__["EditalDeEmendaFormPage"]]
    })
], EditalDeEmendaFormPageModule);



/***/ }),

/***/ "zvvs":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edital-de-emenda-form/edital-de-emenda-form.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <!-- menu -->\n  <nav class=\"navbar navbar-expand-lg personal-navbar fixed-top\">\n    <div class=\"container-fluid\">\n      <img class=\"space-left-5\" src=\"../../assets/logo-cerebro.png\" alt=\"André Fraga\" (click)=\"proximo('home')\">\n      <button class=\"btn personal-btn-login\" (click)=\"proximo('colabore')\">Sair</button>\n    </div>\n    <div class=\"container-fluid mt-2 force-center\">\n      <div class=\"row\">\n        <div class=\"col-12 personal-titles-menu component-active mt-2\"><span>EDITAL DE EMENDAS - INSCRICÃO</span></div>\n      </div>\n    </div>\n  </nav>\n  <!-- botão voltar -->\n  <div class=\"container component-space-nav-8\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <button type=\"button\" class=\"btn btn-outline-secondary btn-back\" (click)=\"proximo('colabore')\"><span class=\"fas fa-angle-left\"></span>  Voltar</button>\n      </div>\n    </div>\n  </div>\n  <!-- logo Nosso Mandato -->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 text-center mt-3\">\n        <img src=\"../../assets/edital-de-emendas.png\" alt=\"Sugerir projetos de lei\">\n      </div>\n      <div class=\"col-md-12 component-bg-grey space-to-footer\">\n        <div class=\"mt-4\">\n          <div class=\"mb-3\">\n            <label for=\"exampleFormControlInput1\" class=\"form-label component-text-black ms-4\">Título do Projeto</label>\n            <input [(ngModel)]=\"tituloDoProjeto\" type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"Digite aqui o título do seu projeto\">\n          </div>\n          <div class=\"mb-3\">\n            <label for=\"inputState\" class=\"form-label component-text-black ms-4\">Categoria na qual se enquadra</label>\n            <select id=\"inputState\" class=\"form-control\" [(ngModel)]=\"categoriaDoProjeto\">\n              <option disabled selected hidden>Selecione a categoria<i class=\"fas fa-angle-down\"></i></option>\n              <option *ngFor=\"let category of categories\">{{ category }}</option>\n            </select>\n          </div>\n          <div class=\"mb-3\">\n            <label for=\"exampleFormControlInput3\" class=\"form-label component-text-black ms-4\">Resumo do seu projeto</label>\n            <textarea placeholder=\"Descreva a ideia geral da sua sugestão de Projeto de Lei.\" [(ngModel)]=\"resumoDaSolicitacao\" class=\"form-control\" id=\"exampleFormControlInput3\" rows=\"3\" style=\"border-radius: 1.5rem !important;\"></textarea>\n          </div>\n          <div class=\"mb-3\">\n            <label for=\"exampleFormControlInput12\" class=\"form-label component-text-black ms-4\">Região ou bairro a se beneficiar</label>\n            <input [(ngModel)]=\"bairroDoProjeto\" type=\"text\" class=\"form-control\" id=\"exampleFormControlInput12\" placeholder=\"Digite aqui a região ou bairro\">\n          </div>\n          <div class=\"mb-3\">\n            <label for=\"exampleFormControlInput13\" class=\"form-label component-text-black ms-4\">Entidade responsável pelo projeto</label>\n            <input [(ngModel)]=\"entidadeDoProjeto\" type=\"text\" class=\"form-control\" id=\"exampleFormControlInput13\" placeholder=\"Digite a entidade\">\n          </div>\n          <div class=\"mb-3\">\n            <label for=\"exampleFormControlInput14\" class=\"form-label component-text-black ms-4\">Estimativa de valor</label>\n            <input [(ngModel)]=\"valorDoProjeto\" type=\"text\" class=\"form-control\" id=\"exampleFormControlInput14\" placeholder=\"Digite o valor previsto\">\n          </div>\n          <div class=\"mb-5\">\n            <label for=\"exampleFormControlInput4\" class=\"form-label component-text-black ms-4\">Anexo</label>\n            <input [(ngModel)]=\"fileName\" (change)=\"handleFileInput($event.target.files)\" type=\"file\" class=\"form-control\" id=\"exampleFormControlInput4\" placeholder=\"Anexar documento (opcional)\">\n          </div>\n          <div class=\"text-center\">\n            <div class=\"mb-3 d-grid gap-2\">\n              <button class=\"btn btn-block btn-secondary btn-colabore\" ion-button (click)=\"sendProposal()\">Enviar</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- rodapé -->\n      <footer class=\"footer mt-auto py-3 component-footer z-index-up\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <!-- titulo -->\n            <div class=\"col-12 text-center\">\n              <h6 class=\"project-text-white\">ME SEGUE LÁ</h6>\n            </div>\n            <!-- ícones -->\n            <div class=\"col-12 text-center inline-father\">\n              <a href=\"https://twitter.com/euandrefraga\" target=\"_blank\">\n                <div class=\"inline-child space-icon\">\n                  <img src=\"../../assets/icon-twitter.png\" alt=\"Twitter\">\n                </div>\n              </a>\n              <a href=\"https://www.facebook.com/euandrefraga\" target=\"_blank\">\n                <div class=\"inline-child space-icon\">\n                  <img src=\"../../assets/icon-facebook.png\" alt=\"Facebook\">\n                </div>\n              </a>\n              <a href=\"https://www.instagram.com/euandrefraga/\" target=\"_blank\">\n                <div class=\"inline-child space-icon\">\n                  <img src=\"../../assets/icon-instagram.png\" alt=\"Instagram\">\n                </div>\n              </a>\n              <a href=\"https://www.youtube.com/channel/UC7BSLZW3MscGlXvc1dpHekA\" target=\"_blank\">\n                <div class=\"inline-child space-icon\">\n                  <img src=\"../../assets/icon-youtube.png\" alt=\"YouTube\">\n                </div>\n              </a>\n              <a href=\"https://www.linkedin.com/in/andr%C3%A9-fraga-b7b15434\" target=\"_blank\">\n                <div class=\"inline-child\">\n                  <img src=\"../../assets/icon-linkedin.png\" alt=\"Linkedin\">\n                </div>\n              </a>\n            </div>\n            <!-- divisor -->\n            <div class=\"col-12\">\n              <hr class=\"footer-hr mt-4\">\n            </div>\n            <!-- contato -->\n            <div class=\"col-12\">\n              <p class=\"project-text-white fw-bold mb-1\">ENTRE EM CONTATO</p>\n              <p class=\"project-text-white mb-0 txt-300\">E-mail: andrefraga@cms.ba.gov</p>\n              <p class=\"project-text-white mb-0 txt-300\">Telefone: 71 9 9318-4941</p>\n              <p class=\"project-text-white txt-300\">Endereço: Rua Ruy Barbosa, nº27, Edf. Bahia Center, gabinete 33 - Centro - Salvador/BA</p>\n            </div>\n            <!-- titulo -->\n            <div class=\"col-12 text-center\">\n              <h6 class=\"project-text-white\">ANDRÉ FRAGA. TODOS OS DIREITOS RESERVADOS | 2021</h6>\n            </div>\n          </div>\n        </div>\n      </footer>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=edital-de-emenda-form-edital-de-emenda-form-module.js.map