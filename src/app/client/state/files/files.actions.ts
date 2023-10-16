import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { FilesState } from "./files.state";
import { FileData } from "src/app/interfaces/file.interface";

export const FilesActions = createActionGroup({
    source: 'Files',
    events: {
        'Add File': props<{file: FileData}>(),
        'Add File Successful': emptyProps(),
        'Add File Failed': props<{error: any}>(),
        'Delete File': props<{id: string, fileName: string}>(),
        'Delete File Successful': emptyProps(),
        'Delete File Failed': props<{error: any}>(),
        'Fetch Files': emptyProps(),
        'Fetch Files Successful': props<{files: FilesState}>(),
        'Fetch Files Failed': props<{error: any}>(),
        'Update File Description': props<{id: string, description: string}>(),
    }
})