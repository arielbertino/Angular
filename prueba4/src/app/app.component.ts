import { Component } from '@angular/core';
import { PersonajesService } from './services/personajes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
/* 
  Esto es hasta la parte 10 inclusive

  title = 'prueba4';
  description = 'Me vuelvo locardo';

  palabra: string="";
  edad: Number =0;
  soltero: Boolean = false;
  // Tipo de datos any pueden recibir cualquier tipo de dato
  // puede haber incosistencias de tipo o de operacion entre tipos
  datos: any;
  amigos: Array<any> =[];
  datoJSON : any;
*/
  personajes: any = {};
  title: any;

  constructor(private service: PersonajesService){

  }

  ngOnInit(): void { 

    this.service.getAllPersonaje().subscribe(personajes => {
      this.personajes = personajes.results;
      console.log(this.personajes);
    })
/*   

    Esto es hasta la parte 10 inclusive
    this.palabra = "mis huevos";
    this.edad = 28;
    this.soltero = false;
    this.datos = "Te tiro algunos datitos groso es para ir probando";
    this.amigos = [true, "hola", 2 , 185, [1,2,3,4,5]];
    this.datoJSON = [{edad:28, fasosFumados:"pocos" ,alcoholTomado:"muchisimo", tranquilo: true},
                     {edad:28, fasosFumados:"algunos" ,alcoholTomado:"poco", tranquilo: true},
                     {edad:28, fasosFumados:"ninguno" ,alcoholTomado:"nada", tranquilo: false},
                     {edad:28, fasosFumados:"se pasó" ,alcoholTomado:"muchisimo", tranquilo: true},
                     {edad:28, fasosFumados:"no tiene ni idea" ,alcoholTomado:"la sabe toda", tranquilo: false} ];
*/


  }

}
