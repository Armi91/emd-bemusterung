import { Component, Input } from '@angular/core';
import { SelectedItemPreview } from 'src/app/interfaces/selected-item-preview.interface';

@Component({
  selector: 'app-general-choice-single-element',
  templateUrl: './general-choice-single-element.component.html',
  styles: [`
  img {
    max-width: 100%;
  }
`],
})
export class GeneralChoiceSingleElementComponent {
  @Input({ required: true }) element!: SelectedItemPreview;
}
