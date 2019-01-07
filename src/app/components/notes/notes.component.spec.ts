import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesComponent } from './notes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StatusFilterPipe } from '../../pipes/status-filter.pipe';
import { OrderPipe } from 'ngx-order-pipe';
import { NotesListComponent } from '../notes/notes-list/notes-list.component';
import { NotesActions } from '../../store/actions/notes.actions';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { PopoverModule } from 'ngx-popover';
import { NgxSmartModalModule } from 'ngx-smart-modal';

describe('NotesComponent', () => {
  let component: NotesComponent;
  let fixture: ComponentFixture<NotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesComponent, NotesListComponent, OrderPipe, StatusFilterPipe],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        PopoverModule,
        NgxSmartModalModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        StoreModule.forRoot({})
      ],
      providers: [
        OrderPipe,
        StoreModule,
        NotesActions
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.notesForm.valid).toBeFalsy();
  });

  it('expect atleast one field should be presenting while submiting form', () => {
    expect(component.notesForm.valid).toBeFalsy();
    component.notesForm.controls['title'].setValue('');
    component.notesForm.controls['description'].setValue('');
    expect(component.notesForm.valid).toBeFalsy();

    component.notesForm.controls['title'].setValue('my note title');
    component.notesForm.controls['description'].setValue('');
    expect(component.notesForm.valid).toBeTruthy();

    component.notesForm.controls['title'].setValue('');
    component.notesForm.controls['description'].setValue('my note description');
    expect(component.notesForm.valid).toBeTruthy();
  });

  it('expect added note should be present in the note list array after submiting the form', () => {
    component.notesForm.controls['title'].setValue('my note title');
    component.notesForm.controls['description'].setValue('my note description');
    expect(component.notesForm.valid).toBeTruthy();
    component.onSubmit();
    // Now we can check to make sure the emitted value is correct
    expect(component.allNotes[component.allNotes.length - 1].title).toBe('my note title');
    expect(component.allNotes[component.allNotes.length - 1].description).toBe('my note description');
  });
});
