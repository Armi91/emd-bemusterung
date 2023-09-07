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
        return this.dataSrv.saveRooms(action.rooms);
      }),
      map(() => RoomActions.saveRoomSuccessful()),
      catchError((error) => of(RoomActions.saveRoomFailed({ error })))
    );
  });

  $saveRoomSuccessful = createEffect(
    () => {
      return this.actions$.pipe(
        ofType('[Room] Save Room Successful'),
        tap(() => {
          this.toastr.success('Zapisano pomyślnie');
          this.router.navigate(['/c/general']);
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
  })

  constructor(
    private actions$: Actions,
    private dataSrv: DataService,
    private toastr: ToastrService,
    private router: Router,
    private store: Store
  ) {}
}
