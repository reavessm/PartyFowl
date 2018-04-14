import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Firebase } from '@ionic-native/firebase'

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  fullName;
  username;
  email;
  password;
  dob;

  constructor(public navCtrl: NavController, public firebase: Firebase) {
  }

  signup() {
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
    addAdditionalInformation();
  }

  addAdditionalInformation() {
    var user = firebase.auth().currentUser;
    user.updateProfile({
      fullName: this.fullName,
      username: this.username,
      dob: this.dob
    }).then(function() {
      console.log("Success registering " + this.fullName);
    }).catch(function(error) {
      console.log("Failure registering " + this.fullName);
    });
  }

}
