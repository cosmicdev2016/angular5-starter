import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  box = {
    id: 1,
    name: 'box1',
    area: 150
  }

  date;

  constructor() {
    this.date = Date.now();
  }

  ngOnInit() {
  }

}
