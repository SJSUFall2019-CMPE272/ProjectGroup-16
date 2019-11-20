import { Injectable } from '@angular/core';

@Injectable({  
  providedIn:'root'
})
export class AnswerlistService {

  allanswer = [];

  YES(qqq){
    this.allanswer.push(1);
  }
  
  No(qqq){
    this.allanswer.push(0);
  }
  
  constructor() { 
  }

  getItems() {
    return this.allanswer;
  }

}