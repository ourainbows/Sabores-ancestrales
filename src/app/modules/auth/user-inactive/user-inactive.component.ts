import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-inactive',
  templateUrl: './user-inactive.component.html',
  styleUrls: ['./user-inactive.component.scss']
})
export class UserInactiveComponent implements OnInit {

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
  }
  async onLogout(): Promise<void> {
    try {
      await this.authSvc.logout();
    } catch (error) {
      console.log(error);
    }
  }

}
