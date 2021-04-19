import { Component, OnInit } from '@angular/core';
import { NavController } from  '@ionic/angular';

@Component({
  selector: 'app-ideias-ods3',
  templateUrl: './ideias-ods3.page.html',
  styleUrls: ['./ideias-ods3.page.scss'],
})
export class IdeiasOds3Page implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }

  proximo(values:any) {
    console.log(values)
    this.nav.navigateForward('/'+values);
  }

}
