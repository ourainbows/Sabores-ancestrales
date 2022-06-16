import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cardRecipeDTO } from 'src/app/shared/models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private apiUrl = 'http://localhost:3000/category';
  constructor(private http: HttpClient) {}

  getRecipesByCategory(category: string, limit: number) { 
    return this.http.get<cardRecipeDTO[]>(`${this.apiUrl}?_limit=${limit}&q=${category}`);
  }
}
