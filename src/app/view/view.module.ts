import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootRoutingModule } from './root-routing.module';
import { ViewComponent } from './view.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ViewComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RootRoutingModule,
    SharedModule,
    FlexModule,
  ],
  exports: [ViewComponent],
})
export class ViewModule {}
