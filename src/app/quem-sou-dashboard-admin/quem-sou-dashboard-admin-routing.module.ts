import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuemSouDashboardAdminPage } from './quem-sou-dashboard-admin.page';

const routes: Routes = [
  {
    path: '',
    component: QuemSouDashboardAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuemSouDashboardAdminPageRoutingModule {}
