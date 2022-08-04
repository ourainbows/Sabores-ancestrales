import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './page/sign-in.component';
import { FormModule } from '../form/form.module';



@NgModule({
  declarations: [ SignInComponent ],
  imports: [
    CommonModule,
    SignInRoutingModule,
    FormModule
  ]
})
export class SignInModule { }
