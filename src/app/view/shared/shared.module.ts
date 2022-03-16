import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { CardModule } from './card/card.module';

@NgModule({
  imports: [CardModule],
  exports: [CardComponent],
})
export class SharedModule {}
