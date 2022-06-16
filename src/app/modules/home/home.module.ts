import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './page/home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SliderComponent } from './components/slider/slider.component';
import { SliderHeroComponent } from './components/slider-hero/slider-hero.component';


@NgModule({
  declarations: [HomePageComponent, SliderComponent, SliderHeroComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, MatIconModule],
})
export class HomeModule {}
