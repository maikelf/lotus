import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RecoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-recover',
  templateUrl: 'recover.html',
})
export class RecoverPage {

  public account:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.account = {email: ''};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecoverPage');
  }

  recoverPassword() {
    console.log(this.account);
  }

}
