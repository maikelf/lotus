import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { GeneralPage } from '../general/general';

/**
 * Generated class for the BodylandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bodylanding',
  templateUrl: 'bodylanding.html',
  styleUrls: ['assets/body/illustration-style.css']
})
export class BodylandingPage {

  public imgActive: string;
  public width: any;
  public height: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.imgActive = 'male';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BodylandingPage');
  }

  goTo(param) {
    console.log(param);
    this.navCtrl.push(GeneralPage, {
      cat: param
    });
  }

}
