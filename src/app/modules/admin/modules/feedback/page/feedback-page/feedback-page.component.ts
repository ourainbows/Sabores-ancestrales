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

  stats : any = {
    qualification: 0,
    quantity: 0,
    oneStar: 0,
    twoStar: 0,
    threeStar: 0,
    fourStar: 0,
    fiveStar: 0,
  }

  ngOnInit(): void {
    this.feedbackService.getFeedback().subscribe((data: Feedback[]) => {
      this.messages = data
    })
    this.feedbackService.getFeedbackStats().subscribe((data: any) => {
      this.stats = data
      console.log(data)
    })
  }


}
