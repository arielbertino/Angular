// Componente inicial
// Todo lo que puedo ir usando en la aplicacion


// Importamos el componente Component del core de angular
// permite usar el decorador @Component para declarar otros componentes
import { Component } from '@angular/core';

// Decorador: nos permite aplicar na serie de atributos y caracteristicas
// a una clase

@Component({
  // nombre del componente
  selector: 'app-root',
  // Html vinculado a este componenete
  templateUrl: './app.component.html',
  // Hoja de estilo por defecto que viene defecto de bienvenida ANGULAR,
  // se podria borra todo y quedaria toda l apagina en blanco
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Propiedad que automaticamente se le pasan a la vista
  // Utilizado para interpolacion o expasion de parametros hacia la vista
  // Se podria ver como un pasaje de parametros
  title = 'proyectoPruebas';
  nombre:string = "Ariel Eugenio Bertino";
}
