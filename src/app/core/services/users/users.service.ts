import { environment } from './../../../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUsers = 'http://localhost:3000/user';
  private apiInfo = `${environment.api}/info`;
  private apiUser = `${environment.api}`;

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

  // create an object observable of data user
  userData : BehaviorSubject<User> = new BehaviorSubject<User>(this.user);

  getUsers(offset = 0, limit = 10): Observable<User[]> {
    return this.http.get<User[]>(
      `${this.apiUser}/user-profile?limit=${limit}&offset=${offset}`
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

  updateUser(id: number | string | null, user: any): Observable<User> {
    return this.http.patch<any>(`${this.apiUsers}/${id}`, user);
  }
  suspendUser(id: number, userIsActive:  boolean) {
    return this.http.patch<any>(`${this.apiUser}/users/disabled/${id}`, {
      isActive: userIsActive,
    });
  }

  deleteUser(id: number | null | string): Observable<any> {
    return this.http.delete<any>(`${this.apiUser}/users/${id}`);
  }

  saveUserData(id: number | string) {
    this.getUserById(id).subscribe((res) => {
      this.userData.next(res);
    });
  }
}


