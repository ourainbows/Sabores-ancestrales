import { Recipe } from './recipe.model';


export interface Information {
  id_User: number;
  userPhoto?: string;
  userDescription?: string;
  score: number;
}
export interface User {
  id_User: number;
  first_name?: string;
  last_name?: string;
  userPhoto?: string;
  userDescription?: string;
  score: number;
  SavedRecipes: number[];
  recipes?: Recipe[];
  informations: Information[];
}

export interface CardUserDTO extends Omit<User, "userDescription" | "NoUserRecipes" | "score" | "SavedRecipes" | "recipes" | "informations" >{} 