import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent implements OnInit {
  @Input() user = ''
  @Input() idUser = 0
  @Input() photoUser = ''
  @Input() description = ''
  @Input() time = 0
  @Input() difficulty = ''
  @Input() price = ''

  



  constructor() {}

  ngOnInit(): void {}
}
