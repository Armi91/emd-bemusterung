import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { RoomData } from "src/app/interfaces/room.interface";
import { RoomState } from "./rooms.state";

export const RoomActions = createActionGroup({
    source: 'Room',
    events: {
        'Add Room': props<RoomData>(),
        'Add Room Successful': props<{name: string}>(),
        'Add Room Failed': props<{error: any}>(),
        'Update Room': props<RoomData>(),
        'Update Room Successful': props<{name: string}>(),
        'Update Room Failed': props<{error: any}>(),
        'Delete Room': props<{id: string}>(),
        'Delete Room Successful': props<{name: string}>(),
        'Delete Room Failed': props<{error: any}>(),
        'Save Room': props<{rooms: RoomState}>(),
        // 'Save Room': emptyProps(),
        'Save Room Successful': emptyProps(),
        'Save Room Failed': props<{error: any}>(),
        'Fetch Rooms': emptyProps(),
        'Fetch Rooms Successful': props<{rooms: RoomState}>(),
        'Fetch Rooms Failed': props<{error: any}>(),
    }
})