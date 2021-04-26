import { Component, OnInit } from '@angular/core'
import { NavController } from  '@ionic/angular'
import { FirebaseService } from '../services/firebase.service'

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {

  private content: any
  private textContent: string
  private address: string
  private email: string
  private loading = false

  constructor(private nav:NavController, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.getContentPage()
  }

  getContentPage() {
    this.firebaseService.getContentPage('contato').then(res => {
      this.content = res
    }).then(() => {
      this.textContent = this.content.contentOne.split(/\\n/g)
      this.address = this.content.address
      this.email = this.content.email.split(/\\n/g)
      this.loading = true
    })
  }

  proximo(values:any) {
    this.nav.navigateForward('/'+values);
  }

}
