import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model'; 

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUsers = 'http://localhost:3000/user';
  constructor(private htttp: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.htttp.get<User[]>(this.apiUsers);
  }

  getUserById(id_User: string): Observable<User> {
    return this.htttp.get<User>(`${this.apiUsers}/${id_User}`).pipe(
      map((user) => {
        return user;
      }),
    );
  }
}
