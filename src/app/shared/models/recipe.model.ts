import { Subscription } from 'rxjs';
import { CardUserDTO } from './user.model';

export interface Ingredient {
  id: number;
  name: string;
  quantity: number;
  unit?: string;
  checked?: boolean;
}
export interface Step {
  id: number;
  imagePath?: string | Subscription;
  description: string;
  ingredients: Ingredient[];
}
export interface Commentary {
  id?: number;
  userId: any;
  user: string;
  comment: string;
  photoUser?: string;
  photoRecipe?: string;
  date: Date | string;
  likes: number[];
}
export interface Tag {
  id: number;
  name: string;
}

export interface Recipe {
  id: number;
  name: string;
  user: CardUserDTO | any;
  description: string;
  imagePath: string;
  score: number;
  scoreCount: any[];
  time: number;
  tools: string[];
  difficulty: string;
  price: string;
  ingredients: Ingredient[];
  steps: Step[];
  tags: Tag[];
  comments: Commentary[];
  recomendations: cardRecipeDTO[];
}

export interface newRecipeDTO
  extends Omit<
    Recipe,
    | 'id'
    | 'tags'
    | 'comments'
    | 'recomendations'
    | 'user'
    | 'score'
    | 'steps'
    | 'likes'
    | 'scoreCount'
  > {
  tags: string[];
  userId: number;
  steps: any[];
  tools: string[];
}

export interface cardRecipeDTO
  extends Omit<
    Recipe,
    | 'user'
    | 'description'
    | 'difficulty'
    | 'ingredientes'
    | 'steps'
    | 'comments'
  > {}
