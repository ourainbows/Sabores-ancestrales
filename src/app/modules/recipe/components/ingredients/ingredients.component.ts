import { Ingredient } from './../../../../shared/models/recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  @Input() ingredients : Ingredient[]= [];


  toogleChecked(index: number) {
    this.ingredients[index].checked = !this.ingredients[index].checked;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
