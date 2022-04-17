import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acumulador',
  templateUrl: './acumulador.component.html',
  styleUrls: ['./acumulador.component.css']
})
export class AcumuladorComponent implements OnInit {
  titulo:string = 'Contador';
  contador:number = 0;
  base:number = 0;

  constructor() { }

  ngOnInit(): void {
  }
 
  acumular(numero:number){
    this.contador += numero;
  }

}
