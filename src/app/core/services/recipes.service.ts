import { Commentary } from './../../shared/models/recipe.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Recipe } from 'src/app/shared/models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private apiUrl = 'http://localhost:3000/recipe';
  constructor(private htttp: HttpClient) {}

  getRecipeById(id: string): Observable<Recipe> {
    return this.htttp.get<Recipe>(`${this.apiUrl}/${id}`).pipe(
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
    return this.htttp.patch<Recipe>(`${this.apiUrl}/${id}`, { comments });
  }
}
