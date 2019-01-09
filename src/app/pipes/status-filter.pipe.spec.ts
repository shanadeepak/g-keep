import { StatusFilterPipe } from './status-filter.pipe';
import { Note } from '../model/note.model';
import { mockNotes } from '../shared/mockData';
describe('Status Filter Pipe', () => {
    let statFilterPipe: StatusFilterPipe;
    beforeEach(() => {
        statFilterPipe = new StatusFilterPipe();
    });

    it('should return active notes', () => {
        const activeNotes: Note[] = [mockNotes[0]];
        expect(statFilterPipe.transform(mockNotes, 'status', 'Active')[0].title).toBe(activeNotes[0].title);
    });

    it('should return archive notes', () => {
        const activeNotes: Note[] = [mockNotes[1]];
        expect(statFilterPipe.transform(mockNotes, 'status', 'Archive')[0].title).toBe(activeNotes[0].title);
    });

    it('should return deleted notes', () => {
        const activeNotes: Note[] = [mockNotes[2]];
        expect(statFilterPipe.transform(mockNotes, 'status', 'Deleted')[0].title).toBe(activeNotes[0].title);
    });

    it('should return empty list if no status provided', () => {
        expect(statFilterPipe.transform(mockNotes, '', '').length).toBe(0);
    });
});