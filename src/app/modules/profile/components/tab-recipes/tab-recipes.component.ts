import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from '../../../../core/services/recipes/recipes.service';

@Component({
  selector: 'app-tab-recipes',
  templateUrl: './tab-recipes.component.html',
  styleUrls: ['./tab-recipes.component.scss'],
})
export class TabRecipesComponent implements OnInit {
  @Input() recipes: undefined | any = {
    recipesUser: [],
    recipesFav: [],
  };

  selectRecipes = 'user'

  constructor() {}

  ngOnInit(): void {
  }

  handleChange(event: any): void {
    event.target.value === 'user'
      ? (this.selectRecipes = 'user')
      : (this.selectRecipes = 'fav');
  }
}
