import { userRecipes } from './../../../../shared/models/user.model';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users/users.service';
import { ClipboardService } from 'ngx-clipboard';
import { RecipesService } from 'src/app/core/services/recipes/recipes.service';
import { JwtHelperService } from '@auth0/angular-jwt';

const jwtHelper = new JwtHelperService();

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  @Input() name = '';
  @Input() score: any = 0;
  @Input() scoreCount: any[] = [];
  @Input() recipe!: any;
  @Input() id: any = 0; // recipeId
  userRecipes$: Observable<userRecipes>;
  show: boolean = false;

  constructor(
    private usersService: UsersService,
    private clipboardApi: ClipboardService,
    private recipeService: RecipesService
  ) {
    this.userRecipes$ = this.usersService.userRecipes;
  }

  ngOnInit(): void {
    this.usersService.saveRecipes(3);
  }

  openModal(show: boolean) {
    this.show = !show;
  }

  saveRecipe() {
    const TOKEN = localStorage.getItem('token');
    const decodedToken = jwtHelper.decodeToken(TOKEN || '');
    const userId = decodedToken.id;
    this.recipeService
      .addFavoriteRecipe(userId, this.id)
      .subscribe((saved: Object) => {
        this.userRecipes$.subscribe((res) => {
          res.recipesFav.push(this.recipe);
        })
      });
  }

  deleteRecipe() {
    const TOKEN = localStorage.getItem('token');
    const decodedToken = jwtHelper.decodeToken(TOKEN || '');
    const userId = decodedToken.id;
    this.recipeService
      .deleteFavoriteRecipe(userId, this.id)
      .subscribe((deleted: Object) => {
        this.userRecipes$.subscribe((res) => {
          res.recipesFav = res.recipesFav.filter(
            (recipeFav: any) => recipeFav.recipeId !== this.id
          );
        });
      });
  }

  existInFavorites() {
    let exist = false;
    this.userRecipes$.subscribe((res) => {
      exist = res.recipesFav.some(
        (recipeFav: any) => recipeFav.recipeId === this.id
      );
    });
    return exist;
  }

  copyText() {
    this.clipboardApi.copyFromContent(window.location.href);
    console.log(window.location.href);
  }

  shareRecipe() {
    if (navigator.share) {
      navigator
        .share({
          title: this.name,
          text: 'Mira esta deliciosa receta!',
          url: window.location.href,
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
      this.copyText();
    }
  }
}
