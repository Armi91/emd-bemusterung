import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FilesActions } from './files.actions';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Injectable()
export class FilesEffects {
  
  $addFile = createEffect(() => {
    return this.actions$.pipe(
      ofType(FilesActions.addFile),
      switchMap((action) => {
        return this.dataSrv.addFile(action.file);
      }),
      map(() => FilesActions.addFileSuccessful()),
      catchError((error) => of(FilesActions.addFileFailed({ error })))
    );
  });

  $addFileSuccessful = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(FilesActions.addFileSuccessful),
        tap(() => {
          this.toastr.success('Dodano nowy plik');
        })
      );
    },
    { dispatch: false }
  );

  $addFileFailed = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(FilesActions.addFileFailed),
        tap(() => {
          this.toastr.error('Wystąpił problem z dodaniem pliku');
        })
      );
    },
    { dispatch: false }
  );

  $deleteFile = createEffect(() => {
    return this.actions$.pipe(
      ofType(FilesActions.deleteFile),
      switchMap((action) => {
        this.fileUpload.deleteFile(action.fileName);
        return this.dataSrv.deleteFile(action.id);
      }),
      map(() => FilesActions.deleteFileSuccessful()),
      catchError((error) => of(FilesActions.deleteFileFailed({ error })))
    );
  });

  $deleteFileSuccessful = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(FilesActions.deleteFileSuccessful),
        tap(() => {
          this.toastr.success('Usunięto plik');
        })
      );
    },
    { dispatch: false }
  );

  $deleteFileFailed = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(FilesActions.deleteFileFailed),
        tap(() => {
          this.toastr.error('Wystąpił problem z usunięciem pliku');
        })
      );
    },
    { dispatch: false }
  );

  $fetchFiles = createEffect(() => {
    return this.actions$.pipe(
      ofType(FilesActions.fetchFiles),
      switchMap(() => {
        console.log('fetching files');
        
        return this.dataSrv.fetchFiles();
      }),
      map((files) => FilesActions.fetchFilesSuccessful({ files })),
      catchError((error) => of(FilesActions.fetchFilesFailed({ error })))
    );
  }
  );
  

  constructor(
    private actions$: Actions,
    private dataSrv: DataService,
    private toastr: ToastrService,
    private router: Router,
    private store: Store,
    private fileUpload: FileUploadService
  ) {}
}
