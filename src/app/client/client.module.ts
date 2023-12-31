import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { SharedModule } from '../shared/shared.module';
import { InitComponent } from './init/init.component';
import { EffectsModule } from '@ngrx/effects';
import { ProjectEffects } from './state/project/project.effects';
import { GeneralChoicesComponent } from './general-choices/general-choices.component';
import { RoomsSelectComponent } from './rooms/rooms-select/rooms-select.component';
import { RoomEffects } from './state/room/room.effects';
import { ConfirmRoomsDialogComponent } from './rooms/rooms-select/confirm-rooms-dialog/confirm-rooms-dialog.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SingleElementEditComponent } from './single-element-edit/single-element-edit.component';
import { GeneralChoiceEffects } from './state/general-choice/general-choice.effects';


@NgModule({
  declarations: [
    ClientComponent,
    InitComponent,
    GeneralChoicesComponent,
    RoomsSelectComponent,
    ConfirmRoomsDialogComponent,
    SidenavComponent,
    SingleElementEditComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    EffectsModule.forFeature([ProjectEffects, RoomEffects, GeneralChoiceEffects])
  ]
})
export class ClientModule { }
