import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SetorService } from './setor.service';
import { Chart } from 'chart.js';
var SetorComponent = /** @class */ (function () {
    function SetorComponent(_weather) {
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
    SetorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._weather.listarFato()
            .subscribe(function (res) {
            var perdaA = res['setor'].map(function (res) { return res.perdaA; });
            var perdaF = res['setor'].map(function (res) { return res.perdaF; });
            var setor = res['setor'].map(function (res) { return res.setor; });
            console.log(setor);
            _this.chart = new Chart('canvas', {
                type: 'radar',
                data: {
                    labels: setor,
                    datasets: [
                        {
                            label: 'Perda R$',
                            data: perdaF,
                            borderColor: 'blue',
                            fill: false
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
                        display: true
                    } /* ,
                    scales: {
                      xAxes: [{
                        display: true
                      }],
                      yAxes: [{
                        display: true
                      }]
                    } */
                }
            });
        });
    };
    SetorComponent = tslib_1.__decorate([
        Component({
            selector: 'app-setor',
            templateUrl: './setor.component.html',
            styleUrls: ['./setor.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [SetorService])
    ], SetorComponent);
    return SetorComponent;
}());
export { SetorComponent };
//# sourceMappingURL=setor.component.js.map