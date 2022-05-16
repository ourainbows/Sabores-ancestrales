import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() imagePath : string | undefined= undefined
  @Input() name : string | undefined= undefined


  constructor() { }

  ngOnInit(): void {
  }

}
