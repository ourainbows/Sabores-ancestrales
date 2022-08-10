import { Component, Input, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { cardRecipeDTO } from 'src/app/shared/models/recipe.model';

@Component({
  selector: 'app-slider-hero',
  templateUrl: './slider-hero.component.html',
  styleUrls: ['./slider-hero.component.scss']
})
export class SliderHeroComponent implements OnInit {

  recipes: cardRecipeDTO[] = [];
  @Input() category: string = '';
  cardWidth = '160px'

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService
      .getRecipesByCategory(this.category, 3)
      .subscribe((data) => {
        this.recipes = data;
      });
  }

}
