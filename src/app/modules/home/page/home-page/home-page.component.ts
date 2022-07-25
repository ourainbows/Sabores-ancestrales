import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from '../../../../core/services/recipes/recipes.service';
import { Recipe } from 'src/app/shared/models/recipe.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
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
