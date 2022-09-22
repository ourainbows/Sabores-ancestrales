import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/core/services/users/users.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userData$ : Observable<User>
  userId = localStorage.getItem('userId');
  isLogged!: boolean;
  user$ = this.authSvc.user$;
  id = 15;

  constructor(
    private readonly authSvc: AuthService,
    private userService: UsersService
  ) {
    this.userData$ = this.userService.userData;
  }

  ngOnInit(): void {
    this.authSvc.user$.subscribe((res) => (this.isLogged = res));
    this.userId && this.userService.saveUserData(this.userId);
    // this.userId && this.userService.saveRecipes(this.userId);
  }

  async onLogout(): Promise<void> {
    try {
      await this.authSvc.logout();
    } catch (error) {
      console.log(error);
    }
  }
}
