import { Component } from '@angular/core';
import { Note } from './interfaces/note';

@Component({
  selector: 'app-crud-app',
  templateUrl: './crud-app.component.html',
  styleUrls: ['./crud-app.component.scss']
})
export class CrudAppComponent {
  selectedNote!: Note;

  selectNote(note: any): void {
    this.selectedNote = note;
  }
}
