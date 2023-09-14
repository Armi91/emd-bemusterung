import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatStep } from '@angular/material/stepper';
import { firstValueFrom } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { GeneralChoicesService } from 'src/app/services/general-choices.service';

@Component({
  selector: 'app-general-choices',
  templateUrl: './general-choices.component.html',
  styles: [],
})
export class GeneralChoicesComponent implements OnInit {
  form: FormGroup<any> = new FormGroup({});
  generalChoiceElements = this.dataSrv.generalChoiceElements;

  constructor(
    private dataSrv: DataService,
    private gcSrv: GeneralChoicesService
  ) {}

  ngOnInit(): void {}

  onFormReady(data: { form: FormGroup<any>; elementId: string }, step: MatStep) {
    this.form.addControl(data.elementId, data.form);
    this.form.updateValueAndValidity();
    step.stepControl = data.form;
  }

  onSubmit() {
    console.log(this.form.value);
    
  }
}
