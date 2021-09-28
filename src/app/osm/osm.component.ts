import { Component, OnInit } from '@angular/core';
import { OSMService } from './osm.service';
import { } from 'googlemaps';

declare var ol: any;

@Component({
  selector: 'app-osm',
  templateUrl: './osm.component.html',
  styleUrls: ['./osm.component.css']
})

export class OSMComponent implements OnInit {

  osmmap: any;

  constructor(private service: OSMService) { }

  ngOnInit() {

    this.service.listarFato().subscribe(resposta => {
      let latitude = resposta['registros'].map(resposta => resposta.latitude)
      let longitude = resposta['registros'].map(resposta => resposta.longitude)

     
      var mousePositionControl = new ol.control.MousePosition({
        coordinateFormat: ol.coordinate.createStringXY(4),
        projection: 'EPSG:4326',
        // comment the following two lines to have the mouse position
        // be placed within the map.
        className: 'custom-mouse-position',
        target: document.getElementById('mouse-position'),
        undefinedHTML: '&nbsp;'
      });
  
      //for (let i = 0; i < 2; i++) {
        
        this.osmmap = new ol.Map({
          target: 'map',
          controls: ol.control.defaults({
            attributionOptions: {
              collapsible: false
            }
          }).extend([mousePositionControl]),
          layers: [
            new ol.layer.Tile({
              source: new ol.source.OSM()
            })
          ],
          view: new ol.View({
            center: ol.proj.fromLonLat([-38.533521,-12.9289205]),
            zoom: 8
          })
        });
        
      //}

          

    });


  }
  
  
}


