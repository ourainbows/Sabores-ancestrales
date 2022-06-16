export interface User {
  id: number;
  name: string;
  email: string;
  description?: string;
  photo?: string;
  recipes: {
    userRecipes: number[],
    likedRecipes: number[],
    savedRecipes: number[],
  };
  score?: number;
  savedRecipes?: number[];
}

export interface CardUserDTO extends Omit<User, "email" | "description" | "recipes" | "score" | "savedRecipes">{}
