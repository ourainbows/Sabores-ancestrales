import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardRecipeComponent } from './shared/components/card-recipe/card-recipe.component';
import {StatisticsComponent} from './shared/components/statistics//statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    CardRecipeComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
