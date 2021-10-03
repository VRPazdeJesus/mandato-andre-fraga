import { Component } from '@angular/core';
import { NavController } from  '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { PostPage } from '../modals/post/post.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private nav: NavController, public modalController: ModalController) {}

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
