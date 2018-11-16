import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { Platform } from 'ionic-angular';

import 'rxjs/add/operator/map';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  public urlBase: string;
  public headers: Headers;

  constructor(private afAuth :  AngularFireAuth, public http: Http, platform: Platform) {
    if(platform.is('mobile')) {
      this.urlBase = 'http://thehealinglotus.lesterdesign.ca/';
    }else{
      this.urlBase = '/lotus';
    }

    this.headers = new Headers();
    this.headers.append('Accept', 'application/json');
  }

  registerUser(email, password){
    return this.afAuth.auth.createUserWithEmailAndPassword( email, password)
    .then(res => Promise.resolve(res))
    .catch(err => Promise.reject(err))
  }

  loginUser(email, password){
   return this.afAuth.auth.signInWithEmailAndPassword(email, password)
     .then(user => Promise.resolve(user))
     .catch(err => Promise.reject(err))
  }

  loginUserDrupal(userName, userPassword) {
    let userDrupal: any = {
      username: userName,
      password: userPassword
    };
    return this.http.post(this.urlBase + '/lotus/user/login.json' , userDrupal, { headers: this.headers }).map( res => res.json());
  }

  registerUserDrupal(user) {
    let userDrupal: any = {
      name: user.name,
      mail: user.email,
      pass: user.password,
      pass2: user.password
    }
    return this.http.post(this.urlBase + '/lotus/user.json' , userDrupal, { headers: this.headers }).map( res => res.json());
  }

  setProfileUserDrupal(user, id) {
    let profile: any = {
      type:"profile",
      title: user.name + '(' + user.email + ')',
      field_user_id: {
        und : [
          {
            value: id
          }
        ]
      },
      field_mail: {
        und: [
          {
            value: user.email
          }
        ]
      },
      field_istherapist: {
        und: [
          {
            value: (user.relationship) ? 1 : 0
          }
        ]
      },
      field_certificate:{
        und: [
          {
            value: ''
          }
        ]
      },
      field_phone:{
        und: [
          {
            value: user.phone
          }
        ]
      }
    }
    return this.http.post(this.urlBase + '/lotus/node.json' , profile, { headers: this.headers }).map( res => res.json());
  }

  getNodes() {
    return this.http.get(this.urlBase + '/lotus/node.json', { headers: this.headers }).map( res => res.json());
  }

  getNode(nid) {
    return this.http.get(this.urlBase + '/lotus/node/' + nid + '.json', { headers: this.headers }).map( res => res.json());
  }

  get Session(){
    return this.afAuth.authState;
  }
}
