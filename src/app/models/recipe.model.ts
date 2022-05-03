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
}

export interface Recipe {
  id: number;
  name: string;
  user: string;
  photoUser: string;
  description: string;
  imagePath: string;
  likes: number; //
  time: number;
  difficulty: string;
  price: number;
  ingredients: Ingredient;
  steps: Step[];
  tags: Tag[];
  commentaries: Commentary[];
}
