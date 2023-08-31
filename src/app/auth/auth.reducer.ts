import { createReducer, on } from "@ngrx/store";
import * as AuthActions from "./auth.actions";
import { AuthState, initialState } from "./auth.state";

export const authReducer = createReducer(
    initialState,
    on(AuthActions.login, (state): AuthState => ({...state, error: null, loading: true})),
    on(AuthActions.loginSuccessful, (state, {user}): AuthState => ({...state, error: null, user, loading: false})),
    on(AuthActions.loginFailed, (state, {error}): AuthState => ({...state, error, loading: false})),
    on(AuthActions.setUser, (state, {user}): AuthState => ({...state, user, error: null})),
    on(AuthActions.removeUser, (state): AuthState => ({...state, user: null, error: null})),
    on(AuthActions.logout, (state): AuthState => ({...state, user: null, error: null})),
    on(AuthActions.register, (state): AuthState => ({...state, error: null, loading: true})),
);