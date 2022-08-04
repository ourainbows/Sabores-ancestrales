import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent implements OnInit {

  @Input() score = {
    "qualification": 4.5,
    "quantity": 2115,
    "five-star": 1985,
    "four-star": 353,
    "three-star": 130,
    "two-star": 90,
    "one-star": 33
  }

  constructor() { }

  ngOnInit(): void {
  }

}
