import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectUserData } from 'src/app/auth/auth.selector';
import { UserData } from 'src/app/interfaces/user-data.interface';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styles: [`
    .sidenav-container {
      height: 100%;
    }
    
    .sidenav {
      width: 200px;
    }
    
    .sidenav .mat-toolbar {
      background: inherit;
    }
    
    .mat-toolbar.mat-primary {
      position: sticky;
      top: 0;
      z-index: 1;
    }
    
  `]
})
export class SidenavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    user$: Observable<UserData | null> = this.store.select(selectUserData);

    constructor(private breakpointObserver: BreakpointObserver, private store: Store) {
    }
}
