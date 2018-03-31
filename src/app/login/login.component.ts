import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';
import { User } from './User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  loginStatus: number;

  constructor(public postService: PostsService, public r: Router) {
    console.log("inside login constructor");
    this.user = new User();
    this.loginStatus = -1;
  }

  ngOnInit() {

  }

  getLogin(userForm) {
    console.log(this.user);
    this.postService.getLogin()
      .subscribe(res => {
        var userDetails = res;
        console.log(userDetails);
        console.log(userForm.form.value.username);

        for (var i = 0; i < userDetails.length; i++) {
          if (userDetails[i].username === userForm.form.value.username
            && userDetails[i].passwd === userForm.form.value.password) {

            this.loginStatus = 1;
            break;
          } else {
            this.loginStatus = 0;
          }
        }

        if (this.loginStatus == 1) {
          this.postService.setLoginStatus(true)
          console.log("service: login success...");
          this.r.navigateByUrl("/");
        }
      });
  }
}
