import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, ToastController } from 'ionic-angular';

import { LocalstorageProvider } from '../../providers/localstorage/localstorage';
import { GeneralPage } from '../general/general';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public user: any;
  public registring: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private menu: MenuController,
    private toastCtrl: ToastController,
    private auth: AuthProvider,
    private storage: LocalstorageProvider,
    public localstorage: LocalstorageProvider
  ) {
    this.registring = false;
    this.user={name:'', email:'', phone:'', password:'', repeat_password:'', relationship: false, credential: ''};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  askTherapist() {
    this.toast('We require your certification number to ensure you are a registered therapist in good standing with your governing body', 'middle', 0, '', true)
  }

  register() {
    if (this.user.email != '' && this.user.password != '') {
      if(this.user.password === this.user.repeat_password) {
        this.auth.registerUserDrupal(this.user)
        .subscribe(
          r => {
            this.registring = true;
            this.auth.setProfileUserDrupal(this.user, r.uid)
              .subscribe(
                p => {
                  this.auth.loginUserDrupal(this.user.name, this.user.password)
                  .subscribe(
                    l => {
                      const session = {
                        login: true,
                        user: this.user.name,
                        createAt: new Date().getTime(),
                        uid: l.user.uid,
                        mail: l.user.mail,
                        data: l.user
                      };
                      this.registring = false;
                      this.localstorage.setData('session', JSON.stringify(session));
                      this.menu.swipeEnable(true);
                      this.storage.updateSessionAfterLogin(session);
                      this.navCtrl.push(GeneralPage);
                    },
                    err => {
                      this.registring = false;
                      this.toast('Authentication Fail. Please review email and password and try again', 'top', 300, '', '');
                    }
                  );
                }
              );
          },
          err => this.toast('Error !!!', 'top', 3000, '', '')
        );
      } else {
        this.toast('Passwords not match', 'top', 3000, '', '');
      }
    }
    else {
      this.toast('user and passwowrd fields are required', 'top', 3000, '', '');
    }
  }

  // register() {
  //   if (this.user.email != '' && this.user.password != '') {
  //     this.auth.registerUser(this.user.email, this.user.password)
  //     .then(r => {
  //       console.log(r);
  //       this.auth.loginUser(this.user.email, this.user.password)
  //       .then(res => {
  //         console.log('auth', res);
  //         this.lotus.setProfile(r.uid, this.user)
  //         // .then(p => console.log('profile', p))
  //         // .catch(err => this.toast('Error creating profile', 'top', 3000, '', ''));
  //       })
  //       .catch(err => this.toast('Error !!!', 'top', 3000, '', ''));
  //     })
  //     .catch(err => this.toast('Error !!!', 'top', 3000, '', ''));
  //   }
  //   else {
  //     this.toast('user and passwowrd fields are required', 'top', 3000, '', '');
  //   }
  // }

  toast(msg, pos, t, style, close) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: t,
      position: pos,
      cssClass: style,
      showCloseButton: close
    });

    toast.present();
  }

}
