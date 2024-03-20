import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { ErrorTranslateService } from 'src/app/services/error-translate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {
  isLoading = false;
  // @ViewChild('form', {static: false}) form: any;

  registerForm = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    city: '',
    street: '',
    postalCode: '',
  };

  constructor(
    private authSrv: AuthService,
    private toastr: ToastrService,
    private errorTranslate: ErrorTranslateService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  validateForm(form: NgForm): boolean {
    console.log(form);
    if (form.valid) {
      return true;
    } else {
      form.form.markAllAsTouched();
      this.toastr.error('Fülle alle Felder korrekt aus.', 'Fehler bei Login-Formular');
      return false;
    }
  }

  sendForm(e: SubmitEvent, form: NgForm) {
    if (this.validateForm(form)) {
      this.isLoading = true;
      this.authSrv.register(this.registerForm).then((err?) => {
        console.log(err);
        if (err) {
          this.toastr.error(this.errorTranslate.getMessage(err.code), 'Felher bei Registrierung');
        } else {
          this.router.navigate(['/c/init']);
        }
        this.isLoading = false;
      });
    }
  }
}
