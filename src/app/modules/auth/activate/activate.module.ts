import { ActivateRoutingModule } from './activate.routing.module';
import { ActivateComponent } from './activate.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ActivateComponent],
  imports: [
    CommonModule,
    ActivateRoutingModule
  ]
})
export class ActivateModule { }
