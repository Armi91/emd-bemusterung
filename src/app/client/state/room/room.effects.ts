import { Injectable } from '@angular/core';
import { Actions, act, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { RoomActions } from './room.actions';
import { DataService } from 'src/app/services/data.service';
import { RoomState } from './rooms.state';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectAllRooms, selectAllRoomsAsObject } from './room.selector';

@Injectable()
export class RoomEffects {
  $saveRoom = createEffect(() => {
    return this.actions$.pipe(
      ofType(RoomActions.saveRoom),
      switchMap((action) => {
        return this.dataSrv.saveRoom(action.room);
      }),
      map(() => RoomActions.saveRoomSuccessful()),
      catchError((error) => of(RoomActions.saveRoomFailed({ error })))
    );
  });

  $saveRoomSuccessful = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(RoomActions.saveRoomSuccessful),
        tap(() => {
          this.toastr.success('Dodano pokój');
        })
      );
    },
    { dispatch: false }
  );

  $saveRoomFailed = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(RoomActions.saveRoomFailed),
        tap(() => {
          this.toastr.error('Wystąpił problem z dodaniem pokoju');
        })
      );
    },
    { dispatch: false }
  );

  $fetchRooms = createEffect(() => {
    return this.actions$.pipe(
      ofType('[Room] Fetch Rooms'),
      switchMap(() => {
        return this.dataSrv.fetchRooms();
      }),
      map((rooms) => RoomActions.fetchRoomsSuccessful({ rooms })),
      catchError((error) => of(RoomActions.fetchRoomsFailed({ error })))
    );
  });

  $deleteRoom = createEffect(() => {
    return this.actions$.pipe(
      ofType(RoomActions.deleteRoom),
      switchMap((action) => {
        return this.dataSrv.deleteRoom(action.id);
      }),
      map(() => RoomActions.deleteRoomSuccessful()),
      catchError((error) => of(RoomActions.deleteRoomFailed({ error })))
    );
  });

  $deleteRoomSuccessful = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(RoomActions.deleteRoomSuccessful),
        tap(() => {
          this.toastr.success('Usunięto pokój');
        })
      );
    },
    { dispatch: false }
  );

  $deleteRoomFailed = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(RoomActions.deleteRoomFailed),
        tap(() => {
          this.toastr.error('Wystąpił problem z usunięciem pokoju');
        })
      );
    },
    { dispatch: false }
  );
  

  constructor(
    private actions$: Actions,
    private dataSrv: DataService,
    private toastr: ToastrService,
    private router: Router,
    private store: Store
  ) {}
}
