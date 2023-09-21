import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProjectActions } from './state/project/project.actions';
import { RoomActions } from './state/room/room.actions';
import { GeneralChoiceActions } from './state/general-choice/general-choice.actions';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styles: [
  ]
})
export class ClientComponent {
  sideBarOpen = true;
  constructor(private store: Store) {
    this.store.dispatch(ProjectActions.fetchProject());
    this.store.dispatch(RoomActions.fetchRooms());
    this.store.dispatch(GeneralChoiceActions.fetchGeneralChoice());
  }
}
