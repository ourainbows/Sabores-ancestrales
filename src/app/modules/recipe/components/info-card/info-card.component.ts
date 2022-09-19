import { CardUserDTO } from '../../../../shared/models/user.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent implements OnInit {

  @Input() userId : any = ''
  @Input() userName : any = ''
  @Input() userPhoto : any = ''

  @Input() description = ''
  @Input() time = 0
  @Input() difficulty = ''
  @Input() price = ''
  show : boolean = false

  constructor() {}

  ngOnInit(): void {}
}
