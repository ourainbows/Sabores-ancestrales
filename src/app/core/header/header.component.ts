import { UsersService } from 'src/app/core/services/users/users.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userData = this.userService.user;
  userId = localStorage.getItem('userId');
  isLogged!: boolean;
  user$ = this.authSvc.user$;
  constructor(
    private readonly authSvc: AuthService,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.authSvc.user$.subscribe((res) => (this.isLogged = res));
    this.userId &&
      this.userService
        .getUserById(this.userId)
        .subscribe((res) => {
          this.userData = res;
        });
  }

  async onLogout(): Promise<void> {
    try {
      await this.authSvc.logout();
    } catch (error) {
      console.log(error);
    }
  }
}
