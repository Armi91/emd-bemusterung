import { Component, OnInit } from '@angular/core';
import { AuthError } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorTranslateService } from 'src/app/services/error-translate.service';
import { Store } from '@ngrx/store';
import { login } from '../auth.actions';
import { Observable, Subject, takeUntil } from "rxjs";
import { selectAuthError, selectIsAuth, selectIsLoading } from '../auth.selector';

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
        this.toastr.error(this.errorTranslateSrv.getMessage(err.code), 'Błąd logowania');
      }
    })

    this.store.select(selectIsAuth).pipe(
      takeUntil(this.notifier$)
    ).subscribe((isAuth) => {
      if (isAuth) {
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
