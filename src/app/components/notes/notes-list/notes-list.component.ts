import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Note } from '../../../model/note.model';
import { NgxSmartModalService } from 'ngx-smart-modal';

import { NotesApiService } from '../../../services/notes-api.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  @Input() myNote: Note;
  constructor(private api: NotesApiService, public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
  }

  archive(note) {
    note.status = 'Archive';
    this.api.updateNote(note._id, note)
    .subscribe(res => {
        this.api.getAllNotes();
      }, (err) => {
        console.log(err);
      });
  }

  makeActive(note) {
    note.status = 'Active';
    this.api.updateNote(note._id, note)
    .subscribe(res => {
        this.api.getAllNotes();
      }, (err) => {
        console.log(err);
      });
  }
  setColor(color, note) {
    note.color = color;
    this.api.updateNote(note._id, note)
    .subscribe(res => {
        this.api.getAllNotes();
      }, (err) => {
        console.log(err);
      });
  }
  setRemind(note, noteRemind) {
    note.remind = noteRemind.value;
    this.api.updateNote(note._id, note)
    .subscribe(res => {
        this.api.getAllNotes();
      }, (err) => {
        console.log(err);
      });
  }

  deleteNote(note) {
    note.status = 'Deleted';
    this.api.updateNote(note._id, note)
    .subscribe(res => {
        this.api.getAllNotes();
      }, (err) => {
        console.log(err);
      });
  }

  deleteForEver(note) {
    this.api.deleteNote(note._id)
    .subscribe(res => {
        this.api.getAllNotes();
      }, (err) => {
        console.log(err);
      });
  }

  openModal(note) {
    if ( note.status !== 'Deleted' ) {
      this.ngxSmartModalService.getModal('noteEditModal' + note._id).open();
    }
  }

  editNote(note) {
    if ( note.title === ''  && note.description === '') {
       // do not close modal
       this.api.getAllNotes();
    } else {
      this.api.updateNote(note._id, note)
    .subscribe(res => {
        this.api.getAllNotes();
        this.closeModal(note._id);
      }, (err) => {
        console.log(err);
      });
    }
  }
  closeModal(id) {
    this.api.getAllNotes();
    this.ngxSmartModalService.getModal('noteEditModal' + id).close();
  }

}
