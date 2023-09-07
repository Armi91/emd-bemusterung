import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { ProjectState } from "./project.state";

export const ProjectActions = createActionGroup({
    source: 'Project',
    events: {
        'Create Project': props<ProjectState>(),
        'Create Project Successful': emptyProps(),
        'Create Project Failed': props<{error: any}>(),
        'Update Project': props<ProjectState>(),
        'Update Project Successful': emptyProps(),
        'Update Project Failed': props<{error: any}>(),
        'Fetch Project': emptyProps(),
        'Fetch Project Successfull': props<ProjectState>(),
        'Fetch Project Failed': props<{error: any}>()
    }
})