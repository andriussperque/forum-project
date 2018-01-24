import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ForumModule } from './project/forum/forum.module';
import { FooterComponent } from './common/footer/footer.component';
import { MenuComponent } from './common/menu/menu.component';
import { HeaderComponent } from './common/header/header.component';
import { AppRoutingModule } from "./app.routing.module";
import { HomepageComponent } from './common/home/homepage.component';
import { LoginComponent } from './auth/manual/login.component';
import { SignupComponent } from './auth/manual/signup.component';
import { AboutComponent } from './common/about/about.component';
import { ContactComponent } from './common/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './auth/manual/login.service';
import { HttpModule } from '@angular/http';
import { PageNotFoundComponent } from './common/errors/page-not-found.component';
import { PageUnauthorizedComponent } from './common/errors/page-unauthorized.component';
import { FaqComponent } from './common/faq/faq.component';
import { AuthService } from './auth/auth.service';
import { SigninAuthComponent } from './auth/firebase/signin/signin-auth.component';
import { SignupAuthComponent } from './auth/firebase/signup/signup-auth.component';
import { AuthGuard } from './auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    HeaderComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    SigninAuthComponent,
    SignupAuthComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    PageUnauthorizedComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    ForumModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [LoginService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
