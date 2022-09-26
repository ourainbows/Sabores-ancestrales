import { UsersService } from './../../../../../../core/services/users/users.service';
import { User } from './../../../../../../shared/models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-users-page',
  templateUrl: './table-users-page.component.html',
  styleUrls: ['./table-users-page.component.scss'],
})
export class TableUsersPageComponent implements OnInit {
  users: User[] = [];
  offset = 0;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
  toggleSuspend(id: any) {
    const user = this.users.find((user) => user.user.userId === id);
    if (user) {
      this.userService
        .suspendUser(id, !user.user.userIsActive)
        .subscribe(() => {
          user.user.userIsActive = !user.user.userIsActive;
        });
    }
  }
  deleteUser(id: any) {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter((user) => user.user.userId !== id);
    });
  }
}
