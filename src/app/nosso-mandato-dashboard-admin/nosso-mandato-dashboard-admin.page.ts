import { Component, OnInit } from '@angular/core';
import { NavController } from  '@ionic/angular';

@Component({
  selector: 'app-nosso-mandato-dashboard-admin',
  templateUrl: './nosso-mandato-dashboard-admin.page.html',
  styleUrls: ['./nosso-mandato-dashboard-admin.page.scss'],
})
export class NossoMandatoDashboardAdminPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }

  proximo(values:any) {
    this.nav.navigateForward('/'+values)
  }

}
