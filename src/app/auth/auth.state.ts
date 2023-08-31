import { UserData } from "../interfaces/user-data.interface";

export interface AuthState {
    user: UserData | null,
    error: any,
    loading: boolean
}

export const initialState: AuthState = {
    user: null,
    error: null,
    loading: false
}