import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
// ng g generate component components/peliculas generó:
// el importe del componente en el app.modulo.ts de la aplicacion para poder usar el componente
// la estructura de archvos del componente que son: .html, .ts, .spec.ts y .css
// el hook de ciclo de vida del componenete osea el OnInit, metodo que se ejecuta al iniciar el componente 
export class PeliculasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
