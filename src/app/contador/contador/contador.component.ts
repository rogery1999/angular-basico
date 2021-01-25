import { Component } from '@angular/core'

@Component({
  selector: 'app-contador',
  template: `
    <h1> {{ titulo }} </h1>
    <h3>La base es: <strong> {{ base }} </strong></h3>

    <!-- <button (click)="operacionesNumero('-', 1)">-1</button> -->
    <!-- <button (click)="numero = numero - 1">-1</button> -->
    <button (click)="acumular( -base )">- {{ base }} </button>
    <span> {{ numero }} </span>
    <button (click)="acumular( base )">+ {{ base }} </button>
    <!-- <button (click)="numero = numero + 1">+1</button> -->
    <!-- <button (click)="operacionesNumero('+', 2)">+1</button> -->
  `,
})
export class ContadorComponent {
  titulo: string = 'Contador App';
  numero: number = 10;
  base: number = 5;

  acumular(valor: number): void{
    this.numero += valor;
  }

  operacionesNumero(operador: string, cantidad: number): void{
    switch( operador ){
      case '+':
        this.numero += cantidad;
        break;
      case '-':
        this.numero -= cantidad;
        break;
      default:
          break;
    }
  }
}
