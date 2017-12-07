import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { textWrap } from './service/textwrap/textwrap';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing
   ],
  providers: [
    textWrap
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
