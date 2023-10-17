import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectRoomExtras } from 'src/app/client/state/room/room.selector';
import { RoomExtra } from 'src/app/interfaces/room.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-changes-list',
  templateUrl: './changes-list.component.html',
  styles: [`
    .mat-mdc-cell {
      padding-top: 12px;
      padding-bottom: 12px;
    }
  `]
})
export class ChangesListComponent {

  @Input({required: true}) roomId!: string;
  @Output() editRequested = new EventEmitter<RoomExtra>();

  changesList$: Observable<RoomExtra[]> | undefined;
  displayedColumns: string[] = ['elementName', 'description', 'actions'];

  constructor(private store: Store, private dataSrv: DataService) {
  }
  
  ngOnInit() {
    this.changesList$ = this.store.select(selectRoomExtras(this.roomId));
  }

  deleteChange(changeId: string) {
    this.dataSrv.deleteRoomExtra(this.roomId, changeId);
  }

  editChange(element: RoomExtra) {
    this.editRequested.emit(element);
  }
}
