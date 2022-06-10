<<<<<<< HEAD
import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/core/services/recipes.service';
import { Recipe } from 'src/app/shared/models/recipe.model';
=======
import { CategoriesService } from './../../../../core/services/categories.service';
import { Component, OnInit } from '@angular/core';
>>>>>>> 53fc2aa (Added service and getByCategory on it)

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @Input() recipes: Recipe[] = []

<<<<<<< HEAD
  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(
      (data) => {
        this.recipes = data
      }
    )
=======
  constructor(private categoriesService : CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getRecipesByCategory("Desayuno", 3).subscribe(data => {
      console.log(data);
    })
>>>>>>> 53fc2aa (Added service and getByCategory on it)
  }

}
