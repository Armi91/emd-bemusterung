import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorTranslateService {
  errorCodes: any = {
    'auth/email-already-in-use': 'Diese Email wird bereits verwendet.',
    'auth/wrong-password': 'Ungültiges Passwort',
    'auth/user-not-found': 'Es wurde kein Nutzer mit dieser Emailadresse gefunden ',
  };

  constructor() {}

  getMessage(code: string) {
    return this.errorCodes[code] || '';
  }
}
