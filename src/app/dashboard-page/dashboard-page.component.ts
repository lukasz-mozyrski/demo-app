import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { Observable } from 'rxjs';
import { User } from '../store/auth/auth.reducer';
import { getAuthUser } from '../store/auth/auth.selectors';
import { logout } from '../store/auth/auth.actions';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  user$: Observable<User | undefined>;

  constructor(private store: Store<AppState>) {
    this.user$ = this.store.select(getAuthUser);
  }

  ngOnInit(): void {}

  logout() {
    this.store.dispatch(logout());
  }
}
