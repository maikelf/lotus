// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the LotusProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LotusProvider {

  constructor(public afDatabase:  AngularFireDatabase, public afAuth: AngularFireAuth ) {
    console.log('Hello LotusProvider Provider');
  }

  setProfile(uid, profile) {
    console.log('maikel');
    return this.afAuth.authState.subscribe(auth => {
      this.afDatabase.list(`profile/${auth.uid}`).push(profile)
      .then(r => console.log(r));
    });
    // return this.afDatabase.object(`profile/${uid}`).set(profile)
    //   .then(res => Promise.reject(res))
    //   .catch(err => Promise.reject(err));
  }

}
