import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuemSouDashboardAdminPageRoutingModule } from './quem-sou-dashboard-admin-routing.module';

import { QuemSouDashboardAdminPage } from './quem-sou-dashboard-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuemSouDashboardAdminPageRoutingModule
  ],
  declarations: [QuemSouDashboardAdminPage]
})
export class QuemSouDashboardAdminPageModule {}
