import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdeiasOds13PageRoutingModule } from './ideias-ods13-routing.module';

import { IdeiasOds13Page } from './ideias-ods13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdeiasOds13PageRoutingModule
  ],
  declarations: [IdeiasOds13Page]
})
export class IdeiasOds13PageModule {}
