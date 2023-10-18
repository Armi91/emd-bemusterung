import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Subject, debounceTime, take, takeUntil } from 'rxjs';
import { RoomElement } from 'src/app/interfaces/room-element.interface';
import { GeneralChoicesService } from 'src/app/services/general-choices.service';
import { LevelVariant } from 'src/app/interfaces/room-element.interface';
import { Store } from '@ngrx/store';
import { GeneralChoiceActions } from '../state/general-choice/general-choice.actions';
import {
  GeneralChoiceElementId,
  GeneralChoiceSanitarElementId,
} from 'src/app/data/general-choice-elements';
import { GeneralChoiceSanitarActions } from '../state/general-choice-sanitar/general-choice-sanitar.actions';

@Component({
  selector: 'app-single-element-edit',
  templateUrl: './single-element-edit.component.html',
  styles: [],
})
export class SingleElementEditComponent implements OnInit, OnDestroy {
  @Input({ required: true }) elementId!: GeneralChoiceElementId | GeneralChoiceSanitarElementId;
  @Input() forGeneralChoice = false;
  @Input() forSanitarGeneralChoice: boolean = false;
  @Output() formReady = new EventEmitter<{
    form: FormGroup;
    elementId: GeneralChoiceElementId | GeneralChoiceSanitarElementId;
  }>();

  form!: FormGroup;
  element: RoomElement | null = null;
  variants: LevelVariant[] = [];

  notifier$ = new Subject();

  constructor(private gcService: GeneralChoicesService, private store: Store) {}

  ngOnInit(): void {
    this.gcService
      .getElement(this.elementId, this.forGeneralChoice, this.forSanitarGeneralChoice)
      .pipe(take(1))
      .subscribe((element) => {
        this.element = element;
      });
    this.form = this.gcService.createSubform(this.elementId);
    this.formReady.emit({ form: this.form, elementId: this.elementId });
    this.listenOnLevels();
    this.listenOnCeiling();
    this.listenOnVariants();
    this.formSpecificListeners();
  }

  ngOnDestroy(): void {
    this.notifier$.next(true);
    this.notifier$.complete();
  }

  listenOnLevels() {
    this.form.controls['levelId'].valueChanges
      .pipe(takeUntil(this.notifier$))
      .subscribe((levelId: string) => {
        if (this.forGeneralChoice) {
          this.store.dispatch(
            GeneralChoiceActions.updateLevel({
              elementId: <GeneralChoiceElementId>this.elementId,
              selectedLevel: levelId,
            })
          );
        } else if (this.forSanitarGeneralChoice) {
          this.store.dispatch(
            GeneralChoiceSanitarActions.updateLevel({
              elementId: <GeneralChoiceSanitarElementId>this.elementId,
              selectedLevel: levelId,
            })
          );
        }
        this.variants = this.element?.levels.find((level) => level.id === levelId)?.variants || [];
        if (this.variants.length < 1) {
          this.variants = [];
          this.form.controls['variantId'].setValue('');
          this.form.controls['variantId'].removeValidators(Validators.required);
          this.form.controls['variantId'].setErrors(null);
          this.form.updateValueAndValidity();
        }

        if (this.variants.length > 1) {
          this.form.controls['variantId'].setValue('');
          this.form.controls['variantId'].addValidators(Validators.required);
          this.form.updateValueAndValidity();
        }

        if (this.elementId === 'walls') {
          if (this.form.controls['levelId'].value === 'coloredPaint') {
            this.form.controls['variantId'].addValidators(Validators.required);
            this.form.updateValueAndValidity();
          } else {
            this.form.controls['variantId'].setValue('');

            this.form.controls['variantId'].removeValidators(Validators.required);
            this.form.setErrors(null);
            this.form.updateValueAndValidity();
          }
        }
        if (levelId === 'parkett_2') {
          this.form.controls['parquetDirection'].addValidators(Validators.required);
          this.form.updateValueAndValidity();
        } else {
          this.form.controls['parquetDirection'].setValue('');
          this.form.controls['parquetDirection'].removeValidators(Validators.required);
          this.form.controls['parquetDirection'].setErrors(null);
          this.form.updateValueAndValidity();
        }
      });
  }

  listenOnCeiling() {
    if (this.elementId === 'walls') {
      this.form.controls['ceilingLevelId'].valueChanges
        .pipe(takeUntil(this.notifier$))
        .subscribe((ceilingLevelId) => {
          if (this.forGeneralChoice) {
            this.store.dispatch(
              GeneralChoiceActions.updateCeilingLevel({ selectedCeilingLevel: ceilingLevelId })
            );
          } else if (this.forSanitarGeneralChoice) {
            this.store.dispatch(
              GeneralChoiceSanitarActions.updateCeilingLevel({
                selectedCeilingLevel: ceilingLevelId,
              })
            );
          }
          if (ceilingLevelId === 'white') {
            this.form.controls['ceilingVariantId'].setValue('');
            if (this.form.controls['ceilingVariantId'].hasValidator(Validators.required)) {
              this.form.controls['ceilingVariantId'].removeValidators(Validators.required);
              this.form.controls['ceilingVariantId'].setErrors(null);
            }
            this.form.updateValueAndValidity();
          } else {
            this.form.controls['ceilingVariantId'].addValidators(Validators.required);
            this.form.updateValueAndValidity();
          }
        });
    }
  }

  listenOnVariants() {
    this.form.controls['variantId'].valueChanges
      .pipe(takeUntil(this.notifier$))
      .subscribe((variantId) => {
        if (this.forGeneralChoice) {
          this.store.dispatch(
            GeneralChoiceActions.updateVariant({
              elementId: <GeneralChoiceElementId>this.elementId,
              selectedVariant: variantId,
            })
          );
        } else if (this.forSanitarGeneralChoice) {
          this.store.dispatch(
            GeneralChoiceSanitarActions.updateVariant({
              elementId: <GeneralChoiceSanitarElementId>this.elementId,
              selectedVariant: variantId,
            })
          );
        }
      });
  }

  formSpecificListeners() {
    switch (this.elementId) {
      case 'floor':
        this.form.controls['baseboard'].valueChanges
          .pipe(takeUntil(this.notifier$))
          .subscribe((baseboard) => {
            if (this.forGeneralChoice) {
              this.store.dispatch(
                GeneralChoiceActions.updateBaseboard({ selectedBaseboard: baseboard })
              );
            } else if (this.forSanitarGeneralChoice) {
              this.store.dispatch(
                GeneralChoiceSanitarActions.updateBaseboard({ selectedBaseboard: baseboard })
              );
            }
          });
        break;
      case 'walls':
        this.form.controls['wallpaper'].valueChanges
          .pipe(takeUntil(this.notifier$))
          .subscribe((wallpaper) => {
            this.store.dispatch(
              GeneralChoiceActions.updateWallpaper({ selectedWallpaper: wallpaper })
            );
          });
        this.form.controls['ceilingVariantId'].valueChanges
          .pipe(takeUntil(this.notifier$), debounceTime(500))
          .subscribe((ceilingVariantId) => {
            if (this.forGeneralChoice) {
              this.store.dispatch(
                GeneralChoiceActions.updateCeilingVariant({
                  selectedCeilingVariant: ceilingVariantId,
                })
              );
            } else if (this.forSanitarGeneralChoice) {
              this.store.dispatch(
                GeneralChoiceSanitarActions.updateCeilingVariant({
                  selectedCeilingVariant: ceilingVariantId,
                })
              );
            }
          });
        break;
      case 'windowsills':
        break;
      case 'doors':
        break;
      case 'doorHardware':
        break;
      case 'electricEquipment':
        break;
      default:
        break;
    }
  }

  scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
