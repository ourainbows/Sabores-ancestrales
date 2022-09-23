import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  messages : any = [
    'Contactando con los mejores chefs', 
    'Generando recetas ancestrales',
    'Cocinando con amor',
    'Preparando platillos deliciosos',
    '¡A disfrutar!'
  ]
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.messages.push(this.messages.shift());
    }, 1500);
  }

}
