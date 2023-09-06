import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { SharedModule } from '../shared/shared.module';
import { InitComponent } from './init/init.component';
import { EffectsModule } from '@ngrx/effects';
import { ProjectEffects } from './state/project/project.effects';
import { GeneralChoicesComponent } from './general-choices/general-choices.component';


@NgModule({
  declarations: [
    ClientComponent,
    InitComponent,
    GeneralChoicesComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    EffectsModule.forFeature([ProjectEffects])
  ]
})
export class ClientModule { }
