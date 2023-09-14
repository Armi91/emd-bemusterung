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
import { RoomData } from '../interfaces/room.interface';
import { ProjectData } from '../interfaces/project.interface';
import { generalChoiceElements } from '../data/general-choice-elements';
import { RoomElement } from '../interfaces/room-element.interface';
// import { floor } from '../data/elements/floor';
import { walls } from '../data/elements/walls';
import { windowsills } from '../data/elements/windowsill';
import { doors } from '../data/elements/doors';
import { doorHardware } from '../data/elements/doorHardware';
import { electricEquipment } from '../data/elements/electricEquipment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private firestore: Firestore, private store: Store) {}

  get roomTypes$() {
    return of(roomTypes);
  }

  get generalChoiceElements() {
    return generalChoiceElements;
  }

  getElement(elementId: string): Observable<RoomElement | null> {
    let element: Observable<RoomElement | null>;
    switch (elementId) {
      // case 'floor':
      //   element = of(floor);
      //   break;
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

    const projectId = await firstValueFrom(
      this.store.select(selectUserProjectId)
    );
    updateDoc(doc(this.firestore, `projects/${projectId}`), {
      rooms,
    });
  }

  async deleteRoom(roomId: string): Promise<any> {
    const projectId = await firstValueFrom(
      this.store.select(selectUserProjectId)
    );
    return updateDoc(doc(this.firestore, `projects/${projectId}`), {
      [`rooms.${roomId}`]: deleteField(),
    });
  }

  async saveRoom(room: RoomData): Promise<any> {
    const projectId = await firstValueFrom(
      this.store.select(selectUserProjectId)
    );

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
}
