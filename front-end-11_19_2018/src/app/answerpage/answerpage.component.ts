import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Questions} from '../question';
import {AnswerlistService} from '../answerlist.service'


@Component({
  selector: 'app-answerpage',
  templateUrl: './answerpage.component.html',
  styleUrls: ['./answerpage.component.css']
})


export class AnswerpageComponent implements OnInit {
  Questions=Questions;

  YES(qqq){
    window.alert('yes picked');
    this.AnswerlistService.YES(qqq);
  }

  NO(qqq){
    window.alert('no picked');
    this.AnswerlistService.NO(qqq);
  }

  

  constructor(
    private route: ActivatedRoute,
    private AnswerlistService: AnswerlistService
  ) { }

}