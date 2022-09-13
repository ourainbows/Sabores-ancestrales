import { CategoriesService } from './../../../../core/services/categories.service';
import { cardRecipeDTO } from './../../../../shared/models/recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  recipes: cardRecipeDTO[] = [];
  @Input() category: string = '';
  cardWidth = '160px'

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService
      .getRecipesByCategory(this.category, 5)
      .subscribe((data) => {
        this.recipes = data;
      });
  }
}
