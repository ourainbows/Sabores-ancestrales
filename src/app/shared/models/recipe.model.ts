import { Subscription } from 'rxjs';
import { CardUserDTO } from './user.model';

export interface Ingredient {
  ingredientId: number;
  ingredientName: string;
  quantity: number;
  measureName?: string;
  checked?: boolean;
}
export interface Step {
  id: number;
  imagePath?: string | Subscription;
  description: string;
  stepNumber: number,
  ingredients: Ingredient[];
  tools: any[];
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
  isPrivate: boolean;

  userId?: number
  userName?: string;
  profileImagePath?: string;
  recipeScore?: number;
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
    | 'ingredients'
    | 'tools'
  > {
  tags: string[]
  userId: any;
  steps: any[];
  portions: number;
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
