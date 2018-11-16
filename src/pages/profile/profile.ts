import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LocalstorageProvider } from '../../providers/localstorage/localstorage';

import { AppoimentsPage } from '../appoiments/appoiments';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public profile: any;
  public loading: boolean;
  public user: string;
  public mail: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public localStorage: LocalstorageProvider
  ) {
    this.getProfile();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  getProfile() {
    this.loading = false;
    this.localStorage.getData('session')
      .then(r => {
        this.profile = JSON.parse(r);
        this.user = this.profile.user;
        this.mail = this.profile.mail;
      });
  }

  gotoBooking() {
    this.navCtrl.push(AppoimentsPage);
  }

}
