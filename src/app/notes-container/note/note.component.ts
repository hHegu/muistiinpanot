import { Component, Input } from '@angular/core';
import { Note } from '../../models/note';
import { NoteService } from '../../services/note.service';

@Component({
    selector: 'note',
    templateUrl: './note.component.html'
})
export class NoteComponent {
    @Input() note: Note;

    constructor(private noteService: NoteService) {
    }

    removeNote() {
        this.noteService.removeNote(this.note).subscribe(() => {
            let index = this.noteService.notes.findIndex(note => note.id == this.note.id);
            this.noteService.notes.splice(index, 1);
        })

    }
}
