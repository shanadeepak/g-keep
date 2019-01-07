import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note, createNote } from '../../model/note.model';
import { NotesApiService } from '../../services/notes-api.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { StatusFilterPipe } from '../../pipes/status-filter.pipe';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  public showAll = false;
  public notesForm: FormGroup;
  public submitted = false;
  public allNotes: Note[];
  public activeNotes: Note[];
  public gridType: String;
  private statusFilter: StatusFilterPipe;
  public order: String = 'orderIndex';
  constructor(private formBuilder: FormBuilder, private store: Store<any>, private api: NotesApiService, private orderPipe: OrderPipe) {
    this.statusFilter = new StatusFilterPipe();
  }


  private atleastOneRequired() {
    return (notesForm: FormGroup) => {
      const title = notesForm.controls['title'];
      const description = notesForm.controls['description'];
      if ( title.value === '' && description.value === '') {
        title.setErrors({ atleastOneRequired: true });
      } else if ( title.value === null && description.value === null) {
        title.setErrors({ atleastOneRequired: true });
      } else {
        title.setErrors(null);
      }
    };
  }

  ngOnInit() {
    this.allNotes = [];
    this.notesForm = this.formBuilder.group({
      title: '',
      description: '',
    }, {
      validator: this.atleastOneRequired()
    });

    this.api.getAllNotes();

    this.store.select('notes').subscribe(data => {
      this.allNotes =  data.notes;
      this.activeNotes = this.statusFilter.transform(this.allNotes, 'status', 'Active');
      this.activeNotes = this.orderPipe.transform(this.activeNotes, this.order);
    });

    this.store.select('listView').subscribe(data => {
      this.gridType =  data.gridType;
    });
  }

  dropEvent(event: CdkDragDrop<Note[]>) {
    console.log(event.previousIndex,  event.currentIndex);
    moveItemInArray(this.activeNotes, event.previousIndex, event.currentIndex);
    this.updateNoteIndex(this.activeNotes);
  }

  updateNoteIndex(notes) {
    let index = 0;
    notes.forEach( noteItem => {
      noteItem.orderIndex = index;
      this.api.updateNote(noteItem._id, noteItem)
      .subscribe(res => {
        this.api.getAllNotes();
      }, (err) => {
        console.log(err);
      });
      index++;
    });
    this.api.getAllNotes();
  }
  elFocusAll() {
    this.showAll = true;
  }
  listSorted($event) {
    console.log($event);
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.notesForm.invalid) {
        return;
    }
    const myNote = createNote(this.notesForm.value.title, this.notesForm.value.description);
    this.allNotes.push(myNote);
    this.api.addNote(myNote)
    .subscribe(res => {
        this.api.getAllNotes();
      }, (err) => {
        console.log(err);
      });
    this.notesForm.reset();
    this.showAll = false;
  }
}
