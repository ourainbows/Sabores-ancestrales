import { Commentary } from './../../../../shared/models/recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {

  @Input() comments: Commentary[] = [];
  userId = 1 //temporary 

  likeComment(commentary: number) {
    if (this.comments[commentary].likes.includes(this.userId)) {
      this.comments[commentary].likes.splice(this.comments[commentary].likes.indexOf(this.userId), 1);
    } else {
      this.comments[commentary].likes.push(this.userId);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
