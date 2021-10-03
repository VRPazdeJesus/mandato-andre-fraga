import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContatoPageRoutingModule } from './contato-routing.module';

import { ContatoPage } from './contato.page';
import { NavComponent } from '../components/nav/nav.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContatoPageRoutingModule
  ],
  declarations: [ContatoPage, NavComponent, FooterComponent]
})
export class ContatoPageModule {}
