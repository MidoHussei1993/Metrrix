import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Subordinate } from '../../types';
 
export const subordinateActions = createActionGroup({
  source: 'subordinates',
  events: {
    load: emptyProps(),
    loaded: props<{ subordinate:Subordinate[] }>(), 
    removed: emptyProps(),
  },
});
