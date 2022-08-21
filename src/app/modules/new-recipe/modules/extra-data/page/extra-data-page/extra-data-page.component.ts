import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extra-data-page',
  templateUrl: './extra-data-page.component.html',
  styleUrls: ['./extra-data-page.component.scss']
})
export class ExtraDataPageComponent implements OnInit {

  ingredients = []

  constructor() { }

  ngOnInit(): void {
  }


  addIngredient = () => {
  }
  
  deleteIngredient = (ingredient : any) => {
  }

}
