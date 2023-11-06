import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { ClientModule } from './client/client.module';
import { ProjectPreviewComponent } from './shared/project-preview/project-preview.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'c/general',
  },
  {
    path: 'auth',
    loadChildren: () => AuthModule
  },
  {
    path: 'c',
    loadChildren: () => ClientModule
  },
  {
    path: 'preview/:projectId',
    component: ProjectPreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
