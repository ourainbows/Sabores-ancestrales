import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ACTIONS } from 'src/app/core/const/const';
import { AuthService } from 'src/app/core/services/auth/auth.service';
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
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });
  authForm!: FormGroup;
  signIn = ACTIONS.signIn;
  signUp = ACTIONS.signUp;
  @Input() options!: OptionsForm;

  constructor(
    private readonly fb: FormBuilder,
    private authSvc: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  async onSubmit(option: string): Promise<void> {
    if (option === this.signIn && this.authForm.valid) {
      this.authSvc.login(this.authForm.value).then((res: any) => {
        if (res.aud) {
          this.router.navigate(['/']);
          this.initForm();
        } else {
          this.toast.fire({
            icon: 'error',
            title: res.message,
          });
        }
      });
    } else if (this.authForm.invalid && option === this.signIn) {
      this.toast.fire({
        icon: 'error',
        title: 'Invalid Form',
      });
    }
      if (
        option === this.signUp &&
        this.authForm.value.password === this.authForm.value.password_again &&
        this.authForm.valid
      ) {
        this.authSvc.register(this.authForm.value).then((res: any) => {
          if (res.email) {
            this.initForm();
            this.router.navigate(['/login']);
          }
        });
      } else if (this.authForm.invalid && option === this.signUp) {
        this.toast.fire({
          icon: 'error',
          title: 'Invalid Form',
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
