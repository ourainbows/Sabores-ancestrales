import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUsers = 'http://localhost:3000/user';
  constructor(private http: HttpClient) {}

  getUsers(offset = 0, limit = 10): Observable<User[]> {
    console.log(offset, limit);
    return this.http.get<User[]>(
      `${this.apiUsers}?limit=${limit}&offset=${offset}`
    );
  }

  getUserById(userId: string): Observable<User> {
    return this.http.get<User>(`${this.apiUsers}/${userId}`);
  }
  updateLikesRecipe(id: number, recipes: {}): Observable<User> {
    return this.http.patch<User>(`${this.apiUsers}/${id}`, { recipes });
  }

  updateUser(id: number, user: any): Observable<User> {
    return this.http.patch<any>(`${this.apiUsers}/${id}`, user);
  }
}
