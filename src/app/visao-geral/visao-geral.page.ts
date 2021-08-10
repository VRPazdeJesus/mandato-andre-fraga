import { Component, OnInit } from '@angular/core';
import { NavController } from  '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-visao-geral',
  templateUrl: './visao-geral.page.html',
  styleUrls: ['./visao-geral.page.scss'],
})
export class VisaoGeralPage implements OnInit {

  private content: any
  private users: any
  public userAmount: any

  constructor(private nav:NavController, private firebaseService: FirebaseService) {
    this.getUsers()
    this.users = []
    this.userAmount = 0
  }

  ngOnInit() {
  }

  proximo(values:any) {
    this.nav.navigateForward('/'+values)
  }

  getUsers() {
    this.firebaseService.getUsers().then(res => {
      this.content = res
    }).then(() => {
      for(let key in this.content) {
        if(this.content.hasOwnProperty(key)){  
          this.users.push(this.content[key])  
        }  
      }
      this.userAmount = this.users.length
    })
  }

}
