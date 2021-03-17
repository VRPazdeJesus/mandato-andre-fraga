import { Component } from '@angular/core';
import { NavController } from  '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private nav:NavController) {}

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  proximo(values:any) {
    this.nav.navigateForward('/'+values);
  }

}
