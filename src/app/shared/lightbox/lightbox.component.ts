import { Component, Input } from '@angular/core';
import { LightGallerySettings } from 'lightgallery/lg-settings';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styles: [`
    :host {
      position: relative;
    }
    mat-icon {
      position: absolute;
      top: 16px;
      right: 16px;
      cursor: pointer;
      z-index: 1;
    }
    img {
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
      }
    }
  `]
})
export class LightboxComponent {

  @Input({ required: true }) image: string | undefined;

  settings: LightGallerySettings = {
    download: false,
  }
}
