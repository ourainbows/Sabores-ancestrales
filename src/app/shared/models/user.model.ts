import { Recipe } from './recipe.model';

export interface User{
    id: number;
    name: string;
    email: string;
    description?: string;
    photo?: string;
    recipes?: Recipe[];
    score?: number;
    savedRecipes?: Recipe[];
} 