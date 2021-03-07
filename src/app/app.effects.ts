import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { increment, decrement, clear, changeUpdatedAt, updatedAtSelector } from './reducers/counter';

@Injectable()
export class AppEffects {
  updatedAt$ = createEffect(() => this.actions$.pipe(
    ofType(increment, decrement, clear),
    map(() => changeUpdatedAt({updatedAt: Date.now()}))
  ))
  constructor(private actions$: Actions) {

  }
}
