import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  constructor(private http: HttpClient) { }

  series = [0, 1, 2];

  ngOnInit() {
    this.http.get(environment.dataUrl).subscribe((results: any[]) => {
      const lines = {};
      results.forEach(result => {
        result.count = parseInt(result.count);
        let name = result.test.split(' ')[0];
        console.log(name);
        if (result.test.indexOf('expand') > -1) {
          name += 'Expand';
        }
        if (!lines[name]) {
          lines[name] = [];
        }
        lines[name].push(result);
      });

      const series = [];
      for (let i in lines) {
        const values = lines[i].sort((a, b) => a.count - b.count).map(value => value.time);
        series.push({
          name: i,
          type: 'line',
          data: values,
          node1000: values[0],
          node3000: values[1],
          node5000: values[2],
          node10000: values[3],
        });
      }

      this.chartOptions.series = series.sort((a, b) => (a.name > b.name) ? 1 : -1);

      console.log(results, series);
    });
    this.updateFlag = true;
  }

  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options = { 
    series: [],
    title: {
      text: 'Render Times for Clarity and Kendo Tree Views'
    },
    yAxis: {
      title: {
        text: 'Time To Render (ms)'
      },
      labels: {
        formatter: function() {
          return Math.round(this.value) + 'ms';
        }
      }
    },
    xAxis: {
      title: {
        text: 'Number of Nodes'
      },
      categories: ['1000', '3000', '5000', '10000'],
    },
    plotOptions: {
      line: {
          dataLabels: {
              enabled: true
          }
      }
  },
  }; // required
  chartCallback: Highcharts.ChartCallbackFunction = function (chart) {  } // optional function, defaults to null
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false; // optional boolean, defaults to false

}
