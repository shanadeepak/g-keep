import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { reducer } from './notes.reducer';
import { listView } from './grid-type.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  notes: reducer,
  listView: listView
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
