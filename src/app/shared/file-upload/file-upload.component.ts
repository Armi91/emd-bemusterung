import { Component } from '@angular/core';
import { getDownloadURL } from '@angular/fire/storage';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Timestamp } from 'firebase/firestore';
import { FilesActions } from 'src/app/client/state/files/files.actions';
import { autoId } from 'src/app/helpers';
import { FileData } from 'src/app/interfaces/file.interface';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styles: [
  ]
})
export class FileUploadComponent {
  fileControl = new FormControl<File | null>(null);

  constructor(protected fileUploadService: FileUploadService, private store: Store) {
    this.fileUploadService.uploadProgress$.next(null);
    this.fileControl.valueChanges.subscribe(() => {
      this.fileUploadService.uploadProgress$.next(null);
    });
  }

  uploadFile() {
    this.fileUploadService.uploadFile(this.fileControl.value as File).then((snapshot) => {
      console.log(snapshot);
      getDownloadURL(snapshot.ref).then((url) => {
        const file: FileData = { 
          name: snapshot.ref.name,
          url,
          description: '',
          createdAt: Timestamp.now(),
          id: autoId()
         };
        this.store.dispatch(FilesActions.addFile({ file }));
      });
    })
  }
}
