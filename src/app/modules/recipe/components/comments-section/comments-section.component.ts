import { Commentary } from './../../../../shared/models/recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comments-section',
  templateUrl: './comments-section.component.html',
  styleUrls: ['./comments-section.component.scss']
})
export class CommentsSectionComponent implements OnInit {

  @Input() comments : Commentary[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
