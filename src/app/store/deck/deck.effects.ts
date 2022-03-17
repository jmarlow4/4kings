import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  map,
  concatMap,
  withLatestFrom,
  filter,
  takeUntil,
} from 'rxjs/operators';
import { interval, of } from 'rxjs';

import * as DeckActions from './deck.actions';
import { DeckService } from 'src/app/services/deck.service';
import { selectHas4Kings, selectDeckId } from './deck.selectors';
import { Store } from '@ngrx/store';
import { DeckApiResponse } from 'src/app/models/deck-api-response';

@Injectable()
export class DeckEffects {
  constructor(
    private actions$: Actions,
    private deckService: DeckService,
    private store: Store
  ) {}

  loadDeck$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DeckActions.loadDeck),
      concatMap(() =>
        this.deckService.initDeck().pipe(
          map((data) => DeckActions.loadDeckSuccess({ data })),
          catchError((error) => of(DeckActions.loadDeckFailure({ error })))
        )
      )
    );
  });

  drawCards$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DeckActions.loadDeckSuccess),
      concatMap((_) =>
        interval(500).pipe(
          takeUntil(
            this.store
              .select(selectHas4Kings)
              .pipe(filter((has4Kings) => has4Kings))
          )
        )
      ),
      withLatestFrom(this.store.select(selectDeckId)),
      concatMap(([_, deckId]) => this.deckService.drawCards(deckId, 1)),
      map((cardRes: DeckApiResponse) =>
        DeckActions.drawCardSuccess({ data: cardRes })
      )
    );
  });
}
