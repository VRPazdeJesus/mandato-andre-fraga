import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private fireauth: AngularFireAuth) { }

  register(data: any) {
    let day = new Date().toLocaleDateString('pt-br')

    return new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then(() => {
        firebase.database().ref('users/'+ data.name).set({
          name: data.name,
          birthDate: data.birthDate,
          telephone: data.telephone,
          address: data.address,
          district: data.district,
          email: data.email,
          socialNetwork: data.socialNetwork,
          andreVoter: data.andreVoter,
          participantAmbassadorNetwork: data.participantAmbassadorNetwork,
          dayregister: day
        }).then(
          res => resolve(res),
          err => reject(err))
      })
    })
  }

  recoveryPassword(value: any) {
    return new Promise((resolve, reject) => {
      this.fireauth.sendPasswordResetEmail(value).then(
        res => resolve(res),
        err => reject(err))
    })
  }

  login(emailValue: any, passwordValue: any) {
    console.log('fiz login')
    return new Promise((resolve, reject) => {
      this.fireauth.signInWithEmailAndPassword(emailValue, passwordValue).then(
        res => resolve(res),
        err => reject(err))
    })
  }

}
