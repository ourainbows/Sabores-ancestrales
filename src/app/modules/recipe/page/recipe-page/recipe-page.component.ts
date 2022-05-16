import { Recipe } from './../../../../shared/models/recipe.model';
import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/core/services/recipes.service';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss'],
})
export class RecipePageComponent implements OnInit {
  recipe: Recipe = {
    id: 0,
    name: '',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie tincidunt egestas, lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie tincidunt egestas.  Molestie tincidunt egestas, lorem ipsum dolor sit amet.',
    imagePath:
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',

    user: {
      id: 1,
      name: 'Chef John Doe',
      photo:
        'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    likes: [1],
    score: 4.2,
    time: 33,
    difficulty: 'Dificil',
    price: '$$-$$$',
    ingredients: [
      {
        id: 1,
        name: 'Salsa de Fresa',
        checked: false,
        quantity: 1,
        unit: 'tarro',
      },
      { id: 2, name: 'Fresa', checked: false, quantity: 1},
      { id: 3, name: 'Azucar', checked: false, quantity: 1, unit: 'cucharada' },
      { id: 4, name: 'Huevo', checked: false, quantity: 7},
    ],
    steps: [
      {
        id: 1,
        imagePath:
          'https://images.unsplash.com/photo-1514986888952-8cd320577b68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        ingredients: [
          {
            id: 1,
            name: 'Salsa de Fresa',
            checked: false,
            quantity: 1,
            unit: 'tarro',
          },
          { id: 2, name: 'Fresa', checked: false, quantity: 1 },
          {
            id: 3,
            name: 'Azucar',
            checked: false,
            quantity: 1,
            unit: 'cucharada',
          },
          { id: 4, name: 'Huevo', checked: false, quantity: 7 },
        ],
      },
      {
        id: 1,
        imagePath:
          'https://images.unsplash.com/photo-1514986888952-8cd320577b68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        ingredients: [
          {
            id: 1,
            name: 'Salsa de Fresa',
            checked: false,
            quantity: 1,
            unit: 'tarro',
          },
          { id: 2, name: 'Fresa', checked: false, quantity: 1 },
          {
            id: 3,
            name: 'Azucar',
            checked: false,
            quantity: 1,
            unit: 'cucharada',
          },
          { id: 4, name: 'Huevo', checked: false, quantity: 7 },
        ],
      },
      {
        id: 1,
        imagePath:
          'https://images.unsplash.com/photo-1514986888952-8cd320577b68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        ingredients: [
          {
            id: 1,
            name: 'Salsa de Fresa',
            checked: false,
            quantity: 1,
            unit: 'tarro',
          },
          { id: 2, name: 'Fresa', checked: false, quantity: 1 },
          {
            id: 3,
            name: 'Azucar',
            checked: false,
            quantity: 1,
            unit: 'cucharada',
          },
          { id: 4, name: 'Huevo', checked: false, quantity: 7 },
        ],
      },
      {
        id: 1,
        imagePath:
          'https://images.unsplash.com/photo-1514986888952-8cd320577b68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        ingredients: [
          {
            id: 1,
            name: 'Salsa de Fresa',
            checked: false,
            quantity: 1,
            unit: 'tarro',
          },
          { id: 2, name: 'Fresa', checked: false, quantity: 1 },
          {
            id: 3,
            name: 'Azucar',
            checked: false,
            quantity: 1,
            unit: 'cucharada',
          },
          { id: 4, name: 'Huevo', checked: false, quantity: 7 },
        ],
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
  

  constructor(private recipeService : RecipesService) {}

  ngOnInit() {
    this.recipeService.getRecipe().subscribe(
      (recipe) => {
        this.recipe = recipe;
      })
  }
}
