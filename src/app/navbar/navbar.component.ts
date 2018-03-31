import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public postService: PostsService, public r: Router) { }

  ngOnInit(){
    console.log('navbar init');
    console.log("navbar: redirecting to login page...");
    this.r.navigateByUrl("/login");
  }

  logout() {
    this.postService.logout();
    this.r.navigateByUrl("/login");
  }

}
