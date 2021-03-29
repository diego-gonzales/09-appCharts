import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraphicsService } from '../../services/graphics.service';

@Component({
  selector: 'app-doughnut-http',
  templateUrl: './doughnut-http.component.html',
  styles: [
  ]
})
export class DoughnutHttpComponent implements OnInit {


  // Doughnut
  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';

  // esto no viene en la documentacion, esta es la manera de establecer el color a la grafica de dona
  public colors: Color[] = [
    {
      backgroundColor: [ '#FFD830', '#FF30C6', '#7364F5', '#48F5B0']
    }
  ]


  constructor( private graphicsService: GraphicsService ) { }

  ngOnInit(): void {
    this.graphicsService.getData()
        .subscribe( ( {labels, values} ) => {
          // esto ya no es necesario manejarlo asi ya que modificamos la data en el servicio mediante RXJS operators
          // this.doughnutChartLabels = Object.keys(resp);
          // this.doughnutChartData = Object.values(resp);
          
          this.doughnutChartLabels = labels;
          this.doughnutChartData = values;
        })
  }

}
