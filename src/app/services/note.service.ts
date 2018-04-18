import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Note } from '../models/note';

@Injectable()
export class NoteService {

    public notes: Note[];
    public modalToggler: Subject<Note>;

    constructor() {
        this.modalToggler = new Subject();
        this.notes = [new Note(0, "Ruokalista", "Maito, muna, leipä, juusto, margariini"),
        new Note(0, "Ruokalista", "Maito, muna, leipä, juusto, margariini")];
    }

}
