import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { DataService } from 'src/app/services/data.service';
import { selectRoom } from '../state/room/room.selector';
import { RoomData, RoomExtra } from 'src/app/interfaces/room.interface';
import { MatSelect } from '@angular/material/select';
import { FormBuilder, FormControl } from '@angular/forms';
import { BehaviorSubject, switchMap } from 'rxjs';
import { autoId } from 'src/app/helpers';
import { hints } from './hints';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styles: [],
})
export class RoomEditComponent {
  @ViewChild('el') currentElementSelect!: MatSelect;

  generalChoiceElements = this.dataSrv.generalChoiceElements;
  generalChoiceSanitarElements = this.dataSrv.generalChoiceSanitarElements;
  room: RoomData | undefined;
  elementsToChange: Array<any> = [];
  changesForm: FormControl = new FormControl('');
  currentSelection$ = new BehaviorSubject('');
  extraChnges: RoomExtra[] = [];
  exampleText = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private dataSrv: DataService,
    private fb: FormBuilder
  ) {
    this.activatedRoute.params
      .pipe(switchMap((params) => this.store.select(selectRoom(params['roomId']))))
      .subscribe((room: RoomData) => {
        if (room) {
          this.room = room;
          this.elementsToChange = this.getElementsToChange(room.roomType);
          if (room.roomExtras) {
            this.extraChnges = Object.values(room.roomExtras);
            // this.extraChnges.forEach((extra) => {
            //   this.changesForm.get(extra.elementName)?.setValue(extra.description);
            // });
          }
        }
      });

      this.changesForm.valueChanges.subscribe((value) => {
        console.log(value.replace(/\n/g, '<br>'));
      })
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

  onSelectionChange(event: string) {
    this.currentSelection$.next(event);
    this.changesForm.setValue('');
    this.exampleText = hints[event] || '';
  }

  addElementToChange(el: MatSelect) {
    if (this.room?.id) {
      const id = autoId();
      const element = {
        id,
        elementName: this.currentSelection$.getValue(),
        description: this.changesForm.value.replace(/\n/g, '<br>')
      };
      this.dataSrv.updateRoomExtras(this.room.id, element).then(() => {
        el.value = '';
        this.changesForm.setValue('');
        this.currentSelection$.next('');
      });
    }
  }

  onEditRequested(element: RoomExtra) {
    this.currentSelection$.next(element.elementName);
    this.changesForm.setValue(element.description.replace(/<br>/g, '\n'));
  }
}
