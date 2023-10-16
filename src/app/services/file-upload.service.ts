import { Injectable } from '@angular/core';
import { Storage, deleteObject, ref, uploadBytesResumable } from '@angular/fire/storage';
import { Store } from '@ngrx/store';
import { selectUserProjectId } from '../auth/auth.selector';
import { BehaviorSubject, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  uploadProgress$ = new BehaviorSubject<number | null>(null);

  constructor(private storage: Storage, private store: Store) {}

  async uploadFile(file: File) {
    const projectId = await firstValueFrom(this.store.select(selectUserProjectId));
    const filePath = `uploadedFiles/${projectId}/${file.name}`;
    const fileRef = ref(this.storage, filePath);
    const task = uploadBytesResumable(fileRef, file);
    task.on('state_changed', (snapshot) => {
      this.uploadProgress$.next(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100));
    }, (error) => {
      console.log(error);
    }, () => {
      console.log('Upload complete');
    });
    return task;
  }

  async deleteFile(fileName: string) {
    const projectId = await firstValueFrom(this.store.select(selectUserProjectId));
    const filePath = `uploadedFiles/${projectId}/${fileName}`;
    const fileRef = ref(this.storage, filePath);
    return await deleteObject(fileRef)
  }
}
