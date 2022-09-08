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
  userId: any = '';

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id') || 1;
      if (this.userId) {
        //temporary user id
        this.userService.getUserById(this.userId).subscribe((data) => {
          this.user = data;
        });
      }
    });
  }
}
