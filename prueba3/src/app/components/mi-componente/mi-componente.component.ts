import { Component } from "@angular/core";
import { takeWhile } from "rxjs";

@Component({
    selector:'mi-componente',
    templateUrl: './mi-componente.component.html'
})

export class MiComponente{

    public titulo: string;
    public comentario: string;
    public year: number;

    constructor(){
        // Se podria guiar por eventos cualquier logica eu uno quiera que vaya cambiando valores
        // de estas variables de la clae para ir actualizando la vista
        this.titulo = "Hola mundo, soy MI COMPONENTE desde la variable de clase a la vista";
        this.comentario ="Esta es mi primer componente desde la variable de clase a la vista";
        this.year=2022;
        console.log("Componente mi-componente cargado !!");
        console.log(this.titulo);
        console.log(this.comentario);
        console.log(this.year);
    }
}