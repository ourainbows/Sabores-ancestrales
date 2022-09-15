import { Recipe } from './../../models/recipe.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipesService } from '../../../core/services/recipes/recipes.service';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss'],
})
export class StarsComponent implements OnInit {
  @Input() id!: number;
  @Output() showModal = new EventEmitter();
  @Input() scoreCount: any[] = [];
  @Input() score = 0;
  @Output() rateChange  = new EventEmitter();
  userId = 1;
  rate: number = 0;
  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {}

  setScore() {
    let scoreLength = this.scoreCount.length;
    let newScore = (this.score * scoreLength + this.rate) / (scoreLength + 1);
    this.showModal.emit(false);
    this.recipeService
      .updateScore(this.id, {
        scoreCount: [...this.scoreCount, this.userId],
        score: newScore,
      })
      .subscribe();
    this.rateChange.emit({
      scoreCount: [...this.scoreCount, this.userId],
      score: newScore,
    });
  }
}
