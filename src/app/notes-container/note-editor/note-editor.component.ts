import { Component, Input, ViewChild, ElementRef } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs/Subject';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'note-editor',
  templateUrl: './note-editor.component.html'
})
export class NoteEditorComponent {

  @ViewChild("content") modalContent: ElementRef;

  closeResult: string;

  constructor(private modalService: NgbModal, private noteService: NoteService) {
    console.log("initializing noteeditor");
    this.noteService.modalToggler.subscribe(() => this.open())
  }

  open() {
    console.log("opening modal...");
    this.modalService.open(this.modalContent).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}