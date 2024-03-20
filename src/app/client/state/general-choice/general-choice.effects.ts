import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DataService } from 'src/app/services/data.service';
import { GeneralChoiceActions } from './general-choice.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { GeneralChoicesService } from 'src/app/services/general-choices.service';

@Injectable()
export class GeneralChoiceEffects {
  $saveGeneralChoice = createEffect(() => {
    return this.actions$.pipe(
      ofType(GeneralChoiceActions.saveGeneralChoice),
      switchMap((action) => {
        return this.dataSrv.saveGeneralChoice(action.generalChoice);
      }),
      map(() => GeneralChoiceActions.saveGeneralChoiceSuccessful()),
      catchError((error) => of(GeneralChoiceActions.saveGeneralChoiceFailed({ error })))
    );
  });

  $saveGeneralChoiceSuccessful = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(GeneralChoiceActions.saveGeneralChoiceSuccessful),
        tap(() => {
          this.toastr.success('Die Standard-Auswahl wurde gespeichert');
        })
      );
    },
    { dispatch: false }
  );

  $saveGeneralChoiceFailed = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(GeneralChoiceActions.saveGeneralChoiceFailed),
        tap(() => {
          this.toastr.error('Beim Speichern der Standard-Auswahl ist ein Fehler aufgetreten.');
        })
      );
    },
    { dispatch: false }
  );

  $fetchGeneralChoice = createEffect(() => {
    return this.actions$.pipe(
      ofType(GeneralChoiceActions.fetchGeneralChoice),
      switchMap(() => {
        return this.dataSrv.fetchGeneralChoice();
      }),
      map((generalChoice) => GeneralChoiceActions.fetchGeneralChoiceSuccessful({ generalChoice })),
      catchError((error) => of(GeneralChoiceActions.fetchGeneralChoiceFailed({ error })))
    );
  });

  $fetchGeneralChoiceSuccessful = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(GeneralChoiceActions.fetchGeneralChoiceSuccessful),
        tap(() => {
          this.gcSrv.generalChoicesFetched$.next(true);
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
