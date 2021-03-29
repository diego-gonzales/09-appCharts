import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: [
  ]
})
export class DoughnutComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 200],
    // [50, 150, 120, 180],
    // [250, 130, 70, 120],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  // esto no viene en la documentacion, esta es la manera de establecer el color a la grafica de dona
  public colors: Color[] = [
    {
      backgroundColor: [ '#FFD830', '#FF30C6', '#7364F5', '#48F5B0']
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
