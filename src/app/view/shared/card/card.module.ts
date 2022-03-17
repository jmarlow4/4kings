import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './card.component';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule, MatCardModule, FlexModule],
  declarations: [CardComponent],
  exports: [CardComponent],
})
export class CardModule {}
