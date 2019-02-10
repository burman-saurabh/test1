import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modcomp1Component } from './modcomp1/modcomp1.component';
import { Modcomp2Component } from './modcomp2/modcomp2.component';
import { Svc1Service } from '../svc1.service';
import { AppModule } from '../app.module';

@NgModule({
  declarations: [Modcomp1Component, Modcomp2Component],
  imports: [
    CommonModule
  ],
  exports: [
    Modcomp1Component,
    Modcomp2Component
  ],
  providers: []
})
export class Mod1Module { }
