import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Note } from '../../model/note.model';
export class NotesAction implements Action {
    type: string;
    payload: Note[];
}

@Injectable()
export class NotesActions {
    static LOAD_NOTES = 'LOAD_NEWS';
    static FILTER_STATUS = 'FILTER_STATUS';

    LoadNotes(list: Note[]): NotesAction {
        return {
            type: NotesActions.LOAD_NOTES,
            payload: list
        };
    }
}
