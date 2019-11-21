import { Component, OnInit } from '@angular/core';

import {AnswerlistService} from '../answerlist.service';



@Component({
  selector: 'app-answerlistpage',
  templateUrl: './answerlistpage.component.html',
  // styleUrls: ['./answerlistpage.component.css']
})
export class AnswerlistpageComponent implements OnInit {

  lists;

  constructor(
    private answerlistservice:AnswerlistService, 
  ) { }

  ngOnInit() {
    this.lists = this.answerlistservice.getItems();
  }

}