import { Component } from '@angular/core';
import { Note } from '../models/note';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'notes-container',
  templateUrl: './notes-container.component.html'
})
export class NotesContainerComponent {

  private notes: Note[];
  
  constructor(){
    this.notes = [new Note(0,"Ruokalista", "Maito, muna, leipä, juusto, margariini"),
    new Note(0,"Ruokalista", "Maito, muna, leipä, juusto, margariini")];
  }

}
