import { RecipesService } from './../../../../../../core/services/recipes/recipes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.scss'],
})
export class BasicsPageComponent implements OnInit {
  formBasics!: FormGroup;
  imageSrc: string | null | ArrayBuffer = '';
  categories: string[] = [];

  constructor(
    private readonly formBuilder: FormBuilder,
    private recipeService: RecipesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formBasics = this.initForm();
    this.formBasics.patchValue({
      name: this.recipeService.newRecipe.name,
      description: this.recipeService.newRecipe.description,
    });
    this.categories = this.recipeService.newRecipe.tags;
    if (
      this.recipeService.newRecipe.imagePath &&
      typeof this.recipeService.newRecipe.imagePath == 'object'
    ) {
      this.readURLRecipe();
    } else {
      this.imageSrc = this.recipeService.newRecipe.imagePath;
    }
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      categories: [''],
    });
  }

  submit = () => {
    this.recipeService.newRecipe = {
      ...this.recipeService.newRecipe,
      name: this.formBasics.value.name,
      description: this.formBasics.value.description,
      tags: this.categories,
    };
    this.router.navigate(['/new-recipe/extra']);
  };

  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.recipeService.newRecipe.imagePath = file;

      const reader = new FileReader();
      reader.onload = (e) => (this.imageSrc = reader.result);

      reader.readAsDataURL(file);
    }
  }
  readURLRecipe() {
    const file: any = this.recipeService.newRecipe.imagePath;
    const reader = new FileReader();
    reader.onload = (e) => (this.imageSrc = reader.result);
    reader.readAsDataURL(file);
  }

  addCategory = () => {
    this.categories.push(this.formBasics.value.categories);
    this.formBasics.controls['categories'].setValue(' ');
  };

  deleteTag = (tag: any) => {
    this.categories = this.categories.filter((item) => item !== tag);
  };
}
