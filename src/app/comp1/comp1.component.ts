import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Svc1Service } from '../svc1.service';
import { Observable } from 'rxjs';
import { combineLatest } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, throttle } from 'rxjs/operators';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit { 
  response: any;
  users: any;

  constructor(private svc: Svc1Service, private http: HttpClient,private route: ActivatedRoute) {
    console.log('form comp1');
    svc.getInfo();
    svc.getUser().subscribe((response)=>{
      this.response = response;
      console.log(this.response);
    },
    error =>{
        console.log(error.message);
        console.log(this.response);
      });
   }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        console.log(params.get('id'));
      });

    this.route.queryParamMap
    .subscribe(params => {
      console.log(params.get('page'));
    });

    console.log('inside oninit');
  
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .pipe(switchMap(combined =>{
      let id = combined[0].get('id');
      let page = combined[1].get('page');
      console.log(id);
      console.log(page);

      return this.svc.getUsers();
      
    }))
    .subscribe(users => {
      this.users = users;
      console.log(users);
    });



    // .subscribe(combined => {
    //   let id = combined[0].get('id');
    //   let page = combined[1].get('page');
    // })

  }

}
