import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-graphic-bar',
  templateUrl: './graphic-bar.component.html',
  styles: [
  ]
})
export class GraphicBarComponent implements OnInit {

  @Input() horizontal: boolean = false;

  public barChartOptions: ChartOptions = {
    responsive: true
  };

  @Input('barChartLabelsChild') barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  @Input('barChartDataChild') barChartData: ChartDataSets[] = [];


  constructor() {
    // NO HAGO AQUI EL IF PORQUE AQUI AUN NO LLEGA LA DATA DEL PADRE y sigue con su valor de false, POR ESO MEJOR SE HACE EN EL ONINIT()
    // console.log(this.horizontal)
  }
  
  ngOnInit(): void {
    if (this.horizontal) {
      this.barChartType = 'horizontalBar';
    }
  }

}
