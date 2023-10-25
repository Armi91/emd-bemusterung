import { Injectable } from '@angular/core';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { Observable, forkJoin, map, switchMap, tap } from 'rxjs';
import { FullProject } from '../interfaces/full-project.interface';
import {
  GeneralChoiceKeys,
  GeneralChoiceState,
} from '../client/state/general-choice/general-choice.state';
import { DataService } from './data.service';
import { SelectedItemPreview } from '../interfaces/selected-item-preview.interface';
import {
  GeneralChoiceSanitarKeys,
  GeneralChoiceSanitarState,
} from '../client/state/general-choice-sanitar/general-choice-sanitar.state';

@Injectable({
  providedIn: 'root',
})
export class PreviewService {
  constructor(private firestore: Firestore, private dataSrv: DataService) {}

  getFullProject(projectId: string): Observable<FullProject> {
    return docData(doc(this.firestore, `projects/${projectId}`)) as Observable<FullProject>;
  }

  getGeneralChoices(projectId: string): Observable<any> {
    return this.getFullProject(projectId).pipe(
      map((project: FullProject) => {
        return {
          generalChoice: project.generalChoice,
          generalChoiceSanitar: project.generalChoiceSanitar,
        };
      })
    );
  }

  createGeneralChoicePreview(generalChoice: GeneralChoiceState) {
    const keys = Object.keys(generalChoice) as GeneralChoiceKeys[];
    const choices = [];
    keys.forEach((key) => {
      // let choice = {
      //   selectedItem:
      // };
      switch (key) {
        case 'floor':
          break;
        case 'walls':
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
      console.log(key, generalChoice[key]);
    });
  }

  createSelectedSingleItemPreview(elementType: string, selectedItem: any) {
    return this.dataSrv.getElement(elementType).pipe(
      map((element) => {
        const selectedLevel = element?.levels.find((level) => level.id === selectedItem.levelId);
        const selectedVariant =
          selectedLevel?.variants.find((variant) => variant.id === selectedItem.variantId) || null;
        const selectedItemPreview: SelectedItemPreview = {
          elementName: element?.name || '',
          priceFor: element?.priceFor || '',
          levelName: selectedLevel?.title || '',
          extraPrice: selectedVariant?.extraPrice || selectedLevel?.extraPrice || 0,
          image: selectedVariant?.image || selectedLevel?.image || '',
          code: selectedVariant?.code || '',
        };
        return selectedItemPreview;
      })
    );
  }

  createSelectedPreview(
    projectId: string,
    roomType: string,
    elementTypes: string[]
  ): Observable<SelectedItemPreview[]> {
    return this.getFullProject(projectId).pipe(
      map((project: FullProject) => {
        if (roomType === 'bathroom') {
          return {
            ...(project.generalChoiceSanitar as GeneralChoiceSanitarState),
          };
        } else {
          return {
            ...(project.generalChoice as GeneralChoiceState),
          };
        }
      }),
      map((gc) => {
        if (roomType === 'bathroom') {
          const generalChoices = gc as GeneralChoiceSanitarState;
          return elementTypes.map((elementType) => {
            return this.createSelectedSingleItemPreview(
              elementType,
              generalChoices[elementType as GeneralChoiceSanitarKeys]
            );
          });
        } else {
          const generalChoices = gc as GeneralChoiceState;
          return elementTypes.map((elementType) => {
            return this.createSelectedSingleItemPreview(
              elementType,
              generalChoices[elementType as GeneralChoiceKeys]
            );
          });
        }
      }),
      switchMap((selectedItemPreviews) => forkJoin(selectedItemPreviews))
    );
  }
}
