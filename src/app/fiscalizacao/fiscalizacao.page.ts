import { Component, OnInit } from '@angular/core';
import { NavController } from  '@ionic/angular';

@Component({
  selector: 'app-fiscalizacao',
  templateUrl: './fiscalizacao.page.html',
  styleUrls: ['./fiscalizacao.page.scss'],
})
export class FiscalizacaoPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }

  proximo(values:any) {
    this.nav.navigateForward('/'+values);
  }

}
