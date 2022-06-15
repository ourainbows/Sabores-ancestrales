import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() name = ""
  @Input() score = 0
  @Input() likes: number[] | null = null
  @Input() id!: number
  show: boolean = false

  user: User = {
    id: 0,
    name: '',
    email: '',
    description: '',
    photo: '',
    recipes: {
      userRecipes: [],
      likedRecipes: [],
      savedRecipes: [],
    },
    score: 0,
    savedRecipes: []
  };

  constructor(private  usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users: User[]) => {
      this.user = users[0];
    })
  }
  openModal(show: boolean) {
    this.show = !show
  }

  likeRecipe() {
    if (this.user.recipes.likedRecipes.includes(this.id)) {
      this.user.recipes.likedRecipes.splice(this.user.recipes.likedRecipes.indexOf(this.id), 1);
    } else {
      this.user.recipes.likedRecipes.push(this.id);
    }
    this.usersService.updateLikesRecipe(this.user.id, this.user.recipes).subscribe()
  }

}
