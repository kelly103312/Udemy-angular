import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  //styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  nombre: string ="";
  edad: number = 0;
  
  constructor() { 
    this.nombre = "name_here";
    this.edad = 0;
  }

  ngOnInit(): void {
  }

}
