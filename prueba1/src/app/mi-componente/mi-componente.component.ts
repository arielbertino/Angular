import { Component, OnInit , OnChanges, SimpleChanges} from '@angular/core';
// esto se pòdria ver como una analogia de las calses de java
// claramente con sus diferencias de conceptos clase vs componente


@Component({
  // Con este selector, que consideramos que es el nombre o etiqueta del compoenete
  // que aqui esta declarado, podemos llamarlo o usarlo en otro lado
  selector: 'mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit , OnChanges{
  
  // Se podrian definir variable publica privada, metodos, todo lo que uno
  // quiera o vaya necesitando

  // !: indica que att no nececita inicializacion
  edad: number;
  nombres:Array<string>;

  // Constructor del componente
  constructor() { 
    //this.edad = 18;
    this.edad = 18;

    this.nombres = ['Rolo', 'Magoya', 'Montoto', 'Rulfo', 'Barbara']
  }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented because we are ugly.');
  }

  // Primera funcio que se ejecuta
  ngOnInit(): void {
    // Podriamos mostrar un alert cuando se inicialice el componente
    // por ejemplo de la siguiente manera, esto generará una alerta
    // propia de chrome 
    // alert('Componente mi-componenete se ha cargado de manera superlativa');
  
    // Otra forma es usando logs de la siguiente manera
    // this.edad = 18;

    console.log("Se ha cargado el componente mi componente correctamente");
  }

  
  aumentarEdad(){
    this.edad = this.edad + 1;
  }
  disminuirEdad(){
    this.edad = this.edad - 1;
  }

}
