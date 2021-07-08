import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisaoGeralPageRoutingModule } from './visao-geral-routing.module';

import { VisaoGeralPage } from './visao-geral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisaoGeralPageRoutingModule
  ],
  declarations: [VisaoGeralPage]
})
export class VisaoGeralPageModule {}
