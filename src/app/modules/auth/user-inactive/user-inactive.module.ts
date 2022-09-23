import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInactiveRoutingModule } from './user-inactive-routing.module';
import { UserInactiveComponent } from './user-inactive.component';


@NgModule({
  declarations: [
    UserInactiveComponent
  ],
  imports: [
    CommonModule,
    UserInactiveRoutingModule
  ]
})
export class UserInactiveModule { }
