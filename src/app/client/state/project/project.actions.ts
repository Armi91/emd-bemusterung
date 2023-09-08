import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';
import { ProjectState } from './project.state';
import { Timestamp } from '@angular/fire/firestore';
import { ProjectData } from 'src/app/interfaces/project.interface';

export const ProjectActions = createActionGroup({
  source: 'Project',
  events: {
    'Create Project': props<ProjectData>(),
    'Create Project Successful': emptyProps(),
    'Create Project Failed': props<{ error: any }>(),
    'Update Project': props<ProjectData>(),
    'Update Project Successful': emptyProps(),
    'Update Project Failed': props<{ error: any }>(),
    'Fetch Project': emptyProps(),
    'Fetch Project Successfull': props<ProjectData>(),
    'Fetch Project Failed': props<{ error: any }>(),
  },
});
