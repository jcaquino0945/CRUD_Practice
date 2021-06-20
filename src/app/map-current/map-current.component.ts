import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-current',
  templateUrl: './map-current.component.html',
  styleUrls: ['./map-current.component.css']
})
export class MapCurrentComponent implements OnInit {
  map!: google.maps.Map;
  infoWindow!: google.maps.InfoWindow;

  constructor() { }

  ngOnInit(): void {
   
  }

}
