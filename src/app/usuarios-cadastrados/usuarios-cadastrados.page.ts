import { Component, OnInit } from '@angular/core';
import { NavController } from  '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';
import * as XLSX from 'xlsx'; 

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

  downloadUsers() {
    console.log('donwload dos usuários')
    this.exportToExcel(this.users,'users');
  }

  async exportToExcel(data,filename){
    const ws: XLSX.WorkSheet =XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, filename);
    XLSX.writeFile(wb, filename+'.xlsx');
  }

}
