import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NossoMandatoDashboardAdminPage } from './nosso-mandato-dashboard-admin.page';

const routes: Routes = [
  {
    path: '',
    component: NossoMandatoDashboardAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NossoMandatoDashboardAdminPageRoutingModule {}
