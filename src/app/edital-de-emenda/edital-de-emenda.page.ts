import { Component, OnInit } from '@angular/core';
import { NavController } from  '@ionic/angular';

@Component({
  selector: 'app-edital-de-emenda',
  templateUrl: './edital-de-emenda.page.html',
  styleUrls: ['./edital-de-emenda.page.scss'],
})
export class EditalDeEmendaPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }

  proximo(values:any) {
    this.nav.navigateForward('/'+values)
  }

  sendProposal() {
    this.proximo('edital-de-emenda-form')
  }

}
