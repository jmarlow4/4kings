import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { InitEffects } from './init/init.effects';
import { InitStateModule } from './init/init.module';
import {
  DefaultRouterStateSerializer,
  routerReducer,
  StoreRouterConnectingModule,
} from '@ngrx/router-store';

@NgModule({
  imports: [
    EffectsModule.forRoot([InitEffects]),
    StoreModule.forRoot({
      router: routerReducer,
    }),
    !environment.production
      ? StoreDevtoolsModule.instrument({
          maxAge: 40,
          name: '4Kings',
        })
      : [],
    StoreRouterConnectingModule.forRoot({
      serializer: DefaultRouterStateSerializer,
    }),
    InitStateModule,
  ],
})
export class AppStoreModule {}
