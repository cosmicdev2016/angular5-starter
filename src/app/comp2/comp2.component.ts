import { Component, OnInit } from '@angular/core';
import { ForObserableService } from '../for-obserable.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  message: string;

  constructor(private msg: ForObserableService) { }

  ngOnInit() {
    this.msg.currentMessage.subscribe(message => this.message = message);
  }

  newMessage() {
    this.msg.changeMessage("Msg from Two");
  }

}
