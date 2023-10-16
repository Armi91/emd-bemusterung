import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatStep } from '@angular/material/stepper';
import { Store } from '@ngrx/store';
import { firstValueFrom, of, switchMap, take } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { GeneralChoicesService } from 'src/app/services/general-choices.service';
import { GeneralChoiceActions } from '../state/general-choice/general-choice.actions';
import { selectAllGeneralChoices } from '../state/general-choice/general-choice.selector';
import { GeneralChoiceElementId } from 'src/app/data/general-choice-elements';

@Component({
  selector: 'app-general-choices',
  templateUrl: './general-choices.component.html',
  styles: [],
})
export class GeneralChoicesComponent implements OnInit, AfterViewInit {
  form: FormGroup<any> = new FormGroup({});
  generalChoiceElements = this.dataSrv.generalChoiceElements;

  constructor(
    private dataSrv: DataService,
    private gcSrv: GeneralChoicesService,
    private store: Store
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.gcSrv.generalChoicesFetched$
      .pipe(
        switchMap((fetched) => {
          if (fetched) {
            return this.store.select(selectAllGeneralChoices).pipe(take(1));
          } else {
            return of(null);
          }
        })
      )
      .subscribe((generalChoice) => {
        if (generalChoice) {
          Object.keys(generalChoice).forEach((elementId: string) => {
            const elemId = <GeneralChoiceElementId>elementId;
            const fcLevelId = this.form.get(`${elementId}.levelId`);
            const fcVariantId = this.form.get(`${elementId}.variantId`);
            fcLevelId?.setValue(generalChoice[elemId].levelId);
            fcVariantId?.setValue(generalChoice[elemId].variantId);

            if (elemId === 'walls') {
              const fcWallpaper = this.form.get(`${elementId}.wallpaper`);
              const fcCeilingLevelId = this.form.get(`${elementId}.ceilingLevelId`);
              const fcCeilingVariantId = this.form.get(`${elementId}.ceilingVariantId`);
              fcWallpaper?.setValue(generalChoice[elemId].wallpaper);
              fcCeilingLevelId?.setValue(generalChoice[elemId].ceilingLevelId);
              fcCeilingVariantId?.setValue(generalChoice[elemId].ceilingVariantId);
            }
            if (elemId === 'floor') {
              const fcBaseboard = this.form.get(`${elementId}.baseboard`);
              fcBaseboard?.setValue(generalChoice[elemId].baseboard);
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
    this.store.dispatch(GeneralChoiceActions.saveGeneralChoice({ generalChoice: this.form.value }));
  }
}
