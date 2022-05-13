import { Recipe } from './recipe.model';

export interface User {
  id: number;
  name: string;
  email: string;
  description?: string;
  photo?: string;
  recipes?: Recipe[];
  score?: number;
  savedRecipes?: Recipe[];
} 

export interface CardUserDTO extends Omit<User, "email" | "description" | "recipes" | "score" | "savedRecipes">{} 