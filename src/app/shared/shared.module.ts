import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './components/tag/tag.component';
import { CardRecipeComponent } from './components/card-recipe/card-recipe.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { RatingStarComponent } from './components/rating-star/rating-star.component';

@NgModule({
  declarations: [
    TagComponent,
    CardRecipeComponent,
    RatingStarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
  ],
  exports:[
    CardRecipeComponent,
    TagComponent
  ],
})
export class SharedModule { }
