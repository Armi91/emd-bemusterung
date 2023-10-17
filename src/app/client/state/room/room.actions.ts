import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { RoomData, RoomExtra } from "src/app/interfaces/room.interface";
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
        'Delete Room Successful': emptyProps(),
        'Delete Room Failed': props<{error: any}>(),
        'Save Room': props<{room: RoomData}>(),
        'Save Room Successful': emptyProps(),
        'Save Room Failed': props<{error: any}>(),
        'Fetch Rooms': emptyProps(),
        'Fetch Rooms Successful': props<{rooms: RoomState}>(),
        'Fetch Rooms Failed': props<{error: any}>(),
        // 'Update Room Extras': props<{roomId: string, extra: RoomExtra}>(),
        // 'Update Room Extras Successful': emptyProps(),

    }
})