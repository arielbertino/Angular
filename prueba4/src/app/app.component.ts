import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba4';
  description = 'Me vuelvo locardo';

  palabra: string="";
  edad: Number =0;
  soltero: Boolean = false;
  // Tipo de datos any pueden recibir cualquier tipo de dato
  // puede haber incosistencias de tipo o de operacion entre tipos
  datos: any;
  amigos: Array<any> =[];
}
