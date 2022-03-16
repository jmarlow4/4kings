import { createAction, props } from '@ngrx/store';

export const initApp = createAction('[Init] Init App');

export const initAppSuccess = createAction(
  '[Init] Init App Success',
  props<{ initialized: boolean }>()
);
