import { Observable, last, mergeMap, map } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  Component,
  OnInit,
  Input,
  OnChanges,
} from '@angular/core';
import { UsersService } from '../../../../core/services/users/users.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-description',
  templateUrl: './user-description.component.html',
  styleUrls: ['./user-description.component.scss'],
})
export class UserDescriptionComponent implements OnInit, OnChanges {
  @Input() user!: User;
  show: boolean = false;
  showEdit: boolean = false;
  userId = parseInt(localStorage.getItem('userId') || '');

  formProfile!: FormGroup;
  imageSrc: string | null | ArrayBuffer = '';
  fileImg: any = '';

  constructor(
    private userService: UsersService,
    private storage: AngularFireStorage,
    private readonly formBuilder: FormBuilder
  ) {
    this.formProfile = this.initForm();
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.formProfile.patchValue({
      profileName: this.user.profileName,
      profileDescription: this.user.userDescription,
    });
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      profileName: ['', Validators.required],
      profileDescription: [''],
    });
  }

  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.fileImg = file;

      const reader = new FileReader();
      reader.onload = (e) => (this.imageSrc = reader.result);

      reader.readAsDataURL(file);
    }
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

  submitImage = () => {
    if (this.imageSrc) {
      this.uploadImage(this.fileImg).subscribe((url) => {
        this.submit(url);
      });
    } else {
      this.submit();
    }
  };

  submit(image: string = this.user.profilePhoto) {
    const form = this.formProfile.value;
    const user = {
      profileName: form.profileName,
      profileDescription: form.profileDescription,
      profilePhoto: image,
      profileBirthDate: this.user.profileBirthDate,
    };
    this.userService.updateUser(this.userId, user).subscribe((data) => {
      this.showEdit = false;
      this.user = {
        ...this.user,
        profileName: user.profileName,
        userDescription: user.profileDescription,
        profilePhoto: user.profilePhoto,
      }
    });
  }
}
