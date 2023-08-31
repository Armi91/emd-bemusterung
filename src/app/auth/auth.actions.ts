import { createAction, props } from "@ngrx/store";
import { UserData } from "../interfaces/user-data.interface";

export const login = createAction("[Auth] Login", props<{email: string, password: string, loading: boolean}>());
export const loginSuccessful = createAction("[Auth] Login Successful", props<{user: UserData, loading: boolean}>());
export const loginFailed = createAction("[Auth] Login Failed", props<{error: any, loading: boolean}>());

export const register = createAction("[Auth] Register", props<{user: UserData, loading: boolean}>());
export const registerFailed = createAction("[Auth] Register Failed", props<{error: any, loading: boolean}>());
export const registerSuccessful = createAction("[Auth] Register Successful", props<{user: UserData, loading: boolean}>());

export const setUser = createAction("[Auth] Set User", props<{user: UserData}>());
export const removeUser = createAction("[Auth] Remove User");

export const logout = createAction("[Auth] Log Out");
