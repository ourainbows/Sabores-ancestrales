import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() title= ""
  @Input() score = 0;
  @Input() likes = 0;

  
  constructor() { }

  ngOnInit(): void {
  }

}
