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
  tools: any = [];
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
    this.tools = this.recipeService.newRecipe.tools;
    this.price = this.recipeService.newRecipe.price;
    this.difficulty = this.recipeService.newRecipe.difficulty;
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      hours: ['', Validators.required],
      minutes: ['', Validators.required],
      difficulty: ['', Validators.required],
      price: ['', Validators.required],
      tool: [''],
    });
  }

  addTools = () => {
    this.tools.push(this.formExtra.value.tool);
    this.formExtra.controls['tool'].setValue(' ');
  };

  deleteTag = (tag: any) => {
    this.tools = this.tools.filter((item : any) => item !== tag);
  };


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
      tools: this.tools,
    };
    this.router.navigate(['/new-recipe/steps']);
  }
}
