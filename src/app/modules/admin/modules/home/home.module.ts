import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { OptionsComponent } from './components/options/options.component';
import { HomePageComponent } from './page/home-page/home-page.component';


@NgModule({
  declarations: [
    StatisticsComponent,
    OptionsComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
