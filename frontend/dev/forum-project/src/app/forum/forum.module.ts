import { NgModule } from '@angular/core';

import { ForumComponent } from './forum.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionCreateComponent } from './question-create/question-create.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';

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
    ],
    providers: []
  })
  export class ForumModule { }