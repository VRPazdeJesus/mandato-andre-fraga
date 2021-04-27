import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
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
    return new Promise((resolve, reject) => {
      this.fireauth.signInWithEmailAndPassword(emailValue, passwordValue).then(
        res => resolve(res),
        err => reject(err))
    })
  }

  getContentPage(value: string) {
    return new Promise((resolve, reject) => {
      let database = firebase.database().ref('pages/'+value)
        .once('value',(snap) => {
            database.then(
            res => resolve(snap.val()),
            err => reject(err))
        })      
    })
  }

}