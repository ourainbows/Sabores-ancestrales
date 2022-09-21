import { Report } from './../../../../shared/models/report.model';
import { FeedbackService } from './../../../../core/services/feedback/feedback.service';
import { Recipe } from './../../../../shared/models/recipe.model';
import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/core/services/recipes/recipes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss'],
})
export class RecipePageComponent implements OnInit {
  recipe: any = []

  recipeId: string | null = null;
  showFeedback = false;

  @Input() score = 0;
  @Input() scoreCount: any[] = [];
  @Input() id!: number;
  userId = localStorage.getItem('userId');
  report = '';
  viewedRecipes = JSON.parse(localStorage.getItem('feedback') || '{}');

  constructor(
    private recipeService: RecipesService,
    private route: ActivatedRoute,
    private feedbackService: FeedbackService
  ) {}

  ngOnInit() {
    // get local storage of quantity of viewed recipes
    if (!Object.keys(this.viewedRecipes).length) {
      let feedback = {
        viewedRecipes: 1,
        feedback: false, // if the user has given feedback
        showModal: false, // if we should show the feedback modal
      };
      localStorage.setItem('feedback', JSON.stringify(feedback));
    } else {
      this.viewedRecipes.viewedRecipes += 1;
      // show modal if user has viewed 5 recipes
      if (this.viewedRecipes.viewedRecipes === 5 && !this.viewedRecipes.feedback && this.userId) {
        this.viewedRecipes.showModal = true;
        this.showFeedback = true;
      }
      // don't show modal again if user has viewed more than 5 recipes
      if(this.viewedRecipes.viewedRecipes === 6 && !this.viewedRecipes.feedback) {
        this.viewedRecipes.showModal = false;
      }
      localStorage.setItem('feedback', JSON.stringify(this.viewedRecipes));
    }

    this.route.paramMap.subscribe((params) => {
      this.recipeId = params.get('id');
      if (this.recipeId) {
        this.recipeService.getRecipeById(this.recipeId).subscribe((recipe) => {
          this.recipe = recipe;

          this.recipeService.recipeToEdit = recipe;
        });
      }
    });
  }

  rateChange(e: any) {
    this.feedbackService.createFeedback({
      appFeedbackComment: e.report,
      stars: e.rate,
      userId : this.userId,
    }).subscribe(r => {
      this.viewedRecipes.feedback = true;
      this.viewedRecipes.showModal = false;
      localStorage.setItem('feedback', JSON.stringify(this.viewedRecipes));
    })
  }
}
