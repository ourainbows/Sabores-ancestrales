import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-description',
  templateUrl: './user-description.component.html',
  styleUrls: ['./user-description.component.scss'],
})
export class UserDescriptionComponent implements OnInit {
  @Input() imagePath: string | undefined = undefined;
  @Input() firstName: string | undefined = undefined;
  @Input() lastName: string | undefined = undefined;

  constructor() {}

  ngOnInit(): void {}
}
