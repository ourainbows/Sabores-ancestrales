import { UsersService } from './../../../../../../core/services/users/users.service';
import { User } from './../../../../../../shared/models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-users-page',
  templateUrl: './table-users-page.component.html',
  styleUrls: ['./table-users-page.component.scss']
})
export class TableUsersPageComponent implements OnInit {

  users : User[] = []
  offset = 0

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users
    }
    )
  }
  loadMore() {
    this.offset += 10
    this.userService.getUsers(this.offset).subscribe(users => {
      this.users = [...this.users, ...users]
    }
    )
  }
  toggleSuspend(id : number){
    const user = this.users.find(user => user.id === id)
    this.userService.updateUser(id, {isActive: !user?.isActive}).subscribe(user => {
      this.users = this.users.map(u => u.id === id ? user : u)
    }
    )
  }
  deleteUser(id : number){
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id)
    }
    )
  }
}
