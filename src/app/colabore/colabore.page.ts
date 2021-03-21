import { Component, OnInit } from '@angular/core';
import { NavController } from  '@ionic/angular';

@Component({
  selector: 'app-colabore',
  templateUrl: './colabore.page.html',
  styleUrls: ['./colabore.page.scss'],
})
export class ColaborePage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }

  proximo(values:any) {
    this.nav.navigateForward('/'+values);
  }

}
