import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CrudAppRoutingModule } from './crud-app-routing.module';
import { CrudAppComponent } from './crud-app.component';
import { NoteFormComponent } from './components/note-form/note-form.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NotesService } from './services/notes.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrudAppComponent,
    NoteFormComponent,
    NoteListComponent
  ],
  imports: [
    CommonModule,
    CrudAppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [NotesService]
})
export class CrudAppModule { }
