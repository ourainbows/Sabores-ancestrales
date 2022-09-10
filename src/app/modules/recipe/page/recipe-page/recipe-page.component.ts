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
  recipe: Recipe = {
    id: 0,
    name: '',
    description: '',
    imagePath: '',
    user: {
      id_User: 0,
      first_name: '',
      last_name: '',
      userPhoto: '',
    },
    scoreCount: [],
    score: 0,
    time: 0,
    difficulty: '',
    price: '',
    ingredients: [],
    steps: [],
    tags: [],
    comments: [],
    recomendations: [],
    tools: [],
    public: true,
  };

  recipeId: string | null = null;
  showFeedback = false;

  @Input() score = 0;
  @Input() scoreCount: any[] = [];
  @Input() id!: number;
  user = { id: 1 }; // provisional
  report = '';

  constructor(
    private recipeService: RecipesService,
    private route: ActivatedRoute,
    private feedbackService: FeedbackService
  ) {}

  ngOnInit() {
    // get local storage of quantity of viewed recipes
    let viewedRecipes = JSON.parse(localStorage.getItem('feedback') || '{}');
    if (!Object.keys(viewedRecipes).length) {
      let feedback = {
        viewedRecipes: 1,
        feedback: false,
        showMore: false,
      };
      localStorage.setItem('feedback', JSON.stringify(feedback));
    } else {
      viewedRecipes.viewedRecipes += 1;
      if (viewedRecipes.viewedRecipes >= 5 && !viewedRecipes.feedback) {
        this.showFeedback = true;
      }
      localStorage.setItem('feedback', JSON.stringify(viewedRecipes));
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

  rateChange(e: Event) {
    this.feedbackService.createFeedback({ ...e, idUser: this.user.id });
  }
}
