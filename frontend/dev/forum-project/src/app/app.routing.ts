import { Routes, RouterModule } from "@angular/router";
import { QuestionCreateComponent } from "./forum/question-create/question-create.component";
import { QuestionDetailComponent } from "./forum/question-detail/question-detail.component";
import { ForumComponent } from "./forum/forum.component";
import { HomepageComponent } from "./home/homepage.component";

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
        path: 'forum/questions',
        component: ForumComponent
    },
    {
        path: 'forum/questions/:id', 
        component: QuestionDetailComponent 
    },
    {
        path: 'forum/questions/:id/edit', 
        component: QuestionCreateComponent 
    },
    {
        path: 'forum/questions/question-create', 
        component: QuestionCreateComponent
    }
];

export const routing = RouterModule.forRoot(APP_ROUTES);