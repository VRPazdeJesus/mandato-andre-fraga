import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private fireauth: AngularFireAuth) { }

  recoveryPassword(value: any) {
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

  login(emailValue: any, passwordValue: any) {
    console.log('fiz login')
    return new Promise((resolve, reject) => {
      this.fireauth.signInWithEmailAndPassword(emailValue, passwordValue).then(
        res => resolve(res),
        err => reject(err))
    })

    // firebase.auth().signInWithEmailAndPassword(emailValue, emailValue)
    // .then(function(resp) {
    //     firebase.database().ref('users/').on('value', function(snapshot) {
    //         snapshot.forEach(function (childSnapshot) {
    //             var value = childSnapshot.val();
    //             if(value.email == email) {
    //                 generalName = value.username;
    //                 document.getElementById("userName").innerHTML = 'Olá, '+value.username;
    //             }
    //         });
    //     })
    //     document.getElementById("response").innerHTML = 'Carregando....';             
    // })
    // .then(() => {
    //     document.getElementById("response").innerHTML = 'Carregando..';
    //     searchProposal();
    // })
    // .catch(function(error) {
    //     if(error.code == 'auth/user-not-found') {
    //         document.getElementById("response").innerHTML = 'Credenciais inexistentes! Por favor, registre-se!';
    //     } else if(error.message == 'A network error (such as timeout, interrupted connection or unreachable host) has occurred.') {
    //         document.getElementById("response").innerHTML = 'Parece que você está sem internet :(';
    //     } else if(error.message == 'The password is invalid or the user does not have a password.') {
    //         document.getElementById("response").innerHTML = 'Senha inválida!'
    //     }
    // });
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
