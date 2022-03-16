import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootRoutingModule } from './root-routing.module';
import { ViewComponent } from './view.component';
import { KingsComponent } from './kings/kings.component';
import { QueensComponent } from './queens/queens.component';
import { JacksComponent } from './jacks/jacks.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    ViewComponent,
    KingsComponent,
    QueensComponent,
    JacksComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RootRoutingModule,
    SharedModule,
  ],
  exports: [ViewComponent],
})
export class ViewModule {}
