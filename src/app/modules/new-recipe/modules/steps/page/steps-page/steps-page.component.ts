import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipesService } from './../../../../../../core/services/recipes/recipes.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { last, map, mergeMap, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

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
  tools: any = [];
  steps: any[] = [];
  activeSteps: number[] = [];
  editing = false;
  stepPostion = 0;
  edit = false;

  userId: number = 1 || localStorage.getItem('userId');

  constructor(
    private storage: AngularFireStorage,
    private recipeService: RecipesService,
    private readonly formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.edit = params['edit'];
    });

    this.formSteps = this.initForm();
    this.steps = this.recipeService.newRecipe.steps;
    // this.tools = this.recipeService.newRecipe.tools;
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      stepDescription: ['', Validators.required],
      ingredientQuantity: [''],
      ingredientName: [''],
      ingredientUnit: [''],
      isPublic: [true],
      tool: [''],
    });
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

  addTools = () => {
    this.tools.push(this.formSteps.value.tool);
    this.formSteps.controls['tool'].setValue(' ');
  };

  deleteTag = (tag: any) => {
    this.tools = this.tools.filter((item: any) => item !== tag);
  };

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

  addStep() {
    this.steps = [
      ...this.steps,
      {
        stepNumber: this.steps.length + 1,
        imagePreview: this.imageSrc,
        stepImage: this.fileImg,
        stepDescription: this.formSteps.value.stepDescription,
        ingredients: this.ingredients,
        tools: this.tools,
      },
    ];
    this.recipeService.newRecipe.steps = this.steps;

    this.formSteps.reset();
    this.tools = [];
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

  loadStepOnForm(step: any, stepPosition: number) {
    this.formSteps.patchValue({
      stepDescription: step.stepDescription ? step.stepDescription : step.description,
    });
    this.ingredients = step.ingredients;
    this.tools = step.tools;
    this.imageSrc = step.imagePreview || step.stepImage || step.imagePath;
    this.fileImg = step.stepImage;
    this.editing = true;
    this.stepPostion = stepPosition;
  }

  editStep() {
    this.steps[this.stepPostion] = {
      stepNumber: this.stepPostion + 1,
      imagePreview:
        this.steps[this.stepPostion].stepImage !== this.imageSrc
          ? this.imageSrc
          : this.steps[this.stepPostion].imagePreview,
      stepImage:
        this.steps[this.stepPostion].stepImage !== this.imageSrc
          ? this.fileImg
          : this.steps[this.stepPostion].stepImage,
      stepDescription: this.formSteps.value.stepDescription,
      ingredients: this.ingredients,
      tools: this.tools,
    };
    this.recipeService.newRecipe.steps = this.steps;
    this.formSteps.reset();
    this.ingredients = [];
    this.tools = [];
    this.imageSrc = '';
    this.fileImg = '';
    this.editing = false;
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
    this.recipeService.newRecipe.isPrivate = this.formSteps.value.isPublic;
    if (typeof this.recipeService.newRecipe.imagePath === 'string') {
      this.submitSteps();
    } else {
      this.uploadImage(this.recipeService.newRecipe.imagePath).subscribe(
        (url) => {
          this.recipeService.newRecipe.imagePath = url;
          this.submitSteps();
        }
      );
    }
  }

  submitSteps() {
    this.recipeService.newRecipe.steps.forEach((step, i) => {
      delete step.imagePreview;
      if (typeof (step.stepImage !== Object)) {
        this.uploadImage(step.stepImage).subscribe((url) => {
          this.recipeService.newRecipe.steps[i].stepImage = url;
          if (i === this.recipeService.newRecipe.steps.length - 1) {
            this.edit ? this.editRecipe() : this.uploadRecipe();
          }
        });
      }
      // if the image is already uploaded
      else {
        if (i === this.recipeService.newRecipe.steps.length - 1) {
          this.edit ? this.editRecipe() : this.uploadRecipe();
        }
      }
    });
  }

  uploadRecipe() {
    this.recipeService.createRecipe().subscribe((createdRecipe: any) => {
      this.router.navigate(['/recipe/' + createdRecipe.message]);
      this.emptyNewRecipe();
    });
  }

  editRecipe() {
    let recipeInfo = {
      userId: this.recipeService.newRecipe.userId,
      priceId: this.recipeService.newRecipe.price,
      recipeDificult: this.recipeService.newRecipe.difficulty,
      recipeName: this.recipeService.newRecipe.name,
      recipePhoto: this.recipeService.newRecipe.imagePath,
      recipePortions: 1,
      recipeTime: this.recipeService.newRecipe.time,
      recipeDescription: this.recipeService.newRecipe.description,
    };
    this.recipeService
      .updateRecipe(this.recipeService.recipeToEdit?.recipeId, recipeInfo)
      .subscribe(() => {
        this.createStepsRecipe();
      });
  }

  createStepsRecipe() {
    this.recipeService.newRecipe.steps.forEach((step, i) => {
      if (step.id) {
        let newStep = {
          stepDescription: step.stepDescription ? step.stepDescription : step.description,
          stepImage: step.stepImage ? step.stepImage : step.imagePath,
          stepNumber: i
        }
        this.recipeService.deleteStep(step.id).subscribe(() => {
          this.recipeService.createStep(this.recipeService.recipeToEdit?.recipeId, newStep).subscribe(() => {
            if (i === this.recipeService.newRecipe.steps.length - 1) {
              this.updatePrivacityRecipe();
            }
          });
        });
      }
    });
  }

  updatePrivacityRecipe() {
    this.recipeService
      .updatePrivacity(this.recipeService.recipeToEdit?.recipeId, {
        recipePrivacity: this.recipeService.newRecipe.isPrivate,
      })
      .subscribe(() => {
        this.router.navigate(['/']);
        this.emptyNewRecipe();
      });
  }

  emptyNewRecipe() {
    this.recipeService.newRecipe = {
      name: '',
      userId: 0,
      description: '',
      imagePath: '',
      time: 0,
      difficulty: '',
      price: '',
      portions: 0,
      steps: [],
      tags: [],
      isPrivate: true,
    };
  }
}
