import { Component, OnInit } from '@angular/core';
import { Svc1Service } from '../../svc1.service';

@Component({
  selector: 'app-modcomp2',
  templateUrl: './modcomp2.component.html',
  styleUrls: ['./modcomp2.component.css']
})
export class Modcomp2Component implements OnInit {

  constructor(private svc: Svc1Service) {
    console.log('from modcomp2');
    svc.getInfo();
  }

  ngOnInit() {
  }

}
