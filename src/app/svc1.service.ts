import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Svc1Service {
  constructor(private http: HttpClient) { }

  getInfo(){
    console.log('from svc1');
  }
  getUser(){
    return this.http.get("https://api.github.com/users/VamsiUCSS");
  }
  getUsers(){
    return this.http.get("https://api.github.com/users");
  }

}
