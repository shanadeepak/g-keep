import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Note } from '../../model/note.model';
export class NotesAction implements Action {
    type: string;
    payload: Note[];
}

export class GridTypeAction implements Action {
    type: string;
    payload: string;
}

@Injectable()
export class NotesActions {
    static LOAD_NOTES = 'LOAD_NEWS';
    static LOAD_GRID_TYPE = 'LOAD_GRID_TYPE';

    LoadNotes(list: Note[]): NotesAction {
        return {
            type: NotesActions.LOAD_NOTES,
            payload: list
        };
    }

    LoadGridType(gridType: string): GridTypeAction {
        return {
            type: NotesActions.LOAD_GRID_TYPE,
            payload: gridType
        };
    }
}
