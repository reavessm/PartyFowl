import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';

import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AngularFireAuth]
})
export class LoginPage {

  user = {} as User;

  email;
  password;

  constructor(public navCtrl: NavController, public firebase: AngularFireAuth) {
  }

  goToSignup(params) {
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }

  // login() {
  //   if (this.user.email == "eharmon@email.sc.edu" && this.user.password == "1234") {
  //     this.navCtrl.setRoot(HomePage);
  //     // this.navCtrl.push(HomePage);
  //   }
  // }

  login() {
    var that = this;
    this.firebase.auth.signInWithEmailAndPassword(this.user.email, this.user.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    }).then(function() {
      that.changeRootPage();
    });
  }

  changeRootPage() {
    this.firebase.auth.onAuthStateChanged(function(user) {
      if (user) {
        this.setRoot.navCtrl(HomePage);
      }
    });
  }

}
