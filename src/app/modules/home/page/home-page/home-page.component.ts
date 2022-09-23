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
  showWelcome = localStorage.getItem('showWelcome') === 'false' ? false : true

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(
      (data) => {
        this.recipes = data
      }
    )
    setTimeout(() => {
      this.showWelcome = false
      localStorage.setItem('showWelcome', 'false')
    },( 1500 * 5))
  }

}
