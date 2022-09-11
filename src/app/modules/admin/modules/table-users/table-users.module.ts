import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableUsersRoutingModule } from './table-users-routing.module';
import { TableUsersPageComponent } from './page/table-users-page/table-users-page.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    TableUsersPageComponent
  ],
  imports: [
    CommonModule,
    TableUsersRoutingModule,
    MatIconModule
  ]
})
export class TableUsersModule { }
