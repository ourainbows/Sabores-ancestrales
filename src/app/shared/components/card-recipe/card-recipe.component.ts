import { Component, Input} from '@angular/core';
import { RecipesService } from 'src/app/core/services/recipes.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-card-recipe',
  templateUrl: './card-recipe.component.html',
  styleUrls: ['./card-recipe.component.scss'],
})
export class CardRecipeComponent {

  @Input() recipe!: Recipe;
  @Input() userId = 1;

  constructor(private recipeService: RecipesService) {}
  favorite=false

  likeRecipe() {
    if (this.recipe.likes.includes(this.userId)) {
      this.recipe.likes.splice(this.recipe.likes.indexOf(this.userId), 1);
    } else {
      this.recipe.likes.push(this.userId);
    }
    this.recipeService.updateLikesRecipe(this.recipe.id, this.recipe.likes).subscribe()
  }
}
