import { CardUserDTO } from '../../../../shared/models/user.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent implements OnInit {
  @Input() user : CardUserDTO = {
    id_User: 0,
    first_name: '',
    last_name: '',
    userPhoto: '',
  }
  @Input() description = ''
  @Input() time = 0
  @Input() difficulty = ''
  @Input() price = ''

  constructor() {}

  ngOnInit(): void {}
}
