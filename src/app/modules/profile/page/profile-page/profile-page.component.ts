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
  user: User = {
    id_User: 0,
    first_name: '',
    last_name: '',
    userPhoto: '',
    userDescription: '',
    score: 0,
    SavedRecipes: [],
    recipes: [],
  };
  userId: string | null = null;

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id');
      if (this.userId) {
        this.userService.getUserById(this.userId).subscribe((user) => {
          this.user = user;
        });
      }
    });
  }
}
