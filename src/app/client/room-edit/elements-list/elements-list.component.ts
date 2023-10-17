import { Component, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RoomElement } from 'src/app/interfaces/room-element.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-elements-list',
  templateUrl: './elements-list.component.html',
  styles: [],
})
export class ElementsListComponent {
  @Input({ required: true }) roomType$!: BehaviorSubject<string>;

  roomElement$: Observable<RoomElement | null> | undefined;

  constructor(private dataSrv: DataService) {}

  ngOnInit(): void {
    this.roomType$.subscribe((roomType) => {
      if (roomType) {
        this.roomElement$ = this.dataSrv.getElement(roomType);
      }
    });
  }
}
