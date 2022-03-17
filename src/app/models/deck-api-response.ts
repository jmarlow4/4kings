import { CardApiResponse } from './card-api-response';

export interface DeckApiResponse {
  remaining: number;
  cards: CardApiResponse[];
  deck_id: string;
  success: boolean;
}
