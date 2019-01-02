import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';
import { NotesActions } from '../../store/actions/notes.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private curPath: String;
  public bgColor: String;
  public toggleDropdownStat = false;
  public gridType: String;
  constructor(private route: ActivatedRoute, private location: Location, private store: Store<any>, private notesAction: NotesActions ) {
    this.notesAction = new NotesActions();
    this.gridType = 'grid';
    this.store.dispatch(this.notesAction.LoadGridType('grid'));
  }

  ngOnInit() {
   this.curPath = this.location.path().slice(7);
   this.getColor();
  }

  changeGridType() {
    if (this.gridType === 'grid') {
      this.store.dispatch(this.notesAction.LoadGridType('full'));
      this.gridType = 'full';
    } else {
      this.store.dispatch(this.notesAction.LoadGridType('grid'));
      this.gridType = 'grid';
    }
  }

  setSelectedRoute(curPath: String) {
    this.curPath = curPath;
    this.getColor();
    this.toggleDropDown();
  }
  getColor() {
    switch (this.curPath) {
      case 'notes':
        this.bgColor = 'blue';
      break;
      case 'archive-notes':
        this.bgColor = 'green';
      break;
      case 'recycle-bin':
        this.bgColor = 'red';
      break;
      default:
        this.bgColor = 'blue';
      break;
    }
  }

  toggleDropDown() {
    if (this.toggleDropdownStat) {
      this.toggleDropdownStat = false;
    } else {
      this.toggleDropdownStat = true;
    }
  }

}
