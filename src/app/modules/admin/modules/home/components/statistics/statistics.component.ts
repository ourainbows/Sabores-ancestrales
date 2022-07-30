import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  newRecipes : number = 23
  newUsers : number = 190

  constructor() { }

  ngOnInit(): void {
  }

}
