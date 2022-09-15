export interface Information {
  id_User: number;
  userPhoto?: string;
  userDescription?: string;
  score: number;
}
export interface CardUserDTO
  extends Omit<
    User,
    | 'userDescription'
    | 'NoUserRecipes'
    | 'score'
    | 'SavedRecipes'
    | 'recipes'
    | 'informations'
  > {}
export interface User {
  id: number;
  name: string;
  email: string;
  description?: string;
  photo?: string;
  recipes: {
    userRecipes: number[];
    likedRecipes: number[];
    savedRecipes: number[];
  };
  score?: number;
  savedRecipes?: number[];
  isActive?: boolean;
  idAdmin?: boolean;
}

export interface CardUserDTO
  extends Omit<
    User,
    'email' | 'description' | 'recipes' | 'score' | 'savedRecipes'
  > {}

 export interface UserLogin {
  email: string;
  password: string;
  token?: string;
}
export interface UserRegister {
  name: string;
  email: string;
  password: string;
}

