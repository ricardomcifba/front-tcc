import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { VazamentoService } from './maps.service';
var MapsComponent = /** @class */ (function () {
    function MapsComponent(service) {
        this.service = service;
    }
    MapsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.listar().subscribe(function (resposta) {
            _this.solicitacao = resposta['registros'].map(function (resposta) { return resposta.numerosolicitacao; });
            _this.lat = resposta['registros'].map(function (resposta) { return resposta.latitude; });
            _this.long = resposta['registros'].map(function (resposta) { return resposta.longitude; });
            console.log(_this.solicitacao, _this.lat, _this.long);
            //marker.solicitacao = this.solicitacao
            //marker.lat = this.lat
            //marker.lng = this.long
            //console.log(marker)
        });
        var myLatlng = new google.maps.LatLng(-12.9665727, -38.4639189);
        //var myLatlng = new google.maps.LatLng(this.vazamento.latitude, this.vazamento.latitude);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false,
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Centro do Mapa"
        });
        // To add the marker to the map, call setMap();
        marker.setMap(map);
    };
    MapsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-maps',
            templateUrl: './maps.component.html',
            styleUrls: ['./maps.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [VazamentoService])
    ], MapsComponent);
    return MapsComponent;
}());
export { MapsComponent };
//# sourceMappingURL=maps.component.js.map