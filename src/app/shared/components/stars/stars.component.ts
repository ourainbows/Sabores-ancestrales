import { Recipe } from './../../models/recipe.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipesService } from '../../../core/services/recipes/recipes.service';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss'],
})
export class StarsComponent implements OnInit {
  @Input() recipeId!: number; // recipe id
  @Output() showModal = new EventEmitter();
  @Input() type = 'qualification';
  @Output() rateChange = new EventEmitter();
  userId = 1;
  rate: number = 0;
  report = '';

  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {}

  setScore() {
    if (this.type === 'qualification') {
      this.showModal.emit(false);
      this.recipeService
        .updateScore({
          userId: this.userId,
          recipeId: this.recipeId,
          recipeStartQuantity: this.rate
        })
        .subscribe();
    } else {
      this.showModal.emit(false);
      this.rateChange.emit({ rate: this.rate, report: this.report });
    }
  }

  handleReport(event: Event) {
    this.report = (event.target as HTMLTextAreaElement).value;
  }
}
