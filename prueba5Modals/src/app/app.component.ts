import { Component } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-bootstrap-modal-demo';
  closeResult!: string;
  modalOptions:NgbModalOptions;


  constructor( private modalService: NgbModal) { 
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    }
  }
  
 
  private getDismissReason(reason: any): string {
    if (reason === this.modalService.ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  openModal() {
    const modalRef = this.modalService.open(MyBootstrapModalComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        keyboard: true,
        backdrop: 'static'
      });

    let data = {
      prop1: 'Some Data',
      prop2: 'From Parent Component',
      prop3: 'This Can be anything'
    }

    modalRef.componentInstance.fromParent = data;
    
    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
    });
  }

  open() {
    const modalRef = this.modalService.open(MymodalComponent);
    modalRef.componentInstance.my_modal_title = 'I your title';
    modalRef.componentInstance.my_modal_content = 'I am your content';
  }


content(content: any) {
  throw new Error('Function not implemented.');
}


MyBootstrapModalComponent(MyBootstrapModalComponent: any, arg1: { scrollable: true; windowClass: string; keyboard: true; backdrop: "static"; }) {
  throw new Error('Function not implemented.');
}


MymodalComponent(MymodalComponent: any) {
  throw new Error('Function not implemented.');
}

}
