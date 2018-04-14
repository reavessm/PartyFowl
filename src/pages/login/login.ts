import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  email;
  password;

  constructor(public navCtrl: NavController) {
  }

  goToSignup(params) {
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }

  login() {
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      this.navCtrl.push(HomePage);
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }
}
