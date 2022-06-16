import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/core/services/recipes.service';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
  @Input() score: number = 0;
  @Input() id!: number;
  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {

  }
  setScore(score: number) {
    this.score = score;
    this.recipeService.updateScoreRecipe( this.id, score).subscribe();
  }

}
