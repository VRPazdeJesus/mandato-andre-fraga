import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NossoMandatoDashboardAdminPageRoutingModule } from './nosso-mandato-dashboard-admin-routing.module';

import { NossoMandatoDashboardAdminPage } from './nosso-mandato-dashboard-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NossoMandatoDashboardAdminPageRoutingModule
  ],
  declarations: [NossoMandatoDashboardAdminPage]
})
export class NossoMandatoDashboardAdminPageModule {}
