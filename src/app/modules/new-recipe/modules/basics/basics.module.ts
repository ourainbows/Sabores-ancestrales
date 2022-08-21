import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
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
    BasicsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatIconModule,
  ]
})
export class BasicsModule { }
