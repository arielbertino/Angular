// Modulo principal, luego se pueden definir mas modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiComponente } from './components/mi-componente/mi-componente.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';

@NgModule({
  // Ademas de importalo como se hizo mas arriba se debe declararlo
  // en la seccion declarations
  declarations: [
    AppComponent,
    MiComponente,
    PeliculasComponent,
    PruebasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
