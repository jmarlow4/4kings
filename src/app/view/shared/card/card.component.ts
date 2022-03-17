import { Component, Input } from '@angular/core';
import { SuitsEnum } from 'src/app/models/suits.enum';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() suit!: SuitsEnum;
  @Input() value!: string;
  @Input() color!: 'red' | 'black';
}
