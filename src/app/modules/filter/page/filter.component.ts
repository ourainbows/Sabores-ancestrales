import { Component, Input, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { RecipesService } from 'src/app/core/services/recipes/recipes.service';
import { cardRecipeDTO } from 'src/app/shared/models/recipe.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  recipes: cardRecipeDTO[] = [];
  show: boolean = true
  @Input() category: string = '';
  cardWidth = '160px'

  constructor(private recipeSvc: RecipesService, private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService
      .getRecipesByCategoryName(this.category)
      .subscribe((data) => {
        this.recipes = data;
      });
  }
  onSearch(search: string) {
    this.show = false
    this.recipeSvc.searchRecipes(search).subscribe((res:any) => {
      this.recipes = res
    })
  }
}
