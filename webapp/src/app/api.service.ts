import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({  
  providedIn:'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getResults(filters) {
    return this.http.get(`http://localhost:5000/houses?${Object.keys(filters).map(key => 'check' + key[0].toUpperCase() + key.slice(1) + '=' + filters[key]).join('&')}`);
  }

}