export interface Feedback {
    id : number;
    idUser : number;
    userName: string;
    photoUser: string;
    date :  Date | string;
    comment : string;
    score : number;
}