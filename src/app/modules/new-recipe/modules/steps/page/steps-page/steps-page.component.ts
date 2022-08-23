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

  constructor(
    private storage: AngularFireStorage,
    private recipeService: RecipesService,
    private readonly formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formSteps = this.initForm();
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

  submit() {}
}
