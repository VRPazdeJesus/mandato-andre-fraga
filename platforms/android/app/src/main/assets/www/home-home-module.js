(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n  <!-- menu -->\n  <nav class=\"navbar navbar-expand-lg personal-navbar fixed-top\">\n    <div class=\"container-fluid\">\n      <img class=\"space-left-5\" src=\"../../assets/logo-cerebro.png\" alt=\"André Fraga\">\n      <button class=\"btn personal-btn-login\" (click)=\"proximo('colabore')\">Login</button>\n    </div>\n    <div class=\"container-fluid mt-2\">\n      <div class=\"row\">\n        <div class=\"col-3 personal-links-menu text-bottom component-active\"><span>Quem sou</span></div>\n        <div class=\"col-3 personal-links-menu\" (click)=\"proximo('nosso-mandato')\"><span class=\"project-text-white\">Nosso Mandato</span></div>\n        <div class=\"col-3 personal-links-menu text-bottom\" (click)=\"proximo('colabore')\"><span class=\"project-text-white\">Colabore</span></div>\n        <div class=\"col-3 personal-links-menu text-bottom\" (click)=\"proximo('contato')\"><span class=\"project-text-white\">Contato</span></div>\n      </div>\n    </div>\n  </nav>\n  <!-- slides -->\n  <ion-slides class=\"component-background component-space-nav\" pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide>\n      <img class=\"d-block w-100\" src=\"../../assets/card1.webp\" alt=\"First slide\">\n    </ion-slide>\n    <ion-slide>\n      <img class=\"d-block w-100\" src=\"../../assets/card2.webp\" alt=\"Second slide\">\n    </ion-slide>\n    <ion-slide>\n      <img loading=\"lazy\" class=\"d-block w-100\" src=\"../../assets/card3.webp\" alt=\"Third slide\">\n    </ion-slide>\n  </ion-slides>\n  <!-- quem sou -->\n  <div class=\"container\">\n    <div class=\"text-center\" id=\"saiba-mais\">\n      <img class=\"component-btn-round\" src=\"../../assets/btn-down.png\" alt=\"Third slide\">\n      <p class=\"component-more\">Saiba mais</p>\n    </div>\n    <div id=\"bio-andre\">\n      <p class=\"component-text-black\">Tenho 36 anos, sou engenheiro ambiental, pós-graduado pela FGV e estou no doutorado pela Faculdade de Medicina da USP.</p> \n      <p class=\"component-text-black\">Exerci o cargo de Secretário de Sustentabilidade, Inovação e Resiliência de Salvador de 2014 até março de 2020, quando saí para me candidatar ao cargo de vereador. Fui eleito nas eleições municipais 2020 com 5.621 votos.</p>\n      <p class=\"component-text-black\">Também sou vice-presidente da Sociedade Brasileira de Arborização Urbana, líder da Rede de Ação Política pela Sustentabilidade (RAPS) e aluno no RenovaBR Cidades – escola que prepara e forma pessoas comuns para serem políticos fora do comum. </p>\n      <p class=\"component-text-black\">Muitos dos projetos idealizados e liderados por mim foram premiados nacional e internacionalmente, fazendo de Salvador uma referência global em sustentabilidade.</p>\n      <div class=\"row\">\n        <div class=\"col-4 v-center-h-center \">\n          <img src=\"../../assets/raps.png\" alt=\"logos\">\n        </div>\n        <div class=\"col-4 v-center-h-center \">\n          <img src=\"../../assets/renovabr.png\" alt=\"logos\">\n        </div>\n        <div class=\"col-4 v-center-h-center \">\n          <img src=\"../../assets/partido-verde.png\" alt=\"logos\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- valores -->\n  <div class=\"mt-5\">\n    <!-- foto valores -->\n    <div id=\"img-card\">\n      <img class=\"w-100\" src=\"../../assets/valores-andre-fraga.webp\" alt=\"Vereador André Fraga\">\n    </div>\n    <!-- conteúdo -->\n    <div class=\"component-bg-secondary\">\n      <div class=\"container component-degrade\">\n        <!-- logo -->\n        <div class=\"text-center pt-3\">\n          <img src=\"../../assets/valores.png\" alt=\"Logo de Valores\">\n        </div>\n        <!-- cards -->\n        <div class=\"row\">\n          <!-- transparencia -->\n          <div class=\"col-12 col-md-4\">\n            <div class=\"accordion\" id=\"accordionExample\">\n              <div class=\"accordion-item\">\n                <!-- header -->\n                <div class=\"accordion-header\" id=\"headingTwo\">\n                  <div class=\"accordion-button collapsed mt-4\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                    <div class=\"row\">\n                      <!-- header -->\n                      <div class=\"col-md-12\">\n                        <span class=\"component-space-icon\"><img src=\"../../assets/valores-icons/transparencia.png\" alt=\"ícone de gráfico\"></span><span class=\"title-modal\">TRANSPARÊNCIA</span>\n                      </div>\n                      <!-- content -->\n                      <div class=\"col-md-12\">\n                        <div id=\"collapseTwo\" class=\"no-border accordion-collapse collapse\" aria-labelledby=\"headingTwo\" data-bs-parent=\"#accordionExample\">\n                          <div class=\"accordion-body p-0\">\n                            <p class=\"title-inside-modal mt-2 mb-2\">Transparência</p>\n                            <hr class=\"component-hr\">\n                            <p class=\"content-inside-modal\">Prestar contas, falar a verdade e eliminar filtros que servem como barreiras para o acompanhamento pela sociedade da atuação pública.</p>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- colaboração -->\n          <div class=\"col-12 col-md-4\">\n            <div class=\"accordion\" id=\"accordionExample2\">\n              <div class=\"accordion-item\">\n                <!-- header -->\n                <div class=\"accordion-header\" id=\"headingThree\">\n                  <div class=\"accordion-button collapsed mt-4\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                    <div class=\"row\">\n                      <!-- header -->\n                      <div class=\"col-md-12\">\n                        <span class=\"component-space-icon\"><img src=\"../../assets/valores-icons/colaboracao.png\" alt=\"ícone de gráfico\"></span><span class=\"title-modal\">COLABORAÇÃO</span>\n                      </div>\n                      <!-- content -->\n                      <div class=\"col-md-12\">\n                        <div id=\"collapseThree\" class=\"no-border accordion-collapse collapse\" aria-labelledby=\"headingThree\" data-bs-parent=\"#accordionExample2\">\n                          <div class=\"accordion-body p-0\">\n                            <p class=\"title-inside-modal mt-2 mb-2\">Colaboração</p>\n                            <hr class=\"component-hr\">\n                            <p class=\"content-inside-modal\">Engajar pessoas para construir um projeto político através da participação ativa e qualificada.</p>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- sustentabilidade -->\n          <div class=\"col-12 col-md-4\">\n            <div class=\"accordion\" id=\"accordionExample3\">\n              <div class=\"accordion-item\">\n                <!-- header -->\n                <div class=\"accordion-header\" id=\"headingFour\">\n                  <div class=\"accordion-button collapsed mt-4\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseFour\" aria-expanded=\"false\" aria-controls=\"collapseFour\">\n                    <div class=\"row\">\n                      <!-- header -->\n                      <div class=\"col-md-12\">\n                        <span class=\"component-space-icon\"><img src=\"../../assets/valores-icons/sustentabilidade.png\" alt=\"ícone de gráfico\"></span><span class=\"title-modal\">SUSTENTABILIDADE</span>\n                      </div>\n                      <!-- content -->\n                      <div class=\"col-md-12\">\n                        <div id=\"collapseFour\" class=\"no-border accordion-collapse collapse\" aria-labelledby=\"headingFour\" data-bs-parent=\"#accordionExample3\">\n                          <div class=\"accordion-body p-0\">\n                            <p class=\"title-inside-modal mt-2 mb-2\">Sustentabilidade</p>\n                            <hr class=\"component-hr\">\n                            <p class=\"content-inside-modal\">Propor políticas públicas que supram as necessidades atuais da população, sem colocar em risco o futuro das próximas gerações, equilibrando as dimensões econômica, ambiental e social.</p>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- renovação -->\n          <div class=\"col-12 col-md-4\">\n            <div class=\"accordion\" id=\"accordionExample5\">\n              <div class=\"accordion-item\">\n                <!-- header -->\n                <div class=\"accordion-header\" id=\"headingFive\">\n                  <div class=\"accordion-button collapsed mt-4\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseFive\" aria-expanded=\"false\" aria-controls=\"collapseFive\">\n                    <div class=\"row\">\n                      <!-- header -->\n                      <div class=\"col-md-12\">\n                        <span class=\"component-space-icon\"><img src=\"../../assets/valores-icons/renovacao.png\" alt=\"ícone de gráfico\"></span><span class=\"title-modal\">RENOVAÇÃO</span>\n                      </div>\n                      <!-- content -->\n                      <div class=\"col-md-12\">\n                        <div id=\"collapseFive\" class=\"no-border accordion-collapse collapse\" aria-labelledby=\"headingFive\" data-bs-parent=\"#accordionExample5\">\n                          <div class=\"accordion-body p-0\">\n                            <p class=\"title-inside-modal mt-2 mb-2\">Renovação</p>\n                            <hr class=\"component-hr\">\n                            <p class=\"content-inside-modal\">Fazer da política institucional um espaço de constante renovação, através da formação de novas lideranças e a eliminação de sucessivas reeleições para funções eletivas.</p>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- inovação -->\n          <div class=\"col-12 col-md-4\">\n            <div class=\"accordion\" id=\"accordionExample6\">\n              <div class=\"accordion-item\">\n                <!-- header -->\n                <div class=\"accordion-header\" id=\"headingSix\">\n                  <div class=\"accordion-button collapsed mt-4\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseSix\" aria-expanded=\"false\" aria-controls=\"collapseSix\">\n                    <div class=\"row\">\n                      <!-- header -->\n                      <div class=\"col-md-12\">\n                        <span class=\"component-space-icon\"><img src=\"../../assets/valores-icons/inovacao.png\" alt=\"ícone de gráfico\"></span><span class=\"title-modal\">INOVAÇÃO</span>\n                      </div>\n                      <!-- content -->\n                      <div class=\"col-md-12\">\n                        <div id=\"collapseSix\" class=\"no-border accordion-collapse collapse\" aria-labelledby=\"headingSix\" data-bs-parent=\"#accordionExample6\">\n                          <div class=\"accordion-body p-0\">\n                            <p class=\"title-inside-modal mt-2 mb-2\">Inovação</p>\n                            <hr class=\"component-hr\">\n                            <p class=\"content-inside-modal\">Buscar permanentemente vencer barreiras para colocar a Política na rota da inovação, consolidando a democracia e a participação colaborativa cidadã.</p>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- empatia -->\n          <div class=\"col-12 col-md-4\">\n            <div class=\"accordion\" id=\"accordionExample7\">\n              <div class=\"accordion-item\">\n                <!-- header -->\n                <div class=\"accordion-header\" id=\"headingSeven\">\n                  <div class=\"accordion-button collapsed mt-4\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseSeven\" aria-expanded=\"false\" aria-controls=\"collapseSeven\">\n                    <div class=\"row\">\n                      <!-- header -->\n                      <div class=\"col-md-12\">\n                        <span class=\"component-space-icon\"><img src=\"../../assets/valores-icons/empatia.png\" alt=\"ícone de gráfico\"></span><span class=\"title-modal\">EMPATIA</span>\n                      </div>\n                      <!-- content -->\n                      <div class=\"col-md-12\">\n                        <div id=\"collapseSeven\" class=\"no-border accordion-collapse collapse\" aria-labelledby=\"headingSeven\" data-bs-parent=\"#accordionExample7\">\n                          <div class=\"accordion-body p-0\">\n                            <p class=\"title-inside-modal mt-2 mb-2\">Empatia</p>\n                            <hr class=\"component-hr\">\n                            <p class=\"content-inside-modal\">Compreender os anseios e perspectivas dos grupos que compõem a sociedade a partir do lugar que eles ocupam.</p>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- pluradidade -->\n          <div class=\"col-12 col-md-4\">\n            <div class=\"accordion\" id=\"accordionExample8\">\n              <div class=\"accordion-item\">\n                <!-- header -->\n                <div class=\"accordion-header\" id=\"headingEight\">\n                  <div class=\"accordion-button collapsed mt-4\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseEight\" aria-expanded=\"false\" aria-controls=\"collapseEight\">\n                    <div class=\"row\">\n                      <!-- header -->\n                      <div class=\"col-md-12\">\n                        <span class=\"component-space-icon\"><img src=\"../../assets/valores-icons/pluralidade.png\" alt=\"ícone de gráfico\"></span><span class=\"title-modal\">PLURALIDADE</span>\n                      </div>\n                      <!-- content -->\n                      <div class=\"col-md-12\">\n                        <div id=\"collapseEight\" class=\"no-border accordion-collapse collapse\" aria-labelledby=\"headingEight\" data-bs-parent=\"#accordionExample8\">\n                          <div class=\"accordion-body p-0\">\n                            <p class=\"title-inside-modal mt-2 mb-2\">Pluralidade</p>\n                            <hr class=\"component-hr\">\n                            <p class=\"content-inside-modal\">Garantir a diversidade de ideias, opiniões e vivências para a construção de políticas públicas que atendam as particularidades da comunidade.</p>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- pautas -->\n      <div class=\"component-bg-secondary\">\n        <!-- foto pautas -->\n        <div id=\"img-card\" class=\"mt-5\">\n          <img loading=\"lazy\" class=\"w-100\" src=\"../../assets/pautas-andre-fraga.webp\" alt=\"Vereador André Fraga\">\n        </div>\n        <!-- conteúdo pautas-->\n        <div class=\"component-bg-primary\">\n          <div class=\"container component-degrade\">\n            <!-- logo -->\n            <div class=\"text-center pt-3\">\n              <img src=\"../../assets/pautas.png\" alt=\"Logo de Pautas\">\n            </div>\n            <!-- conteúdo -->\n            <div class=\"mt-3 component-p-space\">\n              <p class=\"project-text-white\">Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade.</p>\n              <p class=\"project-text-white\">Sendo assim, as nossas ideias para Salvador estão alinhadas a esses objetivos. Para isso, quatro ODS serão priorizados, são eles:</p>\n            </div>\n            <!-- cards -->\n            <div class=\"row\">\n              <!-- ods3 -->\n              <div class=\"col-12 col-md-6\">\n                <div class=\"text-center mb-3\">\n                  <div class=\"card component-card-title\">\n                    <div class=\"component-card-body project-text-white\">\n                      ODS 3 - Saúde e Bem-estar\n                    </div>\n                  </div>\n                  <div class=\"card component-card-content\">\n                    <div class=\"card-body text-center\">\n                      <p class=\"mt-4 component-text-black\">Assegurar uma vida saudável e promover o bem-estar para todos, em todas as idades.</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- ods4 -->\n              <div class=\"col-12 col-md-6\">\n                <div class=\"text-center mb-3\">\n                  <div class=\"card component-card-title\">\n                    <div class=\"component-card-body project-text-white\">\n                      ODS 4 - Educação de qualidade\n                    </div>\n                  </div>\n                  <div class=\"card component-card-content\">\n                    <div class=\"card-body text-center\">\n                      <p class=\"mt-4 component-text-black\">Assegurar a educação inclusiva e equitativa de qualidade, e promover oportunidades de aprendizagem ao longo da vida para todos.</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- ods11 -->\n              <div class=\"col-12 col-md-6\">\n                <div class=\"text-center mb-3\">\n                  <div class=\"card component-card-title\">\n                    <div class=\"component-card-body project-text-white\">\n                      ODS 11 - Cidades sustentáveis\n                    </div>\n                  </div>\n                  <div class=\"card component-card-content\">\n                    <div class=\"card-body text-center\">\n                      <p class=\"mt-4 component-text-black\">Tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis.</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- ods13 -->\n              <div class=\"col-12 col-md-6\">\n                <div class=\"text-center mb-3\">\n                  <div class=\"card component-card-title\">\n                    <div class=\"component-card-body project-text-white\">\n                      ODS 13 - Mudança do clima\n                    </div>\n                  </div>\n                  <div class=\"card component-card-content\">\n                    <div class=\"card-body text-center\">\n                      <p class=\"mt-4 component-text-black\">Tomar medidas urgentes para combater a mudança do clima e seus impactos.</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- foto comissões -->\n          <div id=\"img-card\" class=\"mt-5\">\n            <img loading=\"lazy\" class=\"w-100\" src=\"../../assets/comissoes-andre-fraga.webp\" alt=\"Vereador André Fraga\">\n          </div>\n          <!-- conteúdo comissão -->\n          <div class=\"component-bg-light\">\n            <div class=\"container component-degrade\">\n              <!-- logo -->\n              <div class=\"text-center pt-3\">\n                <img loading=\"lazy\" src=\"../../assets/comissoes.png\" alt=\"Logo Comissões\">\n              </div>\n              <!-- comissões -->\n              <div class=\"mt-3 component-p-space\">\n                <div class=\"row text-center\">\n                  <div class=\"col-12 col-md-6\">\n                    <img loading=\"lazy\" src=\"../../assets/teste-climaticas.png\" alt=\"ícone de gráfico\">\n                  </div>\n                  <div class=\"col-12 col-md-6 mt-3\">\n                    <img loading=\"lazy\" src=\"../../assets/teste-urbanas.png\" alt=\"ícone de gráfico\">\n                  </div>\n                  <div class=\"col-12 col-md-6 mt-3\">\n                    <img loading=\"lazy\" src=\"../../assets/teste-legislativo.png\" alt=\"ícone de gráfico\">\n                  </div>\n                  <div class=\"col-12 col-md-6 mt-3\">\n                    <img loading=\"lazy\" src=\"../../assets/teste-cultura.png\" alt=\"ícone de gráfico\">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- foto sociedade -->\n            <div id=\"img-card\" class=\"mt-5\">\n              <img loading=\"lazy\" class=\"w-100\" src=\"../../assets/sociedade-andre-fraga.webp\" alt=\"Vereador André Fraga\">\n            </div>\n            <div  class=\"component-bg-secondary\">\n              <div class=\"container component-degrade\">\n                <!-- logo -->\n                <div class=\"text-center pt-4\">\n                  <img loading=\"lazy\" src=\"../../assets/sociedade.png\" alt=\"Projetos com a Sociedade Civil\">\n                </div>\n              </div>\n              <!-- lista de posts -->\n              <ion-list class=\"mt-4 space-to-footer container-left component-bg-trnsparent\">\n                <div class=\"scrolling-wrapper mb-3\">\n                  <div class=\"card component-bg-trnsparent no-border card-space\" style=\"width: 18rem;\" (click)=\"presentModal()\">\n                    <img loading=\"lazy\" class=\"card-img-top\" src=\"../../assets/post-canteiro.webp\" alt=\"canteiro\">\n                    <div class=\"card-body component-bg-light card-content-slide\">\n                      <h5 class=\"card-title project-text-secondary fw-bold\">CANTEIROS COLETIVOS</h5>\n                      <p class=\"card-text component-text-black container-text\">O movimento Canteiros Coletivos é uma iniciativa cidadã, autônoma e apartidária de recuperação de praças e canteiros abandonados da cidade de Salvador.</p>\n                      <a href=\"#\" class=\"post-link\">Clique para saber mais</a>\n                    </div>\n                  </div>\n                  <div class=\"card component-bg-trnsparent no-border card-space\" style=\"width: 18rem;\">\n                    <img loading=\"lazy\" class=\"card-img-top\" src=\"../../assets/post-bike.png\" alt=\"canteiro\">\n                    <div class=\"card-body component-bg-light card-content-slide\">\n                      <h5 class=\"card-title project-text-secondary fw-bold\">LA FRIDA BIKE</h5>\n                      <p class=\"card-text component-text-black container-text\">Um empreendedorismo social orgânico e empoderador, criado por mulheres negras e feito por nós, mulheres negras. Com ideia de incentivar o uso da bike como... </p>\n                      <a href=\"#\" class=\"post-link\">Clique para saber mais</a>\n                    </div>\n                  </div>\n                  <div class=\"card component-bg-trnsparent no-border card-space\" style=\"width: 18rem;\">\n                    <img loading=\"lazy\" class=\"card-img-top\" src=\"../../assets/post-redemoinho.webp\" alt=\"canteiro\">\n                    <div class=\"card-body component-bg-light card-content-slide\">\n                      <h5 class=\"card-title project-text-secondary fw-bold\">REDEMOINHO</h5>\n                      <p class=\"card-text component-text-black container-text\">É uma cooperativa de serviços na área do Comércio Justo e Economia Solidária, tendo nas compras e vendas de produtos da agricultura familiar...</p>\n                      <a href=\"#\" class=\"post-link\">Clique para saber mais</a>\n                    </div>\n                  </div>\n                </div>\n                <a (click)=\"proximo('projetos-com-sociedade-civil')\" class=\"post-link-another\">Ver outros projetos</a>\n              </ion-list>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- rodapé -->\n  <footer class=\"footer mt-auto py-3 component-footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <!-- titulo -->\n        <div class=\"col-12 text-center\">\n          <h6 class=\"project-text-white\">ME SEGUE LÁ</h6>\n        </div>\n        <!-- ícones -->\n        <div class=\"col-12 text-center inline-father\">\n          <a href=\"https://twitter.com/euandrefraga\" target=\"_blank\">\n            <div class=\"inline-child space-icon\">\n              <img src=\"../../assets/icon-twitter.png\" alt=\"Twitter\">\n            </div>\n          </a>\n          <a href=\"https://www.facebook.com/euandrefraga\" target=\"_blank\">\n            <div class=\"inline-child space-icon\">\n              <img src=\"../../assets/icon-facebook.png\" alt=\"Facebook\">\n            </div>\n          </a>\n          <a href=\"https://www.instagram.com/euandrefraga/\" target=\"_blank\">\n            <div class=\"inline-child space-icon\">\n              <img src=\"../../assets/icon-instagram.png\" alt=\"Instagram\">\n            </div>\n          </a>\n          <a href=\"https://www.youtube.com/channel/UC7BSLZW3MscGlXvc1dpHekA\" target=\"_blank\">\n            <div class=\"inline-child space-icon\">\n              <img src=\"../../assets/icon-youtube.png\" alt=\"YouTube\">\n            </div>\n          </a>\n          <a href=\"https://www.linkedin.com/in/andr%C3%A9-fraga-b7b15434\" target=\"_blank\">\n            <div class=\"inline-child\">\n              <img src=\"../../assets/icon-linkedin.png\" alt=\"Linkedin\">\n            </div>\n          </a>\n        </div>\n        <!-- divisor -->\n        <div class=\"col-12\">\n          <hr class=\"footer-hr mt-4\">\n        </div>\n        <!-- contato -->\n        <div class=\"col-12\">\n          <p class=\"project-text-white fw-bold mb-1\">ENTRE EM CONTATO</p>\n          <p class=\"project-text-white mb-0 txt-300\">E-mail: andrefraga@cms.ba.gov</p>\n          <p class=\"project-text-white mb-0 txt-300\">Telefone: 71 9 9318-4941</p>\n          <p class=\"project-text-white txt-300\">Endereço: Rua Ruy Barbosa, nº27, Edf. Bahia Center, gabinete 33 - Centro - Salvador/BA</p>\n        </div>\n        <!-- titulo -->\n        <div class=\"col-12 text-center\">\n          <h6 class=\"project-text-white\">ANDRÉ FRAGA. TODOS OS DIREITOS RESERVADOS | 2021</h6>\n        </div>\n      </div>\n    </div>\n  </footer>\n</ion-content>\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9kZWFmdWx0XG4jY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modals_post_post_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/post/post.page */ "IoGL");







let HomePage = class HomePage {
    constructor(nav, modalController) {
        this.nav = nav;
        this.modalController = modalController;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
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
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map