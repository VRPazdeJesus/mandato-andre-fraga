import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjetosComSociedadeCivilPageRoutingModule } from './projetos-com-sociedade-civil-routing.module';

import { ProjetosComSociedadeCivilPage } from './projetos-com-sociedade-civil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjetosComSociedadeCivilPageRoutingModule
  ],
  declarations: [ProjetosComSociedadeCivilPage]
})
export class ProjetosComSociedadeCivilPageModule {}
