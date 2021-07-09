import { Component, OnInit } from '@angular/core';
import { NavController } from  '@ionic/angular';

@Component({
  selector: 'app-visao-geral',
  templateUrl: './visao-geral.page.html',
  styleUrls: ['./visao-geral.page.scss'],
})
export class VisaoGeralPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }

  proximo(values:any) {
    this.nav.navigateForward('/'+values)
  }

}
