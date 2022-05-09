interface Ingredient {
  id: number;
  name: string;
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
  user: string;
  photoUser: string;
  description: string;
  imagePath: string;
  likes: number; 
  score: number;
  time: number;
  difficulty: string;
  price: string;
  ingredients: Ingredient[];
  steps: Step[];
  tags: Tag[];
  comments: Commentary[];
}
