import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Firebase } from '@ionic-native/firebase';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SearchPage } from '../pages/search/search';
import { CreateEventPage } from '../pages/create-event/create-event';
import { MyEventsPage } from '../pages/my-events/my-events';
import { EventDetailsPage } from '../pages/event-details/event-details';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { SettingsPage } from '../pages/settings/settings';
import { ProfilePage } from '../pages/profile/profile';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from './../providers/firebase/firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCx_bj_D_z-uFoWo8snt1QtuuInrewTKWI",
    authDomain: "partyfowl-d4c42.firebaseapp.com",
    databaseURL: "https://partyfowl-d4c42.firebaseio.com",
    projectId: "partyfowl-d4c42",
    storageBucket: "partyfowl-d4c42.appspot.com",
    messagingSenderId: "688549902575"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchPage,
    CreateEventPage,
    MyEventsPage,
    EventDetailsPage,
    LoginPage,
    SignupPage,
    SettingsPage,
    ProfilePage,
    EditProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchPage,
    CreateEventPage,
    MyEventsPage,
    EventDetailsPage,
    LoginPage,
    SignupPage,
    SettingsPage,
    ProfilePage,
    EditProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
