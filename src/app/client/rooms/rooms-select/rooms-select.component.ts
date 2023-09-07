import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { autoId, findById } from 'src/app/helpers';
import { selectAllRooms, selectAllRoomsAsObject } from '../../state/room/room.selector';
import { RoomData } from 'src/app/interfaces/room.interface';
import { Observable, firstValueFrom } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { RoomActions } from '../../state/room/room.actions';
import { roomTypes } from 'src/app/data/roomTypes';
import { ofType } from '@ngrx/effects';
import { setUser } from 'src/app/auth/auth.actions';

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

  constructor(
    private fb: FormBuilder,
    private store: Store,
    protected dataSrv: DataService
  ) {
    this.store.dispatch(RoomActions.fetchRooms());
    this.rooms$ = this.store.select(selectAllRooms);
  }

  ngOnInit(): void {}

  newRoomForm = this.fb.group({
    id: [autoId()],
    name: ['', Validators.required],
    area: [0, [Validators.required, Validators.min(0)]],
    roomType: ['bathroom', Validators.required],
    roomNumber: ['', Validators.required],
  });

  addRoom() {
    if (this.newRoomForm.valid) {
      this.store.dispatch(
        RoomActions.addRoom(this.newRoomForm.value as RoomData)
      );
      this.newRoomForm.reset({ id: autoId() });
    }
  }

  getRoomTypeName(id: string) {
    // TODO: get it from data service
    return findById(roomTypes, id).name;
  }

  async saveRooms() {
    const rooms = await firstValueFrom(this.store.select(selectAllRoomsAsObject))
    this.store.dispatch(RoomActions.saveRoom({rooms}));
  }
}
