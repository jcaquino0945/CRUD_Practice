import { Component, OnInit } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader"

const loader = new Loader({
  apiKey: "AIzaSyCr4sKDIA1F3jl9GhTad9D5svkwPDMia-o",
  version: "weekly",
});



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    loader.load().then(() => {
      let map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -25.344, lng: 131.036 },
        zoom: 8,
      });

      const marker = new google.maps.Marker({
        position: { lat: -25.344, lng: 131.036 },
        map: map,
      });
    });
  }

}
