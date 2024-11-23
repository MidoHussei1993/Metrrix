import { createFeature, createReducer, on } from '@ngrx/store';
import { subordinateActions } from './action';
import { Subordinate } from '../../types';

export interface State {
  subordinate: Subordinate[];
}

export const initialState: State = {
  subordinate: [] as Subordinate[],
};

export const subordinateFeature = createFeature({
  name: 'Subordinate',
  reducer: createReducer<State>(
    initialState,
    on(subordinateActions.load, (state) => ({ ...state })),
    on(subordinateActions.loaded, (state, { subordinate }) => ({
      ...state,
      subordinate,
    })),
    on(subordinateActions.removed, () => initialState),
  ),
});
