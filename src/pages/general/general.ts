import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { VideoplayerPage } from '../videoplayer/videoplayer';

import { AppoimentsPage } from '../appoiments/appoiments';

import cats from '../categories';

/**
 * Generated class for the GeneralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-general',
  templateUrl: 'general.html',
})
export class GeneralPage {

  public form: any =  {
    general: '',
    subcategory: '',
    exercises: '',
  }

  public gi_data: any;

  public nodes: Array<any>;
  public filteredNodes: Array<any>;
  public subcategory: Array<any>;
  public exercisesNodes: Array<any>;
  public filterStatus: any;

  public video: string;

  public cat = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.gi_data = cats.general_imbalances;
    this.nodes = this.gi_data.exercises;
    
    this.cat=this.navParams.get('cat');
    this.form.general = this.cat;
    this.filterStatus = {
      subcategory: false,
      exercises: false,
    }
    this.gi_data = cats.general_imbalances;
    this.filteredNodes = [];
    this.exercisesNodes = [];
    this.video = '';

    this.filterStatus.subcategory = true;
    this.filterStatus.exercises = false;
    this.subcategory = [];
    this.subcategory = this.gi_data.subcategory.filter(e => e.body === this.form.general);
    this.filterStatus.subcategory = true;
    this.filteredNodes = this.nodes.filter(e => e.body === this.form.general);
    this.exercisesNodes = this.filteredNodes
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneralPage');
  }

  changeGeneral() {
    this.video = '';
    this.exercisesNodes = [];
    this.filteredNodes = [];
    this.filterStatus.subcategory = true;
    this.filterStatus.exercises = false;
    this.subcategory = [];
    this.subcategory = this.gi_data.subcategory.filter(e => e.body === this.form.general);
    this.filterStatus.subcategory = true;
    this.filteredNodes = this.nodes.filter(e => e.body === this.form.general);
    this.exercisesNodes = this.filteredNodes;
  }

  changeSubcategory() {
    this.video = '';
    this.filterStatus.exercises = true;
    if(this.filteredNodes.length > 0) {
      this.exercisesNodes = this.filteredNodes.filter(e => e.subcategory === this.form.subcategory);
      console.log(this.exercisesNodes);
    }
  }

  selectExercises() {
    const video = this.form.exercises.split('___');
    this.navCtrl.push(VideoplayerPage, {
      v: video[0],
      t: video[1]
    });
  }

  gotoBooking() {
    this.navCtrl.push(AppoimentsPage);
  }
}
