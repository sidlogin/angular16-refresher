import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private notes: Note[] = [];
  private notesSubject = new BehaviorSubject<Note[]>([]);

  private isEdit = new BehaviorSubject<boolean>(false);
  constructor() { }

  getNotesObservable(): Observable<Note[]> {
    return this.notesSubject.asObservable();
  }

  createNote(note: Note): void {
    if (note) {
      note.id = this.notes.length + 1;
      this.notes.push(note);
      this.notesSubject.next(this.notes);
    }
  }

  deleteNote(id: number): void {
    this.notes = this.notes.filter(note => note.id !== id);
    this.notesSubject.next(this.notes);
  }

  setEditable(isEdit: boolean): void {
    this.isEdit.next(isEdit);
  }

  getEditable(): Observable<boolean> {
    return this.isEdit.asObservable();
  }

  updateNote(note: Note): void {
    const index = this.notes.findIndex(n => n.id === note.id);
    if (index !== -1) {
      this.notes[index] = note;
      this.notesSubject.next(this.notes);
    }
  }
}
