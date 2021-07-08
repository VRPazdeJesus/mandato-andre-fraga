import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisaoGeralPage } from './visao-geral.page';

const routes: Routes = [
  {
    path: '',
    component: VisaoGeralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisaoGeralPageRoutingModule {}
