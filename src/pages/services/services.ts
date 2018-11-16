import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AppoimentsPage } from '../appoiments/appoiments'; 

/**
 * Generated class for the ServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesPage');
  }

  gotoBooking() {
    this.navCtrl.push(AppoimentsPage);
  }

}
