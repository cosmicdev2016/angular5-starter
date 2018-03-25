import { Component, OnInit } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  user: User;
  loginStatus: number;

  userList: any[];
  isUserTaken: boolean;

  constructor() {
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
   }

  ngOnInit() {
  }

  signUp(userForm) {
    console.log(userForm);
    // if (userForm.form.value.email == "admin@gmail.com" && userForm.form.value.password == "admin123")
    //   this.loginStatus = 1;
    // else
    //   this.loginStatus = 0;
    for (var i = 0; i < this.userList.length; i++) {
      if (this.userList[i].email === userForm.form.value.email) {
        this.loginStatus = 0;
        break;
      } else {
        this.loginStatus = 1;
      }
    }
  }

  validateUser(username) {
    console.log("validating user.." + username.value);

    for (var i = 0; i < this.userList.length; i++) {
      if (this.userList[i].username === username.value) {
        this.isUserTaken = true;
        break;
      } else {
        this.isUserTaken = false;
      }
    }
  }
}
