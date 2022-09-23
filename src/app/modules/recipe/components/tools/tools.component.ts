import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  @Input() tools: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
  }
}
