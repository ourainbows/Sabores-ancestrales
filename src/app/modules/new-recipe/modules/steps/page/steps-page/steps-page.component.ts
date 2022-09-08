import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipesService } from './../../../../../../core/services/recipes/recipes.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { last, map, mergeMap, Observable } from 'rxjs';

@Component({
  selector: 'app-steps-page',
  templateUrl: './steps-page.component.html',
  styleUrls: ['./steps-page.component.scss'],
})
export class StepsPageComponent implements OnInit {
  formSteps!: FormGroup;
  imageSrc: string | null | ArrayBuffer = '';
  fileImg: any;
  ingredients: any[] = [];
  // usedIngredients: any[] = [];
  steps: any[] = [];
  activeSteps: number[] = [];

  userId: number = 1 || localStorage.getItem('userId');

  constructor(
    private storage: AngularFireStorage,
    private recipeService: RecipesService,
    private readonly formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formSteps = this.initForm();
    // this.ingredients = this.recipeService.newRecipe.ingredients.map(
    //   (ingredient) => ingredient.name
    // );
    this.steps = this.recipeService.newRecipe.steps;
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      description: ['', Validators.required],
      ingredientQuantity: [''],
      ingredientName: [''],
      ingredientUnit: [''],
    });
  }

  addIngredient() {
    this.ingredients.push({
      quantity: this.formSteps.value.ingredientQuantity,
      name: this.formSteps.value.ingredientName,
      unit: this.formSteps.value.ingredientUnit,
    });
    this.formSteps.patchValue({
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

  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.imageSrc = file;
      this.fileImg = file;

      const reader = new FileReader();
      reader.onload = (e) => (this.imageSrc = reader.result);

      reader.readAsDataURL(file);
    }
  }

  // onToggleIngredient(ingredientName: string) {
  //   if (this.usedIngredients.includes(ingredientName)) {
  //     this.usedIngredients = this.usedIngredients.filter(
  //       (ingredient) => ingredient !== ingredientName
  //     );
  //   } else {
  //     this.usedIngredients.push(ingredientName);
  //   }
  // }

  addStep() {
    this.steps = [
      ...this.steps,
      {
        stepNumber: this.steps.length + 1,
        imagePreview: this.imageSrc,
        imagePath: this.fileImg,
        description: this.formSteps.value.description,
        ingredients: this.ingredients,
      },
    ];
    this.recipeService.newRecipe.steps = this.steps;

    this.formSteps.reset();
    this.ingredients = [];
    this.imageSrc = '';
    this.fileImg = '';
  }

  onToogleStep(stepId: number) {
    if (this.activeSteps.includes(stepId)) {
      this.activeSteps = this.activeSteps.filter((step) => step !== stepId);
    } else {
      this.activeSteps.push(stepId);
    }
  }

  deleteStep(stepId: number) {
    this.steps = this.steps.filter((step, i) => i !== stepId);
    this.recipeService.newRecipe.steps = this.steps;
  }

  uploadImage(fileUpload: any) {
    const filePath = `/images/${fileUpload.name}-${Math.random()}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload);

    return <Observable<string>>uploadTask.snapshotChanges().pipe(
      last(),
      mergeMap(() => {
        return storageRef.getDownloadURL().pipe(map((url) => url));
      })
    );
  }

  submit() {
    this.uploadImage(this.recipeService.newRecipe.imagePath).subscribe({
      next: (url) => {
        this.recipeService.newRecipe.imagePath = url;
      },
      complete: () => {
        this.recipeService.newRecipe.steps.forEach((step, i) => {
          delete step.imagePreview;
          this.uploadImage(step.imagePath).subscribe((url) => {
            this.recipeService.newRecipe.steps[i].imagePath = url;
            if (i === this.recipeService.newRecipe.steps.length - 1) {
              this.recipeService.createRecipe().subscribe((createdRecipe) => {
                this.recipeService.newRecipe = {
                  name: '',
                  userId: 0,
                  description: '',
                  imagePath: '',
                  time: 0,
                  difficulty: '',
                  price: '',
                  ingredients: [],
                  steps: [],
                  tags: [],
                  tools: [],
                };
                // this.router.navigate(['/']);
                console.log(createdRecipe);
              });
            }
          });
        });
      },
    });
  }

  showRecipe() {
    console.log(this.recipeService.newRecipe);
  }
}
