import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, combineLatest, concatMap, mergeMap, switchMap } from 'rxjs';
import { selectUserProjectId } from 'src/app/auth/auth.selector';
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

  constructor(private previewSrv: PreviewService, private store: Store) {}

  ngOnInit(): void {
    this.currentPreview$ = combineLatest([this.currentSelection$, this.store.select(selectUserProjectId)]).pipe(
      switchMap(([elementType, projectId]) => {
        console.log(elementType, projectId);
        return this.previewSrv.createSelectedPreview(projectId!, this.roomType, [elementType!])
      })
    )
  }
}
