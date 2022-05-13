import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipePageComponent } from './page/recipe-page/recipe-page.component';
import { HeroComponent } from './components/hero/hero.component';
import { TitleComponent } from './components/title/title.component';
import { InfoCardComponent } from './components/info-card/info-card.component';


@NgModule({
  declarations: [
  
    RecipePageComponent,
       HeroComponent,
       TitleComponent,
       InfoCardComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule
  ]
})
export class RecipeModule { }
