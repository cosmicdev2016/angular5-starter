import { Component, OnInit } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

  texts: any[];
  data: any[];
  textFlag: boolean;

  categories: any[];
  catgSelected: string;
  selectedCatgIndex: number;
  showSubCatg: boolean

  constructor() {
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

    this.texts = [];
    this.data = [];
    this.textFlag = false;

    this.categories = [
      {
        "cat_name": "Cat-1",
        "sub_catg": ["item_1_1", "item_1_2", "item_1_3", "item_1_4"]
      },
      {
        "cat_name": "Cat-2",
        "sub_catg": ["item_2_1", "item_2_2", "item_2_3", "item_2_4"]
      },
      {
        "cat_name": "Cat-3",
        "sub_catg": ["item_3_1", "item_3_2", "item_3_3", "item_3_4"]
      }
    ];
    this.catgSelected = "";
    this.selectedCatgIndex = -1;
    this.showSubCatg = false;
   }

  ngOnInit(){
    console.log('home init');
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

  addText() {
    this.texts.push("");
  }

  showText() {
    this.textFlag = true;
  }

  onCatChange() {
    console.log(this.catgSelected);

    //get the index
    for (var i = 0; i < this.categories.length; i++) {
      if (this.catgSelected === this.categories[i].cat_name) {
        this.selectedCatgIndex = i;
        console.log("index found : " + i);
        this.showSubCatg = true;
        break;
      }
    }
  }
}
