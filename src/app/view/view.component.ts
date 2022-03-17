import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DisplayCard } from '../models/display-card';
import { loadDeck } from '../store/deck/deck.actions';
import {
  selectHeartsDisplayCards,
  selectDiamondsDisplayCards,
  selectClubsDisplayCards,
  selectSpadesDisplayCards,
} from '../store/deck/deck.selectors';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  $heartsCards!: Observable<DisplayCard[]>;
  $diamondsCards!: Observable<DisplayCard[]>;
  $spadesCards!: Observable<DisplayCard[]>;
  $clubsCards!: Observable<DisplayCard[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadDeck());

    this.$heartsCards = this.store.select(selectHeartsDisplayCards);
    this.$diamondsCards = this.store.select(selectDiamondsDisplayCards);
    this.$spadesCards = this.store.select(selectSpadesDisplayCards);
    this.$clubsCards = this.store.select(selectClubsDisplayCards);
  }
}
