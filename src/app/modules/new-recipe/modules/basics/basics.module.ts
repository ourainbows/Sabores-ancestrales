import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicsRoutingModule } from './basics-routing.module';
import { BasicsPageComponent } from './page/basics-page/basics-page.component';


@NgModule({
  declarations: [
    BasicsPageComponent
  ],
  imports: [
    CommonModule,
    BasicsRoutingModule
  ]
})
export class BasicsModule { }
