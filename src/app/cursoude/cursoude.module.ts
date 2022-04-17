import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcumuladorComponent } from './acumulador/acumulador.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AcumuladorComponent,
    
  ],
  exports:[
    AcumuladorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CursoudeModule { }
