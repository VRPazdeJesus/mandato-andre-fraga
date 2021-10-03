import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColaboreDashboardPageRoutingModule } from './colabore-dashboard-routing.module';

import { ColaboreDashboardPage } from './colabore-dashboard.page';
import { NavComponent } from '../components/nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColaboreDashboardPageRoutingModule
  ],
  declarations: [ColaboreDashboardPage, NavComponent]
})
export class ColaboreDashboardPageModule {}
