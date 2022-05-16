import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-recipe',
  templateUrl: './card-recipe.component.html',
  styleUrls: ['./card-recipe.component.scss'],
})
export class CardRecipeComponent implements OnInit {
  img =
    'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80';
  title = 'Torta de fresa'
  score = 4.5
  time = '45 min'
  price='$$-$$$'
  favorite=false

  ngOnInit(): void {}

  clickFavorite(){
    this.favorite=!this.favorite
  }
}
