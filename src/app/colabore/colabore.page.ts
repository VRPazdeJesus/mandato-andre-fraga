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

  constructor(private nav:NavController, private firebaseService: FirebaseService) { 
    this.getContentPage()
  }

  ngOnInit() {
  }

  login() {
    console.log('primeira chamada de login')
    this.firebaseService.login(this.email, this.password).then(res => {
      console.log('res',res)
      this.proximo('colabore-dashboard')
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
