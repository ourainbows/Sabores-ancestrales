import { Recipe } from './../../../../../../shared/models/recipe.model';
import { RecipesService } from './../../../../../../core/services/recipes/recipes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-recipes-page',
  templateUrl: './table-recipes-page.component.html',
  styleUrls: ['./table-recipes-page.component.scss'],
})
export class TableRecipesPageComponent implements OnInit {
  recipes: any[] = [];
  offset = 0;

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipesService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    });
  }
  deleteRecipe(id: number) {
    this.recipesService.deleteRecipe(id).subscribe(() => {
      this.recipes = this.recipes.filter((recipe) => recipe.recipeId !== id);
    }
    );
  }
}
