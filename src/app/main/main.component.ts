import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from "ng2-charts";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  title = 'George Papadopoulos';
  faLinkedIn = faLinkedin;
  faGitHub = faGithubSquare;
  faMail = faEnvelope;

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
    legend: {
      display: false
    },
    tooltips: {
      enabled: false,
    },
    scale:{
      ticks:{
          display:false,
          suggestedMin: 7,
          suggestedMax: 10,
          stepSize: 1,
      },
      pointLabels:{
          fontColor: '#AAA',
          fontSize: 12,
      },
      gridLines:{
          color: '#FFF3',
          zeroLineColor: '#000'
      },
      angleLines :{
          color: '#FFF2'
      },
    }
  };
  public radarChartLabels: Label[] = ["Java EE", "Python", "C# .NET", "TypeScript", "SQL", "Angular", "Git", "Kotlin", "React"];

  public radarChartData: ChartDataSets[] = [
    { data: [9.8, 8.4, 8.8, 8.7, 9.2, 8.2, 9.4, 7.6, 8.5],
      borderColor: '#415bd1',
      borderWidth: 1,
      backgroundColor: '#0003',
      pointBorderColor: '#415bd1',
      pointBackgroundColor: '#0003',
    },
  ];
  public radarChartType: ChartType = 'radar';

}
