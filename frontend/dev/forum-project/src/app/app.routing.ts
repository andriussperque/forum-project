import { Routes, RouterModule } from "@angular/router";
import { QuestionCreateComponent } from "./forum/question-create/question-create.component";
import { QuestionDetailComponent } from "./forum/question-detail/question-detail.component";
import { ForumComponent } from "./forum/forum.component";
import { HomepageComponent } from "./home/homepage.component";
import { QuestionListComponent } from "./forum/question-list/question-list.component";

const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path:'home',
        component: HomepageComponent
    },
    {
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
                component: QuestionCreateComponent 
            },
            {
                path: 'questions/question-create', 
                component: QuestionCreateComponent
            }
        ]
    },
    
];

export const Routing = RouterModule.forRoot(APP_ROUTES);