import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';

import { VideoplayerPage } from '../videoplayer/videoplayer';

import cats from '../categories';

import { AppoimentsPage } from '../appoiments/appoiments';

/**
 * Generated class for the VideolistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-videolist',
  templateUrl: 'videolist.html',
})
export class VideolistPage {

  public data: any;
  public videos: Array<any>;
  public form: any =  {
    body: '',
    anatomy: ''
  };
  public bodyPart: Array<any>;
  public anatomySelect: Array<any>;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = {};
    this.videos = [];
    this.data.origin = this.navParams.get('origin');
    this.data.type = this.navParams.get('type');
    this.data.param = this.navParams.get('param');
    this.bodyPart = cats[this.data.origin].body;
    this.anatomySelect = cats[this.data.origin].anatomy;
    this.form[this.data.type] = this.data.param;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideolistPage');
    this.loadContent();
  }

  loadContent() {
    this.videos = cats[this.data.origin].exercises.filter(e => (e.session === this.data.type && e[this.data.type] === this.data.param));
  }

  changeSelect(op) {
    this.videos = cats[this.data.origin].exercises.filter(e => (e.session === this.data.type && e[this.data.type] === this.form[op]));
  }

  viewVideo(video, title) {
    this.navCtrl.push(VideoplayerPage, {
      v: video,
      t: title
    });
  }

  gotoBooking() {
    this.navCtrl.push(AppoimentsPage);
  }
}
