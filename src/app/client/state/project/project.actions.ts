import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";

export const ProjectActions = createActionGroup({
    source: 'Project',
    events: {
        'Create Project': props<{name: string, code: string, apartmentNumber: string}>(),
        'Create Project Successful': emptyProps(),
        'Create Project Failed': props<{error: any}>(),
        'Update Project': props<{id: string, name: string, code: string, apartmentNumber: string}>(),
        'Update Project Successful': emptyProps(),
        'Update Project Failed': props<{error: any}>()
    }
})