import { RecipesService } from 'src/app/core/services/recipes/recipes.service';
import { Commentary } from './../../../../shared/models/recipe.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {

  @Input() comments: Commentary[] = [];
  @Output() changeLikeEvent = new EventEmitter<Commentary[]>();
  @Input() recipeId : any = 0
  userId = 1 //temporary 
  showReport = false;
  selectedCommentary = 0;
  

  likeComment(commentary: number) {
    if (this.comments[commentary].likes.includes(this.userId)) {
      this.comments[commentary].likes.splice(this.comments[commentary].likes.indexOf(this.userId), 1);
    } else {
      this.comments[commentary].likes.push(this.userId);
    }
    this.changeLikeEvent.emit(this.comments);
  }
  deleteCommentary(commentaryId: any) {
    this.comments = this.comments.filter((commentary) => commentary.id !== commentaryId);
    this.recipeService.deleteComment(this.recipeId, commentaryId).subscribe();
    console.log(this.comments, commentaryId)
  }

  selectCommentary(commentaryId : any) {
    this.selectedCommentary = commentaryId;
    this.showReport = true;
  }

  constructor(private recipeService : RecipesService) {}

  ngOnInit(): void {}
}
