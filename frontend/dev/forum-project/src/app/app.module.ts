import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ForumComponent } from './forum/forum.component';
import { SpecComponent } from './footer/spec.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './menu/header.component';


@NgModule({
  declarations: [
    AppComponent,
    ForumComponent,
    SpecComponent,
    MenuComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
