import { SharedModule } from './../../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbackPageComponent } from './page/feedback-page/feedback-page.component';
import { UserMessagesComponent } from './components/user-messages/user-messages.component';
import { QualificationComponent } from './components/qualification/qualification.component';


@NgModule({
  declarations: [
    FeedbackPageComponent,
    UserMessagesComponent,
    QualificationComponent
  ],
  imports: [
    CommonModule,
    FeedbackRoutingModule,
    SharedModule
  ]
})
export class FeedbackModule { }
