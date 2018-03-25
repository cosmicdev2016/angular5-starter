import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  posts: any;
  todos: any;

  constructor(public http: Http) {
    /* this.http.get('http://localhost:8089/')
      .map(res => res.json())
      .subscribe(res => {
        this.posts = res;
        console.log(this.posts);
      }); */
      //console.log(this.posts);

      this.http.get('http://localhost:8089/')
      .map(res => res.json())
      .subscribe(res => {
        this.todos = res;
        console.log(this.todos);
      });
  }

  ngOnInit() {
  }

}
