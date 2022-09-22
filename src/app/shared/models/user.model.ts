export interface UserLogin {
  id?: any;
  email: string;
  password: string;
  token?: string;
}
export interface UserRegister {
  name: string;
  email: string;
  password: string;
}
/*
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
*/
export interface User {
  profileId: number;
  score: number;
  profileName: string;
  profileBirthDate: string;
  profilePhoto: string;
  userDescription?: string;
  createdAt?: string;
  updatedAt?: string;
  userId: number;
  user: {
    userId: number;
    userName: string;
    userEmail: string;
    userIsAdmin: boolean;
    userIsStaff: boolean;
    userIsActive: boolean;
    userRestricted: boolean;
    userBlocked: boolean;
    createdAt?: string;
    updatedAt?: string;
  };
  recipes: {
    recipesFav: [];
    recipesUser: [];
  };
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

  export interface userRecipes {
    recipesUser: any[];
    recipesFav: any[];
  }