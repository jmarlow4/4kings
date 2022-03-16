import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import { initApp, initAppSuccess } from './init.actions';

@Injectable()
export class InitEffects {
  constructor(private actions$: Actions) {}

  $onInitApp = createEffect(() =>
    this.actions$.pipe(
      ofType(initApp),
      map(() => {
        return initAppSuccess({ initialized: true });
      })
    )
  );
}
