// Modulo principal donde estan declarados los componentes, tambien los imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';

@NgModule({
  // Aca se cagan los componentes
  declarations: [
    AppComponent,
    MiComponenteComponent,
    SegundoComponenteComponent
  ],
  // Aca se importa otros modulos
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // Aca se importan servicios
  providers: [],
  // Aca se define que componente va a ser el principal o por el cual se va arrancar la aplicacion
  bootstrap: [AppComponent]
})
export class AppModule { }
