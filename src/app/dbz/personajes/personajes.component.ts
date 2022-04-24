import { Component, Input, OnInit } from '@angular/core';
import {Personaje} from '../../models/Personaje';
import { DbzService } from '../services/dbs.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  constructor(private dbzService: DbzService) { }

  ngOnInit(): void {
  }
  
 // @Input() personajes: Personaje[] = [];
   get personajes(){
      return this.dbzService.personajes;
   }
   
}
