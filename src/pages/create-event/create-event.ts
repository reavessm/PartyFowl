import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventDetailsPage } from '../event-details/event-details';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'page-create-event',
  templateUrl: 'create-event.html'
})
export class CreateEventPage {

  event = {} as Event;
  name;
  location;
  description;
  startTime;
  capacity;
  needone;
  needtwo;
  needthree;

  constructor(public navCtrl: NavController, public fs: AngularFirestore) {
  }

  goToEventDetails(params){
    if (!params) params = {};
    this.navCtrl.push(EventDetailsPage);
  }

  createEvent() {
    this.fs.collection("Events").add({
      name: this.event.name,
      location: this.event.location,
      description: this.event.description,
      startTime: this.event.startTime,
      capacity: this.event.capacity,
      description: this.event.description,
      needone: this.event.needone,
      needtwo: this.event.needtwo,
      needthree: this.event.needthree,
    }).then(function() {
      console.log("Success registering");
    }).catch(function(error) {
      console.log("Failure registering");
    });
    this.goToEventDetails();
  }
}
