import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-restful',
  templateUrl: './restful.component.html',
  styleUrls: ['./restful.component.css']
})
export class RestfulComponent implements OnInit {

  user: User;
  users: any;

  constructor(public postService: PostsService) {
    this.user = new User();

    postService.listUsers()
      .subscribe(res => {
        this.users = res;
      });
  }

  ngOnInit() {
  }

  addUser() {
    console.log("adding user: " + this.user);
    this.postService.addUser(this.user)
      .subscribe(res => {
        this.users = res;
        //reset form
        this.user = new User();
      });
  }

  deleteUser(rowIndex) {
    console.log("deleting row: " + rowIndex);
    this.postService.deleteUser(rowIndex)
      .subscribe(res => {
        this.users = res;
      });
  }
}
