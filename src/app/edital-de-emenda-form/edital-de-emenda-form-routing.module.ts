import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditalDeEmendaFormPage } from './edital-de-emenda-form.page';

const routes: Routes = [
  {
    path: '',
    component: EditalDeEmendaFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditalDeEmendaFormPageRoutingModule {}
