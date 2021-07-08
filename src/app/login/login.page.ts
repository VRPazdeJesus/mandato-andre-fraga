import { Component, OnInit } from '@angular/core';
import { NavController } from  '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private email: string
  private password: string
  private response: string
  private statusResponse: boolean
  private loading: boolean

  constructor(private nav:NavController, private firebaseService: FirebaseService) { 
    this.response = ''
    this.statusResponse = false
    this.loading = false
  }

  ngOnInit() {
  }

  login() {
    this.firebaseService.authAdmin().then(res => {

      for(let key of Object.keys(res)) {
        if((res[key].email === this.email) && (res[key].password === this.password)) {
          this.statusResponse = true
        }
      }

      if(this.statusResponse) {
        this.response = 'Login efetuado com sucesso'
        this.proximo('visao-geral')
      } else {
        this.response = 'Credenciais não autorizadas!'
      }
      
    }).catch(e => {
      this.statusResponse = false
      this.response = 'Erro ao fazer login! Verifique as credenciais e a sua internet'
    })
  }

  proximo(values:any) {
    this.nav.navigateForward('/'+values)
  }

}
