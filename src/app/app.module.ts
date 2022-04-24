import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CursoudeModule } from './cursoude/cursoude.module';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CursoudeModule,
    HeroesModule,
    DbzModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
