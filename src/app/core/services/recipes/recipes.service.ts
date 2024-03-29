import { Commentary } from '../../../shared/models/recipe.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { newRecipeDTO, Recipe } from 'src/app/shared/models/recipe.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private apiUrl = `${environment.api}`;
  private apiStarUrl = `${environment.api}/recipes-stars`;

  recipeToEdit: any | undefined = undefined;

  newRecipe: newRecipeDTO = {
    name: '',
    userId: parseInt(localStorage.getItem('userId') || '0'),
    description: '',
    imagePath: '',
    time: 0,
    portions: 1,
    difficulty: '',
    price: '',
    steps: [],
    tags: [],
    isPrivate: true,
  };

  constructor(private http: HttpClient) {}

  getRecipes(offset = 0, limit = 10): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(
      `${this.apiUrl}/recipes?limit=${limit}&offset=${offset}`
    );
  }
  updateScore(scoreData: Object): Observable<Recipe> {
    return this.http.post<Recipe>(`${this.apiStarUrl}`, scoreData);
  }
  updateRecipe(
    id: number | string | null | undefined,
    recipe: any
  ): Observable<Recipe> {

    return this.http.patch<Recipe>(`${this.apiUrl}/recipes/${id}`, recipe);
  }

  createStep(id: any, step: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/step${id}`, step);
  }

  deleteStep(id: number | string | null): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/step/${id}`);
  }

  updatePrivacity(id: number | string | null | undefined, recipe: any) {
    return this.http.patch<Recipe>(`${this.apiUrl}/recipes-privacity/${id}`, recipe);
  }

  updateLikesRecipe(id: number, likes: number[]): Observable<Recipe> {
    return this.http.patch<Recipe>(`${this.apiUrl}/${id}`, { likes });
  }

  getRecipeById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-recipes/${id}`);
  }

  updateComments(id: string, comments: Commentary[]): Observable<Recipe> {
    return this.http.patch<Recipe>(`${this.apiUrl}/${id}`, { comments });
  }
  deleteRecipe(id: number | string | null): Observable<Recipe> {
    return this.http.delete<Recipe>(`${this.apiUrl}/recipes/${id}`);
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
    return this.http.post<Recipe>(`${this.apiUrl}/add-recipe`, this.newRecipe);
  }

  addFavoriteRecipe(userId: number, recipeId: number): Observable<Object> {
    const saveRecipe = { recipeId, userId };
    return this.http.post<Object>(`${this.apiUrl}/recipes-fav`, saveRecipe);
  }
  deleteFavoriteRecipe(userId: number, recipeId: number): Observable<any> {
    return this.http.delete<any>(
      `${this.apiUrl}/recipes-fav/${userId}/${recipeId}`
    );
  }

  searchRecipes(search:string): Observable<any>{
    return this.http.get<Recipe[]>(
      `${this.apiUrl}/recipes-search?search=${search}`
    )
  }
}
