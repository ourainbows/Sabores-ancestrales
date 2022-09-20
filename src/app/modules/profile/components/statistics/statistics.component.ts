import { User } from 'src/app/shared/models/user.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  @Input() user!: User;
  constructor() {}

  ngOnInit(): void {}
}
