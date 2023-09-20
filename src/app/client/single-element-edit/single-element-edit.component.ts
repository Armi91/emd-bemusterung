import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Subject, take, takeUntil } from 'rxjs';
import { RoomElement } from 'src/app/interfaces/room-element.interface';
import { GeneralChoicesService } from 'src/app/services/general-choices.service';
import { LevelVariant } from 'src/app/interfaces/room-element.interface';

@Component({
  selector: 'app-single-element-edit',
  templateUrl: './single-element-edit.component.html',
  styles: [],
})
export class SingleElementEditComponent implements OnInit, OnDestroy {
  @Input({ required: true }) elementId!: string;
  @Output() formReady = new EventEmitter<{
    form: FormGroup;
    elementId: string;
  }>();

  form!: FormGroup;
  element: RoomElement | null = null;
  variants: LevelVariant[] = [];

  notifier$ = new Subject();

  constructor(private gcService: GeneralChoicesService) {}

  ngOnInit(): void {
    this.gcService
      .getElement(this.elementId, false)
      .pipe(take(1))
      .subscribe((element) => {
        this.element = element;
      });
    this.form = this.gcService.createSubform(this.elementId);
    this.formReady.emit({ form: this.form, elementId: this.elementId });
    this.listenOnLevels();
    this.listenOnCeiling();
  }

  ngOnDestroy(): void {
    this.notifier$.next(true);
    this.notifier$.complete();
  }

  listenOnLevels() {
    this.form.controls['levelId'].valueChanges
      .pipe(takeUntil(this.notifier$))
      .subscribe((levelId) => {
        this.variants =
          this.element?.levels.find((level) => level.id === levelId)
            ?.variants || [];
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

            this.form.controls['variantId'].removeValidators(
              Validators.required
            );
            this.form.setErrors(null);
            this.form.updateValueAndValidity();
            console.log(this.form.controls['variantId'].errors);
          }
        }
      });
  }

  listenOnCeiling() {
    if (this.elementId === 'walls') {
      this.form.controls['ceilingLevelId'].valueChanges
        .pipe(takeUntil(this.notifier$))
        .subscribe((ceilingLevelId) => {
          if (ceilingLevelId === 'white') {
            this.form.controls['ceilingVariantId'].setValue('');
            if (
              this.form.controls['ceilingVariantId'].hasValidator(
                Validators.required
              )
            ) {
              this.form.controls['ceilingVariantId'].removeValidators(
                Validators.required
              );
              this.form.controls['ceilingVariantId'].setErrors(null);
            }
            this.form.updateValueAndValidity();
          } else {
            this.form.controls['ceilingVariantId'].addValidators(
              Validators.required
            );
            this.form.updateValueAndValidity();
          }
        });
    }
  }

  scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
