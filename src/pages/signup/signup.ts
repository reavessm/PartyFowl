import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { User } from '../../models/user';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers: [AngularFireAuth]
})
export class SignupPage {

  user = {} as User;

  fullName: string;
  username: string;
  email: string;
  password: string;
  dob;

  constructor(public navCtrl: NavController, public af: AngularFireAuth, public fs: AngularFirestore) {
  }

  signup() {
    var that = this;
    this.af.auth.createUserWithEmailAndPassword(this.user.email, this.user.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    }).then(function(this) { that.addAdditionalInformation(); });
  }

  addAdditionalInformation() {
    this.fs.collection("users").add({
      fullName: this.user.fullName,
      username: this.user.username,
      dob: this.user.dob
    }).then(function() {
      console.log("Success registering");
    }).catch(function(error) {
      console.log("Failure registering");
    });
    this.navCtrl.push(LoginPage);
  }

}
