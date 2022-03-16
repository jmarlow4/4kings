import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ServicesModule } from './services/services.module';
import { AppStoreModule } from './store/store.module';
import { ViewModule } from './view/view.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AppStoreModule, ViewModule, ServicesModule, NoopAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
