import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
// import { CommonModuel } from '@angular/common';

import { Routing } from "../app.routing";
import { ForumComponent } from './forum.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionCreateComponent } from './question-create/question-create.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { ForumService } from './forum.service';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';


@NgModule({
    declarations: [
      QuestionListComponent,
      ForumComponent,
      QuestionCreateComponent,
      QuestionDetailComponent
    ],
    exports: [
      ForumComponent
    ],
    imports: [
      BrowserModule,
      ReactiveFormsModule,
      Routing
    ],
    providers: [
      ForumService, 
      AuthService,
      DataStorageService
    ]
  })
  export class ForumModule { }