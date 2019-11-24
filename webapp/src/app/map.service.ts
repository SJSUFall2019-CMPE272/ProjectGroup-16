import { Injectable } from '@angular/core';
import { MAP_API_KEY } from './config';

@Injectable({
  providedIn:'root'
})
export class MapService {

  private map;

  constructor() {
    var script = document.createElement("script");
    script.setAttribute("src", `https://maps.googleapis.com/maps/api/js?key=${MAP_API_KEY}&callback=initMap`)
    script.setAttribute("async", "");
    script.setAttribute("defer", "");
    document.head.appendChild(script);
  }

  initMap() {
    // @ts-ignore
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 12
    });
  }

  setCenter(lat, lng) {
    this.map.setCenter({lat, lng});
    this.map.setZoom(12);
  }

  addMarker(lat, lng, label) {
    // @ts-ignore
    return new google.maps.Marker({
      position: {lat, lng},
      label,
      icon: 'assets/house_icon.png',
      map: this.map
    });
  }
}