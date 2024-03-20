import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GeneralChoiceSanitarActions } from './general-choice-sanitar.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { GeneralChoicesService } from 'src/app/services/general-choices.service';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';

@Injectable()
export class GeneralChoiceSanitarEffects {
  $saveGeneralChoiceSanitar = createEffect(() => {
    return this.actions$.pipe(
      ofType(GeneralChoiceSanitarActions.saveSanitarGeneralChoice),
      switchMap((action) => {
        return this.dataSrv.saveGeneralChoiceSanitar(action.generalChoiceSanitar);
      }),
      map(() => GeneralChoiceSanitarActions.saveSanitarGeneralChoiceSuccessful()),
      catchError((error) =>
        of(GeneralChoiceSanitarActions.saveSanitarGeneralChoiceFailed({ error }))
      )
    );
  });

  $saveGeneralChoiceSanitarSuccessful = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(GeneralChoiceSanitarActions.saveSanitarGeneralChoiceSuccessful),
        tap(() => {
          this.toastr.success('Die Standard-Auswahl wurde gespeichert');
        })
      );
    },
    { dispatch: false }
  );

  $saveGeneralChoiceSanitarFailed = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(GeneralChoiceSanitarActions.saveSanitarGeneralChoiceFailed),
        tap(() => {
          this.toastr.error('Beim Speichern der Standard-Auswahl ist ein Fehler aufgetreten.');
        })
      );
    },
    { dispatch: false }
  );

  $fetchGeneralChoiceSanitar = createEffect(() => {
    return this.actions$.pipe(
      ofType(GeneralChoiceSanitarActions.fetchSanitarGeneralChoice),
      switchMap(() => {
        return this.dataSrv.fetchGeneralChoiceSanitar();
      }),
      map((generalChoiceSanitar) =>
        GeneralChoiceSanitarActions.fetchSanitarGeneralChoiceSuccessful({ generalChoiceSanitar })
      ),
      catchError((error) =>
        of(GeneralChoiceSanitarActions.fetchSanitarGeneralChoiceFailed({ error }))
      )
    );
  });

  $fetchGeneralChoiceSanitarSuccessful = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(GeneralChoiceSanitarActions.fetchSanitarGeneralChoiceSuccessful),
        tap(() => {
          this.gcSrv.generalChoicesSanitarFetched$.next(true);
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private dataSrv: DataService,
    private toastr: ToastrService,
    private gcSrv: GeneralChoicesService
  ) {}
}
