import { Component, OnInit } from '@angular/core';
import { NavController } from  '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-colabore',
  templateUrl: './colabore.page.html',
  styleUrls: ['./colabore.page.scss'],
})
export class ColaborePage implements OnInit {

  private email: string
  private password: string
  private content: any
  private textOne: string
  private textTwo: string
  private response: string
  private statusResponse: boolean

  constructor(private nav:NavController, private firebaseService: FirebaseService) { 
    this.response = ''
    this.getContentPage()
  }

  ngOnInit() {
  }

  login() {
    this.firebaseService.login(this.email, this.password).then(res => {
      this.statusResponse = true
      this.response = 'Login efetuado com sucesso'
      this.proximo('colabore-dashboard')
    }).catch(e => {
      this.statusResponse = false
      this.response = 'Erro ao fazer login! Verifique as credenciais e a sua internet'
    })
  }

  getContentPage() {
    this.firebaseService.getContentPage('colabore').then(res => {
      this.content = res
    }).then(() => {
      this.textOne = this.content.contentOne
      this.textTwo = this.content.contentTwo
    })
  }

  proximo(values:any) {
    this.nav.navigateForward('/'+values)
  }

}
