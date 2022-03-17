import { SuitsEnum } from './suits.enum';

export interface DisplayCard {
  suit: SuitsEnum;
  value: string;
  order: number;
  color: 'red' | 'black';
}
