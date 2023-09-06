import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProjectState } from "./project.state";

export const projectFeature = createFeatureSelector<ProjectState>('project');

export const selectProject = createSelector(
    projectFeature,
    (state) => state
)

export const selectProjectError = createSelector(
    projectFeature,
    (state) => state.error
)