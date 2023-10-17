import { Component, OnInit } from '@angular/core';
import { AuthError } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorTranslateService } from 'src/app/services/error-translate.service';
import { Store } from '@ngrx/store';
import { login } from '../auth.actions';
import { Observable, Subject, concatMap, map, mergeMap, of, switchMap, takeUntil } from "rxjs";
import { selectAuthError, selectIsAuth, selectIsLoading } from '../auth.selector';
import { ProjectActions } from 'src/app/client/state/project/project.actions';
import { selectProject } from 'src/app/client/state/project/project.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  notifier$ = new Subject();
  loading$: Observable<boolean>;

  loginForm = {
    email: '',
    password: ''
  }

  constructor(
    private toastr: ToastrService,
    private errorTranslateSrv: ErrorTranslateService,
    private store: Store,
    private router: Router
  ) {
    this.loading$ = this.store.select(selectIsLoading);
    this.store.select(selectAuthError).pipe(
      takeUntil(this.notifier$)
    ).subscribe((err) => {
      if (err) {
        console.log(err);
        
        this.toastr.error(this.errorTranslateSrv.getMessage(err.code), 'Błąd logowania');
      }
    })

    this.store.select(selectIsAuth).pipe(
      takeUntil(this.notifier$),
      switchMap((isAuth) => {
        if (isAuth) {
          this.store.dispatch(ProjectActions.fetchProject())
          return this.store.select(selectProject).pipe(
            map(project => {
              if (!!project.id) {
                return 'toRooms';
              } else {
                return 'toInit';
              }
            })
          )
        } else {
          return of('toLogin')
        }
      })
    ).subscribe((whereToGo) => {
      if (whereToGo === 'toRooms') {
        // TODO: Zmienić na /c/rooms
        this.router.navigate(['/c/room/pXEfqIyVWr30kE08fBIB/edit']);
        // this.router.navigate(['/c/rooms']);
        // this.router.navigate(['/c/general']);
        // this.router.navigate(['/c/general-sanitar']);
      } else if (whereToGo === 'toInit') {
        this.router.navigate(['/c/init']);
      }
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.notifier$.next(true);
    this.notifier$.complete();
  }

  login(e: SubmitEvent, form: NgForm) {
    if (form.form.valid) {
      this.store.dispatch(login({...this.loginForm, loading: false}));
    } else {
      form.form.markAllAsTouched();
      this.toastr.error('Wprowadź poprawne dane logowania', 'Błąd logowania');
    }
  }
}
