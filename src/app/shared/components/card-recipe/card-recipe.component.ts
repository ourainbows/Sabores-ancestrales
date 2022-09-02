import { RecipesService } from '../../../core/services/recipes/recipes.service'
import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users/users.service';
import { cardRecipeDTO, Recipe } from '../../models/recipe.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-card-recipe',
  templateUrl: './card-recipe.component.html',
  styleUrls: ['./card-recipe.component.scss'],
})
export class CardRecipeComponent implements OnInit {
  @Input() recipe!: cardRecipeDTO;
  @Input() userId = 1;
  @Input() cardWidth = '100%';
  user: User = {
    id: 0,
    name: '',
    email: '',
    description: '',
    photo: '',
    recipes: {
      userRecipes: [],
      likedRecipes: [],
      savedRecipes: [],
    },
    score: 0,
  };

  constructor(private usersService: UsersService) { }
  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users: User[]) => {
      this.user = users[0];
    })
  }

  likeRecipe() {
    if (this.user.recipes.likedRecipes.includes(this.recipe.id)) {
      this.user.recipes.likedRecipes.splice(this.user.recipes.likedRecipes.indexOf(this.recipe.id), 1);
    } else {
      this.user.recipes.likedRecipes.push(this.recipe.id);
    }
    this.usersService.updateLikesRecipe(this.user.id, this.user.recipes).subscribe()
  }
}
