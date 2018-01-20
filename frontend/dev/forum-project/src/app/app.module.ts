import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ForumModule } from './forum/forum.module';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { routing } from "./app.routing";
import { HomepageComponent } from './home/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    HeaderComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    ForumModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
