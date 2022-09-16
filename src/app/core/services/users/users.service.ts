import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUsers = 'http://localhost:3000/user';
  private apiInfo = 'https://sabores-ancestrales.up.railway.app/info';
  constructor(private http: HttpClient, private route: Router) {}

  user: User = {
    id: 0,
    name: '',
    email: '',
    description: '',
    photo: '',
    recipes: {
      userRecipes: [],
      likedRecipes: [],
      savedRecipes: [],
    },
    score: 0,
    savedRecipes: [],
    isActive: true,
    idAdmin: false,
  };

  getUsers(offset = 0, limit = 10): Observable<User[]> {
    return this.http.get<User[]>(
      `${this.apiUsers}?limit=${limit}&offset=${offset}`
    );
  }

  getUserById(userId: any): Observable<User> {
    return this.http.get<User>(`${this.apiInfo}/${userId}`);
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
  deleteUser(id: number | null | string): Observable<any> {
    return this.http.delete<any>(`${this.apiUsers}/${id}`);
  }

  saveProfile(id: number) {
    this.getUserById(id).subscribe((res) => {
      console.log(res);
    });
  }
}


