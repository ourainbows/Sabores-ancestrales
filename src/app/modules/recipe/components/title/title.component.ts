import { Recipe } from './../../../../shared/models/recipe.model';
import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users/users.service';
import { User } from 'src/app/shared/models/user.model';
import { ClipboardService } from 'ngx-clipboard';
import { RecipesService } from 'src/app/core/services/recipes/recipes.service';
import { JwtHelperService } from "@auth0/angular-jwt";

const jwtHelper = new JwtHelperService();

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  @Input() name = '';
  @Input() score : any = 0;
  @Input() scoreCount : any[] = [];
  @Input() recipe!: Recipe;
  @Input() id: any = 0 // recipeId
  show: boolean = false;

  user!: any;

  constructor(private  usersService: UsersService, private clipboardApi: ClipboardService, private recipeService: RecipesService) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users: User[]) => {
      this.user = users[0];
    })
  }

  openModal(show: boolean) {
    this.show = !show
  }

  saveRecipe() {
    const TOKEN = localStorage.getItem('token')
    const decodedToken = jwtHelper.decodeToken(TOKEN || '')
    const userId = decodedToken.id

    this.recipeService.addFavoriteRecipe(userId, this.id).subscribe((saved: Object) => {
      console.log(saved)
    })
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
