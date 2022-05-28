import { Recipe } from './recipe.model';

export interface User {
  id: number;
  photoUser?: string;
  name: string;
  description?: string;
  recipes?: Recipe[];
  score?: number;
  savedRecipes?: Recipe[];
} 

export interface CardUserDTO extends Omit<User, "description" | "recipes" | "score" | "savedRecipes">{} 