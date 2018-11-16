import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SigninPage } from '../signin/signin';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

  goToPage(route) {
    if (route === 'sign') {
        this.navCtrl.push(SigninPage);
      }
    else {
        this.navCtrl.push(RegisterPage);
      }  
  }

}
