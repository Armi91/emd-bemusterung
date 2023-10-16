import { DEFAULT_CURRENCY_CODE, NgModule, forwardRef, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator } from '@angular/fire/functions';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { authReducer } from './auth/auth.reducer';
import { projectReducer } from './client/state/project/project.reducer';
import { roomReducer } from './client/state/room/room.reducer';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatRadioButton } from '@angular/material/radio';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { generalChoiceReducer } from './client/state/general-choice/general-choice.reducer';
import { generalChoiceSanitarReducer } from './client/state/general-choice-sanitar/general-choice-sanitar.reducer';
import { connectStorageEmulator } from 'firebase/storage';
import { filesReducer } from './client/state/files/files.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => {
      const functions = getFunctions();
      connectFunctionsEmulator(functions, 'localhost', 5001);
      return functions;
    }),
    provideStorage(() => {
      const storage = getStorage();
      connectStorageEmulator(storage, 'localhost', 9199);
      return storage;
    }),
    ToastrModule.forRoot({
      timeOut: 10000,
      extendedTimeOut: 5000,
      positionClass: 'toast-top-right',
    }),
    StoreModule.forRoot({
      auth: authReducer,
      project: projectReducer,
      room: roomReducer,
      generalChoice: generalChoiceReducer,
      generalChoiceSanitar: generalChoiceSanitarReducer,
      files: filesReducer
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    NgbModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
    { provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
