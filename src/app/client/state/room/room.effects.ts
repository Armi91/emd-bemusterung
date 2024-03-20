import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { RoomActions } from './room.actions';
import { DataService } from 'src/app/services/data.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

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
          this.toastr.success('Raum wurde hinzugefügt');
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
          this.toastr.error('Beim Hinzufügen eines Raumes ist ein Fehler aufgetreten.');
        })
      );
    },
    { dispatch: false }
  );

  $fetchRooms = createEffect(() => {
    return this.actions$.pipe(
      ofType(RoomActions.fetchRooms),
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
          this.toastr.success('Raum wurde gelöscht');
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
          this.toastr.error('Beim Löschen eines Raumes ist ein Fehler aufgetreten.');
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
