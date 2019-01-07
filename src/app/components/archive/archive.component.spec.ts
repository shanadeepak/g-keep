import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveComponent } from './archive.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StatusFilterPipe } from '../../pipes/status-filter.pipe';
import { NotesListComponent } from '../notes/notes-list/notes-list.component';
import { NotesActions } from '../../store/actions/notes.actions';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { PopoverModule } from 'ngx-popover';
import { NgxSmartModalModule } from 'ngx-smart-modal';

describe('ArchiveComponent', () => {
  let component: ArchiveComponent;
  let fixture: ComponentFixture<ArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveComponent, StatusFilterPipe, NotesListComponent ],
      imports: [
        FormsModule,
        HttpClientModule,
        PopoverModule,
        NgxSmartModalModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        StoreModule.forRoot({})
      ],
      providers: [
        StoreModule,
        NotesActions
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
