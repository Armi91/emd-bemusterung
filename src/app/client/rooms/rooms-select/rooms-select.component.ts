import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { autoId, findById } from 'src/app/helpers';
import {
  selectAllRooms,
  selectAllRoomsAsObject,
} from '../../state/room/room.selector';
import { RoomData } from 'src/app/interfaces/room.interface';
import { Observable, firstValueFrom } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { RoomActions } from '../../state/room/room.actions';
import { roomTypes } from 'src/app/data/roomTypes';
import { ofType } from '@ngrx/effects';
import { setUser } from 'src/app/auth/auth.actions';
import { ConfirmRoomsDialogComponent } from './confirm-rooms-dialog/confirm-rooms-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-rooms-select',
  templateUrl: './rooms-select.component.html',
  styles: [],
})
export class RoomsSelectComponent implements OnInit {
  rooms$: Observable<RoomData[]>;
  displayedColumns: string[] = [
    'name',
    'roomType',
    'roomNumber',
    'area',
    'actions',
  ];

  newRoomForm = this.fb.group({
    id: [autoId()],
    name: ['', Validators.required],
    area: [0, [Validators.required, Validators.min(0)]],
    roomType: ['bathroom', Validators.required],
    roomNumber: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private dialog: MatDialog,
    protected dataSrv: DataService
  ) {
    this.store.dispatch(RoomActions.fetchRooms());
    this.rooms$ = this.store.select(selectAllRooms);
  }

  ngOnInit(): void {}

  addRoom() {
    if (this.newRoomForm.valid) {
      this.store.dispatch(
        RoomActions.saveRoom({ room: this.newRoomForm.value as RoomData })
        // RoomActions.addRoom(this.newRoomForm.value as RoomData)
      );
      this.newRoomForm.reset({ id: autoId() });
      this.newRoomForm.markAsPristine();
      this.newRoomForm.markAsUntouched();
      this.newRoomForm.setErrors(null);
      Object.values(this.newRoomForm.controls).forEach((control) => {
        control.markAsPristine();
        control.markAsUntouched();
        control.setErrors(null);
      });
    }
  }

  deleteRoom(id: string) {
    this.store.dispatch(RoomActions.deleteRoom({ id }));
  }

  getRoomTypeName(id: string) {
    // TODO: get it from data service
    return findById(roomTypes, id).name;
  }

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmRoomsDialogComponent);
  }
}
