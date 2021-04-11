import { Component, OnInit } from '@angular/core';
import { NavController } from  '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {

  private name: string
  private birthDate: string
  private telephone: string
  private address: string
  private district: string
  private email: string
  private socialNetwork: string
  private andreVoter: string
  private participantAmbassadorNetwork: string
  private password: string
  private confirmPassword: string


  constructor(private nav:NavController, private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  proximo(values:any) {
    this.nav.navigateForward('/'+values)
  }

  registerUser() {
    console.log('Register user')
    console.log('name', this.name);
    console.log('birthDate', this.birthDate);
    console.log('telephone', this.telephone);
    console.log('address', this.address);
    console.log('district', this.district);
    console.log('email', this.email);
    console.log('socialNetwork', this.socialNetwork);
    console.log('andreVoter', this.andreVoter);
    console.log('participantAmbassadorNetwork', this.participantAmbassadorNetwork);
    console.log('password', this.password);
    console.log('confirmPassword', this.confirmPassword);
  }

}
