import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cardRecipeDTO } from 'src/app/shared/models/recipe.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private apiUrl = `${environment.api}`;
  constructor(private http: HttpClient) {}

  getRecipesByCategory(category: string, limit: number) {
    return this.http.get<any>(`${this.apiUrl}/best-recipes?limit=${limit}&q=${category}`);
  }

  getRecipesByCategoryName(category: string) {
    return this.http.get<any>(`${this.apiUrl}/recipes-search?search=${category}&category=true`);
  }
}
