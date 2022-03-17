import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromDeck from './deck.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DeckEffects } from './deck.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromDeck.deckFeatureKey, fromDeck.reducer),
    EffectsModule.forFeature([DeckEffects]),
  ],
})
export class DeckModule {}
