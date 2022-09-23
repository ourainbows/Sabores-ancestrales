import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-recipe-button',
  templateUrl: './create-recipe-button.component.html',
  styleUrls: ['./create-recipe-button.component.scss']
})
export class CreateRecipeButtonComponent implements OnInit {

  userId = localStorage.getItem('userId');
  constructor() { }

  ngOnInit(): void {
  }

}
