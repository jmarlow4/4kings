import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ServicesModule } from './services.module';
import { DeckApiResponse } from '../models/deck-api-response';

@Injectable({
  providedIn: ServicesModule,
})
export class DeckService {
  constructor(private http: HttpClient) {}

  initDeck(): Observable<DeckApiResponse> {
    return this.http.get(`${environment.deckApi}/new/draw/`, {
      params: {
        count: '0',
      },
    }) as Observable<DeckApiResponse>;
  }

  drawCards(deckId: number, numCards: number): Observable<DeckApiResponse> {
    return this.http.get(`${environment.deckApi}/${deckId}/draw/`, {
      params: {
        count: numCards,
      },
    }) as Observable<DeckApiResponse>;
  }
}
