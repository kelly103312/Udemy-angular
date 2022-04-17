import { Component, OnInit } from '@angular/core';
import { HeroeComponent } from '../heroe/heroe.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ["heroe 1", "heroe 2","heroe 3"];
  heroeBorrado: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  setNewHeroe(nombre:string){
    this.heroes.push(nombre);
  }
  getListado():string[]{
    return this.heroes;
  }
  borrarHeroe(){
    this.heroeBorrado  = this.heroes.shift() || '';
  }
  

}
