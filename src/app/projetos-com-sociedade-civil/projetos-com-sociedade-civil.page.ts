import { Component, OnInit } from '@angular/core';
import { NavController } from  '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { PostPage } from '../modals/post/post.page';

@Component({
  selector: 'app-projetos-com-sociedade-civil',
  templateUrl: './projetos-com-sociedade-civil.page.html',
  styleUrls: ['./projetos-com-sociedade-civil.page.scss'],
})
export class ProjetosComSociedadeCivilPage implements OnInit {

  constructor(private nav:NavController, public modalController: ModalController) { }

  ngOnInit() {
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
