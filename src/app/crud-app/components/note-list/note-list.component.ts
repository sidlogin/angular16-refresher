import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Note } from '../../interfaces/note';
import { NotesService } from '../../services/notes.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit, OnDestroy {
  notes$: Observable<Note[]> = this.noteService.getNotesObservable();
  private readonly $destroy = new Subject<void>();
  @Output() selectedNote = new EventEmitter<Note>();

  constructor(private noteService: NotesService) { }

  ngOnInit(): void {}

  editNote(note: Note): void {
    this.selectedNote.emit(note);
    this.noteService.setEditable(true);
  }

  deleteNote(id: number): void {
    this.noteService.deleteNote(id);
  }

  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
