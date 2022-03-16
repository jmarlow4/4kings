import { Action, createReducer, on } from '@ngrx/store';
import { initAppSuccess } from './init.actions';
import produce from 'immer';

export const initFeatureKey = 'init';

export interface State {
  initialized: boolean;
}

export const initialState: State = {
  initialized: false,
};

export const reducer = createReducer(
  initialState,

  on(initAppSuccess, (state: State, { initialized }) => {
    return produce(state, (draftState) => {
      draftState.initialized = initialized;
    });
  })
);

export function initReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
}
