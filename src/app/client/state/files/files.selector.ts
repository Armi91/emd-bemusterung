import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FilesState } from './files.state';
import { state } from '@angular/animations';
import { FileData } from 'src/app/interfaces/file.interface';

export const filesFeture = createFeatureSelector<FilesState>('files');

export const selectFile = (id: string) => {
  return createSelector(filesFeture, (state) => state[id]);
};

export const selectAllFiles = createSelector(filesFeture, (state) => {
  if (!state) {
    return [];
  } else {
    return Object.values(state)
  }
});

export const selectAllFilesAsObject = createSelector(filesFeture, (state) => state);
