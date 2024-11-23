import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {   map, switchMap } from 'rxjs/operators'; 
 import { subordinateActions } from './action';
import { Subordinate } from '../../types';

@Injectable()
export class subordinateEffects {
  private url = 'http://194.163.169.47:5000/subordinates.php';

  #actions$ = inject(Actions);
  #store = inject(Store);
  #http = inject(HttpClient);
  #router = inject(Router);

 

  load$ = createEffect(() =>
    this.#actions$.pipe(
      ofType(subordinateActions.load),
      switchMap(() => this.#http.get<{data:Subordinate[]}>(this.url)),
      map(({data}:{data:Subordinate[]}) => { 
         console.log("🚀 ~ subordinateEffects ~ map ~ res:", data)
         return subordinateActions.loaded({
          subordinate: data
          })
      })
    )
  );
}
