import { createReducer, on } from "@ngrx/store";
import { initialProjectState } from "./project.state";
import { ProjectActions } from "./project.actions";

export const projectReducer = createReducer(
    initialProjectState,
    on(ProjectActions.createProject, (state, {name, code, apartmentNumber}) => ({...state, name, code, apartmentNumber})),
    on(ProjectActions.createProjectSuccessful, (state) => ({...state})),
    on(ProjectActions.createProjectFailed, (state, {error}) => ({...state, error})),
    on(ProjectActions.updateProject, (state, {id, name, code, apartmentNumber}) => ({...state, id, name, code, apartmentNumber})),
    on(ProjectActions.updateProjectSuccessful, (state) => ({...state})),
    on(ProjectActions.updateProjectFailed, (state, {error}) => ({...state, error}))
);