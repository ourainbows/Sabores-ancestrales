import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ClipboardModule } from 'ngx-clipboard';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    ClipboardModule,
    FormsModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
