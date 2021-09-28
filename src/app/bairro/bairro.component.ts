
import { Component } from '@angular/core';
import { FatoService } from './bairro.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bairro',
  templateUrl: './bairro.component.html',
  styleUrls: ['./bairro.component.css']
})
export class BairroComponent {

  public barChartOptions: ChartOptions = {
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

  public barChartLegend = true;

  chart = [];

  constructor(private _weather: FatoService) { }

  ngOnInit() {
    this._weather.listarFato()
      .subscribe(res => {

        let perdaA = res['bairros'].map(res => res.perdaA)
        let perdaF = res['bairros'].map(res => res.perdaF)
        let bairro = res['bairros'].map(res => res.bairro)

        this.chart = new Chart('canvas', {
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
            /* scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            } */
          }
        })

      })
  }
}