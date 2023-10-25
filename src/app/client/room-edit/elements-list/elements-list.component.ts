import { Component, Input } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { ElementLevel, RoomElement } from 'src/app/interfaces/room-element.interface';
import { GeneralChoicesService } from 'src/app/services/general-choices.service';

@Component({
  selector: 'app-elements-list',
  templateUrl: './elements-list.component.html',
  styles: [],
})
export class ElementsListComponent {
  @Input({ required: true }) roomSelection$!: BehaviorSubject<string>;
  @Input({ required: true }) roomType!: string;

  roomElement$: Observable<RoomElement | null> | undefined;

  constructor(private gcSrv: GeneralChoicesService) {}

  ngOnInit(): void {
    this.roomSelection$.subscribe((roomSelection) => {
      if (roomSelection) {
        console.log(roomSelection);
        
        this.roomElement$ = this.gcSrv.getElement(roomSelection).pipe(
          map((room) => {
            const r: RoomElement | null = {...room} as RoomElement;
            if (this.roomType === 'general') {
              if (roomSelection === 'floor' || roomSelection === 'walls') {
                let tiles: ElementLevel;
                if (roomSelection === 'floor') {
                  const ind = room?.levels.findIndex((l) => l.id === 'fliesen_3')!
                  tiles = {...room?.levels[ind]!};
                  tiles.level = 'mehrprice';
                  tiles.extraPrice = 20;
                  r!.levels![ind] = tiles;
                }
                return r;
              } else {
                return r;
              }
            } else {
              return r
            }
          })
        )
      }
    });
  }
}
