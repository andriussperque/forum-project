import { Routes, RouterModule } from "@angular/router";
import { QuestionCreateComponent } from "./project/forum/question/question-create/question-create.component";
import { QuestionDetailComponent } from "./project/forum/question/question-detail/question-detail.component";
import { ForumComponent } from "./project/forum/forum.component";
import { HomepageComponent } from "./common/home/homepage.component";
import { QuestionListComponent } from "./project/forum/question/question-list.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./login/signup.component";
import { ContactComponent } from "./common/contact/contact.component";
import { AboutComponent } from "./common/about/about.component";
import { PageNotFoundComponent } from "./common/errors/page-not-found.component";
import { SigninAuthComponent } from "./auth/signin/signin-auth.component";
import { SignupAuthComponent } from "./auth/signup/signup-auth.component";
import { AuthGuard } from "./auth/auth-guard.service";
import { NgModule } from "@angular/core";

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
        path:'login',
        component: LoginComponent
    },
    {
        path:'signup',
        component: SignupComponent
    },
    {
        path:'signin-auth',
        component: SigninAuthComponent
    },
    {
        path:'signup-auth',
        component: SignupAuthComponent
    },
    {
        path:'contact',
        component: ContactComponent
    },
    {
        path:'about',
        component: AboutComponent
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
                component: QuestionCreateComponent,
                canActivate: [AuthGuard] 
            },
            {
                path: 'questions/question-create', 
                component: QuestionCreateComponent,
                canActivate: [AuthGuard]
            }
        ]
    },
    {
        path: 'page-not-found',
        component: PageNotFoundComponent
    },
    {
        path: '**',
        redirectTo: '/page-not-found'
    }
];

@NgModule ({
    imports: [
        RouterModule.forRoot(APP_ROUTES)
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule {
}