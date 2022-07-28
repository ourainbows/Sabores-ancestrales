import { User } from './../../../../shared/models/user.model';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  user!: User;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getUserById('1').subscribe((data) => {
      this.user = data;
    });
  }
}
