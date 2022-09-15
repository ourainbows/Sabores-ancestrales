import { Step } from './../../../../shared/models/recipe.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  @Input() step: Step = {
    id: 0,
    imagePath: '',
    description: '',
    ingredients: [],
    tools: []
  }
  @Input() stepsIndex = 0;
  @Input() stepsLength = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
