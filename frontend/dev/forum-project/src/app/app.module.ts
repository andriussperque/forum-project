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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    HeaderComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    PageUnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    ForumModule,
    ReactiveFormsModule,
    HttpModule,
    Routing
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
