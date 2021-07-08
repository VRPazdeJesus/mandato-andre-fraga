import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuariosCadastradosPageRoutingModule } from './usuarios-cadastrados-routing.module';

import { UsuariosCadastradosPage } from './usuarios-cadastrados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuariosCadastradosPageRoutingModule
  ],
  declarations: [UsuariosCadastradosPage]
})
export class UsuariosCadastradosPageModule {}
