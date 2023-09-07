import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RoomState } from "./rooms.state";

export const roomFeature = createFeatureSelector<RoomState>('room');

export const selectRoom = (id: string) => {
    return createSelector(
        roomFeature,
        (state) => state[id]
    )
}

export const selectAllRooms = createSelector(
    roomFeature,
    (state) => Object.values(state)
)

export const selectAllRoomsAsObject = createSelector(
    roomFeature,
    (state) => state
)