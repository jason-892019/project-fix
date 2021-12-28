import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
    apiKey: "AIzaSyAjIGz0gQe4XJ9Sw-DneoQSTu5nIvyv9Bc",
    authDomain: "com668project-b54f4.firebaseapp.com",
    projectId: "com668project-b54f4",
    storageBucket: "com668project-b54f4.appspot.com",
    messagingSenderId: "280550848732",
    appId: "1:280550848732:web:419ad27725bb555a66dc19"
    }),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

