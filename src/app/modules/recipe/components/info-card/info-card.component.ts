import { CardUserDTO } from '../../../../shared/models/user.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent implements OnInit {
  @Input() user : CardUserDTO = {
    id: 0,
    name: '',
    photo: '',
    email: '',
  }
  @Input() description = ''
  @Input() time = 0
  @Input() difficulty = ''
  @Input() price = ''

  constructor() {}

  ngOnInit(): void {}
}
