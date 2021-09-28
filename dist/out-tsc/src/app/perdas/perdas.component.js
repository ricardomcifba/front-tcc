import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PerdasService } from './perdas.service';
//import * as pluginDataLabels from 'chartjs-plugin-datalabels';
//import { Label } from 'ng2-charts';
import { Chart } from 'chart.js';
var PerdasComponent = /** @class */ (function () {
    function PerdasComponent(service) {
        this.service = service;
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
    PerdasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.listarTempo()
            .subscribe(function (res) {
            var perdaA = res['meses'].map(function (res) { return res.perdaA; });
            var perdaF = res['meses'].map(function (res) { return res.perdaF; });
            var meses = res['meses'].map(function (res) { return res.nomeMes; });
            _this.chart = new Chart('canvas', {
                type: 'line',
                data: {
                    labels: meses,
                    datasets: [
                        {
                            label: 'Perda R$',
                            data: perdaF,
                            borderColor: '#3cba9f',
                            fill: false
                        },
                        {
                            label: 'Perda m³',
                            data: perdaA,
                            borderColor: '#ffcc00',
                            fill: false
                        },
                    ]
                },
                options: {
                    legend: {
                        display: true
                    },
                    scales: {
                        xAxes: [{
                                display: true
                            }],
                        yAxes: [{
                                display: true
                            }]
                    }
                }
            });
        });
    };
    PerdasComponent = tslib_1.__decorate([
        Component({
            selector: 'app-perdas',
            templateUrl: './perdas.component.html',
            styleUrls: ['./perdas.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [PerdasService])
    ], PerdasComponent);
    return PerdasComponent;
}());
export { PerdasComponent };
//# sourceMappingURL=perdas.component.js.map