import { cardRecipeDTO } from './../../../../shared/models/recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-magic-recipes',
  templateUrl: './magic-recipes.component.html',
  styleUrls: ['./magic-recipes.component.scss'],
})
export class MagicRecipesComponent implements OnInit {
  @Input() magicRecipes: cardRecipeDTO[] = [];
  cardWidth = "150px";

  constructor() {}

  ngOnInit(): void {}
}
