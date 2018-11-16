import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

import { AppoimentsPage } from '../appoiments/appoiments';

/**
 * Generated class for the NotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public ds: DomSanitizer) {
 
  }

  ionViewDidLoad() {
  }

  sanitizeText(text) {
    return this.ds.bypassSecurityTrustHtml(text);
  }

  gotoBooking() {
    this.navCtrl.push(AppoimentsPage);
  }
}
