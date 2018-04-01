import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  userName: string;

  userObject: any;

  @Output()
  emitFromChild: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  emitFromChild2: EventEmitter<Object> = new EventEmitter<Object>();

  constructor() { }

  ngOnInit() {
  }

  changeParam() {
    this.userName = "changed param";
    this.emitFromChild.emit(this.userName);
  }

  emitObject() {
    this.userObject = [
      { name: "gaurav", email: "hello@gmail.com" },
      { name: "sagar", email: "sagar@gmail.com" }
    ];
    this.emitFromChild2.emit(this.userObject);
  }

}
