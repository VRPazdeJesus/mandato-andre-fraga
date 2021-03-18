import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjetoDeLeiPageRoutingModule } from './projeto-de-lei-routing.module';

import { ProjetoDeLeiPage } from './projeto-de-lei.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjetoDeLeiPageRoutingModule
  ],
  declarations: [ProjetoDeLeiPage]
})
export class ProjetoDeLeiPageModule {}
