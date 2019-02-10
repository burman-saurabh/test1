import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Mod1Module } from './mod1/mod1.module';
import { Svc1Service } from './svc1.service';
import { HttpClient } from 'selenium-webdriver/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Mod1Module,
    HttpClientModule
  ],
  exports: [PagenotfoundComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
