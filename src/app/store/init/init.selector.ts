import { createFeatureSelector } from '@ngrx/store';
import { initFeatureKey, State } from './init.reducer';

export const getInitState = createFeatureSelector<State>(initFeatureKey);
