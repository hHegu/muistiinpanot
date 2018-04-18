import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NoteService {

    public modalToggler: Subject<boolean>;

    constructor() {
        this.modalToggler = new Subject();
    }

}
