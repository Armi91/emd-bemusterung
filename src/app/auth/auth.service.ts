import { Injectable } from '@angular/core';
import {
  Auth,
  AuthError,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { Observable, switchMap, of, catchError } from 'rxjs';
import { UserData } from '../interfaces/user-data.interface';
import { Store } from '@ngrx/store';
import { setUser } from './auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$!: Observable<UserData | null>;

  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private store: Store,
  ) {
    this.getCurrentUser().subscribe((user) => {
      if (user) {
        this.store.dispatch(setUser({ user }));
      } else {
      }
    });
  }

  getCurrentUser() {
    return authState(this.auth).pipe(
      switchMap((user) => {
        if (user) {
          return <Observable<UserData>>(
            docData(doc(this.firestore, `users/${user.uid}`))
          );
        } else {
          return of(null);
        }
      })
    );
  }

  async register(userForm: UserData) {
    return createUserWithEmailAndPassword(
      this.auth,
      userForm.email,
      userForm.password!
    )
      .then((userCredential) => {
        delete userForm.password;
        const userRef = doc(this.firestore, `users/${userCredential.user.uid}`);
        return setDoc(userRef, { ...userForm, uid: userCredential.user.uid });
      })
      .catch((err: AuthError) => {
        console.log(err.code);
        return err;
      });
  }

  loginWithEmailAndPassword(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  getUserData(uid: string): Observable<UserData> {
    return <Observable<UserData>>docData(doc(this.firestore, `users/${uid}`));
  }

  logout() {
    signOut(this.auth);
  }
}
