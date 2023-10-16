import { createReducer, on } from '@ngrx/store';
import { filesInitialState } from './files.state';
import { FilesActions } from './files.actions';

export const filesReducer = createReducer(
  filesInitialState,
  on(FilesActions.addFile, (state, { file }) => ({
    ...state,
    [file.id]: file,
  })),
  
  on(FilesActions.fetchFilesSuccessful, (state, { files }) => ({
    ...files,
  })),
);
