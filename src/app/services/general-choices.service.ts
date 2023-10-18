import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoomElement } from '../interfaces/room-element.interface';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { GeneralChoiceSanitarState } from '../client/state/general-choice-sanitar/general-choice-sanitar.state';

@Injectable({
  providedIn: 'root',
})
export class GeneralChoicesService {
  generalChoicesSanitarFetched$ = new BehaviorSubject<boolean>(false);

  generalChoicesFetched$ = new BehaviorSubject<boolean>(false);

  constructor(private dataSrv: DataService, private fb: FormBuilder) {}

  createSubform(elementId: string): FormGroup<any> {
    let form: FormGroup<any>;
    switch (elementId) {
      case 'floor':
        form = this.fb.group({
          levelId: ['', Validators.required],
          variantId: [''],
          baseboard: ['', Validators.required],
          parquetDirection: [''],
        });
        break;
      case 'walls':
        form = this.fb.group({
          levelId: ['', Validators.required],
          variantId: [''],
          wallpaper: [false, Validators.required],
          ceilingLevelId: ['', Validators.required],
          ceilingVariantId: [''],
        });
        break;
      case 'electricEquipment':
        form = this.fb.group({
          levelId: ['', Validators.required],
          variantId: [''],
        });
        break;
      default:
        form = this.fb.group({
          levelId: ['', Validators.required],
          variantId: [''],
        });
        break;
    }
    return form;
  }

  getElement(
    elementId: string,
    forGeneral = false,
    forSanitarGeneral = false
  ): Observable<RoomElement | null> {
    if (forGeneral || forSanitarGeneral) {
      return this.dataSrv.getElement(elementId).pipe(
        map((element) => {
          const elem: RoomElement = { ...element } as RoomElement;
          if (element) {
            const levels = element.levels.filter((level) => {
              if (forGeneral) {
                return level.forGeneralChoices || false;
              }
              if (forSanitarGeneral) {
                return level.forSanitarGeneralChoices || false;
              } else {
                return true;
              }
            });
            elem.levels = levels;
          }
          return elem;
        })
      );
    } else {
      return this.dataSrv.getElement(elementId);
    }
  }
}
