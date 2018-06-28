import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular 5';
  myNum1: number; // 1234.1111
  myNum2: number;
  resultado: number;

  suma() {
    this.resultado = this.myNum1 + this.myNum2;
  }

  resta() {
    this.resultado = this.myNum1 - this.myNum2;
  }

  multiplicacion() {
    this.resultado = this.myNum1 * this.myNum2;
  }

  division() {
    this.resultado = this.myNum1 / this.myNum2;
  }


}
