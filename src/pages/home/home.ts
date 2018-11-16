import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LandingPage } from '../landing/landing';
import { BodylandingPage } from '../bodylanding/bodylanding';

import { LocalstorageProvider } from '../../providers/localstorage/localstorage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public localStorage: LocalstorageProvider) {
    console.log(this.localStorage.ready()); 

    this.localStorage.getData('session')
        .then((r) => {
          if (r == null || r == undefined) {
            setTimeout(() => this.navCtrl.push(LandingPage), 1000);
          } else {
            this.navCtrl.push(BodylandingPage);
          }
        });
  }

}
