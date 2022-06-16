import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepsRoutingModule } from './steps-routing.module';
import { StepsPageComponent } from './page/steps-page/steps-page.component';


@NgModule({
  declarations: [
    StepsPageComponent
  ],
  imports: [
    CommonModule,
    StepsRoutingModule
  ]
})
export class StepsModule { }
