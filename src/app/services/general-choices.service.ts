import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoomElement } from '../interfaces/room-element.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeneralChoicesService {
  constructor(private dataSrv: DataService, private fb: FormBuilder) {}

  createSubform(elementId: string): FormGroup<any> {
    let form: FormGroup<any>;
    switch (elementId) {
      case 'floor':
        form = this.fb.group({
          levelId: ['', Validators.required],
          variantId: ['', Validators.required],
          baseboard: ['', Validators.required],
        });
        break;
      case 'walls':
        form = this.fb.group({
          levelId: ['', Validators.required],
          variantId: ['', Validators.required],
          wallpaper: [false, Validators.required],
          ceilingLevelId: ['', Validators.required],
          ceilingVariantId: ['', Validators.required],
        });
        break;
      default:
        form = this.fb.group({
          levelId: ['', Validators.required],
          variantId: ['', Validators.required],
        });
        break;
    }
    return form;
  }

  getElement(elementId: string, forGeneral = true): Observable<RoomElement | null> {
    if (forGeneral) {
      return this.dataSrv.getElement(elementId).pipe(
        map((element) => {
          if (element) {
            const levels = element.levels.filter((level) => level.forGeneralChoices);
            element.levels = levels;
          }
          return element;
        })
      )
    } else {
      return this.dataSrv.getElement(elementId);
    }
  }
}
