import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRecipesRoutingModule } from './table-recipes-routing.module';
import { TableRecipesPageComponent } from './page/table-recipes-page/table-recipes-page.component';


@NgModule({
  declarations: [
    TableRecipesPageComponent
  ],
  imports: [
    CommonModule,
    TableRecipesRoutingModule,
    MatIconModule
  ]
})
export class TableRecipesModule { }
