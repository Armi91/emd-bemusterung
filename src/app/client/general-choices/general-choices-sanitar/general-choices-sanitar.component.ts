import { AfterViewInit, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatStep } from '@angular/material/stepper';
import { Store } from '@ngrx/store';
import { of, switchMap, take } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { GeneralChoicesService } from 'src/app/services/general-choices.service';
import { selectAllGeneralChoicesSanitar } from '../../state/general-choice-sanitar/general-choice-sanitar.selector';
import { GeneralChoiceSanitarElementId } from 'src/app/data/general-choice-elements';
import { GeneralChoiceSanitarActions } from '../../state/general-choice-sanitar/general-choice-sanitar.actions';

@Component({
  selector: 'app-general-choices-sanitar',
  templateUrl: './general-choices-sanitar.component.html',
  styles: [
  ]
})
export class GeneralChoicesSanitarComponent implements AfterViewInit {

  form: FormGroup<any> = new FormGroup({});
  generalChoiceSanitarElements = this.dataSrv.generalChoiceSanitarElements;
  constructor(
    private dataSrv: DataService,
    private gcSrv: GeneralChoicesService,
    private store: Store
  ) { }

  ngAfterViewInit(): void {
    this.gcSrv.generalChoicesSanitarFetched$
      .pipe(
        switchMap((fetched) => {
          if (fetched) {
            return this.store.select(selectAllGeneralChoicesSanitar).pipe(take(1));
          } else {
            return of(null);
          }
        })
      )
      .subscribe((generalChoiceSanitar) => {
        console.log('generalChoiceSanitar', generalChoiceSanitar);
        if (generalChoiceSanitar) {
          Object.keys(generalChoiceSanitar).forEach((elementId: string) => {
            const elemId = <GeneralChoiceSanitarElementId>elementId;
            const fcLevelId = this.form.get(`${elementId}.levelId`);
            const fcVariantId = this.form.get(`${elementId}.variantId`);
            fcLevelId?.setValue(generalChoiceSanitar[elemId].levelId);
            fcVariantId?.setValue(generalChoiceSanitar[elemId].variantId);

            if (elemId === 'walls') {
              const fcWallpaper = this.form.get(`${elementId}.wallpaper`);
              const fcCeilingLevelId = this.form.get(`${elementId}.ceilingLevelId`);
              const fcCeilingVariantId = this.form.get(`${elementId}.ceilingVariantId`);
              fcWallpaper?.setValue(generalChoiceSanitar[elemId].wallpaper);
              fcCeilingLevelId?.setValue(generalChoiceSanitar[elemId].ceilingLevelId);
              fcCeilingVariantId?.setValue(generalChoiceSanitar[elemId].ceilingVariantId);
            }
            if (elemId === 'floor') {
              const fcBaseboard = this.form.get(`${elementId}.baseboard`);
              fcBaseboard?.setValue(generalChoiceSanitar[elemId].baseboard);
            }
          });
        }
      });
  }

  onFormReady(data: { form: FormGroup<any>; elementId: string }, step: MatStep) {
    this.form.addControl(data.elementId, data.form);
    this.form.updateValueAndValidity();
    step.stepControl = data.form;
  }

  onSubmit() {
    this.store.dispatch(GeneralChoiceSanitarActions.saveSanitarGeneralChoice({ generalChoiceSanitar: this.form.value }));
  }
}
