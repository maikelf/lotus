import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LandingPage } from '../pages/landing/landing';
import { ProfilePage } from '../pages/profile/profile';
import { AppoimentsPage } from '../pages/appoiments/appoiments';
import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';
import { ServicesPage } from '../pages/services/services';
import { GeneralPage } from '../pages/general/general';
import { StretchPage } from '../pages/stretch/stretch';
import { StrengthenPage } from '../pages/strengthen/strengthen';
import { ManualPage } from '../pages/manual/manual';
import { MainfulnessPage } from '../pages/mainfulness/mainfulness';
import { NotesPage } from '../pages/notes/notes';
import { VideolistPage } from '../pages/videolist/videolist';

import { BodylandingPage } from '../pages/bodylanding/bodylanding';

import { LocalstorageProvider } from '../providers/localstorage/localstorage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, sideMenu:boolean, subMenu: number}>;
  session: any;
  initial: string;

  constructor(public platform: Platform, public menu: MenuController, public statusBar: StatusBar, public splashScreen: SplashScreen, public localStorage: LocalstorageProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, sideMenu: false, subMenu: 1 },
      { title: 'Profile', component: ProfilePage, sideMenu: true, subMenu: 1 },
      { title: 'Appointments', component: AppoimentsPage, sideMenu: true, subMenu: 1 },
      { title: 'Body', component: BodylandingPage, sideMenu: true, subMenu: 0 },
      { title: 'Contact Us', component: ContactPage, sideMenu: true, subMenu: 0 },
      { title: 'General Imbalances', component: GeneralPage, sideMenu: true, subMenu: 2 },
      { title: 'Stretch', component: StretchPage, sideMenu: true, subMenu: 2 },
      { title: 'Strengthen', component: StrengthenPage, sideMenu: true, subMenu: 2 },
      { title: 'Manual Techniques', component: ManualPage, sideMenu: true, subMenu: 2 },
      { title: 'Mindfulness', component: MainfulnessPage, sideMenu: true, subMenu: 2},
      { title: 'Lotus Notes', component: NotesPage, sideMenu: true, subMenu: 2 },
      { title: 'About', component: AboutPage, sideMenu: true, subMenu: 3 },
      { title: 'Service Area', component: ServicesPage, sideMenu: true, subMenu: 3},
      { title: '', component: VideolistPage, sideMenu: false, subMenu: 1}
    ];

    this.session = {};
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
      this.localStorage.currentSession$.subscribe(s => {
        this.session = s;
        this.initial = s.user.substr(0,1);
      });

      this.localStorage.getData('session')
      .then((r) => {
          if (r != null && r == undefined) {
              this.menu.swipeEnable(true);
              this.session = r;
              this.initial = r.user.substr(0,1);
          }
      })
      .catch();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.localStorage.removeData('session')
    .then((r) => {
      this.menu.swipeEnable(false);
      this.nav.setRoot(LandingPage);
    })
    .catch();
  }
}
