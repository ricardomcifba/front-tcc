
import { Component } from '@angular/core';
import { PerdasService } from './perdas.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
//import * as pluginDataLabels from 'chartjs-plugin-datalabels';
//import { Label } from 'ng2-charts';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-perdas',
  templateUrl: './perdas.component.html',
  styleUrls: ['./perdas.component.css']
})
export class PerdasComponent {

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
  
  constructor(private service: PerdasService) {}

  ngOnInit() {
    this.service.listarTempo()
      .subscribe(res => {
        
        let perdaA = res['meses'].map(res => res.perdaA)
        let perdaF = res['meses'].map(res => res.perdaF)
        let meses = res['meses'].map(res => res.nomeMes)

        this.chart = new Chart('canvas', {
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
        })

      })
  }
}