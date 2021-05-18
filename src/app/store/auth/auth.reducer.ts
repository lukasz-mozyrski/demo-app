import { login, loginFail, loginSuccess, logout } from './auth.actions';
import { combineReducers, createReducer, on } from '@ngrx/store';

export interface User {
  login: string;
  name: string;
  mail: string;
}

export interface LoginResponse {
  authkey: string;
  user: User;
}

export interface AuthState {
  loading?: boolean;
  authkey?: string;
  error?: Error;
  user?: User;
}

export const initialState: AuthState = {};

export const authReducer = createReducer(
  initialState,
  on(login, (state, payload) => ({ loading: true })),
  on(loginSuccess, (state, { res }) => ({
    ...state,
    loading: false,
    authkey: res?.authkey,
    user: res?.user,
    error: undefined,
  })),
  on(loginFail, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(logout, (state) => initialState)
);
