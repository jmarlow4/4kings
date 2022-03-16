import { NgModule, APP_INITIALIZER } from '@angular/core';
import { StoreModule, Store } from '@ngrx/store';

import * as fromInit from './init.reducer';
import { initFactory } from './init.factory';
import { EffectsModule, Actions } from '@ngrx/effects';
import { InitEffects } from './init.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(fromInit.initFeatureKey, fromInit.reducer),
    EffectsModule.forFeature([InitEffects]),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [Store, Actions],
      multi: true,
    },
  ],
})
export class InitStateModule {}
