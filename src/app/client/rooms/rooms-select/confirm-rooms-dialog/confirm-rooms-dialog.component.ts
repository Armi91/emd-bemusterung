import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllRooms } from 'src/app/client/state/room/room.selector';

@Component({
  selector: 'app-confirm-rooms-dialog',
  templateUrl: './confirm-rooms-dialog.component.html',
  styles: [],
})
export class ConfirmRoomsDialogComponent {
  rooms$;

  constructor(private store: Store) {
    this.rooms$ = this.store.select(selectAllRooms);
  }
}
