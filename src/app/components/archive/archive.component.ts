import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Note } from '../../model/note.model';
import { NotesApiService } from '../../services/notes-api.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  public allNotes: Note[];
  public gridType: String;
  constructor(private store: Store<any>, private api: NotesApiService) { }

  ngOnInit() {
    this.api.getAllNotes();

    this.store.select('notes').subscribe(data => {
      console.log(data);
      this.allNotes =  data.notes;
    });
    this.store.select('listView').subscribe(data => {
      this.gridType =  data.gridType;
    });
  }

}
