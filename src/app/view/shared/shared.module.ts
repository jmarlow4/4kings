import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { CardModule } from './card/card.module';
import { SortPipe } from './sort.pipe';

@NgModule({
  imports: [CardModule],
  declarations: [SortPipe],
  exports: [CardComponent, SortPipe],
})
export class SharedModule {}
