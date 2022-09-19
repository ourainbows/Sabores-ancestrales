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
  // generate user structure from user model to avoid warnings and errors
  user: User = {
    profileId: 0,
    score: 0,
    profileName: '',
    profileBirthDate: '',
    profilePhoto: '',
    userDescription: '',
    createdAt: '',
    updatedAt: '',
    userId: 0,
    user: {
      userId: 0,
      userName: '',
      userEmail: '',
      userIsAdmin: false,
      userIsStaff: false,
      userIsActive: true,
      userRestricted: false,
      userBlocked: false,
      createdAt: '',
      updatedAt: '',
    },
    recipes: {
      userRecipes: [],
      savedRecipe: [],
      likedRecipes: [],
    },
  };
  userId: any = '';
  localUserId = localStorage.getItem('userId');

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id');
      // if user is owner of profile and user state have user data
      if (this.userId === this.localUserId && this.userService.user.userId) {
        this.user = this.userService.user;
        // if state don't have user data or user is not owner of profile
      } else {
        this.userService.getUserById(this.userId).subscribe((data) => {
          this.user = data;
        });
      }
    });
  }
}
