import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { VideolistPage } from '../videolist/videolist';

import { AppoimentsPage } from '../appoiments/appoiments';

import cats from '../categories';

/**
 * Generated class for the ManualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-manual',
  templateUrl: 'manual.html',
})
export class ManualPage {

  public op: string;
  public bodyPart: Array<any>;
  public anatomySelect: Array<any>;
  public form: any =  {
    body: '',
    anatomy: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.op = 'body';
    this.bodyPart = cats.manual.body;
    this.anatomySelect = cats.stretch.anatomy;
    this.form.body = '';
    this.form.body = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManualPage');
  }

  changeBodySelect() {
    this.navCtrl.push(VideolistPage, {
      origin: 'manual',
      type: 'body',
      param: this.form.body
    });
  }

  changeAnatomySelect() {
    this.navCtrl.push(VideolistPage, {
      origin: 'manual',
      type: 'anatomy',
      param: this.form.anatomy
    });
  }

  gotoBooking() {
    this.navCtrl.push(AppoimentsPage);
  }


}
