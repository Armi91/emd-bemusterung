import { FileData } from "src/app/interfaces/file.interface";

export interface FilesState {
    [id: string]: FileData
}

export const filesInitialState: FilesState = {}