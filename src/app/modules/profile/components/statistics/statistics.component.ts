import { User } from 'src/app/shared/models/user.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  @Input() userRecipes : undefined | any = {
    recipesUser: [],
    recipesFav: [],
  };
  @Input() score = 0;
  constructor() {}

  ngOnInit(): void {}
}
