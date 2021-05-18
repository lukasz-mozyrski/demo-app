import { createAction, props } from '@ngrx/store';
import { LoginResponse } from './auth.reducer';

export const login = createAction(
  '[Auth] Login',
  props<{ login: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login success',
  props<{ res: LoginResponse }>()
);

export const loginFail = createAction(
  '[Auth] Login fail',
  props<{ error: Error }>()
);

export const logout = createAction('[Auth] Logout');
