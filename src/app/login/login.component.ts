import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  loginStatus: number;

  userList: any[];
  isUserTaken: boolean;
  loginSuccess: boolean;

  constructor(public postService: PostsService, public r: Router) { 
    this.user = new User();
    this.loginStatus = -1;

    this.userList = [
      {
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz"
      },
      {
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
      },
      {
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
      },
      {
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
      },
      {
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
      }
    ];

    this.isUserTaken = false;
    this.loginSuccess = false;
  }

  ngOnInit(){
    
  }

  signUp(userForm) {
    
  }

  validateUser(username) {
    
  }

  getLogin() {
    this.postService.getLogin();
    this.r.navigateByUrl("/");
  }
}
