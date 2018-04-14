import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CreateEventPage } from '../pages/create-event/create-event';
import { EventDetailsPage } from '../pages/event-details/event-details';
import { MyEventsPage } from '../pages/my-events/my-events';
import { SettingsPage } from '../pages/settings/settings';
import { ProfilePage } from '../pages/profile/profile';
import { SearchPage } from '../pages/search/search';


import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToCreateEvent(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CreateEventPage);
  }goToEventDetails(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EventDetailsPage);
  }goToMyEvents(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MyEventsPage);
  }goToSettings(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SettingsPage);
  }goToProfile(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ProfilePage);
  }goToSearch(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SearchPage);
  }
}
