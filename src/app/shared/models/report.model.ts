export interface Report {
    id: number;
    user: string;
    photoUser : string;
    date: string;
    message: string;

    idRecipe : number;
    reportedUser : string;
    photoReportedUser : string;
    reportedComment? : string;
    recipeDescription? : string;
    recipeImage? : string;
    recipeName? : string;
}