import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { Observable } from 'rxjs';
import { CardApiResponse } from 'src/app/models/card-api-response';
import { CardValues } from 'src/app/models/card-values.array';
import { DisplayCard } from 'src/app/models/display-card';
import { SuitsEnum } from 'src/app/models/suits.enum';
import * as fromDeck from './deck.reducer';

export const selectDeckState = createFeatureSelector<fromDeck.State>(
  fromDeck.deckFeatureKey
);

export const selectDeckData = createSelector(
  selectDeckState,
  (deckState: fromDeck.State) => {
    return deckState.data;
  }
);

export const selectDeckId = createSelector(
  selectDeckState,
  (deckState: fromDeck.State) => {
    return deckState.data.deckId;
  }
);

export const selectHas4Kings = createSelector(
  selectDeckState,
  (deckState: fromDeck.State) => {
    return (
      deckState.data.cards.filter(
        (card: CardApiResponse) => card.value === 'KING'
      ).length === 4
    );
  }
);

export const selectHeartsDisplayCards = createSelector(
  selectDeckState,
  (deckState: fromDeck.State): DisplayCard[] => {
    return deckState.data.cards
      .filter((card: CardApiResponse) => card.suit === 'HEARTS')
      .map(
        (card: CardApiResponse): DisplayCard => ({
          suit: SuitsEnum.HEARTS,
          value: card.value,
          order: CardValues.indexOf(card.value),
          color: 'red',
        })
      );
  }
);

export const selectDiamondsDisplayCards = createSelector(
  selectDeckState,
  (deckState: fromDeck.State): DisplayCard[] => {
    return deckState.data.cards
      .filter((card: CardApiResponse) => card.suit === 'DIAMONDS')
      .map(
        (card: CardApiResponse): DisplayCard => ({
          suit: SuitsEnum.DIAMONDS,
          value: card.value,
          order: CardValues.indexOf(card.value),
          color: 'red',
        })
      );
  }
);

export const selectSpadesDisplayCards = createSelector(
  selectDeckState,
  (deckState: fromDeck.State): DisplayCard[] => {
    return deckState.data.cards
      .filter((card: CardApiResponse) => card.suit === 'SPADES')
      .map(
        (card: CardApiResponse): DisplayCard => ({
          suit: SuitsEnum.SPADES,
          value: card.value,
          order: CardValues.indexOf(card.value),
          color: 'black',
        })
      );
  }
);

export const selectClubsDisplayCards = createSelector(
  selectDeckState,
  (deckState: fromDeck.State): DisplayCard[] => {
    return deckState.data.cards
      .filter((card: CardApiResponse) => card.suit === 'CLUBS')
      .map(
        (card: CardApiResponse): DisplayCard => ({
          suit: SuitsEnum.CLUBS,
          value: card.value,
          order: CardValues.indexOf(card.value),
          color: 'black',
        })
      );
  }
);
