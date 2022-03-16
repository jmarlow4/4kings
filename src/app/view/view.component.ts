import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getInitState } from '../store/init/init.selector';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(getInitState).subscribe((state) => console.log(state));
  }
}
