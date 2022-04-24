import { Component, Input, OnInit } from '@angular/core';
import {Personaje} from '../../models/Personaje';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nuevo: Personaje = {
    nombre: '',
    puntaje: 0
  }
  @Input() personajes: Personaje[] = [];
}
