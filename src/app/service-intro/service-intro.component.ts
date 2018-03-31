import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-service-intro',
  templateUrl: './service-intro.component.html',
  styleUrls: ['./service-intro.component.css']
})
export class ServiceIntroComponent implements OnInit {

  todos: any;

  constructor(public postService: PostsService) {
    postService.getPosts()
      .subscribe(res => {
        this.todos = res;
        console.log(this.todos);
      });
  }

  ngOnInit() {
  }

}
