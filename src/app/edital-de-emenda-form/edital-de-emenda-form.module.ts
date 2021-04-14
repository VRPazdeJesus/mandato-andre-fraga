import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditalDeEmendaFormPageRoutingModule } from './edital-de-emenda-form-routing.module';

import { EditalDeEmendaFormPage } from './edital-de-emenda-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditalDeEmendaFormPageRoutingModule
  ],
  declarations: [EditalDeEmendaFormPage]
})
export class EditalDeEmendaFormPageModule {}
