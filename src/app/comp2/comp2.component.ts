import { Component, OnInit } from '@angular/core';
import { Svc1Service } from '../svc1.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor( private svc: Svc1Service) {
    console.log('form comp2');
    svc.getInfo();
  }

  ngOnInit() {
  }

}
