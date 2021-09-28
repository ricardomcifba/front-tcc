import { Component, OnInit } from '@angular/core';
import { MapaService } from './mapa.service';
import { } from 'googlemaps';

declare var MarkerClusterer: any;
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})

export class MapaComponent implements OnInit {

  constructor(private service: MapaService) { }

  ngOnInit() {

    this.service.listarFato().subscribe(resposta => {
      let total = resposta['registros'].map(resposta => resposta.total)
      let latitude = resposta['registros'].map(resposta => resposta.latitude)
      let longitude = resposta['registros'].map(resposta => resposta.longitude)
      let perdaA = resposta['registros'].map(resposta => resposta.perdaAgua)
      let perdaF = resposta['registros'].map(resposta => resposta.perdaFinanceira)

      var markers = [];
      var icone;
      var x,y;
      var contentString = [];
      var infowindow = [];
      //var url ='https://sites.google.com/a/gmapas.com/home/poligonos-ibge/poligonos-ibge-municipios-bahia/Municipios_BA.kml';
      //var url = 'http://www.gmapas.com/poligonos-ibge/poligonos-estados-do-brasil'
      var url ='SSA.kml';
      
      //for(let i = 0; i< Object.keys(latitude).length;i++){
      for (let i = 0; i < 2; i++) {
        var myLatlng = new google.maps.LatLng(latitude[i], longitude[i]);

        //data.push(myLatlng);
        var mapOptions = {
          zoom: 11,
          center: myLatlng,
          scrollwheel: true, //Scroll do mouse habilitado
          mapTypeId: google.maps.MapTypeId.HYBRID

        };
        //cor do icone
        if (perdaA[i] <= 10.00){
          icone = "./assets/img/azul.png";
          x = 20;
          y = 20;
        }
        else
          if (perdaA[i] <= 50.00){
            icone = "./assets/img/verde.png"
            x = 15;
            y = 15;
          }
          else
            if (perdaA[i] <= 100.00){
              icone = "./assets/img/amarela.png"
              x = 18;
              y = 18;
            }
            else
              if (perdaA[i] > 100.00){
                icone = "./assets/img/vermelha.png"
                x = 20;
                y = 20;
              }

        //Informações sobre o ponto no mapa
        contentString[i] = 'Total de registros: ' + total[i] +
          '<br> Perda de água: ' + perdaA[i] + 'm³' +
          '<br> Perda financeira: ' + 'R$ ' + perdaF[i]
          // + '<br> Latitude: ' + latitude[i]

        //Insere a informação no mapa   
        infowindow[i] = new google.maps.InfoWindow({
          content: contentString[i]
        });

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        //this.contatenar = solicitacao.concat("perda de".concat(perdaA))
        
        var marker = new google.maps.Marker({
          position: myLatlng,
          icon: { url: icone, scaledSize: new google.maps.Size(x, y) },
        });

        

        markers.push(marker);

        //Para abrir a informação do ponto no mapa
        markers[i].addListener('click', function () {
          infowindow[i].open(map, markers[i]);
        });
        
      }

      var kmlLayer = new google.maps.KmlLayer({url,suppressInfoWindows: true,preserveViewport: false, map});
      kmlLayer.addListener('click', function(event) {});
      //insere os marcadores no mapa
      for (let i = 0; i < Object.keys(markers).length; i++)
        markers[i].setMap(map);

        map.controls[google.maps.ControlPosition.TOP_CENTER].push(
          document.getElementById('legend'));

    });
    

  }

  cluster() {
    this.service.listarFato().subscribe(resposta => {
      let latitude = resposta['registros'].map(resposta => resposta.latitude)
      let longitude = resposta['registros'].map(resposta => resposta.longitude)

      var markers = [];
      //for(let i = 0; i< Object.keys(latitude).length;i++){
      for (let i = 0; i < 1000; i++) {
        var myLatlng = new google.maps.LatLng(latitude[i], longitude[i]);
        var mapOptions = {
          zoom: 13,
          center: myLatlng,
          scrollwheel: true, //Scroll do mouse habilitado
          mapTypeId: google.maps.MapTypeId.HYBRID

        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker = new google.maps.Marker({
          position: myLatlng,

        });

        markers.push(marker);

      }

      //cria os clusters e insere cor de acordo com quantidade de pontos
      var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

    });
  }

  heatMap() {

    this.service.listarFato().subscribe(resposta => {
      let latitude = resposta['registros'].map(resposta => resposta.latitude)
      let longitude = resposta['registros'].map(resposta => resposta.longitude)

      var data = [];
      //for(let i = 0; i< Object.keys(latitude).length;i++){
      for (let i = 0; i < 600; i++) {
        var myLatlng = new google.maps.LatLng(latitude[i], longitude[i]);
        data.push(myLatlng);
        var mapOptions = {
          zoom: 12,
          center: myLatlng,
          scrollwheel: true, //Scroll do mouse habilitado
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker = new google.maps.Marker({
          position: myLatlng,
        });

      }

      //Para mapa de calor
      var heatmap = new google.maps.visualization.HeatmapLayer({
        data: data
      });
      heatmap.setMap(map);

    });

  }
}


