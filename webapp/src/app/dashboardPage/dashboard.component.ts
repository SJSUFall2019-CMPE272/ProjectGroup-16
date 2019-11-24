import { Component} from '@angular/core';
import {QUESTION_LIST} from '../constants';
import { ApiService } from '../api.service';
import { MapService } from '../map.service';


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
  private viewLimit = 0;
  private eachViewLimit = 20;

  constructor(private apiService: ApiService, private mapService: MapService) {
    Object.keys(QUESTION_LIST).forEach((key) => {
      this.filters[key] = false;
    });
    console.log(localStorage);
  }

  setMapCenter(lat, lng) {
    this.mapService.setCenter(lat, lng);
  }

  increaseLimit() {
    this.results.slice(this.viewLimit, this.viewLimit + this.eachViewLimit).forEach((result, index) => {
      if (index === 0) {
        this.setMapCenter(result.latitude, result.longitude);
      }
      this.mapService.addMarker(result.latitude, result.longitude, (index + 1 + this.viewLimit).toString());
    });
    this.viewLimit += this.eachViewLimit;
  }

  submit() {
    this.submitted = true;
    this.showFilter = false;
    localStorage.setItem('filters', JSON.stringify(this.filters));
    this.loadingResults = true;
    this.viewLimit = 0;
    this.mapService.initMap();
    this.apiService.getResults(this.filters)
        .subscribe(
            response => {
              this.results = response && response['housingData'] || [];
              this.increaseLimit();
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