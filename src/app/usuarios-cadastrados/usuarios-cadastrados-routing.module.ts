import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosCadastradosPage } from './usuarios-cadastrados.page';

const routes: Routes = [
  {
    path: '',
    component: UsuariosCadastradosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosCadastradosPageRoutingModule {}
