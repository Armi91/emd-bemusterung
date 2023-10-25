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
import { GeneralChoicesSanitarComponent } from './general-choices/general-choices-sanitar/general-choices-sanitar.component';
import { RoomEditComponent } from './room-edit/room-edit.component';
import { GeneralChoiceSanitarEffects } from './state/general-choice-sanitar/general-choice-sanitar.effects';
import { FilesDialogComponent } from './files-dialog/files-dialog.component';
import { FilesEffects } from './state/files/files.effects';
import { ElementsListComponent } from './room-edit/elements-list/elements-list.component';
import { GeneralChoicePreviewComponent } from './room-edit/general-choice-preview/general-choice-preview.component';


@NgModule({
  declarations: [
    ClientComponent,
    InitComponent,
    GeneralChoicesComponent,
    RoomsSelectComponent,
    ConfirmRoomsDialogComponent,
    SidenavComponent,
    SingleElementEditComponent,
    GeneralChoicesSanitarComponent,
    RoomEditComponent,
    FilesDialogComponent,
    ElementsListComponent,
    GeneralChoicePreviewComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    EffectsModule.forFeature([ProjectEffects, RoomEffects, GeneralChoiceEffects, GeneralChoiceSanitarEffects, FilesEffects])
  ]
})
export class ClientModule { }
