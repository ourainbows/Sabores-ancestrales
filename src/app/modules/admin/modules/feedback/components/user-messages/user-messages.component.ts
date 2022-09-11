import { FeedbackService } from './../../../../../../core/services/feedback/feedback.service';
import { Feedback } from './../../../../../../shared/models/feedback.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-messages',
  templateUrl: './user-messages.component.html',
  styleUrls: ['./user-messages.component.scss']
})
export class UserMessagesComponent implements OnInit {

  @Input() messages: Feedback[] = []
  constructor(private feedbackService : FeedbackService) { }

  ngOnInit(): void {
    this.feedbackService.getFeedback().subscribe((data: Feedback[]) => {
      this.messages = data
    })
  }

}
