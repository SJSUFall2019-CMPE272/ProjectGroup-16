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

  constructor(private apiService: ApiService, private mapService: MapService) {
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
    this.mapService.initMap();
    this.apiService.getResults(this.filters)
        .subscribe(
            response => {
              this.results = response && response['housingData'] || [];
              this.results.forEach((result, index) => {
                if (index === 0) {
                  this.mapService.setCenter(result.latitude, result.longitude);
                }
                if (index > 10) return;
                this.mapService.addMarker(result.latitude, result.longitude, (index + 1).toString());
              });
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