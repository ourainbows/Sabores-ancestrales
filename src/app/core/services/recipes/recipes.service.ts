import { Commentary } from '../../../shared/models/recipe.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Recipe } from 'src/app/shared/models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private apiUrl = 'http://localhost:3000/recipe';
  
  private newRecipe : Recipe = {
    id: 0,
    name: '',
    user: {
      id: 0,
      name: '',
      email: '',
      description: '',
      photo: '',
      recipes: {
        userRecipes: [],
        likedRecipes: [],
        savedRecipes: [],
      },
      score: 0,
      savedRecipes: [],
      isActive: true,
    },
    description: '',
    imagePath: '',
    likes: [],
    score: 0,
    time: 0,
    difficulty: '',
    price: '',
    ingredients: [],
    steps: [],
    tags: [],
    comments: [],
    recomendations: [],
  };
  
  constructor(private http: HttpClient) {}

  getRecipes(offset = 0, limit = 10): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.apiUrl}?limit=${limit}&offset=${offset}`);
  }
  updateLikesRecipe(id:number, likes : number[]): Observable<Recipe> {
    return this.http.patch<Recipe>(`${this.apiUrl}/${id}`, { likes });
  }
  updateScoreRecipe(id:number, score : number): Observable<Recipe> {
    return this.http.patch<Recipe>(`${this.apiUrl}/${id}`, { score });
  }
  getRecipeById(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/${id}`).pipe(
      map((recipe) => {
        return {
          ...recipe,
          steps: recipe.steps.map((step) => {
            return {
              ...step,
              checked: false,
            };
          }),
        };
      })
    );
  }

  updateComments(id: string, comments: Commentary[]): Observable<Recipe> {
    return this.http.patch<Recipe>(`${this.apiUrl}/${id}`, { comments });
  }
  deleteRecipe(id: number | string | null): Observable<Recipe> {
    return this.http.delete<Recipe>(`${this.apiUrl}/${id}`);
  }
  deleteComment(id: number | string | null, idComment: number | string | null): Observable<Recipe> {
    return this.http.delete<Recipe>(`${this.apiUrl}/${id}/comment/${idComment}`);
  }

  // Create a new recipe
}
