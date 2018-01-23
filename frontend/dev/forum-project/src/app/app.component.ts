import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  title = "Forum";

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDONlL7bb-pA9ETTkDXIurH2Wcm88AmiEU",
      authDomain: "forum-project-5c5e2.firebaseapp.com"
    });
  }
}
