import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createReducer,
  MetaReducer,
} from '@ngrx/store';
import { InjectionToken } from '@angular/core';
import { authReducer, AuthState } from './auth/auth.reducer';

export interface AppState {
  auth: AuthState;
}

export const appReducer = {
  auth: authReducer,
};

export const getAuthState = (state: AppState) => state.auth;

/*
// Wyczyszczenie state po poprawnym wylogowaniu
export function logoutMetaReducer(
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  return function (state: AppState, action: Action): AppState {
    if (action.type === auth.ActionTypes.LOGOUT) {
      state = {};
    }
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = [logoutMetaReducer];

//
// Stwrzenie InjectionToken, ze względu na wywołanie funkcji podczas tworzenia reducerow ('combineReducers') w dekoratorze
// info: https://github.com/ngrx/platform/issues/306
//
export const reducerToken = new InjectionToken<ActionReducerMap<AppState>>(
  'Reducers'
);
*/
