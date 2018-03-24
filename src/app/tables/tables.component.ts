import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  authors: any;
  hideTable: boolean;

  constructor() {
    this.authors = [
      {id: 1, name: "gaurav", auth:"new 1", price: 14},
      {id: 1, name: "rohit", auth:"new 2", price: 12},
      {id: 1, name: "pj", auth:"new 3", price: 13},
      {id: 1, name: "baba", auth:"new 4", price: 15}
    ];
    this.hideTable = true;
   }

  ngOnInit() {
  }

  showTable() {
    this.hideTable = !this.hideTable;
  }
  
}
