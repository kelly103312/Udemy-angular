import { Injectable } from "@angular/core";
import { Personaje } from "src/app/models/Personaje";

@Injectable()
export class DbzService{
    private _personajes: Personaje[] = [];

    get personajes():Personaje[]{
        //Buena practica. Pues no manda el objeto por referencia sino que crea otro
        return [...this._personajes];
    }


    constructor(){
        console.log('Services');
        
    }

    agregarPersonaje( personaje: Personaje){
        this._personajes.push(personaje);
    }
}