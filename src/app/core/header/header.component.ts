import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  userImg =
    'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hlZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';
  user$ = this.authSvc.user$;

  constructor(private readonly authSvc: AuthService) {}

  async onLogout(): Promise<void> {
    try {
      await this.authSvc.logout();
    } catch (error) {
      console.log(error);
    }
  }
}
