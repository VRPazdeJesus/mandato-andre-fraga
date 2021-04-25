import { Component, OnInit } from '@angular/core';
import { NavController } from  '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-nosso-mandato',
  templateUrl: './nosso-mandato.page.html',
  styleUrls: ['./nosso-mandato.page.scss'],
})
export class NossoMandatoPage implements OnInit {

  private textContent: string
  private content: any

  constructor(private nav:NavController, private firebaseService: FirebaseService) { 
    this.getContentPage()
  }

  ngOnInit() { }

  getContentPage() {
    this.firebaseService.getContentPage('nosso-mandato').then(res => {
      this.content = res
    }).then(() => {
      this.textContent = this.content.contentOne.split(/\\n/g)
    })
  }

  proximo(values:any) {
    this.nav.navigateForward('/'+values);
  }

}
