import { userRecipes } from './../../models/user.model';
import { Observable } from 'rxjs';
import { RecipesService } from '../../../core/services/recipes/recipes.service';
import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users/users.service';
import { cardRecipeDTO, Recipe } from '../../models/recipe.model';
import { JwtHelperService } from '@auth0/angular-jwt';

const jwtHelper = new JwtHelperService();
@Component({
  selector: 'app-card-recipe',
  templateUrl: './card-recipe.component.html',
  styleUrls: ['./card-recipe.component.scss'],
})
export class CardRecipeComponent implements OnInit {
  @Input() recipe!: any;
  @Input() cardWidth = '100%';
  @Input() cardMargin = '1rem';
  userRecipes$: Observable<userRecipes>;

  constructor(
    private usersService: UsersService,
    private recipeService: RecipesService
  ) {
    this.userRecipes$ = this.usersService.userRecipes;
  }
  ngOnInit(): void {}

  saveRecipe() {
    const TOKEN = localStorage.getItem('token');
    const decodedToken = jwtHelper.decodeToken(TOKEN || '');
    const userId = decodedToken.id;
    this.userRecipes$.subscribe((res) => {
      res.recipesFav.push(this.recipe);
    });
    this.recipeService
      .addFavoriteRecipe(userId, this.recipe.recipeId)
      .subscribe((saved: Object) => {});
  }

  deleteRecipe() {
    const TOKEN = localStorage.getItem('token');
    const decodedToken = jwtHelper.decodeToken(TOKEN || '');
    const userId = decodedToken.id;
    this.userRecipes$.subscribe((res) => {
      res.recipesFav = res.recipesFav.filter(
        (recipeFav: any) => recipeFav.recipeId !== this.recipe.recipeId
      );
    });
    this.recipeService
      .deleteFavoriteRecipe(userId, this.recipe.recipeId)
      .subscribe((deleted: Object) => {});
  }

  existInFavorites() {
    let exist = false;
    this.userRecipes$.subscribe((res) => {
      exist = res.recipesFav.some(
        (recipeFav: any) => recipeFav.recipeId === this.recipe.recipeId
      );
    });
    return exist;
  }
}
