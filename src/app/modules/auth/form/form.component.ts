import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ACTIONS } from 'src/app/core/const/const';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UsersService } from 'src/app/core/services/users/users.service';
import { User } from 'src/app/shared/models/user.model';
import Swal from 'sweetalert2';

export interface OptionsForm {
  id: string;
  label: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  toast = Swal.mixin({
    showConfirmButton: false,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });
  authForm!: FormGroup;
  signIn = ACTIONS.signIn;
  signUp = ACTIONS.signUp;
  user!: User | any;
  user$ = this.authSvc.user$;
  @Input() options!: OptionsForm;

  constructor(
    private readonly fb: FormBuilder,
    private authSvc: AuthService,
    private userSvc: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  async onGoogleForm(): Promise<void> { // TODO: fix data 
    this.authSvc
      .onGoogle()
      .then(async (res: any) => {
        if (res.additionalUserInfo.isNewUser) {
          this.user = {
            id: res.user.multiFactor.user.uid,
            name: res.user.multiFactor.user.displayName,
            email: res.user.multiFactor.user.email,
            photo: res.user.multiFactor.user.photoURL,
            description: '',
            score: 0,
            recipes: {
              userRecipes: [],
              savedRecipes: [],
              likedRecipes: [],
            },
          };
          this.userSvc.postUser(this.user).subscribe();  // TODO: save user
        } else {
          this.authSvc.saveToken(res.user.multiFactor.user.uid);
        }
        this.router.navigate(['/']);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  onSubmit(option: string): void {
    if (option === this.signIn && this.authForm.valid) {
      this.authSvc.login(this.authForm.value).subscribe();
    } else if (this.authForm.invalid && option === this.signIn) {
      this.toast.fire({
        timer:2000,
        icon: 'error',
        title: 'Formulario Invalido',
      });
    }
    if (
      option === this.signUp &&
      this.authForm.value.password === this.authForm.value.password_again &&
      this.authForm.valid
    ) {
      this.authSvc.register(this.authForm.value).subscribe(res =>{
        this.toast.fire({
          toast:true,
          timer:4000,
          html:`<h2 style='text-align:center'>${res.message}</h2>`,
          background: '#fff',
          position: 'top'
        })
      })
      this.initForm()
    } else if (this.authForm.invalid && option === this.signUp) {
      this.toast.fire({
        icon: 'error',
        title: 'Formulario Invalido',
      });
    }
  }

  private initForm(): void {
    if (this.signIn === this.options.id) {
      this.authForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      });
    } else {
      this.authForm = this.fb.group({
        name: [
          '',
          [
            Validators.required,
            Validators.pattern(/[a-zA-Z]/),
            Validators.minLength(3),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            // 2. check whether the entered password has a number
            Validators.pattern(/[0-9]/),
            // 4. check whether the entered password has a letter
            Validators.pattern(/[a-zA-Z]/),
            // 5. check whether the entered password has a special character
            Validators.pattern(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/),
            // 6. Has a minimum length of 6 characters
            Validators.minLength(6),
          ],
        ],
        password_again: ['', [Validators.required, Validators.pattern]],
      });
    }
  }
}
