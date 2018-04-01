import { Component, OnInit } from '@angular/core';
import { ChildComponent } from './../child/child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  userName: string;
  userlist: any;

  constructor() {
    this.userName = 'initial param';
    this.userlist = [];
  }

  onChildChange(event) {
    this.userName = event;
  }

  onChildObjChange(event) {
    console.log(event);
    this.userlist = event;
  }

  onReset() {
    this.userlist = [];
  }

  ngOnInit() {
  }

}
