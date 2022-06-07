import { Component, OnChanges } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.scss'],
})

export class RatingStarComponent implements OnChanges {
  rating:number = 4;
  starWidth!: number;
  constructor() { }

  ngOnChanges(): void {
    this.starWidth = this.rating * 76  / 5;
  }
}
