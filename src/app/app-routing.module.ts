import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { ClientModule } from './client/client.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'c/init',
  },
  {
    path: 'auth',
    loadChildren: () => AuthModule
  },
  {
    path: 'c',
    loadChildren: () => ClientModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
