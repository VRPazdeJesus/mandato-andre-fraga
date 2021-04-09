import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private fireauth: AngularFireAuth) { }

  recoveryPassword(value) {
    // return new Promise((resolve, reject) => {
    // firebase.auth().sendPasswordResetEmail(value).then(
    //   res => resolve(res),
    //   err => reject(err))
    // })
    return new Promise((resolve, reject) => {
      this.fireauth.sendPasswordResetEmail(value).then(
        res => resolve(res),
        err => reject(err))
    })
  }

  // getLives(dia:any) {
  //   return new Promise<any>((resolve, reject) => {
  //     let database = firebase.database().ref(dia)
  //     .once('value',(snap) => {
  //       database.then(
  //         res => resolve(snap.val()),
  //         err => reject(err))
  //     });      
  //   })
  // }

}
