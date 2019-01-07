import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesListComponent } from './notes-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { NotesActions } from '../../../store/actions/notes.actions';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { PopoverModule } from 'ngx-popover';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';

describe('NotesListComponent', () => {
  let component: NotesListComponent;
  let fixture: ComponentFixture<NotesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesListComponent ],
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
        NotesActions,
        NgxSmartModalService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
