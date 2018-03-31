import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  public loginSuccess: boolean;

  constructor(public http: Http) {
    console.log("init service...");
  }

  getPosts() {
    return this.http.get('http://localhost:8089/')
      .map(res => res.json());
  }

  getLogin() {
    this.loginSuccess = true;
    console.log("service: login success...");
  }

  logout() {
    this.loginSuccess = false;
  }

}
