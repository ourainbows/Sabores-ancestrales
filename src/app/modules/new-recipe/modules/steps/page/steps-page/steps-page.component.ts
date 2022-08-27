import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipesService } from './../../../../../../core/services/recipes/recipes.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-steps-page',
  templateUrl: './steps-page.component.html',
  styleUrls: ['./steps-page.component.scss'],
})
export class StepsPageComponent implements OnInit {
  formSteps!: FormGroup;
  imageSrc: string | null | ArrayBuffer = '';
  ingredients : any[] = [];
  usedIngredients : any[] = []
  steps : any[] = [];
  activeSteps : number[] = [] 

  userId : number = 1 || localStorage.getItem("userId")

  constructor(
    private storage: AngularFireStorage,
    private recipeService: RecipesService,
    private readonly formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formSteps = this.initForm();
    this.ingredients = this.recipeService.newRecipe.ingredients.map(ingredient => ingredient.name);
    // this.ingredients = ["manzana", "pera", "uva", "limon", "fresa", "kiwii", "sandia"]; // temporal line
    this.steps = this.recipeService.newRecipe.steps;
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      description: ['', Validators.required],
    });
  }

  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.recipeService.newRecipe.imagePath = file;

      const reader = new FileReader();
      reader.onload = (e) => (this.imageSrc = reader.result);

      reader.readAsDataURL(file);
    }
  }

  uploadImage(fileUpload: any) {
    const filePath = `/images/${fileUpload.name}-${Math.random()}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload);
    uploadTask
      .snapshotChanges()
      .pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe((downloadURL) => {
            console.log(downloadURL);
          });
        })
      )
      .subscribe();
  }

  onToggleIngredient(ingredientName: string) {
    if (this.usedIngredients.includes(ingredientName)) {
      this.usedIngredients = this.usedIngredients.filter(
        (ingredient) => ingredient !== ingredientName
      );
    } else {
      this.usedIngredients.push(ingredientName);
    }
  }

  addStep(){
    this.steps = [...this.steps, {
      imagePath : this.imageSrc,
      description : this.formSteps.value.description,
      ingredients : this.usedIngredients
    }];
    this.recipeService.newRecipe.steps = this.steps;

    this.formSteps.reset();
    this.usedIngredients = [];
    this.imageSrc = '';
  }

  onToogleStep(stepId: number) {
    if (this.activeSteps.includes(stepId)) {
      this.activeSteps = this.activeSteps.filter((step) => step !== stepId);
    } else {
      this.activeSteps.push(stepId);
    }
  }

  deleteStep(stepId: number){
    this.steps = this.steps.filter((step, i) => i !== stepId)
    this.recipeService.newRecipe.steps = this.steps;
  }

  submit() {
    console.log(this.recipeService.newRecipe);
  }
}
