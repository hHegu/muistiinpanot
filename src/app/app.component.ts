import { Component } from '@angular/core';
import { NoteService } from './services/note.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    constructor(private noteService: NoteService) {
        
    }

    public createNew(){
        this.noteService.modalToggler.next(true);
    }

}
