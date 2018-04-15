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
    return this.http.get('http://localhost:8090/')
      .map(res => res.json());
  }

  setLoginStatus(loginSuccess) {
    this.loginSuccess = loginSuccess;
  }

  logout() {
    this.loginSuccess = false;
  }

  /**
   * Rest services
   */
  listUsers() {
    return this.http.get('http://localhost:8081/listUsers')
      .map(res => res.json());
  }

  addUser(user) {
    return this.http.post('http://localhost:8081/adduser', user)
      .map(res => res.json());
  }

  deleteUser(rowIndex) {
    return this.http.delete('http://localhost:8081/deleteUser/' + rowIndex)
      .map(res => res.json());
  }

}
