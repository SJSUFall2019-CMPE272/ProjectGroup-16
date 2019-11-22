import { Component} from '@angular/core';
import {QUESTION_LIST} from '../constants';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardPage {
  private QUESTION_LIST = QUESTION_LIST;
  private filters = {};
  private results = [];
  private submitted = false;
  private showFilter = true;
  private loadingResults = false;

  constructor(private apiService: ApiService) {
    Object.keys(QUESTION_LIST).forEach((key) => {
      this.filters[key] = false;
    });
    console.log(localStorage);
  }

  submit() {
    this.submitted = true;
    this.showFilter = false;
    localStorage.setItem('filters', JSON.stringify(this.filters));
    this.loadingResults = true;
    this.apiService.getResults(this.filters)
        .subscribe(
            response => {
              this.results = response && response['housingData'];
              this.loadingResults = false;
            },
            error => {
              alert('error happened')
              this.results = [];
              this.loadingResults = false;
            }
        );
  }
}