import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectUserData } from 'src/app/auth/auth.selector';
import { UserData } from 'src/app/interfaces/user-data.interface';
import { AuthService } from 'src/app/auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { FilesDialogComponent } from '../files-dialog/files-dialog.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styles: [
    `
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
    `,
  ],
})
export class SidenavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay()
  );

  user$: Observable<UserData | null> = this.store.select(selectUserData);

  constructor(private breakpointObserver: BreakpointObserver, private store: Store, protected authSrv: AuthService, private dialog: MatDialog) {
    // TODO: Remove this
    this.openDialog();
  }

  openDialog() {
    this.dialog.open(FilesDialogComponent, {
      width: '600px',
      enterAnimationDuration: 200,
      exitAnimationDuration: 200
    })
  }
}
