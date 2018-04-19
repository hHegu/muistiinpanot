import { Component } from '@angular/core';
import { Note } from '../models/note';
import { Subject } from 'rxjs/Subject';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'notes-container',
  templateUrl: './notes-container.component.html'
})
export class NotesContainerComponent {

  constructor(public noteService: NoteService) {

  }

  public createNew() {
    this.noteService.modalToggler.next(new Note(null, null, null));
  }

}
