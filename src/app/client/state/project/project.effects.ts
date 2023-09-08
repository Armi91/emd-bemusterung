import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, from, map, of, switchMap, tap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { ProjectActions } from './project.actions';
import { Router } from '@angular/router';

@Injectable()
export class ProjectEffects {
  createProject$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectActions.createProject),
      switchMap(
        // { apartmentNumber, code, id, isAccepted, lastUpdated, name }
        ({ apartmentNumber, code, id, isAccepted, lastUpdated, name }) => {
          return from(
            this.dataSrv.createProject({
              apartmentNumber,
              code,
              id,
              isAccepted,
              lastUpdated,
              name,
            })
          ).pipe(
            map(() => ProjectActions.createProjectSuccessful()),
            catchError((err) => of(ProjectActions.createProjectFailed(err)))
          );
        }
      )
    );
  });

  createProjectSuccessful$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(ProjectActions.createProjectSuccessful),
        tap(() => {
          this.router.navigate(['/c/rooms']);
        })
      );
    },
    { dispatch: false }
  );

  fetchProject$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectActions.fetchProject),
      switchMap(() => {
        return this.dataSrv.fetchProject().pipe(
          map((projectData) =>
            ProjectActions.fetchProjectSuccessfull(projectData)
          ),
          catchError((err) => of(ProjectActions.fetchProjectFailed(err)))
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private dataSrv: DataService,
    private router: Router
  ) {}
}
