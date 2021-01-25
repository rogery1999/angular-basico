import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeEliminado: string = '';

  borrarHeroe(): void{
    this.heroeEliminado = this.heroes.shift() || '';
  }

}
