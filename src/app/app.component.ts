import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { User } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dateText:string;
  buttonFlag:boolean;
  hobbiesFlag:boolean;
  hobbies: string[];
  hobbyButtonText:string;
  defaultHobbies: string[];
  authors: any;
  hideTable: boolean;

  email: string;
  password: string;
  
  user:User;
  // id:number;
  // name:string;
  // author:string;
  // price:number

  constructor(){
    this.dateText = 'Hover on blue button to see the date.';
    this.buttonFlag = false;
    this.hobbies = ['Reading','Music','Coding'];
    this.defaultHobbies = ['Reading','Music','Coding'];
    this.hobbiesFlag = true;
    this.hobbyButtonText = 'hide hobbies';
    this.authors = [
      {id: 1, name: "gaurav", auth:"new 1", price: 14},
      {id: 1, name: "rohit", auth:"new 2", price: 12},
      {id: 1, name: "pj", auth:"new 3", price: 13},
      {id: 1, name: "baba", auth:"new 4", price: 15}
    ];
    this.hideTable = true;
    
    this.user = new User();
  }

  buttonClick(){
    this.buttonFlag = true;
  }

  closeClick(){
    this.buttonFlag = false;
  }

  mouseOver(){
    this.dateText = new Date().toString();
  }

  mouseOut(){
    this.dateText = 'Hover on blue button to see the date';
  }

  addHobby(){
    this.hobbies.push('New Hobby');
    // this.hobbies.unshift('New Item');
  }
  
  resetHobby(){
    this.hobbies = ['Reading','Music','Coding'];
  }
  
  deleteHobby(i){
    this.hobbies.splice(i,1);
  }

  hobbyClick(){
    if(!this.hobbiesFlag){
      this.hobbiesFlag = true;
      this.hobbyButtonText = 'hide hobbies';
    }
    else{
      this.hobbiesFlag = false;
      this.hobbyButtonText = 'show hobbies';  
    }
  }

  showTable() {
    this.hideTable = !this.hideTable;
  }

  saveAuthors() {
    
    this.authors.push(this.user);

    // this.authors.push({id: this.id, name: this.name, auth:this.author, price: this.price});
    // this.id = undefined;
    // this.name = undefined;
    // this.author = undefined;
    // this.price = undefined;
  }
}