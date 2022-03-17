import { HttpErrorResponse } from '@angular/common/http';
import { Action, createReducer, on } from '@ngrx/store';
import produce from 'immer';
import * as DeckActions from './deck.actions';

export const deckFeatureKey = 'deck';

export interface State {
  pending: boolean;
  error: HttpErrorResponse | null;
  data: {
    deckId: string;
    cards: any[];
    remaining: number | null;
  };
}

export const initialState: State = {
  pending: false,
  error: null,
  data: {
    deckId: '',
    cards: [],
    remaining: null,
  },
};

export const reducer = createReducer(
  initialState,

  on(DeckActions.loadDeck, (state: State) =>
    produce(state, (draftState) => {
      draftState.pending = true;
    })
  ),
  on(DeckActions.loadDeckSuccess, (state, action) =>
    produce(state, (draftState) => {
      draftState.pending = false;
      draftState.error = null;
      draftState.data = {
        deckId: action.data.deck_id,
        cards: action.data.cards,
        remaining: action.data.remaining,
      };
    })
  ),
  on(DeckActions.loadDeckFailure, (state, action) =>
    produce(state, (draftState) => {
      draftState.pending = false;
      draftState.error = action.error;
    })
  ),
  on(DeckActions.drawCardSuccess, (state, action) =>
    produce(state, (draftState) => {
      draftState.data.remaining = action.data.remaining;
      draftState.data.cards = [...draftState.data.cards, ...action.data.cards];
    })
  )
);
