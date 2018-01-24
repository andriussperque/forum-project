import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
// import { CommonModuel } from '@angular/common';

import { AppRoutingModule } from "../../app.routing.module";
import { ForumComponent } from './forum.component';
import { QuestionListComponent } from './question/question-list.component';
import { QuestionCreateComponent } from './question/question-create/question-create.component';
import { QuestionDetailComponent } from './question/question-detail/question-detail.component';
import { ForumService } from './forum.service';
import { AuthService } from '../../auth/auth.service';
import { DataStorageService } from '../../shared/data-storage.service';


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
      AppRoutingModule
    ],
    providers: [
      ForumService, 
      AuthService,
      DataStorageService
    ]
  })
  export class ForumModule { }