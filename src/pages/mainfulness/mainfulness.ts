import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AppoimentsPage } from '../appoiments/appoiments';

/**
 * Generated class for the MainfulnessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-mainfulness',
  templateUrl: 'mainfulness.html',
})
export class MainfulnessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainfulnessPage');
  }

  gotoBooking() {
    this.navCtrl.push(AppoimentsPage);
  }

}
