import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  user = {} as User;

  fullName;
  username;
  email;
  password;
  dob;

  constructor(public navCtrl: NavController, public firebase: AngularFireAuth) {
  }

  // signup() {
  //   this.firebase.auth.createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
  //     // Handle Errors here.
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     // ...
  //   });
  //   this.addAdditionalInformation();
  // }
  //
  // addAdditionalInformation() {
  //   var user = this.firebase.auth.currentUser;
  //   user.updateProfile({
  //     fullName: this.fullName,
  //     username: this.username,
  //     dob: this.dob
  //   }).then(function() {
  //     console.log("Success registering " + this.fullName);
  //   }).catch(function(error) {
  //     console.log("Failure registering " + this.fullName);
  //   });
  // }

}
