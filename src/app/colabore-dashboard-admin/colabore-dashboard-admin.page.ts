import { Component, OnInit } from '@angular/core';
import { NavController } from  '@ionic/angular';

@Component({
  selector: 'app-colabore-dashboard-admin',
  templateUrl: './colabore-dashboard-admin.page.html',
  styleUrls: ['./colabore-dashboard-admin.page.scss'],
})
export class ColaboreDashboardAdminPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }

  proximo(values:any) {
    this.nav.navigateForward('/'+values)
  }

}
