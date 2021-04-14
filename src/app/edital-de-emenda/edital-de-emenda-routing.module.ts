import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditalDeEmendaPage } from './edital-de-emenda.page';

const routes: Routes = [
  {
    path: '',
    component: EditalDeEmendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditalDeEmendaPageRoutingModule {}
