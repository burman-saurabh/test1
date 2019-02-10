import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Modcomp1Component } from './mod1/modcomp1/modcomp1.component';
import { Modcomp2Component } from './mod1/modcomp2/modcomp2.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Route[] = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: Comp1Component},
  {path: 'home/:id', component: Comp1Component},
  {
    path: 'settings',
    component: Comp2Component,
    children: [
      {path: '', redirectTo: 'profile', pathMatch: 'full'},
      {path: 'profile', component: Modcomp1Component},
      {path: 'contact', component: Modcomp2Component},
      {path: '**', redirectTo: 'profile', pathMatch: 'full'}
    ]
  },
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
