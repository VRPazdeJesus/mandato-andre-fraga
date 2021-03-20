import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdeiasOds4PageRoutingModule } from './ideias-ods4-routing.module';

import { IdeiasOds4Page } from './ideias-ods4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdeiasOds4PageRoutingModule
  ],
  declarations: [IdeiasOds4Page]
})
export class IdeiasOds4PageModule {}
