import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdeiasOds11PageRoutingModule } from './ideias-ods11-routing.module';

import { IdeiasOds11Page } from './ideias-ods11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdeiasOds11PageRoutingModule
  ],
  declarations: [IdeiasOds11Page]
})
export class IdeiasOds11PageModule {}
