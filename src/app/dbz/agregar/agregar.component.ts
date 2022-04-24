import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from 'src/app/models/Personaje';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  //escucha eventos
  @Input() nuevo: Personaje = {nombre: '', puntaje: 0};
  //emite eventos, debe especificar el tipo <>
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(event:any){
    
    if( this.nuevo.nombre.trim().length == 0){
      return;
    }
    console.log(this.nuevo);
    //Emite eventos 
    this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo = { nombre:'', puntaje:0};
    
    //event.preventDefault(); // Evento default del boton
  }

}
