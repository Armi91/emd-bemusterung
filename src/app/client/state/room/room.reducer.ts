import { createReducer, on } from '@ngrx/store';
import { roomInitialState } from './rooms.state';
import { RoomActions } from './room.actions';

export const roomReducer = createReducer(
  roomInitialState,
  on(RoomActions.addRoom, RoomActions.updateRoom, (state, {id, name, area, roomType, roomNumber}) => ({
    ...state,
    [id]: { id, name, area, roomType, roomNumber },
  })),
  on(RoomActions.deleteRoom, (state, { id }) => {
    const s = { ...state };
    delete s[id];
    return {
      ...state
    }
  }),
  on(RoomActions.saveRoomFailed, RoomActions.fetchRoomsFailed, (state, {error}) => ({
    ...state,
    error
  })),
  on(RoomActions.fetchRoomsSuccessful, (state, newState) => ({
    ...state,
    ...newState.rooms
  })),
);
