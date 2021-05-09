import { Component, OnInit } from '@angular/core'
import { NavController } from  '@ionic/angular'
import { ModalController } from '@ionic/angular'
import { PostPage } from '../modals/post/post.page'
import { FirebaseService } from '../services/firebase.service'

@Component({
  selector: 'app-projetos-com-sociedade-civil',
  templateUrl: './projetos-com-sociedade-civil.page.html',
  styleUrls: ['./projetos-com-sociedade-civil.page.scss'],
})
export class ProjetosComSociedadeCivilPage implements OnInit {

  private content: any
  private blog: any = []

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
    })
  }

  proximo(values:any) {
    this.nav.navigateForward('/'+values);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: PostPage,
      //cssClass: 'my-custom-class',
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N'
      }
    });
    return await modal.present();
  }

}
