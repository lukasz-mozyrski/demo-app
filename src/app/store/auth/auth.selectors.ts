import { createSelector } from '@ngrx/store';
import { getAuthState } from '../index';

export const getAuthLoading = createSelector(
  getAuthState,
  (state) => !!state?.loading
);

export const getAuthUser = createSelector(getAuthState, (state) => state?.user);

export const getAuthError = createSelector(
  getAuthState,
  (state) => state?.error?.message
);

export const getAuthKey = createSelector(
  getAuthState,
  (state) => state?.authkey
);
