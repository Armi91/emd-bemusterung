import { Injectable } from '@angular/core';
import {
  Firestore,
  doc,
  setDoc,
  Timestamp,
  docData,
  updateDoc,
  deleteField,
} from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { Observable, firstValueFrom, map, of, switchMap } from 'rxjs';
import { selectUserId, selectUserProjectId } from '../auth/auth.selector';
import { ProjectState } from '../client/state/project/project.state';
import { RoomState } from '../client/state/room/rooms.state';
import { roomTypes } from '../data/roomTypes';
import { RoomData, RoomExtra } from '../interfaces/room.interface';
import { ProjectData } from '../interfaces/project.interface';
import {
  generalChoiceElements,
  generalChoiceSanitarElements,
} from '../data/general-choice-elements';
import { RoomElement } from '../interfaces/room-element.interface';
// import { floor } from '../data/elements/floor';
import { walls } from '../data/elements/walls';
import { windowsills } from '../data/elements/windowsill';
import { doors } from '../data/elements/doors';
import { doorHardware } from '../data/elements/doorHardware';
import { electricEquipment } from '../data/elements/electricEquipment';
import { floor } from '../data/elements/floor';
import {
  GeneralChoiceState,
  generalChoiceInitialState,
} from '../client/state/general-choice/general-choice.state';
import {
  flushPlate,
  showerSystemDrain,
  showerSystemFitting,
  showerSystemOther,
  sink,
  sinkFaucet,
  toilet,
} from '../data/sanitar';
import {
  GeneralChoiceSanitarState,
  generalChoiceSanitarInitialState,
} from '../client/state/general-choice-sanitar/general-choice-sanitar.state';
import { FileData } from '../interfaces/file.interface';
import { FilesState } from '../client/state/files/files.state';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private firestore: Firestore, private store: Store, private toastr: ToastrService) {}

  get roomTypes$() {
    return of(roomTypes);
  }

  get generalChoiceElements() {
    return generalChoiceElements;
  }

  get generalChoiceSanitarElements() {
    return generalChoiceSanitarElements;
  }

  getElement(elementId: string): Observable<RoomElement | null> {
    let element: Observable<RoomElement | null>;
    switch (elementId) {
      case 'floor':
        element = of(floor);
        break;
      case 'walls':
        element = of(walls);
        break;
      case 'windowsills':
        element = of(windowsills);
        break;
      case 'doors':
        element = of(doors);
        break;
      case 'doorHardware':
        element = of(doorHardware);
        break;
      case 'electricEquipment':
        element = of(electricEquipment);
        break;
      case 'sink':
        element = of(sink);
        break;
      case 'sinkFaucet':
        element = of(sinkFaucet);
        break;
      case 'toilet':
        element = of(toilet);
        break;
      case 'flushPlate':
        element = of(flushPlate);
        break;
      case 'showerSystemFitting':
        element = of(showerSystemFitting);
        break;
      case 'showerSystemDrain':
        element = of(showerSystemDrain);
        break;
      case 'showerSystemOther':
        element = of(showerSystemOther);
        break;
      default:
        element = of(null);
        break;
    }

    return element;
  }

  async createProject(project: ProjectData) {
    try {
      const docRef = await doc(this.firestore, 'projects', project.id);
      await setDoc(docRef, {
        projectData: {
          ...project,
          lastUpdated: Timestamp.now(),
          isAccepted: false,
        },
      });

      const uid = await firstValueFrom(this.store.select(selectUserId));
      if (uid) {
        return updateDoc(doc(this.firestore, 'users', uid), {
          projectsIds: [project.id],
        });
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error creating project', error);
      return error;
    }
  }

  fetchProject(projectId?: string) {
    if (projectId) {
      const project = <Observable<{ projectData: ProjectState }>>(
        docData(doc(this.firestore, `projects/${projectId}`))
      );
      return project.pipe(map((project) => project.projectData));
    } else {
      return this.store.select(selectUserProjectId).pipe(
        switchMap((usersProjectId) => {
          return <Observable<{ projectData: ProjectState }>>(
            docData(doc(this.firestore, `projects/${usersProjectId}`))
          );
        }),
        map((project) => project.projectData)
      );
    }
  }

  async saveRooms(rooms: RoomState): Promise<any> {
    console.log(rooms);

    const projectId = await firstValueFrom(this.store.select(selectUserProjectId));
    updateDoc(doc(this.firestore, `projects/${projectId}`), {
      rooms,
    });
  }

  async deleteRoom(roomId: string): Promise<any> {
    const projectId = await firstValueFrom(this.store.select(selectUserProjectId));
    return updateDoc(doc(this.firestore, `projects/${projectId}`), {
      [`rooms.${roomId}`]: deleteField(),
    });
  }

  async saveRoom(room: RoomData): Promise<any> {
    const projectId = await firstValueFrom(this.store.select(selectUserProjectId));

    const projectRef = doc(this.firestore, `projects/${projectId}`);
    return updateDoc(projectRef, {
      [`rooms.${room.id}`]: room,
    });
  }

  fetchRooms(): Observable<RoomState> {
    return this.store.select(selectUserProjectId).pipe(
      switchMap((usersProjectId) => {
        return <Observable<{ rooms: RoomState }>>(
          docData(doc(this.firestore, `projects/${usersProjectId}`))
        );
      }),
      map((project) => project.rooms)
    );
  }

  async saveGeneralChoice(generalChoice: GeneralChoiceState): Promise<any> {
    console.log(generalChoice);

    const projectId = await firstValueFrom(this.store.select(selectUserProjectId));
    updateDoc(doc(this.firestore, `projects/${projectId}`), {
      generalChoice,
    });
  }

  fetchGeneralChoice(): Observable<GeneralChoiceState> {
    return this.store.select(selectUserProjectId).pipe(
      switchMap((usersProjectId) => {
        return <Observable<{ generalChoice: GeneralChoiceState }>>(
          docData(doc(this.firestore, `projects/${usersProjectId}`))
        );
      }),
      map((project) => project.generalChoice || generalChoiceInitialState)
    );
  }

  fetchGeneralChoiceSanitar(): Observable<GeneralChoiceSanitarState> {
    return this.store.select(selectUserProjectId).pipe(
      switchMap((usersProjectId) => {
        return <Observable<{ generalChoiceSanitar: GeneralChoiceSanitarState }>>(
          docData(doc(this.firestore, `projects/${usersProjectId}`))
        );
      }),
      map((project) => project.generalChoiceSanitar || generalChoiceSanitarInitialState)
    );
  }

  async saveGeneralChoiceSanitar(generalChoiceSanitar: GeneralChoiceSanitarState): Promise<any> {
    console.log(generalChoiceSanitar);

    const projectId = await firstValueFrom(this.store.select(selectUserProjectId));
    updateDoc(doc(this.firestore, `projects/${projectId}`), {
      generalChoiceSanitar,
    });
  }

  fetchFiles(): Observable<FilesState> {
    return this.store.select(selectUserProjectId).pipe(
      switchMap((usersProjectId) => {
        return <Observable<{ files: FilesState }>>(
          docData(doc(this.firestore, `projects/${usersProjectId}`))
        );
      }),
      map((project) => project.files)
    );
  }

  async deleteFile(id: string): Promise<any> {
    const projectId = await firstValueFrom(this.store.select(selectUserProjectId));
    return updateDoc(doc(this.firestore, `projects/${projectId}`), {
      [`files.${id}`]: deleteField(),
    });
  }

  async addFile(file: FileData): Promise<any> {
    const projectId = await firstValueFrom(this.store.select(selectUserProjectId));
    const projectRef = doc(this.firestore, `projects/${projectId}`);
    return updateDoc(projectRef, {
      [`files.${file.id}`]: file,
    });
  }

  async updateFileDescription(fileId: string, description: string): Promise<any> {
    const projectId = await firstValueFrom(this.store.select(selectUserProjectId));
    const projectRef = doc(this.firestore, `projects/${projectId}`);
    return updateDoc(projectRef, {
      [`files.${fileId}.description`]: description,
    });
  }

  async updateRoomExtras(roomId: string, extras: RoomExtra): Promise<any> {
    const projectId = await firstValueFrom(this.store.select(selectUserProjectId));
    const projectRef = doc(this.firestore, `projects/${projectId}`);

    return updateDoc(projectRef, {
      [`rooms.${roomId}.roomExtras.${extras.id}`]: extras,
    }).catch((error) => {
      console.error(error)
      this.toastr.error('Nie udało się zapisać zmian', 'Błąd');
    }).then(() => {
      this.toastr.success('Zapisano zmiany');
    })
  }

  async deleteRoomExtra(roomId: string, extraId: string) {
    const projectId = await firstValueFrom(this.store.select(selectUserProjectId));
    const projectRef = doc(this.firestore, `projects/${projectId}`);

    return updateDoc(projectRef, {
      [`rooms.${roomId}.roomExtras.${extraId}`]: deleteField(),
    }).catch((error) => {
      console.error(error)
      this.toastr.error('Nie udało się zapisać zmian', 'Błąd');
    }).then(() => {
      this.toastr.success('Usunięto zmianę');
    })
  }
}
