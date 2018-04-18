import { Component, Input } from '@angular/core';
import { Note } from '../../models/note';

@Component({
  selector: 'note',
  templateUrl: './note.component.html'
})
export class NoteComponent {
  @Input() note: Note;

  constructor(){
    this.note = new Note(0,"Ruokalista", "Maito, muna, leipä, juusto, margariini");
  }
}
