import { Recipe } from './../../../../shared/models/recipe.model';
import { RecipesService } from 'src/app/core/services/recipes.service';
import { Component, Input, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  @Input() name = '';
  @Input() score = 0;
  @Input() likes: number[] | null = null;
  @Input() recipe!: Recipe;

  userId = 1; // provisioal userId

  constructor(
    private recipeService: RecipesService,
    private clipboardApi: ClipboardService,
  ) {}

  ngOnInit(): void {}

  likeRecipe() {
    if (this.recipe.likes.includes(this.userId)) {
      this.recipe.likes.splice(this.recipe.likes.indexOf(this.userId), 1);
    } else {
      this.recipe.likes.push(this.userId);
    }
    this.recipeService
      .updateLikesRecipe(this.recipe.id, this.recipe.likes)
      .subscribe();
  }

  copyText() {
    this.clipboardApi.copyFromContent(window.location.href);
    console.log(window.location.href);
  }
}
