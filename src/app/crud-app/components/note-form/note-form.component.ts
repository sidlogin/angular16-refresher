import { Component, Input, Output, OnChanges, OnInit, SimpleChange, SimpleChanges, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from '../../interfaces/note';
import { NotesService } from '../../services/notes.service';
import { Subject, distinctUntilChanged, takeUntil } from 'rxjs';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit, OnChanges, OnDestroy {
  @Input() selectedNote!: Note;

  noteForm!: FormGroup;
  isEdit!: boolean;
  private readonly $destroy = new Subject<void>();
  
  constructor(
    private fb: FormBuilder,
    private noteService: NotesService
  ) {
    this.noteService.getEditable()
    .pipe(
      distinctUntilChanged(),
      takeUntil(this.$destroy)
    )
    .subscribe((isEdit: boolean) => {
      this.isEdit = isEdit;
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['selectedNote']?.currentValue) {
      const receivedNote = changes['selectedNote']?.currentValue as Note;
      this.noteForm.patchValue({
        ...this.noteForm.value,
        ...receivedNote
      });
    }
  }

  ngOnInit(): void {
    this.noteForm = this.fb.group({
      id: new Date().getTime(),
      title: ['', [Validators.required, Validators.minLength(4)]],
      content: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.noteForm.invalid) {
      return;
    }
    const note: Note = this.noteForm.value;
    if (this.isEdit) {
      this.noteService.updateNote(note);
      this.noteService.setEditable(false);
    } else {
      this.noteService.createNote(note);
    }

    this.noteForm.reset();
  }

  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
