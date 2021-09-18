(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fazer-denuncia-fazer-denuncia-module"],{

/***/ "0AF+":
/*!*********************************************************!*\
  !*** ./src/app/fazer-denuncia/fazer-denuncia.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXplci1kZW51bmNpYS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "B5QB":
/*!*****************************************************************!*\
  !*** ./src/app/fazer-denuncia/fazer-denuncia-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: FazerDenunciaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FazerDenunciaPageRoutingModule", function() { return FazerDenunciaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fazer_denuncia_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fazer-denuncia.page */ "BWBN");




const routes = [
    {
        path: '',
        component: _fazer_denuncia_page__WEBPACK_IMPORTED_MODULE_3__["FazerDenunciaPage"]
    }
];
let FazerDenunciaPageRoutingModule = class FazerDenunciaPageRoutingModule {
};
FazerDenunciaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FazerDenunciaPageRoutingModule);



/***/ }),

/***/ "BWBN":
/*!*******************************************************!*\
  !*** ./src/app/fazer-denuncia/fazer-denuncia.page.ts ***!
  \*******************************************************/
/*! exports provided: FazerDenunciaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FazerDenunciaPage", function() { return FazerDenunciaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_fazer_denuncia_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./fazer-denuncia.page.html */ "Hba4");
/* harmony import */ var _fazer_denuncia_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fazer-denuncia.page.scss */ "0AF+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let FazerDenunciaPage = class FazerDenunciaPage {
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
        this.havePhoto = false;
        this.photoFileName = '';
    }
    ngOnInit() {
    }
    proximo(values) {
        this.nav.navigateForward('/' + values);
    }
    handleFileInput(file) {
        console.log('file', file);
        this.photoFileName = file[0].name;
        this.havePhoto = true;
    }
    deleteFile() {
        console.log('quero deletar arquivo');
        this.photoFileName = '';
        this.havePhoto = false;
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
FazerDenunciaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
FazerDenunciaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-fazer-denuncia',
        template: _raw_loader_fazer_denuncia_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_fazer_denuncia_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FazerDenunciaPage);



/***/ }),

/***/ "Hba4":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fazer-denuncia/fazer-denuncia.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <!-- menu -->\n  <nav class=\"navbar navbar-expand-lg personal-navbar fixed-top\">\n    <div class=\"container-fluid\">\n      <img class=\"space-left-5 mouse-pointer\" src=\"../../assets/logo-cerebro.png\" alt=\"André Fraga\" (click)=\"proximo('home')\">\n      <button class=\"btn personal-btn-login\" (click)=\"proximo('colabore')\">Sair</button>\n    </div>\n    <div class=\"container-fluid mt-2 force-center\">\n      <div class=\"row\">\n        <div class=\"col-12 personal-titles-menu component-active mt-2\"><span>FAZER DENÚNCIAS</span></div>\n      </div>\n    </div>\n  </nav>\n  <!-- botão voltar -->\n  <div class=\"container component-space-nav-8\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <button type=\"button\" class=\"btn btn-outline-secondary btn-back\" (click)=\"proximo('colabore-dashboard')\"><span class=\"fas fa-angle-left\"></span>  Voltar</button>\n      </div>\n    </div>\n  </div>\n  <!-- logo Nosso Mandato -->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 text-center mt-3\">\n        <img src=\"../../assets/icon-fazer-denuncias.png\" alt=\"Sugerir projetos de lei\">\n      </div>\n    </div>\n  </div>\n  <div class=\"component-bg-grey\">\n    <div class=\"container\">\n      <div class=\"row resize-margin\">\n        <div class=\"col-md-12 space-to-footer\">\n          <div class=\"mt-4\">\n            <div class=\"mb-3\">\n              <label for=\"exampleFormControlInput0\" class=\"form-label component-text-black ms-4\">Fazer upload de foto da denúncia</label>\n              <label for=\"exampleFormControlInput0\" class=\"form-control mouse-pointer\" style=\"height: 200px; display: flex; justify-content: center; align-items: center;\">\n                <img *ngIf=\"!havePhoto\" src=\"../../assets/icon-camera.png\" alt=\"ícone de câmera\">\n                <ion-chip *ngIf=\"havePhoto\" color=\"secondary\">\n                  <ion-icon name=\"document-text-outline\"></ion-icon>\n                  <ion-label color=\"dark\">{{photoFileName}}</ion-label>\n                  <ion-icon (click)=\"deleteFile()\" name=\"close-circle\"></ion-icon>\n                </ion-chip>\n                <input [(ngModel)]=\"fotoDenuncia\" (change)=\"handleFileInput($event.target.files)\" type=\"file\" class=\"form-control\" id=\"exampleFormControlInput0\">\n              </label>\n            </div>\n            <div class=\"mb-3\">\n              <label for=\"exampleFormControlInput1\" class=\"form-label component-text-black ms-4\">Título da Denúncia</label>\n              <input [(ngModel)]=\"tituloDoProjeto\" type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"Digite aqui o título da sua denúncia\">\n            </div>\n            <div class=\"mb-3\">\n              <label for=\"exampleFormControlInput12\" class=\"form-label component-text-black ms-4\">Localização do que motivou a denúncia</label>\n              <input [(ngModel)]=\"bairroDoProjeto\" type=\"text\" class=\"form-control\" id=\"exampleFormControlInput12\" placeholder=\"Digite aqui o endereço da localização\">\n            </div>\n            <div class=\"mb-3\">\n              <label for=\"exampleFormControlInput13\" class=\"form-label component-text-black ms-4\">Ponto de referência</label>\n              <input [(ngModel)]=\"entidadeDoProjeto\" type=\"text\" class=\"form-control\" id=\"exampleFormControlInput13\" placeholder=\"Digite ponto de referência\">\n            </div>\n            <div class=\"mb-3\">\n              <label for=\"exampleFormControlInput4\" class=\"form-label component-text-black ms-4\">Anexo</label>\n              <!-- <label for=\"exampleFormControlInput4\" class=\"form-control file-custom\" style=\"height: 3.5rem; display: flex; justify-content: flex-end; align-items: center;\"> -->\n              <label for=\"exampleFormControlInput4\" class=\"form-control file-custom\" style=\"height: 3.5rem; display: flex; align-items: center;\">\n                <p class=\"m-0 pe-5\" style=\"color:#7e868c\">Anexar documento (opcional)</p>\n                <input [(ngModel)]=\"fileName\" (change)=\"handleFileInput($event.target.files)\" type=\"file\" class=\"form-control\" id=\"exampleFormControlInput4\">\n                <img src=\"../../assets/icone-anexo.png\" alt=\"ícone de câmera\">\n                <!-- <div class=\"row\">\n                  <div class=\"col-9\">\n                    <p>Anexar documento (opcional)</p>\n                    <input [(ngModel)]=\"fileName\" (change)=\"handleFileInput($event.target.files)\" type=\"file\" class=\"form-control\" id=\"exampleFormControlInput4\" placeholder=\"Anexar documento (opcional)\">\n                  </div>\n                  <div class=\"col-3\">\n                    <img src=\"../../assets/icone-anexo.png\" alt=\"ícone de câmera\">\n                  </div>\n                </div> -->\n              </label>\n            </div>\n            <div class=\"mb-5\">\n              <label for=\"exampleFormControlInput3\" class=\"form-label component-text-black ms-4\">Detalhes da denúncia</label>\n              <textarea placeholder=\"Descreva seu problema com detalhes e, se possível, informando como gostaria que eu o ajudasse.\" [(ngModel)]=\"resumoDaSolicitacao\" class=\"form-control\" id=\"exampleFormControlInput3\" rows=\"3\" style=\"border-radius: 1.5rem !important;\"></textarea>\n            </div>\n            <div class=\"text-center\">\n              <div class=\"mb-3 d-grid gap-2\">\n                <button class=\"btn btn-block btn-secondary btn-colabore\" ion-button (click)=\"sendProposal()\">Enviar</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- rodapé -->\n    <footer class=\"footer mt-auto py-3 component-footer z-index-up\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <!-- titulo -->\n          <div class=\"col-12 text-center\">\n            <h6 class=\"project-text-white\">ME SEGUE LÁ</h6>\n          </div>\n          <!-- ícones -->\n          <div class=\"col-12 text-center inline-father\">\n            <a href=\"https://twitter.com/euandrefraga\" target=\"_blank\">\n              <div class=\"inline-child space-icon\">\n                <img src=\"../../assets/icon-twitter.png\" alt=\"Twitter\">\n              </div>\n            </a>\n            <a href=\"https://www.facebook.com/euandrefraga\" target=\"_blank\">\n              <div class=\"inline-child space-icon\">\n                <img src=\"../../assets/icon-facebook.png\" alt=\"Facebook\">\n              </div>\n            </a>\n            <a href=\"https://www.instagram.com/euandrefraga/\" target=\"_blank\">\n              <div class=\"inline-child space-icon\">\n                <img src=\"../../assets/icon-instagram.png\" alt=\"Instagram\">\n              </div>\n            </a>\n            <a href=\"https://www.youtube.com/channel/UC7BSLZW3MscGlXvc1dpHekA\" target=\"_blank\">\n              <div class=\"inline-child space-icon\">\n                <img src=\"../../assets/icon-youtube.png\" alt=\"YouTube\">\n              </div>\n            </a>\n            <a href=\"https://www.linkedin.com/in/andr%C3%A9-fraga-b7b15434\" target=\"_blank\">\n              <div class=\"inline-child\">\n                <img src=\"../../assets/icon-linkedin.png\" alt=\"Linkedin\">\n              </div>\n            </a>\n          </div>\n          <!-- divisor -->\n          <div class=\"col-12\">\n            <hr class=\"footer-hr mt-4\">\n          </div>\n          <!-- contato -->\n          <div class=\"col-12\">\n            <p class=\"project-text-white fw-bold mb-1\">ENTRE EM CONTATO</p>\n            <p class=\"project-text-white mb-0 txt-300\">E-mail: andrefraga@cms.ba.gov</p>\n            <p class=\"project-text-white mb-0 txt-300\">Telefone: 71 9 9318-4941</p>\n            <p class=\"project-text-white txt-300\">Endereço: Rua Ruy Barbosa, nº27, Edf. Bahia Center, gabinete 33 - Centro - Salvador/BA</p>\n          </div>\n          <!-- titulo -->\n          <div class=\"col-12 text-center\">\n            <h6 class=\"project-text-white\">ANDRÉ FRAGA. TODOS OS DIREITOS RESERVADOS | 2021</h6>\n          </div>\n        </div>\n      </div>\n    </footer>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "vSso":
/*!*********************************************************!*\
  !*** ./src/app/fazer-denuncia/fazer-denuncia.module.ts ***!
  \*********************************************************/
/*! exports provided: FazerDenunciaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FazerDenunciaPageModule", function() { return FazerDenunciaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _fazer_denuncia_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fazer-denuncia-routing.module */ "B5QB");
/* harmony import */ var _fazer_denuncia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fazer-denuncia.page */ "BWBN");







let FazerDenunciaPageModule = class FazerDenunciaPageModule {
};
FazerDenunciaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fazer_denuncia_routing_module__WEBPACK_IMPORTED_MODULE_5__["FazerDenunciaPageRoutingModule"]
        ],
        declarations: [_fazer_denuncia_page__WEBPACK_IMPORTED_MODULE_6__["FazerDenunciaPage"]]
    })
], FazerDenunciaPageModule);



/***/ })

}]);
//# sourceMappingURL=fazer-denuncia-fazer-denuncia-module.js.map