import { Recipe } from './../../../../shared/models/recipe.model';
import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/core/services/recipes/recipes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss'],
})
export class RecipePageComponent implements OnInit {
  recipe: Recipe = {
    id: 0,
    name: '',
    description: '',
    imagePath: '',
    user: {
      id_User: 0,
      first_name: '',
      last_name: '',
      userPhoto: '',
    },
    scoreCount: [],
    score: 0,
    time: 0,
    difficulty: '',
    price: '',
    ingredients: [],
    steps: [],
    tags: [],
    comments: [],
    recomendations: [],
    tools: [],
  };

  recipeId: string | null = null
  constructor(private recipeService: RecipesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.recipeId = params.get('id');
      if (this.recipeId) {
        this.recipeService.getRecipeById(this.recipeId).subscribe((recipe) => {
          this.recipe = recipe;
        });
      }
    });
  }
}
