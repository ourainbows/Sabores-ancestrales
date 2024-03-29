import { userRecipes, User } from './../../../shared/models/user.model';
import { environment } from './../../../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUsers = 'http://localhost:3000/user';
  private apiInfo = `${environment.api}/info`;
  private apiUser = `${environment.api}`;
  private apiUpdateProfile = `${environment.api}/update-profile`;

  constructor(private http: HttpClient, private route: Router) {}

  user: User = {
    profileId: 0,
    score: 0,
    profileName: '',
    profileBirthDate: '',
    profilePhoto: '',
    userDescription: '',
    userId: 0,
    user: {
      userId: 0,
      userName: '',
      userEmail: '',
      userIsAdmin: false,
      userIsStaff: false,
      userIsActive: false,
      userRestricted: false,
      userBlocked: false,
    },
    recipes: {
      recipesUser: [],
      recipesFav: [],
    },
  };

  recipes: userRecipes = {
    recipesUser: [],
    recipesFav: [],
  };

  // create an object observable of data user
  userData : BehaviorSubject<User> = new BehaviorSubject<User>(this.user);
  userRecipes : BehaviorSubject<userRecipes> = new BehaviorSubject<userRecipes>(this.recipes);


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(
      `${this.apiUser}/user-profile`
    );
  }

  getUserById(userId: any): Observable<User> {
    return this.http.get<User>(`${this.apiInfo}/${userId}`);
  }

  getUserRecipes(id: number | string) {
    return this.http.get<any>(`${this.apiUser}/recipes-user/${id}`);
  }

  postUser(user: User): any {
    return this.http.post(this.apiUsers, user);
  }
  updateLikesRecipe(id: number, recipes: {}): Observable<User> {
    return this.http.patch<User>(`${this.apiUsers}/${id}`, { recipes });
  }

  suspendUser(id: any, userIsActive:  boolean) {
    return this.http.patch<any>(`${this.apiUser}/users/disabled/${id}`, {
      isActive: userIsActive,
    });
  }

  deleteUser(id: number | null | string): Observable<any> {
    return this.http.delete<any>(`${this.apiUser}/users/${id}`);
  }

  updateUser(id: number | string | null, user: any): Observable<User> {
    return this.http.patch<any>(`${this.apiUpdateProfile}/${id}`, user);
  }

  saveUserData(id: number | string) {
    this.getUserById(id).subscribe((res) => {
      this.userData.next(res);
    });
  }
  saveRecipes(id: number | string) {
    this.getUserRecipes(id).subscribe((res) => {
      this.userRecipes.next(res);
    });
  }
}


