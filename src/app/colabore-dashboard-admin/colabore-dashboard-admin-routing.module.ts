import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColaboreDashboardAdminPage } from './colabore-dashboard-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ColaboreDashboardAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColaboreDashboardAdminPageRoutingModule {}
