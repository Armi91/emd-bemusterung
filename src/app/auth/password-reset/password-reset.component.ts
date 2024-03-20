import { Component } from '@angular/core';
import { Auth, sendPasswordResetEmail } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styles: [],
})
export class PasswordResetComponent {
  resetForm = {
    email: '',
  };

  constructor(private toastr: ToastrService, private auth: Auth) {}

  resetPassword(e: SubmitEvent, form: NgForm) {
    if (form.form.valid) {
      sendPasswordResetEmail(this.auth, this.resetForm.email)
        .then(() => {
          this.toastr.success('Link mit Passwort -Zurücksetzen wurde versendet.');
        })
        .catch((err) => {
          this.toastr.error(err.message, 'Fehler');
        });
    }
  }
}
