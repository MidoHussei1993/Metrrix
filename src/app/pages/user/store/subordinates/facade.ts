import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
 import { Observable } from 'rxjs';
   import { map } from 'rxjs/operators';
import { subordinatesSelectors } from './selectors';
import { subordinateActions } from './action';
import { Subordinate } from '../../types';

function deepClone<T>(source$: Observable<T>): Observable<T> {
  return source$.pipe(map((data) => structuredClone(data)));
}

@Injectable({ providedIn: 'root' })
export class SubordinateFacade {
  #isLoaded = false;
  #store = inject(Store);

  get subordinates$(): Observable<Subordinate[]> {
    this.#assertLoaded();
    return this.#store.select(subordinatesSelectors.selectAll);
  }
  #assertLoaded() {
    if (!this.#isLoaded) {
      this.#store.dispatch(subordinateActions.load());
      this.#isLoaded = true;
    }
  } 

removedAll() {
      this.#store.dispatch(subordinateActions.removed());
    }

}
