import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from '../../model/note.model';
import { NotesApiService } from '../../services/notes-api.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  public showAll = false;
  public notesForm: FormGroup;
  public submitted = false;
  public Notes: Note[];
  public gridType: String;
  constructor(private formBuilder: FormBuilder, private store: Store<any>, private api: NotesApiService) {
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
    this.Notes = [];
    this.notesForm = this.formBuilder.group({
      title: '',
      description: '',
    }, {
      validator: this.atleastOneRequired()
    });

    this.api.getAllNotes();

    this.store.select('notes').subscribe(data => {
      this.Notes =  data.notes;
    });

    this.store.select('listView').subscribe(data => {
      this.gridType =  data.gridType;
    });
  }

  elFocusAll() {
    this.showAll = true;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.notesForm.invalid) {
        return;
    }
    const myNote = new Note(this.notesForm.value.title, this.notesForm.value.description);
    this.Notes.push(myNote);
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
