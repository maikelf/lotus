import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { VideolistPage } from '../videolist/videolist';

import { AppoimentsPage } from '../appoiments/appoiments';

import cats from '../categories';

/**
 * Generated class for the StrengthenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-strengthen',
  templateUrl: 'strengthen.html',
})
export class StrengthenPage {

  public op: string;
  public bodyPart: Array<any>;
  public anatomySelect: Array<any>;
  public form: any =  {
    body: '',
    anatomy: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.op = 'body';
    this.bodyPart = cats.strength.body;
    this.anatomySelect = cats.stretch.anatomy;
    this.form.body = '';
    this.form.body = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StrenthengPage');
  }

  changeBodySelect() {
    this.navCtrl.push(VideolistPage, {
      origin: 'strength',
      type: 'body',
      param: this.form.body
    });
  }

  changeAnatomySelect() {
    this.navCtrl.push(VideolistPage, {
      origin: 'strength',
      type: 'anatomy',
      param: this.form.anatomy
    });
  }

  gotoBooking() {
    this.navCtrl.push(AppoimentsPage);
  }  
  

}
