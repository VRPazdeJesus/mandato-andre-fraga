import { Component, OnInit } from '@angular/core';
import { NavController } from  '@ionic/angular';

@Component({
  selector: 'app-recupera-senha',
  templateUrl: './recupera-senha.page.html',
  styleUrls: ['./recupera-senha.page.scss'],
})
export class RecuperaSenhaPage implements OnInit {

  response: string

  constructor(private nav:NavController) {
    this.response = 'E-mail enviado com sucesso'
  }

  ngOnInit() {
  }

  proximo(values:any) {
    this.nav.navigateForward('/'+values)
  }

}
