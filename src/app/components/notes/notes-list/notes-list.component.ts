import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../../note.model';

import { NotesApiService } from '../../../services/notes-api.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  @Input() myNote: Note;
  constructor(private api: NotesApiService) { }

  ngOnInit() {
  }

  archive(note) {
    note.status = 'Archive';
    this.api.updateNote(note._id, note)
    .subscribe(res => {
        //let id = res['_id'];
        console.log(res);
      }, (err) => {
        console.log(err);
      });
  }

  makeActive(note) {
    note.status = 'Active';
    this.api.updateNote(note._id, note)
    .subscribe(res => {
        //let id = res['_id'];
        console.log(res);
      }, (err) => {
        console.log(err);
      });
  }

  deleteNote(note) {
    note.status = 'Deleted';
    this.api.updateNote(note._id, note)
    .subscribe(res => {
        //let id = res['_id'];
        console.log(res);
      }, (err) => {
        console.log(err);
      });
  }

}
