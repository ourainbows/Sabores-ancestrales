import { Commentary } from './../../../../shared/models/recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-commentary',
  templateUrl: './commentary.component.html',
  styleUrls: ['./commentary.component.scss'],
})
export class CommentaryComponent implements OnInit {

  today = new Date();
  
  newComment: Commentary = {
    user: 'Chef Teste',
    comment: '',
    photoUser:
      'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hlZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    photoRecipe: '',
    date: (`${this.today.getFullYear()}-${this.today.getMonth()}-${this.today.getDate()}`),
    likes: [],
    userId: 1, // temporary
  };

  @Output() newCommentEvent = new EventEmitter<Commentary>();

  createNewComment() {
    this.newCommentEvent.emit(this.newComment);
  }

  constructor() {}

  ngOnInit(): void {}
}
