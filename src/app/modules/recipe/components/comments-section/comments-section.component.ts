import { RecipesService } from 'src/app/core/services/recipes.service';
import { Commentary } from './../../../../shared/models/recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comments-section',
  templateUrl: './comments-section.component.html',
  styleUrls: ['./comments-section.component.scss'],
})
export class CommentsSectionComponent implements OnInit {
  @Input() comments: Commentary[] = [];
  @Input() recipeId : number = 0;

  // changeLike of a comment
  updateComments(commentary: Commentary[]) {
    this.recipeService.updateComments(this.recipeId.toString(), commentary).subscribe()
  }
  // new comment
  addComment(comment: Commentary) { 
    this.comments.unshift(comment);
    this.updateComments(this.comments);
  }

  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {}
}
