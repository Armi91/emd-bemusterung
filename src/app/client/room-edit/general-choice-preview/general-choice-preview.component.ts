import { Component, Input } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { SelectedItemPreview } from 'src/app/interfaces/selected-item-preview.interface';
import { PreviewService } from 'src/app/services/preview.service';

@Component({
  selector: 'app-general-choice-preview',
  templateUrl: './general-choice-preview.component.html',
  styles: [],
})
export class GeneralChoicePreviewComponent {
  @Input({ required: true }) currentSelection$!: BehaviorSubject<string>;
  @Input({ required: true }) roomType!: string;

  currentPreview$: Observable<SelectedItemPreview[]> | undefined;

  constructor(private previewSrv: PreviewService) {}

  ngOnInit(): void {
    this.currentPreview$ = this.currentSelection$
      .pipe(
        switchMap((elementType) =>
          this.previewSrv.createSelectedPreview('3XN0gt00Ktf2pm18jO6n', this.roomType, [elementType])
        )
      )
  }
}
