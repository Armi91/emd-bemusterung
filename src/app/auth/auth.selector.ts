import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.state";

export const authFeature = createFeatureSelector<AuthState>('auth');

export const selectIsAuth = createSelector(
    authFeature,
    (state) => !!state.user
);

export const selectUserData = createSelector(
    authFeature,
    (state) => state.user
)

export const selectUserId = createSelector(
    authFeature,
    (state) => state.user?.uid
)

export const selectIsLoading = createSelector(
    authFeature,
    (state) => state.loading
)

export const selectAuthError = createSelector(
    authFeature,
    (state) => state.error
)

export const selectUserProjectId = createSelector(
    authFeature,
    (state) => {
        if (state.user?.projectsIds?.length) {
            return state.user.projectsIds[0]
        } else {
            return null;
        }
    }
)