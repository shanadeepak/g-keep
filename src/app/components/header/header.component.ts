import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private curPath: String;
  public bgColor: String;
  public toggleDropdownStat = false;
  constructor(private route: ActivatedRoute, private location: Location, ) {
  }

  ngOnInit() {
   this.curPath = this.location.path().slice(7);
   this.getColor();
  }

  setSelectedRoute(curPath: String) {
    this.curPath = curPath;
    this.getColor();
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
  };

  toggleDropDown() {
    if (this.toggleDropdownStat) {
      this.toggleDropdownStat = false;
    } else {
      this.toggleDropdownStat = true;
    }
  }

}
