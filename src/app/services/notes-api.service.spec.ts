import { TestBed } from '@angular/core/testing';
import { HttpClientModule  } from '@angular/common/http';
import { NotesActions } from '../store/actions/notes.actions';
import { StoreModule } from '@ngrx/store';
import { NotesApiService } from './notes-api.service';

describe('NotesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule, StoreModule.forRoot({})],
    providers: [
      StoreModule,
      NotesActions
    ]
  }));

  it('should be created', () => {
    const service: NotesApiService = TestBed.get(NotesApiService);
    expect(service).toBeTruthy();
  });
});
