import { Component, Input, OnInit } from '@angular/core';
import { FeedbackService } from './../../../../../../core/services/feedback/feedback.service';
import { Feedback } from './../../../../../../shared/models/feedback.model';

@Component({
  selector: 'app-feedback-page',
  templateUrl: './feedback-page.component.html',
  styleUrls: ['./feedback-page.component.scss']
})
export class FeedbackPageComponent implements OnInit {

  constructor(private feedbackService : FeedbackService) { }

  messages : any = []

  ngOnInit(): void {
    this.feedbackService.getFeedback().subscribe((data: Feedback[]) => {
      this.messages = data
    })
  }


}
