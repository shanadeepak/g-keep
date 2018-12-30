import { Component, OnInit } from '@angular/core';
import { Note } from '../../note.model';
import { NotesApiService } from '../../services/notes-api.service';
@Component({
  selector: 'app-recycle',
  templateUrl: './recycle.component.html',
  styleUrls: ['./recycle.component.scss']
})
export class RecycleComponent implements OnInit {
  public Notes: Note[];
  constructor(private api: NotesApiService) { }

  ngOnInit() {
    this.api.getNotes()
    .subscribe(res => {
      this.Notes = res;
      console.log(this.Notes);
    }, err => {
      console.log(err);
    });
  }

}
