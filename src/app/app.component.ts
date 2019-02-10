import { Component } from '@angular/core';
import { Svc1Service } from './svc1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private svc: Svc1Service){
    console.log('from appcomp');
    svc.getInfo();
  }
}
