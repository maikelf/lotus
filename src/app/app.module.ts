import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { EmbedVideo } from 'ngx-embed-video';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LandingPage } from '../pages/landing/landing';
import { SigninPage } from '../pages/signin/signin';
import { RegisterPage } from '../pages/register/register';
import { RecoverPage } from '../pages/recover/recover';

import { ProfilePage } from '../pages/profile/profile';
import { AppoimentsPage } from '../pages/appoiments/appoiments';
import { BodylandingPage } from '../pages/bodylanding/bodylanding';
import { ContactPage } from '../pages/contact/contact';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LocalstorageProvider } from '../providers/localstorage/localstorage';
import { LotusProvider } from '../providers/lotus/lotus';
import { AuthProvider } from '../providers/auth/auth';

// menu 2
import { GeneralPage } from '../pages/general/general';
import { StretchPage } from '../pages/stretch/stretch';
import { StrengthenPage } from '../pages/strengthen/strengthen';
import { ManualPage } from '../pages/manual/manual';
import { MainfulnessPage } from '../pages/mainfulness/mainfulness';
import { NotesPage } from '../pages/notes/notes';

// menu3
import { AboutPage } from '../pages/about/about';
import { ServicesPage } from '../pages/services/services';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { VideolistPage } from '../pages/videolist/videolist';
import { VideoplayerPage } from '../pages/videoplayer/videoplayer';

export const firebaseConfig = {
  apiKey: "AIzaSyDyPESBrS0MkGe_INknClCQhN8omtBoNtc",
  authDomain: "the-healing-lotus.firebaseapp.com",
  databaseURL: "https://your-domain-name.firebaseio.com",
  storageBucket: "the-healing-lotus.appspot.com",
  messagingSenderId: '105071062205'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LandingPage,
    SigninPage,
    RegisterPage,
    AppoimentsPage,
    ProfilePage,
    BodylandingPage,
    RecoverPage,
    ContactPage,
    AboutPage,
    ServicesPage,
    GeneralPage,
    StretchPage,
    StrengthenPage,
    MainfulnessPage,
    ManualPage,
    NotesPage,
    VideolistPage,
    VideoplayerPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    EmbedVideo.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LandingPage,
    SigninPage,
    RegisterPage,
    AppoimentsPage,
    ProfilePage,
    BodylandingPage,
    RecoverPage,
    ContactPage,
    AboutPage,
    ServicesPage,
    GeneralPage,
    StretchPage,
    StrengthenPage,
    MainfulnessPage,
    ManualPage,
    NotesPage,
    VideolistPage,
    VideoplayerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalstorageProvider,
    LotusProvider,
    AuthProvider
  ]
})
export class AppModule {}
