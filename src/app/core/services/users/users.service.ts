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

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUsers);
  }

  getUserById(userId: string): Observable<User> {
    return this.http.get<User>(`${this.apiUsers}/${userId}`)
  }
}
