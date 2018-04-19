import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Note } from '../models/note';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NoteService {

    public notes: Note[];
    public modalToggler: Subject<Note>;
    public notesLoaded: boolean;

    private apiUrl: string = "https://aqueous-plateau-54743.herokuapp.com";

    constructor(private http: HttpClient) {
        this.modalToggler = new Subject();
        this.getAllNotes().subscribe((notes: Note[]) => { this.notes = notes; this.notesLoaded = true; });
    }

    public getAllNotes(): Observable<Object> {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        })

        return this.http.get(this.apiUrl + "/note/all");
    }

    public postNote(note: Note): Observable<Object> {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        })
        let body = JSON.stringify(note);

        return this.http.post(this.apiUrl + "/note", body, { headers });
    }

    public removeNote(note: Note) {
        return this.http.delete(this.apiUrl + "/note?id=" + note.id);
    }

}
