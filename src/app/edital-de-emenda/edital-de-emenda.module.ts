import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditalDeEmendaPageRoutingModule } from './edital-de-emenda-routing.module';

import { EditalDeEmendaPage } from './edital-de-emenda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditalDeEmendaPageRoutingModule
  ],
  declarations: [EditalDeEmendaPage]
})
export class EditalDeEmendaPageModule {}
