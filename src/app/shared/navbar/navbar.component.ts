import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logout } from 'src/app/auth/auth.actions';
import { UserData } from 'src/app/interfaces/user-data.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent {
  isMenuCollapsed = true;
  user$: Observable<UserData | null> | null = null;

  constructor(
    private store: Store,
    // protected priceSrv: PriceService
  ) { }

  logout() {
    this.store.dispatch(logout())
  }

}
