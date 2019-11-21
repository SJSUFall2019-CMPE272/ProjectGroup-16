import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AnswerpageComponent } from './answerpage/answerpage.component';
import { AnswerlistService } from './answerlist.service';
import { AnswerlistpageComponent } from './answerlistpage/answerlistpage.component';

@NgModule({
  imports:      [ BrowserModule,
  ReactiveFormsModule,
  RouterModule.forRoot([
    {path:'',component:AnswerpageComponent},
    {path:'answerlistpage',component:AnswerlistpageComponent}
  ])
  ],

  declarations: [ AppComponent, 
  TopbarComponent, AnswerpageComponent, AnswerlistpageComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AnswerlistService]
})
export class AppModule { }
