import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FileData } from 'src/app/interfaces/file.interface';
import { selectAllFiles } from '../state/files/files.selector';
import { FilesActions } from '../state/files/files.actions';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-files-dialog',
  templateUrl: './files-dialog.component.html',
  styles: [
    `
      .mdc-list-item.mdc-list-item--with-one-line {
        height: 60px;
      }
      .files-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 4px 0;
      }
    `,
  ],
})
export class FilesDialogComponent implements OnInit {
  files: FileData[] = [];
  descriptions = new FormGroup<{ [id: string]: FormControl<string> }>({});
  isUploading = false;

  constructor(private store: Store, private dataSrv: DataService) {}

  ngOnInit(): void {
    this.store.dispatch(FilesActions.fetchFiles());
    this.store.select(selectAllFiles).subscribe((files) => {
      this.files = files;
      this.files.forEach((file) => {
        this.descriptions.addControl(
          file.id,
          new FormControl(file.description, { nonNullable: true })
        );
      });
    });
  }

  async deleteFile(fileName: string, id: string) {
    this.store.dispatch(FilesActions.deleteFile({ id, fileName }));
  }

  saveChanges() {
    const updateTasks: Promise<any>[] = [];
    Object.keys(this.descriptions.controls).forEach((id) => {
      updateTasks.push(
        this.dataSrv.updateFileDescription(id, this.descriptions.controls[id].value)
      );
    });
    Promise.all(updateTasks).then(() => {
      console.log('updated');
    });
  }
}
