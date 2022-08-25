import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtraDataRoutingModule } from './extra-data-routing.module';
import { ExtraDataPageComponent } from './page/extra-data-page/extra-data-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ExtraDataPageComponent
  ],
  imports: [
    CommonModule,
    ExtraDataRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ExtraDataModule { }
