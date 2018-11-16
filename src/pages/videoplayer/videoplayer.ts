import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

import { AppoimentsPage } from '../appoiments/appoiments';

/**
 * Generated class for the VideoplayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-videoplayer',
  templateUrl: 'videoplayer.html',
})
export class VideoplayerPage {

  public video: string;
  public title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ds: DomSanitizer) {
    this.video = this.navParams.get('v');
    this.title = this.navParams.get('t');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoplayerPage');
  }

  sanitizeURL(video) {
    return this.ds.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/' + video);
  }

  gotoBooking() {
    this.navCtrl.push(AppoimentsPage);
  }

}
