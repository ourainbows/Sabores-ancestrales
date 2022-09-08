import { Commentary } from '../../../shared/models/recipe.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { newRecipeDTO, Recipe } from 'src/app/shared/models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private apiUrl = 'http://localhost:3000/recipe';
  userId = 1; // provisional UserId

  newRecipe: newRecipeDTO = {
    name: '',
    userId: 0,
    description: '',
    imagePath: '',
    time: 0,
    difficulty: '',
    price: '',
    ingredients: [],
    steps: [],
    tags: [],
    tools: [],
  };

  constructor(private http: HttpClient) {}

  getRecipes(offset = 0, limit = 10): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(
      `${this.apiUrl}?limit=${limit}&offset=${offset}`
    );
  }
  updateScore(id: number, score: any): Observable<Recipe> {
    return this.http.patch<Recipe>(`${this.apiUrl}/${id}`, score);
  }

  updateLikesRecipe(id: number, likes: number[]): Observable<Recipe> {
    return this.http.patch<Recipe>(`${this.apiUrl}/${id}`, { likes });
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
  deleteRecipe(id: number | string | null, idRecipe : any): Observable<Recipe> {
    return this.http.delete<Recipe>(`${this.apiUrl}/${idRecipe}/comment/${id}`);
  }
  deleteComment(
    id: number | string | null,
    idComment: number | string | null
  ): Observable<Recipe> {
    return this.http.delete<Recipe>(
      `${this.apiUrl}/${id}/comment/${idComment}`
    );
  }

  createRecipe(): Observable<Recipe> {
    return this.http.post<Recipe>(this.apiUrl, this.newRecipe);
  }
}
