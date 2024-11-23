import { createSelector } from '@ngrx/store'; 
import { subordinateFeature } from './reducer';
import { Subordinate } from '../../types';
const selectAll = subordinateFeature.selectSubordinate;

const selectSubordinates = () =>
  createSelector(selectAll, (state: Subordinate[]) =>
    state
  );

export const subordinatesSelectors = {
  selectAll,
  selectSubordinates,
};
