import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-messages',
  templateUrl: './user-messages.component.html',
  styleUrls: ['./user-messages.component.scss']
})
export class UserMessagesComponent implements OnInit {

  @Input() messages: any[] = []
  constructor(private feedbackService : FeedbackService) { }

  ngOnInit(): void {}

}
