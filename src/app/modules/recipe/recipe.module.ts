import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipePageComponent } from './page/recipe-page/recipe-page.component';
import { HeroComponent } from './components/hero/hero.component';
import { TitleComponent } from './components/title/title.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { StepComponent } from './components/step/step.component';
import { CoreModule } from 'src/app/core/core.module';
import { TagsComponent } from './components/tags/tags.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MagicRecipesComponent } from './components/magic-recipes/magic-recipes.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentaryComponent } from './components/commentary/commentary.component';
import { MatIconModule } from '@angular/material/icon';
import { CommentsSectionComponent } from './components/comments-section/comments-section.component';

@NgModule({
  declarations: [
    RecipePageComponent,
    HeroComponent,
    TitleComponent,
    InfoCardComponent,
    IngredientsComponent,
    StepComponent,
    TagsComponent,
    MagicRecipesComponent,
    CommentsComponent,
    CommentaryComponent,
    CommentsSectionComponent,
  ],
  imports: [CommonModule, RecipeRoutingModule, CoreModule, SharedModule, MatIconModule],
})
export class RecipeModule {}
