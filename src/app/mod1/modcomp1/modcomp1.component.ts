import { Component, OnInit } from '@angular/core';
import { Svc1Service } from '../../svc1.service';

@Component({
  selector: 'app-modcomp1',
  templateUrl: './modcomp1.component.html',
  styleUrls: ['./modcomp1.component.css']
})
export class Modcomp1Component implements OnInit {

  constructor(private svc: Svc1Service){
    console.log('from modcomp1');
    svc.getInfo();
  }

  ngOnInit() {
  }

}
