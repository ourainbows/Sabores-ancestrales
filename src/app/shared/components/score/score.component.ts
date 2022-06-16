import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  @Input() score = 0
  stars = ['star_border', 'star_border', 'star_border', 'star_border', 'star_border']

  constructor() { }

  ngOnInit(): void {
  }
  setStars(score: number, index: number) {
    if(index <= Math.round(score-1)){
      this.stars[index] = 'star'
    }
    if(score % 1 !== 0){
      this.stars[Math.round(score-1)] = 'star_half'
    }
    if(index + 1 > Math.round(score)){
      this.stars[index] = 'star_border'
    }
    return this.stars[index]
  }

}
