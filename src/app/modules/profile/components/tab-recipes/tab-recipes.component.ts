import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from '../../../../core/services/recipes/recipes.service';
import { Recipe } from 'src/app/shared/models/recipe.model';

@Component({
  selector: 'app-tab-recipes',
  templateUrl: './tab-recipes.component.html',
  styleUrls: ['./tab-recipes.component.scss']
})
export class TabRecipesComponent implements OnInit {
  @Input() recipes: Recipe[] = []

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(
      (data) => {
        this.recipes = data
      }
    )
  }

}
