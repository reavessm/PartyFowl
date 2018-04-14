import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventDetailsPage } from '../event-details/event-details';

@Component({
  selector: 'page-create-event',
  templateUrl: 'create-event.html'
})
export class CreateEventPage {

  constructor(public navCtrl: NavController) {
  }
  goToEventDetails(params){
    if (!params) params = {};
    this.navCtrl.push(EventDetailsPage);
  }
}
