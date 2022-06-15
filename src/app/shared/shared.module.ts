import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './components/tag/tag.component';
import { CardRecipeComponent } from './components/card-recipe/card-recipe.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { StarsComponent } from './components/stars/stars.component';
import { ModalComponent } from './components/modal/modal.component';
import { ScoreComponent } from './components/score/score.component';

@NgModule({
  declarations: [
    TagComponent,
    CardRecipeComponent,
    StarsComponent,
    ModalComponent,
    ScoreComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
  ],
  exports:[
    StarsComponent,
    CardRecipeComponent,
    TagComponent,
    ModalComponent,
    ScoreComponent
  ],
})
export class SharedModule { }
