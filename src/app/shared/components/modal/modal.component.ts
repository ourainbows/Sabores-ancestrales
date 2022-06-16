import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() name= ""
  @Input() show: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(show: boolean) {
    this.show = !show
  }

}
