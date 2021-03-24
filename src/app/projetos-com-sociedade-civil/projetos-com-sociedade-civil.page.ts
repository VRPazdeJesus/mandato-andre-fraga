import { Component, OnInit } from '@angular/core';
import { NavController } from  '@ionic/angular';

@Component({
  selector: 'app-projetos-com-sociedade-civil',
  templateUrl: './projetos-com-sociedade-civil.page.html',
  styleUrls: ['./projetos-com-sociedade-civil.page.scss'],
})
export class ProjetosComSociedadeCivilPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }

  proximo(values:any) {
    this.nav.navigateForward('/'+values);
  }

}
