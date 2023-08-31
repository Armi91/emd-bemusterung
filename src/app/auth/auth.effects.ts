import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, logout, removeUser, loginFailed, loginSuccessful } from './auth.actions';
import { map, mergeMap, switchMap, from, tap, catchError, of } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';



@Injectable()
export class AuthEffects {

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(login),
      mergeMap(({email, password}) => {
        return from(this.authSrv.loginWithEmailAndPassword(email, password)).pipe(
          switchMap(({user}) => {
            return this.authSrv.getUserData(user.uid)
          }),
          map((userData) => loginSuccessful({user: userData, loading: false})),
          catchError((error) => of(loginFailed({error, loading: false})))
        )
      })
    )
  })

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(logout),
      map(() => removeUser()),
      tap(() => {
        this.authSrv.logout();
        this.router.navigate(['/auth/login'])
      })
    )
  })

  constructor(
    private actions$: Actions,
    private authSrv: AuthService,
    private router: Router) {}
}
