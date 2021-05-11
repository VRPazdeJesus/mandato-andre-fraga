import { Component } from '@angular/core';
import { NavController } from  '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { PostPage } from '../modals/post/post.page';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private content: any
  private carousel: any = []
  private blog: any = []
  private loadingSlidePage: boolean

  constructor(private nav:NavController, public modalController: ModalController, private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.loadingSlidePage = true
    this.getSlidePage()
  }

  getSlidePage() {
    this.firebaseService.getContentPage('quem-sou/slide').then(res => {
      this.content = res
    }).then(() => {
      for (let key in this.content) {
        this.carousel.push(this.content[key])
      }
    }).then(() => {
      this.loadingSlidePage = false
      this.getPostPage()
    })
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

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

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
