import { createReducer, on } from '@ngrx/store';
import { initialProjectState } from './project.state';
import { ProjectActions } from './project.actions';

export const projectReducer = createReducer(
  initialProjectState,
  on(
    ProjectActions.createProject,
    (state, { name, code, apartmentNumber, id, lastUpdated, isAccepted }) => ({
      ...state,
      name,
      code,
      apartmentNumber,
      id,
      isAccepted,
      lastUpdated
    })
  ),
  // on(ProjectActions.createProjectSuccessful, (state) => ({...state})),
  on(ProjectActions.createProjectFailed, (state, { error }) => ({
    ...state,
    error,
  })),
  on(
    ProjectActions.updateProject,
    (state, { id, name, code, apartmentNumber, isAccepted }) => ({
      ...state,
      id,
      name,
      code,
      apartmentNumber,
      isAccepted
    })
  ),
  // on(ProjectActions.updateProjectSuccessful, (state) => ({...state})),
  on(ProjectActions.updateProjectFailed, (state, { error }) => ({
    ...state,
    error,
  })),
  // on(ProjectActions.fetchProject, (state, newState) => ({...state, ...newState}))
  on(
    ProjectActions.fetchProjectSuccessfull,
    (state, { id, apartmentNumber, code, lastUpdated, name, isAccepted }) => ({
      ...state,
      id,
      apartmentNumber,
      code,
      lastUpdated,
      name,
      isAccepted
    })
  )
);
