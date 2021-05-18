import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginResponse } from './auth.reducer';
import { delay, map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  authkey: string | undefined;

  mockUsers: { [key: string]: LoginResponse } = {
    demo: {
      authkey:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      user: {
        login: 'demo',
        name: 'John',
        mail: 'john@demo.pl',
      },
    },
  };

  constructor() {}

  login(login: string, password: string): Observable<LoginResponse> {
    console.log('login', { login });
    const user = this.mockUsers[login];
    return of(user).pipe(
      delay(700),
      map((res) => {
        if (!res) {
          throw { status: 400, message: 'Niepoprawne dane logowania' };
        }
        return res;
      })
    );
  }

  setAuthkey(authkey: string) {
    this.authkey = authkey;
  }

  clearAuthkey() {
    this.authkey = undefined;
  }

  getAuthkey() {
    return this.authkey || '';
  }

  isTokenValid(authkey: string | undefined) {
    return !!authkey;
  }
}
