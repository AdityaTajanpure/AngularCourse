import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tutorial1Component } from './Tutorials/tutorial1/tutorial1.component';
import { Routes } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    Tutorial1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
