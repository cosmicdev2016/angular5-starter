import { Component, OnInit } from '@angular/core';
import { ForObserableService } from '../for-obserable.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  message:string;
  sub:any;

  constructor(private msg:ForObserableService) {
    
  }

  ngOnInit() {
   this.sub = this.msg.currentMessage.subscribe(message => this.message = message);    
  }

  newMessage() {
    this.msg.changeMessage("Msg from One");
  }

  stopReceiving(){
    this.sub.unsubscribe();
  }

}
