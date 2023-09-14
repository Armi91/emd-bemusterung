import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { RoomElement } from 'src/app/interfaces/room-element.interface';
import { GeneralChoicesService } from 'src/app/services/general-choices.service';

@Component({
  selector: 'app-single-element-edit',
  templateUrl: './single-element-edit.component.html',
  styles: [],
})
export class SingleElementEditComponent implements OnInit {
  @Input({ required: true }) elementId!: string;
  @Output() formReady = new EventEmitter<{
    form: FormGroup;
    elementId: string;
  }>();

  form!: FormGroup;
  element: Observable<RoomElement | null> | undefined;

  constructor(private gcService: GeneralChoicesService) {}

  ngOnInit(): void {
    this.form = this.gcService.createSubform(this.elementId);
    this.element = this.gcService.getElement(this.elementId);
    this.formReady.emit({ form: this.form, elementId: this.elementId });
  }
}
