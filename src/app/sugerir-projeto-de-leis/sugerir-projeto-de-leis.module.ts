import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SugerirProjetoDeLeisPageRoutingModule } from './sugerir-projeto-de-leis-routing.module';

import { SugerirProjetoDeLeisPage } from './sugerir-projeto-de-leis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SugerirProjetoDeLeisPageRoutingModule
  ],
  declarations: [SugerirProjetoDeLeisPage]
})
export class SugerirProjetoDeLeisPageModule {}
