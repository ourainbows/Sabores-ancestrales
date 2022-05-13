import { CardUserDTO } from './user.model';

export interface Ingredient {
  id: number;
  name: string;
  quantity: number;
  unit?: string;
  checked?: boolean;
}
interface Step {
  id: number;
  imagePath: string;
  description: string;
  ingredients: Ingredient[];
}
interface Commentary {
  id: number;
  user: string;
  comment: string;
  photoUser: string;
  commentataryDate: Date;
  likes: number;
}
interface Tag {
  id: number;
  name: string;
}

export interface Recipe {
  id: number;
  name: string;
  user: CardUserDTO;
  description: string;
  imagePath: string;
  likes: number[]; 
  score: number;
  time: number;
  difficulty: string;
  price: string;
  ingredients: Ingredient[];
  steps: Step[];
  tags: Tag[];
  comments: Commentary[];
}
