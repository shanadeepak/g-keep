import { GridTypeAction } from '../actions/notes.actions';

export interface GridTypeState {
  gridType: string;
}

export const initialState: GridTypeState = {
  gridType: 'grid'
};

export function listView(state = initialState, action: GridTypeAction): GridTypeState {
  switch (action.type) {
    case 'LOAD_GRID_TYPE':
      const newGridType: GridTypeState = {
        gridType: action.payload
      };
      return newGridType;
    default:
      return state;
  }
}
