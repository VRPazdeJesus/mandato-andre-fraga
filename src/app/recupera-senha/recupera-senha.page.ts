import { Component, OnInit } from '@angular/core';
import { NavController } from  '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-recupera-senha',
  templateUrl: './recupera-senha.page.html',
  styleUrls: ['./recupera-senha.page.scss'],
})
export class RecuperaSenhaPage implements OnInit {

  private email: string
  private response: string
  private statusResponse: boolean

  constructor(private nav:NavController, private firebaseService: FirebaseService) {
    this.response = ''
    this.email = ''
  }

  ngOnInit() {
  }

  recoveryPassword() {
    console.log('this.email', this.email)
    this.firebaseService.recoveryPassword(this.email).then(res => {
      this.response = 'E-mail enviado com sucesso'
      this.email = ''
      this.statusResponse = true
    }).catch(e => {
      this.response = 'E-mail não cadastrado! Tente novamente'
      this.email = '' 
      this.statusResponse = false
    })
  }

  proximo(values:any) {
    this.nav.navigateForward('/'+values)
  }

}
