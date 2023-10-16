import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { DataService } from 'src/app/services/data.service';
import { selectRoom } from '../state/room/room.selector';
import { RoomData } from 'src/app/interfaces/room.interface';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styles: [],
})
export class RoomEditComponent {
  generalChoiceElements = this.dataSrv.generalChoiceElements;
  generalChoiceSanitarElements = this.dataSrv.generalChoiceSanitarElements;
  room: RoomData | undefined;
  elementsToChange: Array<any> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private dataSrv: DataService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.store.select(selectRoom(params['roomId'])).subscribe((room) => {
        if (room) {
          this.room = room;
          console.log(room);
          this.elementsToChange = this.getElementsToChange(room.roomType);
          console.log(this.elementsToChange);
        }
      });
    });
  }

  getElementsToChange(roomType: string) {
    if (roomType === 'bathroom') {
      const generalChoices = this.generalChoiceElements
        .map((element) => {
          return element.choices;
        })
        .flat();
      const generalSanitarChoices = this.generalChoiceSanitarElements
        .map((element) => {
          return element.choices;
        })
        .flat()
        .filter((choice) => {
          if (choice.id === 'floor') return false;
          if (choice.id === 'walls') return false;
          return true;
        });
      return [...generalChoices, ...generalSanitarChoices];
    } else {
      return this.generalChoiceElements
        .map((element) => {
          return element.choices;
        })
        .flat();
    }
  }

  addElementToChange(el: MatSelect) {
    console.log(el.value);
    
  }
}
