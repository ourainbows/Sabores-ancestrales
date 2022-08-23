import { Router } from '@angular/router';
import { RecipesService } from 'src/app/core/services/recipes/recipes.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-extra-data-page',
  templateUrl: './extra-data-page.component.html',
  styleUrls: ['./extra-data-page.component.scss'],
})
export class ExtraDataPageComponent implements OnInit {
  formExtra!: FormGroup;
  ingredients: any = [];
  price = '';
  difficulty = '';

  constructor(
    private readonly formBuilder: FormBuilder,
    private recipeService: RecipesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formExtra = this.initForm();
    this.formExtra.patchValue({
      hours: Math.floor(this.recipeService.newRecipe.time / 60),
      minutes: Math.floor(this.recipeService.newRecipe.time % 60),
      difficulty: this.recipeService.newRecipe.difficulty,
      price: this.recipeService.newRecipe.price,
    });
    this.ingredients = this.recipeService.newRecipe.ingredients;
    this.price = this.recipeService.newRecipe.price;
    this.difficulty = this.recipeService.newRecipe.difficulty;
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      hours: ['', Validators.required],
      minutes: ['', Validators.required],
      difficulty: ['', Validators.required],
      price: ['', Validators.required],
      ingredientQuantity: [''],
      ingredientName: [''],
      ingredientUnit: [''],
    });
  }

  addIngredient() {
    this.ingredients.push({
      quantity: this.formExtra.value.ingredientQuantity,
      name: this.formExtra.value.ingredientName,
      unit: this.formExtra.value.ingredientUnit,
    });
    this.formExtra.patchValue({
      ingredientQuantity: '',
      ingredientName: '',
      ingredientUnit: '',
    });
  }
  deleteIngredient(ingredientName: string) {
    this.ingredients = this.ingredients.filter(
      (ingredient: any) => ingredient.name != ingredientName
    );
  }

  onChangeOption(option: any, value: string) {
    if (option == 'difficulty') {
      this.formExtra.patchValue({
        difficulty: value,
      });
      this.difficulty = value;
    }
    if (option == 'price') {
      this.formExtra.patchValue({
        price: value,
      });
      this.price = value;
    }
  }

  submit() {
    this.recipeService.newRecipe = {
      ...this.recipeService.newRecipe,
      time: this.formExtra.value.hours * 60 + this.formExtra.value.minutes,
      difficulty: this.formExtra.value.difficulty,
      price: this.formExtra.value.price,
      ingredients: this.ingredients,
    };
    console.log(this.recipeService.newRecipe);
    this.router.navigate(['/new-recipe/steps']);
  }
}
