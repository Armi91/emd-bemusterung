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
      ofType('[Project] Create Project'),
      switchMap((project) => {
        return from(this.dataSrv.createProject(project)).pipe(
          map((project) => ProjectActions.createProjectSuccessful()),
          catchError((err) => of(ProjectActions.createProjectFailed(err)))
        );
      })
    );
  });

  createProjectSuccessful$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType('[Project] Create Project Successful'),
        tap(() => {this.router.navigate(['/c/general'])})
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private dataSrv: DataService,
    private router: Router
  ) {}
}
