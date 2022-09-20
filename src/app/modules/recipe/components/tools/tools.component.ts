import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  @Input() tools: any[] = [];
  constructor() { }

  ngOnInit(): void {
    const dataArr = new Set(this.tools);

    this.tools = [...dataArr];
  }
}
