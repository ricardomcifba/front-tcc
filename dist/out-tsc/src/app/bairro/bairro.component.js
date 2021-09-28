import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FatoService } from './bairro.service';
import { Chart } from 'chart.js';
var BairroComponent = /** @class */ (function () {
    function BairroComponent(_weather) {
        this._weather = _weather;
        this.barChartOptions = {
            responsive: true,
            // We use these empty structures as placeholders for dynamic theming.
            scales: { xAxes: [{}], yAxes: [{}] },
            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'end',
                }
            }
        };
        this.barChartLegend = true;
        this.chart = [];
    }
    BairroComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._weather.listarFato()
            .subscribe(function (res) {
            var perdaA = res['bairros'].map(function (res) { return res.perdaA; });
            var perdaF = res['bairros'].map(function (res) { return res.perdaF; });
            var bairro = res['bairros'].map(function (res) { return res.bairro; });
            _this.chart = new Chart('canvas', {
                type: 'line',
                data: {
                    labels: bairro,
                    datasets: [
                        {
                            label: 'Perda R$',
                            data: perdaF,
                            borderColor: 'yellow',
                            fill: true
                        },
                        {
                            label: 'Perda m³',
                            data: perdaA,
                            borderColor: '#00796B',
                            fill: false
                        },
                    ]
                },
                options: {
                    legend: {
                        display: false
                    },
                }
            });
        });
    };
    BairroComponent = tslib_1.__decorate([
        Component({
            selector: 'app-bairro',
            templateUrl: './bairro.component.html',
            styleUrls: ['./bairro.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FatoService])
    ], BairroComponent);
    return BairroComponent;
}());
export { BairroComponent };
//# sourceMappingURL=bairro.component.js.map