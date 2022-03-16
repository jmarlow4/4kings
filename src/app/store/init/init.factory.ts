import { Store } from '@ngrx/store';
import { initApp } from './init.actions';

export function initFactory(store: Store) {
  return () => store.dispatch(initApp());
}
