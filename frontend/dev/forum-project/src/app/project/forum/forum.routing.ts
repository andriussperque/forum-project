import { ForumComponent } from "./forum.component";
import { QuestionListComponent } from "./question/question-list.component";
import { QuestionDetailComponent } from "./question/question-detail/question-detail.component";
import { QuestionCreateComponent } from "./question/question-create/question-create.component";
import { AuthGuard } from "../../auth/auth-guard.service";

// Try to fix it later

export class ForumRoutingComponent {

    public ForumRouting = [{
        path: 'forum',
        component: ForumComponent,
        children: [
            {
                path: 'questions', 
                component: QuestionListComponent
            },
            {
                path: 'questions/:id', 
                component: QuestionDetailComponent 
            },
            {
                path: 'questions/:id/detail', 
                component: QuestionDetailComponent 
            },
            {
                path: 'questions/:id/edit', 
                component: QuestionCreateComponent,
                canActivate: [AuthGuard] 
            },
            {
                path: 'questions/question-create', 
                component: QuestionCreateComponent,
                canActivate: [AuthGuard]
            }
        ]
    }]
}