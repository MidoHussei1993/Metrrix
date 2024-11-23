import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { subordinateEffects } from './subordinates/effects';
import { subordinateFeature } from './subordinates/reducer';


export const userModuleProviders = [
   provideState(subordinateFeature),
   provideEffects(subordinateEffects),
];
