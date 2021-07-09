import { Component, OnInit } from '@angular/core';
import { NavController } from  '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-usuarios-cadastrados',
  templateUrl: './usuarios-cadastrados.page.html',
  styleUrls: ['./usuarios-cadastrados.page.scss'],
})
export class UsuariosCadastradosPage implements OnInit {

  private content: any
  private users: any

  constructor(private nav:NavController, private firebaseService: FirebaseService) {
    this.getUsers()
    this.users = []
  }

  ngOnInit() {
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
    })
  }

  proximo(values:any) {
    this.nav.navigateForward('/'+values)
  }

}
