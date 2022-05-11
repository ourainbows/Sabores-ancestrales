import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtraDataRoutingModule } from './extra-data-routing.module';
import { ExtraDataPageComponent } from './page/extra-data-page/extra-data-page.component';


@NgModule({
  declarations: [
    ExtraDataPageComponent
  ],
  imports: [
    CommonModule,
    ExtraDataRoutingModule
  ]
})
export class ExtraDataModule { }
