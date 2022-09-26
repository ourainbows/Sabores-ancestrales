import { Router } from '@angular/router';
import { RecipesService } from 'src/app/core/services/recipes/recipes.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-extra-data-page',
  templateUrl: './extra-data-page.component.html',
  styleUrls: ['./extra-data-page.component.scss'],
})
export class ExtraDataPageComponent implements OnInit {
  formExtra!: FormGroup;
  price = 0;
  difficulty = 0;
  edit = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private recipeService: RecipesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.edit = params['edit'];
    });

    this.formExtra = this.initForm();
    this.formExtra.patchValue({
      hours: Math.floor(this.recipeService.newRecipe.time / 60),
      minutes: Math.floor(this.recipeService.newRecipe.time % 60),
      difficulty: this.recipeService.newRecipe.difficulty,
      price: this.recipeService.newRecipe.price  === "$" ? 1 : this.recipeService.newRecipe.price === "$$-$$$" ? 2 : this.recipeService.newRecipe.price === "$$$$" ? 3 : 0 ,
    });
    this.price = this.recipeService.newRecipe.price === "$" ? 1 : this.recipeService.newRecipe.price === "$$-$$$" ? 2 : this.recipeService.newRecipe.price === "$$$$" ? 3 : 0;
    this.difficulty = this.recipeService.newRecipe.difficulty === "Facil" ? 1 : this.recipeService.newRecipe.difficulty === "Medio" ? 2 : this.recipeService.newRecipe.difficulty === "Dificil" ? 3 : 0;
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      hours: ['', Validators.required],
      minutes: ['', Validators.required],
      difficulty: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  onChangeOption(option: any, value: number) {
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
    };
    if (this.edit) {
      this.router.navigate(['/new-recipe/steps'], {
        queryParams: { edit: 'true' },
      });
    } else {
      this.router.navigate(['/new-recipe/steps']);
    }
  }
}
