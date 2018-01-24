import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ForumModule } from './forum/forum.module';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { Routing } from "./app.routing";
import { HomepageComponent } from './home/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';
import { HttpModule } from '@angular/http';
import { PageNotFoundComponent } from './errors/page-not-found.component';
import { PageUnauthorizedComponent } from './errors/page-unauthorized.component';
import { FaqComponent } from './faq/faq.component';
import { AuthService } from './auth/auth.service';
import { SigninAuthComponent } from './auth/signin/signin-auth.component';
import { SignupAuthComponent } from './auth/signup/signup-auth.component';
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
    Routing
  ],
  providers: [LoginService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
