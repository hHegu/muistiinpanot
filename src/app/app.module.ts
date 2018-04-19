import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NotesContainerComponent } from './notes-container/notes-container.component';
import { NoteComponent } from './notes-container/note/note.component';
import { NoteEditorComponent } from './notes-container/note-editor/note-editor.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoteService } from './services/note.service';


@NgModule({
  declarations: [
    AppComponent,
    NotesContainerComponent,
    NoteComponent,
    NoteEditorComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
