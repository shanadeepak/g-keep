import { NotesAction } from '../actions/notes.actions';
import { reducer, initialState, NotesState } from './notes.reducer';
import { Note } from '../../model/note.model';

describe('Notes Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('a known action', () => {
    it('should return the new notes list', () => {
      const noteList: Note[] = [];
      const action = {
        type: 'LOAD_NOTES',
        payload: noteList
      };
      const resultToBe: NotesState = {
        notes: action.payload
      };

      const result = reducer(initialState, action);

      expect(result.notes).toBe(resultToBe.notes);
    });
  });
});
