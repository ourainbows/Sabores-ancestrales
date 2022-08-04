import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipesService } from '../../../core/services/recipes/recipes.service';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
  @Input() score: number = 0;
  @Input() id!: number;
  @Output() showModal = new EventEmitter;
  rate: number = 0;
  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {

  }

  setScore() {
    console.log(this.rate, 'Confirmado');
    this.showModal.emit(false)
    this.recipeService.updateScoreRecipe( this.id, this.rate).subscribe();
  }

}


