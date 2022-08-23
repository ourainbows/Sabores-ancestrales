import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepsRoutingModule } from './steps-routing.module';
import { StepsPageComponent } from './page/steps-page/steps-page.component';

import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

@NgModule({
  declarations: [
    StepsPageComponent
  ],
  imports: [
    CommonModule,
    StepsRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDN5pIymvx7y8BmJWH456oohyqqlCXOlKs',
      authDomain: 'saboresancestrales-56030.firebaseapp.com',
      projectId: 'saboresancestrales-56030',
      storageBucket: 'saboresancestrales-56030.appspot.com',
      messagingSenderId: '240351398364',
      appId: '1:240351398364:web:11f63e50e93ec5387ea719',
    }),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ]
})
export class StepsModule { }
