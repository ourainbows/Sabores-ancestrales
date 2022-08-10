import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './page/sign-up.component';
import { FormsModule } from '@angular/forms';
import { FormModule } from '../form/form.module';


@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    FormsModule,
    FormModule
  ]
})
export class SignUpModule { }
