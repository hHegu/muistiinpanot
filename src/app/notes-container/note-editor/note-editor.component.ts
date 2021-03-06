import { Component, Input, ViewChild, ElementRef } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs/Subject';
import { NoteService } from '../../services/note.service';
import { Note } from '../../models/note';

@Component({
    selector: 'note-editor',
    templateUrl: './note-editor.component.html'
})
export class NoteEditorComponent {

    @ViewChild("content") modalContent: ElementRef;

    private editedNote: Note;
    private infoMessage: string;
    closeResult: string;

    constructor(public modalService: NgbModal, public noteService: NoteService) {
        this.noteService.modalToggler.subscribe((note: Note) => this.open(note))
    }

    open(note: Note) {
        this.editedNote = note;
        this.modalService.open(this.modalContent).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        this.infoMessage = "";
        this.editedNote = new Note(null, null, null);
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    saveNote() {
        this.noteService.postNote(this.editedNote).subscribe((note: Note) => {
            this.noteService.notes.push(note);
            this.editedNote = new Note(null, null, null);
            this.infoMessage = "Muistiinpano tallennettu."

        });
    }
}