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

  @Input() selectRecipes: undefined | any = [];
  recipesOption = 'user';
  userId = localStorage.getItem('userId');

  constructor() {}

  ngOnInit(): void {}

  handleChange(event: any): void {
    if (event.target.value === 'user') {
      this.selectRecipes = this.recipes?.recipesUser;
      this.recipesOption = 'user';
    } else {
      this.selectRecipes = this.recipes?.recipesFav;
      this.recipesOption = 'fav';
    }
  }
}
