import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorTranslateService {

  errorCodes: any = {
    'auth/email-already-in-use': 'Na ten adres email jest już założone konto w serwisie',
    'auth/wrong-password': 'Hasło niepoprawne',
    'auth/user-not-found': 'Nie znaleziono użytkownika o podanym adresie mailowym'
  }

  constructor() { }

  getMessage(code: string) {
    return this.errorCodes[code] || '';
  }
}
