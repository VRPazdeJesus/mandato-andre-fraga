import { Component, OnInit } from '@angular/core';
import { NavController } from  '@ionic/angular';

@Component({
  selector: 'app-quem-sou-dashboard-admin',
  templateUrl: './quem-sou-dashboard-admin.page.html',
  styleUrls: ['./quem-sou-dashboard-admin.page.scss'],
})
export class QuemSouDashboardAdminPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }

  proximo(values:any) {
    this.nav.navigateForward('/'+values)
  }

}
