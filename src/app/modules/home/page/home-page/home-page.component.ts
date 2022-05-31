import { CategoriesService } from './../../../../core/services/categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private categoriesService : CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getRecipesByCategory("Desayuno", 3).subscribe(data => {
      console.log(data);
    })
  }

}
