import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() name= ""
  @Input() score = 0
  @Input() likes : number[] | null = null


  constructor() { }

  ngOnInit(): void {
  }

}
