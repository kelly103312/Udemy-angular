import { Component, OnInit } from '@angular/core';

import {Personaje} from '../../models/Personaje';
import { DbzService } from '../services/dbs.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit(): void {
  }
  nuevo: Personaje = {
      nombre: '',
      puntaje: 0
  }



}
