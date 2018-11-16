import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { VideolistPage } from '../videolist/videolist';

import { AppoimentsPage } from '../appoiments/appoiments';

import cats from '../categories';

@Component({
  selector: 'page-stretch',
  templateUrl: 'stretch.html',
})
export class StretchPage {

  public op: string;
  public bodyPart: Array<any>;
  public anatomySelect: Array<any>;
  public form: any =  {
    body: '',
    anatomy: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.op = 'body';
    this.bodyPart = cats.stretch.body;
    this.anatomySelect = cats.stretch.anatomy;
    this.form.body = '';
    this.form.body = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StretchPage');
  }

  changeBodySelect() {
    this.navCtrl.push(VideolistPage, {
      origin: 'stretch',
      type: 'body',
      param: this.form.body
    });
  }

  changeAnatomySelect() {
    this.navCtrl.push(VideolistPage, {
      origin: 'stretch',
      type: 'anatomy',
      param: this.form.anatomy
    });
  }

  gotoBooking() {
    this.navCtrl.push(AppoimentsPage);
  }

}
