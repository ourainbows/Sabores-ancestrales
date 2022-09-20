import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { UsersService } from '../users/users.service';
import {
  User,
  UserLogin,
  UserRegister,
} from 'src/app/shared/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  toast = Swal.mixin({
    showConfirmButton: false,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });
  auth = environment.api;
  user!: User;

  private userSubject = new BehaviorSubject<boolean>(false);

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private userSvc: UsersService,
    private http: HttpClient
  ) {
    this.checkToken();
  }

  get user$(): Observable<boolean> {
    return this.userSubject.asObservable();
  }

  async onGoogle() {
    try {
      const res = await this.afAuth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );
      this.userSubject.next(true);
      return res;
    } catch (err) {
      this.userSubject.next(false);
      return err;
    }
  }

  login(user: UserLogin): Observable<any> {
    return this.http
      .post<UserLogin>(this.auth + 'login', {
        userEmail: user.email,
        password: user.password,
      })
      .pipe(
        map((res: any) => {
          if (res.accessToken) {
            this.userSubject.next(true);
            this.saveToken(res.accessToken); // TODO -> save user
            this.saveUserId(res.id);
            this.userSvc.saveUserData(res.id);
            this.router.navigate(['/']);
          }
          return res;
        }),
        catchError((err) => {
          this.userSubject.next(false);
          console.log(err)
          this.toast.fire({
              timer:2000,
              icon: 'error',
              title: err.error.message,
            })
          return err;
        })
      );
  }

  register(user: UserRegister): Observable<any> {
    return this.http
      .post<UserRegister>(this.auth + 'register', {
        userName: user.name,
        userEmail: user.email,
        password: user.password,
      })
      .pipe(
        map((res) => {
          return res;
        }),
        catchError((err) => {
          this.userSubject.next(false);
          console.log(err);
          return err;
        })
      );
  }

  logout(): void {
    this.userSubject.next(false);
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  checkToken() {
    const userToken = localStorage.getItem('token');
    userToken ? this.userSubject.next(true) : this.userSubject.next(false);
    return this.userSubject;
  }

  saveUserId(id: number): void {
    localStorage.setItem('userId', id.toString());
  }
  activateUser(token: string) {
    return this.http.post(this.auth + 'activate', { activationToken : token });
  }
  createProfile(profile: any) {
    return this.http.post(this.auth + 'profile', profile);
  }
  getToken() {
    return localStorage.getItem('token');
  }
}
