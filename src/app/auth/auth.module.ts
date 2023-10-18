import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth.effects';
import { SharedModule } from '../shared/shared.module';
import { PasswordResetComponent } from './password-reset/password-reset.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    PasswordResetComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule { }
