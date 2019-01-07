import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecycleComponent } from './recycle.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StatusFilterPipe } from '../../pipes/status-filter.pipe';
import { NotesListComponent } from '../notes/notes-list/notes-list.component';
import { NotesActions } from '../../store/actions/notes.actions';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { PopoverModule } from 'ngx-popover';
import { NgxSmartModalModule } from 'ngx-smart-modal';

describe('RecycleComponent', () => {
  let component: RecycleComponent;
  let fixture: ComponentFixture<RecycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecycleComponent, StatusFilterPipe, NotesListComponent ],
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
    fixture = TestBed.createComponent(RecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
