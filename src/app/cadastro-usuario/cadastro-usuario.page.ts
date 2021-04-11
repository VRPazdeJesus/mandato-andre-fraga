import { Component, OnInit } from '@angular/core';
import { NavController } from  '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {

  constructor(private nav:NavController, private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  proximo(values:any) {
    this.nav.navigateForward('/'+values)
  }

}
