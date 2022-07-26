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
  @Input() imagePath: string | undefined = undefined;
  @Input() firstName: string | undefined = undefined;
  @Input() lastName: string | undefined = undefined;
  @Input() userDescription: string | undefined = undefined;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {}
}

