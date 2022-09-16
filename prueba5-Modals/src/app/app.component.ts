import { Component, OnInit } from '@angular/core';


declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'prueba5-Modals';
  forModal: any;
  mensajeModal='Mensaje que viene de la logica';


  constructor(){}

  ngOnInit(): void {
    this.forModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
  }

  openFormModal(){
    this.forModal.show();
  }

  saveSomeThing(){
    this.forModal.hide();
  }
}
