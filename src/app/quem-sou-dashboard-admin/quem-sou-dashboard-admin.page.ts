import { Component, OnInit } from '@angular/core';
import { NavController } from  '@ionic/angular';
import { ModalController } from '@ionic/angular'
import { FirebaseService } from '../services/firebase.service'

@Component({
  selector: 'app-quem-sou-dashboard-admin',
  templateUrl: './quem-sou-dashboard-admin.page.html',
  styleUrls: ['./quem-sou-dashboard-admin.page.scss'],
})
export class QuemSouDashboardAdminPage implements OnInit {

  private content: any
  private blog: any = []
  private loading: boolean

  constructor(private nav:NavController, public modalController: ModalController, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.getPostPage()
  }

  getPostPage() {
    this.firebaseService.getContentPage('quem-sou/blog').then(res => {
      this.content = res
    }).then(() => {
      for (let key in this.content) {
        this.blog.push(this.content[key])
      }
    }).then(() => {
      this.loading = false
    })
  }

  proximo(values:any) {
    this.nav.navigateForward('/'+values)
  }

}
