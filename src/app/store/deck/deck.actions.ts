import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { DeckApiResponse } from 'src/app/models/deck-api-response';

export const loadDeck = createAction('[Deck] Load Deck');

export const loadDeckSuccess = createAction(
  '[Deck] Load Deck Success',
  props<{ data: DeckApiResponse }>()
);

export const loadDeckFailure = createAction(
  '[Deck] Load Deck Failure',
  props<{ error: HttpErrorResponse }>()
);

export const drawCards = createAction('[Deck] Draw Cards');

export const drawCardSuccess = createAction(
  '[Deck] Draw Card Success',
  props<{ data: DeckApiResponse }>()
);

export const drawCardsSuccess = createAction('[Deck] Draw Cards Success');

export const drawCardsFailure = createAction(
  '[Deck] Draw Cards Failure',
  props<{ error: HttpErrorResponse }>()
);
