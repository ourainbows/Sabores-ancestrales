import { Router } from '@angular/router';
import { RecipesService } from 'src/app/core/services/recipes/recipes.service';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, OnChanges {
  @Input() imagePath: string | undefined = undefined;
  @Input() name: string | undefined = undefined;
  @Input() recipeId: any = 0;
  show: boolean = false;
  userId = parseInt(localStorage.getItem('userId') || '0');
  @Input() idOwnerRecipe = 1;

  constructor(private recipesService: RecipesService, private router: Router) {}

  ngOnInit(): void {
  }
  
  ngOnChanges(): void {
    this.idOwnerRecipe = this.recipesService.recipeToEdit?.userId;
  }
  
  editRecipe() {
    this.recipesService.newRecipe = {
      name: this.recipesService.recipeToEdit?.name || '',
      userId: this.userId,
      description: this.recipesService.recipeToEdit?.description || '',
      imagePath: this.recipesService.recipeToEdit?.imagePath || '',
      time: this.recipesService.recipeToEdit?.time || 0,
      difficulty: this.recipesService.recipeToEdit?.difficulty || '',
      price: this.recipesService.recipeToEdit?.price || '',
      steps: this.recipesService.recipeToEdit?.steps || [],
      tags: this.recipesService.recipeToEdit?.tags.map((tag : any) => tag.name) || [],
      isPrivate: this.recipesService.recipeToEdit?.isPrivate || true,
      portions: 0,
    };

    this.router.navigate(['/new-recipe/basics'], {
      queryParams: { edit: 'true' },
    });
  }
}
