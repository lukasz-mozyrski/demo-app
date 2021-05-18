import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { map } from 'rxjs/operators';
import { AppState } from '../index';
import { getAuthKey } from './auth.selectors';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private store: Store<AppState>,
    private authService: AuthService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.pipe(
      select(getAuthKey),
      map((authkey) => {
        if (!this.authService.isTokenValid(authkey)) {
          this.router.navigate([`/login`]);
          return false;
        }
        return true;
      })
    );
  }
}
