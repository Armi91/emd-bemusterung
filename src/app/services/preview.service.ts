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
import { RoomState } from '../client/state/room/rooms.state';
import { RoomExtra, RoomExtras } from '../interfaces/room.interface';

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

  // createGeneralChoicePreview(generalChoice: GeneralChoiceState) {
  //   const keys = Object.keys(generalChoice) as GeneralChoiceKeys[];
  //   const choices = [];
  //   keys.forEach((key) => {
  //     // let choice = {
  //     //   selectedItem:
  //     // };
  //     switch (key) {
  //       case 'floor':
  //         break;
  //       case 'walls':
  //         break;
  //       case 'windowsills':
  //         break;
  //       case 'doors':
  //         break;
  //       case 'doorHardware':
  //         break;
  //       case 'electricEquipment':
  //         break;
  //       default:
  //         break;
  //     }
  //     console.log(key, generalChoice[key]);
  //   });
  // }

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
          description: selectedVariant?.description || selectedLevel?.description || '',
        };
        if (selectedItem?.baseboard) {
          selectedItemPreview.baseboard = selectedItem.baseboard;
        }
        if (selectedItem?.parquetDirection) {
          selectedItemPreview.parquetDirection = selectedItem.parquetDirection;
        }
        if (selectedItem?.ceilingLevelId) {
          selectedItemPreview.ceiling = selectedItem.ceilingLevelId;
        }
        if (selectedItem?.ceilingVariantId) {
          selectedItemPreview.ceilingRAL = selectedItem.ceilingVariantId;
        }
        if (selectedItem?.walpapper) {
          selectedItemPreview.walpaper = selectedItem.walpaper;
        }
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

  createGeneralChoicePreview(gc: GeneralChoiceState | GeneralChoiceSanitarState, roomType: string) {
    if (roomType === 'bathroom') {
      const generalChoices = gc as GeneralChoiceSanitarState;
      return Object.keys(generalChoices).map((elementType) => {
        return this.createSelectedSingleItemPreview(
          elementType,
          generalChoices[elementType as GeneralChoiceSanitarKeys]
        )
      })
    } else {
      const generalChoices = gc as GeneralChoiceState;
      return Object.keys(generalChoices).map((elementType) => {
        return this.createSelectedSingleItemPreview(
          elementType,
          generalChoices[elementType as GeneralChoiceKeys]
        )
      })
    }
  }

  parseRooms(rooms: RoomState) {
    return Object.keys(rooms).map((key) => {
      return {
        area: rooms[key].area,
        name: rooms[key].name,
        roomNumber: rooms[key].roomNumber,
        roomType: rooms[key].roomType === 'bathroom' ? 'Pomieszczenie sanitarne' : 'Pomieszczenie suche',
        roomExtras: rooms[key].roomExtras ? this.parseRoomExtras(rooms[key].roomExtras!) : [],
      };
    });
  }

  parseRoomExtras(roomExtras: RoomExtras) {
    return Object.values(roomExtras) || [];
  }
}
