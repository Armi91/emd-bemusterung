import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { AuthGuard } from '../auth/auth.guard';
import { InitComponent } from './init/init.component';
import { GeneralChoicesComponent } from './general-choices/general-choices.component';
import { RoomsSelectComponent } from './rooms/rooms-select/rooms-select.component';
import { GeneralChoicesSanitarComponent } from './general-choices/general-choices-sanitar/general-choices-sanitar.component';
import { RoomEditComponent } from './room-edit/room-edit.component';
import { ProjectPreviewComponent } from '../shared/project-preview/project-preview.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'init',
        component: InitComponent
      },
      {
        path: 'rooms',
        component: RoomsSelectComponent
      },
      {
        path: 'general',
        component: GeneralChoicesComponent
      },
      {
        path: 'general-sanitar',
        component: GeneralChoicesSanitarComponent
      },
      {
        path: 'room/:roomId/edit',
        component: RoomEditComponent
      },
      {
        path: 'preview/:projectId',
        component: ProjectPreviewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
