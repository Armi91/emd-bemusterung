import { RoomData } from "src/app/interfaces/room.interface"

export interface RoomState {
    [id: string]: RoomData;
}

export const roomInitialState: RoomState = {}

// Create interface for RoomState
// Path: src/app/client/state/rooms/rooms.state.ts
