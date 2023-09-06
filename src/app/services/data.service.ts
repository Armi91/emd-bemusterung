import { Injectable } from '@angular/core';
import { Firestore, doc, setDoc, Timestamp } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';
import { selectUserData, selectUserId } from '../auth/auth.selector';
import { updateDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private firestore: Firestore, private store: Store) {}
// TODO: Add project type
  async createProject(project: { id: string; }) {
    const docRef = await doc(this.firestore, 'projects', project.id);
    await setDoc(docRef, { projectData: {...project, lastUpdated: Timestamp.now()} });
    const uid = await firstValueFrom(this.store.select(selectUserId));
    if (uid) {
      return updateDoc(doc(this.firestore, 'users', uid), {
        projectsIds: [project.id],
      });
    } else {
      return null;
    }
  }
}
