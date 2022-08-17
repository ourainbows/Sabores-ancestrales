import { RecipesService } from './../../../../../../core/services/recipes/recipes.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.scss'],
})
export class BasicsPageComponent implements OnInit {
  formBasics! : FormGroup;

  constructor(private readonly formBuilder: FormBuilder, private recipeService : RecipesService) {}

  ngOnInit(): void {
    this.formBasics = this.initForm();
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      categories: ['', Validators.required],
    });
  }

  submit = () => {
    console.warn('submit', this.formBasics.value);
    this.recipeService.newRecipe = {
      ...this.recipeService.newRecipe,
      name: this.formBasics.value.name,
      description: this.formBasics.value.description,
      imagePath: this.formBasics.value.image,
      tags: this.formBasics.value.categories
    }
  };
  viewRecipe = () => {
    console.log(this.recipeService.newRecipe);
  }
}
