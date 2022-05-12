import { Recipe } from './../../../../shared/models/recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss'],
})
export class RecipePageComponent implements OnInit {
  recipe: Recipe = {
    id: 1,
    name: 'Torta de fresa',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie tincidunt egestas, lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie tincidunt egestas.  Molestie tincidunt egestas, lorem ipsum dolor sit amet.',
    imagePath:
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
    idUser: 1,
    user: 'Chef John Doe',
    photoUser:
      'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    likes: [1],
    score: 4.2,
    time: 0,
    difficulty: 'hard',
    price: '$$-$$$',
    ingredients: [{ id: 1, name: 'Tomato Sauce' }],
    steps: [
      {
        id: 1,
        imagePath:
          'https://images.unsplash.com/photo-1514986888952-8cd320577b68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
        ingredients: [{ id: 1, name: 'Tomato Sauce' }],
      },
    ],
    tags: [{ id: 1, name: 'Italian' }],
    comments: [
      {
        id: 1,
        user: 'Artur Morgado',
        comment: 'A delicious recipe',
        commentataryDate: new Date(),
        likes: 0,
        photoUser:
          'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
