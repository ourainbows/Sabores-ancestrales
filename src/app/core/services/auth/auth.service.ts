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

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  auth = 'http://localhost:3000/';
  user!: User;

  private userSubject = new BehaviorSubject<boolean>(false);

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private userSvc: UsersService,
    private http: HttpClient
  ) {
    this.checkToken()
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
        email: user.email,
        password: user.password,
      })
      .pipe(
        map((res) => {
          if (res.token) {
            this.userSubject.next(true);
            this.saveToken(res.token); // TODO -> save user
            this.saveUserId(res.id);
            this.router.navigate(['/']);
          }
          return res;
        }),
        catchError((err) => {
          this.userSubject.next(false);
          console.log(err);
          return err;
        })
      );
  }

  register(user: UserRegister): Observable<any> {
    return this.http
      .post<UserRegister>(this.auth + 'register', {
        name: user.name,
        email: user.email,
        password: user.password,
      })
      .pipe(
        map((res) => {
          this.user = {
            id: 0,
            name: res.name,
            email: res.email,
            photo: '',
            description: '',
            score: 0,
            recipes: {
              userRecipes: [],
              savedRecipes: [],
              likedRecipes: [],
            },
          };
          this.userSvc.postUser(this.user).subscribe(); //TODO: check logic 
          this.userSubject.next(true);
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
    return localStorage.removeItem('token');
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token) as unknown as User;
  }

  saveUserId(id: number): void {
    localStorage.setItem('userId', id.toString());
  }

  checkToken() {
    const userToken = localStorage.getItem('token');
    userToken ? this.userSubject.next(true) : this.userSubject.next(false);
    return this.userSubject;
  }

  activateUser(token: string) {
    return this.http.get(this.auth + 'activate/' + token);
  }
  createProfile(profile : any){
    return this.http.post(this.auth + 'profile', profile);
  }
}
