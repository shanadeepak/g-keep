import { NotesAction } from '../actions/notes.actions';
import { Note } from '../../model/note.model';

export interface NotesState {
  notes: Note[];
}

export const initialState: NotesState = {
    notes: []
};

export function reducer(state = initialState, action: NotesAction): NotesState {
  switch (action.type) {
    case 'LOAD_NEWS':
      const newNotes: NotesState = {
        notes: action.payload
      };
      return newNotes;
    default:
      return state;
  }
}
