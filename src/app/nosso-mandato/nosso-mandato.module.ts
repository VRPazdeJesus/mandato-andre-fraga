import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NossoMandatoPageRoutingModule } from './nosso-mandato-routing.module';

import { NossoMandatoPage } from './nosso-mandato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NossoMandatoPageRoutingModule
  ],
  declarations: [NossoMandatoPage]
})
export class NossoMandatoPageModule {}
