import { NgModule } from '@angular/core';

import { ForumComponent } from './forum.component';
import { QuestionListComponent } from './question-list/question-list.component';

@NgModule({
    declarations: [
      QuestionListComponent,
      ForumComponent
    ],
    exports: [
      ForumComponent
    ],
    imports: [
    ],
    providers: []
  })
  export class ForumModule { }