import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbackPageComponent } from './page/feedback-page/feedback-page.component';
import { ScoreComponent } from './components/score/score.component';
import { UserMessagesComponent } from './components/user-messages/user-messages.component';


@NgModule({
  declarations: [
    FeedbackPageComponent,
    ScoreComponent,
    UserMessagesComponent
  ],
  imports: [
    CommonModule,
    FeedbackRoutingModule
  ]
})
export class FeedbackModule { }
