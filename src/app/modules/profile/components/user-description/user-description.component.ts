import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../../../core/services/users/users.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-description',
  templateUrl: './user-description.component.html',
  styleUrls: ['./user-description.component.scss'],
})
export class UserDescriptionComponent implements OnInit {
 @Input() user!: User;
 show : boolean = false;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {}
}

