import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Subject } from 'rxjs/Subject';
/*
  Generated class for the LocalstorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalstorageProvider {

  private session = new Subject<any>();
  currentSession$ = this.session.asObservable();

  constructor(private localStorage: Storage) {
  }

  ready() {
    return this.localStorage.ready();
  }

  setData(key, value) {
    this.localStorage.set(key, value);
  }

  getData(key) {
    return this.localStorage.get(key);
  }

  removeData(key) {
    return this.localStorage.remove(key);
  }
  
  updateSessionAfterLogin(s) {
    this.session.next(s);
  }
}
