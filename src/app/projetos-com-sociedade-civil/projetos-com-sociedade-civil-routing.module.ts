import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjetosComSociedadeCivilPage } from './projetos-com-sociedade-civil.page';

const routes: Routes = [
  {
    path: '',
    component: ProjetosComSociedadeCivilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjetosComSociedadeCivilPageRoutingModule {}
