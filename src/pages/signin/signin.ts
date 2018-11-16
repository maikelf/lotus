import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, ToastController } from 'ionic-angular';

import { RecoverPage } from '../recover/recover';
import { BodylandingPage } from '../bodylanding/bodylanding';

import { LocalstorageProvider } from '../../providers/localstorage/localstorage';
import { LotusProvider } from '../../providers/lotus/lotus';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  public sign:any;
  public signing: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: LocalstorageProvider,
    private menu: MenuController,
    private toastCtrl: ToastController,
    public localstorage: LocalstorageProvider,
    public lotus: LotusProvider,
    public auth: AuthProvider
  ) {
    this.signing = false;
    this.sign = {
      user: '',
      password: ''
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  signIn() {
    console.log(this.sign.user, this.sign.password)
    this.signing = true;
    this.auth.loginUserDrupal(this.sign.user, this.sign.password)
      .subscribe(
        r => {
          console.log('aqui', this.signing, r);
          const session = {
            login: true,
            user: this.sign.user,
            createAt: new Date().getTime(),
            uid: r.user.uid,
            mail: r.user.mail,
            data: r.user
          };
          this.localstorage.setData('session', JSON.stringify(session));
          this.menu.swipeEnable(true);
          this.storage.updateSessionAfterLogin(session);
          this.navCtrl.push(BodylandingPage);
          this.signing = false;
        },
        err => {
          this.signing = false;
          console.log(err);
          this.toastErr('Authentication Fail. Please review email and password and try again');
        }
      )
  }

  toastErr(err) {
    let toast = this.toastCtrl.create({
      message: err,
      duration: 3000,
      position: 'top',
      cssClass: 'alert-err'
    });

    toast.present();
  }

  recoverPassword() {
    this.navCtrl.push(RecoverPage);
  }

}
