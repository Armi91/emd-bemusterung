import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { AuthGuard } from '../auth/auth.guard';
import { InitComponent } from './init/init.component';
import { GeneralChoicesComponent } from './general-choices/general-choices.component';

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
        path: 'general',
        component: GeneralChoicesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
