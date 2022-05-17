import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './components/tag/tag.component';
import { CardRecipeComponent } from './components/card-recipe/card-recipe.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TagComponent,
    CardRecipeComponent
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
