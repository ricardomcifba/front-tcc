
import { Component } from '@angular/core';
import { SetorService } from './setor.service';
import { ChartOptions } from 'chart.js';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-setor',
  templateUrl: './setor.component.html',
  styleUrls: ['./setor.component.css']
})
export class SetorComponent {

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
  
  constructor(private _weather: SetorService) {}

  ngOnInit() {
    this._weather.listarFato()
      .subscribe(res => {
        
        let perdaA = res['setor'].map(res => res.perdaA)
        let perdaF = res['setor'].map(res => res.perdaF)
        let setor = res['setor'].map(res => res.setor)
        console.log(setor)

        this.chart = new Chart('canvas', {
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
            }/* ,
            scales: {
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