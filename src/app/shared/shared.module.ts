import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './components/tag/tag.component';
import { CardRecipeComponent } from './components/card-recipe/card-recipe.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { StarsComponent } from './components/stars/stars.component';
import { ModalComponent } from './components/modal/modal.component';
import { ScoreComponent } from './components/score/score.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TagComponent,
    CardRecipeComponent,
    StarsComponent,
    ModalComponent,
    ScoreComponent,
    SearcherComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    StarsComponent,
    CardRecipeComponent,
    TagComponent,
    ModalComponent,
    ScoreComponent,
    SearcherComponent,
  ],
})
export class SharedModule { }
